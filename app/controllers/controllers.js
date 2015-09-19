
app.controller('QuestionsController', ['$scope', '$http', function($scope, $http){
    $http.get('app/data/questions.json').then(function(res) {
        $scope.questions = res.data.questions;
        console.log(res.data);
    });
    calculateIDs = function() {
		var tmp = [];
		for (i = 0; i < $scope.questions.length; i++) {
			var tmpid = $scope.questions[i].qID;
			tmp.push(tmpid);
		}
		return tmp;
    }
    
    
    $scope.getNextID = function(questionID) {
    	$scope.ids = calculateIDs();
    	var indx = $scope.ids.indexOf(questionID);
    	if(indx == $scope.ids.length - 1) {
    		return $scope.ids[0];
    	}
    	else {
    		return $scope.ids[indx + 1];
    	}
    }
    $scope.getPrevID = function(questionID) {
    	$scope.ids = calculateIDs();
    	var indx = $scope.ids.indexOf(questionID);
    	if(indx == 0) {
    		return $scope.ids[$scope.ids.length - 1];
    	}
    	else {
    		return $scope.ids[indx - 1];
    	}
    }
    $scope.gotoPrevious = function(questionID) {
        $scope.navigateToID($scope.getPrevID(questionID), 200);
    }
    $scope.gotoNext = function(questionID) {
        $scope.navigateToID($scope.getNextID(questionID), 200);
    }
    $scope.navigateToID = function(questionID) {
        goToByScroll(questionID, 1000);
    }
    
    var navOffset = parseInt($('body.withSubmenu').css('padding-top'));
    function goToByScroll(id, time){
        $('html,body').animate({scrollTop: $("#"+id).offset().top - navOffset},time);
        return false;
    }
}]);


app.controller('QuestionController', ['$scope', '$http', function($scope, $http){
	// $http.get('app/data/data.json').then(function(res) {
	// 	$scope.questions = res.data;
	// 	console.log(res.data);
	// });
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
