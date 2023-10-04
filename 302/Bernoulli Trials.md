# Bernoulli Trials (cont. from Independent Events)

In the binary source example, the problem of the $k$ zeroes in $n$ bits is of interest.

In general, how many ways are there to have $k$ **"successes"** in $n$ Bernoulli trials?

**Successes** meaning occurrences of $A$

From Combinatorses: how many ways are there to choose $k$ items from $n$?

In our context:

We have $n$ slots

\- \- \- \- \- \- \- \- \-

Choose $k$ items (slots) of $n$ total items (slots) where $A$ occurs.

Consider case where

For first of $k$ choices, $n$ possibilities

1
2
...
n-1
n

For $k=3$ there are $n(n-1)(n-2)$ combinations.

For general $k$, if order matters, have $n(n-1)...(n-k)(n-k+1)$ combinations

But each ordering of $k$ items has been counted $k!$ times.

For example, choose 3 letters from a,b,c,d

abc
bca
acb
bac
cab
cba

$\binom{n}{k}$ $n$ choose $k$

## Example

How many 5-card hands have exactly 3 aces?

$\binom{4}{3}$ combinations of 3 aces. For each of those, $\binom{48}{2}$ ways of getting 2 non-aces.

So $\binom{4}{3} \binom{48}{2} = 4512$ 5-card hands with exactly 3 aces.

Write as $P(A)$.

$A=\bigcup_{i=1}^{n}$

{i-th combination with $k$ successes and n-k failures}

So $P(A)=\sum_{i=1}^{} P(\text{ i-th combo })$

since we have disjoint events $P(\text{ i-th combo})=p^k(1-p)^{nk}

due to independence of trials where p is the probability of $A$ in each trial.

So $P(\text{ k successes in n trials})=\binom{n}{k}p^k(1-p)^{n-k}$
