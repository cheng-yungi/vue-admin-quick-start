<template>
  <div class="login">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop() private msg: string|any;
}
</script>

<style scoped lang="scss">
</style>
