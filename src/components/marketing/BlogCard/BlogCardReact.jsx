import "./blogCard.css";
import { Link } from "react-router";

export default function BlogCardReact({
  src,
  alt,
  width,
  height,
  badge,
  title,
  text,
}) {
  return (
    <div className="blog-card">
      <img
        className="blog-card-img"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="blog-card-content">
        <span className="badge badge-success blog-card-badge">{badge}</span>
        <div className="blog-card-info">
          <div className="blog-card-title-desc">
            <h3 className="blog-card-title">{title}</h3>
            <p className="blog-card-text">{text}</p>
          </div>

          <Link className="blog-card-btn" to="#">
            Read more
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
