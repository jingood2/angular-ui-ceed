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

    var baseURL2 ='http://lorempixel.com/200/200/';

    $scope.content=[
        {
            img: baseURL2 + 'people',
            title:'About Us',
            summary: 'We are good, we are the best out there'
        },
        {
            img: baseURL2 + 'business',
            title:'Our Services',
            summary: 'We offer advice on staying Healthly, What to eat...'
        },
        {
            img: baseURL2 + 'transport',
            title:'Contact Us',
            summary: '#111, Good Health Blvd, Happy Place, Antartica'
        }
    ]

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