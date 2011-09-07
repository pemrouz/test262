// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) is Number and Type(y) is Object,
 * return x == ToPrimitive(y)
 *
 * @id: S11.9.1_A7.5;
 * @section: 11.9.1, 11.9.3;
 * @description: y is object, x is primitive number;
 */

//CHECK#1
if ((1 == new Boolean(true)) !== true) {
  $ERROR('#1: (1 == new Boolean(true)) === true');
}

//CHECK#2
if ((-1 == new Number(-1)) !== true) {
  $ERROR('#2: (-1 == new Number(-1)) === true');
}

//CHECK#3
if ((-1 == new String("-1")) !== true) {
  $ERROR('#3: (-1 == new String("-1")) === true');
}
