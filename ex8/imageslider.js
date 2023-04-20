import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./image1.jpg"
import img2 from "./image10.png"
import img3 from "./image6.jpg"
import img4 from "./image7.jpg"
import img5 from "./image8.jpg"
export default function Appimage() {
   const sliderImages = [
      {
         url: img1,
      },
      {
         url: img2,
      },
      {
         url: img3,
      },
      {
         url: img4,
      },
      {
         url: img5,
      },
   ];
   return (
      <div>
         <h3>
            {" "}
            Image Slider
         </h3>
         <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showNavs={true}
         />
      </div>
   );
}
// export default Appimage;