import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const UseRefExample1 = () => {
    //when we change a ref value, it does not re render the component as we do in states
    const inputRef = useRef();
    const paraRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value); //get the value
        inputRef.current.value = "Hello";
        // inputRef.current.style.backgroundColor = "red";
        paraRef.current.innerText = "Psyduck";
    };
    return (
        <div>
            {/* Normal bootstrap equivalent */}
            {/* <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control mb-2" />
                <Button variant="primary" type="submit">
                    {" "}
                    Submit{" "}
                </Button>
            </form> */}
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={inputRef} type="text" className="mb-2" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p onClick={() => inputRef.current.focus()} ref={paraRef}>
                    {" "}
                </p>
            </Form>
        </div>
    );
};

export default UseRefExample1;
