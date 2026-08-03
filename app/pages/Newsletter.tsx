"use client";
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-card">
        <h2 className="newsletter-title">Ready for Your Next Trip?</h2>

        <p className="newsletter-description">
          Subscribe to get exclusive deals, travel tips, and AI-powered
          recommendations straight to your inbox.
        </p>

        <form
          className="newsletter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
