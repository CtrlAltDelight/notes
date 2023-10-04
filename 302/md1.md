# Midterm 1 Study sheet

# Useful definitions

-   $A - B = A \cap B^c$
-   $P(A-B) \ne P(A)-P(B)$
-   $P(A)\ge 0\ \forall\ A \in F$
-   $A\cup A^c=S$
-   $P(S)=1$
-   $S^c=\phi$
-   $P(\phi)=0$
-   $P(A\cup B)=P(A)+P(B)$ if $A\cap B=\phi$

# Unions and intersects

-   Both communicative, associative, and demorgans
-   $\cap$ is distributive over $\cup$ and vice versa

# Axioms

1. $P(A)\ge 0\ \forall\ A\in F$
2. $P(S)=1$
3. For any disjoint events $A$ and $B$, $P(A\cup B)=P(A)+P(B)$
4. For any disjoint sequence, $P(\cup_{i=1}^{\infty}A)=\sum_{i=1}^{\infty}P(A_i)$ (Basically the 3rd axiom again)

# (S,F,P)

-   S - Sample space. All possible outcomes.
-   F - Event Space. All subsets of S.
-   P - Probability measure. Likelyhood of events in F.

# Conditional Probability

$P(A|B)=\frac{P(A\cap B)}{P(B)}$

## Bayes theorem

$P(A|B)P(B)=P(B|A)P(A)$

# Total probability law (TPL)

$P(A|B)=\frac{P(B|A)P(A)}{P(B)}$

# Independent events

if $P(A\cap B)=P(A)P(B)$ $A$ and $B$ are independent.

if independent, then $P(B|A)=P(B)$

# Bournouli trials

$nCr=\frac{n!}{r!*(n-r)!}$ also written as $\binom{n}{r}$

$nPr=\frac{n!}{(n-r)!}$

$P(i-th combo)=p^k(1-p)^(n-k)$
$P(\text{k successes in n Bernouli trials}) = \binom{n}{k}p^k(1-p)^(n-k)$

# Random variables

## Cumulative distribution function (cdf)

1.  $\lim_{x\rightarrow -\infty}F(x)=0$,
    $\lim_{x\rightarrow \infty}F(x)=1$

2.  F is non-decreasing in x

3.  F is continuous from the right at all $x\in\R$

$P(X>x)=1-F_X(x)$

$P(x_1\lt X\lt x_2)=F_X(x_2)-F_X(x_1)$

$P(X=x)=F_X(x)-F_X(x^-)$

## Probability density function (pdf)

$f_X(x)=\frac{dF_X(x)}{dx}$
