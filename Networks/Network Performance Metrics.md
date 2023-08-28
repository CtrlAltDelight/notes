# Bandwidth
<dd>Maximum number of bits that can be send through a network per unit time</dd>
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
<dd>Total time between first bit leaving point A and last bit reaching point B</dd>
- A measure of how fast one can send data through a network
- good network has low delay
- Can only send data 1 bit at a time
	-  think I2C
### Models
<dt>store-and-forward (default model)</dt>
<dd>wait for entire packet to arrive before processing</dd>

<dt>cut through model</dt>
<dd>Start processing as soon as destination address is received</dd>
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