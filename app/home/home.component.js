require('./home.css')

module.exports = {
    bindings: {},
    templateUrl: require('./home.template.html'),
    controller: HomeController
}

function HomeController () {
    "ngInject";
    console.log('Home controller!')
}
