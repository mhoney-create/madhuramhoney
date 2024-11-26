import React from "react";
import Cardcomponent from "./cardcomponent";
import natural from "../../assets/leaf.jpg";
import star from "../../assets/star.png";
import honeycomb from "../../assets/honeycomb.png";
const Homepagecomponents = () => {
  return (
    <div className="flex justify-center items-center gap-3 mt-24">
      <Cardcomponent
        title="100% Natural"
        description="Pure, raw honey – no pasteurization, no additives."
        image={natural}
      />
      <Cardcomponent
        title="100% Unique"
        description="Distinct flavor, color, and texture that changes with each flowering season."
        image={star}
      />
      <Cardcomponent
        title="100% Bee-Friendly"
        description="Sustainably sourced with cruelty-free practices."
        image={honeycomb}
      />
    </div>
  );
};

export default Homepagecomponents;
