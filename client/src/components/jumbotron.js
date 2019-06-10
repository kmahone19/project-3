import React from 'react';


function Jumbotron(props) {
  const imgUrl = "images/DD.png"
  const style = {
    bgImg: {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }
  return (
    <div
      style={style.bgImg}
      className={`
        jumbotron
        ${props.fluid ? 'jumbotron-fluid' : ''}
        bg-${props.bg || 'default'}
        text-${props.color || 'dark'}
        text-center
        `}>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>{props.pageTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
