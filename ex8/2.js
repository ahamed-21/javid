import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./App.css";
import img1 from "./image1.jpg"
import img2 from "./image2.jpg"
import img3 from "./image3.jpg"
import img4 from "./image4.png"
import img5 from "./image5.jpg"
function App1() {
  const Images =[    
    {
      url: img1
    },
    {
      url: img2
    },
    {
      url: img3
    },
    {
      url: img4
    },
    {
      url: img5
    }                
  ];
  const [activeImage, setCurrent] = useState(0);
  const length = Images.length;
  const nextSlide = ()=>{
    setCurrent(activeImage === length -1 ? 0: activeImage+1);
  };
  const prevSlide = ()=>{
    setCurrent(activeImage === 0 ? length-1: activeImage-1);
  };
  if(!Array.isArray(Images)||Images.length <= 0)
  {
    return null;
  }
  return(
    <div>
      <h1 style={{textAlign:'center'}}>Image Slider</h1>
       <section class = "imageslider">
        <div class = "left">
          <ArrowBackIosIcon onClick = {prevSlide}/>
        </div>
        <div class = "right">
          <ArrowForwardIosIcon onClick = {nextSlide}/>
        </div>
        {
          Images.map((currentSlide, ind)=>{
            return(
              <div className={ind === activeImage ? "currentSlide active":"CurrentSlide"}
              key = {ind}>
                 {ind === activeImage && <img src= {currentSlide.url} className="image" alt= "not loaded" />}
              </div>
            )
          })
        }     
       </section>
    </div>
  )
}

export default App1;