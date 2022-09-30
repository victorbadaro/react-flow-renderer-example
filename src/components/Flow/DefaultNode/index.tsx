import { Handle, NodeProps, Position } from 'react-flow-renderer';
import { DefaultNodeContainer } from './styles';

export function DefaultNode({ data }: NodeProps) {
	return (
		<DefaultNodeContainer>
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
		</DefaultNodeContainer>
	);
}
