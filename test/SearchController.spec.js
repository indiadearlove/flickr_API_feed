describe('SearchController', function() {
  beforeEach(module('Search'));

  it('initialises with an empty search result and term', function() {
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined();
  });

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('SearchController', {
        $scope: scope
    });
  }));
});

describe('when searching for a user', function() {

  var items = [
    {
      "title": "Carrots versus Potatoes, Inna OU Stylee",
      "link": "https://www.flickr.com/photos/picanuper/16662146989/",
      "media": "https://farm8.staticflickr.com/7654/16662146989_19190d907a_m.jpg"
    }, 
    {
      "title": "Bacon and Mashed Potato Egg Rolls",
      "link": "https://www.flickr.com/photos/thinkarete_lifestyle/16822086906/",
      "media": "https://farm8.staticflickr.com/7648/16822086906_b45e968019_m.jpg"
    }
  ];

  it('displays search results', function() {
    expect(scope.searchResult.items).toEqual(items);
  });
});