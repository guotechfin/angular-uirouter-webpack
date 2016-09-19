const angular = require('angular');
const router  = require('angular-ui-router');

const home = require('./home');
const sobre = require('./sobre');
const navegacao = require('./navegacao');


angular
    .module('app', [ 'ui.router', home, sobre, navegacao ])
    .config(inicializarRoteamento)

function inicializarRoteamento ($stateProvider, $urlRouterProvider) {
    "ngInject";
    console.info('Inicializando rotas internas.');
    $urlRouterProvider.otherwise('/');
}
