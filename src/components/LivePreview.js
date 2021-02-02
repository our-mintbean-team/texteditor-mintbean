import React, { useEffect } from "react";

function LivePreview({ text }) {
  useEffect(() => {
    document.querySelector('.text-view').innerHTML=text  
  });

  return (
    <>
      <h3>Rich text</h3>
      <div className="text-view"></div>
      <br></br>
      <h3>Markup</h3>
      {text}
    </>
  );
}

export default LivePreview;
