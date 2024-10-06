import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// VideoCard Component to render individual video items
const VideoCard = ({ video, onRemove }) => {
  return (
    <Col xs={12} md={6} lg={3} style={styles.videoCard}>
      <Card className="h-100" style={styles.animatedCard}>
        <div style={styles.videoThumbnail}>
          <Card.Img variant="top" src={video.thumbnail} alt={video.title} style={styles.thumbnailImg} />
          <div style={styles.thumbnailOverlay}>
            <Button href={video.videoLink} target="_blank" style={styles.watchBtn}>
              Watch Now
            </Button>
          </div>
        </div>
        <Card.Body style={styles.cardBody}>
          <Card.Title style={styles.cardTitle}>{video.title}</Card.Title>
          <Button variant="danger" style={styles.removeBtn} onClick={() => onRemove(video.id)}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([
    {
      id: 1,
      title: "How to grow organic wheat",
      thumbnail: "https://example.com/thumbnail1.jpg",
      videoLink: "https://youtube.com/example1",
    },
    {
      id: 2,
      title: "Best practices for rice cultivation",
      thumbnail: "https://example.com/thumbnail2.jpg",
      videoLink: "https://youtube.com/example2",
    },
    {
      id: 3,
      title: "Best practices for rice cultivation",
      thumbnail: "https://example.com/thumbnail2.jpg",
      videoLink: "https://youtube.com/example2",
    },
    // Add more videos as needed
  ]);

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((video) => video.id !== id));
  };

  // Apply body background color when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = "#cae4c5"; // Green color
    return () => {
      document.body.style.backgroundColor = ""; // Reset background color when component unmounts
    };
  }, []);

  return (
    <Container fluid style={styles.watchlistContainer}>
      <h1 style={styles.header}>Your Watchlist</h1>
      <Row className="justify-content-center">
        {watchlist.length > 0 ? (
          watchlist.map((video) => (
            <VideoCard key={video.id} video={video} onRemove={removeFromWatchlist} />
          ))
        ) : (
          <Col>
            <p style={styles.noVideosText}>No videos in your watchlist yet!</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

// Styles Object
const styles = {
  watchlistContainer: {
    backgroundColor: "#cae4c5",
    padding: "3rem",
    borderRadius: "0px",
    marginTop: "0px",
    animation: "fadeInUp 1s ease",
    width: "100vw",
    marginLeft: "0px",
    marginRight: "0px",
    maxWidth: "100%",
  },
  header: {
    fontFamily: "'Poppins', sans-serif",
    color: "#2c3e50",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "40px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  videoCard: {
    marginBottom: "30px",
  },
  animatedCard: {
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  videoThumbnail: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px 15px 0 0",
  },
  thumbnailImg: {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease",
  },
  thumbnailOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  watchBtn: {
    backgroundColor: "#27ae60",
    border: "none",
    padding: "0.75rem 1.5rem",
    fontSize: "1.2rem",
    color: "white",
    borderRadius: "10px",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    textAlign: "center",
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#2c3e50",
  },
  cardBody: {
    textAlign: "center",
    padding: "20px",
  },
  removeBtn: {
    display: "block",
    width: "100%",
    marginTop: "15px",
    fontSize: "1rem",
    padding: "0.5rem",
  },
  noVideosText: {
    fontSize: "1.5rem",
    color: "#7f8c8d",
    textAlign: "center",
  },
};

// CSS animations for cards and header
const animationStyles = `
.video-thumbnail-wrapper:hover .thumbnailOverlay {
  opacity: 1;
}

.thumbnailOverlay:hover .thumbnailImg {
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;

// Append animation styles to document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = animationStyles;
  document.head.appendChild(styleSheet);
}

export default Watchlist;
