angular.module('QuoteOfTheDay', [])
.factory('quoteService', ['$http', function($http) {
  function getQuote(){
    return $http.get("http://fvi-grad.com:4004/quote");
  }
  return {
    getQuote: getQuote
  };
}])
.controller('QuoteController', ['$scope', 'quoteService', function($scope, quoteService){
  $scope.quote = '';
  $scope.author = '';
  $scope.topic = '';

  quoteService.getQuote().then(function(res) {
    $scope.quote = res.data.quote;
    $scope.author = res.data.author;
    $scope.topic = res.data.topic;
  });
}]);
