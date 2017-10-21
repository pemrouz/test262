// Copyright 2017 Pedram Emrouznejad. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Pedram Emrouznejad <pemrouznejad@bloomberg.net>
esid: pending
description: >
  If a default expression rejects, the promise is rejected.
info: >
  This is different from generators which will throw the error out of the generator
  when it is called.
flags: [async]
---*/

var y = null;
async function foo(x = await y()) {}
foo().then(function () {
  $DONE('promise should be rejected');
}, function () {
  $DONE();
});
