import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="section section-hero">
      <div className="asymmetric-grid">
        <div className="grid-span-8">
          <div className="fade-in-up">
            <h1 className="text-display mb-24">
              Austin
              <br />
              Luk
            </h1>
          </div>
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-large max-w-2xl top-20">
              Computer Science Student @ UBC
            </p>
          </div>
        </div>
        <div className="grid-span-4">
          <div className="slide-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="geometric-shape shape-circle w-64 h-64 morph-border" />
            <div
              className="geometric-shape shape-square w-32 h-32 absolute top-20 right-20"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
