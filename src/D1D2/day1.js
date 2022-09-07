/*
Q.1.What is virtual Dom?
-The Virtual DOM (VDOM) is an in-memory representation of Real DOM.
-The representation of a UI is kept in memory and synced with the "real" DOM.
-It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.
(or)
-DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time.
-whenever React components gets mounted on the screen for the first time.
-Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM.
-So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom.
-Another virtual dom is the dom which contains the new changes, updated state variables values.
-Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm.
-Now the new changes will be updated in your Real dom.
-this procedure is known as Recoinciliation.

Q.2.What is SPA?(single-page application)?
-A Single Page Application is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.
-This means that the URL of your website will not change completely (page will not reload), instead it will keep getting content and rewriting the DOM with it instead of loading a new page.
-The goal is faster transitions that make the website feel more like a native app.
-In Technical Terms:
    When building your react-app, you can see that there is only one App.js from where your entire web-app is loaded in fragments and components. This behaviour of rendering components and pages on a single page and changing the DOM( is a single page behaviour and hence the name), instead of loading a new page with new content, this makes it feel like a single application.
-A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run.
-Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

Q.3.What is difference between class and functional component?             
1.A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
    1.A class component requires you to extend from React. Component and create a render function which returns a React element.

2.There is no render method used in functional components.	
    2.It must have the render() method returning JSX (which is syntactically similar to HTML)

3.Functional component run from top to bottom and once the function is returned it cant be kept alive.
    3.Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.

4.Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.	
    4.Also known as Stateful components because they implement logic and state.

5.React lifecycle methods (for example, componentDidMount) cannot be used in functional components.	
    5.React lifecycle methods can be used inside class components (for example, componentDidMount).

6.Hooks can be easily used in functional components to make them Stateful.
example: const [name,SetName]= React.useState(‘ ‘)
    6.It requires different syntax inside a class component to implement hooks.
    example: constructor(props) {
    super(props);
    this.state = {name: ‘ ‘}
    }

7.Constructors are not used.
    7.Constructor are used as it needs to store state. 

Q.4.What does mean by state and its use in react?
-State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.
-Never ever directly update/mutate state in React, as it's a bad practice and it will cause issues in your application. Also, your component will not be re-rendered on state change if you make a direct state change.
-Functional components are similar to class components, except that they do not have state and lifecycle methods. This is why you may have heard them called stateless functional components.
-React hooks are functional components with added state and lifecycle methods.
-To declare state using React Hooks, we need to use the useState hook.
-The useState hook accepts a parameter which is the initial value of the state.
-In class-based components, state is always an object. But when using useState, you can provide any value as the initial value like a number, string, boolean, object, array, null, and so on.
-The useState hook returns an array whose first value is the current value of the state. The second value is the function which we will use to update the state similar to the setState method
-State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

Q.5.What is JSX and why do we use it instead of js?
-JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML).
-The react library  is an extension to write XML like code for elements and components.
-JSX have tag name,attribute and children
-although JsX is not neccesorily to to write the react application but it is extreamely beneficial as it makes react code simpler and elegant

Q.6.What is package.json?
-It contains the information about the project and also contains the libraries which the project is using and it also has the description of the commands which gets used to run test or build your project. And all the dependencies are stored.
-package.json is used to store the meta data associated with the projects as well as to store the list of dependancy packages
*/


