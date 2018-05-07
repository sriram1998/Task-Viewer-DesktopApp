'use strict';
var ipcRenderer=require('electron').ipcRenderer;


const psList=require('ps-list');


var closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function (e) {
    ipcRenderer.send('close-tasks-window');
});



var div=document.getElementById("tasks-screen");
var i=0;
psList().then(data => {
    for(i=0;i<300;i++)
        if(data[i].memory>4)
            div.innerHTML += data[i].name + " ";
});
