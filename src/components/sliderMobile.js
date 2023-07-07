import React, {Component, useState } from "react";

import Slider from 'react-slick';
import "../scss/corusel/slick.scss"; 
import "../scss/corusel/slick-theme.scss";

import mainPhoto from "../scss/image/Group.png";

// import Dots from "./dotsRender";

import Style from "../scss/sliderMobile.module.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={Style.sliderContainer}>
        <Slider {...settings}>
          <div>
          <img src={mainPhoto} alt="mainPhoto" />
          </div>
          <div>
          <img src={mainPhoto} alt="mainPhoto" />
          </div>
          <div>
          <img src={mainPhoto} alt="mainPhoto" />
          </div>
          <div>
          <img src={mainPhoto} alt="mainPhoto" />
          </div>
          <div>
          <img src={mainPhoto} alt="mainPhoto" />
          </div>
        </Slider>
      </div>
    );
  }
}

// function SliderMobile() {
//   const [page, setPage] = useState(0);

//   const IMG_WIDTH = 100;

  //// useEffect(() => {
  ////   setPages(
  ////     Children.map(children, (child) => {
  ////       return cloneElement(child, {
  ////         style: {
  ////           height: "100%",
  ////           minWidth: `${IMG_WIDTH}px`,
  ////           maxWidth: `${IMG_WIDTH}px`,
  ////         },
  ////       });
  ////     })
  /////   );
  //// }, []);


//   const arrowClickLeft = function (event) {
//     setPage((currentPage) => {
//       const newPage = currentPage + IMG_WIDTH;

//       return Math.min(newPage, 0);
//     });
//   };
//   const arrowClickRight = function () {
//     setPage((currentPage) => {
//       const newPage = currentPage - IMG_WIDTH;

//       const maxWidthPage = -(IMG_WIDTH * 2);

//       console.log(newPage);

//       return Math.max(newPage, maxWidthPage);
//     });
//   };

//   return (
//     <div className={Style.sliderContainer}>
//       <button className={Style.sliderBtnLeft} onClick={arrowClickLeft}></button>
//       <div className={Style.sliderMainContent}>
//         <div style={{ transform: `translateX(${page}%)` }}>
//           <img src={mainPhoto} alt="mainPhoto" />
//           <img src={mainPhoto} alt="mainPhoto" />
//           <img src={mainPhoto} alt="mainPhoto" />
//         </div>
//         <div className={Style.sliderPoints}>
//         <Dots page={page} />
//         </div>
//       </div>
//       <button
//         className={Style.sliderBtnRight}
//         onClick={arrowClickRight}
//       ></button>
//     </div>
//   );
// }

// export default SliderMobile;
