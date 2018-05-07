'use strict';
var ipcRenderer=require('electron').ipcRenderer;


const psList=require('ps-list');




var path = require('path');


var closeEl = document.querySelector('.close');
var tasksEl = document.querySelector('.showtask');



closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-main-window');
});

tasksEl.addEventListener('click', function () {
    ipcRenderer.send('open-tasks-window');
});


