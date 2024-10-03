import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import Animate.css for animations

const events = [
  {
    title: 'National Agriculture Fair 2024',
    location: 'Delhi, India',
    date: 'March 15-18, 2024',
    description:
      'A national-level event focusing on innovative agricultural techniques, machinery, and organic farming solutions.',
    image: 'src/assets/agri_fair.jpg',
  },
  {
    title: 'International Organic Farming Expo',
    location: 'Mumbai, India',
    date: 'April 22-24, 2024',
    description:
      'An international expo highlighting organic farming practices and sustainability.',
    image: 'src/assets/organic_expo.jpg',
  },
  {
    title: 'AgriTech Summit 2024',
    location: 'Bangalore, India',
    date: 'May 10-12, 2024',
    description:
      'A summit that brings together agricultural innovators and tech enthusiasts to explore the future of farming.',
    image: 'src/assets/agritech_summit.jpg',
  },
  // Add more events as needed
];

const FairsAndEvents = () => {
  return (
    <div className="container mt-5">
      {/* Inline Styles for Custom CSS */}
      <style>{`
        .page-heading {
          font-size: 3rem;
          font-weight: bold;
          color: #007bff; /* Bootstrap primary color */
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }
        .list-group-item {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .list-group-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        img {
          border-radius: 8px;
        }
        .btn-primary {
          background-color: #28a745; /* Custom button color */
          border: none;
        }
        .btn-primary:hover {
          background-color: #218838;
        }
      `}</style>

      {/* Animated Heading */}
      <h2 className="text-center mb-5 animate__animated animate__bounce page-heading">
        Upcoming Fairs and Events
      </h2>

      {/* Event List */}
      <div className="list-group">
        {events.map((event, index) => (
          <div
            className="list-group-item mb-4 p-3 animate__animated animate__fadeInUp"
            key={index}
          >
            <div className="row">
              <div className="col-md-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-8">
                <h5 className="mt-2">{event.title}</h5>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>{event.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FairsAndEvents;
