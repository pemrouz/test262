// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * CARRIAGE RETURN (U+000D) within strings is not allowed
 *
 * @id: S7.3_A2.2_T2;
 * @section: 7.3;
 * @description: Insert real CARRIAGE RETURN into string;
 * @negative;
 */

//CHECK#1
"
str
ing
";
