const angular = require('angular');

module.exports = angular
    .module('app.sobre', [])
    .component('sobre', require('./sobre.component'))
    .config(rotas)
    .name

function rotas($stateProvider) {
    "ngInject";
    $stateProvider
        .state({
            name: 'sobre',
            url: '/sobre',
            component: 'sobre',
            data: {
                title: 'Sobre este app'
            }
        });
}
