angular.module('app').factory('mvIdentity', function($window) {
    var currentUser;

    return {
    	currentUser: undefined,
    	isAuthenticated:function () {
    		return !!this.currentUser;
    	}
    }
});