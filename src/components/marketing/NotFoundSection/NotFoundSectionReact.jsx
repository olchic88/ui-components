import ButtonReact from "../../../ui/Button/ButtonReact";
import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";
import "./notFoundSection.css";
import { Link } from "react-router";

export default function NotFoundSectionReact({ buttonText }) {
  return (
    <section className="not-found-section">
      <div className="not-found-section-content">
        <SectionHeaderReact
          supportingText="Not found"
          title="We can’t find the page"
          subtitle="Sorry, the page you are looking for doesn't exist or has been moved."
          heading="h1"
          className="not-found-section-header"
          supportingTextClassName="not-found-section-supporting-text"
          titleClassName="not-found-section-title"
          subtitleClassName="not-found-section-subtitle"
        />
        {/*
        <div className="not-found-section-header">
          <p className="not-found-section-header-supporting-text">
            {supportingText}
          </p>
          <h3 className="not-found-section-header-title">{title}</h3>
        </div>
        <p className="not-found-section-description">{description}</p>
          */}
      </div>

      <ButtonReact to="" variant="primary" className="notfound-btn" as="link">
        {buttonText}
      </ButtonReact>
    </section>
  );
}
