import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useState } from "react";

export const Header = ({ position, backgroundTransparent }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {sidebar && (
        <div id="mySidenav" className="sidenav">
          <p
            style={{ color: "#fff" }}
            className="closebtn"
            onClick={() => setSidebar(!sidebar)}
          >
            &times;
          </p>
          <Link href="/video-testimonials">Video Testimonials</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faqs">FAQ</Link>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/conditions-we-treat">Conditions We Treat</Link>
          <Link href="/educational-videos">Educational Videos</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact-locations">Contact & Locations</Link>
        </div>
      )}

      <header
        id="HeaderZone"
        style={{ position: `${position}`, width: "100%", top: "0" }}
      >
        <div
          style={{ backgroundColor: `${backgroundTransparent}` }}
          className="header v11-alt dark-bg show transparent-bg bg-box-none"
          id="HeaderV11Alt"
          universal_="true"
          data-showhide="true"
          data-header="true"
          data-classname-name="menu-open"
          data-html-classname="true"
        >
          {/* <Link  name="SiteTop"></Link > */}
          <div
            className="nav-bar flex-spaced-between-block-800 center-800"
            id="HeaderV11AltTopNavigation"
          >
            <div className="box side-padding-small vertical-padding-tiny flex- max-logo">
              <Link className="top-logo fit flex-middle center-800" href="/">
                <Image
                  width="1000"
                  height="100"
                  className="dark-logo"
                  alt="Premier Pain Centers"
                  title="Premier Pain Centers"
                  src="/cms/svg/Logo2.png"
                />
                <Image
                  width="1000"
                  height="100"
                  className="light-logo"
                  alt="Premier Pain Centers"
                  title="Premier Pain Centers"
                  src="/cms/svg/Logo2.png"
                />
              </Link>
            </div>
            <div className="flex-column auto">
              <div className="top-bar bg-box side-padding-small flex-middle-spaced-end full">
                <nav
                  className="hide-1280 secondary-nav right-margin-large"
                  aria-label="Quick Links"
                  id="HeaderV11AltQuickLinks"
                >
                  <ul className="flex-middle">
                    <li>
                      <Link href="/video-testimonials/">
                        Video Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/news">News</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQ</Link>
                    </li>
                  </ul>
                </nav>
                <div className="hideOnMobile">

                  <Link
                    href="/contact-locations/"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Source Sans Pro",
                      letterSpacing: "0.1em",
                      color: "#F1F1F1",
                      fontWeight: "600",
                      lineHeight: "1.2",
                      backgroundColor: "#004588",
                      padding: "1vh",
                      borderRadius: ".2vw",
                      marginRight: "10px",
                    }}
                  >
                    Appointment{" "}
                  </Link>

                  <Link
                    href="tel:469-562-4188"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Source Sans Pro",
                      letterSpacing: "0.1em",
                      color: "#F1F1F1",
                      fontWeight: "600",
                      lineHeight: "1.2",
                      backgroundColor: "#004588",
                      padding: "1vh",
                      borderRadius: ".2vw",
                    }}
                  >
                    469-562-4188{" "}
                  </Link>

                </div>
                {/* { toggleSearch && <>
                  <input className="searchInpt" type="text"  value={searchValue} onChange={serchFilter} />
                 <ul className="searchlist">
                  {searchData && searchData.length && searchData.splice(0,4).map((res)=>{
                    return(
                    <li key={res.id}> <Link className="auto" href={`/blog/${res.slug}`}>{res.title.rendered}</Link></li>
                    )
                  })}
                 </ul>
                </> } */}
                {/* {toggleSearch && <input className="searchInput" type="text"  value={searchValue} />} */}
                <span
                  className="search-link btn-colors hide-500 border-radius fit left-margin-large"
                  // onClick={() => setToggleSearch(!toggleSearch)}
                  title="Search Our Site"
                  aria-label="Search Our Site"
                >
                  <svg
                    viewBox="0 0 24 24"
                    title="Search Icon"
                    data-use="cms/svg/site/ephleesdski.24.svg#search"
                  >
                    <path d="M23.234 21.861L17.522 15.92c1.468-1.746 2.274-3.942 2.274-6.23c0-5.343-4.347-9.69-9.69-9.69s-9.69 4.347-9.69 9.69s4.347 9.69 9.69 9.69c2.006 0 3.918-0.604 5.552-1.754l5.756 5.986c0.24 0.25 0.564 0.387 0.91 0.387c0.328 0 0.639-0.126 0.876-0.352C23.7 23.164 23.716 22.364 23.234 21.861zM10.104 2.529c3.95 0 7.163 3.213 7.163 7.163s-3.213 7.163-7.163 7.163s-7.163-3.213-7.163-7.163S6.156 2.529 10.104 2.529z"></path>
                  </svg>
                </span>
              </div>
              <div className="bottom-bar side-padding-small flex-between-middle auto full">
                <nav className="top-nav side-padding-small vertical-padding auto stretch flex- hide-1024">
                  <ul className="flex- auto" aria-label="Top Navigation">
                    <li className="selected flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li className=" flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/about"
                      >
                        About
                      </Link>

                      <ul className="fly-nav ui-scroll bg-box like-bg">
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/interventional-pain-management/"
                          >
                            Interventional Pain Management
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/pain-management-insurance/"
                          >
                            Pain Management Insurance
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/assets/Rao-Ali-AR-1.pdf"
                          >
                            Insurances Accepted
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/meet-our-team"
                          >
                            Our Providers
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/conditions-we-treat"
                      >
                        Conditions We Treat
                      </Link>

                      <ul className="fly-nav ui-scroll bg-box like-bg">
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/car-accident-injury"
                          >
                            Car Accident Injury
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/sports-injury/"
                          >
                            Sports Injury
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/back-pain"
                          >
                            Back Pain
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/knee-pain"
                          >
                            Knee Pain
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/headaches"
                          >
                            Headaches
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/neck-pain"
                          >
                            Neck Pain
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/joint-pain"
                          >
                            Joint Pain
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/shoulder-pain"
                          >
                            Shoulder Pain
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/conditions-we-treat/leg-pain"
                          >
                            Leg Pain
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/treatments"
                      >
                        Treatments
                      </Link>

                      <ul className="fly-nav ui-scroll bg-box like-bg">
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/mild-procedure"
                          >
                            Mild Procedure
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/percutaneous-discectomy"
                          >
                            Percutaneous Discectomy
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/trigger-point-injections"
                          >
                            Trigger Point Injections
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/epidural-nerve-block"
                          >
                            Epidural Nerve Block
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/joint-injections
                            "
                          >
                            Joint Injections
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/regenerating-spinal-discs"
                          >
                            Regenerating Spinal Discs
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/si-joint-injection"
                          >
                            SI Joint Injection
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/pronox"
                          >
                            Pronox
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/occipital-nerve-block"
                          >
                            Occipital Nerve Block
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/genicular-nerve-block"
                          >
                            Genicular Nerve Block
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/intrathecal-pump"
                          >
                            Intrathecal Pump
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/bursa-injection"
                          >
                            Bursa Injection
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/dorsal-root-ganglion-stimulation"
                          >
                            Dorsal Root Ganglion Stimulation
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/peripheral-nerve-stimulation"
                          >
                            Peripheral Nerve Stimulation
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/treatments/electrodiagnostic "
                          >
                            Electrodiagnostic
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/educational-videos"
                      >
                        Educational Videos
                      </Link>
                    </li>
                    <li className=" flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/reviews"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li className=" flex-block-1024 auto relative">
                      <Link
                        className="flex-middle-center-block-1024 auto center-1024"
                        href="/contact-locations"
                      >
                        Contact & Locations
                      </Link>

                      <ul className="fly-nav ui-scroll bg-box like-bg">
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/richardson/"
                          >
                            Richardson
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/waxahachie/"
                          >
                            Waxahachie
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/fort-worth/"
                          >
                            Fort Worth
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/north-richland-hills/"
                          >
                            North Richland Hills
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/hillsboro/"
                          >
                            Hillsboro
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/lancaster/"
                          >
                            Lancaster
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/farmers-branch/"
                          >
                            Farmers Branch
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/corsicana/"
                          >
                            Corsicana
                          </Link>
                        </li>
                        <li className="selected">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/decatur/"
                          >
                            Decatur
                          </Link>
                        </li>
                        <li className="selected">
                          <Link
                            className="btn-color-hover"
                            href="/contact-locations/cleburne/"
                          >
                            Cleburne
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div
                  className="cta fit hide-800 left-margin-large right-margin-large vertical-padding-tiny flex-middle"
                  id="HeaderV11AltCta"
                ></div>
                <button
                  className="menu-btn desktop hide-800 btn-colors top-margin-small bottom-margin-small"
                  title="Main Menu"
                  aria-label="Main Menu"
                  type="button"
                  data-role="btn"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <div className="nav-box bg-box flex-block-800" data-role="panel">
            <nav className="half flex- auto side-padding-medium vertical-padding-large">
              <div className="auto nav relative ui-scroll el-tab-box">
                <ul
                  className="bottom-margin-small"
                  aria-label="Quick Links Mobile"
                  id="HeaderV11AltQuickLinksMobile"
                >
                  <li className="  relative">
                    <Link
                      href="video-testimonials/"
                      className="title-style-4 title-color-4"
                    >
                      Video Testimonials
                    </Link>
                  </li>
                  <li className="top-margin-small  relative">
                    <Link href="/blog/" className="title-style-4 title-color-4">
                      Blog
                    </Link>
                  </li>
                </ul>
                <ul
                  role="menubar"
                  aria-label="Top Navigation"
                  id="HeaderV11AltMobileNavigation"
                  data-role="panel"
                  data-closing="true"
                >
                  <li className="  selected  relative">
                    <Link href="" className="title-style-4 title-color-4">
                      Home
                    </Link>
                  </li>

                  <li className="top-margin-small   flex-middle-wrap relative">
                    <Link href="about/" className="title-style-4 title-color-4">
                      About
                    </Link>

                    <span
                      className="site-arrow el-tab relative"
                      title="Open child menu of About"
                    >
                      {/* <svg className="site-arrow">
                        <use href="includes/flair.svg#arrow-down"></use>
                      </svg> */}
                    </span>
                    <ul
                      className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                      style={{ display: "none" }}
                    >
                      <li className="">
                        <Link className="btn-color-hover" href="meet-our-team/">
                          Our Providers
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="/assets/Rao-Ali-AR-1.pdf"
                          rel="noreferrer"
                        >
                          Insurances Accepted
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="top-margin-small   flex-middle-wrap relative">
                    <Link
                      href="conditions-we-treat/"
                      className="title-style-4 title-color-4"
                    >
                      Conditions We Treat
                    </Link>

                    <span
                      className="site-arrow el-tab relative"
                      title="Open child menu of Conditions We Treat"
                    >
                      {/* <svg className="site-arrow">
                        <use href="includes/flair.svg#arrow-down"></use>
                      </svg> */}
                    </span>
                    <ul
                      className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                      style={{ display: "none" }}
                    >
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/car-accident-injury/"
                        >
                          Car Accident Injury
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/sports-injury/"
                        >
                          Sports Injury
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/back-pain/"
                        >
                          Back Pain
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/knee-pain/"
                        >
                          Knee Pain
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/headaches/"
                        >
                          Headaches
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/neck-pain/"
                        >
                          Neck Pain
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/joint-pain/"
                        >
                          Joint Pain
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="top-margin-small   flex-middle-wrap relative">
                    <Link
                      href="conditions-we-treat/"
                      className="title-style-4 title-color-4"
                    >
                      Treatments
                    </Link>

                    <span
                      className="site-arrow el-tab relative"
                      title="Open child menu of Conditions We Treat"
                    >
                      {/* <svg className="site-arrow">
                        <use href="includes/flair.svg#arrow-down"></use>
                      </svg> */}
                    </span>
                    <ul
                      className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                      style={{ display: "none" }}
                    >
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/car-accident-injury/"
                        >
                          Car Accident Injury
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/sports-injury/"
                        >
                          Sports Injury
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/back-pain/"
                        >
                          Back Pain
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/knee-pain/"
                        >
                          Knee Pain
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/headaches/"
                        >
                          Headaches
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/neck-pain/"
                        >
                          Neck Pain
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="conditions-we-treat/joint-pain/"
                        >
                          Joint Pain
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="top-margin-small    relative">
                    <Link
                      href="educational-videos/"
                      className="title-style-4 title-color-4"
                    >
                      Educational Videos
                    </Link>
                  </li>
                  <li className="top-margin-small    relative">
                    <Link
                      href="reviews/"
                      className="title-style-4 title-color-4"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li className="top-margin-small   flex-middle-wrap relative">
                    <Link
                      href="contact-locations/"
                      className="title-style-4 title-color-4"
                    >
                      Contact & Locations
                    </Link>

                    <span
                      className="site-arrow el-tab relative"
                      title="Open child menu of Contact & Locations"
                    >
                      {/* <svg className="site-arrow">
                        <use href="includes/flair.svg#arrow-down"></use>
                      </svg> */}
                    </span>
                    <ul
                      className="full bg-box like-bg no-shadow vertical-padding-tiny top-margin-tiny el-panel sliding"
                      style={{ display: "none" }}
                    >
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/richardson/"
                        >
                          Richardson
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/waxahachie/"
                        >
                          Waxahachie
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/fort-worth/"
                        >
                          Fort Worth
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/north-richland-hills/"
                        >
                          North Richland Hills
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/hillsboro/"
                        >
                          Hillsboro
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/lancaster/"
                        >
                          Lancaster
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/farmers-branch/"
                        >
                          Farmers Branch
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="btn-color-hover"
                          href="contact-locations/corsicana/"
                        >
                          Corsicana
                        </Link>
                      </li>
                      <li className="selected">
                        <Link
                          className="btn-color-hover"
                          href="/contact-locations/decatur/"
                        >
                          Decatur
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="half bg-box like-bg side-padding-medium vertical-padding-large business-info">
              <div id="HeaderV11AltLocationInfo" className="ui-repeater">
                <div data-item="i" data-key="16847">
                  <Link className="btn v1" href="/contact-locations/">
                    View Our Locations
                  </Link>
                </div>
              </div>

              <div className="top-margin-large">
                <Link
                  className="search-link btn v1"
                  // href="/site-search/"
                  href="/"
                >
                  Search Our Site
                </Link>
              </div>
            </div>
          </div>
          <button
            className="menu-btn mobile btn-colors"
            title="Main Menu"
            aria-label="Main Menu"
            type="button"
            data-role="btn"
            onClick={() => setSidebar(!sidebar)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {/* <script id="Process_HeaderV11Alt" type="text/javascript"
			style="display:none;">window.Process && Process.Page(['Process_HeaderV11Alt', 'HeaderV11AltTopNavigation_HDR0_HeaderV11Alt_1', 'HeaderV11Alt_2', 'HeaderV11Alt_3', 'HeaderV11AltTopNavigation_HDR0_HeaderV11Alt_4', 'HeaderV11Alt_5', 'HeaderV11Alt_6']);</script> */}
      </header>

      {/* <!--  ClickCease.com Conversion tracking--> */}
      {/* <Script type="text/javascript" id="my-script">
        {`
             ccConVal = 0; var script = document.createElement("script");
             script.async = true; script.type = "text/javascript"; var target =
             'https://www.clickcease.com/monitor/cccontrack.js'; script.src = target;
             var elem = document.head; elem.appendChild(script);
        `}
      </Script>
      <Script id="ccconvertion">
        {`
        function initCCConvertion(val) {
          window.ccConVal = val || 0;
          var script = document.createElement('script');
          var target = 'https://www.clickcease.com/monitor/cccontrack.js';
          var elem = document.head;
          script.type = 'text/javascript';
          script.src = target;
          elem.appendChild(script);
      }
        `}
      </Script> */}
      {/* <Script id="t-a-g-noscriot"> */}
      {/* <!-- Google Tag Manager (noscript) --> */}
      {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJ54LHJ"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}
      {/* <!-- End Google Tag Manager (noscript) --> */}
      {/* </Script> */}
      {/* <noscript>
        <a href="https://www.clickcease.com" rel="nofollow">
          <img
            src="https://monitor.clickcease.com/conversions/conversions.aspx?value=0"
            alt="ClickCease"
          />
        </a>
      </noscript> */}
      {/* <Script id="clarity">
        {`
     
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "f6n5c2xzma");
   `}
      </Script> */}
      {/* <!--  ClickCease.com Conversion tracking--> */}

      {/* <Script src="cms/includes/le5hrhe5p2v.2208181951573.js"></Script> */}
    </>
  );
};
