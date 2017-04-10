import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';
import layout from '../templates/components/zf-responsive-toggle';

export default Ember.Component.extend(zfWidget, {

  /** @member tag type */
  layout: layout,

  /** @member Class names */
  //classNames: ['title-bar'],

  /** @member Attribute bindings */
  attributeBindings: ['data-responsive-toggle', 'data-hide-for'],

  /** @member Makes the data attribute binding appear */
  'data-responsive-toggle': ' ',
  'data-hide-for': 'medium',

  /** @member Foundation type */
  'zfType': 'ResponsiveToggle',

  /** @member Foundation specific options */
  'zfOptions': ['dataHideFor', 'dataAnimate'],

  showMenuTitle: true,
  menuTitle: 'Menu',
});
