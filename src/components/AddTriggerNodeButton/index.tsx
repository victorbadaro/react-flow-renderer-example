import { useReactFlow } from 'react-flow-renderer';

export function AddTriggerNodeButton() {
	const reactFlowInstance = useReactFlow();

	function handleButtonClick() {
		reactFlowInstance.addNodes({
			id: crypto.randomUUID(),
			type: 'triggerNode',
			data: {
				label: 'Trigger node ' + Math.random() * 10
			},
			position: {
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight
			}
		});
	}

	return (
		<button
			type="button"
			onClick={handleButtonClick}
		>
			Add Trigger Node
		</button>
	);
}
