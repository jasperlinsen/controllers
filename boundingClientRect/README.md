BoundingClientRectController
----------------------------
Recalculates the DOMRect of an element if the AnimationFrameController.time has changed.
Otherwise it returns the already computed DOMRect.

## Methods

	@method get( element:HTMLElement ) -> DOMRect

Get the DOMRect of the element.
Additions to the DOMRect:

- `@value inViewport:Bool` `true` when the element overlaps the viewport.
- `@value time:Number` Number that matches the last time the DOMRect was computed using AnimationFrameController.time

	@method overlaps( element1:HTMLElement, element2:HTMLElement ) -> Bool

Returns whether both elements overlap in any way.