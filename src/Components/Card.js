import React, { Component, Fragment } from "react";
import styled from "styled-components";

class Card extends Component {
	initialState = {
		editing: false,
		firstName: "Alex",
		lastName: "Salio",
		countryOfResidence: "Ukraine UA",
		password: "Some Random Password _ +_{",
		twoFactorAuth: false,
	};

	state = { ...this.initialState };

	toggle = _ => this.setState(({ editing }) => ({ editing: !editing }));

	handleCancel = _ =>
		this.setState(_ => ({
			firstName: "Alex",
			lastName: "Salio",
			countryOfResidence: "Ukraine UA",
			editing: false,
			password: "",
		}));

	handleChange = e => {
		const value = e.target.value;

		this.setState({ [e.target.name]: value });
	};

	handleUpdate = ({ ...newState }, e) => {
		this.setState(_ => ({ ...newState, editing: false }));
	};

	handleTwoFactorAuth = _ =>
		this.setState(({ twoFactorAuth }) => ({ twoFactorAuth: !twoFactorAuth }));

	render() {
		const { cardType } = this.props;
		const {
			editing,
			firstName,
			lastName,
			countryOfResidence,
			password,
			twoFactorAuth,
		} = this.state;
		const changeText = editing ? "Cancel" : "Change";

		switch (cardType) {
			// User info
			case "userInfo":
			case "UserInfo":
			case "user_info":
				return (
					<Wrapper editing={editing}>
						<CardHead>
							<Title>User Info</Title>
							<Button editing={editing} onClick={this.toggle}>
								{changeText}
							</Button>
						</CardHead>

						<CardBody>
							<Field>
								{editing ? (
									<Fragment>
										<Placeholder>First Name</Placeholder>
										<Value
											type="text"
											name="firstName"
											onChange={this.handleChange}
											value={firstName}
											autoComplete="off"
											autoCapitalize
										/>

										<Placeholder>Last Name</Placeholder>
										<Value
											name="lastName"
											type="text"
											onChange={this.handleChange}
											value={lastName}
											autoComplete="off"
											autoCapitalize
										/>
									</Fragment>
								) : (
									<Fragment>
										<Placeholder>Name</Placeholder>

										<DisplayValue>
											{firstName} {lastName}
										</DisplayValue>
									</Fragment>
								)}
							</Field>

							<Field>
								<Placeholder>Country of Residence</Placeholder>
								{editing ? (
									<Value
										name="countryOfResidence"
										type="text"
										onChange={this.handleChange}
										value={countryOfResidence}
										autoComplete="off"
									/>
								) : (
									<DisplayValue>{countryOfResidence}</DisplayValue>
								)}
							</Field>

							{editing ? (
								<UpdateButton
									onClick={_ => this.handleUpdate({ firstName, lastName, countryOfResidence })}>
									Update
								</UpdateButton>
							) : null}
						</CardBody>

						{editing ? <Overlay onClick={this.toggle} /> : null}
					</Wrapper>
				);

			// Login
			case "Log In":
			case "logIn":
			case "login":
			case "LogIn":
				return (
					<Wrapper editing={editing}>
						<CardHead>
							<Title>Log In</Title>
							<Button editing={editing} onClick={this.toggle}>
								{changeText}
							</Button>
						</CardHead>

						<CardBody>
							<Placeholder>Password</Placeholder>
							{editing ? (
								<Field>
									<Value
										name="password"
										type="password"
										value={password}
										onChange={this.handleChange}
									/>
								</Field>
							) : (
								<Field>
									<Value type="password" value={password} disabled />
								</Field>
							)}

							{editing ? (
								<UpdateButton
									onClick={_ => this.handleUpdate({ firstName, lastName, countryOfResidence })}
									onKeyDown={e =>
										this.handleUpdate({ firstName, lastName, countryOfResidence }, e)
									}>
									Update
								</UpdateButton>
							) : null}

							{editing ? <Overlay onClick={this.toggle} /> : null}
						</CardBody>
					</Wrapper>
				);

			// Security
			case "security":
			case "Security":
				return (
					<Wrapper className={editing ? "editing" : ""}>
						<CardHead>
							<Title>Security</Title>
						</CardHead>

						<CardBody>
							<Placeholder>Two-Factor Authentication</Placeholder>
							<span style={{ fontSize: "20px" }}>{twoFactorAuth ? "Enabled" : "Disabled"}</span>

							<SecurityButton onClick={this.handleTwoFactorAuth}>
								{twoFactorAuth ? "Disable" : "Enable"}
							</SecurityButton>
						</CardBody>
					</Wrapper>
				);

			default:
				return <Wrapper></Wrapper>;
		}
	}
}

// Styled components
const Wrapper = styled.div`
	margin-bottom: 50px;
	margin-right: 40px;
	background: ${({ editing }) => (editing ? "#222224" : "null")};
	padding: 30px;
	border-radius: 3px;
	z-index: 4;
	width: ;
`;

const CardHead = styled.div`
	display: flex;
	align-items: flex-end;
`;

const Title = styled.h1`
	font-size: 30px;
`;

const Button = styled.button`
	margin-left: 20px;
	background: none;
	border: none;
	color: rgb(27, 80, 185);
	font-size: 15px;
	margin-bottom: 5px;
	outline: none;
	cursor: pointer;
`;

const CardBody = styled.div``;

const Field = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Placeholder = styled.h3`
	font-size: 16px;
	color: #7f8384;
	font-weight: 400;
`;

const Value = styled.input`
	font-size: 20px;
	display: block;
	background: none;
	border: none;
	color: white;
	padding-bottom: 3px;
	margin-bottom: 30px;
	outline: 0;
	border-bottom: 1px solid #373739;
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

	&:focus {
		border-bottom: 1px solid #ffffff;
	}
`;

const UpdateButton = styled.button`
	width: 100%;
	display: block;
	cursor: pointer;
	background: #2068ff;
	border: none;
	border-radius: 3px;
	height: 50px;
	color: white;
	font-size: 15px;
`;

const SecurityButton = styled.button`
	background: none;
	border: none;
	font-size: 16px;
	color: white;
	margin-left: 20px;
	outline: none;
	color: #2068ff;
	cursor: pointer;
`;

const DisplayValue = styled.h3`
	font-size: 20px;
	font-weight: 400;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000000;
	opacity: 0.3;
	z-index: -1;
	overflow: hidden;
`;

export default Card;
