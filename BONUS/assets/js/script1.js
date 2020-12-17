


let app = new Vue({
  el: "#root",
  data: {
    initValue: "",
    tasks: ["Compra pane", "Mangia patate", "Vendi ortaggi"],
    iconCancel: "fas fa-minus-circle",
    iconEdit: "fas fa-pen",
    iconDone: "fas fa-check",
    completedTasks: [],
    recycleBin: [],
    iconBin: "fas fa-trash",
  },

  methods: {
    moveToBin: function (index, item) {
      this.tasks.splice(index, 1);
      this.recycleBin.push(item);
    },

    addTask: function () {
      this.initValue.length > 3
        ? this.tasks.push(this.initValue)
        : '';
      this.initValue = "";
    },

    // L'utente vuole poter modificare una task giá inserita

    editTask: function (index) {

        let userTask = prompt("Change your task here");
        this.tasks.splice(index,1,userTask);

    },

    // ma vuole anche poter indicare che la task é stata completata
    // inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"

    completedTask: function (item, index) {
      this.tasks.splice(index, 1);
      this.completedTasks.push(item);
    },

    deleteTask: function (index,array) {
      array.splice(index, 1);
    },

    // ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna   tipo "cestino"
    // si, l'utente é un ropi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"

    removeAll: function () {
      this.recycleBin = [];
    },
  },
});