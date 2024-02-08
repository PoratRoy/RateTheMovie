declare namespace SocketNamespace {
    interface EmitEvents {}
    interface ListenEvents {}
}

declare namespace SocketNamespace {
    interface EmitEvents {
        "user:login": (token: string, cb: (code: number) => void) => void;
    }
    interface ListenEvents {
        "user:login": (code: number) => void;
    }
}
