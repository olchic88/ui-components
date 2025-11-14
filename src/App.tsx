import { BrowserRouter, Routes, Route } from "react-router";
import ShowcasePage from "./pages/ShowcasePage.jsx";
import HeroSectionSimpleHTMLPage from "./pages/HeroSectionSimpleHTMLPage.jsx";
import HeroSectionSimpleReactPage from "./pages/HeroSectionSimpleReactPage.jsx";
import HeroSectionSimpleTailwindPage from "./pages/HeroSectionSimpleTailwindPage.jsx";
import HeroSectionFeatureBulletsHTMLPage from "./pages/HeroSectionFeatureBulletsHTMLPage.jsx";
import HeroSectionFeatureBulletsReactPage from "./pages/HeroSectionFeatureBulletsReactPage.jsx";
import HeroSectionFeatureBulletsTailwindPage from "./pages/HeroSectionFeatureBulletsTailwindPage.jsx"

function App() {
  return (
    <BrowserRouter>
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
        element={<HeroSectionFeatureBulletsReactPage/>}
        />
        <Route
        path="hero-feature-bullets-tailwind"
        element={<HeroSectionFeatureBulletsTailwindPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
