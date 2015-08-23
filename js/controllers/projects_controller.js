// Generated by CoffeeScript 1.7.1
augmentApp.controller('ProjectsIndexController', function($scope, $location, $timeout, ProjectsFactory, DomainsFactory, AlertsFactory) {
  $scope.domains_filter = [];
  DomainsFactory.index().then(function(domains) {
    return $scope.domains = domains;
  });
  ProjectsFactory.index().then(function(projects) {
    return $scope.projects = projects;
  });
  $scope.getDomainColor = function(domain_key) {
    var domain;
    domain = $scope.domains.filter(function(domain) {
      return domain.key === domain_key;
    });
    return domain[0].color;
  };
  $scope.select_domains = function($event, domain_key) {
    if (angular.element($event.target).hasClass('active')) {
      $scope.domains_filter = $scope.domains_filter.filter(function(domain) {
        return domain !== domain_key;
      });
    } else {
      $scope.domains_filter.push(domain_key);
    }
    return console.log($scope.domains_filter);
  };
  $scope.filter_by_domain = function(domain_key) {
    return $scope.domains_filter.indexOf(domain_key.toString()) !== -1 || $scope.domains_filter.length === 0;
  };
  return $scope.gridsterOpts = {
    columns: 3,
    width: 'auto',
    colWidth: 'auto',
    rowHeight: 'match',
    margins: [10, 10],
    isMobile: true,
    minColumns: 1,
    minRows: 2,
    maxRows: 100,
    defaultSizeX: 2,
    defaultSizeY: 1,
    mobileBreakPoint: 200,
    resizable: {
      enabled: false
    },
    draggable: {
      enabled: true
    }
  };
});

augmentApp.controller('ProjectsShowController', function($scope, $location, $timeout, $routeParams, ProjectsFactory, AlertsFactory) {
  return ProjectsFactory.get($routeParams.project_key).then(function(project) {
    $scope.project = project;
    return console.log(project.images_carousel);
  });
});
