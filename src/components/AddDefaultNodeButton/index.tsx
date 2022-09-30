import { useReactFlow } from 'react-flow-renderer';

export function AddDefaultNodeButton() {
	const reactFlowInstance = useReactFlow();

	function handleButtonClick() {
		reactFlowInstance.addNodes({
			id: crypto.randomUUID(),
			type: 'defaultNode',
			data: {
				label: 'Default node ' + Math.random() * 10
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
			Add Default Node
		</button>
	);
}
