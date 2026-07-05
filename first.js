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


// import react from "react";
// import reactdom from "react-dom/client";



// const element=react.createElement("h1",{},"helo coder army");
// const element2=react.createElement("h1",{},"kaise ho app");
// const div1=react.createElement("div",{},[element,element2]);

// const root=reactdom.createRoot(document.getElementById("root"));
// root.render(div1); 

// const newelement=<h1>Hello coder army</h1>
// const root=document.getElementById("root");
// const container =reactdom.createRoot(root);
// container.render(newelement);

// const newelment=(
//     <>
//         <h1>hello coder army</h1>
//         <h2>maja aya muze</h2>
//     </>
// )
// const control=reactdom.createRoot(document.getElementById("root"));
// control.render(newelment)


//  function based component

//  function greet(){
//     return <h1>aur bhai kaisa hai</h1>
//  }

// const functioncomponent=greet();
// const reactroot=reactdom.createRoot(document.getElementById("root"))
// reactroot.render(functioncomponent);



function greet(){
   let a=2;
   function meet(){
      console.log(a);
   }
   return meet;
}
const num=greet();
num();