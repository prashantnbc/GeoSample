

var app = angular.module('PrashProject', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.lstData = [
            //{ "type": "quartercircle", "r": 90, "angle": 90, "color": "blue", "top": 10, "left": 20 },
            { "type": "ratioCircle", "text": "x", "angle": 45, "textangle": "α", "r": 100, "color": "green", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 6, "w": 5.2, "color": "rgb(154, 154, 239)", "textH": "6", "textW": "A=?", "textC": "8", "angleTop": "a", "angleLBot": "b", "bottomText": "", "ptA": "A", "ptB": "B", "ptC": "C", "top": 5, "left": 10, "align": "left" },
            { "type": "rightTriangle", "h": 6, "w": 5.2, "color": "rgb(154, 154, 239)", "textH": "6", "textW": "A=?", "textC": "8", "angleTop": "a", "angleLBot": "b", "bottomText": "", "ptA": "A", "ptB": "B", "ptC": "C", "top": 5, "left": 10, "align": "right" },

            { "type": "rectangle", "h": 200, "w": 300, "color": "red", "top": 50, "left": 10 },

            { "type": "cone", "h": 200, "w": 200, "color": "green", "top": 50, "left": 10 },
            { "type": "normalTriangle", "a": 25, "b": 44, "c": 37, "textA": "25", "textB": "44", "textC": "37", "textAlt": "", "angleTop": "alp", "angleLBot": "88", "angleRBot": "c", "ptA": "A", "ptB": "B", "ptC": "C", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true, "showAltitude": false },
            , { "type": "normalTriangle", "a": 4, "b": 5, "c": 6, "textA": "A", "textB": "B", "textC": "C", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true, "dimType": "point" },
            { "type": "normalTriangle", "a": 5, "b": 6, "c": 9, "textA": "5", "textB": "6", "textC": "9", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 10, "b": 12, "c": 15, "textA": "10", "textB": "12", "textC": "15", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 8, "b": 9, "c": 14, "textA": "8", "textB": "9", "textC": "14", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 18, "b": 26, "c": 33, "textA": "8", "textB": "26", "textC": "33", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 20, "b": 12, "c": 25, "textA": "20", "textB": "12", "textC": "25", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 10, "b": 12, "c": 13, "textA": "10", "textB": "12", "textC": "13", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 22, "b": 25, "c": 24, "textA": "22", "textB": "25", "textC": "24", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 18, "b": 24, "c": 26, "textA": "18", "textB": "24", "textC": "26", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(154, 154, 239)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 12, "b": 16, "c": 20, "textA": "12", "textB": "16", "textC": "20", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 4, "b": 6, "c": 9, "textA": "4", "textB": "6", "textC": "9", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(154, 154, 239)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 26, "b": 29, "c": 30, "textA": "26", "textB": "29", "textC": "30", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 14, "b": 15, "c": 28, "textA": "14", "textB": "15", "textC": "28", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 3, "b": 6, "c": 7, "textA": "3", "textB": "6", "textC": "7", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(44, 183, 100)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 4, "b": 8, "c": 9, "textA": "4", "textB": "8", "textC": "9", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 10, "b": 12, "c": 14, "textA": "10", "textB": "12", "textC": "14", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 40, "b": 40, "c": 40, "textA": "40", "textB": "40", "textC": "40", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(97, 207, 250)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 6, "b": 6, "c": 8, "textA": "6", "textB": "6", "textC": "8", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "orange", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 12, "b": 13, "c": 14, "textA": "12", "textB": "13", "textC": "14", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(154, 154, 239)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 18, "b": 25, "c": 17, "textA": "18", "textB": "25", "textC": "27", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(255, 161, 97)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 19, "b": 30, "c": 31, "textA": "19", "textB": "30", "textC": "31", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 34, "b": 34, "c": 34, "textA": "34", "textB": "34", "textC": "34", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(249, 213, 61)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 23, "b": 25, "c": 26, "textA": "23", "textB": "25", "textC": "26", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(154, 154, 239)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 4, "b": 6, "c": 8, "textA": "4", "textB": "6", "textC": "8", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(154, 154, 239)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 25, "b": 28, "c": 29, "textA": "25", "textB": "28", "textC": "29", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(154, 154, 239)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 12, "b": 14, "c": 19, "textA": "12", "textB": "14", "textC": "19", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "rgb(44, 183, 100)", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 18, "b": 26, "c": 33, "textA": "8", "textB": "26", "textC": "33", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 6, "b": 8, "c": 10, "textA": "6", "textB": "8", "textC": "10", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 5, "b": 8, "c": 10, "textA": "5", "textB": "8", "textC": "10", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 5, "b": 6, "c": 10, "textA": "5", "textB": "6", "textC": "10", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 4, "b": 6, "c": 8, "textA": "4", "textB": "6", "textC": "8", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 34, "b": 34, "c": 34, "textA": "34", "textB": "34", "textC": "34", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 40, "b": 40, "c": 40, "textA": "40", "textB": "40", "textC": "40", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 18, "b": 25, "c": 27, "textA": "18", "textB": "25", "textC": "27", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 19, "b": 30, "c": 31, "textA": "19", "textB": "30", "textC": "31", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 28, "b": 25, "c": 29, "textA": "28", "textB": "25", "textC": "29", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 23, "b": 25, "c": 26, "textA": "23", "textB": "25", "textC": "26", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "blue", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 4, "b": 5, "c": 6, "textA": "4", "textB": "5", "textC": "6", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 8, "b": 9, "c": 14, "textA": "8", "textB": "9", "textC": "14", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "red", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 4, "b": 5, "c": 6, "textA": "4", "textB": "5", "textC": "6", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 5, "b": 6, "c": 9, "textA": "5", "textB": "6", "textC": "9", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 100, "b": 150, "c": 200, "textA": "100", "textB": "150", "textC": "200", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "normalTriangle", "a": 12, "b": 14, "c": 19, "textA": "5", "textB": "8", "textC": "10", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "semicircle", "radius": 300, "color": "blue", "top": 10, "left": 10 },
            { "type": "csemicircle", "radius": 800, "color": "blue", "top": 10, "left": 10 },
            { "type": "dsemicircle", "radius": 800, "color": "blue", "top": 10, "left": 10 },

             { "type": "circle", "radius": 450, "color": "blue", "top": 10, "left": 10 },
            { "type": "dcircle", "radius": 450, "color": "blue", "top": 10, "left": 10 },
            { "type": "ccircle", "radius": 450, "color": "blue", "top": 10, "left": 10 },


            { "type": "normalTriangle", "a": 35, "b": 60, "c": 90, "textA": "30", "textB": "60", "textC": "90", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },

            { "type": "rightTriangle", "h": 6, "w": 5.2, "color": "rgb(154, 154, 239)", "textH": "6", "textW": "A=?", "textC": "8", "angleTop": "", "angleLBot": "", "bottomText": "", "ptA": "A", "ptB": "B", "ptC": "C", "top": 5, "left": 10 },
             { "type": "triangle", "h": 98, "w": 85, "color": "yellow", "textH": "x", "textW": "y", "textC": "z", "angleTop": "a", "angleLBot": "b", "angleRBot": "c", "ptA": "A", "ptB": "B", "ptC": "C", "bottomText": "Find the perimeter.", "top": 5, "left": 10 },
            { "type": "rectangle", "h": 165, "w": 132, "textH": "hkmj", "textW": "w", "textH1": "h1", "textW1": "w1", "color": "rgb(255, 161, 97)", "top": 10, "left": 10, "bottomText": "Find the perimeter." },
            { "type": "normalTriangle", "a": 8, "b": 6, "c": 5, "textA": "8", "textB": "6", "textC": "5", "angleTop": "10", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            { "type": "twoLines", "angle": "35", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },
            { "type": "twoLines", "angle": "45", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },
            { "type": "twoLines", "angle": "65", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },

            { "type": "twoLines", "angle": "90", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },
            { "type": "twoLines", "angle": "135", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },


            { "type": "lines", "angle": "45", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },
            { "type": "lines", "angle": "30", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },
            { "type": "lines", "angle": "90", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },
            { "type": "lines", "angle": "60", "bottomText": "Find the perimeter.", "top": 50, "left": 10 },

            { "type": "polygon", "a": 69, "b": 65, "c": 61, "d": 97, "textA": "69", "textB": "65", "textC": "61", "textD": "d", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 63, "b": 70, "c": 72, "d": 69, "textA": "63", "textB": "70", "textC": "72", "textD": "d", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 67, "b": 92, "c": 54, "d": 70, "textA": "67", "textB": "k", "textC": "64", "textD": "62", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 59, "b": 50, "c": 64, "d": 67, "textA": "59", "textB": "k", "textC": "64", "textD": "50", "color": "orange", "top": 10, "left": 20 },
            { "type": "polygon", "a": 52, "b": 34, "c": 65, "d": 65, "textA": "52", "textB": "k", "textC": "65", "textD": "59", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 50, "b": 54, "c": 44, "d": 59, "textA": "50", "textB": "k", "textC": "52", "textD": "37", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 34, "b": 36, "c": 30, "d": 50, "textA": "34", "textB": "v", "textC": "25", "textD": "15", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 40, "b": 40, "c": 20, "d": 35, "textA": "40", "textB": "v", "textC": "20", "textD": "15", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 94, "b": 79, "c": 80, "d": 50, "textA": "94", "textB": "v", "textC": "56", "textD": "35", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 39, "b": 31, "c": 45, "d": 40, "textA": "39", "textB": "v", "textC": "35", "textD": "32", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 28, "b": 35, "c": 30, "d": 55, "textA": "28", "textB": "v", "textC": "34", "textD": "25", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 23, "b": 21, "c": 23, "d": 45, "textA": "23", "textB": "v", "textC": "25", "textD": "20", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 20, "b": 25, "c": 30, "d": 55, "textA": "20", "textB": "v", "textC": "30", "textD": "28", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 13, "b": 19, "c": 16, "d": 35, "textA": "13", "textB": "v", "textC": "16", "textD": "10", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 16, "b": 32, "c": 24, "d": 96, "textA": "4", "textB": "v", "textC": "11", "textD": "20", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 7, "b": 19, "c": 14, "d": 25, "textA": "2", "textB": "v", "textC": "14", "textD": "5", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 14, "b": 24, "c": 12, "d": 35, "textA": "4", "textB": "v", "textC": "5", "textD": "3", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "normalTriangle", "a": 7, "b": 7.8, "c": 11.8, "textA": "A", "textB": "B", "textC": "C", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },

            { "type": "rightTriangle", "h": 3, "w": 6, "color": "rgb(154, 154, 239)", "textH": "3", "textW": "A=?", "textC": "", "angleTop": "", "angleLBot": "37", "bottomText": "Find C", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 20, "w": 30, "color": "rgb(154, 154, 239)", "textH": "20", "textW": "30", "textC": "", "angleTop": "", "angleLBot": "?", "ptA": "", "ptB": "L", "ptC": "", "bottomText": "", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 6, "w": 6, "color": "rgb(154, 154, 239)", "textH": "x", "textW": "x", "textC": "4v2", "angleTop": "", "angleLBot": "", "bottomText": "", "top": 5, "left": 10, "ptA": "A", "ptB": "B", "ptC": "C" },
            { "type": "rightTriangle", "h": 4, "w": 3, "color": "rgb(154, 154, 239)", "textH": "4", "textW": "3", "textC": "5", "angleTop": "", "angleLBot": "", "bottomText": "", "ptA": "A", "ptB": "B", "ptC": "C", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 4, "w": 3, "color": "rgb(154, 154, 239)", "textH": "sqrt3", "textW": "1", "textC": "2", "angleTop": "30", "angleLBot": "60", "bottomText": "", "top": 5, "left": 10, "ptA": "", "ptB": "", "ptC": "" },
            { "type": "rightTriangle", "h": 3, "w": 4, "color": "rgb(154, 154, 239)", "textH": "2", "textW": "m", "textC": "", "angleTop": "60", "angleLBot": "30", "bottomText": "", "top": 5, "left": 10, "ptA": "", "ptB": "", "ptC": "" },
            { "type": "rightTriangle", "h": 4, "w": 3, "color": "rgb(154, 154, 239)", "textH": "x", "textW": "2", "textC": "5", "angleTop": "", "angleLBot": "theta", "bottomText": "", "top": 5, "left": 10, "ptA": "", "ptB": "", "ptC": "" },
            { "type": "rightTriangle", "h": 8, "w": 15, "color": "rgb(154, 154, 239)", "textH": "8", "textW": "15", "textC": "17", "angleTop": "", "angleLBot": "", "bottomText": "", "top": 5, "left": 10, "ptA": "I", "ptB": "J", "ptC": "H" },
            { "type": "rightTriangle", "h": 39, "w": 80, "color": "rgb(154, 154, 239)", "textH": "39", "textW": "80", "textC": "89", "angleTop": "", "angleLBot": "", "bottomText": "", "top": 5, "left": 10, "ptA": "U", "ptB": "V", "ptC": "W" },
            { "type": "rightTriangle", "h": 39, "w": 39, "color": "rgb(154, 154, 239)", "textH": "18.88", "textW": "", "textC": "30", "angleTop": "", "angleLBot": "a", "bottomText": "", "top": 5, "left": 10, "ptA": "", "ptB": "", "ptC": "" },
            { "type": "rightTriangle", "h": 24, "w": 18, "color": "rgb(154, 154, 239)", "textH": "24", "textW": "18", "textC": "", "angleTop": "", "angleLBot": "a=?", "bottomText": "", "top": 5, "left": 10, "ptA": "", "ptB": "", "ptC": "" },
            { "type": "rightTriangle", "h": 6, "w": 8, "color": "rgb(154, 154, 239)", "textH": "6", "textW": "8", "textC": "10", "angleTop": "A", "angleLBot": "", "bottomText": "", "top": 5, "left": 10, "ptA": "", "ptB": "", "ptC": "" },
            { "type": "rightTriangle", "h": 6, "w": 8, "color": "rgb(154, 154, 239)", "textH": "c", "textW": "8", "textC": "11", "angleTop": "37", "angleLBot": "", "bottomText": "", "top": 5, "left": 10, "ptA": "A", "ptB": "B", "ptC": "C" },
            { "type": "rightTriangle", "h": 36, "w": 77, "color": "rgb(154, 154, 239)", "textH": "36", "textW": "77", "textC": "85", "angleTop": "", "angleLBot": "", "bottomText": "", "top": 5, "left": 10, "ptA": "K", "ptB": "J", "ptC": "I" },
            { "type": "rightTriangle", "h": 98, "w": 85, "color": "yellow", "textH": "A", "textW": "B", "textC": "C", "angleTop": "", "angleLBot": "", "angleRBot": "", "top": 5, "left": 10, "dimType": "point" }, { "type": "dcircle", "radius": 800, "color": "blue", "top": 10, "left": 10 },

            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 50 },
            { "type": "polygon", "a": 120, "b": 220, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 97, "b": 130, "c": 99, "d": 104, "textA": "97", "textB": "k", "textC": "99", "textD": "104", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 83, "b": 66, "c": 80, "d": 91, "textA": "83", "textB": "k", "textC": "80", "textD": "91", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 75, "b": 99, "c": 79, "d": 81, "textA": "75", "textB": "k", "textC": "79", "textD": "81", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 69, "b": 65, "c": 61, "d": 87, "textA": "69", "textB": "65", "textC": "61", "textD": "d", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 63, "b": 70, "c": 72, "d": 69, "textA": "63", "textB": "70", "textC": "72", "textD": "d", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 67, "b": 92, "c": 64, "d": 62, "textA": "67", "textB": "k", "textC": "64", "textD": "62", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 59, "b": 50, "c": 64, "d": 67, "textA": "59", "textB": "k", "textC": "50", "textD": "64", "color": "orange", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 34, "b": 36, "c": 20, "d": 5, "textA": "34", "textB": "v", "textC": "20", "textD": "5", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 4, "b": 4, "c": 2, "d": 2, "textA": "4", "textB": "v", "textC": "2", "textD": "2", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 94, "b": 79, "c": 12, "d": 10, "textA": "94", "textB": "v", "textC": "12", "textD": "10", "color": "rgb(154, 154, 239)", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "polygon", "a": 110, "b": 130, "c": 100, "d": 110, "textA": "120", "textB": "k", "textC": "100", "textD": "110", "color": "blue", "top": 10, "left": 20 },
            { "type": "rightTriangle", "h": 12, "w": 22.6, "color": "rgb(154, 154, 239)", "textH": "12mi", "textW": "22.6mi", "textC": "25.6mi", "angleTop": "62", "angleLBot": "28", "bottomText": "", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 8, "w": 15, "color": "rgb(154, 154, 239)", "textH": "8", "textW": "15", "textC": "17", "angleTop": "", "angleLBot": "a", "bottomText": "", "top": 5, "left": 10 },

            { "type": "normalTriangle", "a": 208, "b": 82, "c": 90, "textA": "208", "textB": "82", "textC": "90", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "color": "green", "top": 50, "left": 10, "showAngle": true },
            // { "type": "paralellogram", "w": 400, "h": 350, "color": "rgb(44, 183, 100)", "top": 50, "left": 10, "bottomText": "Find the perimeter." },
            { "type": "paralellogram", "w": 400, "h": 350, "color": "rgb(44, 183, 100)", "top": 50, "left": 10, "bottomText": "Find the perimeter." },

            { "type": "triangle", "h": 98, "w": 85, "color": "yellow", "textH": "x", "textW": "y", "textC": "z", "angleTop": "", "angleLBot": "b", "angleRBot": "", "bottomText": "Find the perimeter.", "top": 5, "left": 10 },
            { "type": "triangle", "h": 98, "w": 85, "color": "yellow", "textH": "15m", "textW": "10m", "textC": "17m", "angleTop": "", "angleLBot": "", "angleRBot": "", "bottomText": "Find the perimeter.", "top": 5, "left": 10 },
            { "type": "triangle", "h": 98, "w": 85, "color": "yellow", "textH": "", "textW": "", "textC": "", "angleTop": "70", "angleLBot": "60", "angleRBot": "50", "bottomText": "What kind of triangle is this?", "top": 5, "left": 10 },
            { "type": "triangle", "h": 98, "w": 85, "color": "yellow", "textH": "", "textW": "", "textC": "", "angleTop": "70", "angleLBot": "?", "angleRBot": "50", "bottomText": "Find the missing angle", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 98, "w": 85, "color": "yellow", "textH": "4mi", "textW": "3mi", "textC": "", "angleTop": "", "angleLBot": "b", "angleRBot": "", "bottomText": "Find the perimeter.", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 98, "w": 85, "color": "yellow", "textH": "98", "textW": "85", "textC": "z", "angleTop": "", "angleLBot": "b", "angleRBot": "", "top": 5, "left": 10 },
            { "type": "rightTriangle", "h": 98, "w": 85, "color": "yellow", "textH": "98", "textW": "85", "textC": "z", "angleTop": "", "angleLBot": "", "angleRBot": "", "top": 5, "left": 10 }
////
//{ "type": "trapezoidalSquare", "a": 120, "b": 100, "h": 110, "textA": "120", "textB": "k?", "textC": "100", "textD": "110", "bottomText": "Find k", "color": "green", "top": 50, "left": 10 },

//{ "type": "polygon5s", "a": 120, "b": 150, "c": 100, "d": 110, "e": 140, "textA": "P1", "textB": "P2", "textC": "P3", "textD": "P4", "textE": "P5", "color": "blue", "top": 10, "left": 50 },

//{ "type": "polygon", "a": 97, "b": 130, "c": 99, "d": 104, "textA": "97", "textB": "130", "textC": "99", "textD": "104", "color": "blue", "top": 10, "left": 50 },
//


////{ "type": "normalTrapezoid", "a": 120, "b": 120, "h": 130, "angle": 200, "color": "rgb(44, 183, 100)", "top": 50, "left": 10, "bottomText": "Find the perimeter." },
////{ "type": "normalTrapezoid", "a": 20, "b": 20, "h": 10, "angle": 200, "color": "rgb(44, 183, 100)", "top": 50, "left": 10, "bottomText": "Find the perimeter." },
////{ "type": "csemicircle", "radius": 800, "color": "blue", "top": 10, "left": 10 },
////{ "type": "dsemicircle", "radius": 800, "color": "blue", "top": 10, "left": 10 },
////{ "type": "semicircle", "radius": 300, "color": "blue", "top": 10, "left": 10 },
////{ "type": "ccircle", "radius": 450, "color": "blue", "top": 10, "left": 10 },
////{ "type": "dcircle", "radius": 800, "color": "blue", "top": 10, "left": 10 },
////{ "type": "circle", "radius": 800, "color": "blue", "top": 10, "left": 10 },
//{"type":"nestedtriangle","h":98,"w":85,"color":"yellow","textH":"x","textW":"y","textC":"z","angleTop":"a","angleLBot":"c","angleRBot":"b","bottomText":"Nested Triangle","ih":40,"iw":35,"icolor":"red","itextH":"ix","itextW":"iy","itextC":"iz","iangleTop":"iTop","iangleLBot":"ileft","iangleRBot":"iright","top":5,"left":10},
        ];

        $scope.loadCanvas = function () {
            var data = $scope.lstData;
            var draw = new Draw();
            for (var i in data) {
                var j = parseInt(i);//+ 1;
                var id = "c_" + (j);
                var canvasa = new fabric.StaticCanvas(id);
                switch (data[i].type) {
                    case 'lines':
                        canvasa.add(draw.DrawLines({
                            angle: data[i].angle,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true,
                            bottomText: data[i].bottomText,
                        }));
                        break;
                    case 'twoLines':
                        canvasa.add(draw.DrawTwoLines({
                            angle: data[i].angle,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true,
                            bottomText: data[i].bottomText,
                        }));
                        break;

                    case 'paralellogram':
                        canvasa.add(draw.DrawParalelloGram({
                            width: data[i].w,
                            height: data[i].h,
                            h: data[i].h,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true,
                            bottomText: data[i].bottomText,
                        }));
                        break;
                    case 'polygon':
                        canvasa.add(draw.DrawPolygon({
                            a: data[i].a,
                            b: data[i].b,
                            c: data[i].c,
                            d: data[i].d,
                            textA: data[i].textA,
                            textB: data[i].textB,
                            textC: data[i].textC,
                            textD: data[i].textD,
                            AngleA: data[i].AngleA,
                            AngleB: data[i].AngleB,
                            AngleC: data[i].AngleC,
                            AngleD: data[i].AngleD,
                            textAngleA: data[i].textAngleA,
                            textAngleB: data[i].textAngleB,
                            textAngleC: data[i].textAngleC,
                            textAngleD: data[i].textAngleD,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true,
                            DrawBy: data[i].DrawBy
                        }));
                        break;
                    case 'circle':
                        canvasa.add(draw.DrawCircle({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'ratioCircle':
                        canvasa.add(draw.DrawRatioCircle({
                            r: data[i].r,
                            angle: data[i].angle,
                            text: data[i].text,
                            textangle: data[i].textangle,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'radiansArcLength':
                        canvasa.add(draw.DrawRadiansArcLength({
                            r: data[i].r,
                            angle: data[i].angle,
                            text: data[i].text,
                            arc: data[i].arc,
                            shade: data[i].shade,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'ccircle':
                        canvasa.add(draw.DrawCircleWithCircumference({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'dcircle':
                        canvasa.add(draw.DrawCircleWithDiameter({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'semicircle':
                        canvasa.add(draw.DrawSemiCircle({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'dsemicircle':
                        canvasa.add(draw.DrawSemiCircleWithDiameter({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'csemicircle':
                        canvasa.add(draw.DrawSemiCircleWihCircumference({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'rectangle':
                        canvasa.add(draw.DrawRect({
                            width: data[i].w,
                            height: data[i].h,
                            fill: data[i].color,
                            left: data[i].left,
                            top: data[i].top,
                            showDimensions: true,
                            textH: data[i].textH,
                            textW: data[i].textW,
                            textH1: data[i].textH1,
                            textW1: data[i].textW1,
                            bottomText: data[i].bottomText,
                        }));
                        break;
                    case 'ellipse':
                        canvasa.add(draw.DrawEllipse({
                            left: data[i].left,
                            top: data[i].top,
                            rx: data[i].rx,
                            ry: data[i].ry,
                            fill: data[i].color,
                            showDimensions: true
                        }));
                        break;
                    case 'triangle':
                        canvasa.add(draw.DrawTriangle({
                            width: data[i].w,
                            height: data[i].h,
                            fill: data[i].color,
                            left: data[i].left,
                            top: data[i].top,
                            showDimensions: true,
                            textH: data[i].textH,
                            textW: data[i].textW,
                            textC: data[i].textC,
                            angleTop: data[i].angleTop,
                            angleLBot: data[i].angleLBot,
                            angleRBot: data[i].angleRBot,
                            bottomText: data[i].bottomText,
                            ptA: data[i].ptA,
                            ptB: data[i].ptB,
                            ptC: data[i].ptC,
                        }));
                        break;
                    case 'rightTriangle':
                        canvasa.add(draw.DrawRightTriangle({
                            width: data[i].w,
                            height: data[i].h,
                            fill: data[i].color,
                            left: data[i].left,
                            top: data[i].top,
                            showDimensions: true,
                            textH: data[i].textH,
                            textW: data[i].textW,
                            textC: data[i].textC,
                            angleTop: data[i].angleTop,
                            angleLBot: data[i].angleLBot,
                            angleRBot: data[i].angleRBot,
                            bottomText: data[i].bottomText,
                            ptA: data[i].ptA,
                            ptB: data[i].ptB,
                            ptC: data[i].ptC,
                            align: data[i].align,
                        }));
                        break;
                    case 'cone':
                        canvasa.add(draw.DrawCone({
                            width: data[i].w,
                            height: data[i].h,
                            fill: data[i].color,
                            left: data[i].left,
                            top: data[i].top,
                            showDimensions: true
                        }));
                        break;
                    case 'cylinderical':
                        canvasa.add(draw.DrawCylinderical({
                            width: data[i].w,
                            height: data[i].h,
                            fill: data[i].color,
                            left: data[i].left,
                            top: data[i].top,
                            showDimensions: true
                        }));
                        break;
                    case 'spehere':
                        canvasa.add(draw.DrawSpehere({
                            radius: data[i].radius,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'normalTriangle':
                        canvasa.add(draw.DrawNormalTriangle({
                            a: data[i].a,
                            b: data[i].b,
                            c: data[i].c,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            textA: data[i].textA,
                            textB: data[i].textB,
                            textC: data[i].textC,
                            angleTop: data[i].angleTop,
                            angleLBot: data[i].angleLBot,
                            angleRBot: data[i].angleRBot,
                            bottomText: data[i].bottomText,
                            showDimensions: true,
                            dimType: data[i].dimType,
                            showAngle: data[i].showAngle,
                            ptA: data[i].ptA,
                            ptB: data[i].ptB,
                            ptC: data[i].ptC,
                            showAltitude: data[i].showAltitude,
                            textAlt: data[i].textAlt,
                        }));
                        break;
                    case 'trapezoidalSquare':
                        canvasa.add(draw.DrawTrapezoidSquare({
                            a: data[i].a,
                            b: data[i].b,
                            h: data[i].h,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true,
                            textA: data[i].textA,
                            textB: data[i].textB,
                            textC: data[i].textC,
                            textD: data[i].textD,
                            bottomText: data[i].bottomText,
                        }));
                        break;
                    case 'isoscelesTrapezoid':
                        canvasa.add(draw.DrawIsoscelesTrapezoid({
                            a: data[i].a,
                            b: data[i].b,
                            h: data[i].h,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'quartercircle':
                        canvasa.add(draw.DrawQuarterCircle({
                            r: data[i].r,
                            angle: data[i].angle,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true
                        }));
                        break;
                    case 'normalTrapezoid':
                        //debugger;
                        canvasa.add(draw.DrawNormalTrapezoid({
                            a: data[i].a,
                            b: data[i].b,
                            h: data[i].h,
                            angle: data[i].angle,
                            fill: data[i].color,
                            top: data[i].top,
                            left: data[i].left,
                            showDimensions: true,
                            bottomText: data[i].bottomText,
                        }));
                        break;
                }
            }

            var canvasa = new fabric.StaticCanvas('c_1');
            var ccc = new fabric.Circle({
                radius: 18,
                angle: 60,
                //strokeWidth: 1,
                startAngle: 0,
                endAngle: Math.PI / 2,
                stroke: 'black',
                left: 100,
                fill: '',
                top: 100,
            });

            canvasa.add(ccc);
        }

    }]);