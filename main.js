'use strict';
const electron = require('electron');

const app = electron.app;

const psList=require('ps-list');
var ipcMain=require('electron').ipcMain;





const BrowserWindow = electron.BrowserWindow;


const path = require('path');
const url = require('url');


let mainWindow;
var taskWindow=null;



app.on('ready', function() {
    

    mainWindow = new BrowserWindow({
        frame: false,
        height: 600,
        resizable: false,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    
});



ipcMain.on('close-main-window', function () {
    app.quit();
});

ipcMain.on('open-tasks-window', function () {
    if (taskWindow) {
        return;
    }

    taskWindow = new BrowserWindow({
        frame: false,
        height: 600,
        resizable: false,
        width: 600
    });

    taskWindow.loadURL('file://' + __dirname + '/app/settings.html');

    taskWindow.on('closed', function () {
        taskWindow = null;
    });
});

ipcMain.on('close-tasks-window', function () {
    if (taskWindow) {
        taskWindow.close();
    }
});


