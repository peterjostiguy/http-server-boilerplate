(function() {
  'use strict'

  angular.module('app')
    .component('expenses', {
      controller: controller,
      templateUrl: './templates/expenses.html'
    })

  function controller() {
    let vm = this;
    vm.addExpense = function(){
      console.log("hello");
    }
  }

}());
