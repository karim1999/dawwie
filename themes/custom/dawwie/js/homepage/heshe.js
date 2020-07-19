    ///**
    // * @file
    // * Drupal Bootstrap object.
    // */
    //
    ///**
    // * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
    // *
    // * @namespace
    // */
    //(function (_, $, Drupal, drupalSettings) {
    //  'use strict';
    //
    //  var Bootstrap = {
    //    processedOnce: {},
    //    settings: drupalSettings.bootstrap || {}
    //  };
    //
    //  /**
    //   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
    //   *
    //   * Encodes special characters in a plain-text string for display as HTML.
    //   *
    //   * @param {string} str
    //   *   The string to be encoded.
    //   *
    //   * @return {string}
    //   *   The encoded string.
    //   *
    //   * @ingroup sanitization
    //   */
    //  Bootstrap.checkPlain = function (str) {
    //    return str && Drupal.checkPlain(str) || '';
    //  };
    //
    //  /**
    //   * Creates a jQuery plugin.
    //   *
    //   * @param {String} id
    //   *   A jQuery plugin identifier located in $.fn.
    //   * @param {Function} plugin
    //   *   A constructor function used to initialize the for the jQuery plugin.
    //   * @param {Boolean} [noConflict]
    //   *   Flag indicating whether or not to create a ".noConflict()" helper method
    //   *   for the plugin.
    //   */
    //  Bootstrap.createPlugin = function (id, plugin, noConflict) {
    //    // Immediately return if plugin doesn't exist.
    //    if ($.fn[id] !== void 0) {
    //      return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.', {'@id': id});
    //    }
    //
    //    // Immediately return if plugin isn't a function.
    //    if (typeof plugin !== 'function') {
    //      return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin', {'@id': id, '@plugin':  plugin});
    //    }
    //
    //    // Add a ".noConflict()" helper method.
    //    this.pluginNoConflict(id, plugin, noConflict);
    //
    //    $.fn[id] = plugin;
    //  };
    //
    //  /**
    //   * Diff object properties.
    //   *
    //   * @param {...Object} objects
    //   *   Two or more objects. The first object will be used to return properties
    //   *   values.
    //   *
    //   * @return {Object}
    //   *   Returns the properties of the first passed object that are not present
    //   *   in all other passed objects.
    //   */
    //  Bootstrap.diffObjects = function (objects) {
    //    var args = Array.prototype.slice.call(arguments);
    //    return _.pick(args[0], _.difference.apply(_, _.map(args, function (obj) {
    //      return Object.keys(obj);
    //    })));
    //  };
    //
    //  /**
    //   * Map of supported events by regular expression.
    //   *
    //   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
    //   */
    //  Bootstrap.eventMap = {
    //    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    //    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    //    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    //    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
    //  };
    //
    //  /**
    //   * Extends a jQuery Plugin.
    //   *
    //   * @param {String} id
    //   *   A jQuery plugin identifier located in $.fn.
    //   * @param {Function} callback
    //   *   A constructor function used to initialize the for the jQuery plugin.
    //   *
    //   * @return {Function|Boolean}
    //   *   The jQuery plugin constructor or FALSE if the plugin does not exist.
    //   */
    //  Bootstrap.extendPlugin = function (id, callback) {
    //    // Immediately return if plugin doesn't exist.
    //    if (typeof $.fn[id] !== 'function') {
    //      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    //    }
    //
    //    // Immediately return if callback isn't a function.
    //    if (typeof callback !== 'function') {
    //      return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback', {'@id': id, '@callback':  callback});
    //    }
    //
    //    // Determine existing plugin constructor.
    //    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    //    var proto = constructor.prototype;
    //
    //    var obj = callback.apply(constructor, [this.settings]);
    //    if (!$.isPlainObject(obj)) {
    //      return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj', {'@obj':  obj});
    //    }
    //
    //    // Add a jQuery UI like option getter/setter method.
    //    var option = this.option;
    //    if (proto.option === void(0)) {
    //      proto.option = function () {
    //        return option.apply(this, arguments);
    //      };
    //    }
    //
    //    // Handle prototype properties separately.
    //    if (obj.prototype !== void 0) {
    //      for (var key in obj.prototype) {
    //        if (!obj.prototype.hasOwnProperty(key)) continue;
    //        var value = obj.prototype[key];
    //        if (typeof value === 'function') {
    //          proto[key] = this.superWrapper(proto[key] || function () {}, value);
    //        }
    //        else {
    //          proto[key] = $.isPlainObject(value) ? $.extend(true, {}, proto[key], value) : value;
    //        }
    //      }
    //    }
    //    delete obj.prototype;
    //
    //    // Handle static properties.
    //    for (key in obj) {
    //      if (!obj.hasOwnProperty(key)) continue;
    //      value = obj[key];
    //      if (typeof value === 'function') {
    //        constructor[key] = this.superWrapper(constructor[key] || function () {}, value);
    //      }
    //      else {
    //        constructor[key] = $.isPlainObject(value) ? $.extend(true, {}, constructor[key], value) : value;
    //      }
    //    }
    //
    //    return $.fn[id];
    //  };
    //
    //  Bootstrap.superWrapper = function (parent, fn) {
    //    return function () {
    //      var previousSuper = this.super;
    //      this.super = parent;
    //      var ret = fn.apply(this, arguments);
    //      if (previousSuper) {
    //        this.super = previousSuper;
    //      }
    //      else {
    //        delete this.super;
    //      }
    //      return ret;
    //    };
    //  };
    //
    //  /**
    //   * Provide a helper method for displaying when something is went wrong.
    //   *
    //   * @param {String} message
    //   *   The message to display.
    //   * @param {Object} [args]
    //   *   An arguments to use in message.
    //   *
    //   * @return {Boolean}
    //   *   Always returns FALSE.
    //   */
    //  Bootstrap.fatal = function (message, args) {
    //    if (this.settings.dev && console.warn) {
    //      for (var name in args) {
    //        if (args.hasOwnProperty(name) && typeof args[name] === 'object') {
    //          args[name] = JSON.stringify(args[name]);
    //        }
    //      }
    //      Drupal.throwError(new Error(Drupal.formatString(message, args)));
    //    }
    //    return false;
    //  };
    //
    //  /**
    //   * Intersects object properties.
    //   *
    //   * @param {...Object} objects
    //   *   Two or more objects. The first object will be used to return properties
    //   *   values.
    //   *
    //   * @return {Object}
    //   *   Returns the properties of first passed object that intersects with all
    //   *   other passed objects.
    //   */
    //  Bootstrap.intersectObjects = function (objects) {
    //    var args = Array.prototype.slice.call(arguments);
    //    return _.pick(args[0], _.intersection.apply(_, _.map(args, function (obj) {
    //      return Object.keys(obj);
    //    })));
    //  };
    //
    //  /**
    //   * An object based once plugin (similar to jquery.once, but without the DOM).
    //   *
    //   * @param {String} id
    //   *   A unique identifier.
    //   * @param {Function} callback
    //   *   The callback to invoke if the identifier has not yet been seen.
    //   *
    //   * @return {Bootstrap}
    //   */
    //  Bootstrap.once = function (id, callback) {
    //    // Immediately return if identifier has already been processed.
    //    if (this.processedOnce[id]) {
    //      return this;
    //    }
    //    callback.call(this, this.settings);
    //    this.processedOnce[id] = true;
    //    return this;
    //  };
    //
    //  /**
    //   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
    //   *
    //   * @param {string|object} key
    //   *   A string value of the option to set, can be dot like to a nested key.
    //   *   An object of key/value pairs.
    //   * @param {*} [value]
    //   *   (optional) A value to set for key.
    //   *
    //   * @returns {*}
    //   *   - Returns nothing if key is an object or both key and value parameters
    //   *   were provided to set an option.
    //   *   - Returns the a value for a specific setting if key was provided.
    //   *   - Returns an object of key/value pairs of all the options if no key or
    //   *   value parameter was provided.
    //   *
    //   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
    //   */
    //  Bootstrap.option = function (key, value) {
    //    var options = $.isPlainObject(key) ? $.extend({}, key) : {};
    //
    //    // Get all options (clone so it doesn't reference the internal object).
    //    if (arguments.length === 0) {
    //      return $.extend({}, this.options);
    //    }
    //
    //    // Get/set single option.
    //    if (typeof key === "string") {
    //      // Handle nested keys in dot notation.
    //      // e.g., "foo.bar" => { foo: { bar: true } }
    //      var parts = key.split('.');
    //      key = parts.shift();
    //      var obj = options;
    //      if (parts.length) {
    //        for (var i = 0; i < parts.length - 1; i++) {
    //          obj[parts[i]] = obj[parts[i]] || {};
    //          obj = obj[parts[i]];
    //        }
    //        key = parts.pop();
    //      }
    //
    //      // Get.
    //      if (arguments.length === 1) {
    //        return obj[key] === void 0 ? null : obj[key];
    //      }
    //
    //      // Set.
    //      obj[key] = value;
    //    }
    //
    //    // Set multiple options.
    //    $.extend(true, this.options, options);
    //  };
    //
    //  /**
    //   * Adds a ".noConflict()" helper method if needed.
    //   *
    //   * @param {String} id
    //   *   A jQuery plugin identifier located in $.fn.
    //   * @param {Function} plugin
    //   * @param {Function} plugin
    //   *   A constructor function used to initialize the for the jQuery plugin.
    //   * @param {Boolean} [noConflict]
    //   *   Flag indicating whether or not to create a ".noConflict()" helper method
    //   *   for the plugin.
    //   */
    //  Bootstrap.pluginNoConflict = function (id, plugin, noConflict) {
    //    if (plugin.noConflict === void 0 && (noConflict === void 0 || noConflict)) {
    //      var old = $.fn[id];
    //      plugin.noConflict = function () {
    //        $.fn[id] = old;
    //        return this;
    //      };
    //    }
    //  };
    //
    //  /**
    //   * Replaces a Bootstrap jQuery plugin definition.
    //   *
    //   * @param {String} id
    //   *   A jQuery plugin identifier located in $.fn.
    //   * @param {Function} callback
    //   *   A callback function that is immediately invoked and must return a
    //   *   function that will be used as the plugin constructor.
    //   * @param {Boolean} [noConflict]
    //   *   Flag indicating whether or not to create a ".noConflict()" helper method
    //   *   for the plugin.
    //   */
    //  Bootstrap.replacePlugin = function (id, callback, noConflict) {
    //    // Immediately return if plugin doesn't exist.
    //    if (typeof $.fn[id] !== 'function') {
    //      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    //    }
    //
    //    // Immediately return if callback isn't a function.
    //    if (typeof callback !== 'function') {
    //      return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback', {'@callback': callback});
    //    }
    //
    //    // Determine existing plugin constructor.
    //    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    //    var plugin = callback.apply(constructor, [this.settings]);
    //
    //    // Immediately return if plugin isn't a function.
    //    if (typeof plugin !== 'function') {
    //      return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin', {'@id': id, '@plugin': plugin});
    //    }
    //
    //    // Add a ".noConflict()" helper method.
    //    this.pluginNoConflict(id, plugin, noConflict);
    //
    //    $.fn[id] = plugin;
    //  };
    //
    //  /**
    //   * Simulates a native event on an element in the browser.
    //   *
    //   * Note: This is a pretty complete modern implementation. If things are quite
    //   * working the way you intend (in older browsers), you may wish to use the
    //   * jQuery.simulate plugin. If it's available, this method will defer to it.
    //   *
    //   * @see https://github.com/jquery/jquery-simulate
    //   *
    //   * @param {HTMLElement} element
    //   *   A DOM element to dispatch event on.
    //   * @param {String} type
    //   *   The type of event to simulate.
    //   * @param {Object} [options]
    //   *   An object of options to pass to the event constructor. Typically, if
    //   *   an event is being proxied, you should just pass the original event
    //   *   object here. This allows, if the browser supports it, to be a truly
    //   *   simulated event.
    //   */
    //  Bootstrap.simulate = function (element, type, options) {
    //    // Defer to the jQuery.simulate plugin, if it's available.
    //    if (typeof $.simulate === 'function') {
    //      new $.simulate(element, type, options);
    //      return;
    //    }
    //    var event;
    //    var ctor;
    //    for (var name in this.eventMap) {
    //      if (this.eventMap[name].test(type)) {
    //        ctor = name;
    //        break;
    //      }
    //    }
    //    if (!ctor) {
    //      throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
    //    }
    //    var opts = {bubbles: true, cancelable: true};
    //    if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
    //      $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
    //    }
    //    if (ctor === 'MouseEvent') {
    //      $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
    //    }
    //    if (options) {
    //      $.extend(opts, options);
    //    }
    //    if (typeof window[ctor] === 'function') {
    //      event = new window[ctor](type, opts);
    //      element.dispatchEvent(event);
    //    }
    //    else if (document.createEvent) {
    //      event = document.createEvent(ctor);
    //      event.initEvent(type, opts.bubbles, opts.cancelable);
    //      element.dispatchEvent(event);
    //    }
    //    else if (typeof element.fireEvent === 'function') {
    //      event = $.extend(document.createEventObject(), opts);
    //      element.fireEvent('on' + type, event);
    //    }
    //    else if (typeof element[type]) {
    //      element[type]();
    //    }
    //  };
    //
    //  /**
    //   * Provide a helper method for displaying when something is unsupported.
    //   *
    //   * @param {String} type
    //   *   The type of unsupported object, e.g. method or option.
    //   * @param {String} name
    //   *   The name of the unsupported object.
    //   * @param {*} [value]
    //   *   The value of the unsupported object.
    //   */
    //  Bootstrap.unsupported = function (type, name, value) {
    //    if (this.settings.dev && console.warn) {
    //      console.warn(Drupal.formatString('Unsupported Drupal Bootstrap Modal @type: @name -> @value', {
    //        '@type': type,
    //        '@name': name,
    //        '@value': typeof value === 'object' ? JSON.stringify(value) : value
    //      }));
    //    }
    //  };
    //
    //  /**
    //   * Add Bootstrap to the global Drupal object.
    //   *
    //   * @type {Bootstrap}
    //   */
    //  Drupal.bootstrap = Drupal.bootstrap || Bootstrap;
    //
    //})(window._, window.jQuery, window.Drupal, window.drupalSettings);
    //;
    //(function ($, _) {
    //
    //  /**
    //   * @class Attributes
    //   *
    //   * Modifies attributes.
    //   *
    //   * @param {Object|Attributes} attributes
    //   *   An object to initialize attributes with.
    //   */
    //  var Attributes = function (attributes) {
    //    this.data = {};
    //    this.data['class'] = [];
    //    this.merge(attributes);
    //  };
    //
    //  /**
    //   * Renders the attributes object as a string to inject into an HTML element.
    //   *
    //   * @return {String}
    //   *   A rendered string suitable for inclusion in HTML markup.
    //   */
    //  Attributes.prototype.toString = function () {
    //    var output = '';
    //    var name, value;
    //    var checkPlain = function (str) {
    //      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    //    };
    //    var data = this.getData();
    //    for (name in data) {
    //      if (!data.hasOwnProperty(name)) continue;
    //      value = data[name];
    //      if (_.isFunction(value)) value = value();
    //      if (_.isObject(value)) value = _.values(value);
    //      if (_.isArray(value)) value = value.join(' ');
    //      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    //    }
    //    return output;
    //  };
    //
    //  /**
    //   * Renders the Attributes object as a plain object.
    //   *
    //   * @return {Object}
    //   *   A plain object suitable for inclusion in DOM elements.
    //   */
    //  Attributes.prototype.toPlainObject = function () {
    //    var object = {};
    //    var name, value;
    //    var data = this.getData();
    //    for (name in data) {
    //      if (!data.hasOwnProperty(name)) continue;
    //      value = data[name];
    //      if (_.isFunction(value)) value = value();
    //      if (_.isObject(value)) value = _.values(value);
    //      if (_.isArray(value)) value = value.join(' ');
    //      object[name] = value;
    //    }
    //    return object;
    //  };
    //
    //  /**
    //   * Add class(es) to the array.
    //   *
    //   * @param {string|Array} value
    //   *   An individual class or an array of classes to add.
    //   *
    //   * @return {Attributes}
    //   *
    //   * @chainable
    //   */
    //  Attributes.prototype.addClass = function (value) {
    //    var args = Array.prototype.slice.call(arguments);
    //    this.data['class'] = this.sanitizeClasses(this.data['class'].concat(args));
    //    return this;
    //  };
    //
    //  /**
    //   * Returns whether the requested attribute exists.
    //   *
    //   * @param {string} name
    //   *   An attribute name to check.
    //   *
    //   * @return {boolean}
    //   *   TRUE or FALSE
    //   */
    //  Attributes.prototype.exists = function (name) {
    //    return this.data[name] !== void(0) && this.data[name] !== null;
    //  };
    //
    //  /**
    //   * Retrieve a specific attribute from the array.
    //   *
    //   * @param {string} name
    //   *   The specific attribute to retrieve.
    //   * @param {*} defaultValue
    //   *   (optional) The default value to set if the attribute does not exist.
    //   *
    //   * @return {*}
    //   *   A specific attribute value, passed by reference.
    //   */
    //  Attributes.prototype.get = function (name, defaultValue) {
    //    if (!this.exists(name)) this.data[name] = defaultValue;
    //    return this.data[name];
    //  };
    //
    //  /**
    //   * Retrieves a cloned copy of the internal attributes data object.
    //   *
    //   * @return {Object}
    //   */
    //  Attributes.prototype.getData = function () {
    //    return _.extend({}, this.data);
    //  };
    //
    //  /**
    //   * Retrieves classes from the array.
    //   *
    //   * @return {Array}
    //   *   The classes array.
    //   */
    //  Attributes.prototype.getClasses = function () {
    //    return this.get('class', []);
    //  };
    //
    //  /**
    //   * Indicates whether a class is present in the array.
    //   *
    //   * @param {string|Array} className
    //   *   The class(es) to search for.
    //   *
    //   * @return {boolean}
    //   *   TRUE or FALSE
    //   */
    //  Attributes.prototype.hasClass = function (className) {
    //    className = this.sanitizeClasses(Array.prototype.slice.call(arguments));
    //    var classes = this.getClasses();
    //    for (var i = 0, l = className.length; i < l; i++) {
    //      // If one of the classes fails, immediately return false.
    //      if (_.indexOf(classes, className[i]) === -1) {
    //        return false;
    //      }
    //    }
    //    return true;
    //  };
    //
    //  /**
    //   * Merges multiple values into the array.
    //   *
    //   * @param {Attributes|Node|jQuery|Object} object
    //   *   An Attributes object with existing data, a Node DOM element, a jQuery
    //   *   instance or a plain object where the key is the attribute name and the
    //   *   value is the attribute value.
    //   * @param {boolean} [recursive]
    //   *   Flag determining whether or not to recursively merge key/value pairs.
    //   *
    //   * @return {Attributes}
    //   *
    //   * @chainable
    //   */
    //  Attributes.prototype.merge = function (object, recursive) {
    //    // Immediately return if there is nothing to merge.
    //    if (!object) {
    //      return this;
    //    }
    //
    //    // Get attributes from a jQuery element.
    //    if (object instanceof $) {
    //      object = object[0];
    //    }
    //
    //    // Get attributes from a DOM element.
    //    if (object instanceof Node) {
    //      object = Array.prototype.slice.call(object.attributes).reduce(function (attributes, attribute) {
    //        attributes[attribute.name] = attribute.value;
    //        return attributes;
    //      }, {});
    //    }
    //    // Get attributes from an Attributes instance.
    //    else if (object instanceof Attributes) {
    //      object = object.getData();
    //    }
    //    // Otherwise, clone the object.
    //    else {
    //      object = _.extend({}, object);
    //    }
    //
    //    // By this point, there should be a valid plain object.
    //    if (!$.isPlainObject(object)) {
    //      setTimeout(function () {
    //        throw new Error('Passed object is not supported: ' + object);
    //      });
    //      return this;
    //    }
    //
    //    // Handle classes separately.
    //    if (object && object['class'] !== void 0) {
    //      this.addClass(object['class']);
    //      delete object['class'];
    //    }
    //
    //    if (recursive === void 0 || recursive) {
    //      this.data = $.extend(true, {}, this.data, object);
    //    }
    //    else {
    //      this.data = $.extend({}, this.data, object);
    //    }
    //
    //    return this;
    //  };
    //
    //  /**
    //   * Removes an attribute from the array.
    //   *
    //   * @param {string} name
    //   *   The name of the attribute to remove.
    //   *
    //   * @return {Attributes}
    //   *
    //   * @chainable
    //   */
    //  Attributes.prototype.remove = function (name) {
    //    if (this.exists(name)) delete this.data[name];
    //    return this;
    //  };
    //
    //  /**
    //   * Removes a class from the attributes array.
    //   *
    //   * @param {...string|Array} className
    //   *   An individual class or an array of classes to remove.
    //   *
    //   * @return {Attributes}
    //   *
    //   * @chainable
    //   */
    //  Attributes.prototype.removeClass = function (className) {
    //    var remove = this.sanitizeClasses(Array.prototype.slice.apply(arguments));
    //    this.data['class'] = _.without(this.getClasses(), remove);
    //    return this;
    //  };
    //
    //  /**
    //   * Replaces a class in the attributes array.
    //   *
    //   * @param {string} oldValue
    //   *   The old class to remove.
    //   * @param {string} newValue
    //   *   The new class. It will not be added if the old class does not exist.
    //   *
    //   * @return {Attributes}
    //   *
    //   * @chainable
    //   */
    //  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    //    var classes = this.getClasses();
    //    var i = _.indexOf(this.sanitizeClasses(oldValue), classes);
    //    if (i >= 0) {
    //      classes[i] = newValue;
    //      this.set('class', classes);
    //    }
    //    return this;
    //  };
    //
    //  /**
    //   * Ensures classes are flattened into a single is an array and sanitized.
    //   *
    //   * @param {...String|Array} classes
    //   *   The class or classes to sanitize.
    //   *
    //   * @return {Array}
    //   *   A sanitized array of classes.
    //   */
    //  Attributes.prototype.sanitizeClasses = function (classes) {
    //    return _.chain(Array.prototype.slice.call(arguments))
    //      // Flatten in case there's a mix of strings and arrays.
    //      .flatten()
    //
    //      // Split classes that may have been added with a space as a separator.
    //      .map(function (string) {
    //        return string.split(' ');
    //      })
    //
    //      // Flatten again since it was just split into arrays.
    //      .flatten()
    //
    //      // Filter out empty items.
    //      .filter()
    //
    //      // Clean the class to ensure it's a valid class name.
    //      .map(function (value) {
    //        return Attributes.cleanClass(value);
    //      })
    //
    //      // Ensure classes are unique.
    //      .uniq()
    //
    //      // Retrieve the final value.
    //      .value();
    //  };
    //
    //  /**
    //   * Sets an attribute on the array.
    //   *
    //   * @param {string} name
    //   *   The name of the attribute to set.
    //   * @param {*} value
    //   *   The value of the attribute to set.
    //   *
    //   * @return {Attributes}
    //   *
    //   * @chainable
    //   */
    //  Attributes.prototype.set = function (name, value) {
    //    var obj = $.isPlainObject(name) ? name : {};
    //    if (typeof name === 'string') {
    //      obj[name] = value;
    //    }
    //    return this.merge(obj);
    //  };
    //
    //  /**
    //   * Prepares a string for use as a CSS identifier (element, class, or ID name).
    //   *
    //   * Note: this is essentially a direct copy from
    //   * \Drupal\Component\Utility\Html::cleanCssIdentifier
    //   *
    //   * @param {string} identifier
    //   *   The identifier to clean.
    //   * @param {Object} [filter]
    //   *   An object of string replacements to use on the identifier.
    //   *
    //   * @return {string}
    //   *   The cleaned identifier.
    //   */
    //  Attributes.cleanClass = function (identifier, filter) {
    //    filter = filter || {
    //      ' ': '-',
    //      '_': '-',
    //      '/': '-',
    //      '[': '-',
    //      ']': ''
    //    };
    //
    //    identifier = identifier.toLowerCase();
    //
    //    if (filter['__'] === void 0) {
    //      identifier = identifier.replace('__', '#DOUBLE_UNDERSCORE#');
    //    }
    //
    //    identifier = identifier.replace(Object.keys(filter), Object.keys(filter).map(function(key) { return filter[key]; }));
    //
    //    if (filter['__'] === void 0) {
    //      identifier = identifier.replace('#DOUBLE_UNDERSCORE#', '__');
    //    }
    //
    //    identifier = identifier.replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/g, '');
    //    identifier = identifier.replace(['/^[0-9]/', '/^(-[0-9])|^(--)/'], ['_', '__']);
    //
    //    return identifier;
    //  };
    //
    //  /**
    //   * Creates an Attributes instance.
    //   *
    //   * @param {object|Attributes} [attributes]
    //   *   An object to initialize attributes with.
    //   *
    //   * @return {Attributes}
    //   *   An Attributes instance.
    //   *
    //   * @constructor
    //   */
    //  Attributes.create = function (attributes) {
    //    return new Attributes(attributes);
    //  };
    //
    //  window.Attributes = Attributes;
    //
    //})(window.jQuery, window._);
    //;
    ///**
    // * @file
    // * Theme hooks for the Drupal Bootstrap base theme.
    // */
    //(function ($, Drupal, Bootstrap, Attributes) {
    //
    //  /**
    //   * Fallback for theming an icon if the Icon API module is not installed.
    //   */
    //  if (!Drupal.icon) Drupal.icon = { bundles: {} };
    //  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    //    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
    //      /**
    //       * Renders an icon.
    //       *
    //       * @param {string} bundle
    //       *   The bundle which the icon belongs to.
    //       * @param {string} icon
    //       *   The name of the icon to render.
    //       * @param {object|Attributes} [attributes]
    //       *   An object of attributes to also apply to the icon.
    //       *
    //       * @returns {string}
    //       */
    //      icon: function (bundle, icon, attributes) {
    //        if (!Drupal.icon.bundles[bundle]) return '';
    //        attributes = Attributes.create(attributes).addClass('icon').set('aria-hidden', 'true');
    //        icon = Drupal.icon.bundles[bundle](icon, attributes);
    //        return '<span' + attributes + '></span>';
    //      }
    //    });
    //  }
    //
    //  /**
    //   * Callback for modifying an icon in the "bootstrap" icon bundle.
    //   *
    //   * @param {string} icon
    //   *   The icon being rendered.
    //   * @param {Attributes} attributes
    //   *   Attributes object for the icon.
    //   */
    //  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    //    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
    //  };
    //
    //  /**
    //   * Add necessary theming hooks.
    //   */
    //  $.extend(Drupal.theme, /** @lends Drupal.theme */ {
    //
    //    /**
    //     * Renders a Bootstrap AJAX glyphicon throbber.
    //     *
    //     * @returns {string}
    //     */
    //    ajaxThrobber: function () {
    //      return Drupal.theme('bootstrapIcon', 'refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    //    },
    //
    //    /**
    //     * Renders a button element.
    //     *
    //     * @param {object|Attributes} attributes
    //     *   An object of attributes to apply to the button. If it contains one of:
    //     *   - value: The label of the button.
    //     *   - context: The context type of Bootstrap button, can be one of:
    //     *     - default
    //     *     - primary
    //     *     - success
    //     *     - info
    //     *     - warning
    //     *     - danger
    //     *     - link
    //     *
    //     * @returns {string}
    //     */
    //    button: function (attributes) {
    //      attributes = Attributes.create(attributes).addClass('btn');
    //      var context = attributes.get('context', 'default');
    //      var label = attributes.get('value', '');
    //      attributes.remove('context').remove('value');
    //      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
    //        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
    //      }
    //
    //      // Attempt to, intelligently, provide a default button "type".
    //      if (!attributes.exists('type')) {
    //        attributes.set('type', attributes.hasClass('form-submit') ? 'submit' : 'button');
    //      }
    //
    //      return '<button' + attributes + '>' + label + '</button>';
    //    },
    //
    //    /**
    //     * Alias for "button" theme hook.
    //     *
    //     * @param {object|Attributes} attributes
    //     *   An object of attributes to apply to the button.
    //     *
    //     * @see Drupal.theme.button()
    //     *
    //     * @returns {string}
    //     */
    //    btn: function (attributes) {
    //      return Drupal.theme('button', attributes);
    //    },
    //
    //    /**
    //     * Renders a button block element.
    //     *
    //     * @param {object|Attributes} attributes
    //     *   An object of attributes to apply to the button.
    //     *
    //     * @see Drupal.theme.button()
    //     *
    //     * @returns {string}
    //     */
    //    'btn-block': function (attributes) {
    //      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-block'));
    //    },
    //
    //    /**
    //     * Renders a large button element.
    //     *
    //     * @param {object|Attributes} attributes
    //     *   An object of attributes to apply to the button.
    //     *
    //     * @see Drupal.theme.button()
    //     *
    //     * @returns {string}
    //     */
    //    'btn-lg': function (attributes) {
    //      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-lg'));
    //    },
    //
    //    /**
    //     * Renders a small button element.
    //     *
    //     * @param {object|Attributes} attributes
    //     *   An object of attributes to apply to the button.
    //     *
    //     * @see Drupal.theme.button()
    //     *
    //     * @returns {string}
    //     */
    //    'btn-sm': function (attributes) {
    //      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-sm'));
    //    },
    //
    //    /**
    //     * Renders an extra small button element.
    //     *
    //     * @param {object|Attributes} attributes
    //     *   An object of attributes to apply to the button.
    //     *
    //     * @see Drupal.theme.button()
    //     *
    //     * @returns {string}
    //     */
    //    'btn-xs': function (attributes) {
    //      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-xs'));
    //    },
    //
    //    /**
    //     * Renders a glyphicon.
    //     *
    //     * @param {string} name
    //     *   The name of the glyphicon.
    //     * @param {object|Attributes} [attributes]
    //     *   An object of attributes to apply to the icon.
    //     *
    //     * @returns {string}
    //     */
    //    bootstrapIcon: function (name, attributes) {
    //      return Drupal.theme('icon', 'bootstrap', name, attributes);
    //    }
    //
    //  });
    //
    //})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes);
    //;
    ////https://github.com/JamesMGreene/Function.name/blob/master/Function.name.js
    //(function() {
    //
    //var fnNameMatchRegex = /^\s*function\s+([^\(\s]*)\s*/;
    //
    //function _name() {
    //  var match, name;
    //  if (this === Function || this === Function.prototype.constructor) {
    //    name = "Function";
    //  }
    //  else if (this !== Function.prototype) {
    //    match = ("" + this).match(fnNameMatchRegex);
    //    name = match && match[1];
    //  }
    //  return name || "";
    //}
    //
    //// Inspect the polyfill-ability of this browser
    //var needsPolyfill = !("name" in Function.prototype && "name" in (function x() {}));
    //var canDefineProp = typeof Object.defineProperty === "function" &&
    //  (function() {
    //    var result;
    //    try {
    //      Object.defineProperty(Function.prototype, "_xyz", {
    //        get: function() {
    //          return "blah";
    //        },
    //        configurable: true
    //      });
    //      result = Function.prototype._xyz === "blah";
    //      delete Function.prototype._xyz;
    //    }
    //    catch (e) {
    //      result = false;
    //    }
    //    return result;
    //  })();
    //var canDefineGetter = typeof Object.prototype.__defineGetter__ === "function" &&
    //  (function() {
    //    var result;
    //    try {
    //      Function.prototype.__defineGetter__("_abc", function() {
    //        return "foo";
    //      });
    //      result = Function.prototype._abc === "foo";
    //      delete Function.prototype._abc;
    //    }
    //    catch (e) {
    //      result = false;
    //    }
    //    return result;
    //  })();
    //
    //
    //
    //// Add the "private" property for testing, even if the real property can be polyfilled
    //Function.prototype._name = _name;
    //
    //
    //// Polyfill it!
    //// For:
    ////  * IE >=9 <12
    ////  * Chrome <33
    //if (needsPolyfill) {
    //  // For:
    //  //  * IE >=9 <12
    //  //  * Chrome >=5 <33
    //  if (canDefineProp) {
    //    Object.defineProperty(Function.prototype, "name", {
    //      get: function() {
    //        var name = _name.call(this);
    //
    //        // Since named function definitions have immutable names, also memoize the
    //        // output by defining the `name` property directly on this Function
    //        // instance so that this polyfill will not need to be invoked again
    //        if (this !== Function.prototype) {
    //          Object.defineProperty(this, "name", {
    //            value: name,
    //            configurable: true
    //          });
    //        }
    //
    //        return name;
    //      },
    //      configurable: true
    //    });
    //  }
    //  // For:
    //  //  * Chrome <5
    //  else if (canDefineGetter) {
    //    // NOTE:
    //    // The snippet:
    //    //
    //    //     x.__defineGetter__('y', z);
    //    //
    //    // ...is essentially equivalent to:
    //    //
    //    //     Object.defineProperty(x, 'y', {
    //    //       get: z,
    //    //       configurable: true,  // <-- key difference #1
    //    //       enumerable: true     // <-- key difference #2
    //    //     });
    //    //
    //    Function.prototype.__defineGetter__("name", function() {
    //      var name = _name.call(this);
    //
    //      // Since named function definitions have immutable names, also memoize the
    //      // output by defining the `name` property directly on this Function
    //      // instance so that this polyfill will not need to be invoked again
    //      if (this !== Function.prototype) {
    //        this.__defineGetter__("name", function() { return name; });
    //      }
    //
    //      return name;
    //    });
    //  }
    //}
    //
    //})();
    //!function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?r:u)(n.promise,e._value);var o;try{o=t(e._value)}catch(i){return void u(n.promise,i)}r(n.promise,o)}))}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var i=n.then;if(n instanceof o)return e._state=3,e._value=n,void f(e);if("function"==typeof i)return void s(t(i,n),e)}e._state=1,e._value=n,f(e)}catch(r){u(e,r)}}function u(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function c(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,u(n,e))})}catch(o){if(t)return;t=!0,u(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new c(e,t,o)),o},o.all=function(e){var n=Array.prototype.slice.call(e);return new o(function(e,t){function o(r,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,function(e){o(r,e)},t)}n[r]=u,0===--i&&e(n)}catch(c){t(c)}}if(0===n.length)return e([]);for(var i=n.length,r=0;r<n.length;r++)o(r,n[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,i=e.length;o<i;o++)e[o].then(n,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(this);
    ///*global define, window, document*/
    //
    ////Polyfill for Object.create.
    //if (typeof Object.create !== 'function') {
    //    Object.create = (function () {
    //        "use strict";
    //        var Temp = function () {};
    //        return function (prototype) {
    //            if (arguments.length > 1) {
    //                throw new Error('Second argument not supported');
    //            }
    //            if (typeof prototype !== 'object') {
    //                throw new TypeError('Argument must be an object');
    //            }
    //            Temp.prototype = prototype;
    //            var result = new Temp();
    //            Temp.prototype = null;
    //            return result;
    //        };
    //    }());
    //}
    //
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("Behaviors", ["jquery"], factory);
    //    } else {
    //        root.Behaviors = factory(root.jQuery);
    //    }
    //}(this, function ($) {
    //    "use strict";
    //
    //    var module = {},
    //        behavior_registry = {},
    //        content_ready_listeners = [],
    //        ElementMissingError = error("ElementMissingError");
    //    
    //    /* Throttle an event handler.
    //     *
    //     * Returns a function which, no matter how frequently it's called, will
    //     * only trigger a maximum of once per timeout period. More specifically,
    //     * the first event will always be processed, then, no events will process
    //     * until the end of the timeout period. If one or more events occurred
    //     * during this period, the last event recieved will trigger immediately
    //     * after the end of the timeout period, as well as restart the throttling
    //     * period. Any preceding events will be discarded.
    //     *
    //     * Not to be confused with a debounce, which only fires the event handler
    //     * at the end of a string of events spaced closer than the timeout period.
    //     *
    //     * The nature of this function means that any passed in function's return
    //     * value will be discarded.
    //     */
    //    function throttle_single(func, timeout) {
    //        var lastTimeout, afterLastArgs, afterLastThis;
    //
    //        function unthrottle() {
    //            if (afterLastArgs !== undefined) {
    //                func.apply(afterLastThis, afterLastArgs);
    //                afterLastArgs = undefined;
    //                lastTimeout = window.setTimeout(unthrottle, timeout);
    //            } else {
    //                lastTimeout = undefined;
    //            }
    //        }
    //
    //        return function () {
    //            var myThis = this, myArgs = [], i;
    //
    //            for (i = 0; i < arguments.length; i += 1) {
    //                myArgs.push(arguments[i]);
    //            }
    //
    //            if (lastTimeout === undefined) {
    //                func.apply(myThis, myArgs);
    //                lastTimeout = window.setTimeout(unthrottle, timeout);
    //            } else {
    //                afterLastArgs = myArgs;
    //                afterLastThis = myThis;
    //            }
    //        };
    //    }
    //
    //    function Behavior(elem) {
    //        //Do something to elem
    //        this.$elem = $(elem);
    //    }
    //
    //    /* Find a behavior's markup.
    //     *
    //     * The $context argument passed to this function is the jQuery element that
    //     * will be searched for behaviors. Any additional arguments will be passed
    //     * to Behavior.locate and ultimately to the behavior's constructor.
    //     */
    //    Behavior.find_markup = function ($context) {
    //        var results = [], i, splitArgs = [], Class = this;
    //
    //        for (i = 1; i < arguments.length; i += 1) {
    //            splitArgs.push(arguments[i]);
    //        }
    //        
    //        function processElem(index, elem) {
    //            var locateArgs = [elem].concat(splitArgs);
    //
    //            results.push(Class.locate.apply(Class, locateArgs));
    //        }
    //        
    //        $context.filter(Class.QUERY).each(processElem);
    //        $context.find(Class.QUERY).each(processElem);
    //
    //        return results;
    //    };
    //
    //    /* Locate a behavior onto an element, returning an instance of that
    //     * behavior that you can work with.
    //     *
    //     * A behavior locates onto an element by instantiating an instance of
    //     * itself and installing it onto the markup's jQuery data. Therefore, we
    //     * will only instantiate that behavior once; and further calls to .locate
    //     * instead return the same object. Thus, it is safe to use .locate as a
    //     * general accessor - it is idempotent.
    //     *
    //     * The elem argument indicates the element that the behavior should locate
    //     * onto. Further arguments are passed onto the constructor.
    //     *
    //     * TODO: Is there a non-jQuery way of handling this?
    //     */
    //    Behavior.locate = function (elem) {
    //        var $elem = $(elem), new_object, i, objectArgs = [elem], Class = this,
    //            rc = $elem.data("behaviors-registered-classes");
    //        
    //        if ($elem.length === 0) {
    //            throw new ElementMissingError("Attempted to locate a Behavior onto an empty element query.");
    //        }
    //
    //        if (rc === undefined) {
    //            rc = {};
    //        }
    //
    //        if (rc[Class.name] === undefined) {
    //            //Grab the other arguments
    //            for (i = 1; i < arguments.length; i += 1) {
    //                objectArgs.push(arguments[i]);
    //            }
    //
    //            new_object = Object.create(Class.prototype);
    //            Class.apply(new_object, objectArgs);
    //            rc[Class.name] = new_object;
    //        } else {
    //            new_object = rc[Class.name];
    //        }
    //
    //        $elem.data("behaviors-registered-classes", rc);
    //
    //        return new_object;
    //    };
    //
    //    /* Respond to the presence of new content on the page.
    //     *
    //     * By default, we attempt to find markup on all children of the context.
    //     * Subclasses may do something crazier, like say delay behavior processing
    //     * until some third-party API is loaded.
    //     *
    //     * Consider this roughly equivalent to $(document).ready() callbacks.
    //     */
    //    Behavior.content_ready = function ($context) {
    //        var Class = this;
    //
    //        Class.find_markup($context);
    //    };
    //    
    //    /* Respond to the impending removal of content from the page.
    //     * 
    //     * Most behaviors that only attach event handlers to their own content are
    //     * safe and do not need to implement content removal support: they will
    //     * inherently "fall away".
    //     * 
    //     * However, behaviors that run a constant animation kernel or attach event
    //     * handlers to elements outside of their own ownership must provide a
    //     * mechanism to detach those event handlers and stop those kernels.
    //     */
    //    Behavior.content_removal = function ($context) {
    //        var Class = this,
    //            $attached_elems = $context.find(Class.QUERY);
    //        
    //        //Iterate through each element and see if our behavior has located upon
    //        //them. We don't just call .find_markup/.locate since we don't want to
    //        //risk initializing something just to tear it down one cycle later.
    //        $attached_elems.each(function (index, attach_elem) {
    //            var $elem = $(attach_elem),
    //                rc = $elem.data("behaviors-registered-classes");
    //            
    //            if (rc === undefined) {
    //                return;
    //            }
    //            
    //            if (rc[Class.name] === undefined) {
    //                return;
    //            }
    //            
    //            if (rc[Class.name].deinitialize === undefined) {
    //                return;
    //            }
    //            
    //            rc[Class.name].deinitialize();
    //        });
    //    };
    //
    //    /* Register a behavior so that it can respond to global events such as new
    //     * content becoming ready.
    //     *
    //     * It is not always appropriate to register your behavior to recieve load
    //     * events. Generally, if this is a behavior you would initialize yourself,
    //     * perhaps with special arguments, then you should not register that here.
    //     */
    //    function register_behavior(Class, name) {
    //        if (name === undefined) {
    //            name = Class.name;
    //        }
    //
    //        behavior_registry[name] = Class;
    //    }
    //    
    //    /* Register a function that is called when content is ready.
    //     * 
    //     * This function should only be used for things that are not a Behavior.
    //     * Proper behaviors should be registered using register_behavior for future
    //     * uses. Non-behavior listeners get registered here so that future uses of
    //     * behavior registration do not conflict with non-Behavior listeners.
    //     */
    //    function register_content_listener(func) {
    //        content_ready_listeners.push(func);
    //    }
    //
    //    /* Indicate that some new content is ready.
    //     *
    //     * The given content will be passed onto all registered behaviors.
    //     *
    //     * CMS/frameworks with their own ready mechanism will need to ship their
    //     * own replacement/wrapper for this function that pushes calls to this
    //     * function over to that mechanism; and calls from that mechanism need to
    //     * come back here.
    //     */
    //    function content_ready($context) {
    //        var k, i;
    //        
    //        function do_later(obj, func) {
    //            window.setTimeout(func.bind(obj, $context), 0);
    //        }
    //        
    //        for (i = 0; i < content_ready_listeners.length; i += 1) {
    //            do_later(undefined, content_ready_listeners[i]);
    //        }
    //
    //        for (k in behavior_registry) {
    //            if (behavior_registry.hasOwnProperty(k)) {
    //                do_later(behavior_registry[k], behavior_registry[k].content_ready);
    //            }
    //        }
    //    }
    //    
    //    /* Indicate that content is about to be removed.
    //     * 
    //     * Registered behaviors with destructors will be called upon to remove any
    //     * external event handlers or animation kernels preventing them from being
    //     * terminated by the JS runtime.
    //     * 
    //     * TODO: Add content_removal listener functions.
    //     */
    //    function content_removal($context) {
    //        var k, i;
    //        
    //        function do_later(obj, func) {
    //            window.setTimeout(func.bind(obj, $context), 0);
    //        }
    //        
    //        for (k in behavior_registry) {
    //            if (behavior_registry.hasOwnProperty(k)) {
    //                do_later(behavior_registry[k], behavior_registry[k].content_removal);
    //            }
    //        }
    //    }
    //    
    //    function error(error_class_name, ParentClass) {
    //        if (error_class_name === undefined) {
    //            throw new Error("Please name your error subclass.");
    //        }
    //
    //        if (!(ParentClass instanceof Function)) {
    //            ParentClass = Error;
    //        }
    //
    //        var SubError = function (message) {
    //            var err = new Error(message);
    //            err.name = error_class_name;
    //
    //            this.name = error_class_name;
    //            this.message = err.message;
    //            if (err.stack) {
    //                this.stack = err.stack;
    //            }
    //        };
    //
    //        SubError.prototype = new ParentClass("u dont c me");
    //        SubError.prototype.constructor = SubError;
    //        SubError.prototype.name = error_class_name;
    //
    //        delete SubError.prototype.stack;
    //
    //        return SubError;
    //    }
    //    
    //    function inherit(ChildClass, ParentClass) {
    //        var k;
    //
    //        //Use the prototyping system to copy methods from parent to child.
    //        ChildClass.prototype = Object.create(ParentClass.prototype);
    //        ChildClass.prototype.constructor = ChildClass;
    //        ChildClass.prototype.parent = ParentClass.prototype;
    //
    //        //Manually copy class-level methods from parent to child.
    //        for (k in ParentClass) {
    //            if (ParentClass.hasOwnProperty(k)) {
    //                ChildClass[k] = ParentClass[k];
    //            }
    //        }
    //    }
    //
    //    function init(ChildClass, object, args) {
    //        ChildClass.prototype.parent.constructor.apply(object, args);
    //    }
    //    
    //    /* By default, report the initial page load to registered behaviors.
    //     */
    //    $(document).ready(function () {
    //        content_ready($(document));
    //    });
    //    
    //    module.ElementMissingError = ElementMissingError;
    //    module.throttle_single = throttle_single;
    //    module.Behavior = Behavior;
    //    module.error = error;
    //    module.inherit = inherit;
    //    module.init = init;
    //    module.register_behavior = register_behavior;
    //    module.content_ready = content_ready;
    //    module.content_removal = content_removal;
    //    module.register_content_listener = register_content_listener;
    //
    //    return module;
    //}));
    //
    ///*global define, document, window*/
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("BehaviorsDrupal", ["jquery", "Behaviors", "Drupal"], factory);
    //    } else {
    //        root.BehaviorsDrupal = factory(root.jQuery, root.Behaviors, root.Drupal);
    //    }
    //}(this, function ($, Behaviors, Drupal) {
    //    "use strict";
    //    
    //    /* When a Behavior loads new content in, ensure that content gets Drupal's
    //     * own behaviors as well.
    //     * 
    //     * We copypaste core code here instead of calling it because I have to skip
    //     * our own Drupal behavior going the other way.
    //     */
    //    function behaviors_to_drupal_adapter($context) {
    //        var i, context = $context[0] || document,
    //            behaviors = Drupal.behaviors;
    //        // Execute all of them.
    //        for (i in behaviors) {
    //            if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function' && i !== "skeleton_lazybones_behaviors") {
    //                // Don't stop the execution of behaviors in case of an error.
    //                try {
    //                    behaviors[i].attach(context, window.drupalSettings);
    //                } catch (e) {
    //                    Drupal.throwError(e);
    //                }
    //            }
    //        }
    //    }
    //    
    //    Behaviors.register_content_listener(behaviors_to_drupal_adapter);
    //    
    //    Drupal.behaviors.skeleton_lazybones_behaviors = {
    //        attach: function (context, settings) {
    //            Behaviors.content_ready($(context));
    //        }
    //    };
    //}));
    ///*global define, console, document, window*/
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("TabbedContent", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.TabbedContent = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //
    //    function $do(that, target) {
    //        return function () {
    //            target.apply(that, arguments);
    //        };
    //    }
    //
    //    function TabbedContentRegion(elem) {
    //        Behaviors.init(TabbedContentRegion, this, arguments);
    //
    //        this.$elem = $(elem);
    //        this.id = this.$elem.attr("id");
    //        this.active = this.$elem.data("tabbedcontent-region-active") !== undefined;
    //
    //        this.links = [];
    //
    //        this.reflect_status();
    //    }
    //
    //    Behaviors.inherit(TabbedContentRegion, Behaviors.Behavior);
    //
    //    TabbedContentRegion.QUERY = "[data-tabbedcontent-region]";
    //
    //    TabbedContentRegion.prototype.reflect_status = function (status) {
    //        var i;
    //
    //        if (status === undefined) {
    //            status = this.active;
    //        }
    //
    //        if (status) {
    //            this.$elem.addClass("is-TabbedContent--active");
    //            this.$elem.removeClass("is-TabbedContent--inactive");
    //        } else {
    //            this.$elem.removeClass("is-TabbedContent--active");
    //            this.$elem.addClass("is-TabbedContent--inactive");
    //        }
    //
    //        for (i = 0; i < this.links.length; i += 1) {
    //            if (status) {
    //                this.links[i].addClass("is-TabbedContent--target_active");
    //                this.links[i].removeClass("is-TabbedContent--target_inactive");
    //            } else {
    //                this.links[i].removeClass("is-TabbedContent--target_active");
    //                this.links[i].addClass("is-TabbedContent--target_inactive");
    //            }
    //        }
    //    };
    //
    //    TabbedContentRegion.prototype.add_incoming_link = function ($li) {
    //        this.links.push($li);
    //    };
    //
    //    function TabbedContentSet(elem) {
    //        Behaviors.init(TabbedContentSet, this, arguments);
    //
    //        this.$elem = $(elem);
    //
    //        this.tabset_name = this.$elem.attr("data-tabbedcontent-set");
    //        if (this.tabset_name === undefined) {
    //            this.tabset_name = this.$elem.attr("id");
    //        }
    //
    //        this.tab_members = {};
    //        this.list = [];
    //
    //        this.find_links();
    //    }
    //
    //    Behaviors.inherit(TabbedContentSet, Behaviors.Behavior);
    //
    //    TabbedContentSet.QUERY = "[data-tabbedcontent-set]";
    //
    //    TabbedContentSet.prototype.new_tab = function (id) {
    //        var $elem = $("#" + id);
    //
    //        if ($elem.length === 0) {
    //            return false;
    //        }
    //
    //        if (this.tab_members[id] === undefined) {
    //            this.tab_members[id] = {
    //                "toggles": [],
    //                "content": TabbedContentRegion.locate($elem)
    //            };
    //        }
    //
    //        return true;
    //    };
    //
    //    TabbedContentSet.prototype.set_active_tab = function (id) {
    //        var k;
    //
    //        for (k in this.tab_members) {
    //            if (this.tab_members.hasOwnProperty(k)) {
    //                this.tab_members[k].content.active = k === id;
    //                this.tab_members[k].content.reflect_status();
    //            }
    //        }
    //    };
    //
    //    TabbedContentSet.prototype.navigate_tab_intent = function (id, evt) {
    //        this.set_active_tab(id);
    //
    //        if (evt) {
    //            evt.preventDefault();
    //        }
    //    };
    //
    //    TabbedContentSet.prototype.import_list_item = function (li) {
    //        var $li = $(li),
    //            $link = $li.find("a"),
    //            href = $link.attr("href"),
    //            id;
    //
    //        if ($link.length === 0) {
    //            return;
    //        }
    //
    //        if (href.indexOf("#") !== -1) {
    //            id = href.slice(1);
    //        }
    //
    //        if (id === undefined) {
    //            return;
    //        }
    //
    //        if (this.tab_members[id] === undefined && !this.new_tab(id)) {
    //            return;
    //        }
    //
    //        this.list.push({
    //            "li": $li,
    //            "id": id
    //        });
    //        this.tab_members[id].content.add_incoming_link($li);
    //        this.tab_members[id].content.reflect_status();
    //        $link.on("touchend click", this.navigate_tab_intent.bind(this, id));
    //    };
    //
    //    TabbedContentSet.prototype.find_links = function () {
    //        var that = this;
    //
    //        this.$elem.find("li").each(function (index, elem) {
    //            return that.import_list_item(elem);
    //        });
    //    };
    //
    //    Behaviors.register_behavior(TabbedContentSet);
    //
    //    module.TabbedContentSet = TabbedContentSet;
    //
    //    return module;
    //}));
    //
    ///*global define, console, document, window*/
    ///*jslint continue:true*/
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("AffixColumn", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.AffixColumn = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //    
    //    function $do(that, target) {
    //        return function () {
    //            target.apply(that, arguments);
    //        };
    //    }
    //    
    //    /* An Affix root is an element which is used to determine the edges of the
    //     * region that columns stick to. It also provides the core event handlers
    //     * to drive the AffixColumn and AffixRow behaviors.
    //     */
    //    function Affix(elem, scrollElem) {
    //        Behaviors.init(Affix, this, arguments);
    //
    //        this.height = this.$elem.height();
    //        this.offsetTop = this.$elem.offset().top;
    //        
    //        this.columns = [];
    //        this.$scrollElem = $(scrollElem || document);
    //        this.$scrollHeightElem = this.$scrollElem;
    //        
    //        //weird DOM quirk
    //        if (this.$scrollElem[0] === document) {
    //            this.$scrollHeightElem = $(window);
    //        }
    //        
    //        this.$alwaysTopElem = $(this.$elem.data("affixcolumn-alwaystop"));
    //        this.$alwaysBottomElem = $(this.$elem.data("affixcolumn-alwaysbottom"));
    //        
    //        this.bind_event_handlers();
    //        this.find_columns_and_rows();
    //        
    //        this.resized();
    //        this.scroll_changed();
    //    }
    //    
    //    Behaviors.inherit(Affix, Behaviors.Behavior);
    //    
    //    Affix.QUERY = "[data-affixcolumn='root']";
    //    
    //    Affix.prototype.deinitialize = function () {
    //        this.unbind_event_handlers();
    //    };
    //    
    //    /* Check our alwaystop/alwaysbottom elements and see if they are floating.
    //     * If so, add their height to the top and bottom adjustments given to the
    //     * individual columns.
    //     */
    //    Affix.prototype.determine_global_floating_adjustment = function () {
    //        this.globalTopAdjust = 0;
    //        
    //        this.$alwaysTopElem.each(function (index, atelem) {
    //            var $atelem = $(atelem);
    //            this.globalTopAdjust += $atelem.height();
    //        }.bind(this));
    //        
    //        this.globalBottomAdjust = 0;
    //        
    //        this.$alwaysBottomElem.each(function (index, atelem) {
    //            var $atelem = $(atelem);
    //            this.globalBottomAdjust += $atelem.height();
    //        }.bind(this));
    //    };
    //
    //    Affix.prototype.resized = function () {
    //        var i, maxColHeight = 0, maxColId, heightSum, disp = 0, topAdjust = 0, bottomAdjust = 0;
    //        
    //        this.determine_global_floating_adjustment();
    //        this.height = this.$elem.height();
    //        
    //        if (this.columns.length > 0) {
    //            //Scan top rows to fix their displacement heights and determine top
    //            //adjustments.
    //            for (i = 0; i < this.columns.length; i += 1) {
    //                //Also, kill floating adjustments plz
    //                this.columns[i].clear_floating_adjustments();
    //                
    //                if (!this.columns[i].has_option("top")) {
    //                    continue;
    //                }
    //                
    //                //Top rows never get a bottom adjustment.
    //                this.columns[i].set_floating_adjustments(this.globalTopAdjust, topAdjust, 0, 0);
    //                
    //                disp = this.columns[i].displacement_height();
    //                
    //                this.columns[i].$height_bearing_element().css("min-height", disp + "px");
    //                topAdjust += disp;
    //            }
    //            
    //            //Scan bottom rows to fix their displacement heights and determine top
    //            //adjustments. This is done in reverse order so that the bottommost
    //            //bottom row gets the lowest bottom float adjustment.
    //            for (i = this.columns.length - 1; i >= 0; i -= 1) {
    //                if (!this.columns[i].has_option("bottom")) {
    //                    continue;
    //                }
    //                
    //                //Bottom rows never get a top adjustment.
    //                this.columns[i].set_floating_adjustments(0, 0, this.globalBottomAdjust, bottomAdjust);
    //                
    //                disp = this.columns[i].displacement_height();
    //                
    //                this.columns[i].$height_bearing_element().css("min-height", disp + "px");
    //                bottomAdjust += disp;
    //            }
    //            
    //            //Scan columns to select the height-bearing column.
    //            for (i = 0; i < this.columns.length; i += 1) {
    //                if (!this.columns[i].has_option("column")) {
    //                    continue;
    //                }
    //                
    //                //Columns get both the top and bottom adjustment.
    //                this.columns[i].set_floating_adjustments(this.globalTopAdjust, topAdjust, this.globalBottomAdjust, bottomAdjust);
    //                
    //                //Determine which column is height bearing for this Affix.
    //                if (maxColHeight < this.columns[i].displacement_height() &&
    //                        !this.columns[i].has_option("noheightbearing")) {
    //                    maxColHeight = this.columns[i].displacement_height();
    //                    maxColId = i;
    //                }
    //                
    //                this.columns[i].remove_state("tallest");
    //            }
    //            
    //            if (maxColId !== undefined) {
    //                this.columns[maxColId].add_state("tallest");
    //            }
    //        }
    //    };
    //    
    //    Affix.prototype.scroll_changed = function () {
    //        var i, maxColHeight = 0, maxColId;
    //        
    //        this.height = this.$elem.height();
    //        this.windowHeight = this.$scrollHeightElem.height();
    //        this.offsetTop = this.$elem.offset().top;
    //        this.scrollTop = this.$scrollElem.scrollTop();
    //        this.offsetBottom = this.offsetTop + this.height;
    //        this.scrollBottom = this.scrollTop + this.windowHeight;
    //        
    //        if (this.columns.length > 0) {
    //            for (i = 0; i < this.columns.length; i += 1) {
    //                this.columns[i].viewport_changed(this.height, this.offsetTop, this.offsetBottom, this.scrollTop, this.scrollBottom);
    //            }
    //        }
    //    };
    //    
    //    Affix.prototype.unbind_event_handlers = function () {
    //        if (this.scroll_handler !== undefined) {
    //            this.$scrollElem.off("scroll", this.scroll_handler);
    //        }
    //        
    //        if (this.resize_handler !== undefined) {
    //            $(window).off("resize", this.resize_handler);
    //        }
    //    };
    //    
    //    Affix.prototype.bind_event_handlers = function () {
    //        this.unbind_event_handlers();
    //        
    //        this.scroll_handler = $do(this, this.scroll_changed);
    //        this.resize_handler = $do(this, this.resized);
    //        
    //        this.$scrollElem.on("scroll", this.scroll_handler);
    //        $(window).on("resize", this.resize_handler);
    //        $(document).on("load", this.resize_handler);
    //        $("img").on("load", this.resize_handler);
    //    };
    //    
    //    Affix.prototype.find_columns_and_rows = function () {
    //        var $likely_columns = this.$elem.find(AffixColumn.QUERY),
    //            $likely_roots = this.$elem.find(Affix.QUERY);
    //
    //        this.columns = [];
    //        this.roots = [];
    //
    //        $likely_columns.each(function (index, lcelem) {
    //            var $lcelem = $(lcelem),
    //                $parent_root = $lcelem.parents().filter(Affix.QUERY).first();
    //
    //            if ($parent_root[0] === this.$elem[0]) {
    //                this.columns.push(AffixColumn.locate($lcelem));
    //            }
    //        }.bind(this));
    //
    //        $likely_roots.each(function (index, lrelem) {
    //            var $lrelem = $(lrelem),
    //                $parent_root = $lrelem.parents().filter(Affix.QUERY).first();
    //
    //            if ($parent_root[0] === this.$elem[0]) {
    //                this.roots.push(Affix.locate($lrelem));
    //            }
    //        }.bind(this));
    //    };
    //    
    //    /* An AffixColumn is a normally fixed element which sticks to the top or
    //     * bottom edges of a scrolling viewport (typically the document).
    //     * 
    //     * AffixColumn itself contains no event handlers. The parent Affix is
    //     * responsible for propagating viewport scrolling to it's child Columns.
    //     * 
    //     * Options may be provided which cause the Column to behave differently.
    //     * Examples of this include the "noheightbearing" option, which prevents
    //     * your AffixColumn from being marked as tallest for the purposes of parent
    //     * element height preservation. See the parse_option_list function for more
    //     * information on the option list format, and has_option for what options
    //     * are available.
    //     * 
    //     * The name "AffixColumn" is a misnomer. "Columns" may be configured as rows
    //     * or columns in CSS. Orientation of the Column is configured with the
    //     * column/top/bottom options. If neither is active, "column" is assumed.
    //     */
    //    function AffixColumn(elem) {
    //        this.$elem = $(elem);
    //        this.options = this.parse_option_list(this.$elem.data("affixcolumn-options"));
    //        
    //        this.top_adjust = 0;
    //        this.bottom_adjust = 0;
    //    }
    //    
    //    Behaviors.inherit(AffixColumn, Behaviors.Behavior);
    //    
    //    AffixColumn.QUERY = "[data-affixcolumn='column']";
    //    
    //    /* Calculate the height taken up by the AffixColumn if placed in normal
    //     * document flow.
    //     * 
    //     * The floating adjustments currently applied to the column may cause
    //     * invalid displacement height results to occur. For best results, call
    //     * clear_floating_adjustments to remove them, and then trigger a viewport
    //     * update from the Affix root once the height has been measured.
    //     */
    //    AffixColumn.prototype.displacement_height = function () {
    //        return this.$elem.height();
    //    };
    //    
    //    /* Change the top/bottom values that this column floats at.
    //     * 
    //     * Floating adjustments determine the safe area of space that this element
    //     * may float at without being overlapped or overlapping top or bottom rows.
    //     * 
    //     * These will override any top/bottom values set via CSS.
    //     */
    //    AffixColumn.prototype.set_floating_adjustments = function (globalTop, top, globalBottom, bottom) {
    //        this.top_adjust = top;
    //        this.bottom_adjust = bottom;
    //        
    //        this.global_top_adjust = globalTop;
    //        this.global_bottom_adjust = globalBottom;
    //    };
    //    
    //    /* Remove inline CSS applied to make floating adjustments visually present.
    //     * 
    //     * You must call this method before querying displacement_height, or you
    //     * will get invalid results. After calling this method, you must trigger a
    //     * viewport update by calling scroll_changed on the containing Affix root.
    //     */
    //    AffixColumn.prototype.clear_floating_adjustments = function () {
    //        this.$elem.css("top", "");
    //        this.$elem.css("bottom", "");
    //    };
    //    
    //    /* Return the element responsible for propagating our displacement height in
    //     * normal document flow.
    //     * 
    //     * By default, the height bearing element is our parent element. We do not
    //     * have a facility to override this currently.
    //     */
    //    AffixColumn.prototype.$height_bearing_element = function () {
    //        return this.$elem.parent();
    //    };
    //    
    //    AffixColumn.prototype.add_state = function (state) {
    //        this.$elem.addClass("is-AffixColumn--" + state);
    //    };
    //    
    //    AffixColumn.prototype.remove_state = function (state) {
    //        this.$elem.removeClass("is-AffixColumn--" + state);
    //    };
    //    
    //    /* Determine if an AffixColumn option applies given the current viewport.
    //     * 
    //     * Valid options include:
    //     * 
    //     *  - column: AffixColumn to be oriented vertically aside other columns.
    //     *    The tallest column is marked as "tallest" and considered the height
    //     *    bearing column, whereby it is expected to be positioned in normal
    //     *    document flow such that the Affix element can grab it's CSS height.
    //     * 
    //     *  - top: AffixColumn to be oriented above other columns. Top rows are
    //     *    given a CSS min-height equal to the sum of their childrens' heights
    //     *    and their children are assumed to float. This minimum height will be
    //     *    applied as the top value to any following tops or columns.
    //     *
    //     *  - bottom: AffixColumn to be oriented below other columns. Bottom rows
    //     *    are given a CSS min-height in the same fashion as top rows. This
    //     *    minimum height will be applied as the bottom value to any preceding
    //     *    bottoms or columns.
    //     * 
    //     *  - noheightbearing: Column-oriented AffixColumn to be disqualified from
    //     *    being marked as a height-bearing column.
    //     */
    //    AffixColumn.prototype.has_option = function (option_string) {
    //        var i;
    //        
    //        for (i = 0; i < this.options.length; i += 1) {
    //            if (this.options[i].media === null || window.matchMedia(this.options[i].media).matches) {
    //                //Column enabled by default
    //                if (option_string === "column" &&
    //                        this.options[i].options.indexOf("top") === -1 &&
    //                        this.options[i].options.indexOf("bottom") === -1) {
    //                    return true;
    //                }
    //                
    //                return this.options[i].options.indexOf(option_string) > -1;
    //            }
    //        }
    //        
    //        if (option_string === "column") {
    //            return true;
    //        } else {
    //            return false;
    //        }
    //    };
    //    
    //    AffixColumn.MATCH_MEDIA_QUERY_REGEX = /\(([\s\S]*)\)/g;
    //    
    //    /* Parse an option list.
    //     * 
    //     * The option list determines what options are active on a column. It is
    //     * comma separated. Each comma indicates a new option list for a particular
    //     * media query. The first media query to match determines the total option
    //     * set. The final option set may or may not have a media query; if it does
    //     * not, then it serves as the default option set.
    //     * 
    //     * This is very analagous to the sizes attribute of <img> tags in modern
    //     * browsers. Example format:
    //     * 
    //     *    (min-width: 450px) column noheightbearing, top
    //     */
    //    AffixColumn.prototype.parse_option_list = function (option_list_string) {
    //        var cases, i, j, rval = [], case_obj = {}, match;
    //        
    //        if (option_list_string === undefined) {
    //            option_list_string = "";
    //        }
    //        
    //        cases = option_list_string.split(",");
    //        
    //        for (i = 0; i < cases.length; i += 1) {
    //            case_obj = {};
    //            match = this.constructor.MATCH_MEDIA_QUERY_REGEX.exec(cases[i]);
    //            
    //            //Reset the string. Sharing regex objects is dirty...
    //            this.constructor.MATCH_MEDIA_QUERY_REGEX.lastIndex = 0;
    //            
    //            if (match === null || match.length === 0) {
    //                case_obj.options = cases[i].split(" ");
    //                case_obj.media = null;
    //            } else {
    //                case_obj.options = cases[i].slice(match[0]).split(" ");
    //                case_obj.media = match[0];
    //            }
    //            
    //            //Filter empty options
    //            for (j = 0; j < case_obj.options.length; j += 0) {
    //                if (case_obj.options[j] === "") {
    //                    case_obj.options.splice(j, 1);
    //                } else {
    //                    j += 1;
    //                }
    //            }
    //            
    //            rval.push(case_obj);
    //        }
    //        
    //        return rval;
    //    };
    //    
    //    /* Internal method used by Affix to communicate to it's children the new
    //     * parameters of the scroll viewport.
    //     */
    //    AffixColumn.prototype.viewport_changed = function (rootHeight, offsetTop, offsetBottom, scrollTop, scrollBottom) {
    //        var isTopAnchored = this.has_option("column") || this.has_option("top"),
    //            isBottomAnchored = this.has_option("anchorbottom") || this.has_option("bottom"),
    //            bottomStateAdjust = true,
    //            topStateAdjust = true,
    //            adjustWithoutGlobal = true;
    //        
    //        //Remove existing floating adjustments.
    //        //Otherwise, our displacement height is incorrect.
    //        this.clear_floating_adjustments();
    //        
    //        //Apply affix states.
    //        if (isTopAnchored && scrollTop + this.global_top_adjust < offsetTop ||
    //                isBottomAnchored && scrollBottom - this.displacement_height() < offsetTop) {
    //            this.add_state("top");
    //            this.remove_state("bottom");
    //            bottomStateAdjust = false;
    //        } else if (isTopAnchored && scrollTop + this.top_adjust + this.global_top_adjust + this.displacement_height() + this.bottom_adjust >= offsetBottom ||
    //                isBottomAnchored && scrollBottom >= offsetBottom) {
    //            this.remove_state("top");
    //            this.add_state("bottom");
    //            topStateAdjust = false;
    //        } else {
    //            this.remove_state("top");
    //            this.remove_state("bottom");
    //            adjustWithoutGlobal = false;
    //        }
    //        
    //        //Apply floating adjustments.
    //        if ((this.has_option("column") || this.has_option("top")) && topStateAdjust) {
    //            if (adjustWithoutGlobal) {
    //                this.$elem.css("top", this.top_adjust + "px");
    //            } else {
    //                this.$elem.css("top", this.top_adjust + this.global_top_adjust + "px");
    //            }
    //        }
    //        
    //        if ((this.has_option("column") || this.has_option("bottom")) && bottomStateAdjust) {
    //            if (adjustWithoutGlobal) {
    //                this.$elem.css("bottom", this.bottom_adjust + "px");
    //            } else {
    //                this.$elem.css("bottom", this.bottom_adjust + this.global_bottom_adjust + "px");
    //            }
    //        }
    //    };
    //    
    //    Behaviors.register_behavior(Affix);
    //
    //    module.Affix = Affix;
    //    module.AffixColumn = AffixColumn;
    //
    //    return module;
    //}));
    //
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("FormItemLabelPlaceholders", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.FormItemLabelPlaceholders = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //    
    //    function FormLabelPlaceholderize() {
    //        Behaviors.init(FormLabelPlaceholderize, this, arguments);
    //        
    //        this.$input = $("#" + this.$elem.attr("for"));
    //        
    //        if (this.$input.attr("tagName") !== "select") {
    //            this.$input.on("focus", this.focus_intent.bind(this))
    //            this.$input.on("blur", this.unfocus_intent.bind(this))
    //        } else {
    //            this.$input.on("change", this.change_intent.bind(this))
    //        }
    //        
    //        this.unfocus_intent();
    //    }
    //    
    //    Behaviors.inherit(FormLabelPlaceholderize, Behaviors.Behavior);
    //    
    //    FormLabelPlaceholderize.QUERY = "label[for]";
    //    
    //    FormLabelPlaceholderize.prototype.update_classes = function () {
    //        if (this.is_placeholder) {
    //            this.$elem.addClass("is-FormItem--placeholderized");
    //            this.$elem.removeClass("is-FormItem--not_placeholderized");
    //        } else {
    //            this.$elem.removeClass("is-FormItem--placeholderized");
    //            this.$elem.addClass("is-FormItem--not_placeholderized");
    //        }
    //    }
    //    
    //    FormLabelPlaceholderize.prototype.focus_intent = function () {
    //        this.is_placeholder = false;
    //        this.is_focused = true;
    //        this.update_classes();
    //    }
    //    
    //    FormLabelPlaceholderize.prototype.unfocus_intent = function () {
    //        this.is_placeholder = this.$input.val() === "";
    //        this.is_focused = false;
    //        this.update_classes();
    //    }
    //    
    //    FormLabelPlaceholderize.prototype.change_intent = function () {
    //        this.is_placeholder = this.$input.val() === "";
    //        this.update_classes();
    //    }
    //    
    //    Behaviors.register_behavior(FormLabelPlaceholderize);
    //    
    //    module.FormLabelPlaceholderize = FormLabelPlaceholderize;
    //    
    //    return module;
    //}));
    //
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("ImpactFilterSubmit", ["jquery", "Behaviors", "TabbedContent"], factory);
    //    } else {
    //        root.ImpactFilterSubmit = factory(root.jQuery, root.Behaviors, root.TabbedContent);
    //    }
    //}(this, function ($, Behaviors, TabbedContent) {
    //    "use strict";
    //
    //    var module = {};
    //    
    //    function ImpactChampionsSlider() {
    //        Behaviors.init(ImpactChampionsSlider, this, arguments);
    //        
    //        this.options = {
    //            direction: 'horizontal',
    //            autoplay: {
    //                delay: 5000,
    //                disableOnInteraction: false
    //            },
    //            speed: 500,
    //            pagination: {
    //                el: ".swiper-pagination",
    //                type: "bullets",
    //                clickable: true,
    //                renderBullet: this.render_bullet.bind(this),
    //            }
    //        };
    //        
    //        window.hfs_extensions_add_js({
    //            path: "swiper_carousel/swiper-dist/js/swiper.min.js",
    //            loaded: 'Swiper' in window,
    //            callback: this.swiper_loaded.bind(this)
    //        });
    //        window.hfs_extensions_add_css("swiper_carousel/swiper-dist/css/swiper.min.css", function() {});
    //        window.hfs_extensions_add_css("swiper_carousel/impl.css", function() {});
    //        
    //        this.$impact_view = this.$elem.parents().find("[data-azb='az_block-he_for_she_impact_block']");
    //        this.$impact_view.on("mouseover", this.cancel.bind(this));
    //        this.$impact_view.on("offcanvas-open", this.cancel.bind(this));
    //        
    //        this.tab_json = this.$elem.data("impactchampions-slider-tabjson");
    //        console.log(this.tab_json);
    //        
    //        //Tear all of the modals and backdrops out of their respective areas and
    //        //into a separate container outside of the slider. I'm sorry if this
    //        //confused you, but it had to be this way or the modals wouldn't work,
    //        //since you can't have modals in a slider. (Transform overrides fixed
    //        //positioning)
    //        this.$modals_container = this.$elem.siblings().filter("[data-impactchampions-slider-modals]");
    //        this.$modals = this.$elem.find(".Modal, [data-offcanvas-backdrop]");
    //        this.$modals_container.append(this.$modals);
    //        
    //        this.visible = false;
    //    }
    //    
    //    Behaviors.inherit(ImpactChampionsSlider, Behaviors.Behavior);
    //    
    //    ImpactChampionsSlider.QUERY = "[data-impactchampions-slider]";
    //    
    //    ImpactChampionsSlider.prototype.swiper_loaded = function () {
    //        this.swiper_inst = new Swiper("#" + this.$elem.attr('id'), this.options);
    //        
    //        this.cancel();
    //        this.scroll_intent();
    //        
    //        $(window).on("scroll", this.scroll_intent.bind(this));
    //    }
    //    
    //    ImpactChampionsSlider.prototype.scroll_intent = function () {
    //        if (this.visible) return;
    //        
    //        if ($(window).scrollTop() + window.innerHeight >= this.$elem.offset().top) {
    //            this.visible = true;
    //            this.rotate();
    //        }
    //    }
    //    
    //    ImpactChampionsSlider.prototype.rotate = function () {
    //        this.swiper_inst.autoplay.start();
    //    }
    //    
    //    ImpactChampionsSlider.prototype.cancel = function () {
    //        this.swiper_inst.autoplay.stop();
    //    }
    //    
    //    ImpactChampionsSlider.prototype.render_bullet = function (index, className) {
    //        return "<span class='" + className + "'>" + this.tab_json[index].trim() + "</span>"
    //    }
    //    
    //    Behaviors.register_behavior(ImpactChampionsSlider);
    //    
    //    module.ImpactChampionsSlider = ImpactChampionsSlider;
    //    
    //    return module;
    //}));
    //
    ///*global define, console*/
    ///*jslint bitwise: true */
    ///* updated 9/14/2016 */
    //
    //if (!Array.prototype.indexOf) {
    //    Array.prototype.indexOf = function (elt) { /*, from*/
    //        "use strict";
    //        var len = this.length >>> 0, from = Number(arguments[1]) || 0, derparam;
    //        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    //        if (from < 0) {
    //            from += len;
    //        }
    //
    //        for (derparam; from < len; from += 1) {
    //            if (from in this && this[from] === elt) {
    //                return from;
    //            }
    //        }
    //        return -1;
    //    };
    //}
    //
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("betteroffcanvas", ["jquery"], factory);
    //    } else {
    //        // Browser globals
    //        root.betteroffcanvas = factory(root.jQuery);
    //    }
    //}(this, function ($) {
    //    //BetterOffcanvas
    //    //Works like this:
    //    /*
    //    *  <button type="button" data-toggle="offcanvas" data-target="#any-selector">
    //    */
    //
    //    "use strict";
    //
    //    var $openTarget = null, currentLevel = 0, module = {}, isInDebounce = false,
    //        target_has_touch = false,
    //        focus_click_inquiry = false, click_keydown_inquiry = false,
    //        eligibleTouches = {},
    //        logger;
    //    
    //    /* Logger that throws away all data (default)
    //     */
    //    function null_logging() {
    //        return;
    //    }
    //    
    //    /* Logger that sends all logged data to the JS console.
    //     */
    //    function console_logging(log_data) {
    //        return console.log(log_data);
    //    }
    //    
    //    function switchLoggingMode(mode) {
    //        switch (mode) {
    //        case "console":
    //            logger = console_logging;
    //            break;
    //        default:
    //            logger = null_logging;
    //            break;
    //        }
    //    }
    //    
    //    //Inform the user they can enable console logging
    //    console.log("Offcanvas: You can enable detailed event logging by typing betteroffcanvas.switchLoggingMode('console').");
    //    switchLoggingMode("null");
    //
    //    function initOffcanvasToggle($theToggle) {
    //        var $theTarget = $($theToggle.data("target")), toggleOptions = $theToggle.data("toggle-options"),
    //            state;
    //
    //        if ($theTarget.data("offcanvas-state") === undefined) {
    //            $theTarget.data("offcanvas-state", {"open": false, "parents": null, "$openChild": null, "openChildLvl": 0, "toggleOptions": []});
    //        }
    //
    //        state = $theTarget.data("offcanvas-state");
    //
    //        if (state.toggleOptions === undefined) {
    //            state.toggleOptions = [];
    //        }
    //
    //        if (toggleOptions !== undefined) {
    //            state.toggleOptions.push.apply(state.toggleOptions, toggleOptions.split(" "));
    //        }
    //
    //        $theTarget.data("offcanvas-state", state);
    //
    //        return $theTarget;
    //    }
    //
    //    function findParentLevels($theTarget) {
    //        var parents = [], tgtState = $theTarget.data("offcanvas-state");
    //
    //        if (tgtState.parents === null) {
    //            $theTarget.parents().each(function (index, pelem) {
    //                var $pelem = $(pelem),
    //                    parState = $pelem.data("offcanvas-state"),
    //                    $parTgl;
    //
    //                if (parState === undefined) {
    //                    if ($pelem.attr("id") !== undefined) {
    //                        $parTgl = $("[data-toggle='offcanvas'][data-target='#" + $pelem.attr("id") + "']");
    //                        if ($parTgl.length > 0) {
    //                            initOffcanvasToggle($parTgl);
    //                            parents.push(pelem);
    //                        }
    //                    }
    //                } else {
    //                    parents.push(pelem);
    //                }
    //            });
    //
    //            tgtState.parents = parents;
    //            $theTarget.data("offcanvas-state", tgtState);
    //
    //            $(tgtState.parents).each(function (index, pelem) {
    //                findParentLevels($(pelem));
    //            });
    //        }
    //    }
    //
    //    function initOffcanvas($theTarget, toggleOptions) {
    //        if (toggleOptions === undefined) {
    //            toggleOptions = [];
    //        }
    //        
    //        if ($theTarget.data("offcanvas-state") === undefined) {
    //            $theTarget.data("offcanvas-state", {"open": false, "parents": null, "$openChild": null, "openChildLvl": 0, "toggleOptions": toggleOptions});
    //        }
    //
    //        findParentLevels($theTarget);
    //    }
    //
    //    function isOffcanvas($theTargetList) {
    //        var truth = true;
    //
    //        $theTargetList.each(function (index, elem) {
    //            var $theTarget = $(elem), $toggles;
    //
    //            if ($theTarget.data("offcanvas-state") !== undefined) {
    //                truth = truth & true;
    //                return;
    //            }
    //
    //            $toggles = $("[data-toggle='offcanvas'][data-target='#" + $theTarget.attr("id") + "']");
    //
    //            if ($toggles.length > 0) {
    //                initOffcanvas($theTarget);
    //
    //                $toggles.each(function (index, elem) {
    //                    initOffcanvasToggle($(elem));
    //                });
    //
    //                truth &= true;
    //                return;
    //            }
    //
    //            truth &= false;
    //        });
    //
    //        return truth;
    //    }
    //
    //    function isChildOffcanvas($theTarget, $potentialParent) {
    //        if (!isOffcanvas($theTarget) || !isOffcanvas($potentialParent)) {
    //            return false;
    //        }
    //
    //        if ($theTarget.data("offcanvas-state").parents.indexOf($potentialParent[0]) === -1) {
    //            return false;
    //        }
    //
    //        return true;
    //    }
    //
    //    function isTopLevelOffcanvas($theTarget) {
    //        return isOffcanvas($theTarget) && $theTarget.data("offcanvas-state").parents.length === 0;
    //    }
    //
    //    function updateBackdrop(newLevel, openTargetList) {
    //        var $backdropDivs = $("[data-offcanvas-backdrop]");
    //
    //        $backdropDivs.each(function (index, bdElem) {
    //            var $bdElem = $(bdElem),
    //                bdLevel = $bdElem.data("offcanvas-backdrop"),
    //                bdFor = $bdElem.data("offcanvas-backdrop-for");
    //
    //            if (bdFor !== undefined && openTargetList.indexOf(bdFor) === -1) {
    //                $bdElem.removeClass("is-Offcanvas--backdrop_active");
    //                $bdElem.addClass("is-Offcanvas--backdrop_inactive");
    //            } else if (newLevel >= bdLevel) {
    //                $bdElem.addClass("is-Offcanvas--backdrop_active");
    //                $bdElem.removeClass("is-Offcanvas--backdrop_inactive");
    //            } else {
    //                $bdElem.removeClass("is-Offcanvas--backdrop_active");
    //                $bdElem.addClass("is-Offcanvas--backdrop_inactive");
    //            }
    //        });
    //
    //        currentLevel = newLevel;
    //    }
    //
    //    function scanChildrenWithinLevel($theTarget, cbk) {
    //        $theTarget.each(function (index, elem) {
    //            var $elem = $(elem);
    //
    //            if (isOffcanvas($elem)) {
    //                return;
    //            }
    //
    //            cbk($elem);
    //            scanChildrenWithinLevel($elem.children(), cbk);
    //        });
    //    }
    //
    //    function setFocusableWithinLevel($theTarget, isFocusable) {
    //        if (isFocusable === undefined) {
    //            isFocusable = true;
    //        }
    //
    //        logger("changing focus state to " + isFocusable);
    //
    //        scanChildrenWithinLevel($theTarget.children(), function ($elem) {
    //            if ($elem.data("offcanvas-tabindex") === undefined) {
    //                //Determine if this element should be focusable or not...
    //                if ($elem.attr("tabindex") !== undefined) {
    //                    $elem.data("offcanvas-tabindex", $elem.attr("offcanvas-tabindex"));
    //                } else {
    //                    $elem.data("offcanvas-tabindex", null);
    //                }
    //            }
    //
    //            if (isFocusable) {
    //                if ($elem.data("offcanvas-tabindex") === null) {
    //                    $elem.removeAttr("tabindex");
    //                } else {
    //                    $elem.attr("tabindex", $elem.data("offcanvas-tabindex"));
    //                }
    //            } else {
    //                $elem.attr("tabindex", -1);
    //            }
    //        });
    //    }
    //
    //    function openOffcanvas($theTarget, $theToggle, eventType, isRecursive, recursiveCount) {
    //        var tgtState, $pelem, parState, newLevel = 1, i, targetIDs = [], $topElem, topState, newEvent;
    //        if ($theTarget !== null && $theTarget !== undefined) {
    //            logger("Open Offcanvas " + $theTarget.attr("id"));
    //        } else {
    //            logger("Open Offcanvas (no target)");
    //        }
    //
    //        if ($theTarget === null) {
    //            return;
    //        }
    //        tgtState = $theTarget.data("offcanvas-state");
    //
    //        if (recursiveCount === undefined) {
    //            recursiveCount = 1;
    //        }
    //
    //        $theTarget.addClass("is-Offcanvas--open");
    //        $theTarget.removeClass("is-Offcanvas--closed");
    //        tgtState.open = true;
    //        tgtState.open_event = eventType;
    //        $theTarget.data("offcanvas-state", tgtState);
    //
    //        $("[data-toggle='offcanvas'][data-target='#" + $theTarget.attr("id") + "']").addClass("is-Offcanvas--target_open");
    //
    //        setFocusableWithinLevel($theTarget, true);
    //
    //        if (tgtState.parents.length > 0) {
    //            $pelem = $(tgtState.parents[0]);
    //
    //            parState = $pelem.data("offcanvas-state");
    //            parState.$openChild = $theTarget;
    //            parState.openChildLvl = recursiveCount;
    //            $pelem.data("offcanvas-state", parState);
    //
    //            $pelem.addClass("is-Offcanvas--open_sublvl_" + recursiveCount);
    //
    //            openOffcanvas($pelem, $theToggle, eventType, true, recursiveCount + 1);
    //
    //            newLevel = newLevel + tgtState.parents.length;
    //
    //            $topElem = $(tgtState.parents[tgtState.parents.length - 1]);
    //            if ($topElem.length > 0) {
    //                topState = $topElem.data("offcanvas-state");
    //
    //                if (topState !== undefined) {
    //                    if (topState.childDepthLvl !== undefined) {
    //                        $topElem.removeClass("is-Offcanvas--depth_" + topState.childDepthLvl);
    //                    }
    //
    //                    topState.childDepthLvl = tgtState.parents.length;
    //                    $topElem.addClass("is-Offcanvas--depth_" + topState.childDepthLvl);
    //                }
    //            }
    //        }
    //
    //        if (isRecursive !== true) {
    //            targetIDs.push($theTarget.attr("id"));
    //
    //            for (i = 0; i < tgtState.parents.length; i += 1) {
    //                targetIDs.push(tgtState.parents[i].getAttribute("id"));
    //            }
    //
    //            updateBackdrop(newLevel, targetIDs);
    //        }
    //
    //        $openTarget = $theTarget;
    //
    //        newEvent = new $.Event({
    //            "type": "offcanvas-open",
    //            "target": $theTarget,
    //            "toggle": $theToggle,
    //            "from_child": isRecursive,
    //            "children_count": recursiveCount
    //        });
    //        $theTarget.trigger(newEvent);
    //    }
    //    
    //    /* Determine if a user-triggered event is allowed to dismiss an offcanvas
    //     * or not.
    //     * 
    //     * This function is consistenly called before dismissOffcanvas in order to
    //     * gate event-driven dismissals consistently. Programmatic dismissals (e.g.
    //     * by third-party code or for clearing the way for the next offcanvas) are
    //     * NOT gated in the same way.
    //     * 
    //     * To gate dismissals in the same fashion, call this function with the
    //     * following four parameters:
    //     * 
    //     *  - $_openTarget: The currently open offcanvas at the start of event
    //     *                 processing. Specify false to automatically select the
    //     *                 current open target. Specify undefined for no open
    //     *                 target.
    //     * 
    //     *  - $newTarget:  The new offcanvas that you plan to open at the end of
    //     *                 event processing.
    //     * 
    //     *  - evt:         The event that triggered your current event processing.
    //     *                 Your code is expected to filter mobile emulation events
    //     *                 such as emulated click-after-touchend through some means
    //     *                 so that this function can differentiate between the two.
    //     * 
    //     *  - $evtToggle:  The element which triggered the event. May be a
    //     *                 data-toggle or data-dismiss element. This is not,
    //     *                 strictly speaking, evt.target: client code is allowed and
    //     *                 expected to traverse the parents of the target to find,
    //     *                 say, the button containing the actual event target.
    //     * 
    //     * In the event of recieving false from this function, event handlers should
    //     * cease any event processing which would cause the open target to be
    //     * dismissed, including opening other offcanvas hierarchies as that will
    //     * implicitly dismiss the current one.
    //     */
    //    function eventCanDismissOffcanvas($_openTarget, $newTarget, evt, $evtToggle) {
    //        var openTargetState = {"toggleOptions": []}, openTargetIsNoHover = false,
    //            openTargetWasHovered = false,
    //            targetsAreIdentical = false,
    //            evtFromToggle = false, evtFromDismiss = false,
    //            evtWithinOpenTarget = false,
    //            evtToggleOptions, evtToggleIsNoHover = false,
    //            evtToggleTargetsOpenTarget = false,
    //            hasNewTarget,
    //            hasOpenTarget,
    //            hasEventToggle;
    //        
    //        if ($_openTarget === false) {
    //            $_openTarget = $openTarget;
    //        }
    //        
    //        hasNewTarget = $newTarget !== undefined && $newTarget !== null && $newTarget.length >= 1;
    //        hasOpenTarget = $_openTarget !== undefined && $_openTarget !== null && $_openTarget.length >= 1;
    //        hasEventToggle = $evtToggle !== undefined && $evtToggle !== null && $evtToggle.length >= 1;
    //        
    //        if (hasOpenTarget) {
    //            openTargetState = $_openTarget.data("offcanvas-state");
    //            openTargetIsNoHover = openTargetState.toggleOptions.indexOf("nohover") > -1;
    //            openTargetWasHovered = openTargetState.open_event === "mouseover";
    //            
    //            if (evt.target) {
    //                evtWithinOpenTarget = $_openTarget[0] === evt.target || $.contains($_openTarget[0], evt.target);
    //            }
    //        } else {
    //            logger("Dismissals are always allowed if no offcanvas is open");
    //            return true;
    //        }
    //        
    //        if (hasNewTarget) {
    //            targetsAreIdentical = $_openTarget[0] === $newTarget[0];
    //        }
    //        
    //        if (hasEventToggle) {
    //            evtFromToggle = $evtToggle.filter("[data-toggle='offcanvas']").length > 0 ||
    //                            $evtToggle.parents().filter("[data-toggle='offcanvas']").length > 0;
    //            evtFromDismiss = $evtToggle.filter("[data-dismiss='offcanvas']").length > 0 ||
    //                             $evtToggle.parents().filter("[data-dismiss='offcanvas']").length > 0;
    //            
    //            evtToggleOptions = $evtToggle.data("toggle-options");
    //            if (evtToggleOptions !== undefined) {
    //                evtToggleOptions = evtToggleOptions.split(" ");
    //            } else {
    //                evtToggleOptions = [];
    //            }
    //            
    //            evtToggleIsNoHover = evtToggleOptions.indexOf("nohover") > -1;
    //            evtToggleTargetsOpenTarget = $evtToggle.data("target") === "#" + $_openTarget.attr("id");
    //        }
    //        
    //        //Dismissals by toggling the same target
    //        if (evt.type === "click" && openTargetWasHovered) {
    //            if (targetsAreIdentical) {
    //                logger("Not going to allow dismiss from click on already hovered nav.");
    //                return false;
    //            }
    //        }
    //        
    //        if (evt.type === "focusin") {
    //            if (targetsAreIdentical) { //TODO: should this be evtWithinOpenTarget?
    //                logger("Not going to allow dismiss from focusin within same target");
    //                return false;
    //            }
    //            
    //            if (!hasNewTarget && (evtFromToggle || evtFromDismiss)) {
    //                logger("Ignoring focus-dismiss due to the fact that event target is an offcanvas toggle.");
    //                logger("Currently focused off-canvas element: " + $_openTarget.attr("id"));
    //                return false;
    //            }
    //        }
    //        
    //        if (evt.type === "mouseover" && !evtWithinOpenTarget) {
    //            if (evtFromDismiss) {
    //                logger("Not going to allow dismiss until user actually clicks hovered dismiss button.");
    //                return false;
    //            } else if (evtToggleIsNoHover || openTargetIsNoHover) {
    //                logger("Not going to allow dismiss as toggle is nohover.");
    //                return false;
    //            } else if (evtFromToggle && targetsAreIdentical) {
    //                logger("Not going to allow dismiss as toggle is for current offcanvas.");
    //                return false;
    //            }
    //        }
    //        
    //        return true;
    //    }
    //
    //    function dismissOffcanvas($theTarget, numLvls) {
    //        var tgtState = $theTarget.data("offcanvas-state"), newLvl = -1, i, targetIDs = [], $topElem, topState, newEvent;
    //
    //        if ($theTarget !== null && $theTarget !== undefined) {
    //            logger("Dismiss Offcanvas " + $theTarget.attr("id"));
    //        } else {
    //            logger("Dismiss Offcanvas (no target)");
    //        }
    //
    //        if (numLvls === undefined) {
    //            /* NumLvls is the number of recursion levels (children being auto-dismissed) */
    //            numLvls = 1;
    //
    //            $topElem = $(tgtState.parents[tgtState.parents.length - 1]);
    //            if ($topElem.length > 0) {
    //                topState = $topElem.data("offcanvas-state");
    //
    //                if (topState !== undefined) {
    //                    if (topState.childDepthLvl !== undefined) {
    //                        $topElem.removeClass("is-Offcanvas--depth_" + topState.childDepthLvl);
    //                    }
    //
    //                    topState.childDepthLvl = tgtState.parents.length - 1;
    //                    $topElem.addClass("is-Offcanvas--depth_" + topState.childDepthLvl);
    //                }
    //            }
    //        }
    //
    //        $theTarget.removeClass("is-Offcanvas--open");
    //        $theTarget.addClass("is-Offcanvas--closed");
    //        tgtState.open = false;
    //        tgtState.open_event = undefined;
    //        $theTarget.data("offcanvas-state", tgtState);
    //
    //        $("[data-toggle='offcanvas'][data-target='#" + $theTarget.attr("id") + "']").removeClass("is-Offcanvas--target_open");
    //
    //        newEvent = new $.Event({
    //            "type": "offcanvas-dismiss",
    //            "target": $theTarget
    //        });
    //        $theTarget.trigger(newEvent);
    //
    //        //TODO: How do we actually tell if the offcanvas is visible when closed?
    //        //(e.g. desktop nav)
    //        if (!isTopLevelOffcanvas($theTarget)) {
    //            if ($theTarget !== null) {
    //                logger("Marking non-top-level offcanvas nav " + $theTarget.attr("id") + " as untabbable");
    //            }
    //            setFocusableWithinLevel($theTarget, false);
    //        }
    //
    //        if (tgtState.$openChild !== null) {
    //            dismissOffcanvas(tgtState.$openChild, numLvls + 1);
    //        } else {
    //            if (tgtState.parents.length > 0) {
    //                $openTarget = $(tgtState.parents[numLvls - 1]);
    //                if ($openTarget.length === 0) {
    //                    $openTarget = null;
    //                }
    //
    //                $(tgtState.parents).each(function (index, pelem) {
    //                    var $pelem = $(pelem), parState = $pelem.data("offcanvas-state"), childlvl, newChildLvl = parState.openChildLvl - numLvls;
    //
    //                    $pelem.removeClass("is-Offcanvas--open_sublvl_" + parState.openChildLvl);
    //                    if (newChildLvl > 0) {
    //                        $pelem.addClass("is-Offcanvas--open_sublvl_" + newChildLvl);
    //                    } else {
    //                        parState.$openChild = null;
    //                    }
    //
    //                    parState.openChildLvl = newChildLvl;
    //                    $pelem.data("offcanvas-state", parState);
    //
    //                    if (newChildLvl > newLvl) {
    //                        newLvl = newChildLvl;
    //                    }
    //                });
    //            } else {
    //                $openTarget = null;
    //                newLvl = -1;
    //            }
    //
    //            for (i = 0; i < tgtState.parents.length; i += 1) {
    //                targetIDs.push(tgtState.parents[i].getAttribute("id"));
    //            }
    //
    //            updateBackdrop(newLvl + 1, targetIDs);
    //        }
    //    }
    //
    //    function dismissOpenOffcanvas() {
    //        if ($openTarget !== null) {
    //            dismissOffcanvas($openTarget);
    //        }
    //    }
    //
    //    function enableDebounce() {
    //        if (!isInDebounce) {
    //            logger("Debounce timeout enabled");
    //            isInDebounce = true;
    //            window.setTimeout(function () {
    //                logger("Debounce timeout expired - event processing will resume");
    //                isInDebounce = false;
    //            }, 100);
    //        }
    //    }
    //
    //    $(document).on("keydown", function (evt) {
    //        if (evt.keyCode === 27) {
    //            dismissOpenOffcanvas();
    //        } else if (evt.keyCode === 13) {
    //            logger("Keydown event - ENTER. Disabling link clickthrough for the next click event.");
    //            click_keydown_inquiry = true; //mark that the following click event is
    //                                        //from a keyboard
    //        }
    //    });
    //
    //    $(document).on("ready", function (evt) {
    //        var openIDs = [], openState, i;
    //
    //        if ($openTarget !== null) {
    //            openState = $openTarget.data("offcanvas-state");
    //
    //            for (i = 0; i < openState.parents.length; i += 1) {
    //                openIDs.push(openState.parents[i].getAttribute("id"));
    //            }
    //
    //            updateBackdrop(currentLevel, openIDs);
    //        }
    //    });
    //
    //    function on_focusin(evt) {
    //        var $tgt = $(evt.target), $tgtOffcanvas = null,
    //            $tgtParents = $tgt.parents(), $toggleTarget,
    //            dismissAllowed;
    //
    //        $tgtParents.each(function (index, elem) {
    //            if ($tgtOffcanvas === null) {
    //                if (isOffcanvas($(elem))) {
    //                    $tgtOffcanvas = $(elem);
    //                }
    //            }
    //        });
    //
    //        if (isInDebounce) {
    //            logger("Processed event (debounced, type: focusin)");
    //            return;
    //        }
    //        
    //        if ($tgt.data("toggle") === "offcanvas") {
    //            $toggleTarget = $($tgt.data("target"));
    //            if (!isTopLevelOffcanvas($toggleTarget)) {
    //                if ($toggleTarget !== null) {
    //                    logger("Marking non-top-level offcanvas nav " + $toggleTarget.attr("id") + " as untabbable");
    //                }
    //                setFocusableWithinLevel($toggleTarget, false);
    //            }
    //        }
    //        
    //        if (!eventCanDismissOffcanvas($openTarget, $tgtOffcanvas, evt, $tgt)) {
    //            return;
    //        }
    //
    //        if ($tgtOffcanvas === null && $openTarget !== null) {
    //            logger("Focused on something outside of off-canvas nav " + $openTarget.attr("id"));
    //            logger($tgt);
    //
    //            enableDebounce(); //prevent subsequent click event handlers from tripping
    //
    //            while ($openTarget !== null) {
    //                dismissOpenOffcanvas();
    //            }
    //        } else {
    //            if ($tgtOffcanvas !== null) {
    //                logger("Focused inside off-canvas nav " + $tgtOffcanvas.attr("id"));
    //            }
    //
    //            if ($openTarget !== null) {
    //                enableDebounce(); //prevent subsequent click event handlers from tripping
    //
    //                while ($openTarget !== null && !isChildOffcanvas($tgtOffcanvas, $openTarget)) {
    //                    logger("Dismissing off-canvas menu " + $openTarget.attr("id"));
    //                    dismissOffcanvas($openTarget);
    //                }
    //            }
    //            openOffcanvas($tgtOffcanvas, $tgt, evt.type);
    //        }
    //    }
    //    
    //    //Track a specific set of focus events to ensure they don't result in a
    //    //click.
    //    $(document).on("focusin", function (evt) {
    //        logger(evt.type);
    //
    //        focus_click_inquiry = true;
    //
    //        window.setTimeout(function () {
    //            if (focus_click_inquiry) { //e.g. if a click event hasn't happened
    //                on_focusin(evt);
    //            }
    //        }, 300);
    //    });
    //    
    //    //Activate touch-specific behaviors if we have ever recieved a touch event.
    //    $(document).on("touchstart touchend touchmove touchcancel", function (evt) {
    //        target_has_touch = true;
    //    });
    //    
    //    /* Track the starting position of every touch we get. */
    //    $(document).on("touchstart", function (evt) {
    //        var i, touch;
    //        
    //        for (i = 0; i < evt.originalEvent.changedTouches.length; i += 1) {
    //            touch = evt.originalEvent.changedTouches.item(i);
    //            eligibleTouches[touch.identifier] = {
    //                "x": touch.screenX,
    //                "y": touch.screenY
    //            };
    //        }
    //    });
    //    
    //    /* Track and remove touches which have become drags.
    //     * Assumes a minimum drag distance of 15px.
    //     * Returns true if any of the given touches are still eligible.
    //     */
    //    function testAndPruneTouchList(changedTouches) {
    //        var i, touch, stTouch, dist, MAX_DIST = 15, num_valid_touches = 0;
    //        
    //        for (i = 0; i < changedTouches.length; i += 1) {
    //            touch = changedTouches.item(i);
    //            
    //            if (eligibleTouches.hasOwnProperty(touch.identifier)) {
    //                stTouch = eligibleTouches[touch.identifier];
    //                dist = Math.sqrt(Math.pow((touch.screenX - stTouch.x), 2.0)
    //                               + Math.pow((touch.screenY - stTouch.y), 2.0));
    //                
    //                if (dist > MAX_DIST) {
    //                    delete eligibleTouches[touch.identifier];
    //                } else {
    //                    num_valid_touches += 1;
    //                }
    //            }
    //        }
    //        
    //        return num_valid_touches > 0;
    //    }
    //    
    //    /* Remove touches that have become drags.
    //     * This function assumes a minimum drag distance of 15px.
    //     */
    //    $(document).on("touchmove", function (evt) {
    //        testAndPruneTouchList(evt.originalEvent.changedTouches);
    //    });
    //    
    //    /* Remove touches that have cancelled for hardware or OS specific reasons.
    //     */
    //    $(document).on("touchcancel", function (evt) {
    //        var i, touch;
    //        
    //        for (i = 0; i < evt.originalEvent.changedTouches.length; i += 1) {
    //            touch = evt.originalEvent.changedTouches.item(i);
    //            delete eligibleTouches[touch.identifier];
    //        }
    //    });
    //    
    //    /* Our main, extremely complicated event handler.
    //     * We have to track a whole bunch of corner cases, since users expect the
    //     * following out of their navigation structures:
    //     * 
    //     *  1. Hovering over a toggle should open it
    //     *  2. Touching a toggle with a finger should open it
    //     *  3. Clicking on a toggle should navigate to it's link target, as it has
    //     *     already opened from a hover
    //     *  4. Tab-focusing content should cause offcanvas's open/close state to
    //     *     follow through it
    //     *  5. Touches should only be honored if they were not the end of a drag
    //     */
    //    $(document).on("click touchend mouseover", function (evt) {
    //        var i, sentinel = false,
    //            $theToggle = $(evt.target),
    //            $theTarget,
    //            tgtStatus,
    //            tgtState,
    //            $btnParent = $theToggle.parents().filter("[data-toggle='offcanvas']"),
    //            skipToggle = false,
    //            hoverMin = $("body").data("offcanvas-hover-min"),
    //            toggleOptions,
    //            hasEligibleTouches;
    //
    //        logger(evt.type);
    //
    //        focus_click_inquiry = false;
    //
    //        if (hoverMin === undefined) {
    //            hoverMin = 0;
    //        }
    //
    //        if (evt.type === "mouseover") {
    //            if ($(window).width() < hoverMin) {
    //                return;
    //            }
    //        }
    //
    //        if ($theToggle.data("toggle") !== "offcanvas" && $btnParent.length > 0) { //Fixup hits on child text, graphical bits, etc
    //            $theToggle = $btnParent;
    //        }
    //
    //        if (($openTarget === null || $openTarget === undefined || $openTarget.length === 0) && $theToggle.data("toggle") !== "offcanvas") {
    //            return;
    //        }
    //
    //        if (evt.type !== "mouseover" && isInDebounce) {
    //            logger("Processed event (debounced)");
    //            evt.preventDefault();
    //            return;
    //        }
    //        
    //        //Check if any of our touches were actually drags so we can ignore em
    //        if (evt.type === "touchend") {
    //            hasEligibleTouches = testAndPruneTouchList(evt.originalEvent.changedTouches);
    //            
    //            if (!hasEligibleTouches) {
    //                logger("Ignoring touch event as it is the result of a drag");
    //                return;
    //            }
    //        }
    //
    //        toggleOptions = $theToggle.data("toggle-options");
    //        if (toggleOptions !== undefined) {
    //            toggleOptions = toggleOptions.split(" ");
    //        } else {
    //            toggleOptions = [];
    //        }
    //
    //        if (evt.type === "mouseover" && toggleOptions.indexOf("nohover") > -1) {
    //            logger("Not opening a no-hover toggle");
    //            return;
    //        }
    //        
    //        //Used to allow using the <a>nchor portion of a dropdown toggle
    //        //but only after it was opened using a mouse
    //        if ($(window).width() >= hoverMin &&
    //                $theToggle[0].tagName === "A" &&
    //                evt.type === "click" &&
    //                !target_has_touch &&
    //                !click_keydown_inquiry && //and event is not generated by a keyboard
    //                toggleOptions.indexOf("nohover") === -1 &&
    //                toggleOptions.indexOf("nohref") === -1) {
    //
    //            logger("Allowing link to resolve instead of opening toggle");
    //            return;
    //        }
    //
    //        click_keydown_inquiry = false; //clear the "click event was generated by
    //                                     //a keyboard event" flag so the user can
    //                                     //switch back to mouse input
    //        
    //        if ($openTarget !== null && $openTarget !== undefined && $openTarget.length > 0) {
    //            //Determine if it's okay to do anything that might dismiss an offcanvas
    //            //based on this event
    //            tgtState = $openTarget.data("offcanvas-state");
    //            if (tgtState === undefined) {
    //                //This step is needed if the offcanvas elements were deleted and
    //                //recreated behind our back (e.g. because PageTransitions). In that
    //                //case all we can do is drop the current $openTarget entirely.
    //                $openTarget = undefined;
    //            }
    //        }
    //        
    //        if ($theToggle.data("toggle") === "offcanvas") {
    //            $theTarget = initOffcanvasToggle($theToggle);
    //            findParentLevels($theTarget);
    //        }
    //
    //        if (!eventCanDismissOffcanvas($openTarget, $theTarget, evt, $theToggle)) {
    //            return;
    //        }
    //        
    //        logger("Processed event");
    //        
    //        if ($openTarget !== null &&
    //                $openTarget !== undefined &&
    //                $openTarget.length > 0 &&
    //                !$.contains($openTarget[0], evt.target) &&
    //                $openTarget[0] !== evt.target) {
    //            
    //            //Dismiss offcanvas by clicking outside it's area
    //            if ("#" + $openTarget.attr("id") === $theToggle.data("target")) {
    //                skipToggle = true;
    //            }
    //            
    //            if ($theToggle.filter("[data-dismiss='offcanvas']").length > 0) {
    //                logger("Not overridding a click on an existing dismiss button just because the click handler happened to win a race condition");
    //            } else {
    //                logger(tgtState.toggleOptions);
    //                logger(toggleOptions);
    //
    //                enableDebounce();
    //
    //                if ($($theToggle.data("target"))[0] === $openTarget[0]) {
    //                    //If we have clicked on a toggle for the currently open offcanvas, eat the event
    //                    evt.preventDefault();
    //                    evt.stopPropagation();
    //                    evt.stopImmediatePropagation();
    //                }
    //
    //                dismissOffcanvas($openTarget);
    //            }
    //        }
    //
    //        if ($theTarget !== undefined && !skipToggle) { //Open offcanvas via a toggle link
    //            enableDebounce();
    //
    //            tgtState = $theTarget.data("offcanvas-state");
    //
    //            //Determine if a different offcanvas tree is active, and, if so, dismiss it first.
    //            while ($openTarget !== null && $openTarget !== undefined) {
    //                sentinel = $openTarget[0] === $theTarget[0];
    //
    //                for (i = 0; i < tgtState.parents.length; i += 1) {
    //                    if ($openTarget[0] === tgtState.parents[i]) {
    //                        sentinel = true;
    //                        break;
    //                    }
    //                }
    //
    //                if (sentinel) {
    //                    break;
    //                }
    //
    //                dismissOffcanvas($openTarget);
    //            }
    //
    //            if (tgtState.open) {
    //                dismissOffcanvas($theTarget);
    //            } else {
    //                openOffcanvas($theTarget, $theToggle, evt.type);
    //            }
    //
    //            if ($theToggle[0].tagName.toLowerCase() === "a" || $theToggle[0].tagName.toLowerCase() === "button") {
    //                evt.preventDefault();
    //            }
    //        }
    //    });
    //    
    //    /* Another, slightly less complex event handler for dismissing open content
    //     */
    //    $(document).on("click touchend", function (evt) {
    //        var $theToggle = $(evt.target), $theTarget, tgtStatus, tgtState, $btnParent = $theToggle.parents().filter("[data-dismiss='offcanvas']"), skipToggle = false, i, sentinel = false, $toDismiss = $openTarget;
    //
    //        if ($theToggle.data("dismiss") !== "offcanvas" && $btnParent.length > 0) { //Fixup hits on child text, graphical bits, etc
    //            $theToggle = $btnParent;
    //        }
    //
    //        if ($theToggle.data("dismiss") !== "offcanvas") {
    //            return;
    //        }
    //
    //        if (isInDebounce) {
    //            logger("Processed event (debounced)");
    //            evt.preventDefault();
    //            return;
    //        }
    //
    //        enableDebounce();
    //
    //        if ($theToggle.data("target") !== undefined) {
    //            $toDismiss = $($theToggle.data("target"));
    //        }
    //
    //        if ($toDismiss.length > 0) {
    //            dismissOffcanvas($toDismiss);
    //        }
    //        
    //        evt.preventDefault();
    //    });
    //
    //    module.isOffcanvas = isOffcanvas;
    //    module.isChildOffcanvas = isChildOffcanvas;
    //    module.isTopLevelOffcanvas = isTopLevelOffcanvas;
    //    module.initOffcanvas = initOffcanvas;
    //    module.initOffcanvasToggle = initOffcanvasToggle;
    //    module.dismissOpenOffcanvas = dismissOpenOffcanvas;
    //    module.openOffcanvas = openOffcanvas;
    //    module.dismissOffcanvas = dismissOffcanvas;
    //    module.enableDebounce = enableDebounce;
    //    module.switchLoggingMode = switchLoggingMode;
    //
    //    return module;
    //}));
    //
    ///*global define, console, document, window*/
    ///*jslint continue:true*/
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("CommitForm", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.CommitForm = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //    
    //    function CommitForm() {
    //        Behaviors.init(CommitForm, this, arguments);
    //        
    //        this.account_enumeration = this.$elem.data("commitform-account-values");
    //        this.value = this.$elem.parents().find("[data-mapsource]").data("mapsource");
    //        
    //        if (this.value !== undefined) {
    //            this.sfid = this.get_sfid_for_account(this.value);
    //        }
    //        
    //        if (this.sfid !== undefined) {
    //            this.$elem.val(this.sfid);
    //        }
    //    }
    //    
    //    Behaviors.inherit(CommitForm, Behaviors.Behavior);
    //    
    //    CommitForm.QUERY = "[data-commitform-account]";
    //    
    //    CommitForm.prototype.get_sfid_for_account = function (acct_name) {
    //        var k;
    //        
    //        for (k in this.account_enumeration) {
    //            if (this.account_enumeration.hasOwnProperty(k)) {
    //                if (this.account_enumeration[k] === acct_name) {
    //                    return k;
    //                }
    //            }
    //        }
    //    }
    //    
    //    Behaviors.register_behavior(CommitForm);
    //    
    //    module.CommitForm = CommitForm;
    //
    //    return module;
    //}));
    //
    //(function ($) {
    //    "use strict";
    //    
    //    function emulated_menu_governor() {
    //        var navBreak = 992;
    //        
    //        if (window.innerWidth > navBreak) {
    //            $('.body--glazed-nav-mobile').removeClass('body--glazed-nav-mobile').addClass('body--glazed-nav-desktop');
    //        } else {
    //            $('.body--glazed-nav-desktop').removeClass('body--glazed-nav-desktop').addClass('body--glazed-nav-mobile');
    //        }
    //    }
    //    
    //    $(window).on("resize", emulated_menu_governor);
    //    $(document).ready(emulated_menu_governor);
    //}(jQuery));
    //(function ($) {
    //    "use strict";
    //    
    //    function navbar_scroll() {
    //        if ($(document).scrollTop() > 0) {
    //            $("body").removeClass("is-SiteHeader--at_top");
    //            $("body").addClass("is-SiteHeader--scrolled");
    //        } else {
    //            $("body").addClass("is-SiteHeader--at_top");
    //            $("body").removeClass("is-SiteHeader--scrolled");
    //        }
    //        
    //        if ($("#SiteHeader-main_menu").hasClass("is-Offcanvas--open")) {
    //            $("body").removeClass("is-SiteHeader--closed");
    //            $("body").addClass("is-SiteHeader--open");
    //        } else {
    //            $("body").addClass("is-SiteHeader--closed");
    //            $("body").removeClass("is-SiteHeader--open");
    //        }
    //    }
    //    
    //    $(document).on("scroll", function () {
    //        navbar_scroll();
    //    });
    //    
    //    $(document).ready(function () {
    //        $("#SiteHeader-main_menu").on("offcanvas-open offcanvas-dismiss", function () {
    //            navbar_scroll();
    //        });
    //    });
    //    
    //    $(document).ready(navbar_scroll);
    //    navbar_scroll();
    //}(jQuery));
    ///*global define, console*/
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("TheMovementGrid", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.TheMovementGrid = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //    
    //    function MovementGridRotator() {
    //        var deficit, i, max_images = this.max_images();
    //        
    //        Behaviors.init(MovementGridRotator, this, arguments);
    //        
    //        this.$items = this.$elem.find("li");
    //        this.rotation_index = 0;
    //        
    //        if (this.$items.length < max_images) {
    //            deficit = 1 + max_images - this.$items.length;
    //            for (i = 0; i < deficit; i += 1) {
    //                this.$items.parent().append($(this.$items.get(i)).clone());
    //                this.$items = this.$elem.find("li");
    //            }
    //        }
    //        
    //        this.shown_bucket = [];
    //        this.unshown_queue = [];
    //        
    //        this.aspect_ratios = [];
    //        this.$items.each(function (index, elem) {
    //            var $elem = $(elem), iar = $elem.width() / $elem.height();
    //            
    //            if (isNaN(iar)) {
    //                this.aspect_ratios.push(1);
    //                $elem.on("load", function () {
    //                    iar = $elem.width() / $elem.height();
    //                    this.aspect_ratios[index] = iar;
    //                });
    //            } else {
    //                this.aspect_ratios.push(iar);
    //            }
    //            
    //            $elem.data("themovementgrid-rotator-itemindex", index);
    //        }.bind(this));
    //        
    //        this.rotate_start();
    //        $(window).on("resize", this.resize_intent.bind(this));
    //    }
    //    
    //    Behaviors.inherit(MovementGridRotator, Behaviors.Behavior);
    //    
    //    MovementGridRotator.QUERY = "[data-themovementgrid-rotator]";
    //    MovementGridRotator.MSEC_BETWEEN_IMAGES = 1000;
    //    
    //    MovementGridRotator.settings = {
    //        0: {
    //            MIN_VIEWPORT: 0,
    //            MAX_IMAGES_AT_ONCE: 6,
    //            VERTICAL_COUNT: 2,
    //            HORIZONTAL_COUNT: 3,
    //        },
    //        768: {
    //            MIN_VIEWPORT: 768,
    //            MAX_IMAGES_AT_ONCE: 8,
    //            VERTICAL_COUNT: 2,
    //            HORIZONTAL_COUNT: 4,
    //        },
    //        992: {
    //            MIN_VIEWPORT: 992,
    //            MAX_IMAGES_AT_ONCE: 12,
    //            VERTICAL_COUNT: 2,
    //            HORIZONTAL_COUNT: 6,
    //        }
    //    }
    //    
    //    /**
    //     * Get the highest possible images that could ever be shown on this grid at
    //     * any viewport width.
    //     */
    //    MovementGridRotator.prototype.max_images = function (viewport) {
    //        var k, max = 0;
    //        
    //        for (k in this.constructor.settings) {
    //            if (this.constructor.settings.hasOwnProperty(k)) {
    //                max = Math.max(max, this.constructor.settings[k].MAX_IMAGES_AT_ONCE);
    //            }
    //        }
    //        
    //        return max;
    //    }
    //    
    //    /**
    //     * Get the settings for a given viewport.
    //     */
    //    MovementGridRotator.prototype.viewport_settings = function (viewport) {
    //        var k, last_k = 0;
    //        
    //        for (k in this.constructor.settings) {
    //            if (this.constructor.settings.hasOwnProperty(k)) {
    //                if (k <= viewport) {
    //                    last_k = k;
    //                }
    //            }
    //        }
    //        
    //        return this.constructor.settings[last_k];
    //    }
    //    
    //    /* Randomly select a position and size bounded by the dimensions of the
    //     * rotator element.
    //     */
    //    MovementGridRotator.prototype.position_item = function ($item, index, $replacing) {
    //        var w = this.$elem.width(), h = this.$elem.height(), ar = w / h,
    //            idx = $item.data("themovementgrid-rotator-itemindex"),
    //            iar = this.aspect_ratios[idx], iw, ih, ix, iy,
    //            vcount = this.current_settings.VERTICAL_COUNT,
    //            hcount = this.current_settings.HORIZONTAL_COUNT;
    //        
    //        if ($replacing === undefined) {
    //            //Select a new item size, around 20% of the screen. The longer of the
    //            //image's width or height will be set to that random value and the
    //            //shorter will be set to match the original aspect ratio.
    //
    //            if (iar > 1) {
    //                iw = 1 / hcount;
    //                ih = iw * w / iar / h;
    //            } else {
    //                ih = 1 / vcount;
    //                iw = ih * h * iar / w;
    //            }
    //            
    //            //Now select a position that will keep the image within the bounds of
    //            //the container.
    //            ix = (index % hcount) / hcount;
    //            iy = Math.floor(index / hcount) % vcount / vcount;
    //            
    //            $item.css("width", iw * 100 + "%");
    //            $item.css("height", ih * 100 + "%");
    //            $item.css("left", ix * 100 + "%");
    //            $item.css("top", iy * 100 + "%");
    //        } else {
    //            $item.css("width", $replacing.css("width"));
    //            $item.css("height", $replacing.css("height"));
    //            $item.css("left", $replacing.css("left"));
    //            $item.css("top", $replacing.css("top"));
    //        }
    //    };
    //    
    //    MovementGridRotator.prototype.update_item_classes = function ($elem, isShown) {
    //        var $img = $elem.find("img");
    //        
    //        if (isShown) {
    //            $elem.removeClass("is-TheMovementGrid--unshown");
    //            $elem.addClass("is-TheMovementGrid--shown");
    //            $img.attr("src", $img.data("src"));
    //        } else {
    //            $elem.addClass("is-TheMovementGrid--unshown");
    //            $elem.removeClass("is-TheMovementGrid--shown");
    //        }
    //    };
    //    
    //    MovementGridRotator.prototype.preload = function ($elem) {
    //        var $img = $elem.find("img");
    //        $img.attr("src", $img.data("src"));
    //    };
    //    
    //    MovementGridRotator.prototype.rotate_start = function () {
    //        var i = 0;
    //        
    //        this.rotation_index = 0;
    //        this.current_settings = this.viewport_settings(window.innerWidth);
    //        
    //        this.$items.each(function (index, elem) {
    //            var $elem = $(elem);
    //            
    //            $elem.css("opacity", 0);
    //            this.unshown_queue.push($elem);
    //            this.update_item_classes($elem, false);
    //        }.bind(this));
    //        
    //        for (i = 0; i < Math.min(this.$items.length, this.current_settings.MAX_IMAGES_AT_ONCE); i += 1) {
    //            this.rotate_next();
    //        }
    //        
    //        if (this.rotate_timeout !== undefined) {
    //            window.clearTimeout(this.rotate_timeout);
    //        }
    //        
    //        this.rotate_timeout = window.setTimeout(this.rotate_tick.bind(this), this.constructor.MSEC_BETWEEN_IMAGES);
    //    };
    //    
    //    MovementGridRotator.prototype.rotate_next = function () {
    //        var last_index, $last,
    //            $next = this.unshown_queue.shift();
    //        
    //        this.preload(this.unshown_queue[0]);
    //        
    //        $next.css("z-index", this.rotation_index);
    //        $next.css("opacity", 1);
    //        
    //        if (this.rotation_index >= this.current_settings.MAX_IMAGES_AT_ONCE) {
    //            last_index = Math.floor(Math.random() * Math.min(this.shown_bucket.length, 4));
    //            $last = this.shown_bucket[last_index];
    //            
    //            $last.css("opacity", 0);
    //            this.position_item($next, 0, $last);
    //            
    //            this.shown_bucket.splice(last_index, 1);
    //            this.unshown_queue.push($last);
    //            this.update_item_classes($last, false);
    //        } else {
    //            this.position_item($next, this.rotation_index % this.current_settings.MAX_IMAGES_AT_ONCE);
    //        }
    //        
    //        this.shown_bucket.push($next);
    //        this.update_item_classes($next, true);
    //        
    //        this.rotation_index += 1;
    //    };
    //    
    //    MovementGridRotator.prototype.rotate_end = function () {
    //        this.$items.css("opacity", 0);
    //        this.$items.css("z-index", 0);
    //        this.rotation_index = 0;
    //        
    //        this.shown_bucket = [];
    //        this.unshown_queue = [];
    //        
    //        window.clearTimeout(this.rotate_timeout);
    //    };
    //    
    //    MovementGridRotator.prototype.rotate_tick = function () {
    //        this.rotate_next();
    //        
    //        this.rotate_timeout = window.setTimeout(this.rotate_tick.bind(this), this.constructor.MSEC_BETWEEN_IMAGES);
    //    };
    //    
    //    MovementGridRotator.prototype.resize_intent = function () {
    //        var new_settings = this.viewport_settings(window.innerWidth);
    //        
    //        if (new_settings.MIN_VIEWPORT !== this.current_settings.MIN_VIEWPORT) {
    //            this.rotate_end();
    //            this.current_settings = new_settings;
    //            this.rotate_start();
    //        }
    //    };
    //    
    //    Behaviors.register_behavior(MovementGridRotator);
    //    
    //    module.MovementGridRotator = MovementGridRotator;
    //    
    //    return module;
    //}));
    //
    ///*global define, window, document, Promise*/
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("VideoPlayer", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.VideoPlayer = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //
    //    function VideoPlayer(elem) {
    //        Behaviors.init(VideoPlayer, this, arguments);
    //
    //        this.$elem = $(elem);
    //        
    //        if (this.ready) {
    //            this.ready().then(this.locate_children.bind(this));
    //        } else {
    //            this.locate_children();
    //        }
    //    }
    //
    //    Behaviors.inherit(VideoPlayer, Behaviors.Behavior);
    //
    //    /* Returns a promise which resolves when the player is ready to accept
    //     * other API calls.
    //     *
    //     * Calling those other API calls outside of a then() block from the promise
    //     * returned by this function is a good way to have a bad time.
    //     *
    //     * By default, the video player is always ready.
    //     */
    //    VideoPlayer.prototype.ready = function () {
    //        return new Promise(function (resolve, reject) {
    //            resolve();
    //        });
    //    };
    //
    //    //No QUERY is defined for the base VideoPlayer class as it is not intended
    //    //to be locatable. Derived classes should locate their VideoPlayer subclass
    //    //once it's attendant APIs have been loaded.
    //    //VideoPlayer.QUERY = "";
    //
    //    VideoPlayer.prototype.locate_children = function () {
    //        var $parent_modal, $parent_hover;
    //        
    //        this.playpause = VideoPlayer_playpause.find_markup(this.$elem, this);
    //        this.scrubbers = VideoPlayer_scrubber.find_markup(this.$elem, this);
    //        this.mute_btns = VideoPlayer_mute.find_markup(this.$elem, this);
    //        
    //        //This is an example of how to locate upwards
    //        $parent_modal = this.$elem.parents().filter(VideoPlayer_offcanvas.QUERY);
    //        
    //        if ($parent_modal.length > 0) {
    //            this.modal = VideoPlayer_offcanvas.locate($parent_modal[0], this);
    //        }
    //        
    //        $parent_hover = this.$elem.parents().filter(VideoPlayer_hover.QUERY);
    //        
    //        if ($parent_hover.length > 0) {
    //            this.hover = VideoPlayer_hover.locate($parent_hover[0], this);
    //        }
    //        
    //        //Now see if we're supposed to autoplay...
    //        if (this.$elem.data("videoplayer-autoplay") !== undefined) {
    //            this.play();
    //        }
    //        
    //        if (this.$elem.data("videoplayer-loop") !== undefined) {
    //            this.add_statechange_listener(this.loopcheck.bind(this));
    //        }
    //    };
    //    
    //    VideoPlayer.prototype.loopcheck = function () {
    //        Promise.all([this.is_paused(), this.get_current_time(), this.get_duration()]).then(function (values) {
    //            var is_paused = values[0];
    //            var current_time = values[1];
    //            var duration = values[2];
    //            
    //            if (current_time === duration) {
    //                this.seek(0);
    //                this.play();
    //            }
    //        }.bind(this));
    //    };
    //
    //    /* Determine if the video player is active.
    //     *
    //     * Most keyboard events only process on the active video's controls, not
    //     * other videos. This ensures that you can have multiple VideoPlayers
    //     * running without them all being controlled by the same limited set of
    //     * keyboard shortcuts.
    //     *
    //     * A video player is active if any of the following apply:
    //     *
    //     *  - The video is marked primary with [data-videoplayer-primary].
    //     *  - The video is currently playing.
    //     *  - The VideoPlayer element or one of it's children has keyboard focus.
    //     * 
    //     * This function returns a promise which resolves to the return value.
    //     */
    //    VideoPlayer.prototype.is_active = function () {
    //        return this.is_paused(function (is_paused) {
    //            if (this.$elem.data("videoplayer-primary") !== undefined) {
    //                return true;
    //            }
    //
    //            if (!is_paused) {
    //                return true;
    //            }
    //
    //            if (this.$elem.find(":focus").length > 0) {
    //                return true;
    //            }
    //
    //            return false;
    //        }.bind(this));
    //    };
    //
    //    /* Serves as a play/pause button for a connected VideoPlayer.
    //     */
    //    function VideoPlayer_playpause(elem, parent) {
    //        var that = this;
    //
    //        Behaviors.init(VideoPlayer_playpause, that, arguments);
    //
    //        that.parent = parent;
    //
    //        that.parent.ready().then(function () {
    //            that.parent.add_statechange_listener(that.on_statechange.bind(that));
    //            that.$elem.on("click touchend", that.on_play_intent.bind(that));
    //
    //            that.update_css_classes();
    //        });
    //    }
    //
    //    Behaviors.inherit(VideoPlayer_playpause, Behaviors.Behavior);
    //
    //    VideoPlayer_playpause.QUERY = "[data-videoplayer-playpause]";
    //
    //    VideoPlayer_playpause.prototype.update_css_classes = function () {
    //        this.parent.is_paused().then(function (is_paused) {
    //            if (is_paused) {
    //                this.$elem.addClass("is-VideoPlayer--paused");
    //                this.$elem.removeClass("is-VideoPlayer--playing");
    //            } else {
    //                this.$elem.removeClass("is-VideoPlayer--paused");
    //                this.$elem.addClass("is-VideoPlayer--playing");
    //            }
    //        }.bind(this));
    //    };
    //
    //    VideoPlayer_playpause.prototype.toggle_playback = function () {
    //        this.parent.is_paused().then(function (is_paused) {
    //            if (is_paused) {
    //                this.parent.play();
    //            } else {
    //                this.parent.pause();
    //            }
    //        }.bind(this));
    //    };
    //
    //    VideoPlayer_playpause.prototype.on_statechange = function () {
    //        this.update_css_classes();
    //    };
    //
    //    VideoPlayer_playpause.prototype.on_play_intent = function () {
    //        this.toggle_playback();
    //    };
    //
    //    /* Allows a video modal to be started and stopped as the modal is opened
    //     * and closed.
    //     * 
    //     * Place this on the Offcanvas element that gets dismissed and/or opened.
    //     */
    //    function VideoPlayer_offcanvas(elem, parent) {
    //        var that = this;
    //
    //        Behaviors.init(VideoPlayer_offcanvas, that, arguments);
    //
    //        that.parent = parent;
    //
    //        that.$elem.on("offcanvas-open", that.on_open_intent.bind(that));
    //        that.$elem.on("offcanvas-dismiss", that.on_dismiss_intent.bind(that));
    //    }
    //
    //    Behaviors.inherit(VideoPlayer_offcanvas, Behaviors.Behavior);
    //
    //    VideoPlayer_offcanvas.QUERY = "[data-videoplayer-offcanvas]";
    //
    //    VideoPlayer_offcanvas.prototype.on_open_intent = function () {
    //        var that = this;
    //
    //        that.parent.is_paused().then(function (is_paused) {
    //            if (is_paused) {
    //                that.parent.play();
    //            }
    //        });
    //    };
    //
    //    VideoPlayer_offcanvas.prototype.on_dismiss_intent = function () {
    //        var that = this;
    //
    //        that.parent.is_paused().then(function (is_paused) {
    //            if (!is_paused) {
    //                that.parent.pause();
    //            }
    //        });
    //    };
    //
    //    /* Allows a video modal to be started and stopped based on the hover state
    //     * of an element. Won't work on mobile.
    //     * 
    //     * Place this on the element that gets hovered.
    //     */
    //    function VideoPlayer_hover(elem, parent) {
    //        var that = this;
    //
    //        Behaviors.init(VideoPlayer_hover, that, arguments);
    //
    //        that.parent = parent;
    //
    //        that.$elem.on("mouseenter", that.on_hover_intent.bind(that));
    //        that.$elem.on("mouseleave", that.on_leave_intent.bind(that));
    //    }
    //
    //    Behaviors.inherit(VideoPlayer_hover, Behaviors.Behavior);
    //
    //    VideoPlayer_hover.QUERY = "[data-videoplayer-hover]";
    //
    //    VideoPlayer_hover.prototype.on_hover_intent = function () {
    //        var that = this;
    //
    //        that.parent.is_paused().then(function (is_paused) {
    //            if (is_paused) {
    //                that.parent.play();
    //            }
    //        });
    //    };
    //
    //    VideoPlayer_hover.prototype.on_leave_intent = function () {
    //        var that = this;
    //
    //        that.parent.is_paused().then(function (is_paused) {
    //            if (!is_paused) {
    //                that.parent.pause();
    //            }
    //        });
    //    };
    //
    //    /* Serves as a scrub bar for a connected VideoPlayer.
    //     *
    //     * A Scrubber contains additional elements inside of it that do not have an
    //     * associated behavior:
    //     *
    //     *  - [data-videoplayer-scrubberfill]: The filled range of the scrubber.
    //     *  - [data-videoplayer-scrubberknob]: A knob which indicates the current
    //     *     scrubber point.
    //     */
    //    function VideoPlayer_scrubber(elem, parent) {
    //        var err, that = this;
    //
    //        Behaviors.init(VideoPlayer_scrubber, that, arguments);
    //
    //        that.parent = parent;
    //
    //        //EVENT STATE VARIABLES
    //        that.is_dragging = false;
    //        that.in_debounce = false;
    //
    //        //OPTIONAL COMPONENTS
    //        that.$scrubfill = that.$elem.find("[data-videoplayer-scrubberfill]");
    //        that.$scrubknob = that.$elem.find("[data-videoplayer-scrubberknob]");
    //
    //        that.parent.ready().then(function () {
    //            //EVENT HANDLERS
    //            that.$elem.on("mousedown touchstart", that.on_dragstart_intent.bind(that));
    //            that.$elem.on("mousemove touchmove", that.on_drag_intent.bind(that));
    //            $(document).on("mouseup touchend touchcancel", that.on_dragend_intent.bind(that));
    //            $(document).on("keydown", that.on_keyboard_nav.bind(that));
    //
    //            err = that.parent.add_timeupdate_listener(that.on_timeupdate.bind(that));
    //            if (err === false) {
    //                window.setInterval(that.on_timeupdate.bind(that), 1000);
    //            }
    //        });
    //
    //        that.update_scrubber();
    //    }
    //
    //    Behaviors.inherit(VideoPlayer_scrubber, Behaviors.Behavior);
    //
    //    VideoPlayer_scrubber.QUERY = "[data-videoplayer-scrubber]";
    //
    //    VideoPlayer_scrubber.prototype.css_percent = function (value) {
    //        return (value * 100) + "%";
    //    };
    //
    //    /* This defines the dynamic CSS properties that are applied to scrubber
    //     * elements.
    //     *
    //     * Specifically, fills get a width equal to the current play percentage;
    //     * knobs get a left position equal to the current play percentage.
    //     *
    //     * This assumes knobs and fills get positioned relative to the scrubber.
    //     */
    //    VideoPlayer_scrubber.prototype.update_scrubber = function () {
    //        var that = this, currentTime, ratio;
    //        
    //        that.parent.ready().then(function () {
    //            return that.parent.get_current_time();
    //        }.bind(this)).then(function (newCurrentTime) {
    //            currentTime = newCurrentTime;
    //            return that.parent.get_duration();
    //        }.bind(this)).then(function (duration) {
    //            ratio = 0;
    //
    //            if (!isFinite(duration)) {
    //                //Livestreams always show as complete.
    //                ratio = 1;
    //            } else if (!isNaN(duration)) {
    //                ratio = currentTime / duration;
    //            }
    //
    //            that.$scrubfill.css("width", that.css_percent(ratio));
    //            that.$scrubknob.css("left", that.css_percent(ratio));
    //        });
    //    };
    //
    //    /* Given an X coordinate, calculate the corresponding video seek time and
    //     * return it.
    //     *
    //     * Input is in page co-ordinates. Input is scaled to output based on the
    //     * CSS width and position of the scrubber. Output is bounded within the
    //     * closed range [0, 1].
    //     * 
    //     * Returns a promise with the correct seek time.
    //     */
    //    VideoPlayer_scrubber.prototype.mouse_to_ctime = function (page_x) {
    //        return this.parent.get_duration().then(function (duration) {
    //            return (page_x - this.$elem.offset().left) / this.$elem.width() * duration;
    //        }.bind(this));
    //    };
    //
    //    /* Seek the parent player, but only if the proposed new time is valid.
    //     */
    //    VideoPlayer_scrubber.prototype.seek_if_valid = function (newTime, isFinal) {
    //        if (isNaN(newTime) || !isFinite(newTime)) {
    //            return;
    //        }
    //
    //        this.parent.seek(newTime, isFinal);
    //    };
    //
    //    // Drag event filtering
    //
    //    /* Start a drag operation; configuring the event filtering machinery to
    //     * only recognize the click or touch that started the event chain.
    //     */
    //    VideoPlayer_scrubber.prototype.start_drag = function (evt) {
    //        this.is_dragging = true;
    //
    //        if (evt.changedTouches !== undefined && evt.changedTouches.length > 0) {
    //            this.drag_touch_id = evt.changedTouches[0].identifier;
    //            return evt.changedTouches[0].pageX;
    //        } else {
    //            this.drag_touch_id = undefined;
    //            return evt.pageX;
    //        }
    //    };
    //
    //    /* Retrieves the Page X coordinate from an event, ensuring that the correct
    //     * finger is tracked across the entire event chain.
    //     *
    //     * Events will be ignored, and FALSE returned, if the event type that
    //     * started the drag does not match the given event; or, if it's a touch
    //     * event type, it will be ignored if there is no touch matching the current
    //     * one.
    //     */
    //    VideoPlayer_scrubber.prototype.validate_drag = function (evt) {
    //        var i;
    //
    //        if (this.is_dragging) {
    //            if (this.drag_touch_id !== undefined) {
    //                if (evt.changedTouches !== undefined) {
    //                    for (i = 0; i < evt.changedTouches.length; i += 1) {
    //                        if (evt.changedTouches[i].identifier === this.drag_touch_id) {
    //                            return evt.changedTouches[i].pageX;
    //                        }
    //                    }
    //                }
    //            } else {
    //                if (evt.changedTouches === undefined) {
    //                    return evt.pageX;
    //                }
    //            }
    //        }
    //
    //        return false;
    //    };
    //
    //    /* Retrieves the Page X coordinate from an event and turns off further drag
    //     * processing.
    //     *
    //     * For the same reasons as validate_drag, non-matching events will not
    //     * cancel drag processing. This function returns FALSE if this event was
    //     * ignored.
    //     */
    //    VideoPlayer_scrubber.prototype.end_drag = function (evt) {
    //        var px = this.validate_drag(evt);
    //        if (px === false) {
    //            return px;
    //        }
    //
    //        this.is_dragging = false;
    //        this.drag_touch_id = undefined;
    //
    //        return px;
    //    };
    //
    //    /* Process a drag event given the incoming Page X.
    //     *
    //     * If FALSE is given, indicating an event filtered by validate_drag, this
    //     * does nothing.
    //     */
    //    VideoPlayer_scrubber.prototype.handle_drag = function (pageX, final) {
    //        var newtime;
    //
    //        if (pageX === false) {
    //            return;
    //        }
    //
    //        return this.mouse_to_ctime(pageX).then(function (newtime) {
    //            this.seek_if_valid(newtime, final);
    //            this.update_scrubber();
    //        }.bind(this));
    //    };
    //
    //    // Event handlers
    //
    //    VideoPlayer_scrubber.prototype.on_timeupdate = function () {
    //        this.update_scrubber();
    //    };
    //
    //    VideoPlayer_scrubber.prototype.on_dragstart_intent = function (evt) {
    //        this.handle_drag(this.start_drag(evt), false);
    //    };
    //
    //    VideoPlayer_scrubber.prototype.on_drag_intent = function (evt) {
    //        this.handle_drag(this.validate_drag(evt), false);
    //    };
    //
    //    VideoPlayer_scrubber.prototype.on_dragend_intent = function (evt) {
    //        this.handle_drag(this.end_drag(evt), true);
    //    };
    //
    //    VideoPlayer_scrubber.prototype.on_keyboard_nav = function (evt) {
    //        var currentTime;
    //        
    //        this.parent.ready().then(function () {
    //            return this.parent.get_current_time();
    //        }.bind(this)).then(function (newCurrentTime) {
    //            currentTime = newCurrentTime;
    //            return this.parent.is_active();
    //        }.bind(this)).then(function (is_active) {
    //            if (!is_active) {
    //                return;
    //            }
    //            
    //            if (evt.keyCode === 37) { //LEFT
    //                evt.preventDefault();
    //                this.parent.seek(currentTime - 1.0);
    //                this.update_scrubber();
    //            } else if (evt.keyCode === 39) { // RIGHT
    //                evt.preventDefault();
    //                this.parent.seek(currentTime + 1.0);
    //                this.update_scrubber();
    //            }
    //        });
    //    };
    //
    //    /* Serves as a play/pause button for a connected VideoPlayer.
    //     */
    //    function VideoPlayer_mute(elem, parent) {
    //        var that = this;
    //        
    //        Behaviors.init(VideoPlayer_mute, that, arguments);
    //
    //        that.parent = parent;
    //
    //        that.parent.ready().then(function () {
    //            that.$elem.on("click touchend", that.on_mute_intent.bind(that));
    //
    //            that.update_css_classes();
    //        });
    //    }
    //
    //    Behaviors.inherit(VideoPlayer_mute, Behaviors.Behavior);
    //
    //    VideoPlayer_mute.QUERY = "[data-videoplayer-mute]";
    //
    //    VideoPlayer_mute.prototype.update_css_classes = function () {
    //        this.parent.is_muted().then(function (is_muted) {
    //            if (is_muted) {
    //                this.$elem.addClass("is-VideoPlayer--muted");
    //                this.$elem.removeClass("is-VideoPlayer--audible");
    //            } else {
    //                this.$elem.removeClass("is-VideoPlayer--muted");
    //                this.$elem.addClass("is-VideoPlayer--audible");
    //            }
    //        }.bind(this));
    //    };
    //
    //    VideoPlayer_mute.prototype.toggle_mute = function () {
    //        this.parent.is_muted().then(function (is_muted) {
    //            if (is_muted) {
    //                this.parent.unmute();
    //            } else {
    //                this.parent.mute();
    //            }
    //        }.bind(this));
    //    };
    //
    //    VideoPlayer_mute.prototype.on_mute_intent = function () {
    //        this.toggle_mute();
    //        this.update_css_classes();
    //    };
    //
    //    // Player API adaptations
    //
    //
    //    /* Thin implementation for a VideoPlayer that consumes an HTML5 video
    //     * directly. Also provides a good demonstration that the VideoPlayer APIs
    //     * are a very thin wrapper over HTMLMediaElement.
    //     */
    //    function VideoPlayer__html5(elem) {
    //        this.$video = $(elem).find("video");
    //
    //        Behaviors.init(VideoPlayer__html5, this, arguments);
    //    }
    //
    //    Behaviors.inherit(VideoPlayer__html5, VideoPlayer);
    //
    //    VideoPlayer__html5.QUERY = "[data-videoplayer='html5']";
    //
    //    /* Plays the video, if loaded.
    //     */
    //    VideoPlayer__html5.prototype.play = function () {
    //        this.$video[0].play();
    //    };
    //
    //    /* Pauses the video.
    //     */
    //    VideoPlayer__html5.prototype.pause = function () {
    //        this.$video[0].pause();
    //    };
    //
    //    /* Mute the video
    //     */
    //    VideoPlayer__html5.prototype.mute = function () {
    //        this.$video[0].muted = true;
    //    };
    //
    //    /* Unmute the video
    //     */
    //    VideoPlayer__html5.prototype.unmute = function () {
    //        this.$video[0].muted = false;
    //    };
    //
    //    /* Returns the current player position.
    //     * 
    //     * This function returns a promise which resolves to the current time.
    //     */
    //    VideoPlayer__html5.prototype.get_current_time = function () {
    //        return Promise.resolve(this.$video[0].currentTime);
    //    };
    //
    //    /* Seek the video to the number of seconds indicated in time.
    //     */
    //    VideoPlayer__html5.prototype.seek = function (time) {
    //        this.$video[0].currentTime = time;
    //    };
    //
    //    /* Check the video's duration.
    //     *
    //     * Returns the media's length in seconds.
    //     *
    //     * NaN is returned if the duration is unknown (check with isNaN).
    //     * Infinity is returned if this is a streaming video.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__html5.prototype.get_duration = function () {
    //        return Promise.resolve(this.$video[0].duration);
    //    };
    //
    //    /* Check if the video is paused.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__html5.prototype.is_paused = function () {
    //        return Promise.resolve(this.$video[0].paused);
    //    };
    //
    //    /* Check if the video is muted.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__html5.prototype.is_muted = function () {
    //        return Promise.resolve(this.$video[0].muted);
    //    };
    //
    //    /* Check the volume of the video.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__html5.prototype.get_volume = function () {
    //        return Promise.resolve(this.$video[0].volume);
    //    };
    //
    //    /* Register an event handler for changes to the video's playback state.
    //     *
    //     * This corresponds exactly to matching the playing, play, and pause events
    //     * and other video service APIs should ensure their event handler triggers
    //     * on similar conditions.
    //     */
    //    VideoPlayer__html5.prototype.add_statechange_listener = function (listen) {
    //        this.$video.on("playing play pause", listen);
    //    };
    //
    //    /* Register an event handler for changes to the video's playback time.
    //     *
    //     * This corresponds to the timeupdate event on HTMLMediaElement. This event
    //     * is permitted not to register an event if it returns FALSE, indicating
    //     * that timeupdates are not provided by this player type.
    //     */
    //    VideoPlayer__html5.prototype.add_timeupdate_listener = function (listen) {
    //        this.$video.on("timeupdate", listen);
    //    };
    //
    //    /* This VideoPlayer consumes a YouTube iframe using the YouTube API.
    //     * See https://developers.google.com/youtube/iframe_api_reference
    //     */
    //    function VideoPlayer__youtube(elem) {
    //        var that = this;
    //
    //        Behaviors.init(VideoPlayer__youtube, that, arguments);
    //
    //        this.$iframe = $(elem).find("iframe");
    //        this.id = this.$iframe.attr("id");
    //        if (this.id === undefined) {
    //            //Randomly generate an ID if one was not provided.
    //            this.id = "VideoPlayer-random_id--" + Math.random() * 1024 * 1024;
    //            this.$iframe.attr("id", this.id);
    //        }
    //
    //        this.player_fully_loaded = false;
    //    }
    //
    //    Behaviors.inherit(VideoPlayer__youtube, VideoPlayer);
    //
    //    VideoPlayer__youtube.QUERY = "[data-videoplayer='youtube']";
    //
    //    /* Install the YouTube API, if not already installed.
    //     *
    //     * This is an asynchronous operation, so we return a Promise that resolves
    //     * when YouTube's API is available. Invocation works like so:
    //     *
    //     * VideoPlayer__youtube.api().then(function () {
    //     *     //do stuff...
    //     * })
    //     */
    //    VideoPlayer__youtube.api = function () {
    //        if (VideoPlayer__youtube.install_promise === undefined) {
    //            VideoPlayer__youtube.install_promise = new Promise(function (resolve, reject) {
    //                var tag, firstScriptTag;
    //
    //                tag = document.createElement("script");
    //                tag.src = "https://www.youtube.com/iframe_api";
    //                firstScriptTag = document.getElementsByTagName('script')[0];
    //                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //
    //                window.onYouTubeIframeAPIReady = VideoPlayer__youtube.api_ready_handler(resolve, reject);
    //            });
    //        }
    //
    //        return VideoPlayer__youtube.install_promise;
    //    };
    //
    //    /* Creates the function that gets called when the YouTube API is ready.
    //     */
    //    VideoPlayer__youtube.api_ready_handler = function (resolve, reject) {
    //        return function () {
    //            resolve();
    //        };
    //    };
    //
    //    /* Returns a promise which resolves when the player is ready to accept
    //     * other API calls.
    //     *
    //     * Calling those other API calls outside of a then() block from the promise
    //     * returned by this function is a good way to have a bad time.
    //     */
    //    VideoPlayer__youtube.prototype.ready = function () {
    //        var that = this;
    //        
    //        if (that.ready_promise === undefined) {
    //            that.ready_promise = VideoPlayer__youtube.api().then(function () {
    //                that.player = new window.YT.Player(that.id, {
    //                    "playerVars": {
    //                        "enablejsapi": true
    //                    }
    //                });
    //
    //                return new Promise(function (resolve, reject) {
    //                    if (that.player_fully_loaded) {
    //                        resolve();
    //                    } else {
    //                        that.player.addEventListener("onReady", function () {
    //                            that.player_fully_loaded = true;
    //                            resolve();
    //                        });
    //                    }
    //                });
    //            });
    //        }
    //        
    //        return that.ready_promise;
    //    };
    //
    //    /* Plays the video, if loaded.
    //     */
    //    VideoPlayer__youtube.prototype.play = function () {
    //        this.ready().then(function () {
    //            this.player.playVideo();
    //        }.bind(this));
    //    };
    //
    //    /* Pauses the video.
    //     */
    //    VideoPlayer__youtube.prototype.pause = function () {
    //        this.ready().then(function () {
    //            this.player.pauseVideo();
    //        }.bind(this));
    //    };
    //
    //    /* Mute the video
    //     */
    //    VideoPlayer__youtube.prototype.mute = function () {
    //        this.ready().then(function () {
    //            this.player.mute();
    //        }.bind(this));
    //    };
    //
    //    /* Unmute the video
    //     */
    //    VideoPlayer__youtube.prototype.unmute = function () {
    //        this.ready().then(function () {
    //            this.player.unMute();
    //        }.bind(this));
    //    };
    //
    //    /* Returns the current player position.
    //     * 
    //     * This function returns a promise which resolves to the current time.
    //     */
    //    VideoPlayer__youtube.prototype.get_current_time = function () {
    //        return this.ready().then(function () {
    //            return this.player.getCurrentTime();
    //        }.bind(this));
    //    };
    //
    //    /* Seek the video to the number of seconds indicated in time.
    //     *
    //     * The seek_commit parameter should be FALSE if and only if the seek
    //     * resulted from a mousedrag and you expect to get more seek operations.
    //     */
    //    VideoPlayer__youtube.prototype.seek = function (time, seek_commit) {
    //        return this.ready().then(function () {
    //            return this.player.seekTo(time, seek_commit);
    //        }.bind(this));
    //    };
    //
    //    /* Check the video's duration.
    //     *
    //     * Returns the media's length in seconds.
    //     *
    //     * NaN is returned if the duration is unknown (check with isNaN).
    //     * Infinity is returned if this is a streaming video.
    //     *
    //     * SPEC VIOLATION: YouTube does not indicate if the player is playing a
    //     * live event, so live-streaming players will have incorrect duration info.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__youtube.prototype.get_duration = function () {
    //        return this.ready().then(function () {
    //            var duration = this.player.getDuration();
    //
    //            if (duration === 0) {
    //                return NaN;
    //            }
    //
    //            return duration;
    //        }.bind(this));
    //    };
    //
    //    /* Check if the video is paused.
    //     *
    //     * TODO: We naively interpret YouTube's player state, does player state 2
    //     * correspond to HTMLMediaElement/VideoPlayer__html5's .paused attribute?
    //     * Or are there other player states that count as paused by HTML5?
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__youtube.prototype.is_paused = function () {
    //        return this.ready().then(function () {
    //            var ps = this.player.getPlayerState();
    //            return ps === 2 || ps === -1 || ps === 5;
    //        }.bind(this));
    //    };
    //
    //    /* Check if the video is muted.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__youtube.prototype.is_muted = function () {
    //        return this.ready().then(function () {
    //            return this.player.isMuted();
    //        }.bind(this));
    //    };
    //
    //    /* Check the volume of the video.
    //     *
    //     * YouTube works in percentage units for some reason.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__youtube.prototype.get_volume = function () {
    //        return this.ready().then(function () {
    //            return this.player.getVolume() / 100;
    //        }.bind(this));
    //    };
    //
    //    /* Register an event handler for changes to the video's playback state.
    //     *
    //     * This corresponds exactly to matching the playing, play, and pause events
    //     * and other video service APIs should ensure their event handler triggers
    //     * on similar conditions.
    //     */
    //    VideoPlayer__youtube.prototype.add_statechange_listener = function (listen) {
    //        this.ready().then(function () {
    //            this.player.addEventListener("onStateChange", listen);
    //        }.bind(this));
    //    };
    //
    //    /* Register an event handler for changes to the video's playback time.
    //     *
    //     * YouTube doesn't have this event type for some reason.
    //     */
    //    VideoPlayer__youtube.prototype.add_timeupdate_listener = function (listen) {
    //        return false;
    //    };
    //
    //    VideoPlayer__youtube.content_ready = function ($context) {
    //        var Class = this;
    //
    //        if ($context.find(Class.QUERY).length > 0) {
    //            Class.api().then(function () {
    //                Class.find_markup($context);
    //            });
    //        }
    //    };
    //    
    //    /* This VideoPlayer consumes a Vimeo iframe using their player controller.
    //     * See https://github.com/vimeo/player.js
    //     */
    //    function VideoPlayer__vimeo(elem) {
    //        var that = this;
    //
    //        Behaviors.init(VideoPlayer__vimeo, that, arguments);
    //        
    //        this.ready();
    //    }
    //
    //    VideoPlayer__vimeo.QUERY = "[data-videoplayer='vimeo']";
    //    
    //    Behaviors.inherit(VideoPlayer__vimeo, VideoPlayer);
    //    
    //    /* Install the Vimeo API, if not already installed.
    //     *
    //     * This is an asynchronous operation, so we return a Promise that resolves
    //     * when Vimeo's API is available. Invocation works like so:
    //     *
    //     * VideoPlayer__vimeo.api().then(function () {
    //     *     //do stuff...
    //     * })
    //     */
    //    VideoPlayer__vimeo.api = function () {
    //        if (VideoPlayer__vimeo.install_promise === undefined) {
    //            VideoPlayer__vimeo.install_promise = new Promise(function (resolve, reject) {
    //                var tag, firstScriptTag;
    //
    //                tag = document.createElement("script");
    //                tag.src = "https://player.vimeo.com/api/player.js";
    //                tag.onload = VideoPlayer__vimeo.api_ready_handler(resolve, reject);
    //                tag.async = true;
    //                firstScriptTag = document.getElementsByTagName('script')[0];
    //                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //            });
    //        }
    //
    //        return VideoPlayer__vimeo.install_promise;
    //    };
    //
    //    /* Creates the function that gets called when the Vimeo API is ready.
    //     */
    //    VideoPlayer__vimeo.api_ready_handler = function (resolve, reject) {
    //        function wait_for_vimeo() {
    //            if (window.Vimeo !== undefined) {
    //                resolve();
    //            } else {
    //                window.setTimeout(wait_for_vimeo, 10);
    //            }
    //        }
    //        
    //        return wait_for_vimeo;
    //    };
    //    
    //    /* Returns a promise which resolves when the player is ready to accept
    //     * other API calls.
    //     *
    //     * Calling those other API calls outside of a then() block from the promise
    //     * returned by this function is a good way to have a bad time.
    //     */
    //    VideoPlayer__vimeo.prototype.ready = function () {
    //        var that = this;
    //        
    //        if (this.ready_promise === undefined) {
    //            this.ready_promise = VideoPlayer__vimeo.api().then(function () {
    //                this.player = new window.Vimeo.Player(this.$elem);
    //            }.bind(this));
    //        }
    //        
    //        return this.ready_promise;
    //    };
    //
    //    /* Plays the video, if loaded.
    //     */
    //    VideoPlayer__vimeo.prototype.play = function () {
    //        return this.ready().then(function () {
    //            this.player.play();
    //        }.bind(this));
    //    };
    //
    //    /* Pauses the video.
    //     */
    //    VideoPlayer__vimeo.prototype.pause = function () {
    //        return this.ready().then(function () {
    //            this.player.pause();
    //        }.bind(this));
    //    };
    //
    //    /* Mute the video
    //     */
    //    VideoPlayer__vimeo.prototype.mute = function () {
    //        return this.ready().then(function () {
    //            return this.player.getVolume();
    //        }.bind(this)).then(function (volume) {
    //            this.preMuteVolume = volume;
    //            this.player.setVolume(0);
    //        }.bind(this));
    //    };
    //
    //    /* Unmute the video
    //     */
    //    VideoPlayer__vimeo.prototype.unmute = function () {
    //        return this.ready().then(function () {
    //            return this.player.setVolume(this.preMuteVolume || 1.0);
    //        }.bind(this));
    //    };
    //
    //    /* Returns the current player position.
    //     * 
    //     * This function returns a promise which resolves to the current time.
    //     */
    //    VideoPlayer__vimeo.prototype.get_current_time = function () {
    //        return this.ready().then(function () {
    //            return this.player.getCurrentTime();
    //        }.bind(this));
    //    };
    //
    //    /* Seek the video to the number of seconds indicated in time.
    //     *
    //     * The seek_commit parameter should be FALSE if and only if the seek
    //     * resulted from a mousedrag and you expect to get more seek operations.
    //     * 
    //     * As a unique quirk of the Vimeo API, the returned promise will resolve
    //     * to the actual seek time adopted by the player.
    //     */
    //    VideoPlayer__vimeo.prototype.seek = function (time, seek_commit) {
    //        return this.ready().then(function () {
    //            return this.player.setCurrentTime(time);
    //        }.bind(this));
    //    };
    //
    //    /* Check the video's duration.
    //     *
    //     * Returns the media's length in seconds.
    //     *
    //     * NaN is returned if the duration is unknown (check with isNaN).
    //     * Infinity is returned if this is a streaming video.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__vimeo.prototype.get_duration = function () {
    //        return this.ready().then(function () {
    //            return this.player.getDuration();
    //        }.bind(this));
    //    };
    //
    //    /* Check if the video is paused.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__vimeo.prototype.is_paused = function () {
    //        return this.ready().then(function () {
    //            return this.player.getPaused();
    //        }.bind(this));
    //    };
    //
    //    /* Check if the video is muted.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__vimeo.prototype.is_muted = function () {
    //        return this.ready().then(function () {
    //            return this.get_volume();
    //        }.bind(this)).then(function (volume) {
    //            return volume === 0.0;
    //        }.bind(this));
    //    };
    //
    //    /* Check the volume of the video.
    //     * 
    //     * This function returns a promise which resolves to the aformentioned
    //     * return value.
    //     */
    //    VideoPlayer__vimeo.prototype.get_volume = function () {
    //        return this.ready().then(function () {
    //            return this.player.getVolume();
    //        }.bind(this));
    //    };
    //
    //    /* Register an event handler for changes to the video's playback state.
    //     *
    //     * This corresponds exactly to matching the playing, play, and pause events
    //     * and other video service APIs should ensure their event handler triggers
    //     * on similar conditions.
    //     */
    //    VideoPlayer__vimeo.prototype.add_statechange_listener = function (listen) {
    //        return this.ready().then(function () {
    //            this.player.on("play", listen);
    //            this.player.on("pause", listen);
    //            this.player.on("ended", listen);
    //        }.bind(this));
    //    };
    //
    //    /* Register an event handler for changes to the video's playback time.
    //     */
    //    VideoPlayer__vimeo.prototype.add_timeupdate_listener = function (listen) {
    //        return this.ready().then(function () {
    //            return this.player.on("timeupdate", listen);
    //        }.bind(this));
    //    };
    //    
    //    VideoPlayer__vimeo.content_ready = function ($context) {
    //        var Class = this;
    //
    //        if ($context.find(Class.QUERY).length > 0) {
    //            Class.api().then(function () {
    //                Class.find_markup($context);
    //            });
    //        }
    //    };
    //
    //    Behaviors.register_behavior(VideoPlayer__html5);
    //    Behaviors.register_behavior(VideoPlayer__youtube);
    //    Behaviors.register_behavior(VideoPlayer__vimeo);
    //    
    //    module.VideoPlayer = VideoPlayer;
    //    module.VideoPlayer_playpause = VideoPlayer_playpause;
    //    module.VideoPlayer_scrubber = VideoPlayer_scrubber;
    //    module.VideoPlayer_mute = VideoPlayer_mute;
    //    module.VideoPlayer_offcanvas = VideoPlayer_offcanvas;
    //    module.VideoPlayer_hover = VideoPlayer_hover;
    //    module.VideoPlayer__html5 = VideoPlayer__html5;
    //    module.VideoPlayer__youtube = VideoPlayer__youtube;
    //    module.VideoPlayer__vimeo = VideoPlayer__vimeo;
    //    return module;
    //}));
    //
    //(function (root, factory) {
    //    "use strict";
    //    if (typeof define === 'function' && define.amd) {
    //        define("NewsroomFilterSubmit", ["jquery", "Behaviors"], factory);
    //    } else {
    //        root.NewsroomFilterSubmit = factory(root.jQuery, root.Behaviors);
    //    }
    //}(this, function ($, Behaviors) {
    //    "use strict";
    //
    //    var module = {};
    //    
    //    function NewsroomFilter() {
    //        Behaviors.init(NewsroomFilter, this, arguments);
    //        
    //        this.$submit = this.$elem.parents().filter("form").find("[type='submit']");
    //        
    //        this.$elem.on("change", this.filter_change_intent.bind(this));
    //    }
    //    
    //    Behaviors.inherit(NewsroomFilter, Behaviors.Behavior);
    //    
    //    NewsroomFilter.QUERY = "[data-newsroom-filter] input[type='radio']";
    //    
    //    NewsroomFilter.prototype.filter_change_intent = function () {
    //        this.$submit.click();
    //    }
    //    
    //    Behaviors.register_behavior(NewsroomFilter);
    //    
    //    module.NewsroomFilter = NewsroomFilter;
    //    
    //    return module;
    //}));
    //
    //
    ///*! jquery.cookie v1.4.1 | MIT */
    //!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
    ///**
    // * @file
    // * eu_cookie_compliance.js
    // *
    // * Defines the behavior of the eu cookie compliance banner.
    // *
    // * Statuses:
    // *  null: not yet agreed (or withdrawn), show popup
    // *  0: Disagreed
    // *  1: Agreed, show thank you banner
    // *  2: Agreed
    // */
    //
    //(function ($, Drupal, drupalSettings) {
    //
    //  'use strict';
    //  var euCookieComplianceBlockCookies;
    //
    //  Drupal.behaviors.euCookieCompliancePopup = {
    //    attach: function (context) {
    //      $('body').once('eu-cookie-compliance').each(function () {
    //        // If configured, check JSON callback to determine if in EU.
    //        if (drupalSettings.eu_cookie_compliance.popup_eu_only_js) {
    //          if (Drupal.eu_cookie_compliance.showBanner()) {
    //            var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'eu-cookie-compliance-check';
    //            var data = {};
    //            $.getJSON(url, data, function (data) {
    //              // If in the EU, show the compliance banner.
    //              if (data.in_eu) {
    //                Drupal.eu_cookie_compliance.execute();
    //              }
    //
    //              // If not in EU, set an agreed cookie automatically.
    //              else {
    //                Drupal.eu_cookie_compliance.setStatus(2);
    //              }
    //            });
    //          }
    //        }
    //
    //        // Otherwise, fallback to standard behavior which is to render the banner.
    //        else {
    //          Drupal.eu_cookie_compliance.execute();
    //        }
    //      });
    //    },
    //  };
    //
    //  Drupal.eu_cookie_compliance = {};
    //
    //  Drupal.eu_cookie_compliance.execute = function () {
    //    try {
    //      if (!drupalSettings.eu_cookie_compliance.popup_enabled) {
    //        return;
    //      }
    //
    //      if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
    //        return;
    //      }
    //
    //      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    //      if ((status === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || status === null || (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup)) {
    //        if (!drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
    //          // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
    //          if (window.matchMedia('(max-width: ' + drupalSettings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && drupalSettings.eu_cookie_compliance.use_mobile_message) {
    //            Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.mobile_popup_html_info, (status !== null));
    //          } else {
    //            Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_info, (status !== null));
    //          }
    //          Drupal.eu_cookie_compliance.initPopup();
    //        }
    //      }
    //      if (status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
    //        // Thank you banner.
    //        Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_agreed);
    //        Drupal.eu_cookie_compliance.attachHideEvents();
    //      } else if (status === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
    //        if (!drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
    //          Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
    //        }
    //        Drupal.eu_cookie_compliance.attachWithdrawEvents();
    //      }
    //    }
    //    catch (e) {
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.initPopup = function() {
    //    Drupal.eu_cookie_compliance.attachAgreeEvents();
    //
    //    if (drupalSettings.eu_cookie_compliance.method === 'categories') {
    //      var categories_checked = [];
    //
    //      if (Drupal.eu_cookie_compliance.getCurrentStatus() === null) {
    //        if (drupalSettings.eu_cookie_compliance.select_all_categories_by_default) {
    //          categories_checked = drupalSettings.eu_cookie_compliance.cookie_categories;
    //        }
    //      }
    //      else {
    //        categories_checked = Drupal.eu_cookie_compliance.getAcceptedCategories();
    //      }
    //      Drupal.eu_cookie_compliance.setPreferenceCheckboxes(categories_checked);
    //      Drupal.eu_cookie_compliance.attachSavePreferencesEvents();
    //    }
    //
    //    if (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
    //      Drupal.eu_cookie_compliance.attachWithdrawEvents();
    //      var currentStatus = Drupal.eu_cookie_compliance.getCurrentStatus();
    //      if (currentStatus === 1 || currentStatus === 2) {
    //        $('.eu-cookie-withdraw-button').show();
    //      }
    //    }
    //  }
    //
    //  Drupal.eu_cookie_compliance.createWithdrawBanner = function (html) {
    //    var $html = $('<div></div>').html(html);
    //    var $banner = $('.eu-cookie-withdraw-banner', $html);
    //    $html.attr('id', 'sliding-popup');
    //    $html.addClass('eu-cookie-withdraw-wrapper');
    //
    //    if (!drupalSettings.eu_cookie_compliance.popup_use_bare_css) {
    //      $banner.height(drupalSettings.eu_cookie_compliance.popup_height)
    //          .width(drupalSettings.eu_cookie_compliance.popup_width);
    //    }
    //    $html.hide();
    //    var height = 0;
    //    if (drupalSettings.eu_cookie_compliance.popup_position) {
    //      $html.prependTo('body');
    //      height = $html.outerHeight();
    //
    //      $html.show()
    //          .addClass('sliding-popup-top')
    //          .addClass('clearfix')
    //        .css({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + height) : -1 * height });
    //      // For some reason, the tab outerHeight is -10 if we don't use a timeout
    //      // function to reveal the tab.
    //      setTimeout(function () {
    //        var height = $html.outerHeight();
    //
    //        $html.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + height) : -1 * height }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
    //          $html.trigger('eu_cookie_compliance_popup_open');
    //        });
    //      }.bind($html), 0);
    //    } else {
    //      if (drupalSettings.eu_cookie_compliance.better_support_for_screen_readers) {
    //        $html.prependTo('body');
    //      } else {
    //        $html.appendTo('body');
    //      }
    //      height = $html.outerHeight();
    //      $html.show()
    //          .addClass('sliding-popup-bottom')
    //          .css({ bottom: -1 * height });
    //      // For some reason, the tab outerHeight is -10 if we don't use a timeout
    //      // function to reveal the tab.
    //      setTimeout(function () {
    //        var height = $html.outerHeight();
    //
    //        $html.animate({ bottom: -1 * (height) }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
    //          $html.trigger('eu_cookie_compliance_popup_open');
    //        });
    //      }.bind($html), 0);
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.toggleWithdrawBanner = function () {
    //    var $wrapper = $('#sliding-popup');
    //    var $tab = $('.eu-cookie-withdraw-tab');
    //    var topBottom = (drupalSettings.eu_cookie_compliance.popup_position ? 'top' : 'bottom');
    //    var height = $wrapper.outerHeight();
    //    var $bannerIsShowing = drupalSettings.eu_cookie_compliance.popup_position ? parseInt($wrapper.css('top')) === (!drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top'))) : 0) : parseInt($wrapper.css('bottom')) === 0;
    //    if (drupalSettings.eu_cookie_compliance.popup_position) {
    //      if ($bannerIsShowing) {
    //        $wrapper.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + height) : -1 * height}, drupalSettings.eu_cookie_compliance.popup_delay);
    //      }
    //      else {
    //        $wrapper.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top'))) : 0}, drupalSettings.eu_cookie_compliance.popup_delay);
    //      }
    //    }
    //    else {
    //      if ($bannerIsShowing) {
    //        $wrapper.animate({'bottom' : -1 * (height)}, drupalSettings.eu_cookie_compliance.popup_delay);
    //      }
    //      else {
    //        $wrapper.animate({'bottom' : 0}, drupalSettings.eu_cookie_compliance.popup_delay);
    //      }
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.createPopup = function (html, closed) {
    //    // This fixes a problem with jQuery 1.9.
    //    var popup = $('<div></div>').html(html);
    //    popup.attr('id', 'sliding-popup');
    //    if (!drupalSettings.eu_cookie_compliance.popup_use_bare_css) {
    //      popup.height(drupalSettings.eu_cookie_compliance.popup_height)
    //          .width(drupalSettings.eu_cookie_compliance.popup_width);
    //    }
    //
    //    popup.hide();
    //    var height = 0;
    //    if (drupalSettings.eu_cookie_compliance.popup_position) {
    //      popup.prependTo('body');
    //      height = popup.outerHeight();
    //      popup.show()
    //        .addClass('sliding-popup-top clearfix')
    //        .css({ top: -1 * height });
    //      if (closed !== true) {
    //        popup.animate({top: 0}, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
    //          popup.trigger('eu_cookie_compliance_popup_open');
    //        });
    //      }
    //    } else {
    //      if (drupalSettings.eu_cookie_compliance.better_support_for_screen_readers) {
    //        popup.prependTo('body');
    //      } else {
    //        popup.appendTo('body');
    //      }
    //
    //      height = popup.outerHeight();
    //      popup.show()
    //        .addClass('sliding-popup-bottom')
    //        .css({bottom: -1 * height});
    //      if (closed !== true) {
    //        popup.animate({bottom: 0}, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
    //          popup.trigger('eu_cookie_compliance_popup_open');
    //        });
    //      }
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.attachAgreeEvents = function () {
    //    var clickingConfirms = drupalSettings.eu_cookie_compliance.popup_clicking_confirmation;
    //    var scrollConfirms = drupalSettings.eu_cookie_compliance.popup_scrolling_confirmation;
    //
    //    if (drupalSettings.eu_cookie_compliance.method === 'categories' && drupalSettings.eu_cookie_compliance.enable_save_preferences_button) {
    //        // The agree button becomes an agree to all categories button when the 'save preferences' button is present.
    //        $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAllAction);
    //    }
    //    else {
    //        $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);
    //    }
    //    $('.decline-button').click(Drupal.eu_cookie_compliance.declineAction);
    //
    //    if (clickingConfirms) {
    //      $('a, input[type=submit], button[type=submit]').not('.popup-content *').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
    //    }
    //
    //    if (scrollConfirms) {
    //      var alreadyScrolled = false;
    //      var scrollHandler = function () {
    //        if (alreadyScrolled) {
    //          Drupal.eu_cookie_compliance.acceptAction();
    //          $(window).off('scroll', scrollHandler);
    //        } else {
    //          alreadyScrolled = true;
    //        }
    //      };
    //
    //      $(window).bind('scroll', scrollHandler);
    //    }
    //
    //    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
    //  };
    //
    //  Drupal.eu_cookie_compliance.attachSavePreferencesEvents = function () {
    //    $('.eu-cookie-compliance-save-preferences-button').click(Drupal.eu_cookie_compliance.savePreferencesAction);
    //  };
    //
    //  Drupal.eu_cookie_compliance.attachHideEvents = function () {
    //    var popupHideAgreed = drupalSettings.eu_cookie_compliance.popup_hide_agreed;
    //    var clickingConfirms = drupalSettings.eu_cookie_compliance.popup_clicking_confirmation;
    //    $('.hide-popup-button').click(function () {
    //          Drupal.eu_cookie_compliance.changeStatus(2);
    //        }
    //    );
    //    if (clickingConfirms) {
    //      $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
    //    }
    //
    //    if (popupHideAgreed) {
    //      $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function () {
    //        Drupal.eu_cookie_compliance.changeStatus(2);
    //      });
    //    }
    //
    //    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
    //  };
    //
    //  Drupal.eu_cookie_compliance.attachWithdrawEvents = function () {
    //    $('.eu-cookie-withdraw-button').click(Drupal.eu_cookie_compliance.withdrawAction);
    //    $('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner);
    //  };
    //
    //  Drupal.eu_cookie_compliance.acceptAction = function () {
    //    var agreedEnabled = drupalSettings.eu_cookie_compliance.popup_agreed_enabled;
    //    var nextStatus = 1;
    //    if (!agreedEnabled) {
    //      Drupal.eu_cookie_compliance.setStatus(1);
    //      nextStatus = 2;
    //    }
    //
    //    if (!euCookieComplianceHasLoadedScripts && typeof euCookieComplianceLoadScripts === "function") {
    //      euCookieComplianceLoadScripts();
    //    }
    //
    //    if (typeof euCookieComplianceBlockCookies !== 'undefined') {
    //      clearInterval(euCookieComplianceBlockCookies);
    //    }
    //
    //    if (drupalSettings.eu_cookie_compliance.method === 'categories') {
    //      // Select Checked categories.
    //      var categories = $("#eu-cookie-compliance-categories input:checkbox:checked").map(function(){
    //        return $(this).val();
    //      }).get();
    //      Drupal.eu_cookie_compliance.setAcceptedCategories(categories);
    //      // Load scripts for all categories.
    //      Drupal.eu_cookie_compliance.loadCategoryScripts(categories);
    //    }
    //
    //    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
    //  };
    //
    //  Drupal.eu_cookie_compliance.acceptAllAction = function () {
    //    var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories;
    //    Drupal.eu_cookie_compliance.setPreferenceCheckboxes(allCategories);
    //    Drupal.eu_cookie_compliance.acceptAction();
    //  }
    //
    //  Drupal.eu_cookie_compliance.savePreferencesAction = function () {
    //    var categories = $("#eu-cookie-compliance-categories input:checkbox:checked").map(function(){
    //      return $(this).val();
    //    }).get();
    //    var agreedEnabled = drupalSettings.eu_cookie_compliance.popup_agreed_enabled;
    //    var nextStatus = 1;
    //    if (!agreedEnabled) {
    //      Drupal.eu_cookie_compliance.setStatus(1);
    //      nextStatus = 2;
    //    }
    //
    //    Drupal.eu_cookie_compliance.setAcceptedCategories(categories);
    //    if (!euCookieComplianceHasLoadedScripts && typeof euCookieComplianceLoadScripts === "function") {
    //      euCookieComplianceLoadScripts();
    //    }
    //    Drupal.eu_cookie_compliance.loadCategoryScripts(categories);
    //    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
    //  };
    //
    //  Drupal.eu_cookie_compliance.loadCategoryScripts = function(categories) {
    //    for (var cat in categories) {
    //      if (euCookieComplianceHasLoadedScriptsForCategory[cat] !== true && typeof euCookieComplianceLoadScripts === "function") {
    //        euCookieComplianceLoadScripts(categories[cat]);
    //        euCookieComplianceHasLoadedScriptsForCategory[cat] = true;
    //      }
    //    }
    //  }
    //
    //  Drupal.eu_cookie_compliance.declineAction = function () {
    //    Drupal.eu_cookie_compliance.setStatus(0);
    //    var popup = $('#sliding-popup');
    //    if (popup.hasClass('sliding-popup-top')) {
    //      popup.animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + popup.outerHeight()) : popup.outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
    //        popup.hide();
    //      }).trigger('eu_cookie_compliance_popup_close');
    //    }
    //    else {
    //      popup.animate({ bottom: popup.outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, null, function () {
    //        popup.hide();
    //      }).trigger('eu_cookie_compliance_popup_close');
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.withdrawAction = function () {
    //    Drupal.eu_cookie_compliance.setStatus(0);
    //    Drupal.eu_cookie_compliance.setAcceptedCategories([]);
    //    location.reload();
    //  };
    //
    //  Drupal.eu_cookie_compliance.moreInfoAction = function () {
    //    if (drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup) {
    //      Drupal.eu_cookie_compliance.setStatus(0);
    //      if (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
    //        $('#sliding-popup .eu-cookie-compliance-banner').trigger('eu_cookie_compliance_popup_close').hide();
    //      }
    //      else {
    //        $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
    //      }
    //    } else {
    //      if (drupalSettings.eu_cookie_compliance.popup_link_new_window) {
    //        window.open(drupalSettings.eu_cookie_compliance.popup_link);
    //      } else {
    //        window.location.href = drupalSettings.eu_cookie_compliance.popup_link;
    //      }
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.getCurrentStatus = function () {
    //    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name;
    //    var value = $.cookie(cookieName);
    //    value = parseInt(value);
    //    if (isNaN(value)) {
    //      value = null;
    //    }
    //
    //    return value;
    //  };
    //
    //  Drupal.eu_cookie_compliance.setPreferenceCheckboxes = function (categories) {
    //    for (var i in categories) {
    //      $("#eu-cookie-compliance-categories input:checkbox[value='" + categories[i] + "']").prop("checked", true);
    //    }
    //  }
    //
    //  Drupal.eu_cookie_compliance.getAcceptedCategories = function () {
    //    var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories;
    //    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories';
    //    var value = $.cookie(cookieName);
    //    var selectedCategories = [];
    //
    //    if (value !== null && typeof value !== 'undefined') {
    //      value = JSON.parse(value);
    //      selectedCategories = value;
    //    }
    //
    //    if (Drupal.eu_cookie_compliance.fix_first_cookie_category && !$.inArray(allCategories[0], selectedCategories)) {
    //      selectedCategories.push(allCategories[0]);
    //    }
    //
    //    return selectedCategories;
    //  };
    //
    //  Drupal.eu_cookie_compliance.changeStatus = function (value) {
    //    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    //    var reloadPage = drupalSettings.eu_cookie_compliance.reload_page;
    //    if (status === value) {
    //      return;
    //    }
    //
    //    if (drupalSettings.eu_cookie_compliance.popup_position) {
    //      $('.sliding-popup-top').animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top')) + $('#sliding-popup').outerHeight()) : $('#sliding-popup').outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, function () {
    //        if (value === 1 && status === null && !reloadPage) {
    //          $('.sliding-popup-top').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.popup_html_agreed).animate({ top: !drupalSettings.eu_cookie_compliance.fixed_top_position ? -(parseInt($('body').css('padding-top')) + parseInt($('body').css('margin-top'))) : 0 }, drupalSettings.eu_cookie_compliance.popup_delay);
    //          Drupal.eu_cookie_compliance.attachHideEvents();
    //        } else if (status === 1 && !(drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup)) {
    //          $('.sliding-popup-top').not('.eu-cookie-withdraw-wrapper').trigger('eu_cookie_compliance_popup_close').remove();
    //        }
    //        Drupal.eu_cookie_compliance.showWithdrawBanner(value);
    //      });
    //    } else {
    //      $('.sliding-popup-bottom').animate({ bottom: $('#sliding-popup').outerHeight() * -1 }, drupalSettings.eu_cookie_compliance.popup_delay, function () {
    //        if (value === 1 && status === null && !reloadPage) {
    //          $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.popup_html_agreed).animate({ bottom: 0 }, drupalSettings.eu_cookie_compliance.popup_delay);
    //          Drupal.eu_cookie_compliance.attachHideEvents();
    //        } else if (status === 1) {
    //          if (drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
    //            // Restore popup content.
    //            if (window.matchMedia('(max-width: ' + drupalSettings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && drupalSettings.eu_cookie_compliance.use_mobile_message) {
    //              $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.mobile_popup_html_info);
    //            } else {
    //              $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').html(drupalSettings.eu_cookie_compliance.popup_html_info);
    //            }
    //            Drupal.eu_cookie_compliance.initPopup();
    //          }
    //          else {
    //            $('.sliding-popup-bottom').not('.eu-cookie-withdraw-wrapper').trigger('eu_cookie_compliance_popup_close').remove();
    //          }
    //        }
    //        Drupal.eu_cookie_compliance.showWithdrawBanner(value);
    //      });
    //    }
    //
    //    if (drupalSettings.eu_cookie_compliance.reload_page) {
    //      location.reload();
    //    }
    //
    //    Drupal.eu_cookie_compliance.setStatus(value);
    //  };
    //
    //  Drupal.eu_cookie_compliance.showWithdrawBanner = function (value) {
    //    if (value === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
    //      if (!drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
    //        Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
    //      }
    //      Drupal.eu_cookie_compliance.attachWithdrawEvents();
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.setStatus = function (status) {
    //    var date = new Date();
    //    var domain = drupalSettings.eu_cookie_compliance.domain ? drupalSettings.eu_cookie_compliance.domain : '';
    //    var path = drupalSettings.path.baseUrl;
    //    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name;
    //    if (path.length > 1) {
    //      var pathEnd = path.length - 1;
    //      if (path.lastIndexOf('/') === pathEnd) {
    //        path = path.substring(0, pathEnd);
    //      }
    //    }
    //
    //    var cookie_session = parseInt(drupalSettings.eu_cookie_compliance.cookie_session);
    //    if (cookie_session) {
    //      $.cookie(cookieName, status, { path: path, domain: domain });
    //    } else {
    //      var lifetime = parseInt(drupalSettings.eu_cookie_compliance.cookie_lifetime);
    //      date.setDate(date.getDate() + lifetime);
    //      $.cookie(cookieName, status, { expires: date, path: path, domain: domain });
    //    }
    //    $(document).trigger('eu_cookie_compliance.changeStatus', [status]);
    //
    //    // Store consent if applicable.
    //    if (drupalSettings.eu_cookie_compliance.store_consent && ((status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) || (status === 2  && !drupalSettings.eu_cookie_compliance.popup_agreed_enabled))) {
    //      var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'eu-cookie-compliance/store_consent/banner';
    //      $.post(url, {}, function (data) { });
    //    }
    //  };
    //
    //  Drupal.eu_cookie_compliance.setAcceptedCategories = function (categories) {
    //    var date = new Date();
    //    var domain = drupalSettings.eu_cookie_compliance.domain ? drupalSettings.eu_cookie_compliance.domain : '';
    //    var path = drupalSettings.eu_cookie_compliance.domain_all_sites ? '/' : drupalSettings.path.baseUrl;
    //    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories';
    //    if (path.length > 1) {
    //      var pathEnd = path.length - 1;
    //      if (path.lastIndexOf('/') === pathEnd) {
    //        path = path.substring(0, pathEnd);
    //      }
    //    }
    //    var categoriesString = JSON.stringify(categories);
    //    var cookie_session = parseInt(drupalSettings.eu_cookie_compliance.cookie_session);
    //    if (cookie_session) {
    //      $.cookie(cookieName, categoriesString, { path: path, domain: domain });
    //    } else {
    //      var lifetime = parseInt(drupalSettings.eu_cookie_compliance.cookie_lifetime);
    //      date.setDate(date.getDate() + lifetime);
    //      $.cookie(cookieName, categoriesString, { expires: date, path: path, domain: domain });
    //    }
    //    $(document).trigger('eu_cookie_compliance.changePreferences', [categories]);
    //
    //    // TODO: Store categories with consent if applicable?
    //  };
    //
    //  Drupal.eu_cookie_compliance.hasAgreed = function (category) {
    //    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    //    var agreed = (status === 1 || status === 2);
    //
    //    if(category !== undefined && agreed) {
    //      agreed = Drupal.eu_cookie_compliance.hasAgreedWithCategory(category);
    //    }
    //
    //    return agreed;
    //  };
    //
    //  Drupal.eu_cookie_compliance.hasAgreedWithCategory = function(category) {
    //    var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories;
    //    var agreedCategories = Drupal.eu_cookie_compliance.getAcceptedCategories();
    //
    //    if (drupalSettings.eu_cookie_compliance.fix_first_cookie_category && category === allCategories[0]) {
    //      return true;
    //    }
    //
    //    return $.inArray(category, agreedCategories) !== -1;
    //  };
    //
    //  Drupal.eu_cookie_compliance.showBanner = function () {
    //    var showBanner = false;
    //    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    //    if ((status === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || status === null) {
    //      if (!drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
    //        showBanner = true;
    //      }
    //    } else if (status === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
    //      showBanner = true;
    //    }
    //
    //    return showBanner;
    //  };
    //
    //  Drupal.eu_cookie_compliance.cookiesEnabled = function () {
    //    var cookieEnabled = (navigator.cookieEnabled);
    //    if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
    //      $.cookie('testcookie', 'testcookie', { expires: 100 });
    //      cookieEnabled = ($.cookie('testcookie').indexOf('testcookie') !== -1);
    //    }
    //
    //    return (cookieEnabled);
    //  };
    //
    //  Drupal.eu_cookie_compliance.isWhitelisted = function (cookieName) {
    //    // Skip the PHP session cookie.
    //    if (cookieName.indexOf('SESS') === 0 || cookieName.indexOf('SSESS') === 0) {
    //      return true;
    //    }
    //    // Split the white-listed cookies.
    //    var euCookieComplianceWhitelist = drupalSettings.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);
    //
    //    // Add the EU Cookie Compliance cookie.
    //    euCookieComplianceWhitelist.push((typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : drupalSettings.eu_cookie_compliance.cookie_name);
    //    euCookieComplianceWhitelist.push((typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories');
    //
    //    // Check if the cookie is white-listed.
    //    for (var item in euCookieComplianceWhitelist) {
    //      if (cookieName === euCookieComplianceWhitelist[item]) {
    //        return true;
    //      }
    //      // Handle cookie names that are prefixed with a category.
    //      if (drupalSettings.eu_cookie_compliance.method === 'categories') {
    //        var separatorPos = euCookieComplianceWhitelist[item].indexOf(":");
    //        if (separatorPos !== -1) {
    //          var category = euCookieComplianceWhitelist[item].substr(0, separatorPos);
    //          var wlCookieName = euCookieComplianceWhitelist[item].substr(separatorPos + 1);
    //
    //          if (wlCookieName === cookieName && Drupal.eu_cookie_compliance.hasAgreedWithCategory(category)) {
    //            return true;
    //          }
    //        }
    //      }
    //    }
    //
    //    return false;
    //  }
    //
    //  // Load blocked scripts if the user has agreed to being tracked.
    //  var euCookieComplianceHasLoadedScripts = false;
    //  var euCookieComplianceHasLoadedScriptsForCategory = [];
    //  $(function () {
    //    if (Drupal.eu_cookie_compliance.hasAgreed()
    //        || (Drupal.eu_cookie_compliance.getCurrentStatus() === null && drupalSettings.eu_cookie_compliance.method !== 'opt_in' && drupalSettings.eu_cookie_compliance.method !== 'categories')
    //    ) {
    //      if (typeof euCookieComplianceLoadScripts === "function") {
    //        euCookieComplianceLoadScripts();
    //      }
    //      euCookieComplianceHasLoadedScripts = true;
    //
    //      if (drupalSettings.eu_cookie_compliance.method === 'categories') {
    //        var acceptedCategories = Drupal.eu_cookie_compliance.getAcceptedCategories();
    //        Drupal.eu_cookie_compliance.loadCategoryScripts(acceptedCategories);
    //      }
    //    }
    //  });
    //
    //  // Block cookies when the user hasn't agreed.
    //  if ((drupalSettings.eu_cookie_compliance.method === 'opt_in' && (Drupal.eu_cookie_compliance.getCurrentStatus() === null  || !Drupal.eu_cookie_compliance.hasAgreed()))
    //      || (drupalSettings.eu_cookie_compliance.method === 'opt_out' && !Drupal.eu_cookie_compliance.hasAgreed() && Drupal.eu_cookie_compliance.getCurrentStatus() !== null)
    //      || (drupalSettings.eu_cookie_compliance.method === 'categories')
    //  ) {
    //    var euCookieComplianceBlockCookies = setInterval(function () {
    //      // Load all cookies from jQuery.
    //      var cookies = $.cookie();
    //
    //      // Check each cookie and try to remove it if it's not white-listed.
    //      for (var i in cookies) {
    //        var remove = true;
    //        var hostname = window.location.hostname;
    //        var cookieRemoved = false;
    //        var index = 0;
    //
    //        remove = !Drupal.eu_cookie_compliance.isWhitelisted(i);
    //
    //        // Remove the cookie if it's not white-listed.
    //        if (remove) {
    //          while (!cookieRemoved && hostname !== '') {
    //            // Attempt to remove.
    //            cookieRemoved = $.removeCookie(i, { domain: '.' + hostname, path: '/' });
    //            if (!cookieRemoved) {
    //              cookieRemoved = $.removeCookie(i, { domain: hostname, path: '/' });
    //            }
    //
    //            index = hostname.indexOf('.');
    //
    //            // We can be on a sub-domain, so keep checking the main domain as well.
    //            hostname = (index === -1) ? '' : hostname.substring(index + 1);
    //          }
    //
    //          // Some jQuery Cookie versions don't remove cookies well.  Try again
    //          // using plain js.
    //          if (!cookieRemoved) {
    //            document.cookie = i + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
    //          }
    //        }
    //      }
    //    }, 5000);
    //  }
    //
    //})(jQuery, Drupal, drupalSettings);
    //;
    ///**
    // * @file
    // * Bootstrap Popovers.
    // */
    //
    //var Drupal = Drupal || {};
    //
    //(function ($, Drupal, Bootstrap) {
    //  "use strict";
    //
    //  /**
    //   * Extend the Bootstrap Popover plugin constructor class.
    //   */
    //  Bootstrap.extendPlugin('popover', function (settings) {
    //    return {
    //      DEFAULTS: {
    //        animation: !!settings.popover_animation,
    //        enabled: settings.popover_enabled,
    //        html: !!settings.popover_html,
    //        placement: settings.popover_placement,
    //        selector: settings.popover_selector,
    //        trigger: settings.popover_trigger,
    //        triggerAutoclose: !!settings.popover_trigger_autoclose,
    //        title: settings.popover_title,
    //        content: settings.popover_content,
    //        delay: parseInt(settings.popover_delay, 10),
    //        container: settings.popover_container
    //      }
    //    };
    //  });
    //
    //  /**
    //   * Bootstrap Popovers.
    //   *
    //   * @todo This should really be properly delegated if selector option is set.
    //   */
    //  Drupal.behaviors.bootstrapPopovers = {
    //    attach: function (context) {
    //      // Immediately return if popovers are not available.
    //      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
    //        return;
    //      }
    //
    //      // Popover autoclose.
    //      if ($.fn.popover.Constructor.DEFAULTS.triggerAutoclose) {
    //        var $currentPopover = null;
    //        $(document)
    //          .on('show.bs.popover', '[data-toggle=popover]', function () {
    //            var $trigger = $(this);
    //            var popover = $trigger.data('bs.popover');
    //
    //            // Only keep track of clicked triggers that we're manually handling.
    //            if (popover.options.originalTrigger === 'click') {
    //              if ($currentPopover && !$currentPopover.is($trigger)) {
    //                $currentPopover.popover('hide');
    //              }
    //              $currentPopover = $trigger;
    //            }
    //          })
    //          .on('click', function (e) {
    //            var $target = $(e.target);
    //            var popover = $target.is('[data-toggle=popover]') && $target.data('bs.popover');
    //            if ($currentPopover && !$target.is('[data-toggle=popover]') && !$target.closest('.popover.in')[0]) {
    //              $currentPopover.popover('hide');
    //              $currentPopover = null;
    //            }
    //          })
    //        ;
    //      }
    //
    //      var elements = $(context).find('[data-toggle=popover]').toArray();
    //      for (var i = 0; i < elements.length; i++) {
    //        var $element = $(elements[i]);
    //        var options = $.extend({}, $.fn.popover.Constructor.DEFAULTS, $element.data());
    //
    //        // Store the original trigger.
    //        options.originalTrigger = options.trigger;
    //
    //        // If the trigger is "click", then we'll handle it manually here.
    //        if (options.trigger === 'click') {
    //          options.trigger = 'manual';
    //        }
    //
    //        // Retrieve content from a target element.
    //        var $target = $(options.target || $element.is('a[href^="#"]') && $element.attr('href')).clone();
    //        if (!options.content && $target[0]) {
    //          $target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');
    //          options.content = $target.wrap('<div/>').parent()[options.html ? 'html' : 'text']() || '';
    //        }
    //
    //        // Initialize the popover.
    //        $element.popover(options);
    //
    //        // Handle clicks manually.
    //        if (options.originalTrigger === 'click') {
    //          // To ensure the element is bound multiple times, remove any
    //          // previously set event handler before adding another one.
    //          $element
    //            .off('click.drupal.bootstrap.popover')
    //            .on('click.drupal.bootstrap.popover', function (e) {
    //              $(this).popover('toggle');
    //              e.preventDefault();
    //              e.stopPropagation();
    //            })
    //          ;
    //        }
    //      }
    //    },
    //    detach: function (context) {
    //      // Immediately return if popovers are not available.
    //      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
    //        return;
    //      }
    //
    //      // Destroy all popovers.
    //      $(context).find('[data-toggle="popover"]')
    //        .off('click.drupal.bootstrap.popover')
    //        .popover('destroy')
    //      ;
    //    }
    //  };
    //
    //})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
    //;
    ///**
    // * @file
    // * Bootstrap Tooltips.
    // */
    //
    //var Drupal = Drupal || {};
    //
    //(function ($, Drupal, Bootstrap) {
    //  "use strict";
    //
    //  /**
    //   * Extend the Bootstrap Tooltip plugin constructor class.
    //   */
    //  Bootstrap.extendPlugin('tooltip', function (settings) {
    //    return {
    //      DEFAULTS: {
    //        animation: !!settings.tooltip_animation,
    //        html: !!settings.tooltip_html,
    //        placement: settings.tooltip_placement,
    //        selector: settings.tooltip_selector,
    //        trigger: settings.tooltip_trigger,
    //        delay: parseInt(settings.tooltip_delay, 10),
    //        container: settings.tooltip_container
    //      }
    //    };
    //  });
    //
    //  /**
    //   * Bootstrap Tooltips.
    //   *
    //   * @todo This should really be properly delegated if selector option is set.
    //   */
    //  Drupal.behaviors.bootstrapTooltips = {
    //    attach: function (context) {
    //      var elements = $(context).find('[data-toggle="tooltip"]').toArray();
    //      for (var i = 0; i < elements.length; i++) {
    //        var $element = $(elements[i]);
    //        var options = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, $element.data());
    //        $element.tooltip(options);
    //      }
    //    },
    //    detach: function (context) {
    //      // Destroy all tooltips.
    //      $(context).find('[data-toggle="tooltip"]').tooltip('destroy');
    //    }
    //  };
    //
    //})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
    //;
    ///*! glazed_builder 11-07-2018 */
    //!function(a){function b(b,c,d){if(F.hasOwnProperty(b+"/"+c))return void d(F[b+"/"+c]);window.glazed_online&&drupalSettings.glazedBuilder.glazedAjaxUrl&&a.ajax({type:"POST",url:drupalSettings.glazedBuilder.glazedAjaxUrl,data:{action:"glazed_load_container",type:b,name:c},cache:!drupalSettings.glazedBuilder.glazedEditor}).done(function(a){F[b+"/"+c]=a,d(a)}).fail(function(){d("")})}function c(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.baseclass=b}function d(a,b){var c={};for(var d in b)void 0!==c[d]&&c[d]==b[d]||(a[d]=b[d]);if(document.all&&!document.isOpera){var e=b.toString;"function"==typeof e&&e!=a.toString&&e!=c.toString&&"\nfunction toString() {\n  [native code]\n}\n"!=e&&(a.toString=b.toString)}return a}function e(a){return _.isString(a)?a.replace(/(\`{2})/g,'"'):a}function f(){this.dom_element=null,this.heading="",this.description="",this.param_name="",this.required=!1,this.admin_label="",this.holder="",this.wrapper_class="",this.value=null,this.can_be_empty=!1,this.hidden=!1,this.tab="",this.dependency={},"create"in this&&this.create()}function g(a){if(a.type in f.prototype.param_types){var b=new f.prototype.param_types[a.type];return d(b,a),b}var b=new f;return d(b,a),b}function h(){}function i(a,b){this.id=Math.random().toString(36).substr(2,5),null!=a&&(this.parent=a,"boolean"==typeof b?b?a.children.push(this):a.children.unshift(this):a.children.splice(b,0,this)),this.children=[],this.dom_element=null,this.dom_content_element=null,this.attrs={};for(var c=0;c<this.params.length;c++)_.isString(this.params[c].value)?this.attrs[this.params[c].param_name]=this.params[c].value:this.params[c].hidden||(this.attrs[this.params[c].param_name]="");this.controls=null,C.add_element(this.id,this,b)}function j(a,b,d){if(c(d,i),d.prototype.base=a,d.prototype.is_container=b,i.prototype.elements[a]=d,i.prototype.tags[a]=d,b)for(var e=1;e<i.prototype.max_nested_depth;e++)i.prototype.tags[a+"_"+e]=d}function k(a,b){k.baseclass.apply(this,arguments)}function l(a,b){l.baseclass.apply(this,arguments)}function m(a,b,d){if(c(d,l),d.prototype.base=a,d.prototype.is_container=b,l.prototype.elements[a]=d,l.prototype.tags[a]=d,b)for(var e=1;e<l.prototype.max_nested_depth;e++)l.prototype.tags[a+"_"+e]=d}function n(a,b){n.baseclass.apply(this,arguments)}function o(a,b){o.baseclass.apply(this,arguments),this.columns="",b&&"boolean"==typeof b||this.set_columns("1/2 + 1/2"),this.attrs.device="sm"}function p(a,b){p.baseclass.call(this,a,b)}function q(a,b){q.baseclass.apply(this,arguments),this.rendered=!1,this.loaded_container=null,this.js={},this.css={}}function r(a,b){r.baseclass.apply(this,arguments)}function s(a,b){s.baseclass.apply(this,arguments),b&&"boolean"==typeof b||this.add_tab()}function t(a,b){t.baseclass.apply(this,arguments)}function u(a,b){u.baseclass.apply(this,arguments),b&&"boolean"==typeof b||this.add_toggle()}function v(a,b){v.baseclass.apply(this,arguments)}function w(a,b){w.baseclass.apply(this,arguments),b&&"boolean"==typeof b||this.add_slide()}function x(a,b){x.baseclass.apply(this,arguments)}function y(){if("glazed_elements"in window)for(var a=0;a<window.glazed_elements.length;a++){var b=window.glazed_elements[a],c=function(a,b){c.baseclass.apply(this,arguments)};m(b.base,b.is_container,c),b.baseclass=c.baseclass,b.params=b.params.concat(c.prototype.params),d(c.prototype,b);for(var e=0;e<c.prototype.params.length;e++){var f=c.prototype.params[e],h=g(f);c.prototype.params[e]=h}}}function z(){if("glazed_extend"in window)for(var a in window.glazed_extend){var b=window.glazed_extend[a],c=[];"params"in b&&(c=b.params),delete b.params;var e=i.prototype.elements[a];if(!("extended"in e)){e.extended=!0,d(e.prototype,b);for(var f=0;f<c.length;f++){var h=g(c[f]);e.prototype.params.push(h)}}}}if(!("glazed_backend"in window)){window.glazed_frontend=!0,window.glazed_extend=[],a.fn.closest_descendents=function(b){for(var c=a(),d=this;d.length;)c=a.merge(c,d.filter(b)),d=d.not(b),d=d.children();return c},f.prototype.safe=!0,f.prototype.param_types={},window.glazed_add_css=function(b,c){var d=drupalSettings.glazedBuilder.glazedBaseUrl+b;if(a('link[href*="'+d+'"]').length||"glazed_exported"in window)return void c();var e=document.getElementsByTagName("head")[0],f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.href=d,f.onload=c,e.appendChild(f)},window.glazed_add_js=function(a){"loaded"in a&&a.loaded||"glazed_exported"in window?a.callback():glazed_add_external_js(drupalSettings.glazedBuilder.glazedBaseUrl+a.path,"callback"in a?a.callback:function(){})},window.glazed_add_js_list=function(a){if("loaded"in a&&a.loaded)a.callback();else for(var b=0,c=0;c<a.paths.length;c++)glazed_add_js({path:a.paths[c],callback:function(){++b==a.paths.length&&a.callback()}})};var A={},B={};window.glazed_add_external_js=function(a,b){if(a in A)return void A[a].push(b);if(a in B)return void b();A[a]=[b];var c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.type="text/javascript",d.src=a,d.onload=function(){for(B[a]=!0;a in A;){var b=A[a];A[a]=void 0,delete A[a];for(var c=0;c<b.length;c++)b[c]()}},c.appendChild(d)},h.prototype.elements_instances={},h.prototype.elements_instances_by_an_name={},h.prototype.get_element=function(a){return this.elements_instances[a]},h.prototype.delete_element=function(b){a(document).trigger("glazed_delete_element",b),delete this.elements_instances[b]},h.prototype.add_element=function(b,c,d){this.elements_instances[b]=c,a(document).trigger("glazed_add_element",{id:b,position:d})},h.prototype.try_render_unknown_elements=function(){if(this.template_elements_loaded&&this.cms_elements_loaded)for(var b in C.elements_instances){var c=C.elements_instances[b];if(c instanceof k){var d=c.attrs.content,e=/^\s*\<[\s\S]*\>\s*$/.exec(d);e?i.prototype.parse_html.call(c,d):i.prototype.parse_shortcode.call(c,d);for(var f=0;f<c.children.length;f++)c.children[f].recursive_render();a(c.dom_content_element).empty(),c.attach_children(),drupalSettings.glazedBuilder.glazedEditor&&c.update_sortable(),c.recursive_showed()}}},i.prototype.elements={},i.prototype.tags={},i.prototype.params=[{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],i.prototype.get_hover_style=function(){return"hover_style"in this.attrs?"<style>\x3c!-- .hover-style-"+this.id+":hover "+this.style_selector+" { "+this.attrs.hover_style+"} --\x3e</style>":""},i.prototype.get_el_classes=function(){return this.attrs.el_class},i.prototype.get_content_classes=function(){var a="";return this.attrs.shadow>0&&(a="glazed-shadow-"+this.attrs.shadow),this.attrs.hover_shadow>0&&(a=a+" glazed-shadow-hover-"+this.attrs.hover_shadow),a},i.prototype.showed=function(a){"pos_left"in this.attrs&&""!=this.attrs.pos_left&&a(this.dom_element).css("left",this.attrs.pos_left),"pos_right"in this.attrs&&""!=this.attrs.pos_right&&a(this.dom_element).css("right",this.attrs.pos_right),"pos_top"in this.attrs&&""!=this.attrs.pos_top&&a(this.dom_element).css("top",this.attrs.pos_top),"pos_bottom"in this.attrs&&""!=this.attrs.pos_bottom&&a(this.dom_element).css("bottom",this.attrs.pos_bottom),"pos_width"in this.attrs&&""!=this.attrs.pos_width&&a(this.dom_element).css("width",this.attrs.pos_width),"pos_height"in this.attrs&&""!=this.attrs.pos_height&&a(this.dom_element).css("height",this.attrs.pos_height),"pos_zindex"in this.attrs&&""!=this.attrs.pos_zindex&&a(this.dom_element).css("z-index",this.attrs.pos_zindex),"hover_style"in this.attrs&&""!=this.attrs.hover_style&&(a("head").find("#hover-style-"+this.id).remove(),a("head").append(this.get_hover_style()),a(this.dom_element).addClass("hover-style-"+this.id))},i.prototype.render=function(a){a(this.dom_element).attr("data-az-id",this.id)},i.prototype.recursive_render=function(){for(var b=0;b<this.children.length;b++)this.children[b].recursive_render();glazed_frontend?this.frontend_render&&(this.detach_children(),this.parent.detach_children(),this.render(a),this.attach_children(),this.parent.attach_children()):(this.render(a),this.attach_children()),drupalSettings.glazedBuilder.glazedEditor&&(this.show_controls(),this.update_sortable())},i.prototype.replace_render=function(){var b=this.dom_element,c=this.dom_content_element;null!=b&&(this.render(a),a(b).replaceWith(this.dom_element),null!=c&&a(this.dom_content_element).replaceWith(c)),drupalSettings.glazedBuilder.glazedEditor&&this.show_controls()},i.prototype.update_dom=function(){this.detach_children(),a(this.dom_element).remove(),this.parent.detach_children(),this.render(a),this.attach_children(),drupalSettings.glazedBuilder.glazedEditor&&this.show_controls(),this.parent.attach_children(),drupalSettings.glazedBuilder.glazedEditor&&(this.update_sortable(),this.update_empty()),this.showed(a)},i.prototype.attach_children=function(){for(var b=0;b<this.children.length;b++)a(this.dom_content_element).append(this.children[b].dom_element)},i.prototype.detach_children=function(){for(var b=0;b<this.children.length;b++)a(this.children[b].dom_element).detach()},i.prototype.recursive_showed=function(){this.showed(a);for(var b=0;b<this.children.length;b++)this.children[b].recursive_showed()},i.prototype.parse_attrs=function(b){for(var c=0;c<this.params.length;c++){var d=this.params[c];if(d.param_name in b)if(d.safe)this.attrs[d.param_name]=e(b[d.param_name]);else{var f=e(b[d.param_name]);this.attrs[d.param_name]=decodeURIComponent(f.replace(/^#E\-8_/,""))}else"value"in d&&_.isString(d.value)&&(this.attrs[d.param_name]=d.value)}for(var g in b)g in this.attrs||(this.attrs[g]=b[g]);a(document).trigger("glazed_edited_element",this.id)},i.prototype.parse_html=function(b){var c=this;if(0==a(b).children().closest_descendents("[data-azb]").length&&a.trim(a(b).html()).length>0){var d=new o(c,!1);d.children=[];var e=new p(d,!1),f=i.prototype.elements.az_text,g=new f(e,!1);g.attrs.content=a(b).html(),g.update_dom(),"update_empty"in c&&c.update_empty(),"update_empty"in e&&e.update_empty(),"update_empty"in d&&d.update_empty()}else a(b).children().closest_descendents("[data-azb]").each(function(){var b=a(this).attr("data-azb"),d=k;b in i.prototype.tags&&(d=i.prototype.tags[b]);var e=new d(c,!0);glazed_frontend&&(C.elements_instances[e.id]=null,delete C.elements_instances[e.id],e.id=a(this).attr("data-az-id"),C.elements_instances[e.id]=e),e.dom_element=a(this);var f={};if(a(a(this)[0].attributes).each(function(){this.nodeName.indexOf("data-azat")>=0&&(f[this.nodeName.replace("data-azat-","")]=this.value)}),e.parse_attrs(f),e.is_container){var g=a(this).closest_descendents("[data-azcnt]");g.length>0&&(e.dom_content_element=a(g),e.has_content?e instanceof k?(e.attrs.content=a(g).wrap("<div></div>").parent().html(),a(g).unwrap()):e.attrs.content=a(g).html():e.parse_html(g))}})},i.prototype.add_css=function(a,b,c){this.get_my_container().css[drupalSettings.glazedBuilder.glazedBaseUrl+a]=!0,b||window.glazed_add_css(a,c)},i.prototype.add_js_list=function(a){for(var b=this.get_my_container(),c=0;c<a.paths.length;c++)b.js[drupalSettings.glazedBuilder.glazedBaseUrl+a.paths[c]]=!0;window.glazed_add_js_list(a)},i.prototype.add_js=function(a){this.get_my_container().js[drupalSettings.glazedBuilder.glazedBaseUrl+a.path]=!0,window.glazed_add_js(a)},i.prototype.add_external_js=function(a,b){this.get_my_container().js[a]=!0,window.glazed_add_external_js(a,b)},i.prototype.get_my_container=function(){return this instanceof q?this:this.parent.get_my_container()},i.prototype.trigger_start_in_animation=function(){for(var a=0;a<this.children.length;a++)"trigger_start_in_animation"in this.children[a]&&this.children[a].trigger_start_in_animation()},i.prototype.trigger_start_out_animation=function(){for(var a=0;a<this.children.length;a++)"trigger_start_out_animation"in this.children[a]&&this.children[a].trigger_start_out_animation()},j("az_unknown",!0,k),k.prototype.has_content=!0,window.glazed_online="http:"==window.location.protocol||"https:"==window.location.protocol;var C=new h,D="",E="";drupalSettings.glazedBuilder.glazedEditor=!1;var F={};window.connect_container=function(b){if(a(b).length>0){var c=a(b).html();if(/^\s*\<[\s\S]*\>\s*$/.exec(c)||""==c&&drupalSettings.glazedBuilder.glazedAjaxUrl){a(b).find("> script").detach().appendTo("head"),a(b).find("> link[href]").detach().appendTo("head");var d=new q(null,!1);d.attrs.container=a(b).attr("data-az-type")+"/"+a(b).attr("data-az-name"),d.dom_element=a(b),a(d.dom_element).attr("data-az-id",d.id),d.dom_content_element=a(b),a(d.dom_element).css("display",""),a(d.dom_element).addClass("glazed"),a(d.dom_element).addClass("az-ctnr"),d.parse_html(d.dom_content_element),d.html_content=!0,d.loaded_container=d.attrs.container;for(var e=0;e<d.children.length;e++)d.children[e].recursive_render();glazed_frontend||(d.dom_content_element.empty(),drupalSettings.glazedBuilder.glazedEditor&&(d.show_controls(),d.update_sortable()),d.attach_children()),d.rendered=!0;for(var e=0;e<d.children.length;e++)d.children[e].recursive_showed()}else{""!=c.replace(/^\s+|\s+$/g,"")&&(F[a(b).attr("data-az-type")+"/"+a(b).attr("data-az-name")]=c.replace(/^\s+|\s+$/g,""));var d=new q(null,!1);d.attrs.container=a(b).attr("data-az-type")+"/"+a(b).attr("data-az-name"),d.render(a);var f=a(d.dom_element).attr("class")+" "+a(b).attr("class");f=a.unique(f.split(" ")).join(" "),a(d.dom_element).attr("class",f),a(d.dom_element).attr("style",a(b).attr("style")),a(d.dom_element).css("display",""),a(d.dom_element).addClass("glazed"),a(d.dom_element).addClass("az-ctnr");var g=a(b).attr("data-az-type"),h=a(b).attr("data-az-name");a(b).replaceWith(d.dom_element),a(d.dom_element).attr("data-az-type",g),a(d.dom_element).attr("data-az-name",h),d.showed(a),drupalSettings.glazedBuilder.glazedEditor&&d.show_controls()}return drupalSettings.glazedBuilder.glazedEditor&&a(d.dom_element).addClass("glazed-editor"),d}return null},c(l,i),l.prototype.params=[{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],l.prototype.set_in_timeout=function(){var b=this;b.in_timeout=setTimeout(function(){b.clear_animation(),a(b.dom_element).css("opacity",""),a(b.dom_element).removeClass("animated"),a(b.dom_element).removeClass(b.attrs.an_in),a(b.dom_element).removeClass(b.attrs.an_out),b.animation_in=!1,b.animation_out=!1,a(b.dom_element).css("animation-duration",b.attrs.an_duration+"ms"),a(b.dom_element).css("-webkit-animation-duration",b.attrs.an_duration+"ms"),a(b.dom_element).addClass("animated"),b.animated=!0,"yes"==b.attrs.an_infinite&&a(b.dom_element).addClass("infinite"),a(b.dom_element).addClass(b.attrs.an_in),b.animation_in=!0},Math.round(b.attrs.an_in_delay))},l.prototype.start_in_animation=function(){var b=this;0==a(b.dom_element).parents(".glazed-animations-disabled").length&&""!=b.attrs.an_in&&(b.animated?b.animation_out?b.set_in_timeout():b.out_timeout>0&&(clearTimeout(b.out_timeout),b.hidden_after_in||b.set_in_timeout()):b.set_in_timeout())},l.prototype.set_out_timeout=function(){var b=this;b.out_timeout=setTimeout(function(){b.clear_animation(),a(b.dom_element).css("opacity",""),a(b.dom_element).removeClass("animated"),a(b.dom_element).removeClass(b.attrs.an_in),a(b.dom_element).removeClass(b.attrs.an_out),b.animation_in=!1,b.animation_out=!1,a(b.dom_element).css("animation-duration",b.attrs.an_duration+"ms"),a(b.dom_element).css("-webkit-animation-duration",b.attrs.an_duration+"ms"),a(b.dom_element).addClass("animated"),b.animated=!0,"yes"==b.attrs.an_infinite&&a(b.dom_element).addClass("infinite"),a(b.dom_element).addClass(b.attrs.an_out),b.animation_out=!0},Math.round(b.attrs.an_out_delay))},l.prototype.start_out_animation=function(){var b=this;0==a(b.dom_element).parents(".glazed-animations-disabled").length&&""!=b.attrs.an_out&&(b.animated?b.animation_in?b.set_out_timeout():b.in_timeout>0&&(clearTimeout(b.in_timeout),b.hidden_before_in||b.set_out_timeout()):b.set_out_timeout())},l.prototype.clear_animation=function(){this.animation_in&&(this.hidden_before_in&&a(this.dom_element).css("opacity","1"),this.hidden_after_in&&a(this.dom_element).css("opacity","0")),this.animation_out&&(this.hidden_before_in&&a(this.dom_element).css("opacity","0"),this.hidden_after_in&&a(this.dom_element).css("opacity","1")),a(this.dom_element).hasClass("animated")&&(a(this.dom_element).css("animation-duration",""),a(this.dom_element).css("-webkit-animation-duration",""),a(this.dom_element).removeClass("animated"),this.animated=!1,a(this.dom_element).removeClass("infinite"),a(this.dom_element).removeClass(this.attrs.an_in),a(this.dom_element).removeClass(this.attrs.an_out),this.animation_in=!1,this.animation_out=!1)},l.prototype.end_animation=function(){this.in_timeout=0,this.out_timeout=0,this.animation_in&&(this.clear_animation(),"hover"!=this.attrs.an_start||this.hover||this.attrs.an_in!=this.attrs.an_out&&this.start_out_animation()),this.animation_out&&(this.clear_animation(),"hover"==this.attrs.an_start&&this.hover&&this.attrs.an_in!=this.attrs.an_out&&this.start_in_animation())},l.prototype.trigger_start_in_animation=function(){"trigger"==this.attrs.an_start?this.start_in_animation():l.baseclass.prototype.trigger_start_in_animation.apply(this,arguments)},l.prototype.trigger_start_out_animation=function(){"trigger"==this.attrs.an_start?this.start_out_animation():l.baseclass.prototype.trigger_start_out_animation.apply(this,arguments)},l.prototype.animation=function(){var b=this;b.hidden_before_in=_.indexOf(b.attrs.an_hidden.split(","),"before_in")>=0,b.hidden_after_in=_.indexOf(b.attrs.an_hidden.split(","),"after_in")>=0,b.hidden_before_in&&a(b.dom_element).css("opacity","0"),b.hidden_after_in&&a(b.dom_element).css("opacity","1");var c=b.attrs.an_parent;""==c&&(c=1),c=Math.round(c);for(var d=0,e=a(b.dom_element);d<c;)e=a(e).parent().closest("[data-az-id]"),d++;if(""!=b.attrs.an_start){b.in_timeout=0,b.out_timeout=0,b.animated=!1,b.animation_in=!1,b.animation_out=!1;var f=function(){switch(a(e).off("click.az_animation"+b.id),a(e).off("mouseenter.az_animation"+b.id),a(e).off("mouseleave.az_animation"+b.id),b.attrs.an_start){case"click":a(e).on("click.az_animation"+b.id,function(){b.animated||b.start_in_animation()});break;case"appear":b.add_js({path:"vendor/jquery.waypoints/lib/jquery.waypoints.min.js",loaded:"waypoint"in a.fn,callback:function(){a(b.dom_element).waypoint(function(a){b.animated||b.start_in_animation()},{offset:b.attrs.an_offset+"%",handler:function(a){this.destroy()}}),a(document).trigger("scroll")}});break;case"hover":a(e).on("mouseenter.az_animation"+b.id,function(){b.hover=!0,b.start_in_animation()}),a(e).on("mouseleave.az_animation"+b.id,function(){b.hover=!1,b.start_out_animation()})}};b.add_css("vendor/animate.css/animate.min.css",!1,function(){f()})}},l.prototype.showed=function(a){l.baseclass.prototype.showed.apply(this,arguments),this.an_name="","an_name"in this.attrs&&""!=this.attrs.an_name&&(this.an_name=this.attrs.an_name,C.elements_instances_by_an_name[this.an_name]=this),"an_start"in this.attrs&&""!=this.attrs.an_start&&"no"!=this.attrs.an_start&&this.animation()},l.prototype.render=function(a){"an_name"in this.attrs&&""!=this.attrs.an_name&&a(this.dom_element).attr("data-an-name",this.attrs.an_name),l.baseclass.prototype.render.apply(this,arguments)},m("az_section",!0,n),n.prototype.params=[{param_name:"fluid",value:"",safe:!0},{param_name:"effect",value:"",safe:!0},{param_name:"parallax_speed",value:"",safe:!0},{param_name:"parallax_mode",value:"",safe:!0},{param_name:"video_options",value:"",safe:!0},{param_name:"video_youtube",value:"",safe:!0},{param_name:"video_start",value:"0",safe:!0},{param_name:"video_stop",value:"0",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],n.prototype.showed=function(a){function b(a){var b=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,c=a.match(b);return!(!c||11!=c[7].length)&&c[7]}n.baseclass.prototype.showed.apply(this,arguments);var c=this;switch(this.attrs.effect){case"parallax":this.add_js_list({paths:["vendor/jquery.parallax/jquery.parallax.js","vendor/jquery.waypoints/lib/jquery.waypoints.min.js"],loaded:"waypoint"in a.fn&&"parallax"in a.fn,callback:function(){a(c.dom_element).waypoint(function(b){var d=a(c.dom_element).css("background-position"),e=d.match(/([\w%]*) [\w%]/);if(null==e)var f="50%";else var f=e[1];a(c.dom_element).css("background-attachment",c.attrs.parallax_mode),a(c.dom_element).css("background-position",f+" 0"),a(c.dom_element).parallax(f,c.attrs.parallax_speed/100)},{offset:"300%",handler:function(a){this.destroy()}}),a(document).trigger("scroll")}});break;case"fixed":a(c.dom_element).css("background-attachment","fixed");break;case"youtube":var d=_.indexOf(c.attrs.video_options.split(","),"loop")>=0,e=_.indexOf(c.attrs.video_options.split(","),"mute")>=0;this.add_css("vendor/jquery.mb.YTPlayer/dist/css/jquery.mb.YTPlayer.min.css","mb_YTPlayer"in a.fn,function(){}),this.add_js_list({paths:["vendor/jquery.mb.YTPlayer/dist/jquery.mb.YTPlayer.min.js","vendor/jquery.waypoints/lib/jquery.waypoints.min.js"],loaded:"waypoint"in a.fn&&"mb_YTPlayer"in a.fn,callback:function(){a(c.dom_element).waypoint(function(f){a(c.dom_element).attr("data-property","{videoURL:'"+b(c.attrs.video_youtube)+"',containment:'[data-az-id="+c.id+"]', showControls:false, autoPlay:true, loop:"+d.toString()+", mute:"+e.toString()+", startAt:"+c.attrs.video_start+", stopAt:"+c.attrs.video_stop+", opacity:1, addRaster:false}"),a(c.dom_element).mb_YTPlayer(),a(c.dom_element).playYTP()},{offset:"300%",handler:function(a){this.destroy()}}),a(document).trigger("scroll")}})}},m("az_row",!0,o),o.prototype.params=[{param_name:"device",value:"",safe:!0},{param_name:"equal",value:"",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],o.prototype.showed=function(a){o.baseclass.prototype.showed.apply(this,arguments);var b=a(this.dom_element);b.addClass("az-row--"+this.attrs.device),this.attrs.equal&&"yes"===this.attrs.equal&&b.addClass("az-row--equal-height")},o.prototype.set_columns=function(a){},j("az_column",!0,p),p.prototype.params=[{param_name:"width",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],m("az_container",!0,q),q.prototype.params=[{param_name:"container",value:"/",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],q.prototype.showed=function(a){q.baseclass.prototype.showed.apply(this,arguments);var b=this;null==this.parent?b.rendered||(b.rendered=!0,b.load_container()):this.add_js({path:"vendor/jquery.waypoints/lib/jquery.waypoints.min.js",loaded:"waypoint"in a.fn,callback:function(){a(b.dom_element).waypoint(function(a){b.rendered||(b.rendered=!0,b.load_container())},{offset:"100%",handler:function(a){this.destroy()}}),a(document).trigger("scroll")}})},q.prototype.load_container=function(){var c=this;window.loadedContainers=window.loadedContainers||{},window.loadedContainers[c.id]||(window.loadedContainers[c.id]=!0,""!=this.attrs.container&&b(this.attrs.container.split("/")[0],this.attrs.container.split("/")[1],function(b){if(/^\s*\<[\s\S]*\>\s*$/.exec(b)){c.loaded_container=c.attrs.container,a(b).appendTo(c.dom_content_element),a(c.dom_content_element).find("> script").detach().appendTo("head"),a(c.dom_content_element).find("> link[href]").detach().appendTo("head"),a(c.dom_element).css("display",""),a(c.dom_element).addClass("glazed"),c.parse_html(c.dom_content_element),a(c.dom_element).attr("data-az-id",c.id),c.html_content=!0;for(var d=0;d<c.children.length;d++)c.children[d].recursive_render();c.dom_content_element.empty(),drupalSettings.glazedBuilder.glazedEditor&&(c.show_controls(),c.update_sortable()),c.parent.attach_children(),c.attach_children();for(var d=0;d<c.children.length;d++)c.children[d].recursive_showed();a(document).trigger("scroll")}else if(!glazed_frontend){c.loaded_container=c.attrs.container,c.parse_shortcode(b),a(c.dom_element).attr("data-az-id",c.id),drupalSettings.glazedBuilder.glazedEditor&&(c.show_controls(),c.update_sortable());for(var d=0;d<c.children.length;d++)c.children[d].recursive_render();c.attach_children(),null!=c.parent&&c.parent.update_dom();for(var d=0;d<c.children.length;d++)c.children[d].recursive_showed();a(document).trigger("scroll")}C.try_render_unknown_elements()}))},q.prototype.update_dom=function(){this.loaded_container!=this.attrs.container&&(this.children=[],a(this.dom_content_element).empty(),this.rendered=!1,null!=this.parent&&q.baseclass.prototype.update_dom.apply(this,arguments))},q.prototype.render=function(a){this.dom_element=a('<div class="az-element az-container"><div class="az-ctnr"></div></div>'),this.dom_content_element=a(this.dom_element).find(".az-ctnr"),q.baseclass.prototype.render.apply(this,arguments)},q.prototype.recursive_render=function(){glazed_frontend?(this.render(a),this.children=[]):q.baseclass.prototype.recursive_render.apply(this,arguments),drupalSettings.glazedBuilder.glazedEditor&&(this.show_controls(),this.update_sortable())},m("az_layers",!0,r),r.prototype.params=[{param_name:"width",value:"100%",safe:!0},{param_name:"height",value:"500",safe:!0},{param_name:"responsive",value:"",safe:!0},{param_name:"o_width",value:"",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],r.prototype.showed=function(a){function b(a,b){var c="",d=a.attrs[b].match(/font-size[: ]*([\-\d\.]*)(px|%|em) *;/);return null!=d&&(c=d[1]),c}function c(e,f){var g=b(e,"style");""!=g&&(g*=f,a(e.dom_element).css("font-size",g+"px"));for(var h=0;h<e.children.length;h++)c(d.children[h],f)}r.baseclass.prototype.showed.apply(this,arguments);var d=this;a(window).off("resize.az_layers"+d.id),"yes"==this.attrs.responsive&&(a(window).on("resize.az_layers"+d.id,function(){var b=a(d.dom_element).width();"o_width"in d.attrs&&""!=d.attrs.o_width||(d.attrs.o_width=b);var e=b/d.attrs.o_width;a(d.dom_element).css("font-size",100*e+"%"),a(d.dom_content_element).css("height",d.attrs.height*e+"px"),c(d,e)}),a(window).trigger("resize"))},m("az_tabs",!0,s),s.prototype.params=[{param_name:"az_dirrection",value:"",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],s.prototype.showed=function(a){s.baseclass.prototype.showed.apply(this,arguments),a(this.dom_element).find("ul.nav-tabs li:first a")[E+"tab"]("show")},s.prototype.render=function(a){this.dom_element=a('<div class="az-element az-tabs tabbable '+this.get_el_classes()+" "+this.get_content_classes()+this.attrs.az_dirrection+'" style="'+this.attrs.style+'"></div>');for(var b='<ul class="nav nav-tabs" role="tablist">',c=0;c<this.children.length;c++)b+='<li><a href="#'+this.children[c].id+'" role="tab" data-toggle="tab">'+this.children[c].attrs.title+"</a></li>";b+="</ul>",a(this.dom_element).append(b);var d='<div id="'+this.id+'" class="tab-content"></div>';this.dom_content_element=a(d).appendTo(this.dom_element),s.baseclass.prototype.render.apply(this,arguments)},j("az_tab",!0,t),t.prototype.params=[{param_name:"title",value:"Title",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],t.prototype.render=function(a){this.dom_element=a('<div id="'+this.id+'" class="az-element az-ctnr az-tab tab-pane '+this.get_el_classes()+" "+this.get_content_classes()+'" style="'+this.attrs.style+'"></div>'),this.dom_content_element=this.dom_element,t.baseclass.prototype.render.apply(this,arguments)},m("az_accordion",!0,u),u.prototype.params=[{param_name:"collapsed",value:"",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],u.prototype.showed=function(a){u.baseclass.prototype.showed.apply(this,arguments),a(this.dom_element).find("> .az-toggle > .in").removeClass(D+"in"),a(this.dom_element).find("> .az-toggle > .collapse:not(:first)")[E+"collapse"]({toggle:!1,parent:"#"+this.id}),a(this.dom_element).find("> .az-toggle > .collapse:first")[E+"collapse"]({toggle:"yes"!=this.attrs.collapsed,parent:"#"+this.id})},u.prototype.render=function(a){this.dom_element=a('<div id="'+this.id+'" class="az-element az-accordion panel-group '+this.get_el_classes()+" "+this.get_content_classes()+'" style="'+this.attrs.style+'"></div>'),this.dom_content_element=this.dom_element,u.baseclass.prototype.render.apply(this,arguments)},j("az_toggle",!0,v),v.prototype.params=[{param_name:"title",value:"Title",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],v.prototype.render=function(a){var b="panel-default";""!=this.parent.attrs.type&&(b=this.parent.attrs.type),this.dom_element=a('<div class="az-element az-toggle panel '+b+" "+this.attrs.el_class+'" style="'+this.attrs.style+'"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#'+this.parent.id+'" href="#'+this.id+'">'+this.attrs.title+'</a></h4></div><div id="'+this.id+'" class="panel-collapse collapse"><div class="panel-body az-ctnr"></div></div></div>'),this.dom_content_element=a(this.dom_element).find(".panel-body"),v.baseclass.prototype.render.apply(this,arguments)},m("az_carousel",!0,w),w.prototype.params=[{param_name:"autoPlay",value:"",safe:!0},{param_name:"interval",value:"5000",safe:!0},{param_name:"items",value:"1",safe:!0},{param_name:"options",value:"",safe:!0},{param_name:"transition",value:"",safe:!0},{param_name:"an_start",value:"",safe:!0},{param_name:"an_in",value:"",safe:!0},{param_name:"an_out",value:"",safe:!0},{param_name:"an_hidden",value:"",safe:!0},{param_name:"an_infinite",value:"",safe:!0},{param_name:"an_offset",value:"100",safe:!0},{param_name:"an_duration",value:"1000",safe:!0},{param_name:"an_in_delay",value:"0",safe:!0},{param_name:"an_out_delay",value:"0",safe:!0},{param_name:"an_parent",value:"1",safe:!0},{param_name:"an_name",value:"",safe:!0},{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],w.prototype.frontend_render=!0,w.prototype.showed=function(a){w.baseclass.prototype.showed.apply(this,arguments);var b=function(a){var b="[data-az-id="+a.id+"] .st-owl-theme";return output='<style id="carousel-style-'+a.id+'">\x3c!-- ',"triangle"==a.attrs.pagination_shape?(output+=b+" .owl-page {background:transparent !important; border-bottom-color: "+a.attrs.pagination_color+" !important}",output+=b+" .owl-page.active {background:transparent !important; border-bottom-color: "+a.attrs.pagination_active_color+" !important}"):(output+=b+" .owl-page {background: "+a.attrs.pagination_color+" !important}",output+=b+" .owl-page.active {background: "+a.attrs.pagination_active_color+" !important}"),output+=b+" .owl-buttons .owl-prev::after, "+b+" .owl-buttons .owl-next::after,"+b+" .owl-buttons .owl-prev::before, "+b+" .owl-buttons .owl-next::before {background: "+a.attrs.navigation_icon_color+";width: "+a.attrs.navigation_thickness+"px;}",output+=b+" .owl-buttons .owl-prev:hover::after, "+b+" .owl-buttons .owl-next:hover::after,"+b+" .owl-buttons .owl-prev:hover::before, "+b+" .owl-buttons .owl-next:hover::before {background: "+a.attrs.navigation_icon_hover_color+"}",output+=b+" .owl-buttons .owl-prev, "+b+" .owl-buttons .owl-next {background: "+a.attrs.navigation_background_color+";border-color: "+a.attrs.navigation_background_color+" }",output+=b+" .owl-buttons .owl-prev:hover, "+b+" .owl-buttons .owl-next:hover {background: "+a.attrs.navigation_background_hover_color+";border-color: "+a.attrs.navigation_background_hover_color+" }",output+=" --\x3e</style>",output};this.add_css("vendor/owl.carousel/owl-carousel/owl.carousel.css","owlCarousel"in a.fn,function(){}),this.add_css("css/st-owl-carousel.css","owlCarousel"in a.fn,function(){}),this.add_css("vendor/owl.carousel/owl-carousel/owl.transitions.css","owlCarousel"in a.fn,function(){});var c=this;this.add_js({path:"vendor/owl.carousel/owl-carousel/owl.carousel.js",loaded:"owlCarousel"in a.fn,callback:function(){var d=function(b){var c=null;c="userItems"in b?b.userItems:b.$userItems;var d=null;d="visibleItems"in b?b.visibleItems:b.$visibleItems;for(var e=0;e<c.length;e++)if(_.indexOf(d,e)<0){var f=c[e],g=a(f).attr("data-az-id"),h=C.get_element(g);_.isUndefined(h)||"trigger_start_out_animation"in h&&h.trigger_start_out_animation()}for(var e=0;e<d.length;e++)if(d[e]<c.length){var f=c[d[e]],g=a(f).attr("data-az-id"),h=C.get_element(g);_.isUndefined(h)||"trigger_start_in_animation"in h&&h.trigger_start_in_animation()}},e="st-owl-theme";c.attrs.pagination&&(c.attrs.pagination_orientation&&(e+=" st-owl-pager-"+c.attrs.pagination_orientation),c.attrs.pagination_shape&&(e+=" st-owl-pager-"+c.attrs.pagination_shape),c.attrs.pagination_transform&&(e+=" st-owl-pager-"+c.attrs.pagination_transform)),c.attrs.navigation&&(c.attrs.navigation_orientation&&(e+=" st-owl-navigation-"+c.attrs.navigation_orientation),c.attrs.navigation_shape&&(e+=" st-owl-navigation-"+c.attrs.navigation_shape),c.attrs.navigation_position&&(e+=" st-owl-navigation-"+c.attrs.navigation_position));var f=!1;!Boolean(c.attrs.autoplay)&&c.attrs.interval>0&&(f=c.attrs.interval),a(c.dom_content_element).owlCarousel({addClassActive:!0,afterAction:function(){d(this.owl)},afterMove:function(){},autoPlay:f,beforeMove:function(){},items:c.attrs.items,mouseDrag:!0,navigation:Boolean(c.attrs.navigation),navigationText:!1,pagination:Boolean(c.attrs.pagination),singleItem:"1"==c.attrs.items,startDragging:function(){},stopOnHover:Boolean(c.attrs.stopOnHover),theme:e,touchDrag:!0,transitionStyle:""!=c.attrs.transition&&c.attrs.transition}),d(c.dom_content_element.data("owlCarousel")),"outside"!=c.attrs.navigation_orientation||"topLeft"!=c.attrs.navigation_position&&"topRight"!=c.attrs.navigation_position&&"topCenter"!=c.attrs.navigation_position||a(c.dom_content_element).find(".owl-buttons").prependTo(a(c.dom_content_element)),a("head").find("#carousel-style-"+c.id).remove(),a("head").append(b(c))}})},w.prototype.render=function(a){this.dom_element=a('<div id="'+this.id+'" class="az-element az-carousel '+this.get_el_classes()+" "+this.get_content_classes()+'" style="'+this.attrs.style+'"></div>'),this.dom_content_element=a("<div></div>").appendTo(this.dom_element),w.baseclass.prototype.render.apply(this,arguments)},j("az_slide",!0,x),x.prototype.params=[{param_name:"el_class",value:"",safe:!0},{param_name:"style",value:"",safe:!0},{param_name:"hover_style",value:"",safe:!0},{param_name:"pos_left",value:"",safe:!0},{param_name:"pos_right",value:"",safe:!0},{param_name:"pos_top",value:"",safe:!0},{param_name:"pos_bottom",value:"",safe:!0},{param_name:"pos_width",value:"",safe:!0},{param_name:"pos_height",value:"",safe:!0},{param_name:"pos_zindex",value:"",safe:!0}],x.prototype.frontend_render=!0,x.prototype.render=function(a){""!=this.parent.attrs.type&&this.parent.attrs.type,this.dom_element=a('<div class="az-element az-slide az-ctnr '+this.get_el_classes()+" "+this.get_content_classes()+' clearfix" style="'+this.attrs.style+'"></div>'),this.dom_content_element=this.dom_element,x.baseclass.prototype.render.apply(this,arguments)},"glazed_elements"in window||(window.glazed_elements=[]),window.glazed_elements.push({base:"az_alert",params:[{param_name:"message",value:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{param_name:"type",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_blockquote",params:[{param_name:"content",value:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{param_name:"cite",value:""},{param_name:"reverse",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0,has_content:!0}),window.glazed_elements.push({base:"az_button",params:[{param_name:"title",value:""},{param_name:"link",value:""},{param_name:"link_target",value:""},{param_name:"type",value:""},{param_name:"block",value:""},{param_name:"size",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_circle_counter",showed:function(a){switch(this.baseclass.prototype.showed.apply(this,arguments),this.attrs.icon.charAt(0)){case"e":this.add_css("vendor/et-line-font/et-line-font.css","ETLineFont"in a.fn,function(){});break;case"f":this.add_css("vendor/font-awesome/css/font-awesome.min.css","fontAwesome"in a.fn,function(){});break;case"p":this.add_css("vendor/pe-icon-7-stroke/css/pe-icon-7-stroke.css","PELineFont"in a.fn,function(){})}var b=this;this.add_css("vendor/jquery.circliful/css/jquery.circliful.css","circliful"in a.fn,function(){}),this.add_js_list({paths:["vendor/jquery.circliful/js/jquery.circliful.min.js","vendor/jquery.waypoints/lib/jquery.waypoints.min.js"],loaded:"waypoint"in a.fn&&"circliful"in a.fn,callback:function(){a(b.dom_element).waypoint(function(c){a(b.dom_element).find("#"+b.id).once().circliful()},{offset:"100%",handler:function(a){this.destroy()}}),a(document).trigger("scroll")}})},params:[{param_name:"fgcolor",value:"#333333"},{param_name:"bgcolor",value:"#999999"},{param_name:"fill",value:""},{param_name:"type",value:""},{param_name:"dimension",value:"250"},{param_name:"text",value:""},{param_name:"fontsize",value:"16"},{param_name:"info",value:""},{param_name:"width",value:"5"},{param_name:"percent",value:"50"},{param_name:"border",value:""},{param_name:"icon",value:""},{param_name:"icon_size",value:"16"},{param_name:"icon_color",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],frontend_render:!0,render:function(a){if(this.attrs.icon)var b='" data-icon=" '+this.attrs.icon+'" data-iconsize="'+this.attrs.icon_size+'" data-iconcolor="'+this.attrs.icon_color;else var b="";this.dom_element=a('<div class="az-element az-circle-counter '+this.get_el_classes()+" "+this.get_content_classes()+'" style="'+this.attrs.style+'"><div id="'+this.id+'" data-dimension="'+this.attrs.dimension+'" data-text="'+this.attrs.text+'" data-info="'+this.attrs.info+'" data-width="'+this.attrs.width+'" data-fontsize="'+this.attrs.fontsize+'" data-type="'+this.attrs.type+'" data-percent="'+this.attrs.percent+'" data-fgcolor="'+this.attrs.fgcolor+'" data-bgcolor="'+this.attrs.bgcolor+'" data-fill="'+this.attrs.fill+'" data-border="'+this.attrs.border+b+'"></div></div>'),this.baseclass.prototype.render.apply(this,arguments)}}),window.glazed_elements.push({base:"az_countdown",showed:function(a){this.baseclass.prototype.showed.apply(this,arguments);var b=this;this.add_css("vendor/counteverest/css/counteverest.glazed.css","countEverest"in a.fn,function(){}),this.add_js_list({paths:["vendor/counteverest/js/vendor/jquery.counteverest.min.js","vendor/datetimepicker/jquery.datetimepicker.js"],loaded:"countEverest"in a.fn&&"datetimepicker"in a.fn,callback:function(){function c(b,c){b.each(function(b){var c=a(this),d=c.find(".ce-flip-front"),e=c.find(".ce-flip-back"),f=e.text(),g=c.attr("data-old");void 0===g&&c.attr("data-old",f),f!=g&&(c.addClass("ce-animate"),window.setTimeout(function(){d.text(f),c.removeClass("ce-animate").attr("data-old",f)},800))})}function d(a){return Math.PI/180*a-Math.PI/2}function e(a,b,c){var e=a.getContext("2d");e.clearRect(0,0,a.width,a.height),e.lineWidth=6,e.beginPath(),e.arc(a.width/2,a.height/2,a.width/2-e.lineWidth,d(0),d(360/c*(c-b)),!1),e.strokeStyle="#282828",e.stroke(),e.beginPath(),e.arc(a.width/2,a.height/2,a.width/2-e.lineWidth,d(0),d(360/c*(c-b)),!0),e.strokeStyle="#0180ef",e.stroke()}var f={};switch(b.attrs.countdown_style){case"style6":(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0)&&a("html").addClass("internet-explorer"),f={daysWrapper:".ce-days .ce-flip-back",hoursWrapper:".ce-hours .ce-flip-back",minutesWrapper:".ce-minutes .ce-flip-back",secondsWrapper:".ce-seconds .ce-flip-back",wrapDigits:!1,onChange:function(){c(a(b.dom_element).find(".ce-countdown .ce-col>div"),this)}};break;case"style9":f={leftHandZeros:!1,onChange:function(){e(a(b.dom_element).find("#ce-days").get(0),this.days,365),e(a(b.dom_element).find("#ce-hours").get(0),this.hours,24),e(a(b.dom_element).find("#ce-minutes").get(0),this.minutes,60),e(a(b.dom_element).find("#ce-seconds").get(0),this.seconds,60)}};break;case"style10":var g=a(b.dom_element).find(".ce-countdown"),h=!0;f={leftHandZeros:!0,dayLabel:null,hourLabel:null,minuteLabel:null,secondLabel:null,afterCalculation:function(){var b=this,c={days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds},d={hours:"23",minutes:"59",seconds:"59"},e="active",f="before";1==h&&(h=!1,g.find(".ce-unit-wrap div").each(function(){var b=a(this),d=b.attr("class"),e=d.substring(3);value=c[e],sub="",dig="";for(var f=0;f<10;f++)sub+=['<div class="ce-digits-inner">','<div class="ce-flip-wrap">','<div class="ce-up">','<div class="ce-shadow"></div>','<div class="ce-inn">'+f+"</div>","</div>",'<div class="ce-down">','<div class="ce-shadow"></div>','<div class="ce-inn">'+f+"</div>","</div>","</div>","</div>"].join("");for(var g=0;g<value.length;g++)dig+='<div class="ce-digits">'+sub+"</div>";b.append(dig)})),a.each(c,function(a){for(var c,h=g.find(".ce-"+a+" .ce-digits").length,i=d[a],j=b.strPad(this,h,"0"),k=j.length-1;k>=0;k--){var l=g.find(".ce-"+a+" .ce-digits:eq("+k+")"),m=l.find("div.ce-digits-inner");c=i?0==i[k]?9:i[k]:9;var n=parseInt(j[k]),o=n==c?0:n+1;m.eq(o).hasClass(e)&&m.parent().addClass("play"),m.removeClass(e).removeClass(f),m.eq(n).addClass(e),m.eq(o).addClass(f)}})}}}switch(b.attrs.counter_scope){case"date":var i=Date.parseDate(b.attrs.date,"d.m.Y");null!=i&&a(b.dom_element).countEverest(a.extend(f,{day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear()}));break;case"date_time":var i=Date.parseDate(b.attrs.date_time,"d.m.Y H");null!=i&&a(b.dom_element).countEverest(a.extend(f,{day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear(),hour:i.getHours()}));break;case"repeating":var i=new Date;i.setHours(b.attrs.time),null!=i&&a(b.dom_element).countEverest(a.extend(f,{day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear(),hour:i.getHours(),onComplete:function(){""!=b.attrs.referrer&&window.location.replace(b.attrs.referrer)}}));break;case"resetting":if(""!=b.attrs.saved){var j=new Date(b.attrs.saved),k=1e3*(60*Math.round(b.attrs.reset_hours)*60+60*Math.round(b.attrs.reset_minutes)+Math.round(b.attrs.reset_seconds));if("yes"==b.attrs.restart){var l=new Date,m=l.getTime()-j.getTime(),n=m/k;m-=Math.floor(n)*k;var o=k-m,i=new Date(l.getTime()+o);a(b.dom_element).countEverest(a.extend(f,{day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear(),hour:i.getHours(),minute:i.getMinutes(),second:i.getSeconds(),onComplete:function(){""!=b.attrs.referrer&&window.location.replace(b.attrs.referrer)}}))}else{var i=new Date(j.getTime()+k);a(b.dom_element).countEverest(a.extend(f,{day:i.getDate(),month:i.getMonth()+1,year:i.getFullYear(),hour:i.getHours(),minute:i.getMinutes(),second:i.getSeconds(),onComplete:function(){""!=b.attrs.referrer&&window.location.replace(b.attrs.referrer)}}))}}}}})},params:[{param_name:"countdown_style",value:""},{param_name:"counter_scope",value:""},{param_name:"date",value:""},{param_name:"date_time",value:""},{param_name:"time",value:""},{param_name:"reset_hours",value:""},{param_name:"reset_minutes",value:""},{param_name:"reset_seconds",value:""},{param_name:"referrer",value:""},{param_name:"restart",value:""},{param_name:"saved",value:""},{param_name:"display",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],frontend_render:!0,render:function(a){this.dom_element=a('<div class="az-element az-countdown '+this.get_el_classes()+" "+this.get_content_classes()+'" style="'+this.attrs.style+'"></div>');var b=a('<div class="ce-countdown"></div>').appendTo(this.dom_element);switch(this.attrs.countdown_style){case"style1":a(this.dom_element).addClass("ce-countdown--theme-1"),_.indexOf(this.attrs.display.split(","),"days")>=0&&a(b).append('<div class="ce-col"><span class="ce-days"></span> <span class="ce-days-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"hours")>=0&&a(b).append('<div class="ce-col"><span class="ce-hours"></span> <span class="ce-hours-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"minutes")>=0&&a(b).append('<div class="ce-col"><span class="ce-minutes"></span> <span class="ce-minutes-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"seconds")>=0&&a(b).append('<div class="ce-col"><span class="ce-seconds"></span> <span class="ce-seconds-label"></span></div>');break;case"style6":a(this.dom_element).addClass("ce-countdown--theme-6 clearfix"),_.indexOf(this.attrs.display.split(","),"days")>=0&&a(b).append('<div class="ce-col col-md-3"><div class="ce-days"><div class="ce-flip-wrap"><div class="ce-flip-front bg-primary"></div><div class="ce-flip-back bg-primary"></div></div></div><span class="ce-days-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"hours")>=0&&a(b).append('<div class="ce-col col-md-3"><div class="ce-hours"><div class="ce-flip-wrap"><div class="ce-flip-front bg-primary"></div><div class="ce-flip-back bg-primary"></div></div></div><span class="ce-hours-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"minutes")>=0&&a(b).append('<div class="ce-col col-md-3"><div class="ce-minutes"><div class="ce-flip-wrap"><div class="ce-flip-front bg-primary"></div><div class="ce-flip-back bg-primary"></div></div></div><span class="ce-minutes-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"seconds")>=0&&a(b).append('<div class="ce-col col-md-3"><div class="ce-seconds"><div class="ce-flip-wrap"><div class="ce-flip-front bg-primary"></div><div class="ce-flip-back bg-primary"></div></div></div><span class="ce-seconds-label"></span></div>');break;case"style9":a(this.dom_element).addClass("ce-countdown--theme-9"),_.indexOf(this.attrs.display.split(","),"days")>=0&&a(b).append('<div class="ce-circle"><canvas id="ce-days" width="408" height="408"></canvas><div class="ce-circle__values"><span class="ce-digit ce-days"></span><span class="ce-label ce-days-label"></span></div></div>'),_.indexOf(this.attrs.display.split(","),"hours")>=0&&a(b).append('<div class="ce-circle"><canvas id="ce-hours" width="408" height="408"></canvas><div class="ce-circle__values"><span class="ce-digit ce-hours"></span><span class="ce-label ce-hours-label"></span></div></div>'),_.indexOf(this.attrs.display.split(","),"minutes")>=0&&a(b).append('<div class="ce-circle"><canvas id="ce-minutes" width="408" height="408"></canvas><div class="ce-circle__values"><span class="ce-digit ce-minutes"></span><span class="ce-label ce-minutes-label"></span></div></div>'),_.indexOf(this.attrs.display.split(","),"seconds")>=0&&a(b).append('<div class="ce-circle"><canvas id="ce-seconds" width="408" height="408"></canvas><div class="ce-circle__values"><span class="ce-digit ce-seconds"></span><span class="ce-label ce-seconds-label"></span></div></div>');break;case"style10":a(this.dom_element).addClass("ce-countdown--theme-10"),_.indexOf(this.attrs.display.split(","),"days")>=0&&a(b).append('<div class="ce-unit-wrap"><div class="ce-days"></div><span class="ce-days-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"hours")>=0&&a(b).append('<div class="ce-unit-wrap"><div class="ce-hours"></div><span class="ce-hours-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"minutes")>=0&&a(b).append('<div class="ce-unit-wrap"><div class="ce-minutes"></div><span class="ce-minutes-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"seconds")>=0&&a(b).append('<div class="ce-unit-wrap"><div class="ce-seconds"></div><span class="ce-seconds-label"></span></div>');break;case"style12":a(this.dom_element).addClass("ce-countdown--theme-12"),_.indexOf(this.attrs.display.split(","),"days")>=0&&a(b).append('<div class="ce-col"><div class="ce-days ce-digits"></div> <span class="ce-days-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"hours")>=0&&a(b).append('<div class="ce-col"><div class="ce-hours ce-digits"></div> <span class="ce-hours-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"minutes")>=0&&a(b).append('<div class="ce-col"><div class="ce-minutes ce-digits"></div> <span class="ce-minutes-label"></span></div>'),_.indexOf(this.attrs.display.split(","),"seconds")>=0&&a(b).append('<div class="ce-col"><div class="ce-seconds ce-digits"></div> <span class="ce-seconds-label"></span></div>');break;default:_.indexOf(this.attrs.display.split(","),"days")>=0&&a(b).append('<span class="lead ce-days"></span> <span class="lead ce-days-label"></span> '),_.indexOf(this.attrs.display.split(","),"hours")>=0&&a(b).append('<span class="lead ce-hours"></span> <span class="lead ce-hours-label"></span> '),_.indexOf(this.attrs.display.split(","),"minutes")>=0&&a(b).append('<span class="lead ce-minutes"></span> <span class="lead ce-minutes-label"></span> '),_.indexOf(this.attrs.display.split(","),"seconds")>=0&&a(b).append('<span class="lead ce-seconds"></span> <span class="lead ce-seconds-label"></span> ')}this.baseclass.prototype.render.apply(this,arguments)}}),window.glazed_elements.push({base:"az_counter",showed:function(a){this.baseclass.prototype.showed.apply(this,arguments);var b=this;this.add_js_list({paths:["vendor/jquery-countTo/jquery.countTo.min.js","vendor/jquery.waypoints/lib/jquery.waypoints.min.js"],loaded:"waypoint"in a.fn&&"countTo"in a.fn,callback:function(){a(b.dom_element).waypoint(function(c){a(b.dom_element).find("#"+b.id).countTo({from:Math.round(b.attrs.start),to:Math.round(b.attrs.end),speed:Math.round(b.attrs.speed),refreshInterval:50,seperator:b.attrs.seperator,formatter:function(a,c){return b.attrs.prefix+a.toFixed(0).replace(/\B(?=(?:\d{3})+(?!\d))/g,c.seperator)+b.attrs.postfix}})},{offset:"100%",handler:function(a){this.destroy()}}),a(document).trigger("scroll")}})},params:[{param_name:"start",value:"0"},{param_name:"end",value:"100"},{param_name:"fontsize",value:"30"},{param_name:"speed",value:"2000"},{param_name:"seperator",value:""},{param_name:"prefix",value:""},{param_name:"postfix",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_html",params:[{param_name:"content",value:"<p>Click the edit button to change this HTML</p>"},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0,has_content:!0}),window.glazed_elements.push({base:"az_icon",params:[{param_name:"icon",value:""},{param_name:"size",value:""},{param_name:"st_style",value:""},{param_name:"animation",value:""},{param_name:"orientation",value:""},{param_name:"link",value:""},{param_name:"link_target",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_image",params:[{param_name:"image",value:""},{param_name:"width",value:"100%"},{param_name:"height",value:""},{param_name:"link",value:""},{param_name:"link_target",value:""},{param_name:"alt",value:""},{param_name:"title",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],frontend_render:!0,render:function(a){function b(b,c,d,e,f,g){a.isNumeric(d)&&(d+="px"),a.isNumeric(e)&&(e+="px");var h=a('<img src="'+b+'" alt="'+f+'" title="'+g+'">');return a(h).attr("style",c),d.length>0&&a(h).css("width",d),e.length>0&&a(h).css("height",e),h}var c=(this.id,this);this.dom_element=a('<div class="az-element az-image '+this.get_el_classes()+" "+this.get_content_classes()+'"></div>');var d=b(this.attrs.image,this.attrs.style,this.attrs.width,this.attrs.height,this.attrs.alt,this.attrs.title);a(d).appendTo(this.dom_element),""!=this.attrs.link&&a(this.dom_element).find("img").each(function(){a(this).wrap('<a href="'+c.attrs.link+'" target="'+c.attrs.link_target+'"></a>')}),this.baseclass.prototype.render.apply(this,arguments)}}),window.glazed_elements.push({base:"az_images_carousel",showed:function(a){this.baseclass.prototype.showed.apply(this,arguments);a(this.dom_element).carousel({interval:this.attrs.interval,pause:"hover"})},params:[{param_name:"images",value:""},{param_name:"interval",value:"5000"},{param_name:"hide",value:""},{param_name:"alt",value:""},{param_name:"title",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_jumbotron",params:[{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0}),window.glazed_elements.push({base:"az_link",params:[{param_name:"link",value:""},{param_name:"link_target",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0}),window.glazed_elements.push({base:"az_map",params:[{param_name:"address",value:""},{param_name:"width",value:"100%"},{param_name:"height",value:"400px"},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0,has_content:!0}),window.glazed_elements.push({base:"az_panel",params:[{param_name:"title",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0}),window.glazed_elements.push({base:"az_progress_bar",params:[{param_name:"label",value:""},{param_name:"width",value:"50"},{param_name:"type",value:""},{param_name:"options",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_separator",params:[{param_name:"bgcolor",value:""},{param_name:"thickness",value:""},{param_name:"custom_thickness",value:"3"},{param_name:"width",value:""},{param_name:"custom_width",value:"100"},{param_name:"align",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_text",params:[{param_name:"content",value:"<h2>Lorem ipsum dolor sit amet.</h2> Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0,has_content:!0}),window.glazed_elements.push({base:"az_video",showed:function(a){this.baseclass.prototype.showed.apply(this,arguments);var b=a(this.dom_element);b.find(".az-video-play, .az-video-icon").bind("click",function(){var a=b.find("iframe");a.attr("src",a.attr("src")+"&autoplay=1").show(),b.find(".az-video-play, .az-video-icon").hide()})},params:[{param_name:"link",value:""},{param_name:"width",value:"100%"},{param_name:"image",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),window.glazed_elements.push({base:"az_well",params:[{param_name:"type",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}],is_container:!0}),window.glazed_elements.push({base:"st_social",params:[{param_name:"st_social_links",value:"Facebook='https://www.facebook.com/'\nYouTube='https://www.youtube.com/'"},{param_name:"st_type",value:""},{param_name:"st_style",value:""},{param_name:"st_size",value:""},{param_name:"st_theme_color",value:""},{param_name:"st_color",value:""},{param_name:"st_theme_bgcolor",value:""},{param_name:"st_bgcolor",value:""},{param_name:"st_hover_color",value:""},{param_name:"st_theme_border_color",value:""},{param_name:"st_border_color",value:""},{param_name:"st_css3_hover_effects",value:""},{param_name:"an_start",value:""},{param_name:"an_in",value:""},{param_name:"an_out",value:""},{param_name:"an_hidden",value:""},{param_name:"an_infinite",value:""},{param_name:"an_offset",value:"100"},{param_name:"an_duration",value:"1000"},{param_name:"an_in_delay",value:"0"},{param_name:"an_out_delay",value:"0"},{param_name:"an_parent",value:"1"},{param_name:"an_name",value:""},{param_name:"el_class",value:""},{param_name:"style",value:""},{param_name:"hover_style",value:""},{param_name:"pos_left",value:""},{param_name:"pos_right",value:""},{param_name:"pos_top",value:""},{param_name:"pos_bottom",value:""},{param_name:"pos_width",value:""},{param_name:"pos_height",value:""},{param_name:"pos_zindex",value:""}]}),y(),z(),a(document).ready(function(){a('[data-az-mode="dynamic"]').each(function(){connect_container(a(this))})})}}(window.jQuery);
    //!function (e, n, t) {
    //    "use strict"; function i() { p = e("body").attr("data-mapsource") ? "account=" + e("body").attr("data-mapsource") : "", T.on("click", function (e) { z(150) }), w.on("change", function (e) { "null" != w.val() && o(w.val(), "D") }), e(window).on("resize", function (e) { H() }) } function o(n, i) { var o, c, d = new t(y.spinnerOpts).spin(); I.html(d.el), I.show(), b.show(), b.css("opacity", 1); var l, u = g[n]; if ("M" == i ? (l = e(".country-select option[value='" + n + "']").text(), O.text(l)) : (l = e(".country-select option:selected").text(), O.text(l)), "undefined" != typeof u && null != u) { var s = 0, f = { EDUCATION: 0, HEALTH: 0, WORK: 0, SAFETY: 0, POLITICS: 0, IDENTITY: 0 }; switch (u.Level) { case 1: var m = "low"; break; case 2: var m = "medium"; break; case 3: var m = "high"; break; default: console.info("Map data (levels) not correctly loaded") }A.find(".current-level").attr("class", "current-level " + m), A.find(".amount").text(U[m]), w.parent().find(".current-country").text(l), o = v.UNW2_API + v.ISSUE_POLL_ENDPOINT + "?object=Contact&country=" + u.CountryCode2 + "&" + p, c = e.getJSON(o, function () { console.info("success") }).done(function (e) { N.attr("id", "commitment-count"); var n = e.count; b.is(":visible") ? r(n, f) : b.velocity("fadeIn", { duration: 500, begin: function (e) { r(n, f) } }) }).fail(function (e) { z(150) }) } else if ("undefined" == typeof u) { A.find(".current-level").attr("class", "current-level 0"), A.find(".amount").text(U[0]), w.parent().find(".current-country").text(l), N.attr("id", "commitment-count"); var s = 0; P = b.find(".trending-issues"); var h = []; e.each(h, function (e, n) { var t = 0 != n.PercentageSelected && n.PercentageSelected < 5 ? 5 : n.PercentageSelected; f[n.IssueCode] = t + "%" }); var T = []; C.find(".gender-breakdown .amount").text(0), e.each(T, function (e, n) { switch (n.Gender) { case "F": C.find(".women .amount").text(n.SelectedCount); break; case "M": C.find(".men .amount").text(n.SelectedCount); break; case "O": C.find(".other .amount").text(n.SelectedCount); break; default: console.info("Map data (genders) not correctly loaded") } }), b.is(":visible") ? a(s, f) : b.velocity("fadeIn", { duration: 500, begin: function (e) { a(s, f) } }) } } function a(e, t) { I.hide(), I.html(""); var i = new n("commitment-count", 0, e, 0, 1); i.start(), c(!1) } function r(e, t) { I.hide(), I.html(""); var i = new n("commitment-count", 0, e, 0, 1); i.start(), E.find(".issue-graph-percent").delay(0).velocity({ width: t.EDUCATION }, { easing: "swing" }), S.find(".issue-graph-percent").delay(100).velocity({ width: t.HEALTH }, { easing: "swing" }), x.find(".issue-graph-percent").delay(200).velocity({ width: t.IDENTITY }, { easing: "swing" }), _.find(".issue-graph-percent").delay(275).velocity({ width: t.WORK }, { easing: "swing" }), k.find(".issue-graph-percent").delay(350).velocity({ width: t.SAFETY }, { easing: "swing" }), L.find(".issue-graph-percent").delay(375).velocity({ width: t.POLITICS }, { easing: "swing" }), c(!1) } function c(e) { if (e) clearTimeout(m); else { clearTimeout(m); var n = C.find(".current"), t = n.next(".gender-breakdown"); 0 == t.length && (t = n.siblings().filter(":first")), n.velocity("fadeOut", { duration: 500, easing: "linear", complete: function (e) { n.removeClass("current") } }), t.velocity("fadeIn", { duration: 500, easing: "linear", complete: function (e) { t.addClass("current"), m = setTimeout(function () { c(!1) }, 1e3) } }) } } function d() {
    //        var e = new t(y.spinnerOpts).spin();
    //        h.html(e.el)
    //        //    google.load("visualization", "1", { packages: ["geochart"] }),
    //        //    google.setOnLoadCallback(l)
    //    }
    //    function l() { f ? u(f) : s = e.getJSON(v.UNW2_API + v.MAP_ENDPOINT + "?" + p, function () { console.info("success") }).done(u).fail(function (e) { return console.error("error", e), !1 }) } function u(n) {
    //        function t() { for (var e = r.getSelection(), n = 0; n < e.length; n++){ var t = e[n], a = i[t.row + 1][0]; o(a, "M") } } f = n, g = {}; var i = [["Country", "Commitments"]]; e.each(n.BreakdownByCountry, function (e, n) { i.push([n.CountryCode2, n.Level]), g[n.CountryCode2] = n });
    //        //var a = google.visualization.arrayToDataTable(i); h.html("");
    //        //var r = new google.visualization.GeoChart(h[0]);
    //        //google.visualization.events.addListener(r, "select", t),
    //        //    r.draw(a, W)
    //    } var s = null, f = null, g = null, m = null, p = "", y = { debounce: function (e, n, t) { var i; return function () { var o = this, a = arguments, r = function () { i = null, t || e.apply(o, a) }, c = t && !i; clearTimeout(i), i = setTimeout(r, n), c && e.apply(o, a) } }, spinnerOpts: { color: "#e31c79" } }, v = { UNW_API: "https://api.heforshe.org/v2/api/", COMMITMENT_ENDPOINT: "commitment", ISSUE_POLL_ENDPOINT: "salesforce_object_count", ISSUE_POLL_LEADERS_ENDPOINT: "issue-poll/leaders", UNW2_API: "/hfs_extensions/", MAP_ENDPOINT: "salesforce_country_overview", MAP_COUNT_ENDPOINT: "map/count" }, h = e(".map-module .map"), w = e(".map-module .country-select"), b = e(".map-module .country-detail"), I = e(".map-module .country-detail .overlay-loader"), T = b.find(".icon-close-button"), C = b.find(".gender-breakdown-ticker"), O = b.find(".country-name"), N = b.find(".commitment-count"), P = b.find(".trending-issues"), E = P.find(".education"), S = P.find(".health"), _ = P.find(".work"), k = P.find(".safety"), L = P.find(".politics"), x = P.find(".identity"), A = b.find(".level-indicator"), D = b.find(".number-needed"), M = { low: "Low", medium: "Medium", high: "High" }, U = window.levelLabelsAuthored || M, W = { colorAxis: { colors: ["#65062b", "#d80052", "#ec276c"] }, backgroundColor: "transparent", datalessRegionColor: "#939393", defaultColor: "#939393", width: "100%", height: "100%", tooltip: { trigger: "none" }, legend: "none", projection: { name: "mercator" } }, z = null, H = y.debounce(function () { l() }, 15); return z = function (e) { b.velocity("fadeOut", { duration: e, complete: function (e) { N.text(0), E.find(".issue-graph-percent").delay(50).velocity({ width: 0 }, { easing: "swing" }), S.find(".issue-graph-percent").delay(150).velocity({ width: 0 }, { easing: "swing" }), x.find(".issue-graph-percent").delay(250).velocity({ width: 0 }, { easing: "swing" }), _.find(".issue-graph-percent").delay(350).velocity({ width: 0 }, { easing: "swing" }), k.find(".issue-graph-percent").delay(450).velocity({ width: 0 }, { easing: "swing" }), L.find(".issue-graph-percent").delay(550).velocity({ width: 0 }, { easing: "swing" }), c(!0), b.hide() } }), c(!0) }, e(document).ready(function () { h = e(".map-module .map"), w = e(".map-module .country-select"), b = e(".map-module .country-detail"), I = e(".map-module .country-detail .overlay-loader"), T = b.find(".icon-close-button"), C = b.find(".gender-breakdown-ticker"), O = b.find(".country-name"), N = b.find(".commitment-count"), P = b.find(".trending-issues"), E = P.find(".education"), S = P.find(".health"), _ = P.find(".work"), k = P.find(".safety"), L = P.find(".politics"), x = P.find(".identity"), A = b.find(".level-indicator"), D = b.find(".number-needed"), i(), window.document.write = function (n) { var t = e(n); e("<body>").append(t) } }), d()
    //}(jQuery, CountUp, Spinner);
    //
    ///**
    //* DO NOT EDIT THIS FILE.
    //* See the following change record for more information,
    //* https://www.drupal.org/node/2815083
    //* @preserve
    //**/
    //
    //Drupal.debounce = function (func, wait, immediate) {
    //  var timeout = void 0;
    //  var result = void 0;
    //  return function () {
    //    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    //      args[_key] = arguments[_key];
    //    }
    //
    //    var context = this;
    //    var later = function later() {
    //      timeout = null;
    //      if (!immediate) {
    //        result = func.apply(context, args);
    //      }
    //    };
    //    var callNow = immediate && !timeout;
    //    clearTimeout(timeout);
    //    timeout = setTimeout(later, wait);
    //    if (callNow) {
    //      result = func.apply(context, args);
    //    }
    //    return result;
    //  };
    //};;
    ///**
    //* DO NOT EDIT THIS FILE.
    //* See the following change record for more information,
    //* https://www.drupal.org/node/2815083
    //* @preserve
    //**/
    //
    //(function ($, Drupal, debounce) {
    //  $.fn.drupalGetSummary = function () {
    //    var callback = this.data('summaryCallback');
    //    return this[0] && callback ? $.trim(callback(this[0])) : '';
    //  };
    //
    //  $.fn.drupalSetSummary = function (callback) {
    //    var self = this;
    //
    //    if (typeof callback !== 'function') {
    //      var val = callback;
    //      callback = function callback() {
    //        return val;
    //      };
    //    }
    //
    //    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
    //      self.trigger('summaryUpdated');
    //    }).trigger('summaryUpdated');
    //  };
    //
    //  Drupal.behaviors.formSingleSubmit = {
    //    attach: function attach() {
    //      function onFormSubmit(e) {
    //        var $form = $(e.currentTarget);
    //        var formValues = $form.serialize();
    //        var previousValues = $form.attr('data-drupal-form-submit-last');
    //        if (previousValues === formValues) {
    //          e.preventDefault();
    //        } else {
    //          $form.attr('data-drupal-form-submit-last', formValues);
    //        }
    //      }
    //
    //      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    //    }
    //  };
    //
    //  function triggerFormUpdated(element) {
    //    $(element).trigger('formUpdated');
    //  }
    //
    //  function fieldsList(form) {
    //    var $fieldList = $(form).find('[name]').map(function (index, element) {
    //      return element.getAttribute('id');
    //    });
    //
    //    return $.makeArray($fieldList);
    //  }
    //
    //  Drupal.behaviors.formUpdated = {
    //    attach: function attach(context) {
    //      var $context = $(context);
    //      var contextIsForm = $context.is('form');
    //      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
    //      var formFields = void 0;
    //
    //      if ($forms.length) {
    //        $.makeArray($forms).forEach(function (form) {
    //          var events = 'change.formUpdated input.formUpdated ';
    //          var eventHandler = debounce(function (event) {
    //            triggerFormUpdated(event.target);
    //          }, 300);
    //          formFields = fieldsList(form).join(',');
    //
    //          form.setAttribute('data-drupal-form-fields', formFields);
    //          $(form).on(events, eventHandler);
    //        });
    //      }
    //
    //      if (contextIsForm) {
    //        formFields = fieldsList(context).join(',');
    //
    //        var currentFields = $(context).attr('data-drupal-form-fields');
    //
    //        if (formFields !== currentFields) {
    //          triggerFormUpdated(context);
    //        }
    //      }
    //    },
    //    detach: function detach(context, settings, trigger) {
    //      var $context = $(context);
    //      var contextIsForm = $context.is('form');
    //      if (trigger === 'unload') {
    //        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
    //        if ($forms.length) {
    //          $.makeArray($forms).forEach(function (form) {
    //            form.removeAttribute('data-drupal-form-fields');
    //            $(form).off('.formUpdated');
    //          });
    //        }
    //      }
    //    }
    //  };
    //
    //  Drupal.behaviors.fillUserInfoFromBrowser = {
    //    attach: function attach(context, settings) {
    //      var userInfo = ['name', 'mail', 'homepage'];
    //      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
    //      if ($forms.length) {
    //        userInfo.forEach(function (info) {
    //          var $element = $forms.find('[name=' + info + ']');
    //          var browserData = localStorage.getItem('Drupal.visitor.' + info);
    //          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
    //          if ($element.length && emptyOrDefault && browserData) {
    //            $element.val(browserData);
    //          }
    //        });
    //      }
    //      $forms.on('submit', function () {
    //        userInfo.forEach(function (info) {
    //          var $element = $forms.find('[name=' + info + ']');
    //          if ($element.length) {
    //            localStorage.setItem('Drupal.visitor.' + info, $element.val());
    //          }
    //        });
    //      });
    //    }
    //  };
    //
    //  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    //    var url = void 0;
    //    if (e.type === 'click') {
    //      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    //    } else {
    //      url = window.location;
    //    }
    //    var hash = url.hash.substr(1);
    //    if (hash) {
    //      var $target = $('#' + hash);
    //      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
    //
    //      setTimeout(function () {
    //        return $target.trigger('focus');
    //      }, 300);
    //    }
    //  };
    //
    //  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
    //
    //  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
    //
    //  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
    //})(jQuery, Drupal, Drupal.debounce);;
    ///**
    // * @file
    // * Extends methods from core/misc/form.js.
    // */
    //
    //(function ($, window, Drupal, drupalSettings) {
    //
    //  /**
    //   * Behavior for "forms_has_error_value_toggle" theme setting.
    //   */
    //  Drupal.behaviors.bootstrapForm = {
    //    attach: function (context) {
    //      if (drupalSettings.bootstrap && drupalSettings.bootstrap.forms_has_error_value_toggle) {
    //        var $context = $(context);
    //        $context.find('.form-item.has-error:not(.form-type-password.has-feedback)').once('error').each(function () {
    //          var $formItem = $(this);
    //          var $input = $formItem.find(':input');
    //          $input.on('keyup focus blur', function () {
    //            if (this.defaultValue !== void 0) {
    //              $formItem[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('has-error');
    //              $input[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('error');
    //            }
    //          });
    //        });
    //      }
    //    }
    //  };
    //
    //
    //})(jQuery, this, Drupal, drupalSettings);
    //;
