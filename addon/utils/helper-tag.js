import Ember from 'ember';
const htmlSafe = Ember.String.htmlSafe;

export default function helperTag(params, hash) {
  const text = params.join('');
  const mood = hash.mood || 'default';
  const userClass = hash.class ? hash.class + ' ' : '';
  const clickable = hash.onClick ? ' clickable' : '';
  const size = hash.size ? ` ${hash.size}-size` : '';
  const pill = hash.isPill ? ' badge-pill' : '';
  const id = Math.random().toString(36).substr(2, 10);
  const body = '<span ' +
    `id="${id}" ` +
    `class="${userClass}badge${pill} badge-${mood}${clickable}${size}"` +
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
