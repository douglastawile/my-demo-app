import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    let newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // If no errors, submit the form (replace with your actual submission logic)
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Container className="signup-container">
      <Row>
        <Col sm={6} className="mx-auto my-2">
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center">Login</h2>
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link to={"/auth/signup"} className=" text-decoration-none ">
                  Signup here
                </Link>
              </p>

              {Object.keys(errors).length > 0 && (
                <Alert variant="danger">
                  <ul className="mb-0">
                    {Object.values(errors).map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* Email Input */}
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Email:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                {/* Password Input */}
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Password:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
