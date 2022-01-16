import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

const Slider = ({ playlist }) => {
  console.log("slider re-render");
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(6, 198px)" }}
      className="gap-x-5"
    >
      {playlist &&
        playlist.map((track) => {
          return <Card key={track.id} track={track} />;
        })}
    </div>
  );
};

Slider.propTypes = {
  playlist: PropTypes.array,
};

export default Slider;
