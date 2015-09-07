
app.controller('QuestionController', ['$scope', '$http', function($scope, $http){
	$http.get('app/data/data.json').then(function(res) {
		$scope.questions = res.data;
		console.log(res.data);
	});
}]);

app.controller('GreetingController',function($scope){
  $scope.now=new Date(); //set the model 'now' on scope
  $scope.greeting='Hello';    //set the name model on scope
});

app.controller('QuestionnaireController', function ($scope) {
    $scope.phones = [
    {'name': 'Questionnaire S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
   
});

app.controller('PreviewController', function ($scope) {
    $scope.phones = [
        {'name': 'Preview S',
         'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.'}
    ];
   
});

app.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'PhoneList S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
