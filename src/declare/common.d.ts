
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
declare interface INotification {
  header: string;
  id: number;
  lastEditTime: number;
  type: string;
  content?: string;
  creator?: string;
  lastEditor?: string;
  object?: string;
  spName?: string;
}
declare interface ClientDetail {
  balance: number;
  balancePay: number;
  balancePr: number;
  count: number;
  discount: number;
  riskCount: number;
  belongTo: string;
  routeDetail: string;
  routeDetailFormat?: RouteDetail;
  routeName: string;
  routeType: string;
  userId: string;
  rateData: RateData[];
  columns?: any[]
  list?: any[]
}
declare interface RouteDetail {
  settleType: number;
  timeList: TimeList[]
}
declare interface TimeList {
  isRecord: boolean
  time: string
}
declare interface RateData {
  dayLimit: number
  perLimit: number
  spRate: number
  status: number
  userId: string
  payType: string
}