import { Container } from '@/components/Container/styles';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
	height: 80px;
	background-color: #222;

	${Container} {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;

		nav {
			a {
				position: relative;

				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 0;
					height: 2px;
					border-radius: 2px;
					background-color: #fff;
					transition: width 200ms;
				}

				&:hover::after {
					width: 100%;
				}

				& + a {
					margin-left: 12px;
				}
			}
		}
	}
`;
