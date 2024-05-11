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

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
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
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
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
              <h2 className="text-center">Sign Up</h2>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/auth/login" className=" text-decoration-none ">
                  Login here
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
                {/* Name Input */}
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Name:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

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
                      placeholder="Enter your email"
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

                {/* Confirm Password Input */}
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Confirm Password:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
