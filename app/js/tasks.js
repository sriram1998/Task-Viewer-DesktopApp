'use strict';
var ipcRenderer=require('electron').ipcRenderer;


const psList=require('ps-list');


var closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function (e) {
    ipcRenderer.send('close-tasks-window');
});



var div=document.getElementById("tasks-screen");
var i=0;
var j=0;
var tasks=[];
var mem=[];
var cpu=[];
var table=document.getElementById("tm");

psList().then(data => {
	console.log(data[0].name);
    for(i=0;i<300;i++)

        { 
          if(data[i].memory>4);
          {console.log(data[i].name);

          var row=table.insertRow(0);
		  var cell1=row.insertCell(0);
		  var cell2=row.insertCell(1);
		  var cell3=row.insertCell(2);
		  cell1.innerHTML=data[i].name;
		  cell2.innerHTML=data[i].memory;
		  cell3.innerHTML=data[i].cpu;}

        //tasks[i]=data[i].name;
          //mem[i]=data[i].memory;
          //cpu[i]=data[i].cpu;
      }
      
});
