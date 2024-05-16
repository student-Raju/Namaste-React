import React from "react";
import ReactDOM from "react-dom";
/* 
const jsxHeading=<h1 id="heading">Namaste React using JSX</h1>
root.render(jsxHeading);
const jsxHeading1=(<h1 className="Head" tabIndex="1">Namaste React using JSX Heading</h1>)
root.render(jsxHeading1);
There are two types of react componenets
*Class based component
*functional component

const HeadingComponent=()=>{
    return<h1>Namaste react Functional Component</h1>
}
This is component composition

const Title=()=>(
    <h1 className="head" tabIndex="1"> Namaste react using Jsx </h1>
);
const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React using JSX</h1>
    </div>
);
 */
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("div",{},"I am an h1 tag"),
    React.createElement("div",{},"I am an h2 tag"),
]),
     React.createElement("div",{id:"child2"},[
     React.createElement("div",{},"I am an h1 tag"),
     React.createElement("div",{},"I am an h2 tag"),
]),
]);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);