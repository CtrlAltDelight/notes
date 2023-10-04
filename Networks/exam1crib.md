# Midterm 1 study guide

## Packet vs Circuit switching

-   **Circuit Switching**:

    -   Reserving a circuit through the network
        -   Classic:
            Reserves ALL resources in path
        -   Virtual:
            Reserves a subset of resources in path

-   **Packet Switching**:
    On-demand by sending packets and delivering on-the-fly.

## Network performance

-   **Bandwidth**: Max number of bits that can be sent through a network per second (bps)
-   **Throughput**: Max number of bits that are being sent through a network per second (bps)

-   **Delay or Latency**: time between first bit leaving point A and last bit reaching point B

-   **Propagation Delay (PD)**: The time it takes for the first bit to go from A to B
    -   $\frac{\text{link length}}{\text{link propagation speed}}$
-   **Transmission Delay (TD)**: The time it takes for all the pits to send from A.
    -   $\frac{\text{packet size}}{\text{link bandwidth}}$
-   **Processing Delay (PrD)**: Once all packets reach destination
    -   depends on hardware speed, etc.
-   **Queueing Delay (QD)**: Time it takes to send packets after they are processed.

    -   depends upon the traffic

-   **Total End-to-End delay**:

    -   $\text{total delay for N packets over M hops}=M*(TD+PD)+(M-1)*(QD+PrD)+(N-1)*TD$

## Internet Architecture

### Six Fundamental Problems

1. Naming and addressing
    - Name: URL
    - Address: IP
2. Destination discovery
    - Maps names to ip: DNS
3. Routing
    - Routing protocol
4. Forwarding
    - Moves packet from input port to output port
5. Reliability
    - Ensure every packet reaches destination
6. Application multiplexing
    - Opens a socket which is associated with a port.

-   **Socket**: OS mechanism connect app to network stack.
-   **Port**: A (16-bit) number that specifies a particular socket.

-   **Packet Headers**:
    -   Destination address
    -   Destination port
    -   Source Address
    -   Source Port

#### Where should mechanisms be implemented

-   Network (Routers): routing, forwarding
-   Host Network stack: application multiplexing, reliability
-   Applications: data generation and handling

### Layering Principle

-   Application (L5)
-   Transport (L4)
-   Network (L3)
-   Data link (L2)
-   Physical (L1)

### End-to-End Principle

Layers at hosts: L5-L1
Layers at routers: L3-L1

## Socket Programming

-   **Connection**: A 5-tuple {local IP, remote IP, local Port, remote Port, Protocol}
-   **Socket**: A 3-tuple {local IP, local Port, Protocol}
    -   A socket is a regular file to which you can read and write.
    -   Use the `socket()` system call to return a file descriptor (fd).
    -   `int fd = socket(int family, int type, int protocol)`
        -   Family: specifies the protocol family
        -   Type: Specifies byte stream or datagram.
        -   Protocol: Specifies TCP or UDP

### UDP

-   `SOCK_DGRAM`
-   Datagram abstraction
-   unreliable and connectionless
-   1-to-1 `send` and `recv` calls
-   reads and sends on packet level

### TCP

-   `SOCK_STREAM`
-   Byte stream abstraction
-   Reliable communication, connection oriented.
-   No correlation between `send` and `recv` calls
-   reads and sends on byte level

### Socket System calls

-   socket() — create a socket
-   bind() — bind socket to an address <IP, port>
-   connect() — initiate connection to a server
-   listen() — listen for incoming client connections (and queue them if needed)
-   accept() — accept incoming client connections from the listen queue
-   send() / recv() — send/receive data between connection-oriented sockets
-   sendto() / recvfrom() — send/receive data between connectionless sockets
-   close() — close a socket
-   gethostbyname() — returns IP of host given its name (invokes DNS)

### Blocking sockets

By default, socket calls will block if task cannot be performed immediately.

**Solutions**

1. Multi-processing with `fork()`
2. Set non-blocking sockets with `fcntl()` or `SOCK_NONBLOCK`. non-blocking will error on failure.
3. use `select()` to monitor and return 'ready' sockets with optional timeout

### Endianness

-   `htons(16-bit-data)` `htonl(32-bit-data)` before sending
-   `ntohs(16-bit-data)` `ntohl(32-bit-data)` before receiving

## Data link layer

### Port

-   Can be emulated (virtual) or physical (ethernet)

### MAC Address

-   Each MAC in network must be unique
-   Use `ifconfig` (`ipconfig` windows) to view interfaces on computer

### Ethernet Packet headings

1. Preamble: Alternating 1's and 0's to synchronize clock - 7 bytes
2. Start frame delimiter - Indicates start of ethernet frame - 1 byte 10101011
3. Destination MAC address - 6 bytes
4. Source MAC address - 6 bytes
5. Ethernet type: specifies the protocol, e.g. IP - 2 bytes
6. Payload
7. Frame check sequence: used for error detection and correction "cyclic redundancy check"
8. Inter packet gap - 12 bytes all 0's

### Broadcast

-   Send to every host on the network (except sender)
-   destination MAC is ff:ff:ff:ff:ff:ff (reserved for broadcast)

### Address Resolution Protocol (ARP)

-   Gets the MAC address of a destination host within the smae local network as source host
-   Maps IP to MAC
-   each host has an ARP table (`arp -a` to view)
-   If MAC of destination is unknown, broadcast an ARP request
-   Destination should send an ARP reply back to sender

### Collision detection

-   FDMA
    -   divide medium into frequencies
-   TDMA
    -   Divide time into slots
-   Random access

    -   Hosts can send if medium idle, wait if busy
    -   needs collision detection and recovery

-   Sender sends a "JAM" signal if collision detected
-   Everyone waits a random time and sends again.
    -   After $k$ collissions, wait time is from $\{0,...,2^k-1\}$
    -   K resets to 0 after success
    -   Does not scale to large number of hosts and higher bandwidth

### Forwarding devices

#### Hub

-   Broadcasts frame received

### Bridge

-   only 2 ports
    -   Essentially the same a switch other than only having 2 ports

### Switch

-   Multi bridge port
-   Maintains a "forwarding table" to keep track of which MAC is at which port.
-   If it doesn't exist in forwarding table, broadcast.

### Spanning Tree Protocol (STP)

-   Eliminates loop in network graph
-   The root switch will have the lowest MAC address.
-   Each switch, $X$, has a **view**
    -   $(R, cost(X,R), X, H)$
        -   R is what X thinks the root is
        -   cost(X,R) is the cost from X to R
        -   H is the nex hop neighbor via which X reaches R
    -   By default each switch has the view (X, 0, X, X)
    -   X broadcasts new view if it changes
-   Try to find the lowest cost path to the root, tie break with lower mac address.
