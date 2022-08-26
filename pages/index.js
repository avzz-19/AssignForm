import React from "react";
import { App } from "../src/index.js";
import { baseUrl } from "../src/config.js";

const HomePage = ( {data} ) => {
    console.log({data})
  return <App data={data}/>;
};

//https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/register
export async function getServerSideProps() {
  // Fetch data from external API
  let data1 = [{displayText: 'Soemthing', value: 'something'}]
  let data2 = [{displayText: 'Soemthing', value: 'something'}]
  let data3=[{displayText: 'Soemthing', value: 'something'}]
  let data=[data1,data2,data3]
  
  try {
    const res1 = await fetch(`${baseUrl}degree?education=ug`);
    data1 = await res1.json();
    console.log({data1})
    const res2 = await fetch(`${baseUrl}branch?degree=be`);
    data2 = await res2.json();
    const res3 = await fetch(`${baseUrl}education?role=softwaredeveloper`);
    data3 = await res3.json();
    data=[data1,data2,data3]
  } catch (error) {
    
  }
 
 console.log({data})

  // Pass data to the page via props
  return { props: { data } };
}
// main.js

// POST request using fetch()


export function postReq(dataPost) {
 return fetch('https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/register', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
    dataPost
  })
 })
   .then(data => data.json())
}


export default HomePage;
