import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer id="FooterZone">
      <section
        className="footer v4 dark-bg bg-image bg-box-unlike"
        id="FooterV4"
        universal_="true"
      >
        <picture className="img-bg bg-position" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="/assets/footers/footer-v4-bg-mobile.jpg"
            data-src="/assets/footers/footer-v4-bg-mobile.jpg"
          />
          <img
            src="/assets/footers/footer-v4-bg.jpg"
            loading="lazy"
            alt=""
            title=""
            data-src="/assets/footers/footer-v4-bg.jpg"
          />
        </picture>
        <div className="bg-box bottom-margin no-shadow">
          <div className="main">
            <nav className="footer-nav full" id="FooterV4Links">
              <ul
                className="flex-wrap-middle-center"
                aria-label="Footer Navigation"
              >
                <li className="text-center fit">
                  <Link href="/" target="">
                    Home
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/about/" target="">
                    About
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/conditions-we-treat/" target="">
                    Conditions We Treat
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/educational-videos/" target="">
                    Educational Videos
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/reviews/" target="">
                    Reviews
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/contact-locations/" target="">
                    Contact & Locations
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/privacy-policy/" target="">
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-center fit">
                  <Link href="/site-map/" target="">
                    Site Map
                  </Link>
                </li>
                {/* <li className="text-center fit">
                  <Link href="/site-search/" target="">
                    Site Search
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
        <div className="main">
          <div
            className="footer-info flex-spaced-between-block-1024-margined"

          // itemtype="http://schema.org/MedicalClinic"
          >
            <div className="schema-info text-center fourth">
              <div className="business-info bottom-margin-tiny">
                <Link href="/">
                  <img
                    className="dark-logo bottom-margin-tiny"
                    loading="lazy"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    alt="Premier Pain Centers"
                    title="Premier Pain Centers"
                    data-src="images/logos/Logo.png"
                  />

                  <img
                    className="light-logo bottom-margin-tiny"
                    loading="lazy"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    alt="Premier Pain Centers"
                    title="Premier Pain Centers"
                    data-src="images/logos/Logo2.png"
                    src="/cms/svg/Logo2.png"
                  />
                </Link>
              </div>
              <p
                className="no-bottom-margin description"
                style={{ margin: "10px 0px 10px 0px" }}
              >
                At Premier Pain Centers, we offer top quality pain management
                using some of the least invasive, most effective pain procedures
                possible.&nbsp;
              </p>
              <Link
                className="btn v1"
                style={{ letterSpacing: "0em", marginBottom: "10px" }}
                href="/contact-locations/"
              >
                Schedule an Appointment
              </Link>

              <Link style={{ display: "block" }} href="tel:469-562-4188">
                469-562-4188
              </Link>
              <Link rel="noreferrer" href="mailto:admin@mypremierpain.com">
                admin@mypremierpain.com
              </Link>
              {/* <span
                id="FooterV4_3"
                data-process="if"
                style={{ display: "none" }}
                field="{Cookie:PPCP2/}"
              >
                <br />
                <div id="FooterV4LocalPhoneHeader">
                  <strong className="title-style-5 title-color-5">
                    fAX: 469-562-4166&nbsp;<div>Email: admin@ppcdfw.com</div>
                  </strong>
                </div>
                <Link
                  className="phone-link phone-number-style"
                  href=""
                  id="FooterV4_4"
                  data-replace-href="tel:{F:P3:Cookie:PPCP2/}"
                >
                  <span>
                    <span
                      id="FooterV4_5"
                      data-process="replace"
                      data-replace="{F:P3:Cookie:PPCP2/}"
                    ></span>
                  </span>
                </Link>
              </span> */}
              {/* <div className="social-menu">
                <ul>
                  <li>
                    <Link
                      href="https://www.facebook.com/mypremierpain"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/premier_pain_centers/"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/premier-pain-centers-08582018a/"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="text-center" id="FooterV4OptionalBadge"></div>
            </div>
            <div className="three-fourths">
              <ul
                className="location-info full flex-grid-block-500-auto-size-wrap-max-3-break-800 close-gap-500 center-1024 ui-repeater"
                id="FooterV4AddressList"
                data-section=""
              >
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="16847"
                >
                  <strong className="title-style-5 title-color-5">
                    Richardson
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>403 W Campbell Rd., Ste. 305</span>
                    <br /> <span>Richardson</span>, <span>TX</span>{" "}
                    <span>75080</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=4359111757237130564"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/richardson/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="16848"
                >
                  <strong className="title-style-5 title-color-5">
                    North Richland Hills
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>7904 NE Loop 820, Ste. C</span>
                    <br /> <span>North Richland Hills</span>, <span>TX</span>{" "}
                    <span>76180</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=10580295200115195655"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/north-richland-hills/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="16849"
                >
                  <strong className="title-style-5 title-color-5">
                    Fort Worth
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>1111 5th Ave,</span>
                    <br /> <span>Fort Worth</span>, <span>TX</span>{" "}
                    <span>76104</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=1967984420970158753"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/fort-worth/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="16850"
                >
                  <strong className="title-style-5 title-color-5">
                    Hillsboro
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>1323 E. Franklin St., Ste. 102</span>
                    <br /> <span>Hillsboro</span>, <span>TX</span>{" "}
                    <span>76645</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=9063563001732813751"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/hillsboro/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="16995"
                >
                  <strong className="title-style-5 title-color-5">
                    Lancaster
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>2700 W. Pleasant Run Rd., Ste. 320</span>
                    <br /> <span>Lancaster</span>, <span>TX</span>{" "}
                    <span>75146</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=16681715367138219884"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/lancaster/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="20201"
                >
                  <strong className="title-style-5 title-color-5">
                    Corsicana
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>3108 E. State HWY 22</span>
                    <br /> <span>Corsicana</span>, <span>TX</span>{" "}
                    <span>75102</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://goo.gl/maps/t3UcfhLPzrDX8rHH9"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/corsicana/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="17614"
                >
                  <strong className="title-style-5 title-color-5">
                    Farmers Branch
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>13988 Diplomat Dr., Ste. 100</span>
                    <br /> <span>Farmers Branch</span>, <span>TX</span>{" "}
                    <span>75234</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=3934515186064169906"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/farmers-branch/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="19873"
                >
                  <strong className="title-style-5 title-color-5">
                    Waxahachie Office
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span>20 Northgate Dr.</span>
                    <br /> <span>Waxahachie</span>, <span>TX</span>{" "}
                    <span>75165</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://www.google.com/maps?cid=16055043450728768858"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/waxahachie/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="20201"
                >
                  <strong className="title-style-5 title-color-5">
                    Decatur
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span> 902 Preskitt Rd Suite 300,</span>
                    <br /> <span>Decatur</span>, <span>TX</span>{" "}
                    <span>76234</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://goo.gl/maps/ajt2yjVWs8Lfn5CKA"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link rel="noreferrer" href="/contact-locations/decatur/">
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className="fit"
                  // itemtype="http://schema.org/PostalAddress"
                  data-item="i"
                  data-key="20201"
                >
                  <strong className="title-style-5 title-color-5">
                    Cleburne
                  </strong>
                  <div className="no-top-margin no-bottom-margin">
                    <span> 131 S Westmeadow Dr,</span>
                    <br /> <span>Cleburne</span>, <span>TX</span>{" "}
                    <span>76033</span>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#directions"
                      >
                        <path d="M18.2 0.002a13.677 13.677 0 0 0-2.282 0.16a13.424 13.424 0 0 0-11.337 13.058C4.461 20.634 13.136 31.345 17.789 35.999c5.862-5.862 13.515-14.955 13.63-22.367l-7.664-0.12h0a5.938 5.938 0 0 1-2.093 3.28a5.938 5.938 0 0 1-3.676 1.278a5.938 5.938 0 0 1-4.188-1.742a5.938 5.938 0 0 1-1.731-4.192a5.938 5.938 0 0 1 1.74-4.188a5.938 5.938 0 0 1 4.192-1.731a5.938 5.938 0 0 1 4.19 1.74a5.928 5.928 0 0 1 1.731 4.192l-5.928 0l5.928 0h0a5.799 5.799 0 0 1-0.168 1.36l7.661 0.115a13.425 13.425 0 0 0-13.22-13.625Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="https://goo.gl/maps/SX3zQArg9RvyJZiD9?coh=178572&entry=tt"
                      >
                        Map &amp; Directions
                      </Link>
                    </div>
                    <div className="flex-middle center-1024">
                      <svg
                        viewBox="0 0 36 36"
                        className="fit right-margin-tiny"
                        title="Site Icon"
                        data-use="../../cms/svg/site/ephleesdski.36.svg#site_new"
                      >
                        <path d="M34.464 35.999L1.521 35.999C0.681 35.999-0.008 35.311-0.008 34.471L-0.008 1.528C-0.008 0.687 0.681-0.001 1.521-0.001L17.954-0.001C18.795-0.001 19.483 0.687 19.483 1.528C19.483 2.368 18.795 3.057 17.954 3.057L2.973 3.057L2.973 33.018L32.859 33.018L32.859 18.038C32.859 17.197 33.547 16.509 34.388 16.509C35.228 16.509 35.917 17.197 35.992 18.038L35.992 34.471C35.992 35.311 35.305 35.999 34.464 35.999ZM34.464 13.069C33.623 13.069 32.936 12.381 32.936 11.54L32.936 5.197L19.025 19.107C18.718 19.413 18.336 19.566 17.954 19.566C17.573 19.566 17.19 19.413 16.884 19.107C16.273 18.496 16.273 17.579 16.884 16.968L30.718 3.132L24.375 3.132C23.534 3.132 22.846 2.445 22.846 1.604C22.846 0.764 23.534 0.076 24.375 0.076L34.311 0.076C34.388 0.076 34.54 0.076 34.617 0.076C34.693 0.076 34.693 0.076 34.77 0.076C34.846 0.152 34.846 0.152 34.922 0.152C34.999 0.152 34.999 0.228 35.076 0.228C35.152 0.228 35.228 0.305 35.228 0.305C35.381 0.458 35.534 0.61 35.61 0.764C35.687 0.764 35.687 0.839 35.687 0.839C35.687 0.916 35.763 0.916 35.763 0.993C35.84 1.069 35.84 1.069 35.84 1.146C35.84 1.222 35.917 1.222 35.992 1.298C35.992 1.375 35.992 1.528 35.992 1.604L35.992 11.54C35.992 12.381 35.305 13.069 34.464 13.069Z"></path>
                      </svg>
                      <Link
                        rel="noreferrer"
                        href="/contact-locations/cleburne/"
                      >
                        View Site
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scorpion-footer dark-bg"
        id="MedicalScorpionFooter"
        universal_="true"
      >
        <div className="main">
          <div className="flex-middle-spaced-between">
            <small className="info" id="MedicalScorpionFooterDisclaimer">
              <div>
                The information on this website is for general information
                purposes only. Nothing on this site should be taken as medical
                advice for any individual case or situation. This information is
                not intended to create, and receipt or viewing does not
                constitute, a doctor-patient relationship.
              </div>

              <p>&copy; 2022 All Rights Reserved.</p>
            </small>
          </div>
        </div>
      </section>
    </footer>
  );
};
