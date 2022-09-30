import { FormEvent, useCallback, useMemo, useState } from 'react';
import ReactFlow, { addEdge, Background, Connection, Edge, Node, useEdgesState, useNodesState } from 'react-flow-renderer';
import { DefaultNode } from './DefaultNode';
import { TriggerNode } from './TriggerNode';

const initialNodes: Node[] = [
	{
		id: '1',
		type: 'defaultNode',
		data: {
			label: 'First Node'
		},
		position: {
			x: 0,
			y: 0
		},
	},
	{
		id: '2',
		type: 'triggerNode',
		data: {
			label: 'Second Node'
		},
		position: {
			x: 100,
			y: 100
		},
	}
];
const initialEdges: Edge[] = [
	{
		id: crypto.randomUUID(),
		source: '1',
		target: '2'
	}
];

export function Flow() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [newNodeLabel, setNewNodeLabel] = useState('');

	const nodeTypes = useMemo(() => ({
		defaultNode: DefaultNode,
		triggerNode: TriggerNode
	}), []);

	const onConnect = useCallback((param: Edge | Connection) => {
		setEdges((previousEdges) => addEdge(param, previousEdges));
	}, [setEdges]);

	const onNodesDelete = useCallback((nodesToBeRemoved: Node[]) => {
		const nodeIdsToBeRemoved = nodesToBeRemoved.map((node) => node.id);
		const filteredNodes = nodes.filter((node) => !nodeIdsToBeRemoved.includes(node.id));

		setNodes(filteredNodes);
	}, [nodes]);

	const onEdgesDelete = useCallback((edgesToBeRemoved: Edge[]) => {
		const edgeIdsToBeRemoved = edgesToBeRemoved.map((edge) => edge.id);
		const filteredEdges = edges.filter((edge) => !edgeIdsToBeRemoved.includes(edge.id));

		setEdges(filteredEdges);
	}, []);

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();

		const newNode: Node = {
			id: crypto.randomUUID(),
			data: {
				label: newNodeLabel
			},
			position: {
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight
			}
		};

		setNodes((previousNodes) => [ ...previousNodes, newNode ]);
		setNewNodeLabel('');
	}

	return (
		<>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onNodesDelete={onNodesDelete}
				onEdgesDelete={onEdgesDelete}
				onConnect={onConnect}
				connectionLineStyle={{
					stroke: 'red'
				}}
				nodeTypes={nodeTypes}
				fitView
				deleteKeyCode="Delete"
				style={{
					height: '500px'
				}}
			>
				<Background />
			</ReactFlow>

			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="New node label here..."
					onChange={(event) => setNewNodeLabel(event.target.value)}
					value={newNodeLabel}
				/>

				<button type="submit">Add new node</button>
			</form>
		</>
	);
}
