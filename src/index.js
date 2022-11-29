const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path')
var win;

const createWindow = () =>
{
    win = new BrowserWindow({ 
        width: 1280,
        height: 700,
        title:'ReClient',
        icon:'src/assets/icons/rc_icon.png',
        webPreferences: 
        { 
            preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle:"hidden"
    });
    
    win.setMenu(null);
    win.resizable = false;

    win.loadFile("src/page/main.html");

    win.on('page-title-updated', (evt) => {evt.preventDefault();});
    win.webContents.openDevTools()
};

app.whenReady().then(() => { createWindow() });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() });


ipcMain.handle('elecapp.quit', () => {
    app.quit();
});

ipcMain.handle('elecapp.minimize', () => {
    win.isMinimized() ? win.restore() : win.minimize()
});

ipcMain.handle('mc.Start', () => {

});