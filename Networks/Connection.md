# Connection Sockets

- connectionless: no explicit connection needs to be set up between sending and receiving hosts before sending data
- Connection-oriented: explicit connection set up before sending data

## Connectionless

- Server
  - Creates a socket
  - bind to a particular address & port number
  - ready to send/receive
- Client
  - Creates a socket
  - ready to send/receive

## Connection-oriented

- Server
  - Creates a socket
  - bind to a particular address & port number
  - listen for incoming connections (places connections in a queue)
  - accepts the first connection in the queue (will wait for a connection if queue is empty)
  - ready to send/receive
- Client
  - Creates a socket
  - Connects to server
  - ready to send/receive

## system calls

Note: details in man pages
`socket()` create a socket
`bind()` bind socket to an address <IP, port>
`connect()`
`listen()`
`accept()`
`send()/recv()`
`sendto()/recvfrom()`
`close()`
`gethostbyname()` - returns IP of host given its name (DNS)

## Blocking sockets

If a task cannot be performed immediately, it waits...
send()/sendto() - if there is not enough space in the send buffer
recv()/recvfrom() - block when receive buffer is empty
accept() - blocks when there are no incoming connections (listen queue is empty)

## multi processing using fork()

Creates a copy of itself (child process) that runs in parallel with the parent process.
`man fork`

### RETURN VALUES

Upon successful completion, fork() returns a value of 0 to the child process and returns the process ID of the child process to the parent process. Otherwise, a value of -1 is
returned to the parent process, no child process is created, and the global variable errno is set to indicate the error.

## non-blocking socket

a socket can be set to non blocking

- all function calls will return immediately, either success or error.
  = use fcntl() or | NON_BLOCKING on linux

## select() with timeout

- select() function call has a parameter called "timeout"
- if timeout is set to NULL
  - select() will block until some file descriptor becomes ready
- ## if timeout is numeric

## Endianness

0x112233

- Big endian
  0x11 0x22 0x33
- Little endian
  0x33 0x22 0x11

  x86 machines use LE, but network routers use BE

  So, when sending a multi-byte data to network use,

  - htons(data) - host to network short - converts to network format

  ntohs(data) - converts back to host format

## Raw socket

if you want to create your own L4 or L3 headers, you need to create a raw socket (SOCK_RAW)
