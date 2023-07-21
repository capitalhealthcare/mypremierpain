import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import { Footer } from "../components/Footer/Footer";
import axios from "axios";
import Link from "next/link";
import { Header } from "@/components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
// import PopupForm from "./PopupForm";

const CSR_ENDPOINT = process.env.NEXT_PUBLIC_URL;
const SSR_ENDPOINT = process.env.SSR_API_URL;

export default function Home({ items }) {
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
      `${CSR_ENDPOINT}appointment/create/`,
      data
    );
    debugger;
    if (appointment.status === 200) {
      toast("Thanks for contacting us");
      setTimeout(() => {
        Router.push("/thank-you");
      }, 2000);
    }
  };

  return (
    <>
      <Head>
        <title>Richardson Pain Management | Premier Pain Centers </title>
        <link rel="canonical" href="https://www.mypremierpain.com/" />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="At Premier Pain Centers, we offer a variety of pain management services in Richardson, Fort Worth, and the surrounding areas. Call to book an appointment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
      </Head>

      {/* Header component */}
      {/* <Header position="absolute" backgroundTransparent="transparent" /> */}
      <Header position="absolute" backgroundTransparent="transparent" />
      <ToastContainer />

      {/* Home Banner  */}

      {/* <PopupForm /> */}
      <main>
        <section
          className="mainstage v15s bg-image col-50-50 no-padding dark-bg bg-box-none flow-reverse text-center bg-bottom-left"
          id="MainstageV15"
          data-onvisible="show"
          style={{ paddingTop: "189.781px", zIndex: "0" }}
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/mainstages/mainstage-v15-bg-mobile.jpg"
              data-src="/assets/mainstages/mainstage-v15-bg-mobile.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="/assets/mainstages/mainstage-v15-bg-tablet.jpg"
              data-src="/assets/mainstages/mainstage-v15-bg-tablet.jpg"
            />
            <Image
              layout="fill"
              src="/assets/mainstages/mainstage-v15-bg.jpg"
              alt=""
              loading="lazy"
              data-src="/assets/mainstages/mainstage-v15-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="flex-auto-responsive flex-direction align-items item-spacing item-widths">
              <div className="over-item">
                <div className="info">
                  <div
                    className="bg-box side-padding vertical-padding-small text-align center-800 box-flair full border-radius"
                    id="MainstageV15Info"
                  >
                    <div className="flair-border">
                      <span className="flair-1"></span>
                      <span className="flair-2"></span>

                      <em className="title-color-2 subtitle">
                        Relieving Pain Throughout Northern Texas
                      </em>

                      <span className="title-font title">
                        <strong className="title-color-1">
                          You Will See We Care
                        </strong>
                      </span>

                      {/* <svg className="header-flair">
                        <use href="includes/flair.svg#header"></use>
                      </svg> */}

                      <p className="no-bottom-margin description">
                        At Premier Pain Centers, we offer top quality pain
                        management using some of the least invasive, most
                        effective pain procedures possible.
                      </p>

                      <div className="top-margin">
                        <Link className="btn v1" href="/contact-locations/">
                          Schedule an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        {/* Schedule Appointment Form on Home page  */}
        <form id="Form_ContactV6" onSubmit={HandleForm}>
          <input type="hidden" name="_m_" value="ContactV6" />
          <section
            className="contact v6 light-bg col-50-50 items-spaced vertical-middle text-left bg-image bg-box-none"
            id="ContactV6"
            data-onvisible="show"
          >
            <picture className="img-bg bg-position" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="</Linkssets/contact/contact-v6-bg-mobile.jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/assets/contact/contact-v6-bg-tablet.jpg"
              />
              <Image
                width="100"
                height="100"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt=""
                data-src="/assets/contact/contact-v6-bg.jpg"
              />
            </picture>
            <div className="main">
              <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
                <div
                  className="text-align vertical-padding-small block-no-pad"
                  data-content="true"
                >
                  <header
                    className="no-pad bottom-margin-tiny"
                    id="ContactV6ContentHeader"
                  >
                    <h1>Multidisciplinary Pain Management in Richardson</h1>
                    <h2>Reliable, Patient-Focused Care</h2>
                  </header>
                  <div
                    className="content-style"
                    id="ContactV6ContentMainContent"
                  >
                    <p>
                      At Premier Pain Centers, we provide patients in
                      Richardson, Fort Worth, and the surrounding areas with
                      treatments for a multitude of conditions and all levels of
                      pain. Our professionals are trained to tailor our
                      treatment plans to your needs and get you back to a better
                      quality of life.
                    </p>
                    <p>
                      Because of our wide array of treatments, our team can help
                      with nearly every type of muscle and joint condition.
                      Since 2008, we have helped numerous patients recover from
                      pain quickly and increase their mobility and overall
                      function. To maximize patient convenience, we are
                      available for same-day appointments and offer services in
                      Spanish and Hindi. We will begin every treatment with a
                      consultation so we can better understand your unique
                      goals.
                    </p>
                    <p
                      align="center"
                      className="text-highlight v2 bg-box bordered side-padding-medium vertical-padding-tiny"
                    >
                      <b>
                        To learn more about our treatments or to schedule an
                        appointment,
                        <Link href="/contact-locations/">
                          reach out to our team
                        </Link>{" "}
                        today by calling
                        <Link href="tel:469-562-4188"></Link>.
                      </b>
                    </p>
                  </div>
                  <div id="ContactV6BtnCon">
                    <div className="top-margin-small">
                      <Link
                        className="btn v1"
                        href="about/"
                        aria-labelledby="ContactV6ContentHeader"
                      >
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
                  <div className="flair-border">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <header className="text-center" id="ContactV6Header">
                      <h4>Schedule an Appointment</h4>

                      <strong>Take the Next Step to Living Pain Free</strong>

                      {/* <svg className="header-flair">
                        <use href="includes/flair.svg#header"></use>
                      </svg> */}
                    </header>
                    <div id="ContactV1Form" className="ui-repeater">
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
                                htmlFor="ContactV1Form_ITM0_FirstName"
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
                                htmlFor="ContactV1Form_ITM0_LastName"
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
                                className="phone-mask ui-cms-input"
                                required="required"
                                name="ContactV1Form$ITM0$Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone"
                              />

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_Phone"
                                data-type="valueMissing"
                              >
                                Please enter your phone number.
                              </div>
                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_Phone"
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
                                htmlFor="ContactV1Form_ITM0_EmailAddress"
                                data-type="valueMissing"
                              >
                                Please enter your email address.
                              </div>
                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_EmailAddress"
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
                                placeholder=""
                              >
                                <option value="" disabled>
                                  {" "}
                                  Are you a new patient?
                                </option>
                                <option value="Yes, I am a potential new patient">
                                  Yes, I am a potential new patient
                                </option>
                                <option value="No, I'm a current existing patient">
                                  No, I'm a current existing patient
                                </option>
                                <option value="I'm neither.">
                                  I'm neither.
                                </option>
                              </select>

                              {/* <svg className="site-arrow">
                                <use href="../../includes/flair.svg#arrow-down"></use>
                              </svg> */}
                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_LeadTypeID"
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
                                placeholder="  Message"
                              ></textarea>

                              <div
                                className="validation"
                                htmlFor="ContactV1Form_ITM0_Message"
                                data-type="valueMissing"
                              >
                                Please enter a message.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <input
                        id="ContactV1Form_ITM0_FFD6"
                        type="hidden"
                        className="ui-cms-input"
                        name="ContactV1Form$ITM0$FFD6"
                        value
                        data-item="i"
                        data-key=""
                      />
                      <div
                        className="top-margin-tiny text-align"
                        data-item="i"
                        data-key=""
                        style={{ textAlign: "center" }}
                      >
                        <button
                          className="btn v1"
                          aria-labelledby="ContactV1Header"
                          type="submit"
                          id="ContactV1Form_ITM0_ctl08"
                          name="ContactV1Form$ITM0$ctl08"
                          data-commandname="Update"
                        >
                          Send Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>

        {/* new location added for pain center */}
        {/* <section
          className="content v3 light-bg text-left col-50-50 bg-image vertical-middle items-touching bg-box-stylized"
          id="ContentV3"
          data-onvisible="show"
        >
          <picture className="img-bg" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/content/content-v3-bg-mobile.jpg"
              data-src="/assets/content/content-v3-bg-mobile.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="/assets/content/content-v3-bg-tablet.jpg"
              data-src="/assets/content/content-v3-bg-tablet.jpg"
            />
            <Image
              layout="fill"
              src="/assets/content/content-v3-bg.jpg"
              alt=""
              data-src="/assets/content/content-v3-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="flex-spaced-between-auto-responsive-margined flex-direction align-items item-spacing item-widths">
              <ul className="values-list ui-repeater" id="ValuesV7Feed">
                <header className="text-align center-800" id="StaffV12Header">
                  <h4>
                    PREMIER PAIN CENTERS NEW LOCATION OPENING IN CORSICANA
                  </h4>

                  <svg className="header-flair">
                    <use href="includes/flair.svg#header"></use>
                  </svg>
                </header>
                <li
                  className="flex-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key="22954"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="cms/svg/site/ephleesdski.24.svg#education"
                    >
                      <path d="M20.811 23.287C17.904 23.769 14.945 24 12.001 24c-2.944 0-5.902-0.231-8.81-0.713c-0.582-0.097-0.989-0.622-0.936-1.209c0.178-1.957 0.501-5.24 1.093-6.025c0.374-0.497 1.086-0.939 1.93-1.346c-0.113 0.29-0.189 0.601-0.226 0.928c-0.135 1.197 0.27 2.456 1.015 3.554c-0.382 0.738 0.15 1.639 0.999 1.639c0.622 0 1.125-0.503 1.125-1.123c0-0.728-0.682-1.26-1.387-1.092c-0.597-0.895-0.931-1.916-0.823-2.874c0.09-0.802 0.494-1.474 1.165-1.826c0.322-0.127 0.642-0.249 0.953-0.37c0.49 1.503 1.543 4.18 2.637 6.162c0.074-0.973 0.225-1.466 0.521-2.893c-0.213-0.432-0.468-0.681-0.538-1.194c-0.14-1.019 2.699-1.019 2.558 0c-0.07 0.514-0.324 0.762-0.538 1.194c0.296 1.427 0.447 1.92 0.521 2.891c1.094-1.981 2.148-4.658 2.637-6.16c0.314 0.122 0.638 0.247 0.962 0.373c0.759 0.378 0.908 0.7 0.769 1.56c-1.122-0.038-2.062 0.642-2.334 1.824l-0.412 1.787c-0.153 0.663 0.142 1.343 0.708 1.687c0.252 0.577 1.102 0.499 1.241-0.118c0.113-0.506-0.38-0.932-0.86-0.76c-0.163-0.16-0.23-0.376-0.178-0.599l0.412-1.787c0.099-0.433 0.32-0.727 0.594-0.898c0.879-0.551 2.499 0.051 2.177 1.521l-0.393 1.792c-0.05 0.225-0.199 0.39-0.416 0.464c-0.362-0.36-0.989-0.186-1.102 0.321c-0.08 0.352 0.143 0.703 0.497 0.783c0.212 0.048 0.423-0.013 0.575-0.145c0.035-0.004 0.069-0.008 0.104-0.014c0.623-0.109 1.125-0.594 1.259-1.21l0.393-1.792c0.261-1.19-0.309-2.213-1.35-2.652c0.067-0.395 0.083-0.735 0.041-1.034c0.904 0.425 1.673 0.889 2.067 1.412c0.592 0.786 0.915 4.07 1.093 6.025C21.8 22.663 21.393 23.189 20.811 23.287zM6.239 7.425c-0.185-0.82-0.125-1.828 0.767-2.198C6.588 2.48 8.185 0 11.986 0c3.802 0 5.478 2.47 4.995 5.222c0.905 0.361 0.969 1.377 0.783 2.204c-0.186 0.821-0.691 1.744-1.17 2.204c-0.661 2.055-2.28 3.916-4.592 3.916c-2.313 0-3.931-1.861-4.592-3.916C6.93 9.17 6.424 8.246 6.239 7.425zM7.443 7.091c0.373 1.811 1.204 1.358 1.342 1.93c0.436 1.473 1.518 3.027 3.217 3.027c1.713 0 2.797-1.577 3.227-3.062c0.157-0.54 0.929-0.104 1.298-1.896c0.116-0.562-0.155-0.714-0.472-0.632c-0.195 0.43-0.297 0.926-0.348 1.162c-0.083 0.025-0.238 0.082-0.327 0.105c0.147-0.859 0.081-1.287-0.114-2.04c-0.067-0.259-0.143-0.57-0.218-0.991c-0.372 0.258-2.417 1.606-4.615 1.822c0.869-0.618 1.232-1.039 1.553-1.568c-0.802 0.432-1.953 1.109-3.319 0.955c0.004 0.666-0.24 0.705-0.068 1.822c-0.089-0.023-0.251-0.08-0.335-0.105c-0.051-0.235-0.153-0.731-0.347-1.162C7.6 6.376 7.327 6.528 7.443 7.091z"></path>
                    </svg>
                  </span>

                  <div className="info">
                    <strong
                      className="title-style-4 title-color-4"
                      style={{ marginLeft: "15px" }}
                    >
                      Premier pain centers is pleasured to announce to open its
                      new location in Corsican starting April 10th, 2023.
                    </strong>
                  </div>
                </li>
                <li
                  className="flex-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key="22951"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="cms/svg/site/ephleesdski.24.svg#appointment"
                    >
                      <path d="M23.058 4.9V3.522c0-0.241-0.196-0.437-0.437-0.437h-0.708V2.192c0-0.241-0.196-0.437-0.437-0.437H1.744c-0.241 0-0.437 0.196-0.437 0.437v3.579h0.874V2.629h18.858v0.456H2.889c-0.241 0-0.437 0.196-0.437 0.437v2.249h0.874V3.96h18.858v0.94H17.66L15.841 6.506H0.872H0.618C0.278 6.506 0 6.784 0 7.124v14.503c0 0.34 0.278 0.618 0.618 0.618H23.38c0.34 0 0.618-0.278 0.618-0.618V7.652l0.002 0V4.9H23.058zM9.16 16.023H6.854v2.349H4.342v-2.349H2.036v-2.426h2.306V11.248h2.512v2.349H9.16V16.023z"></path>
                    </svg>
                  </span>

                  <div className="info">
                    <strong
                      className="title-style-4 title-color-4"
                      style={{ marginLeft: "15px", marginTop: "7px" }}
                    >
                      We Can Schedule An Appointment Within 24 Hours
                    </strong>
                  </div>
                </li>
                <li
                  className="flex-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key="22950"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="cms/svg/site/ephleesdski.24.svg#treatments"
                    >
                      <path d="M7.634 18.387c0.282 0.816 0.299 2.02 0.232 3.087H3.544c0.111-0.863 0.181-1.933-0.068-2.384c-0.409-0.739-3.318-3.749-3.47-5.486c-0.153-1.738 3.156-7.219 3.55-7.809c0.394-0.588 0.849-1.048 1.321-0.652c0.472 0.396-0.309 1.863-0.309 1.863s0.505-0.493 0.721-0.233c0.343 0.414-0.227 1.615-0.227 1.615s0.241-0.201 0.462 0.156c0.306 0.495-1.039 2.729-1.039 2.729s-0.08-0.317-0.436-0.731c-0.509-0.589-1.557-0.425-2.034 0.414c-0.415 0.727-0.58 2.167 0.05 3.879c0.344 0.934 1.104 2.097 1.448 2.292c0.39 0.222 0.846-0.15 0.283-0.704c-0.79-0.778-1.496-2.812-1.464-4.032c0.033-1.219 0.609-1.606 1.102-1.416c0.765 0.294 0.562 0.917 0.825 2.42C4.521 14.901 7.016 16.601 7.634 18.387zM23.996 13.207c0.141-1.739-3.205-7.198-3.602-7.785c-0.397-0.587-0.855-1.043-1.326-0.643c-0.469 0.399 0.322 1.861 0.322 1.861s-0.508-0.49-0.722-0.228c-0.34 0.416 0.238 1.614 0.238 1.614s-0.243-0.199-0.461 0.158c-0.303 0.497 1.058 2.723 1.058 2.723s0.077-0.318 0.431-0.733c0.505-0.592 1.554-0.436 2.037 0.4c0.42 0.724 0.595 2.163-0.024 3.879c-0.338 0.936-1.091 2.103-1.432 2.302c-0.388 0.225-0.848-0.144-0.288-0.702c0.785-0.782 1.476-2.822 1.436-4.042c-0.04-1.219-0.619-1.601-1.112-1.408c-0.763 0.3-0.555 0.921-0.808 2.425c-0.253 1.505-2.738 3.221-3.344 5.011c-0.307 0.907-0.283 2.29-0.185 3.433h4.352c-0.141-0.898-0.286-2.237-0.003-2.757C20.966 17.975 23.856 14.946 23.996 13.207zM8.364 8.259C8.27 8.264 8.021 8.278 8.364 8.259C8.412 8.256 8.399 8.257 8.364 8.259c0.17-0.01 0.334-0.071 0.469-0.174c-0.033 0.277-0.045 0.557-0.059 0.835c1.036 0.017 2.071 0.036 3.107 0.053c0.101 0.002 0.202 0.004 0.302 0.005c0.004-0.584 0.043-1.161 0.116-1.74c0.007-0.055 0.085-0.468 0.057-0.473c-0.057-0.012-0.113-0.023-0.169-0.036c-0.587-0.122-1.173-0.243-1.76-0.365c-0.339-0.07-0.679-0.14-1.018-0.211c-0.069-0.014-0.139-0.029-0.208-0.043c-0.027-0.006-0.177 0.732-0.19 0.801c-0.38-0.535-1.222-0.444-1.481 0.156C7.282 7.642 7.741 8.295 8.364 8.259zM10.837 15.935c0.015 0.035 0.153 0.393 0.181 0.382c0.05-0.019 0.1-0.038 0.15-0.058c0.233-0.09 0.466-0.18 0.699-0.27c0.606-0.234 1.212-0.468 1.817-0.702c0.128-0.049 0.255-0.099 0.383-0.148c0.024-0.01 0.047-0.018 0.071-0.028c0.007-0.003-0.084-0.231-0.089-0.247c-0.297-0.777-0.668-1.513-1.055-2.247c-0.914 0.492-1.828 0.985-2.742 1.476c-0.103 0.056-0.205 0.11-0.308 0.166c0.072 0.131 0.143 0.263 0.217 0.393c-0.646-0.046-1.116 0.645-0.828 1.229C9.628 16.481 10.499 16.512 10.837 15.935zM10.837 15.935C10.698 16.173 10.848 15.958 10.837 15.935L10.837 15.935zM14.499 16.266c-0.989 0.28-1.979 0.56-2.967 0.839c-0.066 0.018-0.132 0.037-0.199 0.057c0.035 0.109 0.071 0.219 0.104 0.329c-0.507-0.21-1.093 0.123-1.172 0.665c-0.076 0.527 0.363 1.007 0.895 0.976c-0.107 0.006-0.308 0.018 0.001 0c0.084-0.005 0.056-0.003 0.001 0c0.236-0.014 0.459-0.129 0.609-0.311c0.009 0.049 0.076 0.51 0.096 0.508c0.055-0.005 0.11-0.01 0.165-0.014c0.259-0.022 0.519-0.044 0.779-0.067c0.619-0.053 1.239-0.107 1.859-0.159c0.08-0.007 0.158-0.013 0.238-0.02c0.038-0.003-0.018-0.547-0.024-0.61C14.817 17.718 14.678 16.988 14.499 16.266zM9.244 4.263C9.157 4.246 8.928 4.198 9.244 4.263C9.289 4.273 9.277 4.27 9.244 4.263c0.157 0.033 0.322 0.017 0.47-0.043c-0.098 0.245-0.178 0.496-0.258 0.747c0.94 0.27 1.88 0.54 2.82 0.808c0.091 0.026 0.183 0.053 0.275 0.079c0.146-0.532 0.324-1.047 0.532-1.558c0.019-0.048 0.193-0.405 0.168-0.418c-0.049-0.025-0.097-0.049-0.146-0.074c-0.505-0.254-1.01-0.509-1.515-0.763c-0.292-0.147-0.584-0.294-0.876-0.442c-0.06-0.03-0.12-0.06-0.18-0.09c-0.023-0.012-0.341 0.624-0.37 0.684c-0.215-0.58-1.005-0.705-1.389-0.22C8.409 3.437 8.667 4.144 9.244 4.263zM9.371 12.95c0.014 0.041 0.029 0.082 0.043 0.123c0.976-0.359 1.952-0.717 2.928-1.076c0.083-0.031 0.165-0.06 0.249-0.091c0.012-0.005 0.085-0.02 0.091-0.034c0.01-0.02-0.037-0.109-0.046-0.133c-0.024-0.067-0.046-0.134-0.067-0.204c-0.047-0.151-0.096-0.303-0.129-0.458c-0.07-0.299-0.125-0.598-0.172-0.901c-0.011-0.067-0.016-0.135-0.024-0.204c-0.002-0.017 0-0.126-0.014-0.135c-0.004-0.003-0.023 0.002-0.027 0.003c-0.063 0.006-0.127 0.012-0.19 0.018c-0.257 0.025-0.516 0.05-0.773 0.075c-0.609 0.06-1.218 0.118-1.827 0.178c-0.184 0.018-0.369 0.036-0.553 0.054c-0.052 0.005-0.064-0.01-0.06 0.047c0.024 0.283 0.055 0.565 0.097 0.847c-0.287-0.252-0.72-0.282-1.038-0.07c-0.293 0.196-0.439 0.561-0.359 0.904c0.078 0.339 0.365 0.603 0.709 0.653c0.367 0.053 0.735-0.144 0.895-0.478c0.079 0.291 0.168 0.576 0.262 0.862C9.362 12.925 9.363 12.929 9.371 12.95zM11.952 20.237c0.005 0.106 0.01 0.212 0.015 0.318c0.001 0.014 0.002 0.036 0.003 0.064c0.002 0.055 0.004 0.109 0.006 0.164c-0.41-0.33-1.034-0.204-1.284 0.255c-0.031 0.056-0.176 0.452-0.079 0.452c0.109 0 0.219 0 0.327 0c0.411 0 0.821 0 1.232 0c0.615 0 1.232 0 1.847 0c0.233 0 0.466 0 0.698 0c0.021 0 0.042 0 0.064 0c0.037 0 0.032-0.136 0.036-0.167c0.039-0.296 0.064-0.592 0.086-0.89c0.004-0.055 0.009-0.109 0.012-0.164c-0.977-0.011-1.955-0.022-2.932-0.033C11.974 20.237 11.962 20.237 11.952 20.237zM11.97 20.62c-0.001-0.021-0.002-0.043-0.003-0.064C11.962 20.457 11.972 20.663 11.97 20.62z"></path>
                    </svg>
                  </span>

                  <div className="info">
                    <strong
                      className="title-style-4 title-color-4"
                      style={{ marginLeft: "15px", marginTop: "7px" }}
                    >
                      Timings are{" "}
                      <strong style={{ color: "#00204d", marginTop: "10px" }}>
                        Monday to Friday (9:00 AM to 5:00 PM){" "}
                      </strong>
                    </strong>
                  </div>
                </li>
                <li
                  className="flex-block-500 center-500 auto top-margin-small"
                  data-item="i"
                  data-key="22949"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="cms/svg/site/ephleesdski.24.svg#procedure"
                    >
                      <path d="M24 8.491c0 5.415-7.593 12.162-12 14.418c-3.334-1.707-8.49-5.983-10.804-10.31h2.623c0.241 0 0.435-0.151 0.542-0.35l0.869-1.618l1.403 3.969c0.2 0.568 0.977 0.494 1.141-0.077L9.39 8.926l1.707 8.427c0.128 0.632 1.029 0.628 1.161 0.004l1.602-7.575l1.206 2.48c0.103 0.211 0.314 0.335 0.535 0.336l1.645 0.001c0.238 0.61 0.831 1.042 1.525 1.042c0.903 0 1.636-0.733 1.636-1.636c0-0.903-0.733-1.636-1.636-1.636c-0.694 0-1.286 0.431-1.524 1.041h-1.274l-1.796-3.694c-0.255-0.524-1.003-0.422-1.119 0.13l-1.366 6.465l-1.618-7.987c-0.122-0.602-0.978-0.643-1.15-0.047l-1.784 6.186L5.903 8.97c-0.169-0.478-0.837-0.542-1.083-0.083l-1.356 2.523H0.634C0.23 10.417 0 9.434 0 8.491C0 1.98 7.636-2.054 12 4.244C16.364-2.02 24 1.98 24 8.491z"></path>
                    </svg>
                  </span>

                  <div className="info">
                    <strong
                      className="title-style-4 title-color-4"
                      style={{ marginLeft: "15px" }}
                    >
                      Premier Pain Centers is committed to provide advanced pain
                      management using cutting edge technology all over Texas
                    </strong>
                  </div>
                </li>
              </ul>
              <picture
                className="over-item img bg-position pad-height- box-flair-offset border-radius"
                data-role="picture"
              >
                <source
                  media="(max-width: 500px)"
                  srcSet="/assets/content/content-v3-img-mobile.jpg"
                  data-src="/assets/content/content-v3-img-mobile.jpg"
                />
                <Image
                  layout="fill"
                  src="/assets/content/for-landig-page.jpg"
                  alt=""
                  data-src="/assets/content/for-landig-page.jpg"
                />
              </picture>
            </div>
          </div>
        </section> */}
        {/* Services we offer  */}
        <section
          className="panel-group v1 relative no-padding dark-bg bg-image"
          id="PanelGroupV4"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/panel-groups/panel-group-v4-bg-mobile.jpg"
              data-src="/assets/panel-groups/panel-group-v4-bg-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/panel-groups/panel-group-v4-bg-tablet.jpg"
              data-src="/assets/panel-groups/panel-group-v4-bg-tablet.jpg"
            />
            <Image
              width="1000"
              height="1000"
              src="/assets/panel-groups/panel-group-v4-bg.jpg"
              alt=""
              loading="lazy"
              data-src="/assets/panel-groups/panel-group-v4-bg.jpg"
            />
          </picture>
          <div className="box" id="PanelGroupV4Zone">
            <section
              className="services v1 light-bg text-center bg-box-unlike large-padding svg-deco-top-rectangle-1"
              id="ServicesV1"
              data-onvisible="show"
            >
              {/* <Link name="servicesAnchor"></Link> */}

              <div className="main">
                <header className="text-align center-800" id="ServicesV1Header">
                  <h4>Conditions We Treat</h4>
                  <strong>We Address All Pain-Points</strong>
                  {/* <svg className="header-flair">
                    <use href="includes/flair.svg#header"></use>
                  </svg> */}
                </header>
                <ul
                  className="services-list flex-wrap-grid-auto-size-max-4-break-1024-block-500 close-gap-500 ui-repeater"
                  id="ServicesV1Services"
                >
                  <li className="flex-column" data-item="i" data-key="75442">
                    <Link
                      className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                      href="/conditions-we-treat/joint-pain/"
                    >
                      <picture className="img-bg">
                        <source
                          media="(max-width: 500px)"
                          srcSet="/conditions-we-treat/joint-pain/joint-pain 500max.jpg"
                          data-src="/conditions-we-treat/joint-pain/joint-pain 500max.jpg"
                        />
                        <Image
                          layout="fill"
                          src="/assets/New-folder/joint-pain.jpg"
                          alt="Joint Pain Image"
                          data-src="/conditions-we-treat/joint-pain/joint-pain.jpg"
                        />
                      </picture>

                      <span className="relative btn-style full">
                        Joint Pain
                      </span>
                    </Link>
                  </li>
                  <li className="flex-column" data-item="i" data-key="75441">
                    <Link
                      className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                      href="/conditions-we-treat/neck-pain/"
                    >
                      <picture className="img-bg">
                        <source
                          media="(max-width: 500px)"
                          srcSet="/assets/New-folder/neck-pain.jpg"
                          data-src="/assets/New-folder/neck-pain.jpg"
                        />
                        <Image
                          layout="fill"
                          src="/assets/New-folder/neck-pain.jpg"
                          alt="Neck Pain Image"
                          data-src="/conditions-we-treat/neck-pain/neck-pain.jpg"
                        />
                      </picture>

                      <span className="relative btn-style full">Neck Pain</span>
                    </Link>
                  </li>
                  <li className="flex-column" data-item="i" data-key="75440">
                    <Link
                      className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                      href="/conditions-we-treat/headaches"
                    >
                      <picture className="img-bg">
                        <source
                          media="(max-width: 500px)"
                          srcSet="/assets/New-folder/headaches.jpg"
                          data-src="/assets/New-folder/headaches.jpg"
                        />
                        <Image
                          layout="fill"
                          src="/assets/New-folder/headaches.jpg"
                          alt="Headaches Image"
                          data-src="/assets/New-folder/headaches.jpg"
                        />
                      </picture>

                      <span className="relative btn-style full">Headaches</span>
                    </Link>
                  </li>
                  <li className="flex-column" data-item="i" data-key="75439">
                    <Link
                      className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                      href="/conditions-we-treat/knee-pain/"
                    >
                      <picture className="img-bg">
                        <source
                          media="(max-width: 500px)"
                          srcSet="/assets/New-folder/knee-pain.jpg"
                          data-src="/assets/New-folder/knee-pain.jpg"
                        />
                        <Image
                          layout="fill"
                          src="/assets/New-folder/knee-pain.jpg"
                          alt="Knee Pain Image"
                          data-src="/assets/New-folder/knee-pain.jpg"
                        />
                      </picture>

                      <span className="relative btn-style full">Knee Pain</span>
                    </Link>
                  </li>
                  <li className="flex-column" data-item="i" data-key="75438">
                    <Link
                      className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                      href="/conditions-we-treat/back-pain/"
                    >
                      <picture className="img-bg">
                        <source
                          media="(max-width: 500px)"
                          srcSet="/assets/New-folder/back-pain.jpg"
                          data-src="/assets/New-folder/back-pain.jpg"
                        />
                        <Image
                          layout="fill"
                          src="/assets/New-folder/back-pain.jpg"
                          alt="Back Pain Image"
                          data-src="/assets/New-folder/back-pain.jpg"
                        />
                      </picture>

                      <span className="relative btn-style full">Back Pain</span>
                    </Link>
                  </li>
                  
                  <li className="flex-column" data-item="i" data-key="75436">
                    <Link
                      className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                      href="/conditions-we-treat/car-accident-injury/"
                    >
                      <picture className="img-bg">
                        <source
                          media="(max-width: 500px)"
                          srcSet="/assets/New-folder/car-accident-injury.jpg"
                          data-src="/assets/New-folder/car-accident-injury.jpg"
                        />
                        <Image
                          layout="fill"
                          src="/assets/New-folder/car-accident-injury.jpg"
                          alt="/assets/New-folder/car-accident-injury.jpg"
                          data-src="/assets/New-folder/car-accident-injury.jpg"
                        />
                      </picture>

                      <span className="relative btn-style full">
                        Car Accident Injuries
                      </span>
                    </Link>
                  </li>
                </ul>
                <div id="ServicesV1BtnCon">
                  <div className="top-margin text-center">
                    <Link
                      className="btn v1"
                      aria-labelledby="ServicesV1Header"
                      href="/conditions-we-treat/"
                    >
                      More ABout Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="reviews v7 text-center dark-bg bg-image large-padding bg-box-stylized"
              id="ReviewsV1"
              data-role="scroller"
              data-onvisible="show"
            >
              <picture className="img-bg bg-position" data-role="picture">
                <source
                  media="(max-width: 500px)"
                  srcSet="/assets/reviews/reviews-v16-bg-mobile.jpg"
                  data-src="/assets/reviews/reviews-v16-bg-mobile.jpg"
                />
                <Image
                  width="100"
                  height="100"
                  src="/assets/reviews/reviews-v16-bg.jpg"
                  alt=""
                  data-src="/assets/reviews/reviews-v16-bg.jpg"
                />
              </picture>
              <div className="main">
                <div className="bg-box border-radius vertical-padding-small side-padding-small box-flair reviewsBorder">
                  <div className="flair-border">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <header
                      className="text-align center-800"
                      id="ReviewsV7Header"
                    >
                      <h4>Patient Reviews</h4>
                      <strong>How We Have Impacted Our Community</strong>
                      {/* <svg className="header-flair">
                        <use href="includes/flair.svg#header"></use>
                      </svg> */}
                    </header>
                    <div
                      className="container text-align ui-repeater"
                      id="ReviewsV7Feed"
                      data-role="container"
                    >
                      <ul className="flex-" data-role="list">
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3172114"
                        >
                          <blockquote className="side-padding">
                            <p className="caption no-top-margin">
                              &ldquo;I came to see Dr. Ali for a consultation
                              for low back pain from years of doing gymnastics.
                              He was able to make a care plan to treat my low
                              back pain and his plan has helped reduce my pain
                              tremendously.&rdquo;
                            </p>

                            <strong className="author">- Mikey D.</strong>
                          </blockquote>
                        </li>
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3172118"
                        >
                          <blockquote className="side-padding">
                            <p className="caption no-top-margin">
                              &ldquo;I'm finally feeling what quality of life
                              feels like. I am very thankful I found Dr. Ali. He
                              will always be my pain management doctor. He is a
                              very good doctor that knows how to fix your pain
                              and he really cares about his patients.&rdquo;
                            </p>

                            <strong className="author">- Ricky C.</strong>
                          </blockquote>
                        </li>
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3160510"
                        >
                          <blockquote className="side-padding">
                            <p className="caption no-top-margin">
                              &ldquo;Dr. Ali cares about his patients he doesn't
                              give up on his patients he keeps working with them
                              to get the pain down to at least 90-95%. Dr. Ali
                              walked my CNA step by step on how to take the wire
                              out no pain at all he stayed on the phone the
                              whole time.&rdquo;
                            </p>

                            <strong className="author">- Shannon S.</strong>
                          </blockquote>
                        </li>
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3172119"
                        >
                          <blockquote className="side-padding">
                            <p className="caption no-top-margin">
                              &ldquo;Dr. Ali!. His balanced mix of knowledge,
                              professionalism &amp; compassion is second to none
                              while working with patients who suffer from pain
                              on a daily basis. He helps me understand the
                              reasons for the particular medications &amp; the
                              doses he prescribes.&rdquo;
                            </p>

                            <strong className="author">- Benjamin D.</strong>
                          </blockquote>
                        </li>
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3160514"
                        >
                          <blockquote className="side-padding">
                            <p className="caption no-top-margin">
                              &ldquo;Dr. Ali has been a godsend for me. I have
                              seen several pain management Drs but he is the
                              first that has made a significant difference in my
                              pain level.&rdquo;
                            </p>

                            <strong className="author">- Nancy M.</strong>
                          </blockquote>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="scrolling-list-nav top-margin-small text-center horizontal flex-middle relative"
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
                          <use href="includes/flair.svg#arrow-left"></use>
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
                          <use href="includes/flair.svg#arrow-right"></use>
                        </svg> */}
                      </Link>
                    </div>
                    <div id="ReviewsV7BtnCon">
                      <div className="top-margin text-center">
                        <Link
                          href="reviews/"
                          aria-labelledby="ReviewsV7Header"
                          className="btn v1"
                        >
                          All Reviews
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* HOW WE STAND OUT  */}
        <section
          className="staff v12 light-bg bg-box-unlike vertical-middle col-60-40 items-spaced text-left bg-image flow-reverse"
          id="StaffV12"
          data-onvisible="show"
          data-role="scroller"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/staff/staff-v12-bg-mobile.jpg"
              data-src="/assets/staff/staff-v12-bg-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/staff/staff-v12-bg-tablet.jpg"
              data-src="/assets/staff/staff-v12-bg-tablet.jpg"
            />
            <Image
              width="100"
              height="100"
              src="/assets/staff/staff-v12-bg.jpg"
              alt=""
              title=""
              data-src="/assets/staff/staff-v12-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="flex-margined-auto-responsive-block-1024 item-spacing item-widths align-items flex-direction">
              <div>
                <header className="text-align center-800" id="StaffV12Header">
                  <h4>How We Stand Out</h4>

                  <strong>Nothing But the Best Care </strong>

                  {/* <svg className="header-flair">
                    <use href="includes/flair.svg#header"></use>
                  </svg> */}
                </header>
                <ul className="values-list ui-repeater" id="ValuesV7Feed">
                  <li
                    className="flex-block-500 center-500 auto top-margin-small"
                    data-item="i"
                    data-key="22954"
                  >
                    <span className="ico-con">
                      <svg
                        viewBox="0 0 24 24"
                        className="values-icon"
                        data-use="cms/svg/site/ephleesdski.24.svg#education"
                      >
                        <path d="M20.811 23.287C17.904 23.769 14.945 24 12.001 24c-2.944 0-5.902-0.231-8.81-0.713c-0.582-0.097-0.989-0.622-0.936-1.209c0.178-1.957 0.501-5.24 1.093-6.025c0.374-0.497 1.086-0.939 1.93-1.346c-0.113 0.29-0.189 0.601-0.226 0.928c-0.135 1.197 0.27 2.456 1.015 3.554c-0.382 0.738 0.15 1.639 0.999 1.639c0.622 0 1.125-0.503 1.125-1.123c0-0.728-0.682-1.26-1.387-1.092c-0.597-0.895-0.931-1.916-0.823-2.874c0.09-0.802 0.494-1.474 1.165-1.826c0.322-0.127 0.642-0.249 0.953-0.37c0.49 1.503 1.543 4.18 2.637 6.162c0.074-0.973 0.225-1.466 0.521-2.893c-0.213-0.432-0.468-0.681-0.538-1.194c-0.14-1.019 2.699-1.019 2.558 0c-0.07 0.514-0.324 0.762-0.538 1.194c0.296 1.427 0.447 1.92 0.521 2.891c1.094-1.981 2.148-4.658 2.637-6.16c0.314 0.122 0.638 0.247 0.962 0.373c0.759 0.378 0.908 0.7 0.769 1.56c-1.122-0.038-2.062 0.642-2.334 1.824l-0.412 1.787c-0.153 0.663 0.142 1.343 0.708 1.687c0.252 0.577 1.102 0.499 1.241-0.118c0.113-0.506-0.38-0.932-0.86-0.76c-0.163-0.16-0.23-0.376-0.178-0.599l0.412-1.787c0.099-0.433 0.32-0.727 0.594-0.898c0.879-0.551 2.499 0.051 2.177 1.521l-0.393 1.792c-0.05 0.225-0.199 0.39-0.416 0.464c-0.362-0.36-0.989-0.186-1.102 0.321c-0.08 0.352 0.143 0.703 0.497 0.783c0.212 0.048 0.423-0.013 0.575-0.145c0.035-0.004 0.069-0.008 0.104-0.014c0.623-0.109 1.125-0.594 1.259-1.21l0.393-1.792c0.261-1.19-0.309-2.213-1.35-2.652c0.067-0.395 0.083-0.735 0.041-1.034c0.904 0.425 1.673 0.889 2.067 1.412c0.592 0.786 0.915 4.07 1.093 6.025C21.8 22.663 21.393 23.189 20.811 23.287zM6.239 7.425c-0.185-0.82-0.125-1.828 0.767-2.198C6.588 2.48 8.185 0 11.986 0c3.802 0 5.478 2.47 4.995 5.222c0.905 0.361 0.969 1.377 0.783 2.204c-0.186 0.821-0.691 1.744-1.17 2.204c-0.661 2.055-2.28 3.916-4.592 3.916c-2.313 0-3.931-1.861-4.592-3.916C6.93 9.17 6.424 8.246 6.239 7.425zM7.443 7.091c0.373 1.811 1.204 1.358 1.342 1.93c0.436 1.473 1.518 3.027 3.217 3.027c1.713 0 2.797-1.577 3.227-3.062c0.157-0.54 0.929-0.104 1.298-1.896c0.116-0.562-0.155-0.714-0.472-0.632c-0.195 0.43-0.297 0.926-0.348 1.162c-0.083 0.025-0.238 0.082-0.327 0.105c0.147-0.859 0.081-1.287-0.114-2.04c-0.067-0.259-0.143-0.57-0.218-0.991c-0.372 0.258-2.417 1.606-4.615 1.822c0.869-0.618 1.232-1.039 1.553-1.568c-0.802 0.432-1.953 1.109-3.319 0.955c0.004 0.666-0.24 0.705-0.068 1.822c-0.089-0.023-0.251-0.08-0.335-0.105c-0.051-0.235-0.153-0.731-0.347-1.162C7.6 6.376 7.327 6.528 7.443 7.091z"></path>
                      </svg>
                    </span>

                    <div className="info">
                      <strong className="title-style-4 title-color-4">
                        We Provide Patient Education Through Every Step
                      </strong>
                    </div>
                  </li>
                  <li
                    className="flex-block-500 center-500 auto top-margin-small"
                    data-item="i"
                    data-key="22951"
                  >
                    <span className="ico-con">
                      <svg
                        viewBox="0 0 24 24"
                        className="values-icon"
                        data-use="cms/svg/site/ephleesdski.24.svg#appointment"
                      >
                        <path d="M23.058 4.9V3.522c0-0.241-0.196-0.437-0.437-0.437h-0.708V2.192c0-0.241-0.196-0.437-0.437-0.437H1.744c-0.241 0-0.437 0.196-0.437 0.437v3.579h0.874V2.629h18.858v0.456H2.889c-0.241 0-0.437 0.196-0.437 0.437v2.249h0.874V3.96h18.858v0.94H17.66L15.841 6.506H0.872H0.618C0.278 6.506 0 6.784 0 7.124v14.503c0 0.34 0.278 0.618 0.618 0.618H23.38c0.34 0 0.618-0.278 0.618-0.618V7.652l0.002 0V4.9H23.058zM9.16 16.023H6.854v2.349H4.342v-2.349H2.036v-2.426h2.306V11.248h2.512v2.349H9.16V16.023z"></path>
                      </svg>
                    </span>

                    <div className="info">
                      <strong className="title-style-4 title-color-4">
                        We Can Schedule An Appointment Within 24 Hours
                      </strong>
                    </div>
                  </li>
                  <li
                    className="flex-block-500 center-500 auto top-margin-small"
                    data-item="i"
                    data-key="22950"
                  >
                    <span className="ico-con">
                      <svg
                        viewBox="0 0 24 24"
                        className="values-icon"
                        data-use="cms/svg/site/ephleesdski.24.svg#treatments"
                      >
                        <path d="M7.634 18.387c0.282 0.816 0.299 2.02 0.232 3.087H3.544c0.111-0.863 0.181-1.933-0.068-2.384c-0.409-0.739-3.318-3.749-3.47-5.486c-0.153-1.738 3.156-7.219 3.55-7.809c0.394-0.588 0.849-1.048 1.321-0.652c0.472 0.396-0.309 1.863-0.309 1.863s0.505-0.493 0.721-0.233c0.343 0.414-0.227 1.615-0.227 1.615s0.241-0.201 0.462 0.156c0.306 0.495-1.039 2.729-1.039 2.729s-0.08-0.317-0.436-0.731c-0.509-0.589-1.557-0.425-2.034 0.414c-0.415 0.727-0.58 2.167 0.05 3.879c0.344 0.934 1.104 2.097 1.448 2.292c0.39 0.222 0.846-0.15 0.283-0.704c-0.79-0.778-1.496-2.812-1.464-4.032c0.033-1.219 0.609-1.606 1.102-1.416c0.765 0.294 0.562 0.917 0.825 2.42C4.521 14.901 7.016 16.601 7.634 18.387zM23.996 13.207c0.141-1.739-3.205-7.198-3.602-7.785c-0.397-0.587-0.855-1.043-1.326-0.643c-0.469 0.399 0.322 1.861 0.322 1.861s-0.508-0.49-0.722-0.228c-0.34 0.416 0.238 1.614 0.238 1.614s-0.243-0.199-0.461 0.158c-0.303 0.497 1.058 2.723 1.058 2.723s0.077-0.318 0.431-0.733c0.505-0.592 1.554-0.436 2.037 0.4c0.42 0.724 0.595 2.163-0.024 3.879c-0.338 0.936-1.091 2.103-1.432 2.302c-0.388 0.225-0.848-0.144-0.288-0.702c0.785-0.782 1.476-2.822 1.436-4.042c-0.04-1.219-0.619-1.601-1.112-1.408c-0.763 0.3-0.555 0.921-0.808 2.425c-0.253 1.505-2.738 3.221-3.344 5.011c-0.307 0.907-0.283 2.29-0.185 3.433h4.352c-0.141-0.898-0.286-2.237-0.003-2.757C20.966 17.975 23.856 14.946 23.996 13.207zM8.364 8.259C8.27 8.264 8.021 8.278 8.364 8.259C8.412 8.256 8.399 8.257 8.364 8.259c0.17-0.01 0.334-0.071 0.469-0.174c-0.033 0.277-0.045 0.557-0.059 0.835c1.036 0.017 2.071 0.036 3.107 0.053c0.101 0.002 0.202 0.004 0.302 0.005c0.004-0.584 0.043-1.161 0.116-1.74c0.007-0.055 0.085-0.468 0.057-0.473c-0.057-0.012-0.113-0.023-0.169-0.036c-0.587-0.122-1.173-0.243-1.76-0.365c-0.339-0.07-0.679-0.14-1.018-0.211c-0.069-0.014-0.139-0.029-0.208-0.043c-0.027-0.006-0.177 0.732-0.19 0.801c-0.38-0.535-1.222-0.444-1.481 0.156C7.282 7.642 7.741 8.295 8.364 8.259zM10.837 15.935c0.015 0.035 0.153 0.393 0.181 0.382c0.05-0.019 0.1-0.038 0.15-0.058c0.233-0.09 0.466-0.18 0.699-0.27c0.606-0.234 1.212-0.468 1.817-0.702c0.128-0.049 0.255-0.099 0.383-0.148c0.024-0.01 0.047-0.018 0.071-0.028c0.007-0.003-0.084-0.231-0.089-0.247c-0.297-0.777-0.668-1.513-1.055-2.247c-0.914 0.492-1.828 0.985-2.742 1.476c-0.103 0.056-0.205 0.11-0.308 0.166c0.072 0.131 0.143 0.263 0.217 0.393c-0.646-0.046-1.116 0.645-0.828 1.229C9.628 16.481 10.499 16.512 10.837 15.935zM10.837 15.935C10.698 16.173 10.848 15.958 10.837 15.935L10.837 15.935zM14.499 16.266c-0.989 0.28-1.979 0.56-2.967 0.839c-0.066 0.018-0.132 0.037-0.199 0.057c0.035 0.109 0.071 0.219 0.104 0.329c-0.507-0.21-1.093 0.123-1.172 0.665c-0.076 0.527 0.363 1.007 0.895 0.976c-0.107 0.006-0.308 0.018 0.001 0c0.084-0.005 0.056-0.003 0.001 0c0.236-0.014 0.459-0.129 0.609-0.311c0.009 0.049 0.076 0.51 0.096 0.508c0.055-0.005 0.11-0.01 0.165-0.014c0.259-0.022 0.519-0.044 0.779-0.067c0.619-0.053 1.239-0.107 1.859-0.159c0.08-0.007 0.158-0.013 0.238-0.02c0.038-0.003-0.018-0.547-0.024-0.61C14.817 17.718 14.678 16.988 14.499 16.266zM9.244 4.263C9.157 4.246 8.928 4.198 9.244 4.263C9.289 4.273 9.277 4.27 9.244 4.263c0.157 0.033 0.322 0.017 0.47-0.043c-0.098 0.245-0.178 0.496-0.258 0.747c0.94 0.27 1.88 0.54 2.82 0.808c0.091 0.026 0.183 0.053 0.275 0.079c0.146-0.532 0.324-1.047 0.532-1.558c0.019-0.048 0.193-0.405 0.168-0.418c-0.049-0.025-0.097-0.049-0.146-0.074c-0.505-0.254-1.01-0.509-1.515-0.763c-0.292-0.147-0.584-0.294-0.876-0.442c-0.06-0.03-0.12-0.06-0.18-0.09c-0.023-0.012-0.341 0.624-0.37 0.684c-0.215-0.58-1.005-0.705-1.389-0.22C8.409 3.437 8.667 4.144 9.244 4.263zM9.371 12.95c0.014 0.041 0.029 0.082 0.043 0.123c0.976-0.359 1.952-0.717 2.928-1.076c0.083-0.031 0.165-0.06 0.249-0.091c0.012-0.005 0.085-0.02 0.091-0.034c0.01-0.02-0.037-0.109-0.046-0.133c-0.024-0.067-0.046-0.134-0.067-0.204c-0.047-0.151-0.096-0.303-0.129-0.458c-0.07-0.299-0.125-0.598-0.172-0.901c-0.011-0.067-0.016-0.135-0.024-0.204c-0.002-0.017 0-0.126-0.014-0.135c-0.004-0.003-0.023 0.002-0.027 0.003c-0.063 0.006-0.127 0.012-0.19 0.018c-0.257 0.025-0.516 0.05-0.773 0.075c-0.609 0.06-1.218 0.118-1.827 0.178c-0.184 0.018-0.369 0.036-0.553 0.054c-0.052 0.005-0.064-0.01-0.06 0.047c0.024 0.283 0.055 0.565 0.097 0.847c-0.287-0.252-0.72-0.282-1.038-0.07c-0.293 0.196-0.439 0.561-0.359 0.904c0.078 0.339 0.365 0.603 0.709 0.653c0.367 0.053 0.735-0.144 0.895-0.478c0.079 0.291 0.168 0.576 0.262 0.862C9.362 12.925 9.363 12.929 9.371 12.95zM11.952 20.237c0.005 0.106 0.01 0.212 0.015 0.318c0.001 0.014 0.002 0.036 0.003 0.064c0.002 0.055 0.004 0.109 0.006 0.164c-0.41-0.33-1.034-0.204-1.284 0.255c-0.031 0.056-0.176 0.452-0.079 0.452c0.109 0 0.219 0 0.327 0c0.411 0 0.821 0 1.232 0c0.615 0 1.232 0 1.847 0c0.233 0 0.466 0 0.698 0c0.021 0 0.042 0 0.064 0c0.037 0 0.032-0.136 0.036-0.167c0.039-0.296 0.064-0.592 0.086-0.89c0.004-0.055 0.009-0.109 0.012-0.164c-0.977-0.011-1.955-0.022-2.932-0.033C11.974 20.237 11.962 20.237 11.952 20.237zM11.97 20.62c-0.001-0.021-0.002-0.043-0.003-0.064C11.962 20.457 11.972 20.663 11.97 20.62z"></path>
                      </svg>
                    </span>

                    <div className="info">
                      <strong className="title-style-4 title-color-4">
                        One-Stop-Shop for All Pain Management Treatments
                      </strong>
                    </div>
                  </li>
                  <li
                    className="flex-block-500 center-500 auto top-margin-small"
                    data-item="i"
                    data-key="22949"
                  >
                    <span className="ico-con">
                      <svg
                        viewBox="0 0 24 24"
                        className="values-icon"
                        data-use="cms/svg/site/ephleesdski.24.svg#procedure"
                      >
                        <path d="M24 8.491c0 5.415-7.593 12.162-12 14.418c-3.334-1.707-8.49-5.983-10.804-10.31h2.623c0.241 0 0.435-0.151 0.542-0.35l0.869-1.618l1.403 3.969c0.2 0.568 0.977 0.494 1.141-0.077L9.39 8.926l1.707 8.427c0.128 0.632 1.029 0.628 1.161 0.004l1.602-7.575l1.206 2.48c0.103 0.211 0.314 0.335 0.535 0.336l1.645 0.001c0.238 0.61 0.831 1.042 1.525 1.042c0.903 0 1.636-0.733 1.636-1.636c0-0.903-0.733-1.636-1.636-1.636c-0.694 0-1.286 0.431-1.524 1.041h-1.274l-1.796-3.694c-0.255-0.524-1.003-0.422-1.119 0.13l-1.366 6.465l-1.618-7.987c-0.122-0.602-0.978-0.643-1.15-0.047l-1.784 6.186L5.903 8.97c-0.169-0.478-0.837-0.542-1.083-0.083l-1.356 2.523H0.634C0.23 10.417 0 9.434 0 8.491C0 1.98 7.636-2.054 12 4.244C16.364-2.02 24 1.98 24 8.491z"></path>
                      </svg>
                    </span>

                    <div className="info">
                      <strong className="title-style-4 title-color-4">
                        Our Doctor Has Performed Over 20,000 Procedures
                      </strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                id="StaffV12List"
                className="ui-repeater"
                data-role="container"
              >
                <ul className="flex-" data-role="list">
                  <li
                    className="full flex-"
                    data-role="item"
                    data-item="i"
                    data-key="27955"
                  >
                    <Link
                      className="relative flex-column full scaling-img-item bg-box overflow-hidden border-radius staff-item"
                      href="meet-our-team/rao-k-ali/"
                    >
                      <div className="img pad-height-100 bg-position full">
                        <Image
                          layout="fill"
                          src="/cms/thumbnails/34/400x400/images/dr-ali.jpg"
                          alt="Rao K. Ali Photo"
                          title="Rao K. Ali Photo"
                          data-bg="https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/dr-ali.jpg"
                        />
                      </div>
                      <div className="side-padding-medium vertical-padding-tiny auto full flex-column-center">
                        <strong className="title-style-5 title-color-5 full">
                          Rao K. Ali
                        </strong>

                        <p className="no-top-margin no-bottom-margin title-color-4 full note-style">
                          M.D.
                        </p>

                        <div className="top-margin-tiny">
                          <span className="btn v2">View Profile</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="full flex-"
                    data-role="item"
                    data-item="i"
                    data-key="32141"
                  >
                    <Link
                      className="relative flex-column full scaling-img-item bg-box overflow-hidden border-radius staff-item"
                      href="meet-our-team/dr-muhammad-zulqarnain-dr-z-/"
                    >
                      <div className="img pad-height-100 bg-position full">
                        <Image
                          layout="fill"
                          src="/cms/thumbnails/34/400x400/images/dr-muhammed.jpg"
                          alt="Dr. Muhammad  Zulqarnain (Dr. Z) Photo"
                          title="Dr. Muhammad  Zulqarnain (Dr. Z) Photo"
                          data-bg="cms/thumbnails/34/400x400/images/dr-muhammed.jpg"
                        />
                      </div>
                      <div className="side-padding-medium vertical-padding-tiny auto full flex-column-center">
                        <strong className="title-style-5 title-color-5 full">
                          Dr. Muhammad Zulqarnain (Dr. Z)
                        </strong>

                        <p className="no-top-margin no-bottom-margin title-color-4 full note-style">
                          M.D.
                        </p>

                        <div className="top-margin-tiny">
                          <span className="btn v2">View Profile</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="full flex-"
                    data-role="item"
                    data-item="i"
                    data-key="28713"
                  >
                    <Link
                      className="relative flex-column full scaling-img-item bg-box overflow-hidden border-radius staff-item"
                      // href="meet-our-team/william-blessing/"
                      href="/"
                    >
                      <div className="img pad-height-100 bg-position full">
                        <Image
                          layout="fill"
                          src="/cms/thumbnails/34/400x400/images/william.jpg"
                          alt="William  Blessing Photo"
                          title="William  Blessing Photo"
                          data-bg="/cms/thumbnails/34/400x400/images/william.jpg"
                        />
                      </div>
                      <div className="side-padding-medium vertical-padding-tiny auto full flex-column-center">
                        <strong className="title-style-5 title-color-5 full">
                          William Blessing
                        </strong>

                        <p className="no-top-margin no-bottom-margin title-color-4 full note-style">
                          M.D.
                        </p>

                        <div className="top-margin-tiny">
                          <span className="btn v2">View Profile</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="full flex-"
                    data-role="item"
                    data-item="i"
                    data-key="37606"
                  >
                    <Link
                      className="relative flex-column full scaling-img-item bg-box overflow-hidden border-radius staff-item"
                      href="meet-our-team/ranjit-sandhu/"
                    >
                      <div className="img pad-height-100 bg-position full">
                        <Image
                          layout="fill"
                          src="/cms/thumbnails/34/400x400/images/staff/Randjit-Sandhu-Updated.jpg"
                          alt="Ranjit  Sandhu Photo"
                          title="Ranjit  Sandhu Photo"
                          data-bg="/cms/thumbnails/34/400x400/images/staff/Randjit-Sandhu-Updated.jpg"
                        />
                      </div>
                      <div className="side-padding-medium vertical-padding-tiny auto full flex-column-center">
                        <strong className="title-style-5 title-color-5 full">
                          Ranjit Sandhu
                        </strong>

                        <p className="no-top-margin no-bottom-margin title-color-4 full note-style">
                          M.D.
                        </p>

                        <div className="top-margin-tiny">
                          <span className="btn v2">View Profile</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div
                  className="scrolling-list-nav horizontal relative flex-middle-center top-margin"
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
                      <use href="includes/flair.svg#arrow-left"></use>
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
                      <use href="includes/flair.svg#arrow-right"></use>
                    </svg> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="content v3 light-bg text-left col-50-50 bg-image vertical-middle items-touching bg-box-stylized"
          id="ContentV3"
          data-onvisible="show"
        >
          <picture className="img-bg" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/content/content-v3-bg-mobile.jpg"
              data-src="/assets/content/content-v3-bg-mobile.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="/assets/content/content-v3-bg-tablet.jpg"
              data-src="/assets/content/content-v3-bg-tablet.jpg"
            />
            <Image
              layout="fill"
              src="/assets/content/content-v3-bg.jpg"
              alt=""
              data-src="/assets/content/content-v3-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="flex-spaced-between-auto-responsive-margined flex-direction align-items item-spacing item-widths">
              <div className="text-align bg-box side-padding under-item vertical-padding-small box-flair border-radius ourexpert">
                <div className="flair-border" data-content="true">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div className="overlap-padding">
                    <header
                      className="no-pad bottom-margin-tiny"
                      id="ContentV3Header"
                    >
                      <h2>Live Pain Free with Our Experts</h2>
                    </header>
                    <div className="content-style" id="ContentV3MainContent">
                      <p>
                        The team at Premier Pain Centers is proud to offer
                        patients a wide array of treatments all under one roof,
                        to save you time, money, and stress. We understand how
                        chronic pain can become debilitating &mdash; it affects
                        every part of a person&rsquo;s life. We offer
                        top-quality pain management through minimally invasive,
                        effective procedures and educate you on your condition
                        so you can manage your symptoms at home with ease. Our
                        focus is on increasing your overall health so you can
                        start to enjoy life again. From the moment you walk
                        through our doors, you will notice the level of care we
                        provide. Our compassionate team utilizes
                        state-of-the-art equipment to ensure you receive the
                        most advanced treatments.
                      </p>
                      <p
                        className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                        style={{ textAlign: "center" }}
                      >
                        <b>
                          Call us at
                          <Link href="tel:469-562-4188">
                            &nbsp;469-562-4188
                          </Link>{" "}
                          or&nbsp;
                          <Link href="/contact-locations/">
                            fill out our quick and easy contact form
                          </Link>{" "}
                          today!
                        </b>
                        <b>We are here to help you feel your best.</b>
                      </p>
                    </div>
                    <div id="ContentV3BtnCon"></div>
                  </div>
                </div>
              </div>
              <picture
                className="over-item img bg-position pad-height- box-flair-offset border-radius"
                data-role="picture"
              >
                <source
                  media="(max-width: 500px)"
                  srcSet="/assets/content/content-v3-img-mobile.jpg"
                  data-src="/assets/content/content-v3-img-mobile.jpg"
                />
                <Image
                  layout="fill"
                  src="/assets/content/content-v3-img.jpg"
                  alt=""
                  data-src="/assets/content/content-v3-img.jpg"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* Premier Pain Centers all locations  */}
        <section
          className="panel-group v1 relative no-padding light-bg bg-image"
          id="PanelGroupV5"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/panel-groups/panel-group-v5-bg-mobile.jpg"
              data-src="/assets/panel-groups/panel-group-v5-bg-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/panel-groups/panel-group-v5-bg-tablet.jpg"
              data-src="/assets/panel-groups/panel-group-v5-bg-tablet.jpg"
            />
            <Image
              height="1000"
              width="1000"
              src="/assets/panel-groups/panel-group-v5-bg.jpg"
              alt=""
              data-src="/assets/panel-groups/panel-group-v5-bg.jpg"
            />
          </picture>
          <div className="box" id="PanelGroupV5Zone">
            <form
              id="Form_LocationMapV3"
              method="post"
              encType="multipart/form-data"
              action="https://www.mypremierpain.com/"
              data-search="1"
            >
              <input type="hidden" name="_m_" value="LocationMapV3" />
              <section
                className="location v3 bg-box-none items-spaced col-50-50 vertical-middle text-left dark-bg bg-image flow-reverse"
                id="LocationMapV3"
                data-onvisible="show"
              >
                <div className="main flex-auto-responsive-margined flex-direction item-widths item-spacing align-items">
                  <div className="content bg-box vertical-padding-tiny side-padding-small under-item box-flair border-radius">
                    <div className="flair-border" data-content="true">
                      <span className="flair-1"></span>
                      <span className="flair-2"></span>
                      <div className="overlap-padding text-align">
                        <header
                          className="no-pad bottom-margin-tiny"
                          id="LocationMapV3Header"
                        >
                          <h2 style={{ textAlign: "center" }}>
                            Our Premier Pain Centers
                          </h2>
                        </header>
                        <div
                          className="content-style"
                          id="LocationMapV3Content"
                        >
                          <div className="flex-spaced-between-block-500-max-2-auto">
                            <div>
                              <h2 style={{ textAlign: "center" }}>
                                Richardson
                              </h2>
                              <div style={{ textAlign: "center" }}>
                                405 W Campbell Rd., Ste. 305
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Richardson , TX 75080
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=4359111757237130564"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <h2 style={{ textAlign: "center" }}>
                                Fort Worth
                              </h2>
                              <div style={{ textAlign: "center" }}>
                                1111 5th Ave,
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Fort Worth, TX 76104
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=1967984420970158753"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <h2 style={{ textAlign: "center" }}>Lancaster</h2>
                              <div style={{ textAlign: "center" }}>
                                2700 W. Pleasant Run Rd., Ste. 320
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Lancaster, TX 75146
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=16681715367138219884"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <h2 style={{ textAlign: "center" }}>
                                Waxahachie
                              </h2>
                              <div style={{ textAlign: "center" }}>
                                20 Northgate Dr
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Waxahachie, TX 75165
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=16055043450728768858"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <h2 style={{ textAlign: "center" }}>Cleburne</h2>
                              <div style={{ textAlign: "center" }}>
                                131 S Westmeadow Dr,
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Cleburne, TX 76033
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://goo.gl/maps/SX3zQArg9RvyJZiD9?coh=178572&entry=tt"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h2 style={{ textAlign: "center" }}>
                                North Richland Hills
                              </h2>
                              <div style={{ textAlign: "center" }}>
                                7904 NE Loop 820, Ste. C
                              </div>
                              <div style={{ textAlign: "center" }}>
                                North Richland Hills, TX 76180
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=10580295200115195655"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <h2 style={{ textAlign: "center" }}>Hillsboro</h2>
                              <div style={{ textAlign: "center" }}>
                                1323 E. Franklin St., Ste. 102
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Hillsboro, TX 76645
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=9063563001732813751"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <h2 style={{ textAlign: "center" }}>
                                Farmers Branch
                              </h2>
                              <div style={{ textAlign: "center" }}>
                                13988 Diplomat Dr., Ste. 100
                              </div>
                              <div style={{ textAlign: "center" }}>
                                Farmers Branch, TX 75234
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <Link
                                  rel="noreferrer"
                                  href="https://www.google.com/maps?cid=3934515186064169906"
                                >
                                  + Maps &amp; Directions
                                </Link>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <h2 style={{ textAlign: "center" }}>
                                  Corsicana
                                </h2>
                                <div style={{ textAlign: "center" }}>
                                  3108 E. State HWY 22
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  Corsicana, TX 75102
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  <Link
                                    rel="noreferrer"
                                    href="https://goo.gl/maps/t3UcfhLPzrDX8rHH9"
                                  >
                                    + Maps &amp; Directions
                                  </Link>
                                </div>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <h2 style={{ textAlign: "center" }}>Decatur</h2>
                                <div style={{ textAlign: "center" }}>
                                  902 Preskitt Rd, Suite 300,
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  Decatur, TX 76234
                                </div>
                                <div style={{ textAlign: "center" }}>
                                  <Link
                                    rel="noreferrer"
                                    href="https://goo.gl/maps/ajt2yjVWs8Lfn5CKA"
                                  >
                                    + Maps &amp; Directions
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="LocationMapV3BtnCon">
                          <div className="top-margin-small center-500">
                            <Link
                              className="btn v1"
                              href="/contact-locations/"
                              aria-labelledby="LocationMapV3Header"
                            >
                              All locatons
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="MobileContent">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.1973361872328!2d-97.21270019994957!3d32.83043933275648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e79a45ee124d9%3A0x92d4c26d7da2ff07!2sPremier%20Pain%20Centers!5e0!3m2!1sen!2s!4v1683004730841!5m2!1sen!2s"
                      width="900"
                      className="mapframe"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </section>
            </form>
            <section
              className="blog v3 text-left dark-bg bg-image bg-box-stylized"
              id="BlogV3"
              data-onvisible="show"
            >
              <picture className="img-bg" data-role="picture">
                <source
                  media="(max-width: 500px)"
                  srcSet="/assets/contact/contact-v5-bg-mobile.jpg"
                  data-src="/assets/contact/contact-v5-bg-mobile.jpg"
                />
                <Image
                  width="100"
                  height="100"
                  src="/assets/contact/contact-v5-bg.jpg"
                  alt=""
                  data-src="/assets/contact/contact-v5-bg.jpg"
                />
              </picture>
              <div className="main">
                <header className="center-800 text-align" id="BlogV3Header">
                  <h4>Our Medical Blogs &amp; News</h4>
                  <strong>Stay Up to Date With the Latest Articles</strong>
                </header>
                <ul
                  className="blog-list flex-grid-wrap-center-max-3-auto-size-break-800-block-500 close-gap-500 ui-repeater"
                  id="BlogV3List"
                >
                  {items &&
                    items.length &&
                    items.slice(-3).map((data, index) => {
                      return (
                        <li
                          className="flex- fit"
                          data-item="i"
                          data-key="1365288"
                          key={index}
                        >
                          <Link
                            className="flex-column full border-radius-item scaling-img-item bg-box relative"
                            href={`/blog${data.slug}`}
                          >
                            <div className="img">
                              <Image
                                src={data?.image}
                                alt={data?.category}
                                height={200}
                                width={200}
                              />
                            </div>

                            <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                              <div className="fit full bottom-margin-tiny">
                                <span className="blog-time-style full">
                                  {/* <time content="Sep 10, 2022">Sep 10</time> */}
                                </span>
                                <strong className="title-style-4 title-color-4">
                                  {data.category}
                                </strong>
                              </div>
                              <span className="fit btn v2">View Article</span>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
                <div id="BlogV3BtnCon">
                  <div className="top-margin text-center">
                    <Link
                      className="btn v1"
                      href="/blog/"
                      aria-labelledby="BlogV3Header"
                    >
                      All Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const posts = await axios.get(SSR_ENDPOINT + "/blogs/getLastThree");
  const data = await posts.data.data;
  return {
    props: {
      items: data,
    },
  };
};
