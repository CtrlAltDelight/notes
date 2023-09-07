# Sockets

## What is a socket?

-   An OS mechanism for inter-process communication
    -   Allows two processes (applications) on the same or different machines to communicate with each other.
        -   Communication on the same machine is called _loopback_
        -   127.0.0.1

## Connection vs socket

### Connection

A 5-tuple

### Sockets

A 3-tuple (also called "half-connection")

-   Local socket: {local IP, local Port, Protocol}
-   Remote socket: {remote IP, remote Port, Protocol}
-   A local and remote socket together form a "connection"

## Creating a socket

A socket is just a file you can read and write to.

-   Use the `socket()` system call
-   returns a file descriptor

```c
int fd = socket(int family, int type, int protocol)
```

family - Specifies the protocol fammily that will be used for communication (AF_INET)
type - Specifies the communication semantics (SOCK_STREAM, SOCK_DGRAM)
protocol - Specifies transport protocol within the <family, type> tuple (TCP, UDP)

## Two key socket abstractions

-   SOCK_DGRAM (default protocol: UDP)
    -   "datagram" or "Packet" abstractions
    -   Unreliable communication
    -   connectionless
-   SOCK_STEAM (default protocol: TCP)
    -   "Byte stream" abstractions
    -   reliable
    -   connection oriented

### Datagram Abstraction

Imagine a pipe between two sockets

```c
send(socket, buf, buf_len)
// puts 1 packet inot the pipe with the contents of buf
// if buf_len+header > Max packet size... send fails, and returns an error!
```

```c
recv(socket, buf, buf_len)
// removes 1 packet from the pipe and stores in buff
// if buf_len< Recieved packet size... excess data discarded!
```

### Byte stream Abstraction

-   Stores bytes to send inside of a buffer
-   When there are $X$ bytes to send as a packet, sends those bytes out in a packet
    -   X can be any number, it's dictated by the TCP protocol
-   Reciever recieves bytes into a buffer and reads _at most_ $b$ bytes into the reading buffer

-   different amount of send() and recv() calls.

Imagine a pipe between two sockets

```c
send(socket, buf, buf_len)
// puts len bytes from buf into pipe
```

```c
recv(socket, buf, buf_len)
// removes at most len bytes from the pipe and stores in buf
```
