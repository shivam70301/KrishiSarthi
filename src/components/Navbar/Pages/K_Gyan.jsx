import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const K_Gyan = () => {
  const videos = [
    {
      id: 1,
      title: 'Sustainable Farming Techniques',
      url: 'https://www.youtube.com/embed/Ot8AJHlwfsk',
    },
    {
      id: 2,
      title: 'Organic Farming Practices',
      url: 'https://www.youtube.com/embed/7HJQ9FU7FAg',
    },
    {
      id: 3,
      title: 'How to Grow Healthy Crops',
      url: 'https://www.youtube.com/embed/MZKmkmDBI5c',
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4" style={{ fontWeight: 'bold', color: '#2c3e50' }}>
        K Gyan: Agriculture Knowledge Videos
      </h1>
      <p className="text-center mb-5" style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
        Explore a collection of videos to help you gain insights into modern agricultural practices.
      </p>
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-4 col-sm-12 mb-4" key={video.id}>
            <div className="card h-100 shadow border-0 video-card">
              <div className="ratio ratio-16x9">
                <iframe
                  src={video.url}
                  allowFullScreen
                  title={video.title}
                  className="embed-responsive-item"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ fontWeight: '600', color: '#34495e' }}>
                  {video.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS styles */}
      <style jsx>{`
        .video-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .card-title {
          transition: color 0.3s ease;
        }

        .video-card:hover .card-title {
          color: #e67e22; /* Change to a more vibrant color on hover */
        }
      `}</style>
    </div>
  );
};

export default K_Gyan;
