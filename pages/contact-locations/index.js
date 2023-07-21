import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import { Banner } from "@/components/CommonBanner/Banner";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
import { useRouter } from "next/router";

const CSR_ENDPOINT = process.env.NEXT_PUBLIC_URL;

export const ContactLocations = () => {
  const router = useRouter();

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
      CSR_ENDPOINT + "appointment/create/",
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
      <Head>
        <title>Contact & Locations | Pain Management in Richardson</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Contact & Locations. Let us help you recover! Contact Premier Pain Centers to schedule an appointment for Richardson Pain Management. Book your consultation today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          property="og:title"
          content="Contact & Locations | Premier Pain Centers"
        />
        <meta
          property="og:description"
          content="Contact & Locations. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
      </Head>

      <Header />
      <ToastContainer />

      <Banner
        bg="/assets/sub-banners/sub-banner-v1-bg.jpg"
        title="CONTACT & LOCATIONS"
      />

      <form id="Form_ContactSystemV1" onSubmit={HandleForm}>
        <input type="hidden" name="_m_" value="ContactSystemV1" />
        <section
          className="contact-system v1 light-bg text-center col-50-50 items-touching bg-image bg-box-unlike"
          id="ContactSystemV1"
          data-onvisible="show"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcSet="/assets/contact/contact-system-v1-bg-mobile.jpg"
              data-src="/assets/contact/contact-system-v1-bg-mobile.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="/assets/contact/contact-system-v1-bg-tablet.jpg"
              data-src="/assets/contact/contact-system-v1-bg-tablet.jpg"
            />
            <img
              src="/assets/contact/contact-system-v1-bg.jpg"
              alt=""
              data-src="/assets/contact/contact-system-v1-bg.jpg"
            />
          </picture>

          <div className="main top-margin-small">
            <div className="flex-auto-responsive-margined flex-direction align-items item-widths item-spacing">
              <div
                className="bg-box side-padding-small vertical-padding-small under-item border-radius ui-repeater"
                id="ContactSystemV1Form"
              >
                <div className="flair-border" data-item="i" data-key="">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div className="overlap-padding">
                    <header className="text-center" id="ContactV6Header">
                      <h5>Schedule an Appointment</h5>

                      <strong>Take the Next Step to Living Pain Free</strong>

                      {/* <svg className="header-flair">
                        <use href="includes/flair.svg#header"></use>
                      </svg> */}
                    </header>
                    <fieldset>
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
                              htmlFor="ContactSystemV1Form_ITM0_FirstName"
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
                              htmlFor="ContactSystemV1Form_ITM0_LastName"
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
                              htmlFor="ContactSystemV1Form_ITM0_Phone"
                              data-type="valueMissing"
                            >
                              Please enter your phone number.
                            </div>
                            <div
                              className="validation"
                              htmlFor="ContactSystemV1Form_ITM0_Phone"
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
                              htmlFor="ContactSystemV1Form_ITM0_EmailAddress"
                              data-type="valueMissing"
                            >
                              Please enter your email address.
                            </div>
                            <div
                              className="validation"
                              htmlFor="ContactSystemV1Form_ITM0_EmailAddress"
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
                              <option value=" Yes, I am a potential new patient">
                                Yes, I am a potential new patient
                              </option>
                              <option value="No, I'm a current existing patient">
                                No, I'm a current existing patient
                              </option>
                              <option value="I'm neither.">I'm neither.</option>
                            </select>
                            {/* <svg className="site-arrow">
                              <use href="../includes/flair.svg#arrow-down"></use>
                            </svg> */}
                            <div
                              className="validation"
                              htmlFor="ContactSystemV1Form_ITM0_LeadTypeID"
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
                              htmlFor="ContactSystemV1Form_ITM0_Message"
                              data-type="valueMissing"
                            >
                              Please enter a message.
                            </div>
                          </div>
                        </li>
                      </ul>
                    </fieldset>
                    <input
                      id="ContactSystemV1Form_ITM0_FFD6"
                      type="hidden"
                      className="ui-cms-input"
                      name="ContactSystemV1Form$ITM0$FFD6"
                      value
                    />
                    <div className="top-margin-tiny text-align">
                      <button
                        className="btn v1"
                        aria-labelledby="ContactSystemV1Header"
                        type="submit"
                        id="ContactSystemV1Form_ITM0_ctl08"
                        name="ContactSystemV1Form$ITM0$ctl08"
                        data-commandname="Update"
                      >
                        Send Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main thin text-align">
                <header
                  className="no-pad bottom-margin-tiny center-800"
                  id="ContactSystemV1Header"
                >
                  <h1>Contact Premier Pain Centers Today!</h1>
                  {/* <svg className="header-flair">
                <use href="../includes/flair.svg#header"></use>
              </svg> */}
                </header>
                <div
                  className="content-style relative bottom-margin"
                  id="ContactSystemV1Content"
                >
                  <h2>Practical Solutions for Pain Relief</h2>
                  <p>
                    Premier Pain Centers is your one-stop-shop medical provider for
                    pain management and rehabilitation care. We understand that
                    chronic pain can be debilitating and our team works hard to
                    diagnose your condition and offer both surgical and non-surgical
                    treatment options tailored to your unique needs. We also provide
                    in person and phone consultations, and schedule appointment
                    within 24-hours. We proudly serve Richardson, Fort Worth, and
                    the surrounding areas. At Premier Pain Centers, we offer
                    comprehensive pain management solutions for a wide range of
                    conditions. You can count on us for effective treatment,
                    high-quality care, and helpful service.
                  </p>
                  <h5>phone number</h5>
                  <div>469-562-4188</div>
                  <h5>Fax</h5>
                  <div>469-562-4166</div>
                  <h5>Email</h5>
                  <div>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:admin@mypremierpain.com"
                    >
                      admin@mypremierpain.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <section
        className="location-map v5 light-bg bg-box-unlike no-padding"
        id="LocationMapV5"
        data-onvisible="show"
      >
        <ul
          className="flex-wrap-auto-size-max-4-break-1024-block-500 close-gap-500 border-radius ui-repeater"
          id="LocationMapV5Services"
        >
          <li className="flex-column auto" data-item="i" data-key="16847">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/richardson/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Richardson</strong>
                <p className="no-bottom-margin relative">
                  403 W Campbell Rd., Ste. 305
                  <br /> Richardson, TX 75080
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="16848">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/north-richland-hills/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">
                  North Richland Hills
                </strong>
                <p className="no-bottom-margin relative">
                  7904 NE Loop 820, Ste. C
                  <br /> North Richland Hills, TX 76180
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="16849">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/fort-worth/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Fort Worth</strong>
                <p className="no-bottom-margin relative">
                  1111 5th Ave, Fort Worth,
                  <br /> TX 76104, United States
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="16850">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/hillsboro/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Hillsboro</strong>
                <p className="no-bottom-margin relative">
                  1323 E. Franklin St., Ste. 102
                  <br /> Hillsboro, TX 76645
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="16995">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/lancaster/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Lancaster</strong>
                <p className="no-bottom-margin relative">
                  2700 W. Pleasant Run Rd., Ste. 320
                  <br /> Lancaster, TX 75146
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="17614">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/farmers-branch/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">
                  Farmers Branch
                </strong>
                <p className="no-bottom-margin relative">
                  13988 Diplomat Dr., Ste. 100
                  <br /> Farmers Branch, TX 75234
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="19873">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              rel="noreferrer"
              href="/contact-locations/waxahachie"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">
                  Waxahachie Office
                </strong>
                <p className="no-bottom-margin relative">
                  20 Northgate Dr.
                  <br /> Waxahachie, TX 75165
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="20201">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/corsicana/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Corsicana</strong>
                <p className="no-bottom-margin relative">
                  3108 E. State HWY 22
                  <br /> Corsicana, TX 75102
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="20201">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/decatur/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Decatur</strong>
                <p className="no-bottom-margin relative">
                  902 Preskitt Rd,Suite 300,
                  <br /> Decatur, TX 76234
                </p>
              </div>
            </Link>
          </li>
          <li className="flex-column auto" data-item="i" data-key="20201">
            <Link
              className="flex- auto  btn-color-hover relative full bg-box side-padding-large vertical-padding-large box-flair"
              href="/contact-locations/decatur/"
            >
              <div className="flair-border flex-column-center auto text-center">
                <span className="flair-1"></span>
                <span className="flair-2"></span>
                <strong className="title-style-5 relative">Cleburne </strong>
                <p className="no-bottom-margin relative">
                  131 S Westmeadow Dr, <br /> Cleburne, TX 76033
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default ContactLocations;
