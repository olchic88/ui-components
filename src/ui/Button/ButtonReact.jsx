import "./button.css";
import { Link } from "react-router";

export default function ButtonReact({
  children,
  variant,
  size,
  as = "button",
  className = "",
  ...props
}) {
  const buttonClassName = `ax-button button 
  ${variant ? `button-${variant}` : ""}
  ${size ? `button-size-${size}` : ""}
  ${className}`;

  if (as === "link") {
    return (
      <Link className={buttonClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
