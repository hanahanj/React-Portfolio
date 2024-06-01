import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({ name: false, email: false, message: false });
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() === '') {
      setFieldErrors({ ...fieldErrors, [name]: true });
    } else {
      setFieldErrors({ ...fieldErrors, [name]: false });
      if (name === 'email') {
        validateEmail(value);
      }
    }
  };

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      setFieldErrors({ ...fieldErrors, email: true });
    } else {
      setEmailError('');
      setFieldErrors({ ...fieldErrors, email: false });
    }
  };

  const validateForm = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false || Object.values(formData).some(value => value.trim() === '') || emailError) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setFieldErrors({
        name: !formData.name.trim(),
        email: !formData.email.trim() || emailError,
        message: !formData.message.trim(),
      });
      return;
    }

    alert('Form submitted successfully!');
    // Add your form submission logic here
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>If interested in collaborating, please reach out!</p>
      <Form id="contactForm" noValidate validated={validated} onSubmit={validateForm}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            isInvalid={fieldErrors.name}
          />
          <Form.Control.Feedback type="invalid">Name is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            isInvalid={fieldErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {emailError || 'Email is required!'}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            isInvalid={fieldErrors.message}
          />
          <Form.Control.Feedback type="invalid">Message is required!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </div>
  );
}
