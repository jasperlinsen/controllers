const ETC = require( '../eventThrottle/controller.js' );
const BCC = require( '../boundingClientRect/controller.js' );

module.exports = function(){
	
	var controller = new Map;
	
	controller.set = function( element, ...classNames ){
		
		Map.prototype.set.call( controller, element, classNames );
		
	}
	
	function dispatchEvent( object, type, detail = {} ){
		
		try {
			
			object.dispatchEvent( new CustomEvent( type, { detail } ) );
			
		} catch(e){
			
			console.warn( 'Cannot dispatch Events' );
			
		}
		
	}
	
	function inViewportCheck(){
	
		controller.forEach(( classNames, element ) => {
			
			var iv = BCC.get( element ).inViewport;
			var is = element.classList.contains( ...classNames );
			
			if( is && !iv ){
				
				element.classList.remove( ...classNames );
				dispatchEvent( element, 'viewportleave' );
				
			} else if( !is && iv ){
				
				element.classList.add( ...classNames );
				dispatchEvent( element, 'viewportenter' );
				
			}
			
		});
		
	}
	
	ETC.add( window, 'scroll', inViewportCheck );
	
	return controller;
	
}();