import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = props => {
	return (
		<Wrapper>
			<Links>
				<Link to="/trade">Trade</Link>
				<Link to="/documentation">Documentation</Link>
				<Link to="/api">API</Link>
			</Links>
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.nav``;

const Links = styled.ul``;

const Link = styled(NavLink)`
	color: #ffffff;
	text-decoration: none;
	font-size: 20px;
	margin-right: 20px;
`;

export default Navigation;
