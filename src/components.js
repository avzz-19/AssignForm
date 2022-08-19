import React from "react";

export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.type === "text" ? "column" : "row",
      }}
    >
      {props.type === "radio" && <input {...props}></input>}
      <TextComponent
        label={props.label}
        CustomTag={props.type === "text" ? "div" : "span"}
      />
      {props.type === "text" && <input {...props}></input>}
    </div>
  );
};

export const TextComponent = ({
  label,
  styleProps,
  isMandatory,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {isMandatory && <span>*</span>}
    {children}
  </CustomTag>
);

export const Box = (props) => (
  <>
    <TextComponent label={props.header} styleProps={{ fontSize: "24px", textAlign: "left", fontWeight: 700 }}/>
    <div style={{ border: "1px solid black", borderRadius:"10px", padding:"10px", fontFamily:"Hind"}}>{props.children}</div>
  </>
)

export const DatePick=()=>
{   return <div><label>{<TextComponent label="DOB-(DD/MM/YY)" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 }}/>}</label>
            <input type="date" name="DOB"/>
            </div>
}

export const Dropdown=()=>{
    return <div>
        <select>  
            <option value = ""> undergraduate   
            </option>  
            <option value = ""> postgraduate   
            </option>   
            <option value = ""> diploma  
            </option>  
        </select>  
    </div>
}

export const Attatchments=()=>{
    return <>
        <div>
          <TextComponent
            styleProps={{ fontSize: "18px", textAlign: "left", fontWeight: 700 }}
            label="Add Resume/CV"
            CustomTag="span"
          >
            <TextComponent
              styleProps={{
                fontSize: "18px",
                textAlign: "left",
                fontWeight: 400,
              }}
              CustomTag="span"
              label="(Accept format: doc/.docx/.pdf;Size: 1MB)"
            />
          </TextComponent>
        </div>
        <button>Choose File</button>
      </>
    }