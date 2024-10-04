import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import Animate.css for animations

const FairsAndEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/Fair_Events');
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mt-5">
      <style>{`
        .page-heading {
          font-size: 3rem;
          font-weight: bold;
          color: #007bff;
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

      <h2 className="text-center mb-5 animate__animated animate__bounce page-heading">
        Upcoming Fairs and Events
      </h2>

      <div className="list-group">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event, index) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default FairsAndEvents;
