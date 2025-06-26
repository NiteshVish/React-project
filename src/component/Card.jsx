// import React from "react";
import React, { Component } from "react";

//  function Card({title,details,click}){
//     return (
//         <div style={{width: "100px",background:"grey",color:"white",padding:"10px",margin:"10px"}}>
//             <h3>{title}</h3>
//             <h4>{details.names}</h4>
//             <button onClick={()=>{click(details.name)}}>click me</button>
//         </div>
        

//     )
// }



function Card({imgurl, title, description,price}) {
  return (
    <>
      <div className="card p-4 bg-secondary text-light" style={{ width: "18rem" }}>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{description}</p>
            {/* <p className="card-price">{price}</p> */}

          <a href="google.com" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}
// export default Cards;

export default Card;

