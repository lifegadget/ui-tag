import Ember from 'ember';
import uiTag from 'ui-tag/components/ui-tag';

const label = uiTag.extend({
  init() {
    this._super(...arguments);
    Ember.debug('you are using "ui-label" which is deprecated; please use "ui-tag" instead');
  }
});
label[Ember.NAME_KEY] = 'ui-label';
export default label;
