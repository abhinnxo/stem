import { useState } from "react";

const FeedbackCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
  };

  const handleDislike = () => {
    setIsLiked(false);
  };

  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <img
          src="https://picsum.photos/200/200"
          alt="Feedback User"
          className="feedback-avatar"
        />
        <h3 className="feedback-name">John Doe</h3>
      </div>
      <div className="feedback-content">
        <p className="feedback-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio
          nisl. Integer in leo sapien. Nullam ut tellus diam. Integer sit amet
          fringilla nisi. Nulla facilisi. Fusce ac lorem at ex accumsan
          ullamcorper. Etiam eget sem tellus.
        </p>
        <div className="feedback-actions">
          <button
            className={`feedback-button ${
              isLiked ? "feedback-button-liked" : ""
            }`}
            onClick={handleLike}
          >
            <i className="fas fa-thumbs-up"></i>
            <span className="feedback-count">10</span>
          </button>
          <button
            className={`feedback-button ${
              !isLiked ? "feedback-button-disliked" : ""
            }`}
            onClick={handleDislike}
          >
            <i className="fas fa-thumbs-down"></i>
            <span className="feedback-count">2</span>
          </button>
        </div>
      </div>
      <style jsx>{`
        .feedback-card {
          background-color: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          margin: 1rem 0;
          max-width: 600px;
        }

        .feedback-header {
          display: flex;
          align-items: center;
        }

        .feedback-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          margin-right: 1rem;
        }

        .feedback-name {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .feedback-content {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .feedback-text {
          font-size: 1.2rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .feedback-actions {
          display: flex;
          justify-content: space-between;
        }

        .feedback-button {
          display: flex;
          align-items: center;
          color: #333;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.2rem;
        }

        .feedback-button-liked {
          color: #2196f3;
        }

        .feedback-button-disliked {
          color: #e91e63;
        }

        .feedback-count {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default FeedbackCard;
