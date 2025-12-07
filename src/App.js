// src/App.jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Top navigation */}
      <header className="app-header">
        <div className="logo">Save the Children x Amazon</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#partnership">Partnership</a>
          <a href="#benefits">Benefits</a>
          <a href="#aws">AWS in Action</a>
          <a href="#get-involved">Get Involved</a>
        </nav>
      </header>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Children Through Technology & Partnership</h1>
          <p>
            Save the Children and Amazon work together to protect children,
            expand access to education, and deliver rapid emergency relief —
            using Amazon&apos;s global logistics and the power of AWS cloud.
          </p>
          <div className="hero-buttons">
            <a
              className="btn primary"
              href="https://www.savethechildren.org/us/about-us/become-a-partner/corporations/amazon"
              target="_blank"
              rel="noreferrer"
            >
              View Official Partnership
            </a>
            <a href="#aws" className="btn secondary">
              See How AWS Helps
            </a>
          </div>
        </div>
      </section>

      {/* About Save the Children */}
      <section id="about" className="section">
        <div className="section-header">
          <h2>About Save the Children</h2>
          <p>
            Save the Children is a global humanitarian organization dedicated to
            ensuring every child has the right to survival, protection, and
            education. Through programs in health, learning, and safety, the
            organization supports children and families in crisis and in
            long-term development.
          </p>
        </div>

        <div className="grid two-col">
          <div className="card">
            <h3>Global Reach</h3>
            <p>
              Working in countries around the world, Save the Children supports
              children affected by poverty, conflict, disasters, and inequality.
            </p>
          </div>
          <div className="card">
            <h3>Child-Centered Programs</h3>
            <p>
              Programs focus on early learning, basic education, health and
              nutrition, child protection, and emergency response.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership with Amazon */}
      <section id="partnership" className="section section-alt">
        <div className="section-header">
          <h2>Partnership with Amazon</h2>
          <p>
            Amazon partners with Save the Children by combining financial
            support, logistics, technology, and employee engagement to reach
            children and families faster and more effectively, especially during
            emergencies.
          </p>
        </div>

        <div className="grid three-col">
          <div className="card">
            <h3>Logistics & Supply Chain</h3>
            <p>
              Amazon&apos;s fulfillment centers and delivery network help move
              critical supplies—like hygiene kits, learning materials, and basic
              necessities—rapidly into areas impacted by crises.
            </p>
          </div>
          <div className="card">
            <h3>Fundraising & Visibility</h3>
            <p>
              Amazon provides donation channels, campaigns, and visibility to
              millions of customers, amplifying Save the Children&apos;s
              message and impact.
            </p>
          </div>
          <div className="card">
            <h3>Technology & Innovation</h3>
            <p>
              Through AWS and devices, Amazon supports digital learning
              initiatives, data-driven decision-making, and modernized program
              delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Amazon as a Partner */}
      <section id="benefits" className="section">
        <div className="section-header">
          <h2>Benefits of Partnering with Amazon</h2>
          <p>
            Partnering with Amazon gives Save the Children access to unique
            capabilities that few other organizations can match.
          </p>
        </div>

        <div className="grid four-col">
          <div className="card small">
            <h3>Speed</h3>
            <p>
              Amazon&apos;s logistics allow rapid distribution of emergency
              supplies, reducing response time when disasters strike.
            </p>
          </div>
          <div className="card small">
            <h3>Scalability</h3>
            <p>
              Amazon&apos;s global infrastructure scales up to support large
              campaigns and major humanitarian operations.
            </p>
          </div>
          <div className="card small">
            <h3>Technology Power</h3>
            <p>
              AWS cloud services power education platforms, data analytics, and
              communication tools used in Save the Children programs.
            </p>
          </div>
          <div className="card small">
            <h3>Employee Impact</h3>
            <p>
              Amazon employees engage through volunteering, donations, and
              skills-based support, multiplying the partnership&apos;s effect.
            </p>
          </div>
        </div>
      </section>

      {/* AWS in Education, Emergency Response, and Aid */}
      <section id="aws" className="section section-alt">
        <div className="section-header">
          <h2>How AWS Supports Education, Emergency Response, and Aid</h2>
          <p>
            AWS provides the cloud foundation that helps Save the Children
            deliver smarter, faster, and more secure services to children and
            families around the world.
          </p>
        </div>

        <div className="grid three-col">
          {/* Education */}
          <div className="card">
            <h3>Education</h3>
            <ul className="feature-list">
              <li>
                <strong>Amazon S3</strong> stores digital learning content such
                as lessons, videos, and interactive materials.
              </li>
              <li>
                <strong>Amazon CloudFront</strong> delivers content globally
                with low latency, supporting remote and crisis-affected regions.
              </li>
              <li>
                <strong>Virtual learning environments</strong> using AWS
                services enable students and teachers to connect from anywhere.
              </li>
            </ul>
          </div>

          {/* Emergency Response */}
          <div className="card">
            <h3>Emergency Response</h3>
            <ul className="feature-list">
              <li>
                <strong>Real-time data</strong> hosted on AWS helps teams map
                disasters, track needs, and prioritize high-risk areas.
              </li>
              <li>
                <strong>Cloud-based communication tools</strong> support hotlines,
                coordination hubs, and information sharing during crises.
              </li>
              <li>
                <strong>Scalable infrastructure</strong> means information
                systems can handle sudden spikes in traffic during emergencies.
              </li>
            </ul>
          </div>

          {/* Aid & Program Delivery */}
          <div className="card">
            <h3>Aid & Program Delivery</h3>
            <ul className="feature-list">
              <li>
                <strong>Data analytics on AWS</strong> helps identify the most
                vulnerable communities and allocate resources effectively.
              </li>
              <li>
                <strong>Secure cloud storage</strong> protects sensitive
                information about children and families.
              </li>
              <li>
                <strong>Automation and reporting</strong> reduce administrative
                overhead, allowing more funds to go directly to programs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section id="get-involved" className="section cta-section">
        <h2>Get Involved</h2>
        <p>
          Whether you&apos;re an individual supporter, an AWS professional, or a
          company leader, you can help strengthen partnerships that protect and
          empower children worldwide.
        </p>
        <div className="hero-buttons">
          <a
            className="btn primary"
            href="https://www.savethechildren.org/us/ways-to-help"
            target="_blank"
            rel="noreferrer"
          >
            Support Save the Children
          </a>
          <a
            className="btn secondary"
            href="https://aws.amazon.com/social-impact/"
            target="_blank"
            rel="noreferrer"
          >
            Learn About AWS for Good
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          This is a conceptual site showcasing the partnership between Save the
          Children and Amazon, and how AWS can support education, emergency
          response, and humanitarian aid.
        </p>
      </footer>
    </div>
  );
}

export default App;
