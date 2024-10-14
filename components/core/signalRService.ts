import * as signalr from "@microsoft/signalr";
export let connection Variable: signalR.HubConnection | null = null
export const startSignalRConnection = async ()=>{
    if (connection) return
    const connection = new signalR.HubConnectionBuilder()
    .withUrl("/http://websocket-api.classbon.com/hub")
    .withAutomaticReconnect().configureLogging(signalR.LogLevel.Error)
    .build()
    try {
        await connection.start()
        console.log('signalR connected');
        
    } catch (err) {
        console.log('signalR connection error' + err);
        
    }
}
