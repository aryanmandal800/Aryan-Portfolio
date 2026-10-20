import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import { initialFX } from "./utils/initialFX";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [fading, setFading] = useState(false);
  const completedRef = useRef(false);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Safety cleanup: only clear timers when the component UNMOUNTS, never on intermediate re-renders!
  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    if (percent >= 100 && !completedRef.current) {
      completedRef.current = true;

      // 1. Switch to "Welcome"
      timersRef.current.push(
        setTimeout(() => {
          setLoaded(true);

          // 2. Trigger expanding circle animation
          timersRef.current.push(
            setTimeout(() => {
              setClicked(true);

              // 3. Pre-warm hero section animation under expanding circle
              timersRef.current.push(
                setTimeout(() => {
                  initialFX();
                }, 300)
              );

              // 4. Trigger character head-lift animation as circle reveals the scene
              timersRef.current.push(
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent("startCharacterIntro"));
                }, 400)
              );

              // 5. Smoothly dissolve loader
              timersRef.current.push(
                setTimeout(() => {
                  setFading(true);
                }, 600)
              );

              // 6. Unmount loader completely
              timersRef.current.push(
                setTimeout(() => {
                  setIsLoading(false);
                }, 900)
              );
            }, 600)
          );
        }, 250)
      );

      // GUARANTEED FAILSAFE:
      // If for any reason any timer above is stalled or delayed, FORCE unmount at 1300ms
      timersRef.current.push(
        setTimeout(() => {
          setFading(true);
          initialFX();
          setIsLoading(false);
        }, 1300)
      );
    }
  }, [percent, setIsLoading]);

  const handleForceOpen = () => {
    if (percent >= 100) {
      initialFX();
      setIsLoading(false);
    }
  };

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className={`loading-header ${fading ? "loading-screen-fadeout" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          Aryan Mandal
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className={`loading-screen ${fading ? "loading-screen-fadeout" : ""}`}>
        <div className="loading-marquee">
          <Marquee>
            <span>&nbsp; Software Engineer &nbsp;</span> <span>&nbsp; Full Stack Developer &nbsp;</span>
            <span>&nbsp; React Native Specialist &nbsp;</span> <span>&nbsp; Backend Developer &nbsp;</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
          onClick={handleForceOpen}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`} onClick={handleForceOpen}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
