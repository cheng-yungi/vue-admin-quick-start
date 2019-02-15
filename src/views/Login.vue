<template>
  <div class="login">
    <Row>
      <Col :span="12">
        <input type="text" v-model="userId">
      </Col>
      <Col :span="12">
        <input type="text" v-model="loginPw">
      </Col>
    </Row>
    <button @click="submitLogin">送出</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { aesEncrypt, aesDecrypt } from '../utils/encrpt';
import aesConfig from '../config/AesConfig';

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
