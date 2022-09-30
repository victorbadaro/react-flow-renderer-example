import styled from 'styled-components';

export const DefaultNodeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	min-width: 50px;
	height: 20px;
	border-radius: 40px;
	background-color: #fff;
	color: #000;

	.node-shape {
		border-radius: 4px;
	}

	span {
		cursor: pointer;
	}
`;
