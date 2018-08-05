# Vue Page Router

Nuxt-inspired route management

[GitHub](https://github.com/sirberus/vue-page-router) * [NPM](https://www.npmjs.com/package/vue-page-router)

#### Given:
```
router.js
pages/
  index.vue
  example.vue
  help.vue
  about.vue
```
#### router.js Before:
```js
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./pages/index.vue'),
    },
    {
      path: '/example',
      name: 'Example',
      component: () => import('./pages/example.vue'),
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('./pages/help.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./pages/about.vue'),
    },
  ],
})
```

#### router.js After:
```js
import Vue from 'vue'
import PageRouter from 'vue-page-router'
import * as pages from './pages'
export default PageRouter.install(Vue, pages)
```

## Getting Started

`npm install --save vue-page-router`

In the same directory as package.json, make a .babelrc config file with these contents:

```js
{
  "plugins": [
    ["wildcard", { "exts": ["js", "es6", "es", "jsx", "vue"]}]
  ]
}
```

## Dev Setup

* Clone from GitHub repo (https://github.com/sirberus/vue-page-router)

* In /example/, open a terminal, npm install, and npm run serve
