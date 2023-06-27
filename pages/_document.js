import { Html, Head, Main, NextScript } from "next/document";
import ScheduleAppointmentGlobalButton from "../components/ScheduleAppointmentGlobalButton";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PJ54LHJ');
              `,
          }}
        />
        {/* Add Script of Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var continuallySettings = { appID: "6p9r2jvzxrq7" };`,
          }}
        ></script>
        <script src="https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js"></script>
        {/* <script
          type="text/javascript"
          src="https://onsite.optimonk.com/script.js?account=201357"
          async
        ></script> */}
      </Head>
      <body>
        {/* <ScheduleAppointmentGlobalButton /> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJ54LHJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
