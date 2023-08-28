# DFA reduction
*Theorem:* There is a unique optimal DFA
- DFA built from NFA is not necessarily optimal
	- May contain more states than is necessary

- Merge equivalent states
	- Two states are equivalent if they have the same transitions to the same states
- Basic idea of optimization algorithm
	- Start with two big blocks, one representing all the (reachable) final states, the other representing all other (reachable) states
	 - Successively partition those blocks if the internal states are mutually equivalent