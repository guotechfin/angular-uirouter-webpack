const angular = require('angular');

module.exports = angular
    .module('app.navegacao', [])
    .component('navegacao', require('./navegacao.component'))
    .name;
