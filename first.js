// // const header1=document.createElement('h1');
// // header1.innerText="Hello coder army";
// // header1.style.backgroundColor="pink";
// // header1.style.color="white";
// // let root=document.getElementById("root");


// // const header2=document.createElement('h1');
// // header2.innerText="Hello coder army";
// // header2.style.backgroundColor="pink";
// // header2.style.color="white";

// // root.append(header1);
// // root.append(header2);


// // better approach
// let root=document.getElementById("root");

// const React={
//     createElement: function(tag,styless,children){
//         const element=document.createElement(tag);
//         element.innerText=children;
//         for(let key in styless){
//             element.style[key]=styless[key]
//         }
//         return element;
//     }

// }

// const ReactDOM={
//     render:function(element,root){
//         root.append(element);
//     }
// }
// const header1=React.createElement('h1',{backgroundColor:"pink",color:"white"},"hello coder");
// const header2=React.createElement('h2',{backgroundColor:"pink",color:"white"},"kaise ho")



// ReactDOM.render(header1,root);
// ReactDOM.render(header2,root);

   


// const element=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue",fontSize:"23px",color:"pink"}},"hello coder army");
// // let root=document.getElementById("root");
// // ReactDOM.render(element,root); (not supported in react 18)

// const root=ReactDOM.createRoot(document.getElementById("root"));  // to improve user experience
// root.render(element);

// const element=React.createElement("h1",{},"helo coder army");
// const element2=React.createElement("h1",{},"kaise ho app");
// const div1=React.createElement("div",{},[element,element2]);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(div1); 


