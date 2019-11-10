import React from "react";
import styled from "styled-components";

import Card from "../Components/Card";

const Settings = props => {
	return (
		<Container>
			<Wrapper>
				<Title>Account Settings</Title>

				<Cards>
					<Card cardType="userInfo" />
					<Card cardType="logIn" />
					<Card cardType="Security" />
				</Cards>
			</Wrapper>
		</Container>
	);
};

// Styled components
const Container = styled.div`
	max-width: 58%;
	margin: 0 auto;
	padding: 0 10px;
`;

const Wrapper = styled.div``;

const Title = styled.h1`
	font-size: 50px;
	margin-bottom: 30px;
`;

const Cards = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export default Settings;
