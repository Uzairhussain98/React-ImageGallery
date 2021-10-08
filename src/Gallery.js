import React,{useState} from 'react'
import './App.css';
import { FaChevronDown } from 'react-icons/fa';
import Img1 from './images/img1.jpg'
import Img2 from './images/img2.jpg'
import Img3 from './images/img3.jpg'
import Img4 from './images/img4.jpg'
import Img5 from './images/img5.jpg'
import Img6 from './images/img6.jpg'
import Img7 from './images/img7.jpg'
import Img8 from './images/img8.jpg'
import Img9 from './images/img9.jpg'
import Img11 from './images/img11.jpg'
import Img12 from './images/img12.jpg'
import Img13 from './images/img13.jpg'




const Gallery = () => {
  let data = [
    {
    id : 1,
    imgSrc : Img1
    },
    {
      id : 2,
      imgSrc : Img2
    },
    {
        id : 3,
        imgSrc : Img3
    },
    {
      id : 4,
      imgSrc : Img4
    },
    {
      id : 5,
      imgSrc : Img5
    },
    {
      id : 6,
      imgSrc : Img6
    },
    {
      id : 7,
      imgSrc : Img7
    },
    {
      id : 8,
      imgSrc : Img8
    },
    {
    id : 9,
    imgSrc : Img9
    }, 
    {
    id : 10,
    imgSrc : Img11
    },
    {
      id : 11,
      imgSrc : Img12
      },
      {
        id : 12,
        imgSrc : Img13
        },

]
const [model,setModel] = useState(false);
const [tempimgSrc,settempimgSrc] = useState("")

const  getImg = (imgSrc) =>{
settempimgSrc(imgSrc);
setModel(true);
}


  return (
    <>
    <div className={model? "model open " : "model"} >
      <img src={tempimgSrc} alt="aa"/>
      <FaChevronDown onClick={()=> setModel(false)}/>


    </div>


    <div className="gallery">
    {data.map((item, index)=> {
      return(
        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
          <img className="img" src={item.imgSrc} alt="random"/>

          </div>
    )
    })}

    </div>
  
    </>
  )
}

export default Gallery
