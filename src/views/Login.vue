<template>
  <div class="login" :style="{height: '100vh'}">
    <Row :style="{height: '100vh'}" type="flex" align="middle" justify="center">
      <Col :span="6">
        帳號：<input type="text" v-model="userId">
      </Col>
      <Col :span="6">
        密碼：<input type="text" v-model="loginPw">
        <Button @click="submitLogin">送出</Button>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { aesEncrypt, aesDecrypt } from '../utils/encrpt';
import aesConfig from '../config/AesConfig';
import { SET_ROLE_NAME } from '@/store/types';

@Component
export default class Login extends Vue {
  @Provide() public userId: string|any = '';
  @Provide() public loginPw: string|any = '';
  @State((state) => state.login) public login!: LoginState;

  public submitLogin() {
    const params = {
      userId: aesEncrypt(this.userId, aesConfig.baseAes),
      loginPw: aesEncrypt(this.loginPw, aesConfig.baseAes),
    };
    this.$store.dispatch('FETCH_LOGIN', params)
    .then((result) => {
      if (result === 'success') {
        if (this.login.role === 'C') {
          sessionStorage.setItem('roleName', '商户');
          this.$store.commit(SET_ROLE_NAME, '商户');
          this.$router.push({
            path: '/client/index',
          });
        }
      }
    });
  }
}
</script>

<style scoped lang="scss">
</style>
