const {
    app,
    BrowserWindow,
    ipcMain,
    electron
} = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')

let win = null,
    winState = {};

/** 
 * @todo Add database integration
 */
let getWinState = () => {
    try {
        //get window state from database or local storage file
        //winState = 
    } catch (err) {
        // if file is corrupt rewrite
    }
}

/** 
 * @todo Add database integration
 */
let setWinState = () => {
    try {
        //set window state to database or local storage file
        //winState = 
    } catch (err) {
        // if err try again 
    }
}


let createWindow = () => {
    win = new BrowserWindow({
        title: "JES - Rebuild",
        x: winState.bounds && winState.bounds.x || 0,
        y: winState.bounds && winState.bounds.y || 0
    })

    //set to fullscreen
    if (winState.bounds && winState.bounds.width && winState.bounds.height) {
        win.setSize(winState.bounds.width, winState.bounds.height)
    } else {
        win.maximize();
        win.show();
    }
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)
app.on('activate', () => {
    if (win === null) createWindow()
})
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
})