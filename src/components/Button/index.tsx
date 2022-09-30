import { useReactFlow } from 'react-flow-renderer';

export function Button() {
	const reactFlowInstance = useReactFlow();

	function handleButtonClick() {
		console.log(reactFlowInstance);
		console.log(reactFlowInstance.getNodes());
		console.log(reactFlowInstance.getEdges());
		console.log(reactFlowInstance.toObject());
	}

	return (
		<button
			type="button"
			onClick={handleButtonClick}
		>
			Get flow
		</button>
	);
}
