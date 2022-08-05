import React from "react";
import '../css/foto.css'

//anon function
export default (props) => {

  return(
    <div>
      <img src={props.img} alt="" width={415}/>
    </div>

  )

}