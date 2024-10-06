import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import Animate.css for animations

const FairsAndEvents = () => {
  const [events, setEvents] = useState([]);
  const [expanded, setExpanded] = useState({}); // Track expanded cards

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

  // Handle expand/collapse for a card
  const handleExpandClick = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state
    }));
  };

  return (
    <div className="mt-5" style={{ backgroundColor: '#cae4c5', minHeight: '100vh', padding: '0' }}>
      <style>{`
        body {
          background-color: #cae4c5;
          margin: 0;
          padding: 0;
        }
        .page-heading {
          font-size: 3rem;
          font-weight: bold;
          color: #2c3e50;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }
        .list-group-item {
          background-color: #99cc99;
          border: 1px solid #ddd;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          display: flex;
          align-items: center;
          flex-direction: row;
          padding: 20px;
          overflow: hidden;
          max-width: 85%; /* Increased card width */
          margin: 0 auto; /* Center the card */
        }
        .list-group-item.expanded {
          height: auto; /* Expand to fit content when expanded */
        }
        .list-group-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        img {
          border-radius: 8px;
          width: 100%; /* Make the image take the full width on small screens */
          max-width: 250px; /* Max width for larger screens */
          height: auto; /* Auto height to maintain aspect ratio */
          object-fit: cover; /* Ensure the image fits within the fixed dimensions */
          margin-right: 20px;
        }
        .event-info {
          flex-grow: 1;
        }
        .event-title {
          font-size: 1.5rem;
          margin-top: 1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .event-description {
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limit description to 3 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .expanded .event-description {
          -webkit-line-clamp: unset; /* Remove line clamping for expanded cards */
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

      <div className="d-flex flex-column align-items-center" style={{ width: '100%' }}>
        {events.length === 0 ? (
          <p className="text-center">No events found.</p>
        ) : (
          events.map((event, index) => (
            <div
              className={`list-group-item mb-4 animate__animated animate__fadeInUp ${expanded[index] ? 'expanded' : ''}`}
              key={index}
            >
              <div className="row w-100">
                <div className="col-sm-4 col-md-3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-sm-8 col-md-9 event-info">
                  <h5 className="event-title">{event.title}</h5>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="event-description">{event.description}</p>
                  <button className="btn btn-primary mt-2" onClick={() => handleExpandClick(index)}>
                    {expanded[index] ? 'Close' : 'Learn More'}
                  </button>
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
