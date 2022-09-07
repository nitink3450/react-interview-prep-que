/*
Q.1.What is the Difference between react and react native? Which one is library or framework?
-#React:React is a open-source front-end javascript library that is used for building user interfaces especially for single page applications
-#React Native : it is a mobile framework that compiles to the native app components allowing to build native mobile applications like ios,android and windows

Q.2.What is the package name you are using for routing?
-for using router we need a appropriate package to install first .
-there r 3 different types of packages.
1.react-router.
2.react-router-dom.
3.react-router-native.

Q.3.How do you pass data from parent to child?
-To access the properties from parent to child using a functional components users dont need to use 'this.prop' like class components.
-users can access the props values by writing variable name only.
#steps-
1.Embed the child component to the parent component.
2.Pass the props to the child components as an arguments while embending it to the parent components.
3.In the child commponents access the data variable value by writing the name or variable only.\
e.g.
//in parent component-

import React from 'react' ;
import Child from './Components/Child.jsx';
 function App(){
    return(
        <div> <Child color='red' bgColor='green' /></div>
    )
 }

 //in Child component-

import React from 'react' ;
function Child ({color,bgColor}){
    return(
        <div>
        <h1 style={{color:color}}>Hello</h1>
        <h1 style={{color:bgColor}}>World</h1>
        </div>
    )
}

Q.4.What is lazy loading in react ?
-Lazy Loading is not a new concept. it has been available for quite some time.
-In essence,lazy loading means that a components or the part of the code must get loaded when it is loaded when it is required
-it is also refered as code splitting and data fetching
-for example,if a web page has an image to see image user has to scroll down to see you can display a placeholder and lazy load the full image only when the user arrives to its location.

#syntax-
const OtherComponent = React.lazy(() => import('./OtherComponent'));

-Advanatges:
1.Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time.
2.Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it's requested.

Q.5.Difference b/w Stateful and stateless Component?

#Stateless Components:
-If the behaviour is independent of its state then it can be a stateless component.
-You can use either a function or a class for creating stateless components.
-But unless we need to use a lifecycle hook in your components, we should go for function components. 
-There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.
-functional componets are Stateless Components.

#Stateful Components:
-If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. -
-These stateful components are always class components and have a state that gets initialized in the constructor. 
-class componets are Stateful Components.

Q.6.How do you switch one component to another, Conditional Rendering?
-there r 4 methods to switch from one component to another componets by using conditional rendering
1.if else statement
2.Logical operaters(&&)
3.Ternary Operators(?:)
-there may arise situation when we want to render something based on the some condition
-for example, consider the situation of the handling a login/logout button
-both the buttons have different functions so they will be separate componets
-now the task is if a user is logged in then we will have to render the logout component to display the logout button and if user is not logged in then we will have to render the login component to display the login button
-this is what we called the conditional rendering in react.js
*/