import Ember from 'ember';
const htmlSafe = Ember.String.htmlSafe;

export function label(params, hash) {
  const text = params.join('');
  const mood = hash.mood || 'default';
  const userClass = hash.class + ' ' || '';
  const clickable = hash.onClick ? ' clickable' : '';
  const id = Math.random().toString(36).substr(2, 10);
  const body = '<span ' +
    `id="${id}" ` +
    `class="${userClass}tag tag-${mood}${clickable}"` +
    '>' +
    text +
  '</span>';

  if(clickable) {
    Ember.run.next(() => {
      document.getElementById(id).addEventListener('click', hash.onClick);
    });
  }

  return htmlSafe(body);
}

export default Ember.Helper.helper(label);
