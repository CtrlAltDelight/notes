# Probability space

How do we model a random experiment mathematically?

We use 3 components:

## 1. The sample space ($S$)

-   each time the experiment is run, exactly one outcome occurs.
-   Examples
    -   a binary source generates a bit, then $S=\{0,1\}$ (finite $S$)
    -   Count the number of photons hitting a detector, then $S=\{0,1,2,...\}$ (countibly infinite $S$)
    -   Measure the temperature in a room. Let $S=[Tmin,Tmax]$ (uncountable $S$)

## 2. The event space ($F$)

-   A collection of subsets of $S$ to which probabilities will be assigned
-   each event is a subset of $S$
-   Each time the experiment is run, each event either occurs or does not occur
    -   Event _occurs_ if outcome that occurred is in the event
    -   For this class, you can assume every subset of $S$ is an event. (If $S = \R$ this is not stricly true, but we will not encounter that.
-   Every subset of $S$ is an event

### Examples

1. Let $S=\{0,1\}$ Then let $F=\{\phi,\{0\},\{1\}, S\}$
1. Let $S=\R$ Then
    - Cannot write $F$ since it's infinitely many
    - Can say $F$ will contain
        - all $(a,b)\sub \R$
        - all $[a,b]\sub \R$
        - all $\{a\}\sub \R$
        - all $(a,b)\cup (c,d) \sub \R$

### Outcome or event?

Let $S=\{1,2,3\}$

-   $1$ (outcome)
-   $\{1\}$ (event)
-   $S$ (event)
-   $\{1,2\}$ (event)
-   $\{1\}\cup\{2\}$ (event)

Let $S=[0,1]$

-   $(0,1)$ event
-   $\frac{1}{2}$ outcome
-   $\{(0,1)\}$ (neither)

## 3. The probability measure ($P$)

The probability measure $P$ is a set function from $F$ to $\R,\ P:F\rightarrow\R$

In modern probability we define any $P: F\rightarrow\R$ that satisfies the axioms of probability to be a valid probability measure.

The axioms of probability state that $P$ is a valid probability measure if:

1. $P(A)\ge 0\ \forall A \in$
2. $P(S)=1 \forall S$
3. For any disjoint events $A$ and $B$, $P(A\cup B)=P(A)+P(B)$
4. For any disjoint sequence (or countably infinite collection) of events $A_1,A_2,...$, $P(\cup_{i=1}^{\infty} A_i)=\sum_{i=1}^{\infty} P(A_i)$

# Comments

-   You should use this statement of the axioms, although there are other valid ways to state them.
-   Axiom 3 implies that if $A_1,...,A_n$ for finite $n \ge 2$ form a disjoint collection, then $P(\cup_{i=1}^{\infty} A_i)=\sum_{i=1}^{\infty} P(A_i)$. Proof by induction.
