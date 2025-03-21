
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center opacity-0 animate-pixel-slide-up">
          <h1 className="font-pixel text-4xl md:text-6xl mb-4 text-primary">404</h1>
          <div className="font-mono mb-8 text-muted-foreground">
            // Page not found
          </div>
          <button
            onClick={() => navigate("/")}
            className="font-pixel text-sm px-6 py-3 bg-primary text-primary-foreground hover:bg-pixel-green transition-colors duration-300 pixel-corners"
          >
            RETURN HOME
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
