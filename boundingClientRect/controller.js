const AFC = require( '../animationFrame/controller.js' );

module.exports = function(){
	
	var empty = () => {};
	var controller = new WeakMap;
	
	controller.get = function( element ){
		
		var elementData = WeakMap.prototype.get.call( controller, element );
		
		if( !elementData || elementData.time !== AFC.time ){
			
			elementData = element.getBoundingClientRect()
			elementData.time = AFC.time;
			elementData.inViewport = !(
				elementData.right < 0 ||
				elementData.bottom < 0 ||
				elementData.top > window.innerHeight ||
				elementData.left > window.innerWidth
			);
			
		}
		
		WeakMap.prototype.set.call( controller, element, elementData );
		
		return elementData;
		
	}
	controller.overlaps = function( element1, element2 ){
		
		var box1 = controller.get( element1 );
		var box2 = controller.get( element2 );
		
		return !(
			box1.right < box2.left ||
			box1.bottom < box2.top ||
			box1.top > box2.bottom ||
			box1.left > box2.left
		);
	
	}
	
	controller.set = empty;
	controller.delete = empty;
	
	return controller;
	
}();