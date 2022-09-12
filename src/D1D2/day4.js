/*
Q.1.What is Context API ?

-The react context API is a way for a react app to effectively produce global values for that can be passed around
-this is the alternative to "props drilling" or moving props from grand parent to child to parent ans so on
e.g.
const {Provider,Consumer} = React.createContext(defaultValue)

Q.2.What is the diff between callback and useCallback hook?

#callback:it is a js function
- A callback is a function which is passed as an srgument to another function
-the technique is allows us to call the function in another function
-call back function can run after another function has finished.

#useCallback: it is a react HOOK used in functional components
-it returns a memorized callback when passed a function and list of dependacies that set the parameters
-it used when u have a component which the child is re-renderinng again and again without any need

Q.3.What is PropDrilling and State Uplifting Concept?

#PropDrilling: It is the process by which u pass the data from one component off the ract tree to the another by going through other components that dont need the data but only help in passing it around
-the better alternative for this is using useContext Hook

#State Uplifting: When several compenets need to share the same changing data then it is recommended to lift the shared state upto there closest common anscestor
-that means if two child components share the same data from its parent then move the state to the parent  instead of maintaining the local state inn the both of the child components.

Q.4.What is the diff between useEffect AND useContext?

#useEffect:it is the React hook used in the functional components
-it allows us to perform side effects in your components
-some examples of the side effects are :Fetching the data ,directly Updating the DOM and Timers
-useEffect accepts the two arguments the second argument is optional
#syntax:
useEffect(<function>,<dependancy>)
- There 3 dependacies for useEffecct-
1.No dependacy id passed 
2.An empty array 
3.props or state props

#useContext: react context is a way to manage state globally 
-it can be used together with the useState hook to share the state between deeply nested componets more easily than the useState alone
-the main idea of using the context is to allow your commponents to access the some global data and re-rednder when that global data is changed
-useContext solve the props drilling problem when u have to pass down the data from parent to the child

Q.5.What are React Life cycles Explain each one with Example?

-every component in react goes through a lifecycle which involves 4 phases ,i.e,initializing,mounting,updating and unmounting.

1.Mounting means putting the component in DOM.when a component mounts,4 built-in methods executes which are--
    a.Constructor()--this method is called before anything else.state is declared here.
    b.getDerivedStateFromProps()--called just before the render method.
    c.render()--most important method and required.
    d.componentDidMount()--called after the component is mounted .
2.During the updating phase,5 built-in methods are called which are--
    a.getDerivedStateFromProps()--it is called first to get the data which is changing.
    b.shouldComponentUpdate()--by default,its value is true.it always returns a boolean value.
    c.render()--render method is required.
    d.getSnaPshotBeforeUpdate()--to get the previous state and props.if we execute this e.without componentDidUpdate(),then we will get an error.
    f.componentDidUpdate()--this method is called after our component updates.
3.Unmounting means removing the component from DOM.during this phase,one method is called which is componentWillUnmount().

Q.6. What is useRef Hook?

-Accessing DOM Elements✅
-Does Not Cause Re-renders✅
-Tracking State Changes✅
-The useRef Hook allows you to persist values between renders.
-It can be used to store a mutable value that does not cause a re-render when updated.
-It can be used to access a DOM element directly.
-If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
-To avoid this, we can use the useRef Hook.
-useRef Hook create a mutable variable which will not re-render the components</p>
-By using useRef Hook now we can access a DOM element directly like change of input text ,foucus on input on clicking button etc
-useRef Value always return a Object with current value e.g( Current:initial value)
*/