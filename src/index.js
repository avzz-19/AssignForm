import React from "react";
import ReactDOM from "react-dom";

const App=()=>{
    return <div>
    <Header/>
    <form>
    <h1>Registration Form</h1>
        <TextEntry/>
        <BulletEntry/>
        <Attatchments/>
        <button>Submit</button>
    </form>
    </div>
}
const Header=()=>{
    return <div style={{backgroundColor: "#8D19FFB2",  justifyContent:'center', alignItems:'center'}}>
        <h1>INCRESCO TECHNOLOGIES</h1>
        <h2>CAMPUS HIRING 2023</h2>
    </div>
}
const TextEntry=()=>{
    return <div>
        <h5></h5>
        <input type="text"></input>
    </div>
}
const BulletEntry=()=>{
    return<div><h5>Gender</h5>
    <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    </div>
}
const Attatchments=()=>{
    return <div>
        <h5></h5>
        <button>Choose File</button>
    </div>
}
ReactDOM.render(<App/>,document.getElementById("App"));