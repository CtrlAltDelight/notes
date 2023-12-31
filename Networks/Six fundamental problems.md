# Naming and addressing
- Provide identifiers to every node in the network
- Name: which node it is
	- www.google.com
- Address: where node it located
	- IP address 172.21.4.110
 - Why do we need a name
	 - Address changes, name does not!
	  - Convenient for users to remember names
- Networks route data using addresses, not names. For scalability.
# Destination discovery
- Mapping URLs to addresses with DNS
# routing
- Finding a path between source and destination host with a routing protocol
	- Distributed algorithm that runs at each router
		- each router has a partial view of network
	 - compute paths to all destinations in the network graph
	 - store path information in a routing table data structure
		  - Keeps track of which destination should go to which router
# forwarding
- When a packet arrives, move packet from input port to preferred output port
- A *port* is an interface through which a device connects to network
## Router forwarding pipeline
### step 1: Processing and queueing when a packet arrives
- look at it's destination
- find output port through packet will be sent
- send packet to output port and store it in corresponding queue
### step 2: scheduling when an output port is free
- pick a packet from the corresponding output queue in some order (e.g.) FIFO
- send the packet over this output port

# reliability
- Ensure every packet will reach it's destination
	- packets can be dropped, queue can overflow, router can crash, corruption, etc.
	- After sending data, wait for ACK from destination
	- If ACK is not recieved, re-send the data
	- Repeat until ACK is recieved (or timeout)
# application multiplexing
- When an app wants to access the network, it opens a *socket* which is associated with a *port* (a port is a 16 bit number)
*socket*: and OS mechanism 
## Host Network Stack
- Program running in the OS
- Responsible for taking data and sending in network (creates packets, headers, ACKs, etc.)
- and getting data from the network and sending it to the right application

## Packet header
- Must have these things:
	- destination address
	- destination port
	- where it's coming from (source address)
	- source port
Unix method of do one thing and do it right. All systems come together to do networking.