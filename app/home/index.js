const angular = require('angular');

module.exports = angular
    .module('app.home', [ 'ui.router' ])
    .component('home', require('./home.component'))
    .config(rotas)
    .name

function rotas($stateProvider) {
    "ngInject";
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            component: 'home',
            data: {
                title: 'Bem Vindo!'
            }
        });
}
