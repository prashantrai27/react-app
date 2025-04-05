# react-app

# will create a brand new app here using npm

* git branch -M branch_name = it makes branch as origin branch.

NPM - it manages the packages but its not an abbrevation for node package manager. Biggest repository for   all the packages.
* npm init - it created package.json file with all the information. package.json is configuration for npm.

* webpack - it's bundler. It packages your app so it can be shipped to production. 
when we use create-react-app - it uses webpack and babel behind the scene to make code production ready.

parcel - it's also bundler.
* any dependency or package can be installed with the help of npm. 
* npm i -D parcel = install parcel as dev dependency.

* ^ and ~ for version.

* package-lock.json - locks the exact version and keep tracks of it.
* node-modules - it contains actual data of all the dependencies or collection of the packages.
* transitive dependency - out app is dependent on parcel and parcel is depended on others packages. it is transitive dependency.
* If we have package.json and package-lock we can generate node_modules again.
* npx - it means executing the package. = npx parcel index.html
* browserslist contain all the browser on which we want to support our application.

# parcel - module bundler
-   dev build
-   local server
-   HMR - hot module replacement
-   file watching algorithm written in c++
-   Caching - faster  builds
-   Image optimization
-   Minification
-   Building
-   Compressing
-   Consisting hashing
-   code spliting
-   Differential bundling - supports older browser and different devices with different bundle
-   Error handling
-   Tree shaking

# 3 Lecture

* JSX - it's javascript syntax to create react element.

