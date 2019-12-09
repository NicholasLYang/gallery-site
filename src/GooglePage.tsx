import React from "react";
import shoshana from "./shoshana_zuboff.jpg";

const GooglePage = () => {
  return (
    <div>
      <p>
        Google relies on massive amounts of data collection. Whether it is
        through Android phones, Google Analytics or search, Google uses various
        pipelines to gain data that it can use to sell advertisements.
      </p>
      <h2> Speaker </h2>
      <img
        src={shoshana}
        alt="Shoshana Zuboff, a middle aged woman wearing glasses and with curly hair"
      />
      <p>Our speaker for this part of the exhibit will be Shoshana Zuboff.</p>
    </div>
  );
};

export default GooglePage;
