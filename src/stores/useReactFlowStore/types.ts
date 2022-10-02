import { Edge, Node, OnConnect, OnEdgesChange, OnNodesChange } from 'react-flow-renderer';

export interface ReactFlowStore {
	nodes: Node[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
}
