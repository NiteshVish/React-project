import About from './component/About'
import Card from "./component/Card"
import Toggle from './component/Toggle.jsx'
import Controlled from './component/Controlled.jsx'
import Func from './Func.jsx'
import RegistrationForm from './component/RegistrationForm.jsx'
import { useState } from 'react'
// import Parent from './Parent.jsx'
// import Formed from "./component/Formed.jsx"
import Parent from './component/Parent.jsx'

// import Card from './component/Card'
// import Contact from './component/Contact'


// function App() {
//   let clickme=(a)=>{document.write(""+a+" click on me "+a+" please clicked on me")}

//   return (
//     < >
//      <About title="first about" bg="yellow" cl="blue"/>
//      <About title="second about" bg="navy" cl="green"/>
//      <Card title="first card" click={clickme}
//      id ={32} names={[3,5,3,2]} details={{name:"raj"}}/>
//      <Card title="second card" click={clickme}id={76} names={[2,5,3,2]}details={{name:"varun"}}/>
//      <Contact title="view" click={clickme}id={76} names={[2,5,3,2]}details={{name:"varun"}}/>
//      <Side />
//     </>
//   )
// }

// export default App
// [12:59 pm, 05/06/2025] Uday Batchmate ES: import React, { Component } from "react";

// function Cards({imgurl, title, discription}) {
//   return (
//     <>
//       <div className="card p-4 bg-secondary text-light" style={{ width: "18rem" }}>
//         <img src={imgurl} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title"> {title}</h5>
//           <p className="card-text">{discription}</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Cards;


// import Home from "./components/Home";
// import About from "./components/About";

// import Navbars from './components/Navbars'
// import Footer from './components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import TodoList from './component/TodoList.jsx'
import Function from './component/Function.jsx'
import UseRef from './component/UseRef.jsx'
import { createContext } from 'react'
export let usersData=createContext();

// import Lifecycle from './Lifecycle.jsx'

export default  function App() {

  let [users, setUsers ]=useState([{name:"raj"}])
//   let data = [
//     { imgurl: "https://picsum.photos/200/200?random=1 ", title: "1", description: "hello card first",price: "67.0$" },
//     { imgurl: "https://picsum.photos/200/200?random=2 ", title: "2", description: "hello card second " },
//     { imgurl: "https://picsum.photos/200/200?random=3 ", title: "3", description: "hello card third" },
//     { imgurl: "https://picsum.photos/200/200?random=4 ", title: "4", description: "hello card fourth" },
//     { imgurl: "https://picsum.photos/200/200?random=5 ", title: "5", description: "hello card fivth" },
//     { imgurl: "https://picsum.photos/200/200?random=6", title: "6", description: "hello card sixth" }

//   ]

  return (

    <>
    <div className='bg-primary p-5 m-auto w-250 border'>
      <h4> App component</h4>
      <usersData.Provider value={{users,setUsers}}>
        <Parent/>
      </usersData.Provider>
    </div>

    {/* <UseRef/> */}
    {/* <Function/> */}
    {/* <TodoList/> */}
    {/* <Func/> */}
    {/* <RegistrationForm/> */}
    {/* <Parent/> */}
    {/* <Lifecycle title="raj"/> */}
    
    {/* <About/> */}

    {/* <Formed/>
    <Toggle/>
    <Controlled/> */}
      {/* <div className="w-100 d-flex flex-wrap justify-content-evenly gap-5 p-5 bg-info">
        {
          data.map((v , i) => {
            return (<Card imgurl={v.imgurl} title={v.title} description={v.description} price={v.price}/>)
          })
        }

      </div> */}

      {/* <Navbars />
    <Home />
    <About />
    <Footer /> */}

    </>
  )
}
// export default App
