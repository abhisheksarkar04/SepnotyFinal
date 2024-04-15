import MainLayout from "@/components/layout/MainLayout";
import React from "react";

const FaqPage = () => {
  return (
    <MainLayout>
      <div className="faq-section scroll-margin pt-120 mb-120" id="faq-section">
        <div className="container">
          <div className="row g-4 mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>General</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionGeneral">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseOne"
                        aria-expanded="true"
                        aria-controls="faqcollapseOne"
                      >
                        01.What is Sepnoty and what does it offer?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheadingOne"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Task management involves organizing and overseeing
                        tasks to achieve goals. It includes planning, tracking
                        progress, and optimizing workflows. Tools like to-do
                        lists and project management software facilitate.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseTwo"
                        aria-expanded="false"
                        aria-controls="faqcollapseTwo"
                      >
                        02. How can Sepnoty help my business?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingTwo"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Sepnoty can help your business by improving productivity, enhancing collaboration among
                        team members, centralizing project management, and providing valuable insights through
                        analytics and reporting
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseThree"
                        aria-expanded="false"
                        aria-controls="faqcollapseThree"
                      >
                        03. Is Sepnoty suitable for small businesses?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingThree"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Yes, Sepnoty is suitable for small businesses as it offers scalable solutions that can be
                        tailored to the specific needs and size of your organization.

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseFour"
                        aria-expanded="false"
                        aria-controls="faqcollapseFour"
                      >
                        04. What industries does Sepnoty cater to?

                      </button>
                    </h2>
                    <div
                      id="faqcollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingFour"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Sepnoty caters to a diverse range of industries including technology, marketing, finance,
                        healthcare, education, and more.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseFive"
                        aria-expanded="false"
                        aria-controls="faqcollapseFive"
                      >
                        05. How does Sepnoty ensure data security?

                      </button>
                    </h2>
                    <div
                      id="faqcollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingFive"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Sepnoty prioritizes data security and employs robust measures such as encryption, access
                        controls, and regular security audits to ensure the safety and confidentiality of your data
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseSix"
                        aria-expanded="false"
                        aria-controls="faqcollapseSix"
                      >
                        06. Can Sepnoty be customized to fit my business needs?

                      </button>
                    </h2>
                    <div
                      id="faqcollapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingSix"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Yes, Sepnoty can be customized to fit your business needs through features like customizable
                        workflows, task templates, and integrations with third-party tools
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseSeven"
                        aria-expanded="false"
                        aria-controls="faqcollapseSeven"
                      >
                        07. What kind of support does Sepnoty provide?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingSeven"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Sepnoty provides comprehensive support to its users including documentation, tutorials,
                        email support, and live chat assistance
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseEight"
                        aria-expanded="false"
                        aria-controls="faqcollapseEight"
                      >
                        08. How does Sepnoty handle software updates and improvements?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingEight"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Sepnoty continuously updates its software to improve performance, add new features, and
                        address any issues or bugs reported by users. Updates are rolled out regularly to ensure that
                        users always have access to the latest improvements and enhancements.

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>Payment</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionPayment">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2One">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2One"
                        aria-expanded="true"
                        aria-controls="faqcollapse2One"
                      >
                        01. What payment methods does Sepnoty accept?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheading2One"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Sepnoty accepts various payment methods, including credit cards, debit cards, PayPal, and
                        bank transfers.

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Two"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Two"
                      >
                        02. Is there a setup fee for using Sepnoty?

                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Two"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Sepnoty does not charge a setup fee. You can start using the platform immediately after
                        signing up for a subscription plan.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Three">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Three"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Three"
                      >
                        03. Are there any hidden fees with Sepnoty's subscription plans?

                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Three"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        No, Sepnoty's subscription plans are transparent, and there are no hidden fees. The pricing is
                        clearly outlined on the website, and you only pay for the selected plan
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Four">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Four"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Four"
                      >
                        04. Can I upgrade or downgrade my subscription plan at any time?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Four"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Four"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, you can upgrade or downgrade your subscription plan at any time. The changes will take
                        effect immediately, and you will be charged or credited accordingly.

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Five">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Five"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Five"
                      >
                        05. Is there a contract or commitment required to use Sepnoty?

                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Five"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Five"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        No, Sepnoty offers subscription plans on a month-to-month basis with no long-term
                        contracts or commitments. You can cancel your subscription at any time.

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Six">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Six"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Six"
                      >
                        06. Are there volume discounts available for larger teams or organizations?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Six"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Six"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, Sepnoty offers volume discounts for larger teams or organizations. Please contact our
                        sales team for more information and personalized pricing options.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Seven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Seven"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Seven"
                      >
                        07. Is my payment information secure when using Sepnoty?

                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Seven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Seven"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Yes, Sepnoty takes data security seriously and employs industry-standard encryption
                        protocols to protect your payment information.

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Eight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Eight"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Eight"
                      >
                        08. What is the refund policy for Sepnoty's subscription plans?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Eight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Eight"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Sepnoty offers a 30-day money-back guarantee for new subscription sign-ups. If you are not
                        satisfied with the service within the first 30 days, you can request a full refund.
                      </div>
                    </div>
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

export default FaqPage;
