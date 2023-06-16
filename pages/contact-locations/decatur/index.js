import { AppointmentForm } from "@/components/AppointmentForm";
import { Banner } from "@/components/CommonBanner/Banner";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export const Decatur = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pain Management Doctors in Decatur</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Decatur. Let us help you recover! Contact Premier Pain Centers to schedule an appointment for Richardson Pain Management. Book your consultation today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          property="og:title"
          content="Pain Management Doctors in Decatur"
        />
        <meta
          property="og:description"
          content="Decatur. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
      </Head>

      <Header />
      <Banner bg="/assets/sub-banners/sub-banner-v1-bg.jpg" title="DECATUR" />

      <section
        className="two-column-layout light-bg col-66-33 vertical-padding items-spaced flow-reverse"
        id="TwoColumnLayout"
      >
        <div className="main flex-spaced-between-block-1024-margined item-spacing item-widths flex-direction">
          <div className="content-zone" id="ContentZone">
            <div
              className="column-layout-content transparent-bg bg-box-none light-bg"
              id="ColumnLayoutContent"
              data-onvisible="show"
            >
              <div className="bg-box side-padding-medium vertical-padding-small box-flair border-radius">
                <div className="flair-border" data-content="true">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div
                    className="content-style"
                    id="MainContent"
                    data-content="true"
                  >
                    <h1>Pain Management Services in Decatur</h1>
                    <h5>Phone</h5>
                    <h4>
                      <Link href="tel:469-562-4188">469-562-4188</Link>
                    </h4>
                    <h5>Fax</h5>
                    <p>469-562-4166</p>
                    <h5>Email</h5>
                    <p>
                      <Link
                        rel="noreferrer"
                        href="mailto:admin@mypremierpain.com"
                      >
                        admin@mypremierpain.com
                      </Link>
                    </p>
                    <h5>Hours</h5>
                    <div>
                      <strong>Monday:</strong> 9:00 AM - 5:00 PM
                    </div>
                    <div>
                      <strong>Tuesday:</strong> 9:00 AM - 5:00 PM
                    </div>
                    <div>
                      <strong>Wednesday:</strong> 9:00 AM - 5:00 PM
                    </div>
                    <div>
                      <strong>Thursday:</strong> 9:00 AM - 5:00 PM
                    </div>
                    <div>
                      <strong>Friday:</strong> 9:00 AM - 5:00 PM
                    </div>
                    <h5>Address</h5>
                    <div>902 Preskitt Rd, Suite 300</div>
                    <div>Dectur, TX 76234</div>
                    <div>
                      <Link
                        rel="noreferrer"
                        href="https://goo.gl/maps/ajt2yjVWs8Lfn5CKA"
                      >
                        + Maps &amp; Directions
                      </Link>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.0547635563785!2d-97.5972752!3d33.2126605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d92b17a955555%3A0x170da28202951a6e!2s902%20Preskitt%20Rd%20Suite%20300%2C%20Decatur%2C%20TX%2076234%2C%20USA!5e0!3m2!1sen!2s!4v1664704909913!5m2!1sen!2s"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-zone" id="SideZone">
            <aside
              className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
              id="SideNavV1"
              data-onvisible="show"
              data-slider="true"
              data-closing="false"
            >
              <nav>
                <header className="text-left">
                  <Link href="/about/">
                    <h5>About</h5>
                  </Link>
                </header>
                <ul className="" data-role="panel">
                  <li className="level-1  ">
                    <Link className="auto" href="/meet-our-team/" target="">
                      Our Providers
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="/about/careers/" target="">
                      Careers
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link
                      className="auto"
                      href="../../assets/Rao-Ali-AR-1.pdf"
                      rel="noreferrer"
                    >
                      Insurances Accepted
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <aside
              className="side-reviews v1 light-bg transparent-bg bg-box-unlike text-center side-padding-medium vertical-padding-tiny"
              id="SideReviewsV1"
              data-onvisible="show"
              data-role="scroller"
            >
              <div className="text-center bg-box border-radius side-padding-large vertical-padding-small box-flair">
                <header
                  className="text-align center-800 no-pad bottom-margin-tiny"
                  id="SideReviewsV1HeaderNew"
                >
                  <h5>Patient Reviews</h5>
                </header>
                <div className="flair-border full">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div data-role="container">
                    <ul
                      className="flex-middle ui-repeater"
                      id="SideReviewsV1Feed"
                      data-role="list"
                    >
                      <li
                        className="full"
                        data-role="item"
                        data-item="i"
                        data-key="3172114"
                      >
                        <blockquote className="margin-auto">
                          <strong className="title-style-4">
                            &ldquo;I came to see Dr. Ali for a consultation for
                            low back pain from years of doing gymnastics. He was
                            able to make a care plan to treat my low back pain
                            and his plan has helped reduce my pain
                            tremendously.&rdquo;
                          </strong>

                          <div className="top-margin-tiny">
                            <strong className="author">- Mikey D.</strong>
                          </div>
                        </blockquote>
                      </li>
                      <li
                        className="full"
                        data-role="item"
                        data-item="i"
                        data-key="3172118"
                      >
                        <blockquote className="margin-auto">
                          <strong className="title-style-4">
                            &ldquo;I'm finally feeling what quality of life
                            feels like. I am very thankful I found Dr. Ali. He
                            will always be my pain management doctor. He is a
                            very good doctor that knows how to fix your pain and
                            he really cares about his patients.&rdquo;
                          </strong>

                          <div className="top-margin-tiny">
                            <strong className="author">- Ricky C.</strong>
                          </div>
                        </blockquote>
                      </li>
                      <li
                        className="full"
                        data-role="item"
                        data-item="i"
                        data-key="3160510"
                      >
                        <blockquote className="margin-auto">
                          <strong className="title-style-4">
                            &ldquo;Dr. Ali cares about his patients he doesn't
                            give up on his patients he keeps working with them
                            to get the pain down to at least 90-95%. Dr. Ali
                            walked my CNA step by step on how to take the wire
                            out no pain at all he stayed on the phone the whole
                            time.&rdquo;
                          </strong>

                          <div className="top-margin-tiny">
                            <strong className="author">- Shannon S.</strong>
                          </div>
                        </blockquote>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="SideReviewsV1BtnConNew">
                  <div className="top-margin-small text-center">
                    <Link
                      className="btn v1"
                      href="/reviews/"
                      aria-labelledby="SideReviewsV1HeaderNew"
                    >
                      All reviews
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <AppointmentForm />

      <Footer />
    </>
  );
};

export default Decatur;
