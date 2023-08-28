# Bandwidth
Maximum number of bits that can be send through a network per unit time
- A measure of how much data one can send through network
- Standard unit: bits per second (bps)
- good network has high bandwidth
- Property of the physical network components
## Throughput
- The measure of *bandwidth utilization* of a network
- Also measured in bps
- 0 <= network throughput <= network bandwidth
- Function of the mechanisms used to communicate over the physical network
- Usually less than bandwidth due to inefficiencies of communication mechanisms
# Delay/Latency
Total time between first bit leaving point A and last bit reaching point B
- A measure of how fast one can send data through a network
- good network has low delay
- Can only send data 1 bit at a time -  think I2C
### Models
store-and-forward (default model)
wait for entire packet to arrive before processing

cut through model
Start processing as soon as destination address is received
## Types of delay (go back to this later)
- Propogation Delay
	- Link length/link propagation speed
	 - Time it takes for a bit to leave the host and arrive at router
	- experienced at every link
- Transmission Delay
	- experienced at every link
	 - Wait time between sending a bit
- Queueing Delay
	- Depends on traffic
- PRocessing Delay
	- Depends on hardware, nature of processing, etc.
## Total End to end delay
Assuming store and forward model
(M hops & 1 packet) Total delay = M * (TD+PD) + (M-1) * (QD+PrD)
(1 hop & N packets) Total delay = 1 * (TD + PD) + (N-1) * TD
(M hops & N packets) Total delay = M * (TD + PD) + (M-1) * (QD + PrD) + (N-1) * TD

## When can queuing happen at router
- When packet arrival rate exceeds packet drain rate
$TD_{AB}(P2) < TD_{BC}(P1)$

# Six Fundamental problems
1. Naming and addressing
- Provide identifiers to every node in the network
- Name: which node it is
	- www.google.com
- Address: where node it located
	- IP address 172.21.4.110
 - Why do we need a name
	 - Address changes, name does not!
	  - Convenient for users to remember names
- Networks route data using addresses, not names. For scalability.
2. Destination discovery
- Mapping URLs to addresses with DNS
3. routing
- Finding a path between source and destination host with a routing protocol
	- Distributed algorithm that runs at each router
	- each router has a partial view of network
1. forwarding
-
5. reliability
-
6. application multiplexing
-