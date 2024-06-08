import {BeatLoader} from "react-spinners"
import React from 'react'
import "./Loading.css";

const Loading = () => {
  return (
    <div className="iconocarga">
       <BeatLoader size={25} color="#d495ff" />
    </div>
  )
}

export default Loading