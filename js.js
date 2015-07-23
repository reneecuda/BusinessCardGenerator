/*
Title: Business Card Generator
Author: Renee Cuda
Date: 23/07/2015
Description: Angular application to generate a business card based on user input
*/


var app = angular.module('myApp', []);
app.controller('BusinessCardController', function ($scope) {
    /*Define Input Variables*/
    "use strict";
    $scope.user = {
            name: '',
            occupation: '',
            email: '',
            companylogo: '',
            phone: '',
            website: '',
            color1: '#D8D8D8',
            color2: '#F0F0F0',
            textColor: '#000000'
        },
        $scope.submit = function() /*Preview and display business card if input valid*/
        {
            if ($scope.myForm.$valid) 
            {
                document.getElementById("cardArea").style.display = "block";
                document.getElementById("submit").disabled = true;
                document.getElementById("loadExample").disabled = true;
                
                /*Only show image if input !blank and is an image file*/
                if (($scope.user.companylogo.indexOf("png") !== -1 || $scope.user.companylogo.indexOf("jpg") !== -1))
                {
                    document.getElementById("logoImage").style.display = "block";

                }
                else
                {
                    document.getElementById("logoImage").style.display = "none";
                }
                
                /*Once generated, disable all form inputs untill application reset*/
                var inputs, index;
                inputs = document.getElementsByTagName('input');
                for (index = 0; index < inputs.length; ++index)
                {
                    inputs[index].disabled = true;
                }
            }
        },
        $scope.reset = function () /*reset application*/
        {
            document.getElementById("cardArea").style.display = "none";
            document.getElementById("submit").disabled = false;
            document.getElementById("loadExample").disabled = false;
            var inputs, index;
            inputs = document.getElementsByTagName('input');
            for (index = 0; index < inputs.length; ++index)
            {
                inputs[index].disabled = false;
            }
            $scope.user = {
                name: '',
                occupation: '',
                email: '',
                companylogo: '',
                phone: '',
                website: '',
                color1: '#D8D8D8',
                color2: '#F0F0F0',
                textColor: '#000000'
            }
        },
        $scope.loadExample = function () /*load sample valid data*/
        {
            $scope.user = {
                name: 'Tanay Pant',
                occupation: 'Business Analyst',
                email: 'tanay1337@gmail.com',
                companylogo: 'http://i.imgur.com/JObOXRt.png',
                phone: '02 0443 382 393',
                website: 'www.google.com',
                color1: '#00008B',
                color2: '#00FFFF',
                textColor: '#000000'
            }
        }
});