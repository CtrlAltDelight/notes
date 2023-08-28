== Scanner
- compiler starts be seeing only text
  - Not very easy to read
- Scanner converts this into *tokens*
  - One item for each word in the program
  if(a < 4) { b = 5 }
if->(->ID(a)->OP(<)->LIT(4)->)->{->ID(b)->=->LIT(5)->}

== Parser
- Converts string of tokens into a *parse tree* or *abstract syntax tree*
- Captures syntactic structure of code

== syntax vs semantics
/ syntax: "Grammatical" structure of language
  - What is a valid sentence
  - which symbols and ordering
- Correct syntax may mean nothing

/ semantics: meaning of language
  - What do the symbols mean
/ static semantics: properties of a program
  - ex: strongly typed
/ Dynamic semantics: how does a program execute?
  - documentaiton
  - operational or denotational semantics
- For many languages, "the compiler is the specification"

== Intermediate representation (IR)
- A low level representation of the program
- not machine specification

== Optimizer
- High level
  - loop interchange, parallelization
  - Operates at level of AST, or even source code
- Scalar optimizations
  - dead code elimination, common sub-expression elimination
  - Operates on IR level
- Peephole optimizations
  - Strenght reduction, constant folding
  - Operates on small sequences of instructions

#show link: underline
#link("https://gcc.godbolt.org/z/Wrfeo18of")[Optimization example link]

== Overall structure of a compiler
Use *regular expressions* to define tokens. Can use scanner generators like *flex* or *ANTLR*.

Define language using *context free grammar*. Can then use parser generators like *bison* or *ANTLR*.

== Front end vs back end
scanner, parser, semantic actions, optimizations called the front end
IR-level optimizations and code generation (instruction selection, scheduling, register allocation) called back-end


== scanner
=== Why do we need them?
- identify the "words" of a program
  - variable names
  - keywords
  - operators
- Define what the words are and use *regular expressions* to find them.

== Regular set
An empty string, singleton, union of two regular sets, concentration of two regular sets, empty string is a regular set

[[Regex]]