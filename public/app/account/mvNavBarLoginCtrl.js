app.controller('mvNavBarLoginCtrl',function ($scope,$http,mvIdentity,mvNotifier,mvAuth,$location) {
	$scope.identity=mvIdentity;
	mvNotifier.warning('Sign In to start');
	$scope.signin = function(username,password) {
		if(!username||!password)
		{
			mvNotifier.warning("Missed Credentials");
		}else
		{
		mvAuth.authenticateUser(username,password).then(function (success) {
			if(success)
			{
				 mvNotifier.notify('You have successfully signed in!');
			}else
			{
				mvNotifier.error('Username/Password combination incorrect');
			}
		});
		}
	}
$scope.signout=function () {
		mvAuth.logoutUser().then(function() {
			$scope.username="";
			$scope.password="";
			mvNotifier.info("You have successfully Signed Out !!! ");
			$location.path('/');

		});
	}
});

