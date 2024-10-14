import * as signalR from "@microsoft/signalr";
export let connection: signalR.HubConnection | null = null;
export const startSignalRConnection = async () => {
  console.log(" i am here");

  if (connection) return;
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://websocket-api.classbon.com/hub")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Error)
    .build();

  try {
    await connection.start();
    console.log("SignalR connection started");
  } catch (err) {
    console.error("SignalR connection failed" + err);
  }
};
