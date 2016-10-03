import Ember from 'ember';
import uiTag from 'ui-label/components/ui-tag';

const pill = uiTag.extend({
  isPill: true
});
pill[Ember.NAME_KEY] = 'ui-pill';
export default pill;
