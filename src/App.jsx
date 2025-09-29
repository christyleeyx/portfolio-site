import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />

      <Projects />

      <Contact />

      <>
        <p className="footer"> &copy; 2025 Crispyfishy. All rights reserved.</p>
      </>
    </div>
  );
}

export default App;

//Use when needed

{
  /* <BrowserRouter>
<Routes>
  <Route index element={<Home />} />
  //Any other path that is not defined will be redirected to NotFound
  <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter> */
}
