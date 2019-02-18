declare interface State {
  global: GlobalState;
  login: LoginState;
  security: SecurityState;
  notification: NotificationState
  clientInfo: ClientInfoState
}
declare interface GlobalState {
  accountMap: any;
  payTypeMap: any;
  payType: PayType[];
  route: Route[];
  routeMap: any;
  routeEnMap: any;
  baseUrl: string;
  aesKey: string;
  aesKeyAccName: string;
  aesKeyAccNo: string;
}
declare interface LoginState {
  newRouter: [];
  account: string;
  roleName: string;
  auth: string;
  role: string;
  belongTo: string;
  lastLoginIp: string;
  token: string;
}
declare interface SecurityState {
  apiAgentPayIsLimitIp: boolean;
  apiAgentPayLimitIp: string;
  backendAgentPayIsLimitIp: boolean;
  backendAgentPayLimitIp: string;
  backendIsLimitIp: boolean;
  backendLimitIp: string;
  eMail: string;
  isGoogleAuthentication: boolean;
  isPayPw: boolean;
  lastLoginDate: string;
}
declare interface NotificationState {
  notifications: INotification[]
  notification: INotification
  isFetching: boolean
}
declare interface ClientInfoState {
  agentAccount: string
  detail: ClientDetail[]
  totalBalance: number
  isFetching: boolean
}