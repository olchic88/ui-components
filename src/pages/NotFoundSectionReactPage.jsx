import NotFoundSectionReact from "../components/marketing/NotFoundSection/NotFoundSectionReact";

export default function NotFoundSectionReactPage() {
  return (
    <div className="fullpage">
      <title>Not found</title>
      <NotFoundSectionReact
        supportingText="Not found"
        title="We can’t find the page"
        description="Sorry, the page you are looking for doesn't exist or has been moved."
      />
    </div>
  );
}
