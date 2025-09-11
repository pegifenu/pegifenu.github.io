import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        opacity: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 100, // how close the cursor needs to be
            duration: 2, // how long the effect lasts
            opacity: 0, // target opacity (less than 1 = more transparent)
            size: 0, // (optional) slightly increase or maintain size
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.05,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
          value: { min: 0.1, max: 0.5 },
          random: true,
        },
        shadow: {
          enable: true,
          color: "#ffffff", // or a soft color glow like "#00ffff"
          blur: 5, // adjust blur radius
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.2, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="from-dark-blue to-medium-blue h-screen min-h-screen overflow-auto bg-gradient-to-b"
    >
      {init && (
        <Particles
          className="fixed inset-0 z-0"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="relative z-10">
        <Navbar scrollRef={scrollRef} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
