import React from "react";
import styled from "styled-components";

import { numberWithCommas } from "../../Misc/helpers";

// Assume that the current balance, margin and used are coming from props

const Balance = props => {
	const currentBalance = 60000;
	const margin = 10350;
	const used = 49650;

	return (
		<Wrapper>
			<CurrentBalanceWrapper>
				<Title>Balance {numberWithCommas(currentBalance)} BTC</Title>

				<ButtonWrapper>
					<Button>Deposit</Button>
					<Button>Withdraw</Button>
				</ButtonWrapper>
			</CurrentBalanceWrapper>

			<MarginUsedWrapper>
				<Title>Margin</Title>
				<Title>Used</Title>
			</MarginUsedWrapper>

			<Values>
				<div>
					{numberWithCommas(used)} <span style={{ color: "#5C5F5F" }}>BTC</span>
				</div>

				<div>
					{numberWithCommas(margin)} <span style={{ color: "#5C5F5F" }}>BTC</span>
				</div>
			</Values>
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const CurrentBalanceWrapper = styled.div``;

const Title = styled.h2`
	color: #d8d8d5;
	font-weight: 400;
	font-size: 15px;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
	background: none;
	border: none;
	color: #ffffff;
	font-size: 15px;
	margin-right: 20px;
`;

const MarginUsedWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Values = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 15px;
	margin-left: 10px;
`;

export default Balance;
