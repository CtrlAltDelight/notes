## Finite state machines 
- can be used to represent a [[Regex]] expression
	- Often represented by a Mealy machine diagram
		 - input moves you along arrows
		 - current state in middle
		- If you are at the end state it is a valid regex
		- Can loop in on itself for + and *
	- Kind of like ECE 337.

# Deterministic vs non-deterministic
Deterministic if:
	- at each stem there is only one possible transition to take on a given character
	- no choices to be made
Non-Deterministic if:
	- There may be more than one transition to take on a given character
	 - Can also have lambda-transitions -- transitions that consume no characters
		 - Optional transitions. Can take a lambda transition for free

## Running a non-deterministic automaton
1. Take every possible path through an NFA
2. Do parallel executaion of NFA (Kind of like BFS)
3. every time there is a choice, follow each choice separately
4. Track each "pointer" simultaneously
	1. If a "pointer" gets stuck stop tracking
	2. If any pointer reaches an accept state at the end of input, accept
	3. (Accept largest amount of input)

[[Building an automaton]]