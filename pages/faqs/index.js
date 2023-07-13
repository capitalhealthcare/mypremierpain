import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { Banner } from "@/components/CommonBanner/Banner";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const SSR_ENDPOINT = process.env.SSR_API_URL;
const CSR_ENDPOINT = process.env.NEXT_PUBLIC_URL;

export const FAQ = ({ item }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(item);
  }, []);

  return (
    <>
      <Head>
        <title>FAQs | Premier Pain Centers</title>
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
      <Banner bg="/assets/sub-banners/sub-banner-v1-bg.jpg" title="FAQs" />

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
              <div className="card-container-blog">
                {items?.map((data, index) => (
                  <Link href={`/faqs${data.slug}`}>
                    <div className="card faq-card" key={index}>
                      Q: {data.question}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;

export const getServerSideProps = async () => {
  const posts = await axios.get(SSR_ENDPOINT + "faq/getAll/");
  const data = await posts.data.data;

  return {
    props: {
      item: data,
    },
  };
};
