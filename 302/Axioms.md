# 302 Sept 6th

## Things you may see on the homework

### define A-B:

$A-B=A\cup B^c$ (<- double check this she went fast)

note that: $P(A-B)\ne P(A)-P(B)$

might see A+B instead of $A \cap B$

Do not confuse set operations with arithmetic operations! Do not write $P(A) \cup P(B)$, for example.

## Properties of P

Some properties of $P$ that follow from the axioms from last lecture:

1. $P(\phi) = 0$ for any $(S,F,P)$ (<- Probability space)

Proof: Write $\phi =\phi \cap S$, $\phi$ and $S$ are disjoint. So by axiom 3. $P(\phi \cup S)=P(\phi)+P(S)$. But $\phi \cup S=S$, so $P(S)=P(\phi)+P(S)$. $1=P(\phi)+1 \implies P(\phi)=0$ (Axiom 2).

Note: It is **NOT** true in general that $P(A)=0 \implies A=\phi$

$P(A)=0 \not \Rightarrow A=\phi$

$A=\phi$ ABSOLUTELY IMPOSSIBLE e.g.

$A=0$ Probablity is 0 (Extremely unlikely to happen) e.g. You getting a girlfriend.

2. $P(A^C)=1-P(A) \forall A \in F$ show that $P(A)+P(A^C)=1

Since $A\cap A^c=\phi$, $P(A\cup A^c)=P(A)+P(A^c)$ (axiom 3)

But $A\cup A^c=S$, so $1=P(S)=P(A)+P(A^c)$, which means $P(A^c)=1-P(A)$

3. For any $A,B \in F$, $P(A\cup B)=P(A)+P(B)-P(A\cap B)$
