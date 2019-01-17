import Router, { RouteConfig } from 'vue-router';
import { Store } from 'vuex';
import {Permission} from '../interface/Common'
import routes from './mainRouter'
export function initDynamicRouteMap(router: Router, store: Store<any>) :void {
  router.beforeEach((to, from, next) => {
    let token: string = sessionStorage['token']
    let auths: string = sessionStorage['auths']
    let role: string = sessionStorage['role']
    if (token) {
      if (to.path === '/login') {
        next()
      } else {
        if (store.getters.newrouter.length === 0) {
          let auth:Array<number> = Array.from(JSON.parse(auths))
          let newRoutes = getRouteMap({ role, routes: auth })
          let newRouter = routes.mainRoutes
          Object.assign(newRouter[0].children,newRoutes)
          router.addRoutes(newRoutes)
          store.dispatch('addRoutes', newRoutes).then(res => {
            setTimeout(() => {
              next({
                ...to, replace: true
              })
            }, 500)
          }).catch((err) => {
            console.log(err)
          })
        } else {
          if (to.matched.length < 2) {
            next(from.path)
          } else {
            next()
          }
        }
      }
    } else {
      let whiteList: Array<string> = []
      routes.defaultRoutes.forEach(t => {
        whiteList.push(t.path)
      })
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next('/login')
      }
    }
  })
}

function getRouteMap(permission: Permission): RouteConfig[] {
  if (routes.mainRoutes[0].children !== undefined) {
    let result = routes.mainRoutes[0].children.filter(route => {
      if (permission.routes.includes(route.meta.id)) {
        return true
      } else {
        return false
      }
    })
    return result;
  } else {
    return routes.defaultRoutes;
  }
}
