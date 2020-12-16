


let app = new Vue({
  el: "#compiti",
  data: {
      initValue: '',
      tasks: ["Compra pane", "Mangia patate", "Vendi ortaggi"],
      icon: "fas fa-minus-circle",
  },



  methods: {

    removeTask : function (index) {
        
        this.tasks.splice(index,1)

   },
   
   addTask : function (){

        (this.initValue.length > 3) ? this.tasks.push(this.initValue): alert('The task need to have at least 4 characters');
        this.initValue = "";
    },
  },

//chiedi come poter resettare il valore di initValue usando un "Hook"

});