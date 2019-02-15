
declare interface Permission {
  role: string;
  routes: string[];
}
declare interface PayType {
  payTypeId: string;
  payTypeName: string;
}
declare interface Route {
  routeName: string;
  routeCode: string;
  routeAlias: string;
}