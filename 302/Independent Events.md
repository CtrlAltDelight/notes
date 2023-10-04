# Independent Events

Events $A$ and $B$ are statistically independent if $P(A\cap B)=P(A)P(B)$

**Note** that if $a,B$ are independent then $P(A|B)=\frac{P(A\cap B)}{P(B)}=\frac{P(A)P(B)}{P(B)}=P(A) \text{ if } P(B)\ne 0$

Similarly, if $A,B$ are independent then $P(B|A)=P(B)\text{ if }P(A)\ne0$

Conversely: Can show that if $P(B)=P(B|A)\text{ and }P(A)\ne0$ then $A,B$ are independent. Same for $P(A)=P(A|B)$

**Note** A collection of $n$ events is independent if for any subcollection, the probability of the intersection = product of probabilities

## Bernouli Trials

Consider a random experiment $(S_0,F_0,P_0)$ with one particular event of interest, $A$. If we run $n$ independent trails of the experiment, what is the probability that $A$ occurs $k$ times in $n$ trials?

We assume that $P_0(A)=p$ is known.

We need a new probability space.

Let $S=S_0 ... S_0 = \{(\omega_1,...,\omega_n):\omega_i \in S_0\ \forall\ i\}$

$F$ contains all subsets of $S$.

Finally, we have $P(\{(w_1,...,w_n)\})=p^k(1-p)^{n-k}$ where $k$ is the number of times event $A$ occurs.

### Example

A binary source generates an independent sequence of $n$ bits. The event that $k$ bits are 0 contains all outcomes that have $k$ zeroes.

Each of these outcomes occurs with probability $p^k(1-p)^{n-k}$

To find $P(k\text{ successes in }n\text{ Bernouli trials })$ we need to know how many ways can $k$ successes occur in $n$ trials?
