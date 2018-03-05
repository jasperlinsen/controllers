Controllers
-----------

A bunch of useful controller elements in Javascript for controlling several commonly used functions.

### Note on Backwards Compatibility

Due to backwards compatibility and the need for transpiling at the current time, all controllers _return_ `Map` objects instead of being extensions of the `Map` objects as intended. This is because the `Map` object extension cannot be transpiled properly as it cannot be instantiated with `new` as per the specification in modern browsers. In the future, these objects should become extension of the `Map` object, as they map and/or store data for internal use.