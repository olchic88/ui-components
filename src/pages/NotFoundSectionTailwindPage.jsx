import NotFoundSectionTailwind from "../components/marketing/NotFoundSection/NotFoundSectionTailwind";

export default function NotFoundSectionTailwindPage() {
  return (
    <>
      <title>Not found</title>
      <NotFoundSectionTailwind
        supportingText="Not found"
        title="We can’t find the page"
        description="Sorry, the page you are looking for doesn't exist or has been moved."
        fullpage={true}
      />
    </>
  );
}
