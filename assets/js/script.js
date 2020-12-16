


let app = new Vue({
  el: "#compiti",

  data: {
      initValue: '',
      tasks: ["Compra pane", "Mangia patate", "Vendi ortaggi"],
      icon: "fas fa-minus-circle",
  },

  methods: {

    removeTask : function () {
        this.tasks.pop();
      },

    addTask : function (){

        (this.initValue.length > 3) ? this.tasks.push(this.initValue): ''
    },
  },
});