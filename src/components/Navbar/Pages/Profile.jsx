import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Dummy user object with a photo
      setUser({ email, name, phone, photo: 'https://via.placeholder.com/150' });
      setError('');
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password && name && phone) {
      // Dummy user object with a photo
      setUser({ email, name, phone, photo: 'https://via.placeholder.com/150' });
      setError('');
    } else {
      setError('Please fill all fields');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {error && <Alert variant="danger">{error}</Alert>}
          {user ? (
            <Card className="p-4 shadow-sm text-center profile-card">
              <Image src={user.photo} roundedCircle className="profile-pic mb-3" />
              <Card.Title>Welcome, {user.name}!</Card.Title>
              <Card.Body>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </Card.Body>
            </Card>
          ) : (
            <Card className="p-4 shadow-sm form-card">
              <Card.Title>{isLogin ? 'Login' : 'Sign Up'}</Card.Title>
              <Form onSubmit={isLogin ? handleLogin : handleSignup}>
                {!isLogin && (
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                )}

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {!isLogin && (
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </Form.Group>
                )}

                <Button variant="primary" type="submit" className="w-100">
                  {isLogin ? 'Login' : 'Sign Up'}
                </Button>
              </Form>
              <p className="mt-3">
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                <Button variant="link" onClick={toggleForm}>
                  {isLogin ? 'Sign Up' : 'Login'}
                </Button>
              </p>
            </Card>
          )}
        </Col>
      </Row>

      <style>{`
        .profile-card {
          animation: fadeIn 0.5s;
        }

        .form-card {
          transition: transform 0.2s ease;
        }

        .form-card:hover {
          transform: scale(1.02);
        }

        .profile-pic {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }

        .alert {
          animation: fadeIn 0.5s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
};

export default Profile;
