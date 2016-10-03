import Ember from 'ember';
import tag from 'ui-tag/utils/helper-tag';

export function pill(params, hash) {
  return tag(params, Ember.assign(hash, { isPill: true }));
}

export default Ember.Helper.helper(pill);
