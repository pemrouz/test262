// Copyright 2017 Pedram Emrouznejad. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Pedram Emrouznejad <pemrouznejad@bloomberg.net>
esid: pending
description: It is not a SyntaxError if FormalParameters' default expressions contains await
flags: [onlyStrict]
---*/

var obj = ({
  async foo (await x = Promise.resolve(42)) { return x }
})

obj.method().then(function(v){
  assert.sameValue(v, 42)
  $DONE()
}, function(){ $DONE('promise should not be rejected') })