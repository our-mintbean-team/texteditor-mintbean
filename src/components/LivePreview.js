import React, { useEffect } from "react";

function LivePreview({ text }) {
  // useEffect(() => {
    // document.querySelector('.text-view').innerHTML=text  
  // });

  return (
    <div id='liveView' >
      {/* <h3 className='label' >Rich text</h3>
      <div className="text-view"></div> */}
      {/* <br></br> */}
      <h3 className='label' >Markup</h3>
      {text}
    </div>
  );
}

export default LivePreview;
