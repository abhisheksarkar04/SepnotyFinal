"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const TermsAndCondtions = () => {
  useWow()
  return (
    <MainLayout>
      <div className="shop-page scroll-margin pt-120 pb-120" id="shop">
        {/* <div className="container"> */}
          {/* <div className="row g-4 mb-50">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img1.jpg" alt="" />
                    <div className="batch">
                      <span>-15%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Air pod Pro Original</Link>
                  </h6>
                  <span>
                    $150.00 <del>$200.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img2.jpg" alt="" />
                    <div className="batch">
                      <span>-10%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Sports Shoe For Men</Link>
                  </h6>
                  <span>
                    $318.00 <del>$350.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img3.jpg" alt="" />
                    <div className="batch">
                      <span>-5%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Redmi Smart Watch</Link>
                  </h6>
                  <span>
                    $90.00 <del>$120.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img4.jpg" alt="" />
                    <div className="batch">
                      <span>-8%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">canon Old Cemera</Link>
                  </h6>
                  <span>
                    $100.00 <del>$130.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img5.jpg" alt="" />
                    <div className="batch">
                      <span>-3%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Body Cream For Women</Link>
                  </h6>
                  <span>
                    $80.00 <del>$100.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img6.jpg" alt="" />
                    <div className="batch">
                      <span>-12%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Dove Beauty Cream</Link>
                  </h6>
                  <span>
                    $120.00 <del>$180.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img7.jpg" alt="" />
                    <div className="batch">
                      <span>New</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">
                      Crystal-Infused Highlighter
                    </Link>
                  </h6>
                  <span>$130.00</span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img8.jpg" alt="" />
                    <div className="batch">
                      <span>-8%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Macbook Pro 14”</Link>
                  </h6>
                  <span>
                    $1805.00 <del>$2000.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card">
                <div className="product-card-img">
                  <Link href="/product-details">
                    <img src="/assets/img/innerpage/product-img9.jpg" alt="" />
                    <div className="batch">
                      <span>-5%</span>
                    </div>
                  </Link>
                  <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link href="/product-details">Givenchy Makeup Pack</Link>
                  </h6>
                  <span>
                    $110.00 <del>$150.00</del>
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item paginations-button">
                    <a href="#">
                      NXT
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                      >
                        <path d="M0.020025 6.33628C0.0901115 6.5271 0.25031 6.73476 0.400496 6.83017C0.550683 6.91997 0.946172 6.92558 5.76715 6.95364L10.9736 6.98171L9.08627 8.77205C7.85974 9.93381 7.16889 10.6297 7.11883 10.7476C6.94862 11.1517 7.10381 11.6961 7.44423 11.8981C7.63947 12.0216 8.01494 12.0328 8.18014 11.9318C8.24022 11.8925 9.53682 10.6803 11.0687 9.23226C12.941 7.45876 13.8722 6.53833 13.9273 6.42047C14.0775 6.05567 13.9923 5.65719 13.697 5.3429C13.2014 4.82656 8.1451 0.140237 8.00993 0.0728886C7.79466 -0.0337464 7.60943 -0.0225217 7.36413 0.100951C6.96864 0.302995 6.79843 0.909129 7.0137 1.31883C7.06376 1.41424 7.96988 2.301 9.02619 3.28316C10.0775 4.27093 10.9436 5.09034 10.9436 5.11279C10.9486 5.14085 8.61068 5.15769 5.74713 5.15769L0.550683 5.15769L0.385478 5.28116C0.135167 5.47759 0.0250308 5.67964 0.00500557 5.98271C-0.00500609 6.12863 -2.49531e-07 6.29139 0.020025 6.33628Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        {/* </div> */}
        <div className="m-5">
          <h2>Terms & Conditions</h2>
          <p className="font-weight-bold">Last updated on 18-04-2024 11:25:21</p>
          <p className="w-100 fs-10">
          These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding 
agreement by and between SEPNOTY TECHNOLOGIES PRIVATE LIMITED, ( “Website Owner” or 
“we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods (as 
applicable) or services (as applicable) (collectively, “Services”).
          </p>
          <p>
          By using our website and availing the Services, you agree that you have read and accepted these Terms 
(including the Privacy Policy). We reserve the right to modify these Terms at any time and without 
assigning any reason. It is your responsibility to periodically review these Terms to stay informed of 
updates.
          </p>
          <p className="fs-12 font-weight-bold">The use of this website or availing of our Services is subject to the following terms of use:</p>
        <ul className="list-style-type-disc m-5 ml-3 w-75" style={{ listStyleType: 'disc' }}> {/* Add mx-3 class for horizontal margin */}
      <li > To access and use the Services, you agree to provide true, accurate and complete information to us 
during and after registration, and you shall be responsible for all acts done through the use of your 
registered account.</li> {/* Bootstrap class for list item */}
<br/>
      <li className="">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, 
performance, completeness or suitability of the information and materials offered on this website 
or through the Services, for any specific purpose. You acknowledge that such information and 
materials may contain inaccuracies or errors and we expressly exclude liability for any such 
inaccuracies or errors to the fullest extent permitted by law.</li>
<br/>
      <li className="">Your use of our Services and the websiteis solely at your own risk and discretion.. You are 
required to independently assess and ensure that the Services meet your requirements.</li>
      <br/>
      <li>
      The contents of the Website and the Services are proprietary to Us and you will not have any 
authority to claim any intellectual property rights, title, or interest in its contents.
      </li>
      <br/>
      <li>
      You acknowledge that unauthorized use of the Website or the Services may lead to action against 
you as per these Terms or applicable laws.
      </li>
      <br/>
      <li>
      You agree to pay us the charges associated with availing the Services.
      </li>
      <br/>
      <li>
      You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or 
forbidden by these Terms, or Indian or local laws that might apply to you.
      </li>
      <br/>
      <li>
      You agree and acknowledge that website and the Services may contain links to other third party 
websites. On accessing these links, you will be governed by the terms of use, privacy policy and 
such other policies of such third party websites.
      </li>
      <br/>
      <li>
      You understand that upon initiating a transaction for availing the Services you are entering into a 
legally binding and enforceable contract with the us for the Services.
      </li>
      <br/>
      <li>
      You shall be entitled to claim a refund of the payment made by you in case we are not able to 
provide the Service. The timelines for such return and refund will be according to the specific 
Service you have availed or within the time period provided in our policies (as applicable). In case 
you do not raise a refund claim within the stipulated time, than this would make you ineligible for 
a refund.
      </li>
      <br/>
      <li>
      Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to 
perform an obligation under these Terms if performance is prevented or delayed by a force majeure 
event.
      </li>
      <br/>
      <li>
      These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and 
construed in accordance with the laws of India.
      </li>
      <br/>
      <li>
      All disputes arising out of or in connection with these Terms shall be subject to the exclusive 
jurisdiction of the courts in Kandukur, Andhra Pradesh
      </li>
      <br/>
      <li>
      All concerns or communications relating to these Terms must be communicated to us using the 
contact information provided on this website.
      </li>
    </ul>
        </div>
      </div>
     
    </MainLayout>
  );
};

export default TermsAndCondtions;
