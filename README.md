# react-app

# will create a brand new app here using npm

- git branch -M branch_name = it makes branch as origin branch.

NPM - it manages the packages but its not an abbrevation for node package manager. Biggest repository for all the packages.

- npm init - it created package.json file with all the information. package.json is configuration for npm.

- webpack - it's bundler. It packages your app so it can be shipped to production.
  when we use create-react-app - it uses webpack and babel behind the scene to make code production ready.

parcel - it's also bundler.

- any dependency or package can be installed with the help of npm.
- npm i -D parcel = install parcel as dev dependency.

- ^ and ~ for version.

- package-lock.json - locks the exact version and keep tracks of it.
- node-modules - it contains actual data of all the dependencies or collection of the packages.
- transitive dependency - out app is dependent on parcel and parcel is depended on others packages. it is transitive dependency.
- If we have package.json and package-lock we can generate node_modules again.
- npx - it means executing the package. = npx parcel index.html
- browserslist contain all the browser on which we want to support our application.

# parcel - module bundler

- dev build
- local server
- HMR - hot module replacement
- file watching algorithm written in c++
- Caching - faster builds
- Image optimization
- Minification
- Building
- Compressing
- Consisting hashing
- code spliting
- Differential bundling - supports older browser and different devices with different bundle
- Error handling
- Tree shaking

# 3 Lecture

- JSX - it's html like or xml like syntax to create react element. It is not html in js.
  JSX - it gets transpiled before it reaches to js. it is done by parcel with the help of babel.
- JSX first gets converted to React.CreateElement then to React Element which is JS object and then rendered as htmlElement(Babel is doing job to make jsx to react.createElement).
- if we have to write attribute in jsx it should be in camel case. if multi line jsx is to be written it should be wrapped in banana () bracket.

* There are two ways to create component in react. first is class based component and another one functional component.

- every component in react is started with capital letter.
- Functional Component - it is normal js functions which returns jsx code or function that return react element.

* using component inside a component in react is called component composition.

- using {} we can write javascript code inside jsx. these brackets sanitizes the data. no malicious attack can be done. it is being tracked by react.

# Lecture 4 - Food ordering app

- props or properties are something which can be passed to component. props are arguments to a function.
- config driven UI - UI is driven or controlled by config getting from backend api (different UI for different places).
- whenever we are looping through array using for loop or map we have to pass one unique id. it's mandatory otherwise warning will come. with the help of it react uniquely identifies that element.
- React says never use indexes as unique keys.

# Lecture 5

// main layout componenent
// - header component
// - Logo
// - nav items
// - Body
// - Search
// - Restaurant container
// - restro cards
// - image
// - Name
// - cuisines, Name of restraunt, Delivery time
// - Footer
// - copyright
// - links
// - address
// - contacts

- Two types of export and import

default - export default some_name;
import some_name from './path'

Named - export const some_name;
import {some_name} from './path'

- React Hooks - utility function given by js. it's normal js utility function.

* useState() - used to create powerful react variables. it maintains state of component.
  ex - const [someVariable, setSomeVariable] = useState([]); === here to update someVariable we need to provide updated value to setSomeVariable. and also in useState we provide intial state of that variable.
* whenever a state variable changes react will re-rendered our component.
* useEffect() -

- React Algo

* React uses reconciliation alogrithm also called as react fibre. it came in React 16. it uses incremental rendering.
* React uses virtual DOM. it is a representation of actual DOM.
* Diff algorithm -- it finds the difference between two(old and new) virtual dom.
* React is doing efficient dom manipulation with the help of virtual DOM. This makes react fast.

# lecture 6

* Loads(app loads) --> Render --> API load --> Render.
* To avoid CORS issue we can by pass using private chrome. or using extension.
* instead of loading text or loader api we can use shimmer ui. 
* we can perform shimmer ui using conditional rendering.
* monolith architecture - everything at one place.
* Microservice architecture - different service for different jobs. like backend service, frontend service,
sms service or email notification service. (all combines and forms big app);
* every service can have different tech stack. on different port we can deploy different services.

* separation of concern - each services has different jobs. all services talk to each other.
* React has the best render job mechanism.
* useEffect - it's normal js function. which has it's own js function. arrow function and dependency. it gets
called after our component gets render. After rendering if we have to do something we can use useEffect.

