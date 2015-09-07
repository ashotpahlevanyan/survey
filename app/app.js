 app = angular.module('surveyApp', ['ngRoute']);


//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/questionnaire',
            {
                controller: 'QuestionnaireController',
                templateUrl: '/app/partials/questionnaire.html'
            })
        .when('/preview',
            {
                controller: 'PreviewController',
                templateUrl: '/app/partials/preview.html'
            })
        .when('/phones',
            {
                controller: 'PhoneListCtrl',
                templateUrl: '/app/partials/phones.html'
            })
        .otherwise({ redirectTo: '/' });
});