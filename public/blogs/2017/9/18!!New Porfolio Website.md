Migrated my portfolio to **Github** and rebuild with **React.js**.

Stacks:
* Boilerplate - [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)
* Bundling - [Webpack 2](https://webpack.js.org/)
* States - [Redux](https://github.com/reactjs/redux), [Saga](https://github.com/redux-saga/redux-saga)
* Navigation - [React Router](https://github.com/ReactTraining/react-router)

Basically the go-to toolset for any mordern React-Redux web app.

I chose to host it on Github for good reasons. First of all, *it's free*. The legacy blog was built by Node/Express.js, but it has a obvious pitfall - I need a node runtime to up run the web app. It was hosted on Amazon EC2, costed around 130HKD per mo, for pathetic amount of traffic.

Leveraging the power of React.js and react-router, it is possible, easy, to build a single page web app with all the features I need - ~~fake~~ routing, nicely formatted URL, and Webpack is just one-click-package-ready-for-production.

Second of all, deploying can be seamlessly done on Github, inheriting also the features Github provides - versioning, branching, createing blog post on-the-fly using Github editor.

One issue I encountered when hosting single page app on Github is that Github doesn't really work well with react-router - need some simple hack to [fix the Github routing](https://github.com/rafrex/spa-github-pages)

Additonal tools used for building the blogging engine:
* marked - format blogs
* Prism.js - highlight codes

```javascript
const foo = () => { /* comment */ }
```

```bash
cd ./bin/sh
```

```swift
func bar (var1: String) {}
```