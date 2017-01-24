/** ----------------------------
*
*		AJAX SERVICES
*
---------------------------- **/

'use strict';

angular
	.module('$ajax', [])
	.factory('$ajax', function ($http) {

		return {

			success: function (resp) {
				return resp.data.data;
			},

			error: function (resp) {
				return resp.data.message;
			},

			getAccessToken: function () {
				return ((JSON.parse(localStorage.getItem('user-ais'))) && (JSON.parse(localStorage.getItem('user-ais'))).accessToken) ? (JSON.parse(localStorage.getItem('user-ais'))).accessToken : null;
			},

			generateUrl: function (apiPath) {
				apiPath = config.apiBaseUrl + apiPath;
				return (apiPath && apiPath.indexOf('?') > -1 && localStorage.accessToken) ? (apiPath + '&accessToken=' + this.getAccessToken()) : (apiPath + '?accessToken=' + this.getAccessToken())
			},

			extendAccessToken: function (params) {
				if (!params) params = {}
				params.accessToken = this.getAccessToken();
				return params;
			},

			get: function (apiPath) {
				return $http.get(this.generateUrl(apiPath)).then(this.success, this.error)
			},

			post: function (apiPath, params) {
				return $http.post(this.generateUrl(apiPath), this.extendAccessToken(params)).then(this.success, this.error)
			},

			put: function (apiPath, params) {
				return $http.put(this.generateUrl(apiPath), this.extendAccessToken(params)).then(this.success, this.error)
			},

			delete: function (apiPath, params) {
				return $http.delete(this.generateUrl(apiPath), this.extendAccessToken(params)).then(this.success, this.error)
			}

		}

	});