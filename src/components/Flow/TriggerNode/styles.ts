import styled from 'styled-components';

export const TriggerNodeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	min-width: 50px;
	height: 20px;
	border-radius: 40px;
	background-color: green;
	color: #fff;

	.node-shape {
		border-radius: 4px;
	}

	span {
		cursor: pointer;
	}
`;
