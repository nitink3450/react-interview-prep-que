/*
Q.1.What is an event in react?
-an event is the acction that could be triggered as a result of the users actions or system generated even
-for example,MouseClick,loading of the web page pressing a key,window resizes and other other interactions are calledd events
-handling events with react are very similar to the handling events with the DOM elements
-there are some syntax differeances like
1.react events name should be in camalCase
2.react events handlers should written in the curly braces only
3.in react we can pass the event as an function also

Q.2.What is memory leak and how to overcome?
-Memory leak occurs when programers create a memory in heap and forgot to delete it.
-the consequeses of the memory leak is that it reduces the performance of the computer by reducing the amount of available memory.
-eventualy in the worst case too much of the available memory may become allocatedd and all part of the systen device stps working correctly the application fails or the system
shows down vastly.
#to avoid it-
1) Using Boolean Flag. const [value, setValue] = useState('checking value...'); useEffect(() => { let isMounted = true; fetchValue(). 
2) Using AbortController. 
3) Using use-state-if-mounted Hook.

Q.3.Do you prefer function-based or class component and why ?
- A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
- A class component requires you to extend from React. 
-Component and create a render function which returns a React element.
-There is no render method used in functional components.
If the component needs state or lifecycle methods then use class component otherwise use function component. 
-However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. 
-*So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries

Q.4.Explain reducer as pure function in redux?
-In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. 
-The action describes what happened and it is the reducer's job to return the new state based on that action. (previousState, action) => newState

Q.5.Why do we use redux thunk?

-Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
-The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
-The inner function receives the store methods dispatch() and getState() as parameters.
-The most common use case for Redux Thunk is for communicating asynchronously with an external API to retrieve or save data. 
-Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API. 
-Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. 
-This allows for delayed actions, including working with promises. 
-One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.

Q.6.What do you know about NPM?
-NPM stands Node Package Manager used to install,delete and update the javascript packages on your machine.
-npm is the pacakge manager for javscript programming language maintained by npm
-npm is the world largest software registry(library)
-Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
-npm consists of three distinct components:
1.the website
2.the Command Line Interface (CLI)
3.the registry
 */