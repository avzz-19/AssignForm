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
        fontFamily:"Helvetica"
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{ fontSize: "48px", textAlign: "left"}}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING 2023"
        styleProps={{ fontSize: "36px", textAlign: "left"}}
      />
    </div>
  );
};



const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
      <Header />
      <TextComponent label="*Required"/>
      <form>
        <h1>Registration Form</h1>
        <Box header="Job Details">
            <InputComponent type="text" placeholder="Software Developer" disabled 
            label={<TextComponent label="Job Profile:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            />
        </Box>
        <Box header="Personal Details">
          <InputComponent
            type="text"
            label={<TextComponent label="First Name:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            placeholder="Enter First name"
            value={firstName}
            onChange={(a) => {
              console.log(a.target.value);
              setFirstName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            label={<TextComponent label="Middle Name:" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            placeholder="Enter middle name"
            value={middleName}
            onChange={(a) => {
              console.log(a.target.value);
              setMiddleName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            label={<TextComponent label="Last Name:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            placeholder="Enter last name"
            value={lastName}
            onChange={(a) => {
              console.log(a.target.value);
              setLastName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            label={<TextComponent label="Email:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            placeholder="@gmail.com"
          />
          <InputComponent
            type="text"
            label={<TextComponent label="Contact Number:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}
            placeholder="123456789"
          />
          <DatePick/>
          <TextComponent label="Gender" isMandatory="true"
            styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
        />
          <InputComponent
            type="radio"
            value="Male"
            name="gender"
            label="Male"
            onChange={(a) => {
              console.log(a.target.value);
              setGender(a.target.value);
            }}
          />
          <InputComponent
            type="radio"
            value="Female"
            name="gender"
            label="Female"
            onChange={(a) => {
              console.log(a.target.value);
              setGender(a.target.value);
            }}
          />
          <InputComponent
            type="radio"
            value="Other"
            name="gender"
            label="Other"
            onChange={(a) => {
              console.log(a.target.value);
              setGender(a.target.value);
            }}
          />
        </Box>
        <Box header="Educational Details">
            <TextComponent
                    label="Lowest Educational profile"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
            />
          <InputComponent
                type="text"
                label={<TextComponent
                    label="10th percentage %"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                label={<TextComponent
                    label="12th percentage %"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
            <TextComponent
                    label="Highest Educational profile"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
            />
            <TextComponent
                    label="Education Type"
                    isMandatory
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
            />
          <Dropdown placeholder="-select-"/>
          <InputComponent
                type="text"
                placeholder="BE"
                label={<TextComponent
                    label="Degree"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                    
                />}
            />
            <InputComponent
                type="text"
                placeholder="College"
                label={<TextComponent
                    label="College"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                placeholder="R19CS480"
                label={<TextComponent
                    label="Reg.No"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                placeholder="Computer Science Engineering"
                label={<TextComponent
                    label="Branch"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
            <InputComponent
                type="text"
                placeholder="No"
                label={<TextComponent
                    label="Backlogs"
                    styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}
                    isMandatory
                />}
            />
        </Box>
        <Box header="ATTATCHMENTS">
        <Attatchments />
        </Box>
        <button className="submit" style={{ backgroundColor: "#8D19FFB2"}}>
          Submit
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));