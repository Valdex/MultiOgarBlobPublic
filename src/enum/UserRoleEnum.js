function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    });
}

define("GUEST", 0);
define("ADMIN", 1);
define("MODER", 2);
define("ADMIN", 4);
