import React from 'react';


function Jumbotron(props) {
  const imgUrl = "../../public/images/DD.png"
  const style = {
    bgImg: {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }
  return (
    <div
      className={`
        jumbotron
        ${props.fluid ? 'jumbotron-fluid' : ''}
        bg-${props.bg || 'default'}
        text-${props.color || 'dark'}
        text-center
        `}>
      <div className="container" >
        <div className="row justify-content-center" style={style.bgImg}>
          <div className="col-12">
            <h1>{props.pageTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
