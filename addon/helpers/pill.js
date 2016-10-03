import Ember from 'ember';
import tag from 'ui-tag/utils/helper-tag';
const htmlSafe = Ember.String.htmlSafe;

export function pill(params, hash) {
  return tag(params, Ember.assign(hash, { isPill: true }));
}

export default Ember.Helper.helper(pill);
