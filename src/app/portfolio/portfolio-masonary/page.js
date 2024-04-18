"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";



const PortfolioMasonaryPage = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="portfolio-grid-section scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div className="row gy-lg-5 g-4 justify-content-between mb-60">
            <div
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">Ecommerce</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">OnlineShopping </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">InventoryManagement</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">PaymentGateways
                      </Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-01.jpg" alt="not found" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/E-commerceSolutionsPortfolio">
                    E-commerce Solutions Portfolio.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/E-commerceSolutionsPortfolio"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio">WebDevelopment</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">AppDevelopment</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">ResponsiveDesign </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">MobileApplications
                      </Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-02.jpg" alt="not found" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/Web&AppDevelopmentPortfolio">
                    Web & App Development Portfolio.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/Web&AppDevelopmentPortfolio"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                <ul className="tag">
                    <li>
                      <Link href="/portfolio">DigitalMarketing </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">SocialMedia</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">SEO</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Campaigns</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-03.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/DigitalMarketingPortfolio">
                    Digital Marketing Portfolio.
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/DigitalMarketingPortfolio"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                <ul className="tag">
                    <li>
                      <Link href="/portfolio">Cybersecurity</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">ThreatDetection </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">IncidentResponse</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Compliance</Link>
                  </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-04.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/CybersecuritySolutionsPortfolio">
                    Cybersecurity Solutions Portfolio
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/CybersecuritySolutionsPortfolio"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                <ul className="tag">
                    <li>
                      <Link href="/portfolio">UIUXDesign</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">UserExperience</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">UserInterface</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">GraphicDesign
                      </Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-05.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/UI-UXPortfolio">
                    UI/UX Design Portfolio
                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/UI-UXPortfolio"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                <ul className="tag">
                    <li>
                      <Link href="/portfolio">DataAnalytics</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Insights</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">DataDrivenDecisions</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Optimization</Link>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="/assets/img/home5/portfolio-06.jpg" alt="" />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <Link href="/portfolio/DataAnalyticsPortfolio">
                    Data Analytics Portfolio

                    </Link>
                  </h4>
                  <Link
                    className="details-btn"
                    href="/portfolio/DataAnalyticsPortfolio"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioMasonaryPage;
