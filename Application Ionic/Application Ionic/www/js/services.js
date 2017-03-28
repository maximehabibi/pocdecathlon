angular.module('starter.services', [])

.factory('settings', [function () 
{
	var settings={};
	settings.APIkey="m03Ox1KosdNW7rQYgOn4ZnZDwA7O57YU";
	return settings;
}])

.factory('ActiFactory', ['$http','$ionicLoading','$state','settings',function ($http,$ionicLoading,$state,settings) 
{
	var ActiFactory = {};

	ActiFactory.actiRequest = function()
	{
		$ionicLoading.show(
	    {
	      template: 'Loading...',
	      duration: 3000
	    })
	    
		$http.get("http://pocapi-test.apigee.net/v1/organisateurs/1/2?apikey="+settings.APIkey)
		.success(function(data) 
		{
		  	evenement_selectionne=data;
		    ActiFactory.evenement_selectionne=evenement_selectionne;

		    $http.get("http://pocapi-test.apigee.net/v1/organisateurs/1/2/"+acti_use+"?apikey="+settings.APIkey)
			.success(function(data) 
			{
			  	activite_selectionne=data;
			  	ActiFactory.activite_selectionne=activite_selectionne;
			  	$ionicLoading.hide();
			    $state.go('app.activite');
			})
			console.log('factory fini')
		});
		
		
	};
	return ActiFactory;
}])

.factory('EventFactory', ['$http','$ionicLoading','$state','settings',function ($http,$ionicLoading,$state,settings) 
{
	var EventFactory = {};

	EventFactory.eventRequest = function()
	{
		$ionicLoading.show(
	    {
	      template: 'Loading...',
	      duration: 3000
	    })
		$http.get("http://pocapi-test.apigee.net/v1/organisateurs/1/2?apikey="+settings.APIkey)
		.success(function(data) 
		{
		  	evenement_selectionne=data;
		    EventFactory.evenement_selectionne=evenement_selectionne;
		    $ionicLoading.hide();
		    $state.go('app.event');
		});
	};

	return EventFactory;
}]);
