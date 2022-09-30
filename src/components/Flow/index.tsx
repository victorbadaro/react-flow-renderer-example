import { FormEvent, useState } from 'react';
import ReactFlowRenderer, { Background, Node } from 'react-flow-renderer';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'First Node'
    },
    position: {
      x: 0,
      y: 0
    }
  }
];

export function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [newNodeLabel, setNewNodeLabel] = useState('');

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const newNode: Node = {
      id: String(nodes.length + 1),
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
      <ReactFlowRenderer
        defaultNodes={nodes}
        style={{
          height: '500px'
        }}
      >
        <Background />
      </ReactFlowRenderer>

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