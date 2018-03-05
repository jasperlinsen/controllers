AnimationFrameController
------------------------
Stack call for requestAnimationFrame. It is an instance of `AnimationFrameControllerGroup`.

### Methods

	@method add( handler:Function, callback:Function ) -> Function

Adds the handler to the stack and calls it every frame with the following parameters:

- `@param delta:Number` The amount of milliseconds since the last frame.
- `@param progress:Number` The amount of milliseconds this handler has been active in the AF since it was added.
- `@param time:Number` The total amount of milliseconds the AnimationFrame has been active. 

If the return value of the handler is `false`, the handler will be removed from the stack. If a callback has been set, it also needs to return `false` to remove the handler from the stack.

	@method remove( handler:Function ) -> Function

Removes the handler from the stack.

	@method Group -> AnimationFrameControllerGroup

Returns a group that can be passed as one consecutive executing group. The whole AnimationFrameController is already an instance of this group with the only difference being that the root group is actually being initially called by the requestAnimationFrame function.

**NOTE** _Due to backwards compatibility, `AnimationFrameControllerGroup` is currently not a constructor. In the future this will either morph into `new AF.Group` or `AF.Group = () =>  new AnimationFrameControllerGroup`. For more info, see 'Note on Backwards Compatibility' at the root of this repository._

### Getter/Setter

	@getter paused:Bool
	@setter paused:Bool

Get or set the paused state of the AF.

	@getter fps:Number

The Frames Per Second currently recorded by the AF.

	@getter time:Number

The total amount of milliseconds the AnimationFrame has been active
	
	@getter timeSinceInception:Number

The total amount of time since the first request for an animation frame (this corresponds to the value passed in to the actual requestAnimationFrame handler).