import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const K_Gyan = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/K_Gyan');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

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
          <div className="col-md-4 col-sm-12 mb-4" key={video._id}>
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
