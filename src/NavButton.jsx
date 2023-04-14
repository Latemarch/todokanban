import styled from "styled-components";

const Button = styled.button`
	display: flex;
	background-color: red;
	all: unset;
	color: #6a737c;
	&:hover {
		color: #0c0d0e;
		cursor: pointer;
	}
`;
const ButtonName = styled.p`
	display: flex;
	padding-left: 30px;
`;
export default function NavButton({ name }) {
	return (
		<Button>
			<ButtonName>{name}</ButtonName>
		</Button>
	);
}
