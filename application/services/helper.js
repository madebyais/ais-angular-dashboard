'use strict';

var baseUrl = 'http://localhost:9000'

var helper = {

	generateApiUrl: function (methodType, apiPath, params) {
		url = baseUrl + apiPath;

		if (methodType == 'get') {
			if ((endpoint && endpoint.indexOf('?') > -1))
				url += '&accessToken=' + localStorage.getItem('accessToken');
			else
				url += '?accessToken=' + localStorage.getItem('accessToken');
		} else if (methodType == 'post') {
			params.accessToken = localStorage.getItem('accessToken');
		} else if (methodType == 'put') {
			params.accessToken = localStorage.getItem('accessToken')
		} else if (methodType == 'delete') {
			params.accessToken = localStorage.getItem('accessToken')
		}

		return { url: url, params: params };
	}

}