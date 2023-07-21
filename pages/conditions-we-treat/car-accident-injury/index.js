import { Banner } from "@/components/CommonBanner/Banner";
import { CommonFormsSections } from "@/components/CommonForms&Sections";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ServicesSidebarLinks } from "@/components/ServicesSidebarLinks";
import { TreatmentsSidebarMenu } from "@/components/TreatmentsSidebarMenu";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

export const CarAccidentInjury = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Richardson Car Accident Injury Treatment | Premier Pain Centers{" "}
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.pathname}/`}
        />

        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="If you are experiencing pain following a collision, contact Premier Pain Centers to schedule an appointment for car accident injury treatment in Richardson."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
      </Head>

      <Header />
      <Banner
        title="CAR ACCIDENT INJURY"
        bg="/assets/sub-banners/exercising-banner-2.jpg"
      />
      <main id="MainZone">
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
                      <h1>Richardson Car Accident Injury Treatment</h1>
                      <h2>Providing Pain Relief</h2>
                      <p>
                        The impact of a car accident can extend well beyond the
                        moment when your vehicle collides with another. Many
                        people who have been hurt in a car accident experience
                        long-lasting fear and anxiety, and the injuries caused
                        by crashes are often not cured immediately either. Car
                        accident injuries can contribute to chronic pain,
                        mobility issues, and other conditions that limit a
                        person&rsquo;s ability to live a full life.
                      </p>
                      <p>
                        Thankfully, help is available at Premier Pain Centers.
                        You don&rsquo;t have to accept pain from a car accident
                        injury as part of your everyday reality. Whether you
                        were recently injured in a car accident and need help
                        getting back on your feet or have been living with
                        chronic pain caused by a collision in your past, we can
                        create a unique treatment plan for you and provide the
                        pain management you need.
                      </p>
                      <p
                        align="center"
                        className="text-highlight v2 bg-box bordered side-padding-medium vertical-padding-tiny"
                      >
                        <b>
                          Give our office a call today at&nbsp;
                          <Link href="tel:469-562-4188">469-562-4188</Link>{" "}
                          or&nbsp;
                          <Link href="/contact-locations/">
                            contact us online
                          </Link>{" "}
                          to learn more about our Richardson car accident injury
                          treatments or schedule a same-day appointment.
                        </b>
                      </p>
                      <h3>Why You Should See a Doctor After a Car Accident</h3>
                      <p>
                        Car accidents often result in severe injuries, but this
                        is not always the case. It is not uncommon for people
                        who were involved in a car accident to feel relatively
                        fine in the immediate aftermath of the collision. For
                        this reason, many people make the mistake of thinking
                        they do not need medical treatment.
                      </p>
                      <p>
                        Regardless of how you are feeling after a crash, you
                        should see a doctor. Car accident injuries may go
                        unnoticed at first, only to progress into more severe
                        issues later. By visiting a medical professional as soon
                        as possible, you can get the care you need for all your
                        injuries and ensure more significant problems do not
                        develop.
                      </p>
                      <p>
                        <b>
                          If you were injured in a car accident, you may be
                          experiencing:
                        </b>
                      </p>
                      <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                        <li>
                          <Link href="/conditions-we-treat/joint-pain/">Joint pain</Link>
                        </li>
                        <li>
                          <Link href="/conditions-we-treat/back-pain/">Back pain</Link>
                        </li>
                        <li>
                          <Link href="/conditions-we-treat/headaches/">Head pain</Link>
                        </li>
                        <li>
                          <Link href="/conditions-we-treat/neck-pain/">Neck pain</Link>
                        </li>
                      </ul>
                      <h3>
                        How Pain Management Can Help to Treat Your Car Accident
                        Injury
                      </h3>
                      <p>
                        We offer a variety of pain management methods that can
                        be tailored to fit your situation. If an injury is
                        recent, treatment that is aimed at repair and
                        realignment may be best for you &mdash; surgical
                        intervention may even be an option. If you are seeking
                        relief from chronic pain, you may benefit from physical
                        therapy and similar alternatives. Within all of our
                        treatment plans, the goal of care is always to alleviate
                        pain and help our patients experience a full range of
                        mobility once again.
                      </p>
                      <h3>
                        Start Your Car Accident Injury Treatment Plan Today
                      </h3>
                      <p>
                        We aim to create a helpful, stress-free experience for
                        all our patients. We understand how frustrating living
                        with pain can be &mdash; your search for treatment
                        should not add to your frustrations. With same-day
                        appointments, multilingual services in English, Spanish,
                        Hindi, and the assistance of friendly and experienced
                        professionals, the Premier Pain Centers team is here to
                        help you get the relief you are looking for.
                      </p>
                      <p
                        align="center"
                        className="text-highlight v1 bg-box unlike-bg side-padding-medium vertical-padding-tiny"
                      >
                        <b>
                          If you are seeking Richardson car accident injury
                          treatments or pain management services, entrust in our
                          staff for advanced care. Call
                          <Link
                            href="tel:"
                            id="ColumnLayoutContent_3"
                            data-replace-href="tel:{Cookie:PPCP1/}"
                          >
                            <span
                              id="ColumnLayoutContent_4"
                              data-process="replace"
                              data-replace="{Cookie:PPCP1/}"
                            ></span>
                          </Link>{" "}
                          or&nbsp;
                          <Link href="/contact-locations/">
                            contact us online
                          </Link>{" "}
                          today.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <script
                id="Process_ColumnLayoutContent"
                type="text/javascript"
                style={{ display: "none" }}
              >
                window.Process&&Process.Page(['Process_ColumnLayoutContent','ColumnLayoutContent_1','ColumnLayoutContent_2','ColumnLayoutContent_3','ColumnLayoutContent_4']);
              </script>
            </div>
            <div className="side-zone" id="SideZone">
              <ServicesSidebarLinks />
              <aside
                className="side-blog v1 light-bg transparent-bg text-center bg-box-unlike"
                id="SideBlogV1"
                data-onvisible="show"
                data-role="scroller"
              ></aside>
              <TreatmentsSidebarMenu />
            </div>
          </div>
        </section>
      </main>

      <CommonFormsSections />

      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(CarAccidentInjury), {
  ssr: false,
})