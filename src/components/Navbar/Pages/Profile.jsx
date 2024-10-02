import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

const districts = [
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara",
  "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli",
  "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
  "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar",
  "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg",
  "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
];

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email, name, phone, district, photo: photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/150' });
      setError('');
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password && name && phone && district) {
      setUser({ email, name, phone, district, photo: photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/150' });
      setError('');
    } else {
      setError('Please fill all fields');
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
    setDistrict('');
    setPhoto(null);
  };

  const goToHomePage = () => {
    navigate('/'); // Redirect to the main homepage (adjust this route if needed)
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {error && <Alert variant="danger">{error}</Alert>}
          {user ? (
            <Card className="p-4 shadow-sm text-center profile-card">
              <Image src={user.photo} roundedCircle className="profile-pic mb-3" />
              <Card.Title className="profile-title">Welcome, {user.name}!</Card.Title>
              <Card.Body>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>District:</strong> {user.district}</p>
                <Button variant="primary" className="home-button" onClick={goToHomePage}>
                  Home
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Card className="p-4 shadow-sm form-card">
              <Card.Title className="form-title">{isLogin ? 'Login' : 'Sign Up'}</Card.Title>
              <Form onSubmit={isLogin ? handleLogin : handleSignup}>
                {!isLogin && (
                  <>
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

                    <Form.Group controlId="formBasicDistrict">
                      <Form.Label>District</Form.Label>
                      <Form.Control
                        as="select"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        required
                      >
                        <option value="">Select your district</option>
                        {districts.map((district, index) => (
                          <option key={index} value={district}>{district}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhoto">
                      <Form.Label>Profile Photo</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        required
                      />
                      {photo && <Image src={URL.createObjectURL(photo)} rounded className="mt-3" style={{ width: '100px', height: '100px' }} />}
                    </Form.Group>
                  </>
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

                <Button variant="primary" type="submit" className="w-100 submit-button">
                  {isLogin ? 'Login' : 'Sign Up'}
                </Button>
              </Form>
              <p className="mt-3 toggle-form-text">
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                <Button variant="link" onClick={toggleForm} className="toggle-form-button">
                  {isLogin ? 'Sign Up' : 'Login'}
                </Button>
              </p>
            </Card>
          )}
        </Col>
      </Row>

      {/* Same styles as provided before */}
    </Container>
  );
};

export default Profile;
