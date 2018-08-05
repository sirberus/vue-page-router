import Router from 'vue-router'
import kebabCase from 'lodash/kebabCase'
import camelCase from 'lodash/camelCase'

function makeOptions(pages) {
  let options = {
    mode: 'history',
    routes: [],
  }

  for (let [pageName, component] of Object.entries(pages)) {
    let name = camelCase(pageName)
    let slug = kebabCase(pageName)
    
    let path 
      = component.path
        ? component.path
        : name == 'index' 
          ? '/' 
          : '/' + slug
    
    options.routes.push({
      path,
      name: pageName,
      component
    })
  }
  
  return options
}

export default function (Vue, pages) {
  Vue.use(Router)
  let options = makeOptions(pages)
  return new Router(options)
}
