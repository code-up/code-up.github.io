"use strict";angular.module("codeupApp",["hljs"]).config(["$routeProvider",function(a){a.when("/contents",{templateUrl:"views/contents.html",controller:"ContentsCtrl"}).when("/l1",{templateUrl:"views/lesson-one.html",controller:"LessonOneCtrl"}).when("/l2",{templateUrl:"views/lesson-two.html",controller:"LessonTwoCtrl"}).when("/l3",{templateUrl:"views/lesson-three.html",controller:"LessonThreeCtrl"}).when("/glossary",{templateUrl:"views/glossary.html",controller:"GlossaryCtrl"}).otherwise({redirectTo:"/contents"})}]),angular.module("codeupApp").controller("LessonOneCtrl",["$scope",function(){}]),angular.module("codeupApp").controller("LessonTwoCtrl",["$scope",function(){}]),angular.module("codeupApp").controller("ContentsCtrl",["$scope",function(){}]);