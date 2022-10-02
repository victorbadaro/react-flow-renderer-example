import styled from 'styled-components';

export const ToolBoxContainer = styled.aside`
	position: absolute;
	top: 5%;
	left: 16px;
	width: 50px;
	height: 90%;
	border-radius: 8px;
	overflow: hidden;
	z-index: 4;
	background-color: #111;

	button {
		padding: 16px 0;
		width: 100%;
		border: none;
		background-color: transparent;

		transition: background-color 200ms;

		&:hover {
			background-color: #000;
		}
	}
`;
