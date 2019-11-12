import React, { useMemo } from "react";
import styled from "styled-components";
import { VictoryLine } from "victory";

const PNL = props => {
	const btc = 567.54;
	const data = [
		{ quarter: 1, earnings: 13000 },
		{ quarter: 2, earnings: 8900 },
		{ quarter: 3, earnings: 780 },
		{ quarter: 4, earnings: 4500 },
	];

	return (
		<Wrapper>
			<Title>Unrealised PnL</Title>

			<div style={{ display: "flex", alignItems: "center" }}>
				<VictoryLine
					data={data}
					x="quarter"
					y="earnings"
					style={{
						data: { stroke: "lightgreen" },
						parent: { width: 50 },
					}}
				/>
				<BTC>
					{btc} <span style={{ color: "darkgreen" }}>BTC</span>
				</BTC>
			</div>
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.div``;

const Title = styled.h2`
	font-weight: 400;
	font-size: 17px;
`;

const BTC = styled.p`
	color: green;
	font-size: 17px;
`;

export default PNL;
