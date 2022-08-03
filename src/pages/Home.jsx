import React, {useState, useEffect} from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import '../assets/css/style.css'

const Home = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      const onPageLoad = () => {
        setLoaded(true);
      };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <>
        {loaded ? 
        (<><Header />
        <main>
            <About />
            <Roadmap />
            <Faq />
            <Team />
        </main>
        <Footer /></>): (
        <div className="loader-wrapper">
          <span className="loader">
            <span className="loader-inner"></span>
          </span>
        </div>
  )}
    </>
  )
}

export default Home