import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation(); /* returns object with info about URL, we need only pathname */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// use it in <BrowserRouter></BrowserRouter>