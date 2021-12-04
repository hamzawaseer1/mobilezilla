import React from "react";
import Card from "./Card";
import sdata from "./sdata";
import Heading from "./Heading";
import Footer from "./Footer";
// import Slider from "./Slider";

function Allcards() {
  return (
    <>
      <Heading />
      <div className="cards">
        {sdata.map((n) => {
          return <Card imgsrc={n.imgsrc} desc={n.sname} title={n.title} />;
        })}
      </div>
      <Footer />
    </>
  );
}
export default Allcards;
