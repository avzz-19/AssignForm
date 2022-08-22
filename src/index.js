import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TextComponent, InputComponent, Box, DatePick, Dropdown ,Attatchments } from "./Components";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
        color:"white",
        fontFamily:"Helvetica",
        fontWeight:"700"
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{ fontSize: "48px", textAlign: "center" ,paddingTop:"15px"}}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING 2023"
        styleProps={{ fontSize: "36px", textAlign: "center",paddingBottom:"15px"}}
      />
    </div>
  );
};



const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [mail, setEmail] = useState("");
  const [number, setNumber]=useState("");

  return (
    <div>
      <Header />
      <TextComponent label="*Required" styleProps={{margin:"10px"}}/>
      <form>
        <TextComponent label="Registration Form" styleProps={{fontWeight: 700, fontSize: "48px", margin:"10px"}}/>
        <Box header="Job Details">
            <InputComponent type="text" placeholder="Software Developer" disabled style={{height:"2em"}}
            label={<TextComponent label="Job Profile:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            />
        </Box>
        <Box header="Personal Details">
          <InputComponent
            type="text"
            style={{height:"2em"}}
            label={<TextComponent label="First Name:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}/>}
            placeholder="Enter First name"
            value={firstName}
            onChange={(a) => {
              setFirstName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{height:"2em"}}
            label={<TextComponent label="Middle Name:" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700,paddingTop:"10px" }}/>}
            placeholder="Enter middle name"
            value={middleName}
            onChange={(a) => {
              setMiddleName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{height:"2em"}}
            label={<TextComponent label="Last Name:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700,paddingTop:"10px" }}/>}
            placeholder="Enter last name"
            value={lastName}
            onChange={(a) => {
              setLastName(a.target.value);
            }}
          />
          <InputComponent
            type="email"
            style={{height:"2em"}}
            label={<TextComponent label="Email:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700,paddingTop:"10px" }}/>}
            placeholder="@gmail.com"
            value={mail}
            onChange={(a) => {
              setEmail(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{height:"2em"}}
            pattern="[0-9]+"
            value={number}
            label={<TextComponent label="Contact Number:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}/>}
            placeholder="123456789"
            maxlength="10"
            minlength="10"
            onChange={(a)=>{
                setNumber(a.target.value);
            }}
          />
          <DatePick/>
          <TextComponent label="Gender" isMandatory="true"
            styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
        />
          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Male"
            onChange={(a) => {
              setGender(a.target.value);
            }}
          />
          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Female"
            onChange={(a) => {
              setGender(a.target.value);
            }}
          />
          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Other"
            onChange={(a) => {
              setGender(a.target.value);
            }}
          />
        </Box>
        <Box header="Educational Details">
            <TextComponent
                    label="Lowest Educational profile"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
            />
          <InputComponent
                style={{height:"2em"}}
                type="text"
                label={<TextComponent
                    label="10th percentage %"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                style={{height:"2em"}}
                label={<TextComponent
                    label="12th percentage %"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
                    isMandatory
                />}
            />
            <TextComponent
                    label="Highest Educational profile"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
            />
            <TextComponent
                    label="Education Type"
                    isMandatory
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
            />
          <Dropdown placeholder="-select-"/>
          <InputComponent
                style={{height:"2em"}}
                type="text"
                placeholder="BE"
                label={<TextComponent
                    label="Degree"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
                    isMandatory
                    
                />}
            />
            <InputComponent
                type="text"
                style={{height:"2em"}}
                placeholder="College"
                label={<TextComponent
                    label="College"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                style={{height:"2em"}}
                placeholder="R19CS480"
                label={<TextComponent
                    label="Reg.No"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700,paddingTop:"10px" }}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                style={{height:"2em"}}
                placeholder="Computer Science Engineering"
                label={<TextComponent
                    label="Branch"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                style={{height:"2em"}}
                placeholder="No"
                label={<TextComponent
                    label="Backlogs"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}
                    isMandatory
                />}
            />
        </Box>
        <Box header="ATTATCHMENTS">
        <Attatchments />
        </Box>
        <button className="submit" style={{ backgroundColor: "#8D19FFB2",padding:"5px",margin:"10px",borderRadius:"10"}}>
          Submit
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));