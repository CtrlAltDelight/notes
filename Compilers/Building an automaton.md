Building a non-deterministic automaton
	- We can use simple automatons as parts to build larger automaton stringed together by free (lambda) transitions

# Problems with non-deterministic
- Unpredictable running time
	- What if you make the wrong choice and have to backtrack? (Causes bugs)
 - You can generate a deterministic finite automaton from a non-deterministic one

# Converting nfas to dfas
- no choices - never need to "split" a pointer