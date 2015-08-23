// Generated by CoffeeScript 1.6.3
(function() {
  augmentApp.factory("UsersFactory", function($rootScope, $q, Restangular) {
    var factory, user;
    factory = {};
    user = {};
    factory.login = function(userName, password) {
      var deferred;
      deferred = $q.defer();
      user = {
        login: userName,
        password: password
      };
      Restangular.all("users").customOperation("get", "authenticate", user).then(function(result) {
        return deferred.resolve(result);
      }, function(response) {
        return deferred.reject(response);
      });
      return deferred.promise;
    };
    return factory;
  });

}).call(this);
