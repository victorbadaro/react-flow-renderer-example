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
  return (
    <>
      <ReactFlowRenderer
        defaultNodes={initialNodes}
        style={{
          height: '500px',
          backgroundColor: '#222'
        }}
      >
        <Background />
      </ReactFlowRenderer>
    </>
  );
}