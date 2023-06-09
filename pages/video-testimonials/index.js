import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Banner } from "@/components/CommonBanner/Banner";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";

const SSR_ENDPOINT = process.env.SSR_API_URL;

export const VideoTestimonials = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [patientType, setPatientType] = useState("");
  const [message, setMessage] = useState("");

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      firstName,
      lastName,
      phone,
      email,
      patientType,
      message,
    };

    const appointment = await axios.post(
      SSR_ENDPOINT + "appointment/create/",
      data
    );
    if (appointment.status === 200) {
      toast("Thanks for contacting us");
      setTimeout(() => {
        Router.push("/thank-you");
      }, 2000);
    }
  };

  return (
    <>
      <Head></Head>

      <Header />
      <ToastContainer />
      <Banner
        title="Video Testimonials"
        bg="/assets/sub-banners/sub-banner-v1-bg.jpg"
      />

      <main id="MainZone">
        <section
          className="content v12 light-bg large-padding col-50-50 items-spaced vertical-top text-left"
          id="ContentV12"
          data-onvisible="show"
        >
          <picture className="img-bg">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/content/content-v12-bg-mobile.jpg"
              data-src="/assets/content/content-v12-bg-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/content/content-v12-bg-tablet.jpg"
              data-src="/assets/content/content-v12-bg-tablet.jpg"
            />
            <Image
              layout="fill"
              src="/assets/content/content-v12-bg.jpg"
              alt=""
              data-src="/assets/content/content-v12-bg.jpg"
            />
          </picture>
          <div className="main" data-content="true">
            <div className="flex-spaced-between-block-1024-margined item-widths item-spacing">
              <div className="half">
                <div className="content-style" id="Contentv12Content">
                  <h2>
                    Chronic Low Back Pain Treated with Cluneal Nerve Stimulation
                  </h2>
                  <p>
                    In this video, patient is expressing her thoughts on the way
                    Dr. Ali treated her back pain.
                  </p>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/Rl9QSwdkXtM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    ></iframe>
                  </p>
                  <h2></h2>
                  <h2>
                    How to Improve Quality of Life by Comprehensive Pain
                    Management
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/NflZfK2itFY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    ></iframe>
                  </h2>
                  <h2>
                    How 36 Year Old Abdominal Pain Treated by Spinal Cord
                    Simulator
                  </h2>
                  <p>
                    The patient had Abdominal pain for 36 years. He tried Spinal
                    Cord Stimulator! Let&rsquo;s see what patient has to see
                    about his pain relief!
                  </p>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/weM6bfy73ow"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    ></iframe>
                  </p>
                  <h2>Instant Pain Relief After Lumbar Epidural Injection</h2>
                  <p>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/hAqRESlEJTU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    ></iframe>
                  </p>
                  <h2>
                    Radiofrequency Ablation, Pain Management Procedure Providing
                    Great Relief
                  </h2>
                  <p>
                    Lower back pain caused by facet joints arthritis can be
                    treated with radiofrequency lesioning of medial branch
                    blocks providing six months to a year of pain improvement!
                  </p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/JBJs2kyhNx8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
              <div className="half content-style" id="Contentv12ContentB">
                <h2>Radiofrequency Ablation for Knee Pain</h2>
                <p>
                  The patient had knee pain and was treated by a non-surgical
                  method called radiofrequency ablation.
                </p>
                <p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/l9bmF878XqE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </p>
                <h2>
                  Compression Fracture Caused by Osteoporosis &amp; Fall Treated
                  by performing Kyphoplasty
                </h2>
                <p>
                  Kyphoplasty performed by Dr Rao Ali to help with back pain due
                  to compression fracture caused by osteoporosis and fall. The
                  patient is so happy after the procedure and is all set for
                  Christmas shopping.
                </p>
                <p>
                  A compression fracture is caused by many factors; osteoporosis
                  is on top of the list; where there is a loss of bone mass due
                  to aging or hormonal imbalance. A fall, slipping, lifting of
                  some heavy object may cause a fracture of the back bones.
                </p>
                <p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cY6lBFdHlmI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </p>
                <h2>
                  Nerve Blocks Provide Great Pain Relief To All Age Groups
                </h2>
                <p>
                  Effective Pain Management by Nerve Blocks for Headaches, Neck,
                  Back, Extremity, Joint, Nerve Pain improvement. 95 year old
                  female can feel pain relief and functional improvement after
                  nerve blocks.
                </p>
                <p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nUFTjdDJ7G8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </p>
                <h2>How Spinal Cord Simulator Changed Patient's Life</h2>
                <p>
                  Spinal cord stimulator trial is performed using percutaneous
                  leads and minimally invasive techniques is changing
                  people&rsquo;s lives by pain improvement and avoiding open
                  spine surgeries and fusions.
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/DSbN7yXxkpM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                ></iframe>
                <h2>Phantom Pain Treated With Targeted Epidural Approach</h2>

                <video width="560" height="315" controls>
                  <source
                    src="https://www.mypremierpain.com/video-testimonials/WhatsApp Video 2022-10-07 at 10.08.32.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="full text-align" id="ContentV12BtnCon"></div>
          </div>
        </section>

        <form id="Form_ContactV10" method="post" onSubmit={HandleForm}>
          <input type="hidden" name="_m_" value="ContactV10" />
          <section
            className="contact v10 bg-box-like col-50-50 items-spaced vertical-middle text-left flow-reverse dark-bg bg-image large-padding bg-center-center"
            id="ContactV10"
            data-onvisible="show"
          >
            <picture className="img-bg" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="/assets/contact/contact-v10-bg-tablet.jpg"
                data-src="/assets/contact/contact-v10-bg-mobile.jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/assets/contact/contact-v10-bg-tablet.jpg"
                data-src="/assets/contact/contact-v10-bg-tablet.jpg"
              />
              <img
                src="/assets/contact/contact-v10-bg.jpg"
                alt=""
                data-src="/assets/contact/contact-v10-bg.jpg"
              />
            </picture>
            <div className="main">
              <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                <div>
                  <header className="text-center" id="ContactV10Header">
                    <h4>PATIENT REVIEWS</h4>
                  </header>
                  <div className="flex-column border-radius">
                    <div
                      className="bg-box no-shadow side-padding vertical-padding-small box-flair flex- auto"
                      data-role="scroller"
                    >
                      <div className="flair-border">
                        <span className="flair-1"></span>
                        <span className="flair-2"></span>
                        <div
                          id="ContactV10ReviewsFeed"
                          className="ui-repeater"
                          data-role="container"
                        >
                          <ul className="flex-middle" data-role="list">
                            <li
                              className="full text-align center-800"
                              data-role="item"
                              data-item="i"
                              data-key="3172114"
                            >
                              <blockquote>
                                <strong className="title-style-2 title-color-2">
                                  His Plan Helped Reduce My Pain
                                </strong>

                                <p className="caption">
                                  &ldquo;I came to see Dr. Ali for a
                                  consultation for low back pain from years of
                                  doing gymnastics. He was able to make a care
                                  plan to treat my low back pain and his plan
                                  has helped reduce my pain tremendously.&rdquo;
                                </p>

                                <strong className="author">- Mikey D.</strong>
                              </blockquote>
                            </li>
                            <li
                              className="full text-align center-800"
                              data-role="item"
                              data-item="i"
                              data-key="3172118"
                            >
                              <blockquote>
                                <div className="rating-icons full bottom-margin-small">
                                  <ul
                                    className="stars rating5 flex-grid-small-center text-align full"
                                    title="5 Star Rating"
                                  >
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate1"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate2"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate3"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate4"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate5"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                  </ul>
                                </div>

                                <strong className="title-style-2 title-color-2">
                                  Knows How to Fix Your Pain
                                </strong>

                                <p className="caption">
                                  &ldquo;I'm finally feeling what quality of
                                  life feels like. I am very thankful I found
                                  Dr. Ali. He will always be my pain management
                                  doctor. He is a very good doctor that knows
                                  how to fix your pain and he really cares about
                                  his patients.&rdquo;
                                </p>

                                <strong className="author">- Ricky C.</strong>
                              </blockquote>
                            </li>
                            <li
                              className="full text-align center-800"
                              data-role="item"
                              data-item="i"
                              data-key="3160510"
                            >
                              <blockquote>
                                <div className="rating-icons full bottom-margin-small">
                                  <ul
                                    className="stars rating5 flex-grid-small-center text-align full"
                                    title="5 Star Rating"
                                  >
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate1"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate2"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate3"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate4"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate5"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                  </ul>
                                </div>

                                <strong className="title-style-2 title-color-2">
                                  Dr. Ali Cares About His Patients
                                </strong>

                                <p className="caption">
                                  &ldquo;Dr. Ali cares about his patients he
                                  doesn't give up on his patients he keeps
                                  working with them to get the pain down to at
                                  least 90-95%. Dr. Ali walked my CNA step by
                                  step on how to take the wire out no pain at
                                  all he stayed on the phone the whole
                                  time.&rdquo;
                                </p>

                                <strong className="author">- Shannon S.</strong>
                              </blockquote>
                            </li>
                            <li
                              className="full text-align center-800"
                              data-role="item"
                              data-item="i"
                              data-key="3172119"
                            >
                              <blockquote>
                                <div className="rating-icons full bottom-margin-small">
                                  <ul
                                    className="stars rating5 flex-grid-small-center text-align full"
                                    title="5 Star Rating"
                                  >
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate1"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate2"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate3"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate4"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate5"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                  </ul>
                                </div>

                                <strong className="title-style-2 title-color-2">
                                  Knowledge, Professionalism & Compassion
                                </strong>

                                <p className="caption">
                                  &ldquo;Dr. Ali!. His balanced mix of
                                  knowledge, professionalism &amp; compassion is
                                  second to none while working with patients who
                                  suffer from pain on a daily basis. He helps me
                                  understand the reasons for the particular
                                  medications &amp; the doses he
                                  prescribes.&rdquo;
                                </p>

                                <strong className="author">
                                  - Benjamin D.
                                </strong>
                              </blockquote>
                            </li>
                            <li
                              className="full text-align center-800"
                              data-role="item"
                              data-item="i"
                              data-key="3160514"
                            >
                              <blockquote>
                                <div className="rating-icons full bottom-margin-small">
                                  <ul
                                    className="stars rating5 flex-grid-small-center text-align full"
                                    title="5 Star Rating"
                                  >
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate1"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate2"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate3"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate4"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                    <li className="fit flex-middle-center">
                                      <svg
                                        viewBox="0 0 24 24"
                                        className="rate5"
                                      >
                                        <use data-href="/cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                      </svg>
                                    </li>
                                  </ul>
                                </div>

                                <strong className="title-style-2 title-color-2">
                                  A Godsend
                                </strong>

                                <p className="caption">
                                  &ldquo;Dr. Ali has been a godsend for me. I
                                  have seen several pain management Drs but he
                                  is the first that has made a significant
                                  difference in my pain level.&rdquo;
                                </p>

                                <strong className="author">- Nancy M.</strong>
                              </blockquote>
                            </li>
                          </ul>
                          <div
                            className="scrolling-list-nav top-margin-small center-800 horizontal flex-middle text-align relative"
                            data-role="arrows"
                          >
                            <Link
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              title="View previous item"
                              aria-label="View previous item"
                              data-action="Prev"
                            >
                              {/* <svg className="site-arrow">
                                <use href="../includes/flair.svg#arrow-left"></use>
                              </svg> */}
                            </Link>
                            <span className="paging" data-role="paging">
                              <span data-role="page-active"></span> /{" "}
                              <span data-role="page-total"></span>
                            </span>
                            <Link
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              title="View next item"
                              aria-label="View next item"
                              data-action="Next"
                            >
                              {/* <svg className="site-arrow">
                                <use href="../includes/flair.svg#arrow-right"></use>
                              </svg> */}
                            </Link>
                          </div>
                          <div id="ContactV10ReviewsBtnCon">
                            <div className="top-margin text-align center-800">
                              <Link
                                href="../reviews/"
                                aria-labelledby="ContactV10ReviewsHeader"
                                className="btn v1"
                              >
                                All Reviews
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <header className="text-center" id="ContactV10Header">
                    <h4>SCHEDULE AN APPOINTMENT</h4>
                  </header>
                  <div id="ContactV10Form" className="ui-repeater">
                    <fieldset data-item="i" data-key="">
                      <ul className="flex-spaced-between-wrap-block-500">
                        <li className="half">
                          <div className="input-text">
                            <input
                              required="required"
                              type="text"
                              id="ContactV1Form_ITM0_FirstName"
                              className="ui-cms-input"
                              name="ContactV1Form$ITM0$FirstName"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="First Name"
                            />

                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_FirstName"
                              data-type="valueMissing"
                            >
                              Please enter your first name.
                            </div>
                          </div>
                        </li>
                        <li className="half">
                          <div className="input-text">
                            <input
                              required="required"
                              type="text"
                              id="ContactV1Form_ITM0_LastName"
                              className="ui-cms-input"
                              name="ContactV1Form$ITM0$LastName"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Last Name"
                            />

                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_LastName"
                              data-type="valueMissing"
                            >
                              Please enter your last name.
                            </div>
                          </div>
                        </li>
                        <li className="half">
                          <div className="input-text">
                            <input
                              id="ContactV1Form_ITM0_Phone"
                              type="tel"
                              pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                              className="phone-mask ui-cms-input"
                              required="required"
                              name="ContactV1Form$ITM0$Phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone"
                            />

                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_Phone"
                              data-type="valueMissing"
                            >
                              Please enter your phone number.
                            </div>
                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_Phone"
                              data-type="typeMismatch"
                            >
                              This isn't a valid phone number.
                            </div>
                          </div>
                        </li>
                        <li className="half">
                          <div className="input-text">
                            <input
                              required="required"
                              type="email"
                              id="ContactV1Form_ITM0_EmailAddress"
                              className="ui-cms-input"
                              name="ContactV1Form$ITM0$EmailAddress"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email"
                            />

                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_EmailAddress"
                              data-type="valueMissing"
                            >
                              Please enter your email address.
                            </div>
                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_EmailAddress"
                              data-type="typeMismatch"
                            >
                              This isn't a valid email address.
                            </div>
                          </div>
                        </li>
                        <li className="select">
                          <div className="input-text">
                            <select
                              id="ContactV1Form_ITM0_LeadTypeID"
                              required="required"
                              className="ui-cms-select ui-cms-input"
                              name="ContactV1Form$ITM0$LeadTypeID"
                              value={patientType}
                              onChange={(e) => setPatientType(e.target.value)}
                            >
                              <option value="" disabled>
                                {" "}
                                Are you a new patient?
                              </option>
                              <option value="1">
                                Yes, I am a potential new patient
                              </option>
                              <option value="11">
                                No, I'm a current existing patient
                              </option>
                              <option value="13">I'm neither.</option>
                            </select>

                            {/* <svg className="site-arrow">
                              <use href="../includes/flair.svg#arrow-down"></use>
                            </svg> */}
                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_LeadTypeID"
                              data-type="valueMissing"
                            >
                              Please make a selection.
                            </div>
                          </div>
                        </li>
                        <li className="message">
                          <div className="input-text">
                            <textarea
                              required="required"
                              type="text"
                              id="ContactV1Form_ITM0_Message"
                              className="ui-cms-input"
                              name="ContactV1Form$ITM0$Message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Message"
                            ></textarea>

                            <div
                              className="validation"
                              htmlFor="ContactV10Form_ITM0_Message"
                              data-type="valueMissing"
                            >
                              Please enter a message.
                            </div>
                          </div>
                        </li>
                      </ul>
                    </fieldset>
                    <input
                      id="ContactV10Form_ITM0_FFD6"
                      type="hidden"
                      className="ui-cms-input"
                      name="ContactV10Form$ITM0$FFD6"
                      value
                      data-item="i"
                      data-key=""
                    />
                    <div
                      className="top-margin-tiny text-center"
                      data-item="i"
                      data-key=""
                    >
                      <button
                        className="btn v1"
                        aria-labelledby="ContactV10Header"
                        type="submit"
                        id="ContactV10Form_ITM0_ctl08"
                        name="ContactV10Form$ITM0$ctl08"
                        data-commandname="Update"
                      >
                        Send Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default VideoTestimonials;
