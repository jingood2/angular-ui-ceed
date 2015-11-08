app.controller('HomeCtrl', ['$scope', function($scope) {

    var baseURL = 'http://lorempixel.com/960/450/';

    $scope.setInterval=5000;

    $scope.slides = [{
        title: 'y Ways to stay Fit',
        image: baseURL + 'sports/',
        text: 'Play a sport for 30 minutes a day!'
    },
    {
        title: 'Healthly Food',
        image: baseURL + 'food/',
        text: 'Food that you should be eating!'
    },
    {
        title: 'Relaxing Holidays',
        image: baseURL + 'nature/',
        text: '10 Locations for Nature Lovers!'
    }];

    /*
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
    */

}]);