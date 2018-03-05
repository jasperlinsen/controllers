EventThrottleController
-----------------------

Throttle Events to the Animation Frame, so firing rates are limited.

### Methods

	@method add( object:HTMLElement, event:String, handler:Function[, throttle:Number = 0 ] ) -> Void

Add an object to fire throttled events from. By default, throttling is set to 0ms, but a higher value will throttle the handle more. To adjust the throttle, call be method again with a modified throttle.

	@method remove( object:HTMLElement, event:String[, handler:Function ]) -> Void

Removes the event handler and its throttler, and will remove any event listeners that are no longer in use. If no handlers are passed, all listeners are removed for that event on that object.