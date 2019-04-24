# kai-pizza-admin-api

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)


## Introduction
There are four parts:
* [`Landing page`](https://github.com/shn2016/pizza-ordering-system/tree/master/landing-page) for demonstration.
* `Pizza creator` implemented by 3 ways:
  * Imperative Programming: [github](https://github.com/shn2016/pizza-ordering-system/tree/master/pizza-creator/Imperative%20Programming)
  * Declarative Programming(React like): [github](https://github.com/shn2016/pizza-ordering-system/tree/master/pizza-creator/Declarative%20Programming)
  * React: [github](https://github.com/shn2016/react-pizza-creator) , [`demo`](https://shn2016.github.io/react-pizza-creator/)
* `Pizza admin system`(pizza-admin-system/): [github](https://github.com/shn2016/pizza-creator-admin/) ,   [`demo`](https://shn2016.github.io/pizza-creator-admin/)
* `Backend`: to provide API.  [github](https://github.com/shn2016/kai-pizza-admin-api) ,  [`demo`](https://pizza-admin-api.herokuapp.com/explorer/)

Click these websites to go to the live demo of pizza creator project. They are all deployed on `github pages` and 'heroku'.

***Notice***: as I used free plan, the link may take a short time to load as they are cold loading ( sleep )


# Installation

The prerequisite:
```
node >= 11.0.0
lb4
```

To deploy
```
npm install
npm start
// check https://localhost:3000
```
IMPORTANT: the dependencies of loopback should not put in devDependencies.

# ER diagram

![ER diagram](https://github.com/shn2016/kai-pizza-admin-api/blob/master/res/er.png)
