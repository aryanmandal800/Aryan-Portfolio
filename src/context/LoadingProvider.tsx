import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";
import { initialFX } from "../components/utils/initialFX";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

const isSmallOrTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth <= 1024 ||
    "ontouchstart" in window ||
    (navigator && navigator.maxTouchPoints > 0 && window.innerWidth <= 1200)
  );
};

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Instantly skip loading on mobile/tablet/touch
    if (isSmallOrTouchDevice()) {
      if (typeof document !== "undefined") {
        document.body.style.overflowY = "auto";
        document.documentElement.style.overflowY = "auto";
      }
      return false;
    }
    return true;
  });
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    if (isSmallOrTouchDevice()) {
      // Small screen: Ensure body scrolling is immediate & active
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      const mainEl = document.querySelector("main");
      if (mainEl) mainEl.classList.add("main-active");
      return;
    }

    // Safety fallback for desktop: never keep loading forever if 3D model stalls
    const safetyTimer = setTimeout(() => {
      initialFX();
      setIsLoading(false);
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }, 5000);

    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (loading >= 100) {
      // Guaranteed safety: If loader doesn't close within 1.5s after 100%, force unmount
      const autoCloseTimer = setTimeout(() => {
        setIsLoading(false);
        initialFX();
        document.body.style.overflowY = "auto";
        document.documentElement.style.overflowY = "auto";
      }, 1500);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
