"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function AdminPage() {
  return (
    <div className="sanity-studio-container">
      <NextStudio config={config} />
      <style jsx global>{`
        /* Override styles to prevent overlap with navigation */
        html, body {
          height: 100%;
          overflow: hidden;
          padding: 0;
          margin: 0;
        }
        
        /* Remove any padding that might be causing overlap */
        .sanity-studio-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
          z-index: 100;
          background-color: white;
        }
        
        /* Ensure the studio takes the full height/width */
        .sanity-studio-container > div {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
}