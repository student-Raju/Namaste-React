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