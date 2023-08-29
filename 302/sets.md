# Set theory for probability

## Set
An unordered collection of objects, called elements

## Notation
A set is denoted using {} e.g. {1,2,3} contains the 3 elements 1, 2, and 3

- Because sets are unordered, {3,1,2} == {1,2,3}
- Also, {1,2,3} != (1,2,3)

$\omega \in A$ means the element $\omega$ is in set $A$. $\omega \notin A$ means $\omega$ is not in A.

### Two ways to specify a set
1. Comma separated list in {}.
    - $A = \{H,T\}$
    - $A = \{0,1,2\}$
    - $A = \{x_1, ..., x_n\}$
        - n elements for some n
    - $A = \{x_1, x_2, ...\}$
        - infinite number of elements
2. Rule for membership
    - e.g. $A = \{\omega \in \Z =: 1 \le \omega \le \zeta\}$
    - Colon is read as "such that"
    - $\Z$ means all integers
- Special notation intervals in $\R$
    - e.g. $A=(a,b)=\{x\in\R:a\lt x\lt b$
    - Might write this as $(a,b)\sub\R$ to distinguish from ordered pair $(a,b)$

## Properties
Sets $A$ and $B$ are <ins>equal</ins> if they contain exactly the same elements

If every $\omega\in A$ is also in $B$, then $A$ is a <ins>subset</ins> of $B$.

- $A\sub B$
    - This includes the case $A=B$ in this class

One way to show that sets $A$ and $B$ are equal:
    $A=B \iff A\sub B$ and $B\sub A$

### Empty set
The set with no elements is called the <ins>empty set</ins>, or the <ins>null set</ins>, denoted by $\phi$ or {}

common mistake (**don't do this**): $\{\phi\}$

## Universal Set
The set containing all elements of interest, denoted $\mathcal{S}$ (cursive S)

For probabilits in latexy, $\mathcal{S}$ will be the set of all possible outcomes

## Set Operations
Given sets $A,B\in \mathcal{S}$

Define the <ins>intersection</ins> of $A,B$ is $A \cap B = \{ \omega \in \mathcal{S}\}$ Represent the event that A and B both occur in a random experiment.

The union f A and B is $A \cup B=\{\omega\in\mathcal{S}:\omega\in A$ or $\omega\in B$ or both $\}$

### compliment
Complement of A is $A^c=\{\omega\in\ S:\omega\ A$ also denoted $\bar{A}$

if sets A and B have no elements in Common, they are disjoint, so $A\cap B = \phi$

# Venn Diagrams
A graphical representation of the universal set
- Useful if you are stuck on a problem

Union is like the entire venn diagram. Intersection is like only the middle of the venn diagram
![img](https://i.stack.imgur.com/kIlCI.png)

# Set algebra (How to find if two sets are equal)
Operations applied to sets and tell us when two sets are equal.

### Examples
- Union and intersection are commutative and associative, so: 

$A\cap B=B\cap A$
- $\cap$ is distributive over $\cup$ 

$A\cap (B\cup C)=(A\cup B)\cap(A\cup C)$
ons of 
- DeMorgan's laws (break the line, change the sign)

$(A\cap B)^c=A^c\cup B^c$ 

$(A\cup B)^c=A^c\cap B^c$

# Three types of set
- A set $A$ is **finite** if it contains a finite number of elements
- A set $A$ is **countably infinite** if its elements can be counted, or listed in a way that includes all the elements, but the set is not finite. Can write as $A=\{x_1, x_2, ...\}$
- A set $A$ is **uncountable** if its elements are not finite or countibly infinite. Such a set cannot be writted as a set.
In this class, an uncountable set will be either $\R$ or an interval in $\R$.

# Collections of sets
- Finite collection of sets can be written as $A_1,...,A_n; n \ge 1$ where each $A_i \sub S$
- Countibly infinite collection of sets can be written as $A_1,A_2,...$ Where each $A_i \sub S$

Union of an indexed collection of sets is either $\cap_{i=1}^n A_i = \{\omega \in S$: $\omega$ is in at least one $A_i, i=1,...,n\}$
The intersection of an indexed collection of sets is either:

$\cap_{i=1}^n A_i = \{\omega \in S: \omega$ is in every $A_1,...A_n\}$

$\cap_{i=1}^{inf} A_i = \{\omega \in S: \omega$ is in every $A_1,...A_n\}$

