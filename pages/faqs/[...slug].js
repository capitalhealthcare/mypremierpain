import React from "react";
import axios from "axios";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import { ServiceSidebar } from "@/components/ServiceSidebar";

const SSR_ENDPOINT = process.env.SSR_API_URL;

const Slug = ({ items }) => {
  return (
    <>
      <Head>
        <title>{items && items?.seoTitle[0]}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/faqs${
            items && items?.slug
          }`}
        />
        <meta name="description" content={items && items?.metaDes} />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Pain Centers" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/faq${
            items && items?.slug
          }`}
        />
        <meta property="og:title" content={items && items?.seoTitle[0]} />
        <meta property="og:description" content={items && items?.metaDes} />
        <meta property="og:image" content={items?.image} />
      </Head>
      <Header />

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
              <h3>
                Q: <u>{items.question}</u>
              </h3>
              <h5
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: items.answer }}
              ></h5>
            </div>
          </div>
          <ServiceSidebar faq={"faq"} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Slug;
export const getServerSideProps = async ({ query: { slug } }) => {
  const posts = await axios.get(SSR_ENDPOINT + "faq/" + slug + "/");
  const datas = await posts.data.data;
  return {
    props: {
      items: datas,
    },
  };
};
