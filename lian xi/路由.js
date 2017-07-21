var app = angular.module("app", ["ngRoute", "app1"]);
app.controller("ctrl", function ($scope, $http) {
    $http.get("data/data.json").success(function (data) {
        $scope.arr = data;
    });
});
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "view/index2.html", controller: "hh"})
        .when("/one", {templateUrl: "view/index1.html", controller: "hh"})
        .when("/two", {templateUrl: "view/index3.html", controller: "hh"})
        .when("/three", {templateUrl: "view/index4.html", controller: "hh"})
        .when("/four", {templateUrl: "view/index5.html", controller: "hh"})
        .when("/five", {templateUrl: "view/index6.html", controller: "hh"})
        .when("/six", {templateUrl: "view/index7.html", controller: "hh"})
        .otherwise({redirectTo: "/"})
});
angular.module("app1", []).controller("hh", ["$scope", function ($scope) {
    setTimeout(function () {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 3.5,
            slidesPerGroup: 1
        });
        var mySwiper1 = new Swiper('.swiper-container1', {
            autoplay: 2000,
            loop: true,
            pagination: ".swiper-pagination"
        })
    }, 0)
}]);
$(".tap").on("click", "a", function () {
    var index = $(this).parent().index();
    $(".tap>li").eq(index).addClass("li1").siblings().removeClass("li1")
});
