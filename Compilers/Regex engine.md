Regular expression -> NFA -> DFA -> Lexer

Using a transition table, it is straightforward to write a program to recognize strings in regular language.

# Lookahead
- what if we want to match multiple tokens from a file?
	- multiple token definitions
- distinguish between *int a* and *inta*
- We need to look ahead to see if the next character belongs to the current token
	- if it does we can continue
	- if it doesn't the next character becomes part of the next token
# Breaking ties
- what if we can add the next character to the current token *or* end the current token?
- Always make a token as long as possible (or as short as possible - this is what python's regex engine does)
- If multiple possible tokens match, give them a priority order (e.g. prioritize tokens defined first)
## General approach
- Remember states (T) that can be final states
- Buffer the characters from then on
- If stuck in a non-final state, back up to T, restore buffered characters to stream
# antlr
- tool for building scanners and parsers
	- language for defining tokens, automatically converted into Java, C, Python, etc.
	- an example of compiling one high level language to another
 - tokens
	 - tokenName : regex1 | regex2 | ...
	 - define tokens in order of precedence
- character classes
	- fragment characterClassName : regex1 | regex2 | ...
	- Can use classes when defining tokenss
# Parsing
- A parser has 2 jobs
	- determine if program is *valid* and determine the *structure*