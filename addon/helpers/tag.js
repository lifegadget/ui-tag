import Ember from 'ember';
import tag from 'ui-tag/utils/helper-tag';

export function label(params, hash) {
  return tag(params, Ember.assign(hash, { isPill: false }));
}

export default Ember.Helper.helper(label);
