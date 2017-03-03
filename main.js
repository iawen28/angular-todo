var app = angular.module('MyTodoList', []);

app.factory('TodoFactory', [function() {
  var todos = [];
  var addTodo = function(todo) {
    todos.push(todo)
  };
  var deleteTodo = function(idx) {
    todos.splice(idx, 1);
  };

  return {
    todos: todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo
  };
}])

app.controller('TodoCtrl', ['$scope', 'TodoFactory', function($scope, TodoFactory) {
  $scope.todos = TodoFactory.todos;
  $scope.message = '';

  $scope.addTodo = function() {
    $scope.message = 'thanks for adding something!';
    TodoFactory.addTodo($scope.inputTodo);
    setTimeout(function() {
      $scope.message = '';
    }, 2000);
  };

  $scope.deleteTodo = function(idx) {
    TodoFactory.deleteTodo(idx);
  };
}]);
