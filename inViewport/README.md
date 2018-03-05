inViewportController
--------------------

### Methods

Adds passed classes to element if in viewport

	@method set( element:HTMLElement, classNames:Array[ String, ... ] ) -> Void

Add element to viewport checker, add the class to the element when in viewport. It will also try to dispatch two events:

- `@event viewportenter` This event contains no info.
- `@event viewportleave` This event contains no info.

**NOTE** _Older browser might not support firing custom events, and will therefor not fire them. Do not rely on them for older browsers._