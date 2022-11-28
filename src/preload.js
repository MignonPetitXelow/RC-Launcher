const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("app-close").addEventListener('click', () => {
        ipcRenderer.invoke('elecapp.quit');
    });

    document.getElementById("app-minimize").addEventListener('click', () => {
        ipcRenderer.invoke('elecapp.minimize')
    });
});