import * as S from './styles';
import { ContainerProps } from './types';

export function Container({ children, ...rest }: ContainerProps) {
	return (
		<S.Container {...rest}>
			{children}
		</S.Container>
	);
}
