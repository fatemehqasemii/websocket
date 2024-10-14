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

  connection.on("ReceiveProgress", (message: string) => {
    try {
      console.log(message);
    } catch (error) {
      console.error("error parsing data"), error;
    }
  });
};

export const startProgress = async () => {
  if (connection?.state === signalR.HubConnectionState.Connected) {
    try {
      await connection.invoke("StartLongRunningTask");
    } catch (error) {
      console.log("signalR send message error" + error);
    }
  }
};
