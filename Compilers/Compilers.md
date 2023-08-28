## What are compilers?
<dt>Compiler</dt>
<dd>A program that translates from a high-level language to low-level assembly language that can be executed by hardware</dd>
- A program that translates or transforms one representation of a program to another.

- There are many different approaches to translating code. Optimization is key.

## Why use compilers
- Provide portability
  - You do not have to rewrite programs to support new hardware
  - Just write a new compiler and keep the source code the same
  - Enable high performance and programming productivity

## Types of compilers
1. High level language -> Assembly
  / Assembler: machine-specific translator that converts assembly into machine code
  - Usually one to one except for program locations and variable names.
2. High level language -> Machine-independent code
  - compiles down to MI (machine independent bytecode) code. Then an interpreter processes and executes this MI code "on the fly"
  - Compiler and interpreter can be separate like java
    - Or a single program (just called "interpreter") like python
3. Machine-independent code -> Assembly
4. High level language -> How level language

5. Low level language -> Low level language
  - Not very common
  - Modernize legacy machine code
  - Compatibility and performance
