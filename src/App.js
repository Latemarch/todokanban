import styled from "styled-components";
import "./App.css";
import Nav from "./Nav";

const Wapper = styled.div`
`;

function App() {
	return (
		<div className="App dev">
			<Wapper>
				<Nav />
			</Wapper>
		</div>
	);
}

export default App;
