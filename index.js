const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var filepath = 'file://' + __dirname + '/';

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(filepath + 'src/html/index.html');

    mainWindow.on('close', function(){
        mainWindow = null;
    });
};

app.on('ready', createWindow);