# lecture 7

* useEffect is called after every render of that component.
* it takes callback function and dependency array. if no dependency array means it'll get called on every render.
* if dependency array is empty then useEffect is called on initial rendere and just once.
* if we have something as a dependency. then it get called whenever there is change in dependency.
* dont create your state varible or useState inside if.. else or function.

* to use routing in react we import react-router-dom using npm.
* we use createBrowserRouter to define all the paths. used to create a configuration. it is array of object.
* After creating the configuration we need to provide it to app. RouterProvider is needed to provide it to
our application.
* if we write rafce in our file it creates a component and export it for you.

* react-router-dom gives us hook useRouteError. using this hook we can more info about the error.
* <Outlet> is getting filled with children which is passed from other end.
* In react to move to another page never use anchor tag. we can navigate to different page without reloading whole page.
* link component is being used to navigate and link we get from react-router-dom.
* Link is same as anchor tag but in this instead of href we use 'to'.
* because of this it doesn't reload whole page. it refreshes only that component. in this component only interchanges via client side routing.
* because of this react is known as single page application.

* Routing in web apps.
- server side routing - we get the page from the server through api
- client side routing - it just load the page. no network call in this.

* Link component basically have anchor tag inside it. Link component is a wrapper over anchor tag. it's given by react-router-dom.
* we can use useParams from react-router-dom to get the parameters passed in the route.
const {param} = useParams();

# Lecture - 8 (Class based component)

* Class based component is a class which has render method which returns some piece of jsx.
* In class based component we can pass the prop same as functional component but to access it,
we need to use super keyword in the constructor. later we can use it with 'this' keyword.

* like this we create class based component. 
class component_name extends React.Component {
  render() {
    return <div> something </div>
  }
}

* In class based component we declare state variable inside constructor and using this.state, in this 
object we can have all the variables.
* to update the state variable in class based component we use setState method and we can update only that variable which is required.
* componentDidMount is used for api calls in class based component because it runs after the component is rendered.
* first constructor run when component initializes then render method and at last componentDidMount method.
* There are two phase render and commit phase.
* when two childs are there or more then react batch render phase of all the child then commit phase start sequentially.
* manipulating or updating the DOM is expensive task. that's why react batch render phase. it optimize
the app.
* To have an api call in class based component we can make componentDidMount as async.
* Mounting process -> constructor gets called then render phase is done. it updates the DOM with dummy
data later componentDidMount called and re renders with actual data.
* setState updates the state variable.
* first mounting cycle happens then update cycle is done and then in last unmounting is done.
* componentWillUnmount is called when we leave the current page so before this it gets called.

//////////// Mounting ////////////////////
- Constructor (dummy)
- Render (dummy)
      <HTML dummy>
- Component Did Mount
      Api call
      this.setState -> this updates the state variable

///////////// Update ///////////////
- render (Api data)
<HTML apidata>
- Component Did Update
//////////// Unmount ////////////
- Component Will Unmount

# Lecture 9 - code optimizing
* writing in a modular fashion makes the code reusable, maintainable and testable.
* custom hooks can be created by us. hook is just a utility function or helper function.
* built-in hooks are useEffect, useState, useParams.
* to optimize the code first thing we can do is make it modular.
* create custom hooks and separate the logic. like in this we have done for api calls.
* we can do lazy loading or dynamic loading, chunking, on demand loading and couple of other words of the same thing.
* basically we can load our code if we need it. this make different build file for that chunk.
* we can load the component on demand.

# Lecture 10 - Tailwind

* There are many ways to write css
- css
- scss - perform nesting, use variables and at last it gets converted to css only.
- inline css - it's not reusable and difficult to maintain. not a good practice and heavy job for browser to understand.
- Styled component - writing css inside the js
- libraries - provides consistent ui, takes care of responsiveness and development is faster using these. But
it increases bundle size, personal customization is hard.
- we can use multiple ui libraries in our project but it's not a good practice. it's basically package so we can install it like other packages.

* Tailwind
- Css on the go
- Reusability
- less bundle size
- flexible ui(customizable ui)
- it wont let normal behavior work the way it works. it works in tailwind way. basically if you use it. by default it's classes applies.
- everything in tailwind works as classname.


