"use strict";
const vm = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    changeName(event) {
      this.name = event.target.value;
    },
    increment() {
      ++this.counter;
    },
    reduce() {
      --this.counter;
    },
  },
});
vm.mount("#app1");
