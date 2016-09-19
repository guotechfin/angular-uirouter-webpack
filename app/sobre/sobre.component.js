require('./sobre.css')

module.exports = {
    bindings: {},
    templateUrl: require('./sobre.template.html'),
    controller: SobreController
}

function SobreController () {
    "ngInject";
    console.log('Sobre controller!')
}
