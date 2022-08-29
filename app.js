"use strict";
const vm = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      ++this.counter;
    },
    reduce() {
      --this.counter;
    },
  },
});
vm.mount("#app1");
