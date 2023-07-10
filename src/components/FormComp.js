import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Forms() {
const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }

    setValidated(true);
};

return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-6">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mario"
                />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Obinna"
            />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend" style={{ color: 'white', backgroundColor: 'green' }}>@</InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
            />
            <Form.Control.Feedback type="invalid">
                Please choose a username.
            </Form.Control.Feedback>
        </InputGroup>
        </Form.Group>
    </Row>
    <Row className="mb-3 pt-6">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid state.
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
            </Form.Control.Feedback>
        </Form.Group>
    </Row>
            <Form.Group className="mb-3">
                <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                />
            </Form.Group>
    <Button type="submit" style={{ color: 'white', backgroundColor: 'green' }}>Submit Form</Button>
    </Form>
);
}

export default Forms;