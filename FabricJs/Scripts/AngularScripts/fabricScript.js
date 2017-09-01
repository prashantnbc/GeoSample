// create a wrapper around native canvas element (with id="c")
var Draw = function () {

    var initOptions = {
        arrow: {
            triangle: {
                height: 5,
                width: 5
            }
        }
    };
    var fontSize = 14;
    /*----------------------------------------------------------------------------------------*/
    var Scaling2 = function (argh, argw, argr, argd) {
        var maxcanvas = c_0.height;
        var biggest;
        var m = 1.5;
        //;
        if (argh !== undefined && argw !== undefined && argr !== undefined && argd !== undefined) { // for polygon
            biggest = Math.sqrt(argh * argh + argw * argw + argr * argr + argd * argd);
            m = 1.0;
        }
        else if (argh !== undefined && argw !== undefined && argr !== undefined) // for triangle with 3 sides
        {
            biggest = Math.sqrt(argh * argh + argw * argw + argr * argr);
            m = .9;
        }
        else if (argh !== undefined && argw !== undefined) {
            biggest = Math.sqrt(argh * argh + argw * argw);
            m = 1.3;
        }
        else if (argr !== undefined) {
            biggest = Math.sqrt(argr * argr);
            m = 4;
        }
        var totalMFactor = maxcanvas / biggest; //m * scaling factor
        //console.log(totalMFactor);
        var scaleFactor = totalMFactor / m;
        //console.log("scaleFactor:" + scaleFactor);
        return scaleFactor;

    }
    var scaleImage = function (args) {
        var scalingFactor;
        if (args.width !== undefined && args.height !== undefined) {
            scalingFactor = Scaling2(args.width, args.height, args.radius, args.d);
            args.width = args.width * scalingFactor;
            args.height = args.height * scalingFactor;
        }
        else if (args.a !== undefined && args.b !== undefined && args.c !== undefined && args.d !== undefined) {
            scalingFactor = Scaling2(args.a, args.b, args.c, args.d);
            args.a = args.a * scalingFactor;
            args.b = args.b * scalingFactor;
            args.c = args.c * scalingFactor;
            //args.d = args.d * scalingFactor;
        }
        else if (args.a !== undefined && args.b !== undefined && args.c !== undefined) {
            scalingFactor = Scaling2(args.a, args.b, args.c, args.d);
            args.a = args.a * scalingFactor;
            args.b = args.b * scalingFactor;
            args.c = args.c * scalingFactor;
        }
        else if (args.radius !== undefined) {
            scalingFactor = Scaling2(args.a, args.b, args.radius, args.d);
            args.radius = args.radius * scalingFactor;
        }

        //return scalingFactor;
        return args;

    }
    //*******************************Basic Methods to draw*****************************
    var writeText = function (text, left, top, center) {
        var rText = text || "";
        var wText;
        if (center === 'x') {
            var wText = new fabric.Text(rText.toString(), {
                fontSize: fontSize,
                originX: 'center',
                left: left,
                top: top
            });
        }
        else if (center === 'y') {
            var wText = new fabric.Text(rText.toString(), {
                fontSize: fontSize,
                originY: 'center',
                left: left,
                top: top
            });
        }
        else {
            var wText = new fabric.Text(rText.toString(), {
                fontSize: fontSize,
                originX: 'center',
                originY: 'center',
                left: left,
                top: top
            });
        }
        return wText;
    };
    var writeAngleCircle = function (angleText, angle, sAngle, eAngle, top, left, fill, args) {
        var tCircleTop;
        if (angleText === 90) {
            var tLineTopL = new fabric.Line([0, 15, 0, 0], {
                fill: '',
                //strokeWidth: 1,
                stroke: 'black'
            });
            var tLineTopR = new fabric.Line([0, 0, 15, 0], {
                fill: '',
                //strokeWidth: 1,
                stroke: 'black'
            });
            tCircleTop = new fabric.Group([tLineTopR, tLineTopL], {
                angle: 0,
                top: top,
                left: left
            });
            return tCircleTop;
        }
        else {
            tCircleTop = new fabric.Circle({
                radius: 15,
                angle: angle,
                //strokeWidth: 1,
                startAngle: sAngle,
                endAngle: eAngle,
                stroke: 'black',
                left: left,
                fill: '',
                top: top,
            });
            return tCircleTop;
        }
        return tCircleTop;
    };

    var writeArrow = function (left, top, angle) {
        var arrow = new fabric.Triangle({
            fill: 'black',
            height: initOptions.arrow.triangle.height,
            width: initOptions.arrow.triangle.width,
            left: left,
            top: top,
            angle: angle
        });
        return arrow;
    };
    var writeLine = function (pt1, pt2, pt3, pt4) {
        var line = new fabric.Line([pt1, pt2, pt3, pt4], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        return line;
    };
    var writeRect = function (fill, width, height) {
        var rect = new fabric.Rect({
            top: 0,
            left: 0,
            stroke: fill,
            fill: '',
            width: width,
            height: height
        });
        return rect;
    };
    var writeRtLine = function (left, top) {
        var rtLineH = new fabric.Line([0, 0, 15, 0], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        var rtLineW = new fabric.Line([0, 15, 0, 0], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        var rtLine = new fabric.Group([rtLineH, rtLineW], {
            top: top,
            left: left
        });
        return rtLine;
    };
    var writeLRtLine = function (left, top) {
        var rtLineH = new fabric.Line([0, 0, -15, 0], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        var rtLineW = new fabric.Line([0, 15, 0, 0], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        var rtLine = new fabric.Group([rtLineW, rtLineH], {
            top: top,
            left: left
        });
        return rtLine;
    };
    var writeCircumference = function (top, left, radius, sAngle, eAngle, type) {
        //debugger;
        var circumferenceCircle;
        if (type === 'circle') {
            circumferenceCircle = new fabric.Circle({
                radius: radius + 4,
                //strokeWidth: 1,
                top: top,
                left: left,
                stroke: 'black',
                fill: '',
            });
        } else {
            circumferenceCircle = new fabric.Circle({
                radius: radius + 4,
                //strokeWidth: 1,
                top: 4,
                left: 4,
                stroke: 'black',
                fill: '',
                angle: 180,
                startAngle: 0,
                endAngle: Math.PI
            });
        }
        return circumferenceCircle;
    };
    var writeCircleLine = function (pt1, pt2, pt3, pt4, radius) {
        var cLD = new fabric.Line([pt1, pt2, pt3, pt4], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 0.5,
            padding: 10,
            left: 2,
            top: radius,
            scaleX: 3,
            scaleY: 3,
        });
        return cLD;
    }
    var writeSemiCircleLine = function (pt1, pt2, pt3, pt4, radius, fill, type) {
        var cSemiCrL;
        if (type === 'base') {
            cSemiCrL = new fabric.Line([pt1, pt2, pt3, pt4], {
                fill: 'black',
                stroke: fill,
                strokeWidth: 0.5,
                padding: 10,
                left: 0,
                top: -radius,
                angle: 180,
                startAngle: 0,
                endAngle: Math.PI,
                scaleX: 3,
                scaleY: 3
            });
        }
        else {
            cSemiCrL = new fabric.Line([pt1, pt2, pt3, pt4], {
                fill: 'black',
                stroke: fill,
                strokeWidth: 0.5,
                padding: 10,
                left: 0,
                top: -radius + 5,
                angle: 180,
                startAngle: 0,
                endAngle: Math.PI,
                scaleX: 3,
                scaleY: 3
            });
        }
        return cSemiCrL;
    }
    var writeSemiCircleArrow = function (left, top, angle, sAngle, eAngle) {
        var arrow = new fabric.Triangle({
            fill: 'black',
            height: initOptions.arrow.triangle.height,
            width: initOptions.arrow.triangle.width,
            top: top,
            angle: angle,
            startAngle: sAngle,
            endAngle: eAngle,
            left: left
        });
        return arrow;
    };
    //************************************************************************************
    /*----------------------------------------------------------------------------------------*/
    var DrawArrow = function (args) {
        var argh = args.height || args.h;
        var argw = args.width || args.w;
        var argr = args.radius;


        var sphereEllipse = new fabric.Ellipse({
            top: argr / 1.3,
            fill: 'green',
            strokeDashArray: [5, 5],
            stroke: 'black',
            rx: argr,
            ry: argr / 4
        });
        /*-------------------------------------------------------------------------------------------*/
        var coneLine = function () {
            var coneLineH = new fabric.Line([0, argh, 0, 0], {
                fill: '',
                left: (argw + 1) / 2,
                strokeDashArray: [5, 5],
                stroke: 'black'
            });
            var coneLineW = new fabric.Line([0, 0, argw / 2 + 1, 0], {
                fill: '',
                top: argh + 7,
                strokeDashArray: [5, 5],
                stroke: 'black'
            });
            var coneLine = new fabric.Group([coneLineH, coneLineW], {
                top: 0,
                left: 0
            });
            return coneLine;
        };
        var TconeEllipse = new fabric.Ellipse({
            top: -(argw / 5 + 3),
            left: -0.5,
            fill: 'green',
            //strokeWidth: 1,
            stroke: 'black',
            rx: argw / 2,
            ry: argw / 4
        });
        var coneEllipse = new fabric.Ellipse({
            top: argh - argw / 5 - 2,
            fill: 'green',
            strokeDashArray: [5, 5],
            stroke: 'black',
            rx: argw / 2,
            ry: argw / 4
        });

        var LH = new fabric.Line([0, argh / 3 - 2, 0, 0], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 0.5,
            padding: 10,
            left: argw + 5,
            top: 2,
            scaleX: 3,
            scaleY: 3
        });
        /*-------------------------------------------------------------------------------------------*/
        var A1 = new fabric.Triangle({
            fill: 'black',
            height: initOptions.arrow.triangle.height,
            width: initOptions.arrow.triangle.width,
            left: argw + 3.3
        });
        var A2 = new fabric.Triangle({
            fill: 'black',
            height: initOptions.arrow.triangle.height,
            width: initOptions.arrow.triangle.width,
            left: argw + 8,
            top: argh,
            angle: 180
        });

        return arrow = {
            A1: A1,
            A2: A2,
            LH: LH,
            coneEllipse: coneEllipse,
            TconeEllipse: TconeEllipse,
            sphereEllipse: sphereEllipse,
            coneLine: coneLine()
        };
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawRect = function (args) {
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        var rect = writeRect(args.fill, args.width, args.height)
        var w = writeText(args.textW || rWidth, args.width / 2, -25, "x");
        var h = writeText(args.textH || rHeight, -30, args.height / 2, "x");
        var w1 = writeText(args.textW1 || "", args.width / 2, args.height + 5, "x");
        var h1 = writeText(args.textH1 || "", args.width + 10, args.height / 2, "x");
        var BotHead = writeText(args.bottomText || "", args.left, args.height + 40, "x");

        var group = new fabric.Group([rect, BotHead, w, h, w1, h1], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawTriangle = function (args) {
        function calculateHeightandWidth(string, param, top, type) {
            if (type) {
                if (top) {
                    var angle_temp = parseFloat(string);
                    angle_temp = angle_temp * Math.PI / 180;
                    return Math.tan(angle_temp) * param;
                } else {
                    var angle_temp = parseFloat(string);
                    angle_temp = (180 - angle_temp) / 2;
                    angle_temp = angle_temp * Math.PI / 180;
                    return Math.tan(angle_temp) * param;
                }
            } else {
                if (top) {
                    var angle_temp = parseFloat(string);
                    angle_temp = angle_temp * Math.PI / 180;
                    return 2 * param / Math.tan(angle_temp);
                } else {
                    var angle_temp = parseFloat(string);
                    angle_temp = (180 - angle_temp) / 2;
                    angle_temp = angle_temp * Math.PI / 180;
                    return 2 * param / Math.tan(angle_temp);
                }
            }
        }
        //;
        if (args.height === null) {
            if (args.angleRBot !== "?") {
                args.height = calculateHeightandWidth(args.angleRBot, args.width / 2, 1, 1);
            } else if (args.angleLBot !== "?") {
                args.height = calculateHeightandWidth(args.angleRBot, args.width / 2, 1, 1);
            } else {
                args.height = calculateHeightandWidth(args.angleTop, args.width / 2, 0, 1);
            }
        } if (args.width === null) {
            if (args.angleRBot !== "?") {
                args.width = calculateHeightandWidth(args.angleRBot, args.height, 1, 0);
            } else if (args.angleLBot !== "?") {
                args.width = calculateHeightandWidth(args.angleRBot, args.height / 2, 1, 0);
            } else {
                args.width = calculateHeightandWidth(args.angleTop, args.height / 2, 0, 0);
            }
        }
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        var triangle = new fabric.Triangle({
            top: 0,
            left: 0,
            stroke: args.fill,
            fill: '',
            width: args.width,
            height: args.height
        });
        //for side text
        var w = writeText(args.textW, args.width / 2, args.height + 5, "x");
        var h = writeText(args.textH, args.width - 22, args.height / 2, "x");
        var c = writeText(args.textC, -5, args.height / 2, "x");
        var BotHead = writeText(args.BottomText, 2, args.height + 40, "x");

        var argh = args.height;
        var argw = args.width;
        //for point names

        //for point A B and C
        var pA = writeText(args.ptA, args.width / 2 - 5, -5, "y");
        var pB = writeText(args.ptB, -15, args.height, "y");
        var pC = writeText(args.ptC, args.width + 10, args.height - 5, "y");

        // for angle text
        var tTextTop = writeText(args.angleTop, argw / 2 - 4, 35, "y");
        var tTextBotL = writeText(args.angleRBot, 25, argh - 10, "y");
        var tTextBotR = writeText(args.angleLBot, argw - 30, argh - 10, "y");

        //for angle arc
        var tAngleTop = Math.round(((Math.atan((argw / 2) / argh)) * (180 / Math.PI)) * 2);
        var tAngleBot = Math.round((180 - tAngleTop) / 2);

        var tRightAngle = writeAngleCircle(tAngleTop, 0, ((180 - tAngleTop) / 360) * Math.PI, ((180 + tAngleTop) / 360) * Math.PI, -15, argw / 2 - 15, args.fill, args);
        var tCircleBotR = writeAngleCircle(tAngleBot, 0, Math.PI, Math.PI + (tAngleBot * 0.0174533), argh - 16, argw - 15, args.fill, args);
        var tCircleBotL = writeAngleCircle(tAngleBot, 0, ((360 - tAngleBot + 3) / 180) * Math.PI, 0, argh - 16, -18, args.fill, args);
        var tCircleBotL = new fabric.Circle({
            radius: 15,
            //strokeWidth: 1,
            startAngle: ((360 - args.angB + 3) / 180) * Math.PI,
            endAngle: 0,
            stroke: 'black',
            fill: args.angBFill || '',
            top: argh - 16,
            left: -15
        });

        var group = new fabric.Group([triangle, w, h, c, pA, pB, pC, BotHead, tRightAngle, tTextTop, tTextBotL, tTextBotR, tCircleBotR, tCircleBotL], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawRightTriangle = function (args) {
        //;
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        var group;
        if (args.align === 'right') {
            group = writeRightRightTriangle(args);
        }
        else {
            group = writeLeftRightTriangle(args);
        }
        return group;
    };

    var writeLeftRightTriangle = function (args) {
        var w = writeText(args.textW, args.width / 2, args.height + 5, "x");
        var h = writeText(args.textH, -15, args.height / 2 + args.fontSize / 2, "y");
        var c = writeText(args.textC, args.width / 2, args.height / 2 - 10, "y");

        //for point A B and C
        var pA = writeText(args.ptA, -15, -5, "y");
        var pB = writeText(args.ptB, -15, args.height, "y");
        var pC = writeText(args.ptC, args.width + 10, args.height, "y");

        var BotHead = writeText(args.bottomText, 2, args.height + 40, "y");
        var path;
        var rtLine

        path = new fabric.Path('M 0 0 L 0 ' + args.height + ' L ' + args.width + ' ' + args.height + ' z');
        rtLine = writeLRtLine(args.left - 10, args.height - 16);

        var rtTextTop = writeText(args.angleTop, args.left, args.top + 30, "y");
        var rtTextBot = writeText(args.angleLBot, args.width - args.left - 25, args.height - args.top - 5, "y");

        var rtAngleTop = (Math.atan(args.width / args.height)) * (180 / Math.PI);  //ngle in degrees
        var rtAngleBot = 90 - rtAngleTop;
        //debugger;
        //todo
        var rtCircleTop = writeAngleCircle(rtAngleTop, 0, (90 - rtAngleTop) / 180 * Math.PI, 0.5 * Math.PI, -14, -14, args.fill, args);
        var rtCircleBot = writeAngleCircle(rtAngleBot, 0, Math.PI, Math.PI + (rtAngleBot / 180 * Math.PI), args.height - 16, args.width - 18, args.fill, args);

        path.set({
            stroke: args.fill,
            fill: ''
        });

        var group = new fabric.Group([path, h, w, c, pA, pB, pC, BotHead, rtTextTop, rtTextBot, rtCircleTop, rtCircleBot, rtLine], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    }
    var writeRightRightTriangle = function (args) {
        var w = writeText(args.textW, args.width / 2, args.height + 5, "x");
        var h = writeText(args.textH, args.width + 10, args.height / 2 + args.fontSize / 2, "y");
        var c = writeText(args.textC, args.width / 2 - 40, args.height / 2 - 10, "y");
        //for point A B and C
        var pA = writeText(args.ptA, args.width + 10, -5, "y");
        var pB = writeText(args.ptB, -15, args.height, "y");
        var pC = writeText(args.ptC, args.width + 10, args.height, "y");

        var BotHead = writeText(args.bottomText, 2, args.height + 40, "y");

        var rtLine = writeRtLine(args.width - 16, args.height - 16);
        var rtTextTop = writeText(args.angleTop, args.width - 15, 30, "y");
        var rtTextBot = writeText(args.angleLBot, args.left + 20, args.width + 10, "y");

        var rtAngleTop = Math.round((Math.atan(args.width / args.height)) * (180 / Math.PI));
        var rtAngleBot = Math.round(90 - rtAngleTop);

        var rtCircleTop = writeAngleCircle(rtAngleTop, 0, 0.5 * Math.PI, (90 + rtAngleTop + 14) / 180 * Math.PI, -10, args.width - 14, args.fill, args);
        var rtCircleBot = writeAngleCircle(rtAngleBot, 0, ((360 - rtAngleBot - 8) / 180) * Math.PI, 0, args.height - 15, -13, args.fill, args);

        var path = new fabric.Path('M 0 ' + args.height + ' L ' + args.width + ' ' + args.height + ' L ' + args.width + ' 0 z');
        path.set({
            stroke: args.fill,
            fill: ''
        });

        var group = new fabric.Group([path, h, w, c, pA, pB, pC, BotHead, rtTextTop, rtTextBot, rtCircleTop, rtCircleBot, rtLine], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    }
    /*-------------------------------------------------------------------------------------------*/
    this.DrawNormalTriangle = function (args) {
        //;
        if (args.a === null) {
            var anglec = parseFloat(args.angleRBot) * Math.PI / 180;
            var angleb = parseFloat(args.angleLBot) * Math.PI / 180;
            var h = Math.sin(angleb) * args.c;
            args.b = h / Math.sin(anglec);
            args.a = (args.c * Math.cos(angleb)) + (args.b * Math.cos(anglec));
            console.log(args);
        }
        args.fontSize = args.fontSize || 14;
        var rA = args.a;
        var rB = args.b;
        var rC = args.c;
        args = scaleImage(args);
        if (args.showDimensions) {
            //;
            var s = (args.a + args.b + args.c) / 2;   //avg of sides
            var area = Math.sqrt(s * Math.abs(s - args.a) * Math.abs(s - args.b) * Math.abs(s - args.c));
            var h = (area * 2) / args.a;  //height            
            var d = Math.sqrt(Math.abs(args.c * args.c - h * h));
            var ad = 0;

            var disB = 0
            var addition = 0;
            var ncPos = 0;
            var BOnA = Math.sqrt(Math.abs(args.b * args.b - h * h));
            var COnA = Math.sqrt(Math.abs(args.c * args.c - h * h));
            if (parseFloat(d).toFixed(2) > args.a) {
                disB = Math.sqrt(Math.abs(args.b * args.b - h * h));
                ad = d - disB;
                if (BOnA > COnA) {
                    addition = -disB + 5;
                    ncPos = -d / 2;
                } else {
                    addition = BOnA * 2 / 3 + 5;
                    ncPos = d / 3.5;
                }
            }
            else {
                ad = args.a
                disB = -(Math.sqrt(Math.abs(args.b * args.b - h * h)) / 3);
                if (BOnA < 20) {
                    addition = disB + 15;
                } else {
                    addition = disB + 5;
                }
                if (d < 20) {
                    ncPos = -30;
                } else {
                    ncPos = d / 3.5;
                }
            };
            args.disB = disB;
            //;
            var a = args.a; var b = args.b; var c = args.c;

            var angB = Math.round(Math.acos((c * c + a * a - b * b) / (2 * c * a)) * 57.2958);
            var angA = Math.round(Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 57.2958);
            var angC = Math.round(180 - angA - angB);

            var na = writeText(args.textA, args.a / 2, h + 10, "x");
            var nb = writeText(args.textB, args.a + addition, h / 2, "y");
            var nc = writeText(args.textC, ncPos, h / 2, "y");

            //for point A B and C
            var pA = writeText(args.ptA, args.left - 18, h - 6, "x");
            var pB = writeText(args.ptB, args.a + 8, h + 2, "y");
            var pC = writeText(args.ptC, ncPos, -14, "y");

            var BotHead = writeText(args.BottomText, 2, h + 40, "y");

            var tTextTop = writeText(args.angleTop, d - 18, 32, "y");
            var tTextBotL = writeText(args.angleLBot, 20, h - 10, "y");
            var tTextBotR = writeText(args.angleRBot, args.a - 35, h - 10, "y");
            //for angle arc
            //For angle top            
            var left = d - 15;
            //var stAngle = ((180 - angA - (angA / 2)) / 360) * Math.PI;
            //var endAngle = ((180 + angA + 35) / 360) * Math.PI;
            //if (angC > 90) {

            //    left = d - (d - args.a) / 2 - FixNumb;
            //    stAngle = ((180 - angA - (angA) - 25) / 360) * Math.PI;
            //    endAngle = ((180 + angA + 35) / 360) * Math.PI;
            //}

            //var tRightAngle = writeAngleCircle(angA, 0, stAngle, endAngle, -10, left, args.fill, args);

            stAngle = /*((180 - 2*angA - 25) / 360) 1 * Math.PI*/ (angC / 180) * Math.PI;
            endAngle = /*((180 + angA + 35) / 360)*/ ((angC + angA) / 180) * Math.PI;
            var tRightAngle = writeAngleCircle(angA, 0, stAngle, endAngle, -14, left, args.fill, args);
            if (angC > 90) {
                if (angC > 150) {
                    stAngle = /*((180 - 2*angA - 25) / 360) 1 * Math.PI*/ (angC / 180) * Math.PI;
                    endAngle = /*((180 + angA + 35) / 360)*/ ((angC + angA) / 180) * Math.PI;
                    tRightAngle = writeAngleCircle(angA, 0, stAngle, endAngle, -17, d - 15, args.fill, args);
                } else {
                    stAngle = /*((180 - 2*angA - 25) / 360) 1 * Math.PI*/ (angC / 180) * Math.PI;
                    endAngle = /*((180 + angA + 35) / 360)*/ ((angC + angA) / 180) * Math.PI;
                    tRightAngle = writeAngleCircle(angA, 0, stAngle, endAngle, -17, d - 14, args.fill, args);
                }
            }
            var tCircleBotL = writeAngleCircle(angB, 0, ((360 - angB + 3) / 180) * Math.PI, 0, h - 16, -15, args.fill, args);
            var tCircleBotR = writeAngleCircle(angC, 0, Math.PI, Math.PI + (angC * 0.0174533), h - 16, args.a - 15, args.fill, args);

            var path = new fabric.Path('M 0 ' + h + ' L ' + ad + ' ' + h + ' L ' + d + ' 0 ' + ' z');   //correct

            path.set({
                stroke: args.fill,
                fill: ''
            });
            if (args.showAltitude) {
                var x1 = d;
                var y1 = h;
                var x2 = d;
                var y2 = 0;
                var heightLine = new fabric.Line([x1, y1, x2, y2], { stroke: args.fill || 'black' });
                args.width = 2 * d;
                //writeLRtLine
                var rtLine = writeLRtLine(d, h - 15);
                var baseLine = new fabric.Line([0, h + 5, args.a, h + 5], { stroke: args.fill || 'black' });
                var a1 = writeArrow(-1, h + 8, -90);
                var a2 = writeArrow(args.a + 1, h + 3, 90);
                var atext = writeText(args.textAlt, d - 10, h / 2, "x");
            }
            else {
                var heightLine = new fabric.Line([0, 0, 0, 0], { stroke: args.fill || 'black' });
                args.width = 2 * d;
                var rtLine = new fabric.Line([0, 0, 0, 0], { stroke: args.fill || 'black' });
                var baseLine = new fabric.Line([0, h + 5, args.a, h + 5], { stroke: args.fill || 'black' });
                var a1 = writeArrow(-1, h + 8, -90);
                var a2 = writeArrow(args.a + 1, h + 3, 90);
                var atext = writeText("", args.a / 2, h + 10, "x");
            }

            var group;
            if (args.showAngle) {
                group = new fabric.Group([path, na, nb, nc, pA, pB, pC, heightLine, rtLine, baseLine, a1, a2, atext, BotHead, tRightAngle, tTextTop, tTextBotL, tTextBotR, tCircleBotR, tCircleBotL], {
                    top: args.top,
                    left: args.left,
                });
            }
            else {
                group = new fabric.Group([path, na, nb, nc, heightLine, rtLine, baseLine, a1, a2, atext, BotHead], {
                    top: args.top,
                    left: args.left,
                });
            }
            return group;
        }
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawCircleWithCircumference = function (args) {
        //;
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.radius
        });
        var r = writeText(args.radius, -args.radius / 3, args.radius + 4, '');
        var circumferenceCircle = writeCircumference(-4, -4, args.radius, '', '', 'circle');
        var cCA1 = writeArrow(-1, args.radius + 2, 180);
        var cCA2 = writeArrow(-6, args.radius + 2, -360);

        // var ar = DrawArrow(args);
        var group = new fabric.Group([circle, r, circumferenceCircle, cCA1, cCA2], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;

    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawCircleWithDiameter = function (args) {
        //;
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.radius
        });
        var r = writeText(2 * args.radius, args.radius, args.radius + args.fontSize, '');
        var cLD = writeCircleLine(args.radius / 2 + 11, 0, 0, 0, args.radius);
        var cA1 = writeArrow('', args.radius + 3, -90);
        var cAD2 = writeArrow(2 * args.radius, args.radius - 2, 90);

        var group = new fabric.Group([circle, r, cLD, cA1, cAD2], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawCircle = function (args) {
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.radius
        });

        var r = writeText(args.radius, args.radius / 2, args.radius + args.fontSize / 1.5, '');
        var cL = writeCircleLine(args.radius / 3 - 2, 0, 0, 0, args.radius);
        var cA1 = writeArrow('', args.radius + 3, -90);
        var cA2 = writeArrow(args.radius, args.radius - 2, 90);


        var group = new fabric.Group([circle, r, cL, cA1, cA2], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawSemiCircle = function (args) {
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.radius,
            angle: 180,
            startAngle: 0,
            endAngle: Math.PI
        });
        //debugger;
        var r = writeText(args.radius, -args.radius / 2, -args.radius + args.fontSize, '');

        var cSemiCrL = writeSemiCircleLine(args.radius / 3 - 2, 0, 0, 0, args.radius, args.fill, '');
        var cBase = writeSemiCircleLine(args.radius / 2 + 12, 0, 0, 0, args.radius, args.fill, 'base');

        var SemiA1 = writeSemiCircleArrow(-args.radius + 2, -args.radius + 6, -90, 0, Math.PI);
        var cSemiA2 = writeSemiCircleArrow((args.radius / 5) - 11, -args.radius + 2, 90, 0, Math.PI);

        var group = new fabric.Group([circle, cBase, r, cSemiCrL, SemiA1, cSemiA2], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawSemiCircleWithDiameter = function (args) {
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        if (args.showDimensions) {
            var circle = new fabric.Circle({
                stroke: args.fill,
                fill: '',
                radius: args.radius,
                angle: 180,
                startAngle: 0,
                endAngle: Math.PI
            });
            var r = writeText(args.radius, -args.radius, -args.radius + args.fontSize, '');

            var cDSemiCrL = writeSemiCircleLine(args.radius / 2 + 11, 0, 0, 0, args.radius, args.fill, '');
            var cBase = writeSemiCircleLine(args.radius / 2 + 12, 0, 0, 0, args.radius, args.fill, 'base');

            var cDSemiA1 = writeSemiCircleArrow(-2 * args.radius, -args.radius + 7, -90, 0, Math.PI);
            var cSemiA2 = writeSemiCircleArrow((args.radius / 5) - 11, -args.radius + 2, 90, 0, Math.PI);

            var group = new fabric.Group([circle, cBase, r, cDSemiCrL, cDSemiA1, cSemiA2], {
                left: args.left,
                top: args.top,
                angle: args.angle || 0
            });
            return group;
        } else {
            var circle = new fabric.Circle({
                top: args.top,
                left: args.left,
                stroke: args.fill,
                fill: '',
                radius: args.radius
            });
            return circle;
        }
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawRatioCircle = function (args) {
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.r
        });

        var rL = writeLine(-20, args.r, 2 * args.r + 20, args.r);
        var rA1 = writeArrow(-20, args.r + 3, -90);
        var rA2 = writeArrow(2 * args.r + 20, args.r - 2, 90);

        var rowLine = new fabric.Group([rL, rA1, rA2], {
            angle: 0
        });

        var cL = writeLine(args.r, -20, args.r, 2 * args.r + 20);
        var cA1 = writeArrow(args.r - 2, -20, 0);
        var cA2 = writeArrow(args.r + 3, 2 * args.r + 20, 180);

        var colLine = new fabric.Group([cL, cA1, cA2], {
            angle: 0
        });
        //
        var alpha = args.angle * Math.PI / 180;
        var height = -Math.sin(alpha) * args.r;
        var width = Math.cos(alpha) * args.r;
        //
        var hypotenuse = writeLine(args.r, args.r, width + args.r, height + args.r);
        var sideox = writeLine(args.r, args.r, width + args.r, args.r);
        var sideoy = writeLine(width + args.r, height + args.r, width + args.r, args.r);
        //
        var upline = writeLine(width + args.r - 15, args.r, width + args.r - 15, args.r - 15);
        var downline = writeLine(width + args.r - 15, args.r - 15, width + args.r, args.r - 15);

        var rightangle = new fabric.Group([upline, downline], {
            angle: 0
        });
        //
        var st = (360 - args.angle) * Math.PI / 180;
        var end = 2 * Math.PI;
        var alphadr = writeAngleCircle(args.angle, 0, st, end, args.r - 15, args.r - 15, args.fill, args);
        //
        var alphatext = writeText(args.textangle, args.r + 20, args.r - 20, 'x');
        var triangleGroup = new fabric.Group([hypotenuse, sideox, sideoy, rightangle, alphadr, alphatext], {
            angle: 0
        });
        var textoutcircle = writeText(args.text, args.r * 2 + 10, args.r / 2, 'x');
        var group = new fabric.Group([circle, rowLine, colLine, triangleGroup, textoutcircle], {
            left: args.left,
            top: args.top
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawSemiCircleWihCircumference = function (args) {
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.radius,
            angle: 180,
            startAngle: 0,
            endAngle: Math.PI
        });
        var r = writeText(args.radius, -args.radius, -2 * args.radius - 15, '');

        var cBase = writeSemiCircleLine(args.radius / 2 + 12, 0, 0, 0, args.radius, args.fill, 'base');

        var circumferenceSemiCircle = writeCircumference(4, 4, args.radius, 0, Math.PI, 'semicircle');
        var cSemiCA1 = writeSemiCircleArrow(-2 * args.radius - 2, -args.radius + 5, 180, 0, Math.PI);
        var cSemiCA2 = writeSemiCircleArrow(args.radius / 5 - 9, -args.radius + 5, 180, 0, Math.PI);

        var group = new fabric.Group([circle, r, circumferenceSemiCircle, cSemiCA1, cSemiCA2, cBase], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawEllipse = function (args) {
        args.fontSize = args.fontSize || 14;
        var rX = args.rx;
        var rY = args.ry;
        args = scaleImage(args);
        var ellipse = new fabric.Ellipse({
            top: 0,
            left: 0,
            stroke: args.fill,
            fill: '',
            rx: args.rx,
            ry: args.ry
        });
        var rx = writeText(rX, args.rx, args.rx, 'x');
        var ry = writeText(rY, args.rx * 2 + 10, args.rx / 2 + args.fontSize / 2 - 10, 'x');

        var group = new fabric.Group([ellipse, rx, ry], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawRadiansArcLength = function (args) {

        var angle = args.angle * Math.PI / 180; console.log();
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.r
        });
        if (args.shade !== true) {
            var firstline = new fabric.Line([args.r, args.r, 2 * args.r, args.r], {
                fill: '',
                strokeWidth: 2,
                stroke: 'green'
            });
            var height = -Math.sin(angle) * args.r + args.r;
            var width = Math.cos(angle) * args.r + args.r;
            var endline = new fabric.Line([args.r, args.r, width, height], {
                fill: '',
                strokeWidth: 2,
                stroke: 'green'
            });
            if (args.angle === 90) {
                var tLineTopL = new fabric.Line([args.r + 15, args.r - 15, args.r + 15, args.r], {
                    fill: '',
                    strokeWidth: 2,
                    stroke: 'black'
                });
                var tLineTopR = new fabric.Line([args.r, args.r - 15, args.r + 15, args.r - 15], {
                    fill: '',
                    strokeWidth: 2,
                    stroke: 'black'
                });
                var adangle = new fabric.Circle({
                    radius: args.r,
                    angle: 0,
                    strokeWidth: 2,
                    startAngle: 270 / 180 * Math.PI,
                    endAngle: 360 / 180 * Math.PI,
                    stroke: 'green',
                    left: 0,
                    fill: '',
                    top: 0,
                });
                var textradius = writeText(args.r, args.r + args.r / 2, args.r + 5, 'x');
                var textang = writeText(args.text, args.r + 30, args.r - 30, 'x');
                var textangle = new fabric.Group([tLineTopR, tLineTopL, adangle, textradius, textang], {
                    angle: 0
                });
            } else {
                var anglecir = new fabric.Circle({
                    radius: 15,
                    angle: 0,
                    strokeWidth: 2,
                    startAngle: (360 - args.angle) / 180 * Math.PI,
                    endAngle: 360 / 180 * Math.PI,
                    stroke: 'black',
                    left: args.r - 15,
                    fill: '',
                    top: args.r - 15
                });
                var adangle = new fabric.Circle({
                    radius: args.r,
                    angle: 0,
                    strokeWidth: 2,
                    startAngle: (360 - args.angle) / 180 * Math.PI,
                    endAngle: 360 / 180 * Math.PI,
                    stroke: 'green',
                    left: 0,
                    fill: '',
                    top: 0
                });
                var textradius = writeText(args.r, args.r + args.r / 2, args.r + 5, 'x');
                var textang = writeText(args.text, args.r + 30, args.r - 30, 'x');
                var textangle = new fabric.Group([adangle, textradius, textang, anglecir], {
                    angle: 0
                });
            }

            var group = new fabric.Group([circle, firstline, endline, textangle], {
                left: args.left,
                top: args.top
            });
        } else {
            var firstline = new fabric.Line([args.r, args.r, 2 * args.r, args.r], {
                fill: '',
                strokeWidth: 2,
                stroke: 'green'
            });
            var height = -Math.sin(angle) * args.r + args.r;
            var width = Math.cos(angle) * args.r + args.r;
            var endline = new fabric.Line([args.r, args.r, width, height], {
                fill: '',
                strokeWidth: 2,
                stroke: 'green'
            });
            if (args.angle === 90) {
                var tLineTopL = new fabric.Line([args.r + 15, args.r - 15, args.r + 15, args.r], {
                    fill: '',
                    strokeWidth: 2,
                    stroke: 'black'
                });
                var tLineTopR = new fabric.Line([args.r, args.r - 15, args.r + 15, args.r - 15], {
                    fill: '',
                    strokeWidth: 2,
                    stroke: 'black'
                });
                var textangle = new fabric.Group([tLineTopR, tLineTopL], {
                    angle: 0
                });
            } else {
                var anglecir = new fabric.Circle({
                    radius: 15,
                    angle: 0,
                    strokeWidth: 2,
                    startAngle: (360 - args.angle) / 180 * Math.PI,
                    endAngle: 360 / 180 * Math.PI,
                    stroke: 'black',
                    left: args.r - 15,
                    fill: '',
                    top: args.r - 15
                });
                var textangle = new fabric.Group([anglecir], {
                    angle: 0
                });
            }

            var adangle = new fabric.Circle({
                radius: args.r,
                angle: 0,
                strokeWidth: 2,
                startAngle: (360 - args.angle) / 180 * Math.PI,
                endAngle: 360 / 180 * Math.PI,
                stroke: 'green',
                left: 0,
                fill: '',
                top: 0
            });

            var arc = new fabric.Circle({
                radius: args.r + 10,
                angle: 0,
                strokeWidth: 2,
                startAngle: (360 - args.angle) / 180 * Math.PI,
                endAngle: 360 / 180 * Math.PI,
                stroke: 'green',
                left: -10,
                fill: '',
                top: -10
            });
            var arcadditionlinest = new fabric.Line([2 * args.r + 5, args.r, 2 * args.r + 15, args.r], {
                fill: '',
                strokeWidth: 2,
                stroke: 'green'
            });

            var heightst = -Math.sin(angle) * (args.r + 5) + args.r;
            var widthst = Math.cos(angle) * (args.r + 5) + args.r;

            var heightend = -Math.sin(angle) * (args.r + 15) + args.r;
            var widthtend = Math.cos(angle) * (args.r + 15) + args.r;

            var arcadditionlineen = new fabric.Line([widthst, heightst, widthtend, heightend], {
                fill: '',
                strokeWidth: 2,
                stroke: 'green'
            });
            var textarc = writeText(args.arc, 2 * args.r + 15, args.r / 2 + Math.cos(angle) * 10, "x");
            var textradius = writeText(args.r, args.r + args.r / 2, args.r + 15, 'x');

            var radiusline = new fabric.Line([args.r, args.r + 5, 2 * args.r, args.r + 5], {
                fill: '',
                strokeWidth: 1,
                stroke: 'green'
            });

            var radiusAddline = new fabric.Line([args.r, args.r, args.r, args.r + 10], {
                fill: '',
                strokeWidth: 1,
                stroke: 'green'
            });

            var textang = writeText(args.text, args.r + 30, args.r - 30, 'x');
            var group = new fabric.Group([circle, firstline, endline, textangle, adangle, textradius, textang, arc, textarc, arcadditionlinest, arcadditionlineen, radiusline, radiusAddline], {
                left: args.left,
                top: args.top
            });
        }
        return group;
    }
    /*-------------------------------------------------------------------------------------------*/
    this.DrawQuarterCircle = function (args) {
        var angle = args.angle * Math.PI / 180;

        var height = Math.sin(angle) * args.r;
        var width = Math.cos(angle) * args.r;

        var st = new fabric.Line([0, height, args.r, height], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        var end = new fabric.Line([0, height, width, 0], {
            fill: '',
            //strokeWidth: 1,
            stroke: 'black'
        });
        var sAngle = ((180 - args.angle) + 180) * Math.PI / 180;
        var eAngle = 2 * Math.PI;
        var left = -90;
        var circleHeight = height - 90;
        var circlePart = new fabric.Circle({
            radius: args.r,
            angle: 0,
            //strokeWidth: 1,
            startAngle: sAngle,
            endAngle: eAngle,
            stroke: 'black',
            left: left,
            fill: '',
            top: circleHeight,
        });
        var baseLine = new fabric.Line([0, height + 5, args.r, height + 5], { stroke: args.fill || 'black' });
        var a1 = writeArrow(-1, height + 8, -90);
        var a2 = writeArrow(args.r + 1, height + 3, 90);
        var text = writeText(args.r.toString(), args.r / 2, height + 10, "x");
        var group = new fabric.Group([st, end, circlePart, baseLine, a1, a2, text], {
            left: args.left,
            top: args.top
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawPolygon = function (args) {
        if (args.DrawBy === "angle") {
            var AngleA = args.AngleA;
            var AngleB = args.AngleB;
            var AngleC = args.AngleC;
            var AngleD = args.AngleD;

            //split quadrilateral in two triangle
            var AC = Math.sqrt(args.a * args.a + args.b * args.b - 2 * args.a * args.b * Math.cos(AngleB * Math.PI / 180));
            var s = (args.a + args.b + AC) / 2;   //avg of sides
            var area = Math.sqrt(s * Math.abs(s - args.a) * Math.abs(s - args.b) * Math.abs(s - AC));
            var h = (area * 2) / AC;  //height
            //triangle BCD
            var B2 = Math.round(Math.acos(h / args.b) * 180 / Math.PI);

            var BCDheight = Math.sin(B2 * Math.PI / 180) * args.b;
            var D1 = 180 - B2 - AngleC;
            args.c = BCDheight / Math.sin(D1 * Math.PI / 180);

            //triangle DAB
            var DABheight = Math.sin((AngleB - B2) * Math.PI / 180) * args.a;
            var D2 = AngleD - D1
            args.d = DABheight / Math.sin(D2 * Math.PI / 180);

            //cal b base on a
            var Ay = args.a; var Cx = 0; var Cy = 0; var Dx = 0; var Dy = 0;

            var tempAngle = Math.abs(AngleB - 90) * Math.PI / 180;

            Cx = Math.cos(tempAngle) * args.b;
            Cy = Math.sin(tempAngle) * args.b;
            if (AngleB > 90) {
                Cy = -Cy;
            }

            tempAngle = Math.abs(180 - (AngleB - 90 + AngleC)) * Math.PI / 180;

            Dx = Math.cos(tempAngle) * args.c + Cx;
            Dy = Math.sin(tempAngle) * args.c + Cy;

            args.fontSize = args.fontSize || 14;
            args = scaleImage(args);
            var a = writeText(args.textAngleA, 15, Ay - 25, 'x');
            var b = writeText(args.textAngleB, 15, 15, 'x');
            var c = writeText(args.textAngleC, Cx - 15, Cy + 15, 'x');
            var d = writeText(args.textAngleD, Dx - 25, Dy - 25, 'x');

            var textAngleA = writeAngleCircle(args.textAngleA, 0, (270 / 180) * Math.PI, ((270 + AngleA) / 180) * Math.PI, Ay - 18, -15, "black", args);
            var textAngleB = writeAngleCircle(args.textAngleA, 0, ((450 - AngleB) / 180) * Math.PI, (450 / 180) * Math.PI, -15, -15, "black", args);
            if (AngleB > 90) {
                var tempCangle = AngleB - 90;
            } else {
                var tempCangle = 180 - (AngleC - (90 - AngleB));
            }
            var textAngleC = writeAngleCircle(args.textAngleA, 0, ((180 - tempCangle - AngleC) / 180) * Math.PI, ((180 - tempCangle) / 180) * Math.PI, -30, Cx - 16, "black", args);

            var textAngleD = writeAngleCircle(args.textAngleA, 0, ((AngleA - 90 + 180) / 180) * Math.PI, ((AngleA - 90 + 180 + AngleD) / 180) * Math.PI, Dx - 32, Dy + 5, "black", args);
            var theta = 60;
            var ang1 = Math.cos(theta / 57.2958);
            var ang2 = Math.sin((theta / 2) / 57.2958);

            var path = new fabric.Path('M 0 ' + Ay + ' L 0 0 L ' + Cx + ' ' + Cy + ' L ' + Dx + ' ' + Dy + ' z');
            path.set({
                stroke: args.fill,
                fill: ''
            });
            var group = new fabric.Group([path, a, b, c, d, textAngleA, textAngleB, textAngleC, textAngleD], {
                left: args.left,
                top: args.top,
                angle: args.angle || 0
            });

            console.log(group);
        } else {
            args.fontSize = args.fontSize || 14;
            args = scaleImage(args);
            var a = writeText(args.textA, -15, args.a / 2, 'x');
            var b = writeText(args.textB, args.b / 2, -args.top - 20, 'x');
            if (args.b < args.d) {
                var c = writeText(args.textC, args.b + 5, args.c / 2, 'x');
            } else {
                var c = writeText(args.textC, args.d + (args.b - args.d) / 2 + 10, args.c / 2, 'x');
            }
            var d = writeText(args.textD, args.d / 2, args.a + 5, 'x');

            var theta = 60;
            var ang1 = Math.cos(theta / 57.2958);
            var ang2 = Math.sin((theta / 2) / 57.2958);

            //var cx = args.b - (args.c * Math.cos(theta / 57.2958));
            //if (args.d > args.b)
            //{
            //    cx = args.b + (args.c * Math.cos(theta / 57.2958));
            //}

            //var dy = args.a - (args.d * Math.sin((theta / 2) / 57.2958));
            //console.log("cx"); console.log(cx); console.log("dx"); console.log(dy);
            //curr var path = new fabric.Path('M 0 0 L 0 ' + args.a + ' L ' + args.b + ' ' + args.a + ' L ' + args.d + ' ' + args.c + 'z');
            //var path = new fabric.Path('M 0 0 L 0 '+ args.a +' L ' + args.b +' '+ args.a+' L '+ dx+' '+cy +'z');
            var path = new fabric.Path('M 0 ' + args.a + ' L 0 0 L ' + args.b + ' 0 L ' + args.d + ' ' + args.c + ' z');
            path.set({
                stroke: args.fill,
                fill: ''
            });

            var group = new fabric.Group([path, a, b, c, d], {
                left: args.left,
                top: args.top,
                angle: args.angle || 0
            });
        }
        return group;
    };

    /*-------------------------------------------------------------------------------------------*/
    this.DrawCone = function (args) {
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        var triangle = new fabric.Triangle({
            top: 0,
            left: 0,
            stroke: args.fill,
            fill: '',
            width: args.width,
            height: args.height
        });
        var w = writeText(rWidth, args.width / 2, args.height + args.width / 4 + 20, 'x');
        var h = writeText(rHeight, args.width + 10, args.height / 2 + args.fontSize / 2, 'x');

        var ar = DrawArrow(args);
        var group = new fabric.Group([triangle, ar.coneEllipse, ar.coneLine, h, w, ar.LH, ar.A1, ar.A2], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawCylinderical = function (args) {
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        var rect = writeRect(args.fill, args.width, args.height);
        var w = writeText(rWidth, args.width / 2, args.height + args.width / 4 + 20, 'x');
        var h = writeText(rHeight, args.width + 10, args.height / 2 + args.fontSize / 2, 'x');

        var ar = DrawArrow(args);

        var group = new fabric.Group([rect, h, w, ar.LH, ar.A1, ar.A2, ar.coneEllipse, ar.coneLine, ar.TconeEllipse], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;

    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawSpehere = function (args) {
        args.fontSize = args.fontSize || 14;
        var rRadius = args.radius;
        args = scaleImage(args);
        var circle = new fabric.Circle({
            stroke: args.fill,
            fill: '',
            radius: args.radius
        });
        var r = writeText(rRadius, args.radius / 2, args.radius + args.fontSize / 1.5, '');

        var ar = DrawArrow(args);

        var group = new fabric.Group([circle, ar.cL, ar.cA1, ar.cA2, ar.sphereEllipse], {
            left: args.left,
            top: args.top,
            angle: args.angle || 0
        });
        return group;
    };
    /*-------------------------------------------------------------------------------------------*/

    this.DrawTrapezoidSquare = function (args) {
        args.fontSize = args.fontSize || 14;
        var rA = args.a;
        var rB = args.b;
        var rH = args.h;
        args = scaleImage(args);

        var tsa = writeText(args.textA || rA, -30, args.h / 2, 'x');
        var tsb = writeText(args.textB || rB, args.a / 2, -30, 'x');
        var tsh = writeText(args.textC || rH, args.b + 15, args.a / 2, 'x');
        var tsd = writeText(args.textD, args.b / 2, args.h + 13, 'x');
        var BotHead = writeText(args.BottomText, args.left, args.h + 40, 'x');

        var path = new fabric.Path('M 0 ' + args.h + ' L 0 0 L ' + args.a + ' 0 L ' + args.b + ' ' + args.h + ' z');
        path.set({
            stroke: args.fill,
            fill: '',
        });
        var group = new fabric.Group([path, BotHead, tsa, tsb, tsh, tsd], {
            top: args.top,
            left: args.left
        });
        return group;

    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawIsoscelesTrapezoid = function (args) {

        args.fontSize = args.fontSize || 14;
        var rA = args.a;
        var rB = args.b;
        var rH = args.h;
        args = scaleImage(args);
        var p = (args.b - args.a) / 2;
        var s = p + args.a;
        var tsa = writeText(rA, args.b / 2, -30, 'x');
        var tsb = writeText(rB, args.b / 2, args.h + 10, 'x');
        var scOna = Math.abs(args.a - args.b) / 2;
        var sc = Math.sqrt(scOna * scOna + rB * rB).toFixed(2);
        var tsc = writeText(sc, 0, rH / 2, 'x');
        var tsd = writeText(sc, args.b - scOna / 2, rH / 2, 'x');


        var path = new fabric.Path('M 0 ' + args.h + ' L ' + p + ' 0 L ' + s + ' 0 L ' + args.b + ' ' + args.h + ' z');
        path.set({
            stroke: args.fill,
            fill: '',
        });
        var group = new fabric.Group([path, tsa, tsb, tsc, tsd], {
            top: args.top,
            left: args.left
        });
        return group;

    };
    /*-------------------------------------------------------------------------------------------*/
    this.DrawNormalTrapezoid = function (args) {
        args.fontSize = args.fontSize || 14;
        var rA = args.a;
        var rB = args.b;
        var rH = args.h;
        args = scaleImage(args);
        var tsa = writeText(rA, args.a / 2, -30, 'x');
        var tsb = writeText(rB, args.b / 3 - 30, args.h + 10, 'x');
        var tsh = writeText(rH, -args.h / 2 - 5, args.h / 2, 'x');
        var BotHead = writeText(args.bottomText, -args.h / 2 + 5, args.h + 40, 'y');

        if (args.angle == 90) {
            var path = new fabric.Path('M 0 ' + args.h + ' L 0 0 L ' + args.a + ' 0 L ' + args.b + ' ' + args.h + ' z');
        } else {
            if (args.angle < 90) {
                var anglent1 = args.h / Math.tan(args.angle);
                var s1 = anglent1 + args.a;
                var path = new fabric.Path('M 0 ' + args.h + ' L ' + anglent1 + ' 0 L ' + s1 + ' 0 L ' + args.b + ' ' + args.h + ' z');
            } else {
                var anglent2 = args.h / Math.tan(180 - (args.angle));
                var s2 = anglent2 + args.b;
                var path = new fabric.Path('M ' + anglent2 + ' ' + args.h + ' L 0 0 L ' + args.a + ' 0 L ' + s2 + ' ' + args.h + ' z');
            }
        }
        path.set({
            stroke: args.fill,
            fill: '',
        });
        var group = new fabric.Group([path, BotHead, tsa, tsb, tsh], {
            top: args.top,
            left: args.left
        });
        return group;
    };

    /*--------------------------------------------------------------------------------------------*/

    this.DrawParalelloGram = function (args) {
        //;
        args.fontSize = args.fontSize || 14;
        var rW = args.width;
        var rH = args.height;
        args = scaleImage(args);

        var tsw = writeText(rW, args.width / 2, -30, 'x');
        var tsh = writeText(rH, -args.width / 2, args.height / 2 - 20, 'x');
        var BotHead = writeText(args.bottomText, -args.h / 2 + 5, args.h + 40, 'y');
        var BottomText = args.bottomText || "";
        var BotHead = new fabric.Text(BottomText.toString(), {
            fontSize: args.fontSize || 14,
            originY: 'center',
            top: args.height + 30,
            fill: 'blue',
            left: -args.height / 2 + 5
        });
        var anglent2 = args.height / Math.tan(180 - (200));
        var s2 = anglent2 + args.width;
        var path = new fabric.Path('M ' + anglent2 + ' ' + args.height + ' L 0 0 L ' + args.width + ' 0 L ' + s2 + ' ' + args.height + ' z');
        path.set({
            stroke: args.fill,
            fill: '',
        });
        var group = new fabric.Group([path, BotHead, tsw, tsh], {
            top: args.top,
            left: args.left
        });
        return group;

    };

    /*--------------------------------------------------------------------------------------------*/
    this.DrawLines = function (args) {
        //;
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        if (args.showDimensions) {
            var d = 75;
            var theta = args.angle / 57.2958;
            var lLength = 300;
            var line = new fabric.Line([0, 0, lLength, 0], { stroke: args.fill || 'black' });

            var line1 = new fabric.Line([0, d, lLength, d], { stroke: args.fill || 'black' });
            //; AB----CD--- EF---angles measures  //50,50--> theta  50+50/tan(theta) ,0
            var x1 = lLength / 2;
            var y1 = d + 50;
            //var d = y2 - y1;
            var x2 = x1 + d / Math.tan(theta);
            var y2 = -50;
            var slope = Math.tan(theta);
            var slantLine = new fabric.Line([x1, y1, x2, y2], { stroke: args.fill || 'black' });

            var ptx = new fabric.Text("A", { fontSize: args.fontSize || 14, originX: 'center', left: -15, top: -5 });
            var pty = new fabric.Text("B", { fontSize: args.fontSize || 14, originX: 'center', left: lLength + 5, top: -5 });

            var ptx1 = new fabric.Text("C", { fontSize: args.fontSize || 14, originX: 'center', left: -15, top: d - 5 });
            var pty1 = new fabric.Text("D", { fontSize: args.fontSize || 14, originX: 'center', left: lLength + 5, top: d - 5 });

            var ptx2 = new fabric.Text("E", { fontSize: args.fontSize || 14, originX: 'center', left: x2, top: y2 - 14 });
            var pty2 = new fabric.Text("F", { fontSize: args.fontSize || 14, originX: 'center', left: x1, top: y1 });
            ;
            //x1=0,y1=0,x2=llength,y2=0====> x3=x1,y3=y1, x4=x2, y4=y2
            //var xf = ((x1 * y2 - y1 * x2)(x3 - x4) - (x1 - x2)(x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
            var xf = -((x1 - x2) - (lLength) * (x1 * y2 - y1 * x2)) / ((-lLength) * (y1 - y2));

            //var xs = ((x1 * y2 - y1 * x2)(x3 - x4) - (x1 - x2)(x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
            //x1=0,y1=d,x2=llength,y2=d====> x3=x1,y3=y1, x4=x2, y4=y2
            var xs = ((-d * lLength) * (x1 - x2) - (-lLength) * (x1 * y2 - y1 * x2)) / ((-lLength) * (y1 - y2));
            if (args.angle >= 90) {
                theta = theta - 28 / 57.2958;
            }

            var angleText = new fabric.Text((args.angle).toString(), { fontSize: args.fontSize || 14, originX: 'center', top: -(d / 2) + 10, left: xf + 28 }); //lLength/2+slope });
            var angle = new fabric.Circle({
                radius: 20,
                //strokeWidth: 1,
                startAngle: Math.PI + (Math.PI - theta),
                endAngle: 2 * Math.PI,
                stroke: args.fill,
                fill: '',
                top: -21,
                left: xf - 26,
            });

            var angleText1 = new fabric.Text((args.angle).toString(), { fontSize: args.fontSize || 14, originX: 'center', top: (d / 2) + 10, left: xs + 28 });//x2 + d-4});
            var angle1 = new fabric.Circle({
                radius: 20,
                //strokeWidth: 1,
                startAngle: Math.PI + (Math.PI - theta),
                endAngle: 2 * Math.PI,
                stroke: args.fill,
                fill: '',
                top: d - 21,
                left: xs - 26, //x2 +d/2+9// (lLength / 2) - 15,
            });



            var group = new fabric.Group([line, line1, slantLine, ptx, pty, ptx1, pty1, ptx2, pty2, angle, angleText, angle1, angleText1], {
                left: args.left,
                top: args.top,
            });
            return group;
        } else {
            triangle = new fabric.Triangle({
                top: args.top,
                left: args.left,
                fill: args.fill,
                width: args.width,
                height: args.height
            });
            return triangle;
        }
    };

    /*--------------------------------------------------------------------------------------------*/
    this.DrawTwoLines = function (args) {
        //;
        args.fontSize = args.fontSize || 14;
        var rWidth = args.width;
        var rHeight = args.height;
        args = scaleImage(args);
        var d = 75;
        var theta = args.angle / 57.2958;
        var lLength = 200;
        //debugger;
        var line1 = new fabric.Line([0, d, lLength, d], { stroke: args.fill || 'black' });
        //; AB----CD--- EF---angles measures  //50,50--> theta  50+50/tan(theta) ,0
        var x1 = 0//lLength / 2;
        var y1 = d //+ 50;
        //var d = y2 - y1;
        var x2 = x1 + lLength / Math.tan(theta);
        var y2 = -50;

        var slantLine = new fabric.Line([x1, y1, x2, y2], { stroke: args.fill || 'black' });

        var ptx1 = new fabric.Text("A", { fontSize: args.fontSize || 14, originX: 'center', left: -15, top: d - 5 });
        var pty1 = new fabric.Text("B", { fontSize: args.fontSize || 14, originX: 'center', left: lLength + 15, top: d - 10 });

        var ptx2 = new fabric.Text("C", { fontSize: args.fontSize || 14, originX: 'center', left: x2 + 15, top: y2 - 14 });

        var A1 = new fabric.Triangle({
            fill: 'black',
            height: initOptions.arrow.triangle.height,
            width: initOptions.arrow.triangle.width,
            top: d - 2,
            left: lLength + 5,
            angle: 90
        });
        var A2 = new fabric.Triangle({
            fill: 'black',
            height: initOptions.arrow.triangle.height,
            width: initOptions.arrow.triangle.width,
            top: y2 + 1,
            left: x2 - 2,
            angle: -args.angle - 25
            //angle: (Math.PI - theta)
        });

        var angleText1 = new fabric.Text((args.angle).toString(), { fontSize: args.fontSize || 14, originX: 'center', top: y1 - 20, left: 28 });//x2 + d-4});
        var angle1 = new fabric.Circle({
            radius: 20,
            //strokeWidth: 1,
            startAngle: Math.PI + (Math.PI - theta),
            endAngle: 2 * Math.PI,
            stroke: args.fill || 'black',
            fill: '',
            top: y1 - 20,
            left: x1 - 15, //x2 +d/2+9// (lLength / 2) - 15,
        });

        var group = new fabric.Group([line1, slantLine, ptx1, pty1, ptx2, angle1, angleText1, A1, A2], {//[line, line1, slantLine, ptx, pty, ptx1, pty1, ptx2, pty2, angle, angleText, angle1, angleText1], {
            left: args.left,
            top: args.top,
        });
        return group;
    };
}
