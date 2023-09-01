# Separation of concerns modularity

- Internet is a hierarchical network of networks
    - bigger networks at high level (AT&T)
    - smaller networks are lower (Purdue, IU,…)

## layering principle

Each layer only communicates with next layer and previous layer

At each layer, a part of the packet header is added or removed/changed or just viewed. 


- Application (L5):      Both hosts use http to provide service to users/apps (http, smtp, ssh)
    - read/write data from applications, encrypt/decrypt, etc.
- Transport   (L4):      Reliable end to end data delivery (udp, tcp)
    - reliability, application multiplexing
- Network     (L3):      Data link Best effort data delivery within a local area network L2 (ip, igmp, icmp)
    - naming, addressing, destination discovery, routing, forwarding
- Data Link   (L2):      Best effort data delivery between networks (ethernet, wifi, 5g)
    - naming, addressing, destination discovery, routing, forwarding
- Physical    (L1):      Bits to/from wire L1 (bits on a wire)
    - signal processing, analog-to-digital converstions, etc.

- Each layer only interfaces with the layers next to it. Very modular.
- Lower layer *serves* the immediate upper layer

# how should tasks be implemented

## end to end principle
Where different tasks or layers should be implemented.

- Hosts should have L5-L1 implemented
- Routers should have L3-L1 implemented
- Reliability cannot be implemented at router level. Not all apps require reliability so it is too much overhead. 

Basically routers only change/view L3-L1 of the packet header and don't care about L5-L4.

Key takeaway: modularity and abstraction is how things get done. 

