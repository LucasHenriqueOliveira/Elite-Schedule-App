(function () {
    'use strict';

    angular.module('eliteApp').controller('LocationScheduleCtrl', ['$stateParams', 'eliteApi', LocationScheduleCtrl]);

    function LocationScheduleCtrl($stateParams, eliteApi) {
        var vm = this;
        
        vm.locationId = Number($stateParams.id);

        eliteApi.getLeagueData().then(function(data){
            vm.location = _.find(data.locations, { id: vm.locationId });
            vm.games = _.filter(data.games, function (item) { return item.location === vm.location.name; });
        });

        vm.setScoreCss = function(firstScore, secondScore){
            return (Number(firstScore) > Number(secondScore) ? "positive bold" : "");
        }
    };
})();