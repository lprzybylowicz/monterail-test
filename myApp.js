var myApp = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ngRoute']);


myApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

myApp.filter('voteChecker', function() {
    return function(input) {
      return input >= 0 ? '<div class="nmb">' + input + '</div><div class="votes">upvotes</div>' : '<div class="nmb">' + Math.abs(input) + '</div><div class="votes">downvotes</div>';
    }
});

myApp.filter('daysChecker', function() {
    return function(input) {
      return input > 1 ?  '<div class="activity">Last time discussed <span class="nmb">' + input +'</span> days ago</div>' : '<div class="activity">Last time discussed <span class="nmb">' + input +'</span> day ago</div>';
    }
});

myApp.config(function($routeProvider){ 
    
    $routeProvider
    .when('/', {
        templateUrl: 'all_questions_base.html', 
        controller: 'myCtrl'    
    })
    .when('/how_to_live_healthy/:name', {
        templateUrl: 'single_q_temp.html',
        controller: 'myCtrl'
    })
    .when('/is_vegan_diet_good/:name', {
        templateUrl: 'single_q_temp.html',
        controller: 'myCtrl'
    })
    .when('/apples_or_bananas/:name', {
        templateUrl: 'single_q_temp.html',
        controller: 'myCtrl'
    })
    .when('/a_perfect_cure/:name', {
        templateUrl: 'single_q_temp.html',
        controller: 'myCtrl'
    })
    .when('/how_to_burn_callories/:name', {
        templateUrl: 'single_q_temp.html',
        controller: 'myCtrl'
    })
});