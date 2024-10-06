import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from the backend API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/notifications'); // Use your backend URL
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();

    // Staggered fade-in animation for notifications
    const timer = setTimeout(() => {
      document.querySelectorAll('.notification-card').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`; // Stagger effect
        el.classList.add('fade-in');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="notification-page my-5">
      <Row className="text-center mb-4">
        <Col>
          <h2 className="page-title">Notifications</h2>
          <p className="page-subtitle">Stay updated with the latest news and alerts for farmers</p>
        </Col>
      </Row>
      <Row className="flex-column align-items-center">
        {notifications.length === 0 ? (
          <p>No notifications available</p>
        ) : (
          notifications.map((notification) => (
            <Col key={notification._id} md={8} className="mb-4">
              <Card className="notification-card shadow-lg">
                <Card.Body>
                  <Card.Title className="notification-title">{notification.title}</Card.Title>
                  <Card.Text className="notification-description">{notification.description}</Card.Text>
                  <Card.Footer className="text-muted notification-date">
                    {new Date(notification.date).toLocaleDateString()}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      {/* CSS styles */}
      <style jsx="true">{`
        .notification-page {
          animation: slideIn 1s ease-in-out;
        }
           body {
          background-color: #cae4c5; /* Change to your desired background color */
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
        }

        .page-title {
          font-size: 2.5rem;
          color: #2c3e50;
          text-transform: uppercase;
          animation: titleAnimation 1.2s ease-in-out forwards;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: #555;
          animation: subtitleAnimation 1.4s ease-in-out forwards;
        }

        .notification-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-in-out;
          border-radius: 10px;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff, #e6f7e7);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .notification-card:hover {
          transform: translateY(0) scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .notification-card.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .notification-title {
          font-size: 1.6rem;
          color: #007bff;
        }

        .notification-description {
          font-size: 1.1rem;
          color: #333;
        }

        .notification-date {
          font-size: 0.9rem;
          text-align: right;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleAnimation {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes subtitleAnimation {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Container>
  );
};

export default Notifications;
