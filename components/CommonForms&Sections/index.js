import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const CSR_ENDPOINT = process.env.NEXT_PUBLIC_URL;

export const CommonFormsSections = () => {
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
      <ToastContainer />
      <section
        className="panel-group v1 relative no-padding dark-bg bg-image"
        id="PanelGroupV7"
      >
        <picture className="img-bg bg-position" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="/assets/panel-groups/panel-group-v7-bg-mobile.jpg"
            data-src="/assets/panel-groups/panel-group-v7-bg-mobile.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/panel-groups/panel-group-v7-bg-tablet.jpg"
            data-src="/assets/panel-groups/panel-group-v7-bg-tablet.jpg"
          />
          <Image
            width="2000"
            height="200"
            src="/assets/panel-groups/panel-group-v7-bg.jpg"
            alt=""
            data-src="/assets/panel-groups/panel-group-v7-bg.jpg"
          />
        </picture>
        <div className="box" id="PanelGroupV7Zone">
          <section
            className="reviews v1 dark-bg text-center bg-box-stylized"
            id="ReviewsV1"
            data-onvisible="show"
          >
            <div className="main text-align center-1024">
              <header id="ReviewsV1Header">
                <h4>PATIENT REVIEWS</h4>
                <strong>How We Have Impacted Our Community</strong>
              </header>
              <ul
                className="flex-grid-wrap-auto-size-max-3-break-1024-block-800 close-gap-800 ui-repeater"
                id="ReviewsV1Feed"
              >
                <li
                  className="flex- side-padding vertical-padding-small text-center border-radius-item relative pseudo-before bg-box box-flair reviewsBorder"
                  data-item="i"
                  data-key="3172114"
                >
                  <div className="flex-column-center-middle flair-border full">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <blockquote className="full">
                      <p className="no-top-margin">
                        &ldquo;I came to see Dr. Ali for a consultation for low
                        back pain from years of doing gymnastics. He was able to
                        make a care plan to treat my low back pain and his plan
                        has helped reduce my pain tremendously.&rdquo;
                      </p>

                      <strong className="note-style">- Mikey D.</strong>
                    </blockquote>
                  </div>
                </li>
                <li
                  className="flex- side-padding vertical-padding-small text-center border-radius-item relative pseudo-before bg-box box-flair reviewsBorder"
                  data-item="i"
                  data-key="3172118"
                >
                  <div className="flex-column-center-middle flair-border full">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <blockquote className="full">
                      <p className="no-top-margin">
                        &ldquo;I'm finally feeling what quality of life feels
                        like. I am very thankful I found Dr. Ali. He will always
                        be my pain management doctor. He is a very good doctor
                        that knows how to fix your pain and he really cares
                        about his patients.&rdquo;
                      </p>

                      <strong className="note-style">- Ricky C.</strong>
                    </blockquote>
                  </div>
                </li>
                <li
                  className="flex- side-padding vertical-padding-small text-center border-radius-item relative pseudo-before bg-box box-flair reviewsBorder"
                  data-item="i"
                  data-key="3160510"
                >
                  <div className="flex-column-center-middle flair-border full">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <blockquote className="full">
                      <p className="no-top-margin">
                        &ldquo;Dr. Ali cares about his patients he doesn't give
                        up on his patients he keeps working with them to get the
                        pain down to at least 90-95%. Dr. Ali walked my CNA step
                        by step on how to take the wire out no pain at all he
                        stayed on the phone the whole time.&rdquo;
                      </p>

                      <strong className="note-style">- Shannon S.</strong>
                    </blockquote>
                  </div>
                </li>
              </ul>
              <div id="ReviewsV1ReviewBtn">
                <div className="text-center top-margin">
                  <Link
                    href="../../reviews/"
                    aria-labelledby="ReviewsV1Header"
                    className="btn v1"
                  >
                    All reviews
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <form id="Form_ContactV1" onSubmit={HandleForm}>
            <input type="hidden" name="_m_" value="ContactV1" />
            <section
              className="contact v1 dark-bg bg-box-none text-center"
              id="ContactV1"
              data-onvisible="show"
            >
              {/* <Link name="contactAnchor"></Link> */}
              <div className="main">
                <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
                  <div className="flair-border">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <header
                      className="text-align center-800"
                      id="ContactV1Header"
                    >
                      <h4>SCHEDULE AN APPOINTMENT</h4>
                      <strong>The Next Steps to Living Pain Free</strong>
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
                                placeholder="Message"
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
            </section>
          </form>
          <section
            className="values v1 dark-bg text-center vertical-top animates bg-box-unlike"
            id="ValuesV1"
            data-onvisible="show"
          >
            {/* <Link name="valuesAnchor"></Link> */}

            <div className="main relative">
              <header className="text-align center-500" id="ValuesV1Header">
                <h4>HOW WE STAND OUT</h4>

                <strong>Nothing But the Best Care</strong>
              </header>
              <ul
                className="values-list flex-wrap-grid-large-block-800-break-1024-auto-size-max-3 ui-repeater"
                id="ValuesV1List"
              >
                <li
                  className="flex-block-500 align-items center-500 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key="22954"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="../cms/svg/site/ephleesdski.24.svg#education"
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
                  className="flex-block-500 align-items center-500 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key="22951"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="../cms/svg/site/ephleesdski.24.svg#appointment"
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
                  className="flex-block-500 align-items center-500 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key="22950"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="../cms/svg/site/ephleesdski.24.svg#treatments"
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
                  className="flex-block-500 align-items center-500 auto side-padding-small vertical-padding-tiny bg-box border-radius-item"
                  data-item="i"
                  data-key="22949"
                >
                  <span className="ico-con">
                    <svg
                      viewBox="0 0 24 24"
                      className="values-icon"
                      data-use="../cms/svg/site/ephleesdski.24.svg#procedure"
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
          </section>
        </div>
      </section>
    </>
  );
};
