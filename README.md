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
