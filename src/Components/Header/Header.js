import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";
import Balance from "./Balance";
import PNL from "./PNL";
import Utilities from "./Utilities";

const Header = props => {
	return (
		<Wrapper>
			<Logo exact to="/">
				onederx
			</Logo>

			<Navigation />
			<Balance />
			<PNL />
			<Utilities />
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.header`
	padding-left: 20px;
	padding-right: 20px;
	background: #000000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 50px;
`;

const Logo = styled(NavLink)`
	color: #2068ff;
	font-size: 50px;
	font-weight: 600;
	text-decoration: none;
`;

export default Header;
