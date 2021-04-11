import React, { createContext, FunctionComponent, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext<SocketIOClient.Socket | null>(null);

const SocketProvider: FunctionComponent<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<SocketIOClient.Socket | null>(null);

  const options: SocketIOClient.ConnectOpts = useMemo(() => ({}), []);

  useEffect(() => {
    try {
      const socketConnection = io(process.env.BASE_URL || '127.0.0.1', options);
      setConnection(socketConnection);
    } catch (err) {
      console.log(err);
    }
  }, [options]);

  return <SocketContext.Provider value={connection}>{children}</SocketContext.Provider>;
};

export const useWebsocket = (): SocketIOClient.Socket | null => {
  const ctx = useContext(SocketContext);
  if (ctx === undefined) {
    throw new Error('useWebsocket can only be used inside WebsocketContext');
  }
  return ctx;
};

export default SocketProvider;
