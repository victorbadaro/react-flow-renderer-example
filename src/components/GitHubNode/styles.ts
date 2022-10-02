import styled from 'styled-components';

export const GitHubNodeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 12px;
	padding: 8px 16px;
	height: 24px;
	border: 1px solid blueviolet;
	border-radius: 24px;
	background-color: #111;
	color: #fff;

	svg {
		filter: brightness(0.4);
	}

	span {
		font-size: 14px;
	}
`;
