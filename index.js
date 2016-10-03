/* jshint node: true */
'use strict';
const path = require('path');
const chalk = require('chalk');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ui-label',
  normalizeEntityName: function () { },
  included: function (appOrAddon) {
    this._super.included(app);
    var app = appOrAddon.app || appOrAddon;
    var options = typeof app.options === 'object' ? app.options : {};
    var addonConfig = options['ui-label'] || {};

    // If container is not using SCSS then just add styling as CSS
    if (!app.registry.availablePlugins['ember-cli-sass']) {
      this.ui.writeLine(chalk.bold('ui-label: ') + ' did not detect ' + chalk.bold.green('ember-cli-sass') + ', using CSS configuration instead of SASS.');
      app.import('vendor/ui-label/ui-label.css');
    }

  },

  treeForStyles: function(tree) {
    const bootstrapPath = path.join('node_modules', 'bootstrap/scss');
    const trees = [];
    if(tree) {
      trees.push(tree);
    }
    const existingStyle = this._super.treeForStyles.apply(this, arguments);
    const bootstrap = new Funnel(bootstrapPath, {
      srcDir: '/',
      destDir: '/ui-label/bootstrap'
    });
    trees.push(bootstrap);
    if (existingStyle) {
      trees.push(existingStyle);
    }

    return mergeTrees(trees);
  },

};
