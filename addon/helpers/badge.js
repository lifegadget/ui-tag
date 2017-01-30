import Ember from 'ember';
import badge from 'ui-tag/utils/helper-tag';

export function tag(params, hash) {
  return badge(params, Ember.assign({}, hash, { isPill: false }));
}

export default Ember.Helper.helper(tag);
