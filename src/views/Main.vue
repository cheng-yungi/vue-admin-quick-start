<template>
  <div>
    <Layout>
      <Header>
        <Row type="flex" justify="space-between">
          <Col span="6">
          </Col>
          <Col span="3">
          </Col>
          <Col span="4" class="header-info">上次登入IP：{{login.lastLoginIp}}</Col>
          <Col span="4" class="header-info">帐号：{{login.account}}</Col>
          <Col span="1">
            <Button icon="md-log-out" @click="logout" type="primary" shape="circle"></Button>
          </Col>
        </Row>
      </Header>
      <Header :style="{padding: 0, backgroundColor: 'white'}">
        <Menu ref="side1Menu" theme="light" mode="horizontal" :style="{align: 'center'}">
            <template v-for="(item,index) in navItems">
                <Submenu :ref="'submenu'+index" :key="'submenu-'+index" :name="index">
                    <template slot="title">
                        <span>{{item.name}}</span>
                    </template>
                    <template v-for="(subItem,subIndex) in item.item">
                      <MenuItem :key="'sub-menu-'+subIndex" :name="index+'-'+subIndex" :to="subItem.path">
                        <span :key="'span-'+subIndex">{{subItem.name}}</span>
                      </MenuItem>
                    </template>
                </Submenu>
            </template>
        </Menu>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb class="breadcrumb-custom" :style="{margin: '16px 0'}">
            <BreadcrumbItem>{{login.roleName}}</BreadcrumbItem>
            <BreadcrumbItem id="active-bread" :to="{ path: $route.path }">{{$route.name}}</BreadcrumbItem>
        </Breadcrumb>
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { FETCH_ROUTE_MAP, FETCH_PAYTYPE_MAP, FETCH_ACCOUNT_MAP } from '@/store/types';
@Component
export default class Main extends Vue {
  @State((state) => state.login) public login!: LoginState;
  @State((state) => state.global) public global: GlobalState;
  @Provide() public navItems: any[] = [];

  public created() {
    this.$store.dispatch(FETCH_ROUTE_MAP);
    this.$store.dispatch(FETCH_PAYTYPE_MAP);
    this.$store.dispatch(FETCH_ACCOUNT_MAP);
  }

  public mounted() {
    this.init();
  }
  public init() {
    const target = this.login.newRouter;
    if (this.login.role === 'C' || this.login.role === 'D') {
      if (this.login.role !== 'D' && this.login.belongTo.indexOf('C') < 0) {
        this.navItems = [
          {name: '首页', item: []},
          {name: '订单管理', item: []},
          {name: '财务明细', item: []},
          {name: '代付', item: []},
          {name: '商家管理', item: []},
        ];
        target.forEach((item: any) => {
          const id = +item.meta.id;
          if (id === 43) {
            this.navItems[0].item[0] = item;
          } else if (id === 44 || id === 45) {
            this.navItems[1].item.push(item);
          } else if (id === 46 || id === 47) {
            this.navItems[2].item.push(item);
          } else if (id === 48 || id === 49) {
            this.navItems[3].item.push(item);
          } else if (id === 50 || id === 51 || id === 52) {
            this.navItems[4].item.push(item);
          }
        });
      }
    }
  }

  public logout() {}
}
</script>
<style scoped>
  .header-info {
    color: white
  }
</style>
