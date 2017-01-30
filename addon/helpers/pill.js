import Ember from 'ember';
import badge from 'ui-tag/utils/helper-tag';

export function pill(params, hash) {
  return badge(params, Ember.assign({}, hash, { isPill: true }));
}

export default Ember.Helper.helper(pill);
