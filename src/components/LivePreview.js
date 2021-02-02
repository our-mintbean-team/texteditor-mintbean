import React from "react";

function LivePreview({ text }) {
  
  // document.querySelector('.text-view').innerHTML=text;
  console.log(text)
  return (
    <div className="text-view">
      <p>{text}</p>
    </div>
  );
}

export default LivePreview;
