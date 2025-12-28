"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};

export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
  socketEnabled: boolean;
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
  socketEnabled: false,
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);
  const socketEnabled = Boolean(process.env.NEXT_PUBLIC_WS_URL);

  useEffect(() => {
    // ❗ ENV yoksa socket’e hiç dokunma
    if (!socketEnabled) {
      console.warn("Socket disabled: NEXT_PUBLIC_WS_URL not set");
      return;
    }

    const username =
      localStorage.getItem("username") ||
      generateRandomCursor().name;

    const s = io(process.env.NEXT_PUBLIC_WS_URL!, {
      transports: ["websocket", "polling"],
      query: { username },
      autoConnect: true,
    });

    setSocket(s);

    s.on("connect", () => {
      console.log("Socket connected:", s.id);
    });

    s.on("msgs-receive-init", (msgs: Message[]) => {
      setMsgs(msgs);
    });

    s.on("msg-receive", (msg: Message) => {
      setMsgs((prev) => [...prev, msg]);
    });

    s.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    return () => {
      s.disconnect();
      setSocket(null);
    };
  }, [socketEnabled]);

  return (
    <SocketContext.Provider
      value={{ socket, users, setUsers, msgs, socketEnabled }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
