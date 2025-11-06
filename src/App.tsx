import { BrowserRouter, Routes, Route } from "react-router";
import ShowcasePage from "./pages/ShowcasePage.jsx";
import HeroSectionSimpleHTMLPage from "./pages/HeroSectionSimpleHTMLPage.jsx";
import HeroSectionSimpleReactPage from "./pages/HeroSectionSimpleReactPage.jsx";
import HeroSectionSimpleTailwindPage from "./pages/HeroSectionSimpleTailwindPage.jsx";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
