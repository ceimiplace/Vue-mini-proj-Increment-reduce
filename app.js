"use strict";
const vm = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      return ++this.counter;
    },
    reduce() {
      return --this.counter;
    },
  },
});
vm.mount("#app1");
