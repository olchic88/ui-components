import blogCard1 from "./blog-card-1.jpg";
import "./BlogCardCSS.css";

export default function BlogCardHTML() {
  return (
    <div className="blog-card">
      <img
        className="blog-card-img"
        src={blogCard1}
        alt="Beautifully designed living room with modern decor"
        width={340}
        height={288}
      />
      <div className="blog-card-content">
        <span className="badge badge-success blog-card-badge">Interior</span>
        <div className="blog-card-info">
          <div className="blog-card-title-desc">
            <h3 className="blog-card-title">Top 5 Living Room Inspirations</h3>
            <p className="blog-card-text">
              Curated vibrants colors for your living, make it pop & calm in the
              same time.
            </p>
          </div>

          <a className="blog-card-btn" href="#">
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
          </a>
        </div>
      </div>
    </div>
  );
}
