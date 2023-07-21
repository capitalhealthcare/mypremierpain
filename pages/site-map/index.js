import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";
import React from "react";

export const SiteMap = () => {
  return (
    <>
      <Header />
      <main id="MainZone">
        <section
          className="site-map v1 light-bg bg-box-unlike"
          id="SiteMapV1"
          data-onvisible="show"
          style={{ zIndex: "0" }}
        >
          <div className="main thin">
            <div className="bg-box side-padding vertical-padding-small box-flair border-radius">
              <div className="flair-border">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <div className="content-style">
                  <header>
                    <h1>Site Map</h1>
                  </header>
                  <ul id="SiteMapV1List">
                    <li>
                      <Link href="/" target="">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="../about/" target="">
                        About
                      </Link>
                    </li>
                  </ul>
                  <li>
                    <Link href="../meet-our-team/" target="">
                      Our Providers
                    </Link>
                  </li>
                  <li>
                    <Link href="../assets/Rao-Ali-AR-1.pdf" target="_blank">
                      Insurances Accepted
                    </Link>
                  </li>

                  <li>
                    <Link href="../conditions-we-treat/" target="">
                      Conditions We Treat
                    </Link>
                    <ul>
                      <li>
                        <Link
                          href="../conditions-we-treat/car-accident-injury/"
                          target=""
                        >
                          Car Accident Injury
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../conditions-we-treat/sports-injury/"
                          target=""
                        >
                          Sports Injury
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../conditions-we-treat/back-pain/"
                          target=""
                        >
                          Back Pain
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../conditions-we-treat/knee-pain/"
                          target=""
                        >
                          Knee Pain
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../conditions-we-treat/headaches/"
                          target=""
                        >
                          Headaches
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../conditions-we-treat/neck-pain/"
                          target=""
                        >
                          Neck Pain
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../conditions-we-treat/joint-pain/"
                          target=""
                        >
                          Joint Pain
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/treatments"
                          target=""
                        >
                          Treatments
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="../educational-videos/" target="">
                      Educational Videos
                    </Link>
                  </li>
                  <li>
                    <Link href="../video-testimonials" target="">
                      Video Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="../reviews" target="">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="../contact-locations/" target="">
                      Contact & Locations
                    </Link>
                    <ul>
                      <li>
                        <Link href="../contact-locations/richardson/" target="">
                          Richardson
                        </Link>
                      </li>
                      <li>
                        <Link href="../contact-locations/waxahachie/" target="">
                          Waxahachie
                        </Link>
                      </li>
                      <li>
                        <Link href="../contact-locations/fort-worth/" target="">
                          Fort Worth
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../contact-locations/north-richland-hills/"
                          target=""
                        >
                          North Richland Hills
                        </Link>
                      </li>
                      <li>
                        <Link href="../contact-locations/hillsboro/" target="">
                          Hillsboro
                        </Link>
                      </li>
                      <li>
                        <Link href="../contact-locations/lancaster/" target="">
                          Lancaster
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="../contact-locations/farmers-branch/"
                          target=""
                        >
                          Farmers Branch
                        </Link>
                      </li>
                      <li>
                        <Link href="../contact-locations/corsicana/" target="">
                          Corsicana
                        </Link>
                      </li>
                      <li>
                        <Link href="../contact-locations/decatur/" target="">
                          Decatur
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog" target="">
                      Blog
                    </Link>
                    <ul>
                      <li>
                        Categories
                        <ul>
                          <li>
                            <Link
                              href="conditions-we-treat/back-pain/"
                              target=""
                            >
                              Back Pain
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="conditions-we-treat/knee-pain/"
                              target=""
                            >
                              Knee Pain
                            </Link>
                          </li>
                          <li>
                            <Link href="conditions-we-treat/leg-pain" target="">
                              Leg Pain
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="conditions-we-treat/neck-pain"
                              target=""
                            >
                              Neck Pain
                            </Link>
                          </li>
                          <li>
                            <Link href="/treatments/" target="">
                              Treatments
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default SiteMap;
