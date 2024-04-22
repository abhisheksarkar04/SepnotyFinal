"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const PortfolioDetailsPage = () => {
  useWow();
  return (
    <MainLayout>
      <div
        className="portfolio-details-page scroll-margin pt-120 mb-120"
        id="portfolio-details-section"
      >
        <div className="container">
          <div className="portfolio-details-thumb mb-80">
            <img
              src="/assets/img/innerpage/web & app deve portfolio.jpg"
              alt=""
            />
          </div>
          <div className="row g-lg-4 gy-5 mb-80 ">
            <div className="col-lg-8">
              <div className="portfolio-details-content">
                <h3>Corporate Website Redesign</h3>
                <p>
                  Revamped the corporate website of a Fortune 500 firm to boost
                  brand visibility and user engagement. Leveraged contemporary
                  design strategies to enhance the platform's appeal and
                  navigation. The result is a seamless digital experience that
                  reflects the company's prestige and strengthens its online
                  presence.{" "}
                </p>
                <div className="row mb-60">
                  <div className="col-lg-12">
                    <img
                      src="/assets/img/innerpage/Corporate Website Redesign.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h3>Key Features</h3>
                <p>
                  Corporate website redesign involves updating and refining the
                  digital face of a company, aiming to align it with current
                  market trends and user expectations. This process entails
                  enhancing visual appeal, optimizing user experience, and
                  incorporating modern design elements. Through strategic
                  planning and implementation, a redesigned corporate website
                  can effectively communicate the company's brand identity,
                  improve engagement with visitors, and ultimately drive
                  business growth.
                </p>
                <ul className="features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      <path
                        d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                        fill="white"
                      />
                    </svg>{" "}
                    Responsive Design
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      <path
                        d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                        fill="white"
                      />
                    </svg>{" "}
                    Scalability
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      <path
                        d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                        fill="white"
                      />
                    </svg>{" "}
                    Cross-Platform Compatibility
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      <path
                        d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                        fill="white"
                      />
                    </svg>{" "}
                    User-Friendly Interface
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      <path
                        d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                        fill="white"
                      />
                    </svg>{" "}
                    Customization Options
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      <path
                        d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                        fill="white"
                      />
                    </svg>{" "}
                    Integration with Third-Party APIs
                  </li>
                </ul>
                <div className="row mt-50 mb-60">
                  <div className="col-lg-12">
                    <img
                      src="/assets/img/innerpage/corporate key features.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h3>Project Results</h3>
                <p>
                  Implemented diverse digital solutions across industries,
                  resulting in significant performance improvements.
                  Achievements include enhancing website traffic by 50%, app
                  store ratings by 20%, and reducing bounce rates by 30%.
                  Additionally, facilitated patient-doctor communication in
                  healthcare, enhanced e-commerce platforms for retail clients,
                  and developed custom web applications for logistics companies.
                  Achieved notable increases in customer satisfaction scores,
                  conversion rates, and app downloads, showcasing a versatile
                  and impactful approach to digital transformation.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-sidebar">
                <div className="portfolio-info-wrap mb-40">
                  <ul className="portfolio-info">
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Category:</span>
                        <h5>Software</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Client:</span>
                        <h5>Egens Lab</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Location:</span>
                        <h5>7 Lake Street, London</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Industry:</span>
                        <h5>IT &amp; Consulting</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Stack:</span>
                        <h5>Android, Realm, Dagger 2, Java</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="portfolio-details-banner">
                <img src="/assets/img/innerpage/image 130.jpg" alt="" />
                <div className="portfolio-details-banner-content">
                  <h2>
                    Ready to <span>work with us?</span>
                  </h2>
                  <Link href="/contact" className="primary-btn4 black-hover">
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="details-navigation">
                <div className="single-navigation">
                  <div className="star-btn">
                    <Link href="/portfolio/E-commerceSolutionsPortfolio">
                      <div className="bg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={163}
                          height={80}
                          viewBox="0 0 163 80"
                        >
                          <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z" />
                        </svg>
                      </div>
                      <div className="nav-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.51122 0.885308L10 9.37364L9.37364 10L0.885308 1.51122V7.38037H0V0H7.38037V0.885308H1.51122Z"
                          />
                        </svg>
                        <span>PRV PROJECT</span>
                      </div>
                    </Link>
                  </div>
                  <div className="content">
                    <p>E-commerce Solutions Portfolio</p>
                  </div>
                </div>
                <div className="single-navigation two text-end">
                  <div className="content">
                    <p>Digital Marketing Portfolio</p>
                  </div>
                  <div className="star-btn">
                    <Link href="/portfolio/DigitalMarketingPortfolio">
                      <div className="bg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={163}
                          height={80}
                          viewBox="0 0 163 80"
                        >
                          <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z" />
                        </svg>
                      </div>
                      <div className="nav-btn">
                        <span>NXT PROJECT</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioDetailsPage;
