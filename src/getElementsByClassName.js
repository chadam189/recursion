// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(node, className) {
/* As mentioned in getElementsByClassNameSpec.js: 
	  I changed this assignment's function to include a second parameter:
	  	The first parameter is the node to be traversed
	  	The second parameter is the desired class name
	  I couldn't think of another way to do this recursively */


  var result = [];

  // 1) check node to see if it contains className as a class
	if (node.classList.contains(className)) {
		result.push(node);
	}

	// 2) Now, we'll recursively check node's element children 
	//    to find any that contain className as a class
	var currentNode = node.firstElementChild;

	if (currentNode) {
		result = result.concat(getElementsByClassName(currentNode, className));
	}

	currentNode = node.nextElementSibling;

	while(currentNode) {
		result = result.concat(getElementsByClassName(currentNode, className));
		currentNode = currentNode.nextElementSibling;
	}

	return result;
};
