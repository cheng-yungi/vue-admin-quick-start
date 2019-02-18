import Router, { RouteConfig } from 'vue-router';
import { Store } from 'vuex';
import routes from './mainRouter';
export function initDynamicRouteMap(router: Router, store: Store<any>): void {
  router.beforeEach((to, from, next) => {
    const token: string = sessionStorage.token;
    if (token) {
      const auth: string[] = Array.from(JSON.parse(sessionStorage.auth));
      const role: string = sessionStorage.role;
      if (to.path === '/login') {
        next();
      } else {
        if (store.state.login.newRouter.length === 0) {
          const newRoutes = getRouteMap({ role, routes: auth });
          const newRouter = routes.mainRoutes;
          Object.assign(newRouter[0].children, newRoutes);
          router.addRoutes(newRouter);
          store.commit('SET_NEW_ROUTER', newRoutes);
          setTimeout(() => {
              next({
                ...to, replace: true,
              });
            }, 500);
        } else {
          if (to.matched.length < 2) {
            next(from.path);
          } else {
            next();
          }
        }
      }
    } else {
      const whiteList: string[] = [];
      routes.defaultRoutes.forEach((t) => {
        whiteList.push(t.path);
      });
      if (whiteList.includes(to.path)) {
        next();
      } else {
        next('/login');
      }
    }
  });
}

function getRouteMap(permission: Permission): RouteConfig[] {
  if (routes.mainRoutes[0].children !== undefined) {
    const result = routes.mainRoutes[0].children.filter((route) => {
      if (permission.routes.includes(route.meta.id)) {
        return true;
      } else {
        return false;
      }
    });
    return result;
  } else {
    return routes.defaultRoutes;
  }
}
