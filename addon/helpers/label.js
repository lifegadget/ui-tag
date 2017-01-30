import Ember from 'ember';
import badge from 'ui-tag/utils/helper-tag';

export function label(params, hash) {
  const {debug} = Ember;
  debug('You used the "label" helper in the ui-tag addon; this nomenclature is deprecated as Bootstrap has moved to calling this a badge (or pill). Please update your template.');
  return badge(params, Ember.assign({}, hash, { isPill: true }));
}

export default Ember.Helper.helper(label);
