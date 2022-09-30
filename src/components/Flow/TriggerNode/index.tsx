import { Handle, NodeProps, Position } from 'react-flow-renderer';
import { TriggerNodeContainer } from './styles';

export function TriggerNode({ data }: NodeProps) {
	return (
		<TriggerNodeContainer>
			<div className="node-shape">
				<Handle
					type="source"
					position={Position.Left}
				/>
				<span>{data.label}</span>
				<Handle
					type="target"
					position={Position.Right}
				/>
			</div>
		</TriggerNodeContainer>
	);
}
