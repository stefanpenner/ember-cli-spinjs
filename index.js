'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLISpinjs(project) {
  this.project = project;
  this.name    = 'Ember CLI Spinjs';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISpinjs.prototype.treeFor = function treeFor(name) {
    var treePath =  path.join('node_modules', 'ember-cli-spinjs', name + '-addon');
    return (fs.existsSync(treepath)) ? unwatchedTree(treepath) : null;
};

EmberCLISpinjs.prototype.included = function included(app) {
    this.app = app;
    this.app.import('vendor/ember-cli-spinjs/spinjs/spin.js');
};

module.exports = EmberCLISpinjs;
