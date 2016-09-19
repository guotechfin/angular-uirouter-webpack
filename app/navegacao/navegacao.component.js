require('./navegacao.css')

module.exports = {
    bindings: {},
    templateUrl: require('./navegacao.template.html'),
    controller: NavegacaoController
}

function NavegacaoController ($element) {
    "ngInject";
    $element.attr('role', 'navigation');
}
