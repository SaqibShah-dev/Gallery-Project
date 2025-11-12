import React from "react";

const Card = (props) => {
  return (
    <div  className="rounded-xl overflow-hidden shadow-md w-60">
      <img
        className="h-40 w-full object-cover hover:scale-95 transition-transform duration-200"
        src={props.elem.download_url}
      />
      <h3 className="font-semibold text-center">{props.elem.author}</h3>
    </div>
  );
};

export default Card;
