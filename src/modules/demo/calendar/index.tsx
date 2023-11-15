import React from "react";
import { InlineWidget } from "react-calendly";
import * as Styled from "./calendar.styles";
import Head from "next/head";
export const Calendar: React.FC = () => {
  return (
    <Styled.CalendarWrapper>
      <h1>Private Demo</h1>
      <p>
        {
          "Can't make it to our live webinars? Why not book a live demo with our product team.Check the availability and book now."
        }
      </p>
      <div
        className="tidycal-embed"
        data-path="classe365/classe365-product-demo-new-customer-only"
      ></div>
      <Head>
        <script src="https://assets.tidycal.com/js/embed.js" async></script>
      </Head>
    </Styled.CalendarWrapper>
  );
};
