import { pill } from 'dummy/helpers/pill';
import { module, test } from 'qunit';

module('Unit | Helper | pill');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = pill(['foobar'], {
    size: 'large'
  });
  assert.ok(result);
});
