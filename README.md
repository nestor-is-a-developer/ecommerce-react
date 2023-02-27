<h1 align="center">Ecommerce with React</h1>

Visit site -> https://nestor-is-a-developer.github.io/ecommerce-react/

This repo contains a training purposes react application. it's based on [this](https://platzi.com/cursos/react-practico/) Platzi's content. 
It has many react topics like components, hooks, routing and others. It also makes API calls using [axios](https://axios-http.com/docs/intro).

#### GitHub Actions 🤖
It uses [this](https://github.com/marketplace/actions/deploy-to-github-pages) plugin to deploy the app in Github Pages

#### Deploy 🚀
To deploy to github pages you have two options.

##### 1. Leverage the plugins above (recommended)
You only have to push your changes to master/main branch and a Gitub actions will deploy change to `gh-pages` branch

This is te recomended way to keep branchs in sync

##### 2. Using gh-pages npm dependency
You can install this dependency doing `npm install gh-pages -- save-dev`

Then you need to create two scripts in `your package.json`

Predeploy to build your in your `dist` folder the result of the files that will be copied to `gh-pages` branch 
```javascript
"predeploy": "npm run build"
```

Deploy to push dist flder content to your to `gh-pages` branch 
```javascript
"deploy": "gh-pages -d dist"
```

#### Notes on client-side routing
Since GitHub Pages doesn’t support natively outers like react routers (client side routing), you need to apply a trick to tackle this issue and your application run properly in Github Pages.

You can see this [guide](https://github.com/rafgraph/spa-github-pages) about how to do it and after read it, please pay special attention to [index.html](https://github.com/nestor-is-a-developer/ecommerce-react/blob/master/public/index.html) and [404.html](https://github.com/nestor-is-a-developer/ecommerce-react/blob/gh-pages/404.html)
