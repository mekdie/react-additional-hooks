import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";

import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
function App() {
    return (
        <Container className="mt-5">
            <UseRefExample1 />
            <UseRefExample2 />
            <UseRefExample3 />
        </Container>
    );
}

export default App;
