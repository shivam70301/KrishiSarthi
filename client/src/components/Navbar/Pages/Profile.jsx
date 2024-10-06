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
      setUser({ email, name, phone, district, photo: photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/100' });
      setError('');
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password && name && phone && district) {
      setUser({ email, name, phone, district, photo: photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/100' });
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
    navigate('/'); // Redirect to the main homepage
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {error && <Alert variant="danger">{error}</Alert>}
          {user ? (
            <Card className="p-4 shadow-sm text-center profile-card">
              <div className="image-container">
                <Image src={user.photo} roundedCircle className="profile-pic mb-3" />
              </div>
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
                      {photo && <Image src={URL.createObjectURL(photo)} rounded className="mt-3" style={{ width: '80px', height: '80px' }} />}
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

      <style>{`
       body {
          background-color: #cae4c5; /* Change to your desired background color */
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
        }

        .profile-card {
          animation: fadeIn 0.5s;
          background-color: #f8f9fa; /* Lighter background */
          transition: transform 0.2s ease, background-color 0.3s;
        }

        .profile-card:hover {
          transform: scale(1.02); /* Scale up on hover */
          background-color: #e2e6ea; /* Change background on hover */
        }

        .form-card {
          transition: transform 0.2s ease;
        }

        .form-card:hover {
          transform: scale(1.02); /* Scale up on hover */
        }

        .image-container {
          display: flex;
          justify-content: center; /* Centers the image horizontally */
        }

        .profile-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #333;
          font-family: 'Roboto', sans-serif;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #007bff;
          font-family: 'Arial', sans-serif;
        }

        .profile-pic {
          width: 250px; /* Adjusted profile image size */
          height: 250px;
          object-fit: cover;
          margin: 0 auto; /* Center the image */
        }

        .alert {
          animation: fadeIn 0.5s;
        }

        .submit-button {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0056b3; /* Darker blue on hover */
          transform: scale(1.05); /* Slightly scale up on hover */
        }

        .toggle-form-button {
          font-weight: bold;
          color: #007bff;
          text-decoration: underline; /* Underline link */
          transition: color 0.3s;
        }

        .toggle-form-button:hover {
          color: #0056b3; /* Darker blue on hover */
        }

        .home-button {
          margin-top: 20px;
          background-color: #28a745; /* Green */
          border: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .home-button:hover {
          background-color: #218838; /* Darker green on hover */
          transform: scale(1.05); /* Slightly scale up on hover */
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
