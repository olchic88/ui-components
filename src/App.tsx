import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense } from "react";
import ShowcasePage from "./pages/ShowcasePage.jsx";
import HeroSectionSimpleHTMLPage from "./pages/HeroSectionSimpleHTMLPage.jsx";
import HeroSectionSimpleReactPage from "./pages/HeroSectionSimpleReactPage.jsx";
import HeroSectionSimpleTailwindPage from "./pages/HeroSectionSimpleTailwindPage.jsx";
import HeroSectionFeatureBulletsHTMLPage from "./pages/HeroSectionFeatureBulletsHTMLPage.jsx";
import HeroSectionFeatureBulletsReactPage from "./pages/HeroSectionFeatureBulletsReactPage.jsx";
import HeroSectionFeatureBulletsTailwindPage from "./pages/HeroSectionFeatureBulletsTailwindPage.jsx";
import FeatureSectionImageHTMLPage from "./pages/FeatureSectionImageHTMLPage.jsx";
import FeatureSectionImageReactPage from "./pages/FeatureSectionImageReactPage.jsx";
import FeatureSectionImageTailwindPage from "./pages/FeatureSectionImageTailwindPage.jsx";
import FeatureSectionGridHTMLPage from "./pages/FeatureSectionGridHTMLPage.jsx";
import FeatureSectionGridReactPage from "./pages/FeatureSectionGridReactPage.jsx";
import FeatureSectionGridTailwindPage from "./pages/FeatureSectionGridTailwindPage.jsx";
import PricingSectionSingleHTMLPage from "./pages/PricingSectionSingleHTMLPage.jsx";
import PricingSectionSingleReactPage from "./pages/PricingSectionSingleReactPage.jsx";
import PricingSectionSingleTailwindPage from "./pages/PricingSectionSingleTailwindPage.jsx";
import StatisticsSectionAPIPage from "./pages/StatisticsSectionAPIPage.jsx";
import StatisticsSectionAPITailwindPage from "./pages/StatisticsSectionAPITailwindPage.jsx";
import NewsletterSectionAPIPage from "./pages/NewsletterSectionAPIPage.jsx";
import NewsletterSectionAPITailwindPage from "./pages/NewsletterSectionAPITailwindPage.jsx";

function App() {
  // throw new Error("Boom"); //
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header id="header">
                  <h1>UI Components</h1>
                </header>
                <ShowcasePage />
              </>
            }
          />
          <Route
            path="/hero-simple-html"
            element={<HeroSectionSimpleHTMLPage />}
          />
          <Route
            path="hero-simple-react"
            element={<HeroSectionSimpleReactPage />}
          />
          <Route
            path="hero-simple-tailwind"
            element={<HeroSectionSimpleTailwindPage />}
          />
          <Route
            path="hero-feature-bullets-html"
            element={<HeroSectionFeatureBulletsHTMLPage />}
          />
          <Route
            path="hero-feature-bullets-react"
            element={<HeroSectionFeatureBulletsReactPage />}
          />
          <Route
            path="hero-feature-bullets-tailwind"
            element={<HeroSectionFeatureBulletsTailwindPage />}
          />
          <Route
            path="feature-section-image-right-html"
            element={<FeatureSectionImageHTMLPage side="right" />}
          />
          <Route
            path="feature-section-image-left-html"
            element={<FeatureSectionImageHTMLPage side="left" />}
          />
          <Route
            path="feature-section-image-right-react"
            element={<FeatureSectionImageReactPage side="right" />}
          />
          <Route
            path="feature-section-image-left-react"
            element={<FeatureSectionImageReactPage side="left" />}
          />
          <Route
            path="feature-section-image-right-tailwind"
            element={<FeatureSectionImageTailwindPage side="right" />}
          />
          <Route
            path="feature-section-image-left-tailwind"
            element={<FeatureSectionImageTailwindPage side="left" />}
          />
          <Route
            path="feature-section-grid-html"
            element={<FeatureSectionGridHTMLPage />}
          />
          <Route
            path="feature-section-grid-react"
            element={<FeatureSectionGridReactPage />}
          />
          <Route
            path="feature-section-grid-tailwind"
            element={<FeatureSectionGridTailwindPage />}
          />
          <Route
            path="pricing-section-single-html"
            element={<PricingSectionSingleHTMLPage />}
          />
          <Route
            path="pricing-section-single-react"
            element={<PricingSectionSingleReactPage />}
          />
          <Route
            path="pricing-section-single-tailwind"
            element={<PricingSectionSingleTailwindPage />}
          />
          <Route
            path="statistics-section-api"
            element={<StatisticsSectionAPIPage />}
          />
          <Route
          path="statistics-section-api-tailwind"
          element={<StatisticsSectionAPITailwindPage/>}
        />
        <Route
        path="newsletter-section-api"
        element={<NewsletterSectionAPIPage/>}
        />
        <Route
        path="newsletter-section-api-tailwind"
        element={<NewsletterSectionAPITailwindPage/>}
        />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
