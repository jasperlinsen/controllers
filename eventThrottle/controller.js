const AFC = require( '../animationFrame/controller.js' );

module.exports = function(){
	
	function inViewportCheck( delta ){
		
		controller.forEach(( eventList, object ) => {
			
			Object.keys( eventList ).forEach( event => {
				
				let eventController = eventList[ event ];
				
				eventController.handlers.forEach(( data, handler ) => {
					
					data.wait += delta;
					
					if( data.wait > data.throttle ){
					
						data.wait = 0;
					
						if( data.event !== null ){
					
							handler( data.event );
							data.event = null;
					
						}
					
					}
					
				});
				
			});
			
		});
		
	}
	
	var controller = new Map;
	var controller_events_group = AFC.Group( 'AFC.EVENTS' );
	
	controller.add = function( object, event, handler, throttle = 0 ){
		
		var eventList = controller.get( object );
		
		if( !eventList ){
			
			eventList = {};
			Map.prototype.set.call( controller, object, eventList );
			
		}
		
		
		var eventController = eventList[ event ];
		
		if( !eventController ){
			
			eventController = {
				handlers: new Map,
				listener( event ){
			
					eventController.handlers.forEach(data => {
					
						data.event = event;
						
					})
				
				}
			};
			eventList[ event ] = eventController;
			object.addEventListener( event, eventController.listener );
			
		}
		
		
		var handlerData = eventController.handlers.get( handler );
		
		if( !handlerData || handlerData.throttle !== throttle ){
			
			handlerData = {
				wait: 0,
				throttle,
				event: null
			};
			
			eventController.handlers.set( handler, handlerData );
			
		}
		
		controller_events_group.add( inViewportCheck );
		
	};
	controller.remove = function( object, event, handler = null ){
	
		var eventList = controller.get( object );
		
		if( eventList && eventList[ event ] ){
			
			if( handler === null ){
				
				eventList[ event ].handlers.clear();
			
			} else {
				
				eventList[ event ].handlers.delete( handler );
					
			}
			
			if( eventList[ event ].handlers.size === 0 ){
				
				object.removeEventListener( event, eventList[ event ].listener );
				
				delete eventList[ event ];
				
				if( Object.keys( eventList ).length === 0 ){
					
					Map.prototype.delete.call( controller, eventList );
					
				}
				
				if( controller.size == 0 ){
				
					controller_events_group.remove( inViewportCheck );
					
				}
				
			}
			
		}
		
	}
	
	controller.set = controller.add;
	controller.delete = controller.remove;
	
	AFC.add( controller_events_group );
	
	return controller;
	
}();