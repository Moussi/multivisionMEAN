angular.module('app').value('mvToastr',toastr);

angular.module('app').factory('mvNotifier',function (mvToastr) {
	
	mvToastr.options = {
  "closeButton": true,
  "top":"100px",
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

	return {
		notify:function (msg) {
			mvToastr.success(msg);
			console.log(msg);
		},
		error:function (msg) {
			
			mvToastr.error(msg);
			console.log(msg);
		},
		info:function (msg) {
			mvToastr.info(msg);
			console.log(msg);
		},
		warning:function (msg) {
			
			mvToastr.warning(msg);
			console.log(msg);
		}
	}
});