import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Utilities = props => {
	const email = "thebesttrader@mail.com";

	return (
		<Wrapper>
			<Title>{email}</Title>

			<Buttons>
				<Button to="/settings" activeClassName="settingsActive">
					Settings
				</Button>
				<Button to="/">Logout</Button>
			</Buttons>
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.div``;

const Title = styled.h2``;

const Buttons = styled.div``;

const Button = styled(NavLink)`
	color: #ffffff;
	font-size: 15px;
	margin-right: 10px;
	text-decoration: none;

	&.settingsActive {
		color: #1b58d8;
		padding-bottom: 4px;
		border-bottom: 2px solid #1b58d8;
	}
`;

export default Utilities;
