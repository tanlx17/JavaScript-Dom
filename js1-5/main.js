console.log('main.js loaded');

$(document).ready(function () {
    'use strict';
    console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var c = Shape.Circle(200, 200, 50);
    c.fillColer = 'green';
    paper.view.draw();
});