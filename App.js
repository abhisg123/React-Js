// const heading = React.createElement("h1",{
//     id : "heading"
// },"Welcome Abhishek, to the world of React");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

//React.createElement("h1",{}----this object is use to give the atribute,"Welcome Abhishek, to the world of React"); so at the end of the day, createElement is an Object just a normal JS/react object. where "Welcome Abhishek, to the world of React" is the childern element and  id : "heading" is props/attriutes.It's not a HTML tag or anything.

//root.render(heading); This render method basically convert the React object heading into H1 tag and put that into the react DOM.

//=======================================================================================================

const parent = React.createElement("div",{id : "parent"},
    [React.createElement("div",{id : "Child1"},
     [React.createElement("h1",{}, "Hi, I am heading H1 inside parent child1 div !!!"),
     React.createElement("h2",{}, "Hi, I am heading H2 inside parent child1 div !!!")]),
    React.createElement("div",{id : "Child2"},
     [React.createElement("h1",{}, "Hi, I am heading H1 inside parent child2 div !!!"),
     React.createElement("h2",{}, "Hi, I am heading H2 inside parent child2 div !!!")])]
)


// this looks more complicated and difficult to understand , and to make it easy we have JSX came into the picure to make things easy to read and understand.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// again the render method's reasponsibiy is to convert the react parent object into HTML code

//** if you wanted to create siblings , then you have put them in array just like above */

console.log(parent);