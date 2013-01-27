if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        /* A piece of code from MDN that is supposed to implement indexOf exactly as specified by spec */
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
                "use strict";
                if (this == null) {
                    throw new TypeError();
                }
                var t = Object(this);
                var len = t.length >>> 0;
                if (len === 0) {
                    return -1;
                }
                var n = 0;
                if (arguments.length > 1) {
                    n = Number(arguments[1]);
                    if (n != n) { // shortcut for verifying if it's NaN
                        n = 0;
                    } else if (n !== 0 && n != Infinity && n != -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }
                if (n >= len) {
                    return -1;
                }
                var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
                for (; k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k;
                    }
                }
                return -1;
            };
        }
        /* End of MDN code */
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var copy = [], i = 0;
        for (; i < arr.length; i++) {
            if (arr[i] !== item) {
                copy.push(arr[i]);
            }
        }
        return copy;
    },

    removeWithoutCopy : function(arr, item) {
        // requires implementation of indexOf see up.
        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        //               howManey to remove
        arr.splice(index,                  0, item);
        return arr;
    },

    count : function(arr, item) {
        var i, count = 0;
        for (i = 0; i < arr.length; i++) {
            count += (arr[i] === item ? 1 : 0);
        }
        return count;
    },

    duplicates : function(arr) {
        // Is there more functional way? sort + reduce with look ahead.
        if (Array.prototype.reduce) {
            function compareNumbers (a, b) {
                return a > b;
            }
            arr.sort(compareNumbers);
            return arr.reduce(function (res, cur, index, array) {
                if (cur === array[index + 1] && res.indexOf(cur) === -1) {
                    res.push(cur);
                }
                return res;
            }, []);
        } else {
            var dups = [], map = {}, i = 0;
            for (; i < arr.length; i++) {
                if (arr[i] in map) { // Is it working in all browsers?
                    dups.push(arr[i]);
                } else {
                    map[arr[i]] = i;
                }
            }
            return dups;
        }
    },

    square : function(arr) {
        function square (a) {
            return Math.pow(a, 2);
        }
        if (Array.prototype.map) {
            return arr.map(square);
        } else {
            var arrSquare = [], i = 0;
            for (; i < arr.length; i++) {
                arrSquare.push(square(arr[i]));
            }
            return arrSquare;
        }
    },

    findAllOccurrences : function(arr, target) {
        if (Array.prototype.reduce) {
            return arr.reduce(function (reduce, value, index) {
                if (value === target) {
                    reduce.push(index);
                }
                return reduce;
            }, []);
        } else {
            var i = 0, occurrences = [];
            for (; i <  arr.length; i++) {
                if (arr[i] === target) {
                    occurrences.push(i);
                }
            }
        }
        return occurrences;
    }
  };
});
