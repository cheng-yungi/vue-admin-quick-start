<template>
  <div>
    <Layout>
      <Header>sdsfsdsd</Header>
      <Header :style="{padding: 0, backgroundColor: 'white'}">
        <Menu ref="side1Menu" theme="light" mode="horizontal">
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
      <Content :style="{height:'100%'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { LoginInfo } from '../interface/Login';

@Component
export default class Login extends Vue {
  @State((state) => state.login) public login!: LoginInfo;
  @Provide() public navItems: any[] = [];

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
        target.forEach((item) => {
          const id = item.meta.id;
          if (+id === 43) {
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
}
</script>