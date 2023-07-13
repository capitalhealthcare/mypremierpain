import Head from "next/head";
import React from "react";
import { Banner } from "@/components/CommonBanner/Banner";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export const Reviews = () => {
  return (
    <>
      <Head>
        <title>Client Reviews | Premier Pain Centers</title>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Premier Pain Centers has helped many people with pain management services! Read what our past clients have to say about us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta property="og:title" content="Reviews | Premier Pain Centers" />
        <meta
          property="og:description"
          content="Reviews. For quality pain management services from a friendly and caring team, call Premier Pain Centers today."
        />
        
      </Head>

      <Header />
      <Banner bg="/assets/sub-banners/sub-banner-v1-bg.jpg" title="Reviews" />

      <main id="MainZone">
        <form
          id="Form_SSReviewSystemV1"
          method="post"
          encType="multipart/form-data"
          action="/reviews/"
          data-search="1"
        >
          <input type="hidden" name="_m_" value="SSReviewSystemV1" />
          <input
            type="hidden"
            className="ui-cms-input"
            id="SSReviewSystemV1__edit_"
            name="SSReviewSystemV1$_edit_"
            value
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="SSReviewSystemV1__command_"
            name="SSReviewSystemV1$_command_"
            value
          />
          <section
            className="reviews-system v1 light-bg bg-box-stylized ui-repeater ui-ajax"
            id="SSReviewSystemV1"
            data-loading="true"
            data-infinite="true"
            data-onvisible="show"
            data-ajaxreplace="true"
            data-needspaging="false"
          >
            <input
              type="hidden"
              id="SSReviewSystemV1_HDR0_ResultsPerPage"
              className="ui-cms-input"
              name="SSReviewSystemV1$HDR0$ResultsPerPage"
              value="20"
            />
            <input
              type="hidden"
              id="SSReviewSystemV1_HDR0_PagingID"
              autoComplete="off"
              className="ui-cms-input"
              name="SSReviewSystemV1$HDR0$PagingID"
              value
              data-search="true"
            />
            <div className="main">
              <ul
                className="flex-grid-large-wrap-block-800 close-gap-800 results-11"
                data-role="tbody"
              >
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172114"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        His Plan Helped Reduce My Pain
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        className="quote-icon top-margin-tiny"
                        title="Quote Icon"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          I came to see Dr. Ali for a consultation for low back
                          pain from years of doing gymnastics. I was greeted by
                          Dr. Ali with a big smile and with his full attention.
                          He listened to all my pain areas and stories of how I
                          injured myself. He was able to make a care plan to
                          treat my low back pain and his plan has helped reduce
                          my pain tremendously. I highly recommend Dr. Ali
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Mikey D.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172118"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        Knows How to Fix Your Pain
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          I have been dealing with back pain most of my life.
                          I've seen about sixteen pain management doctors with
                          no long-term success. For the last twenty years, more
                          pain has started in other areas of my body, like my
                          left hip, knees, and both wrist. it has taken a
                          serious toll on health. There was not much I could do
                          without causing chronic pain. I was about to give up
                          but decided to try one more time. I was looking up
                          pain management doctors near me and saw Dr. Rao Ali,
                          so I prayed on it and called. The office staff was
                          great and professional. My first visit was on Dec. 4th
                          2020. I explain where I was having pain. He started
                          sending me to other doctors to run tests, when he got
                          the results back, he went to work, and the man he got
                          busy working on me. NO MORE BACK PAIN- NO MORE HIP
                          PAIN now working on my left leg, then knees, and last
                          both of my wrist. He has convinced me that I made the
                          right choice. I'm finally feeling what quality of life
                          feels like. I am very thankful I found Dr. Ali. He
                          will always be my pain management doctor. He is a very
                          good doctor that knows how to fix your pain and he
                          really cares about his patients. If you suffer from
                          chronic pain make an appointment and see for yourself.
                          Thank You, Jesus!!!
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Ricky C.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3160510"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        Dr. Ali Cares About His Patients
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          Dr. Ali cares about his patients he doesn't give up on
                          his patients he keeps working with them to get the
                          pain down to at least 90-95%. If you have a CNA that
                          takes care of you, he will explain everything he is
                          doing so the CNA also understand. For instance, I was
                          due to come in on a day that was icy snow and was told
                          to stay home. Well, the wires were coming out which it
                          was time for 5hem to. Well, I could not make it we
                          were snowed in. Dr. Ali walked my CNA step by step on
                          how to take the wire out no pain at all he stayed on
                          the phone the whole time. I will always recommend him
                          and his staff.
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Shannon S.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172119"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        Knowledge, Professionalism & Compassion
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          Dr. Ali!. His balanced mix of knowledge,
                          professionalism &amp; compassion is second to none
                          while working with patients who suffer from pain on a
                          daily basis. He helps me understand the reasons for
                          the particular medications &amp; the doses he
                          prescribes. I would recommend him to everyone!!!
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Benjamin D.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3160514"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        A Godsend
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        Dr. Ali has been a godsend for me. I have seen several
                        pain management Drs but he is the first that has made a
                        significant difference in my pain level. When I first
                        came to see Dr. Ali I was taking 6 Norco per day and
                        still in pain. I am now down to 3 per day as needed and
                        can relax if my due date for refill passes because I
                        have pills left because more than likely I have meds
                        left. I have complete days now that I can skip my meds.
                        That has not happened to me in a long long time. Thank
                        you Dr. Ali
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Nancy M.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172129"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        A Complete Doctor
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          He is a complete doctor who cares about his patients
                          and with me, he has helped so much and understands
                          that about the pain I am in and he talks to me about
                          what can be done to help me without taking a lot of
                          pills. I trust him.
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Hikimi K.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172126"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        I Can Stand & Walk Again
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          Compared to the condition I was in, I would endorse
                          more than ninety percent relief. This doctor took on
                          my difficult case as I was on heavy pain medication
                          and had several surgeries. He believed in me and in
                          helping me through this difficult time. I believe in
                          him completely. I can actually stand and walk straight
                          again. Mind you I am finally off the narcotics
                          medications. Doctor Ali changed my life I will be
                          forever grateful.
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Peter H.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172122"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        Painless
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          Doctor Ali is amazing. He did back surgery on me all
                          through a simple and small needle. No cutting,
                          suturing or bleeding. I was reluctant to have surgery
                          but he showed me his videos of people who found great
                          relief through surgery. Now, I feel 100% better. It
                          was painless. Recommendation straight away for all of
                          you.
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Alex S.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172131"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        I Feel A Lot Better
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        Dr. Ali was able to help me with my back pain, he did
                        some injections. I was in lots of pain, standing
                        walking, but now with Injections and some meds, I feel a
                        lot better. Great doctor, recommended to all!
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Jessica H.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3172124"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        Given Me Relief
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          Been a patient for several years. Really like his
                          knowledge and professionalism and has given me some
                          relief with different procedures. His staff is very
                          friendly and helpful. Would recommend him for people
                          that have serious back issues like myself.
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Raelyn H.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="half flex- bg-box border-radius-item overflow-hidden"
                  data-role="tr"
                  data-item="i"
                  data-key="3160512"
                >
                  <blockquote className="flex-column-between full relative">
                    <div className="info auto side-padding-large vertical-padding-small">
                      <strong className="title-style-2 title-color-2">
                        Genuine Care
                      </strong>
                      <svg
                        viewBox="0 0 36 36"
                        title="Quote Icon"
                        className="quote-icon top-margin-tiny"
                        data-use="/cms/svg/site/ephleesdski.36.svg#quotes"
                      >
                        <path d="M8.013 15.466a8.045 8.045 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.034 8.034 0 0 1-5.245 1.86a9.036 9.036 0 0 1-7.602-4.26a14.634 14.634 0 0 1-1.877-6.96c0.309-6.651 3.214-11.288 8.768-13.765a11.187 11.187 0 0 1 2.006-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.983 0.549-4.217 1.997-4.551 5.451m4.354-8.957c-6.583 0.969-10.071 7.225-10.302 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.163 0 0.163-0.077 0.163-0.077m14.476 7.105a8.038 8.038 0 0 1 6.48 1.483a7.661 7.661 0 0 1 0.231 12.059a8.002 8.002 0 0 1-5.245 1.86a9.021 9.021 0 0 1-7.594-4.26a14.731 14.731 0 0 1-1.886-6.96c0.317-6.651 3.214-11.288 8.777-13.765a11.097 11.097 0 0 1 1.997-0.557l0.977-0.137a1.55 1.55 0 0 1 1.954 1.62v1.628a1.607 1.607 0 0 1-1.483 1.62c-2.974 0.549-4.217 1.997-4.551 5.451m4.363-8.957c-6.591 0.969-10.071 7.225-10.311 13.174a10.971 10.971 0 0 0 1.568 6.034a7.495 7.495 0 0 0 6.265 3.48a6.613 6.613 0 0 0 4.148-1.466a6.055 6.055 0 0 0-0.231-9.514a6.322 6.322 0 0 0-5.245-1.166a1.573 1.573 0 0 1-0.549 0.077a1.614 1.614 0 0 1-1.646-1.543a2.571 2.571 0 0 1 0-0.771c0.394-3.326 1.568-5.648 5.794-6.42 0.154 0 0.154-0.077 0.154-0.077"></path>
                      </svg>
                      <div className="content-style">
                        <p>
                          Dr. Ali is an amazing doctor! He takes time talking
                          with me about my pain and is extremely genuine about
                          my care. I feel very secure in the help that I
                          receive. He takes a personal interest in my
                          well-being. I wish other doctors in the medical field
                          would care about their patients like Doctor Ali. He is
                          an excellent doctor.
                        </p>
                      </div>
                      <p className="title-style-5 title-color-5 no-bottom-margin">
                        - Barbi K.
                      </p>
                    </div>
                  </blockquote>
                </li>
                <li
                  className="cms-repeater-placeholder"
                  style={{ display: "none !important" }}
                ></li>
              </ul>
            </div>
          </section>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Reviews;
