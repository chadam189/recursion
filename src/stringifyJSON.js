// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  if (obj instanceof Function) {
  	return result;
  }

  if (Array.isArray(obj)) {
  	result += '[';
  	obj.forEach(function (value) {
  		result += stringifyJSON(value) + ',';
  	});
  	if (result.charAt(result.length -1) === ',') {
  		result = result.slice(0,result.length - 1);
  	}
  	return result + ']';

  } else if (typeof obj === 'object' && obj !== null && typeof obj !== 'boolean') {
  	result += '{';
  	for (var key in obj) {
  		if (obj[key] !== undefined && !(obj[key] instanceof Function)) {
  			result += '\"' + key + '\":' + stringifyJSON(obj[key]) + ',';
  		}
  	}
  	if (result.charAt(result.length -1) === ',') {
  		result = result.slice(0,result.length - 1);
  	}
  	return result + '}';
  }

  if (typeof obj === 'string') {
  	return result + '\"' + obj + '\"';
  } else {
  	return result + obj;
  }
};
