acti_use=-1;

angular.module('starter.controllers', ['starter.routes','starter.services'])

.controller('activite', function($http,$state,settings,$scope,$rootScope,ActiFactory,EventFactory)
{
  console.log('ActiFactory',ActiFactory);
  activite_selectionne=ActiFactory.activite_selectionne;
  $scope.activite_selectionne=activite_selectionne;
  
  evenement_selectionne=ActiFactory.evenement_selectionne;
  $scope.evenement_selectionne=evenement_selectionne;

  $scope.inscription = function()
  {
    $state.go('app.inscription')
  }

  var oldSoftBack = $rootScope.$ionicGoBack;

  $rootScope.$ionicGoBack = function() 
  {

    EventFactory.eventRequest()
  }
})

.controller('start', function(EventFactory,$ionicHistory)
{
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
  EventFactory.eventRequest();
})

.controller('event', function($http,settings,$scope,$state,EventFactory,ActiFactory)
{
  evenement_selectionne=EventFactory.evenement_selectionne;
  $scope.evenement_selectionne=evenement_selectionne;
  

  $scope.loadActi = function(acti)
  {
    acti_use=acti.activite_id;
    ActiFactory.actiRequest();
  }
})

.controller('inscription', function(settings,$scope,$http,$state,$ionicPopup,$ionicHistory,$ionicPlatform,$rootScope,ActiFactory)
{
  $scope.signupData={};

  $scope.signup = function()
  {
    var confirmPopup = $ionicPopup.confirm(
    {
      title: "Confirmation Inscription",
      template: "Etes-vous sur de vouloir vous inscrire?"
    });

    confirmPopup.then(function(res)
    {
      if(res)
      {
        $http.post("http://pocapi-test.apigee.net/v1/organisateurs/1/2/"+acti_use+"/inscription?apikey="+settings.APIkey,
        {
          "nom": $scope.signupData.nom,
          "prenom": $scope.signupData.prenom,
          "adresse": $scope.signupData.adresse,
          "email": $scope.signupData.email,
          "date_naissance": $scope.signupData.birthday,
        })

        $ionicHistory.nextViewOptions
        ({
          disableBack: true
        });
        
        $state.go('app.event');
      }
    });
  }

  var oldSoftBack = $rootScope.$ionicGoBack;

  $rootScope.$ionicGoBack = function() 
  {
    ActiFactory.actiRequest();
  }
});
