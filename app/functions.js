if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (fnstr) {
            return str + ', ' + fnstr;
        };
    },

    makeClosures : function(arr, fn) {
        function generator (j) {
             return function () {
                return arr[j] * arr[j];
             };
        }
        var closures = [];
        for (var i = 0; i < arr.length; i++) {
            closures.push(generator(i));
        }
        return closures;
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var i, sum = 0;
        for (i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        fn.apply(null, args);
    },

    curryIt : function(fn) {
        var slice = Array.prototype.slice,
            curriedArgs = slice.call(arguments, 1);
        return !curriedArgs.length ? fn : function () {
            return fn.apply(null, curriedArgs.concat(slice.call(arguments)));
        };
    }
  };
});
