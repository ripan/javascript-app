'use strict';

services.factory('Post', ['$resource', function($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts', {}, {});
}]);

