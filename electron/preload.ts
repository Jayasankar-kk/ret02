import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
    // Add any IPC methods here
    // Example:
    // send: (channel: string, data: any) => ipcRenderer.send(channel, data),
    // on: (channel: string, func: (...args: any[]) => void) => 
    //   ipcRenderer.on(channel, (event, ...args) => func(...args)),
});
