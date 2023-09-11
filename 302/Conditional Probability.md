# Conditional Probability

### Definition

For two events $A,B\in F$, if $P(B)\gt 0$, then $P(A|B)=\frac{P(A\cap B)}{P(B)}$ is the conditional probability of A, given B.

This generalizes to all experiments, all $A,B$ with $P(B)\gt0$

-   Must prove that $P(B)\ne0$ before using this definition.

## Why is this definition used?

### Example: Roll a d6

Let $S=\{1,2,3,4,5,6\}$

Let $A=\{\text{outcome is even}\}=\{2,4,6\}$

Let $B=\{\text{outcome is > 3}\}=\{4,5,6\}$

$P(A)=1/2, P(B)= 1/2$

Intuitively, what is the probability of A given that the outcome is in B?

$P(A|B)=\frac{2\text{ (num outcomes in A and B)}}{3\text{ (num outcomes in B)}}$

## Motivating example

A blood test for a certain disease.

### Three important questions

Let $S=\{(0,p),(0,n),(1,p),(1,n)\}$

-   0 ~ no disease
-   1 ~ disease
-   p/n ~ tests positive/negative

Let $A=\{\text{person has disease}\}=\{(1,p),(1,n)\}$

Let $B=\{\text{person tests positive}\}=\{(0,p),(1,p)\}$

What is the Probability that:

1. a person both has the disease and tests positive?
2. a person who tests positive has the disease?
3. a person who has the disease tests positive?

Q2 and Q3 will be defined as conditional probabilities

-   Q2: $P(A|B)$
-   Q3: $P(B|A)$

## Translating English to math

-   Look for the words "what is the probability that..."
    -   The "..." is the event A in $P(A|B)$ or $P(A)$
-   To identify an event B to be conditioned on, look for:
    -   "assuming that ..."
    -   "given that ..."
    -   "if ..."
    -   "conditioned on the event ..."
        -   The "..." in these cases are events $B$ in $P(A|B)$

### Note

That if $P(.)$ is a valid probability measure (aka satisfies the 4 axioms), then $P(.|B)$ is a valid probability measure for any $B$ with $P(B)\gt 0$

$P(.)$: (the dot means "something")
