<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
@Component
export default class Index extends Vue {
  @State((state: State) => state.global ) public global!: GlobalState;

}
</script>

