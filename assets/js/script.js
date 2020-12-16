


let app = new Vue({
  el: "#compiti",

  data: {
    tasks: ["Compra pane", "Mangia patate", "Vendi ortaggi"],
    icon: "fas fa-minus-circle",
  },

  methods: {

    removeTask : function () {
        this.tasks.pop();
      }

  },
});