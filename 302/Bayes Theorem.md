# Bayes Theorem

We can write $P(A\cap B)=P(A|B)P(B)$ and $P(A\cap B)=P(B|A)P(A)$ from conditional probability definition.

Setting the right hand sides equal gives: $P(A|B)P(B)=P(B|A)P(A)$

## Total probability law (TPL)

Sometimes in $P(A|B)=\frac{P(B|A)P(A)}{P(B)}$

We can write $P(B)$ as $P(B|A)P(A)+P(B|A^c)P(A^c)$ if $P(A) \ne 0, P(A) \ne 1$

In cases where $P(B)$ is difficult to model. Can use the TPL to find $P(B)$.

### TPL

Let $A_1,...,A_n$ form a partition of $S$. Then the TPL states that if the $P(A_i)\gt 0 \ \forall \ i=1,...,n$, then $P(B)=\sum_{i=1}^{n} P(B|A_i)P(A_i)$

Proof: $P(B)=P(B\cap S)$. This is from set algebra and if C=D then $P(C)=P(D)$

$= P(B\cap (\cup_{i=1}^{n}A_i))$. Since $A_1 \rightarrow A_n$

$= P(\cup_{i=1}^{n}(B\cap A_i))$. From distributive property

So, $P(B)=\sum_{i=1}^{n} P(B\cap A_i)$. From Axiom 3 + induction

$\sum_{i=1}^{n} P(B|A_i)P(A_i)$. From definition of conditional probability.

## Examples

### Example 1

We have a deck of cards:

-   well shuffled deck
-   set aside first card without looking at it
-   what is the probability that the second card is an ace?

Let $B=\{\text{second card is an ace}\}$

Let $A=\{\text{first card is an ace}\}$

Let $A^c=\{\text{first card is not an ace}\}$

From the TPL, $P(B|A)P(A)+P(B|A^c)P(A^c)$

$=\frac{3}{51}*\frac{4}{52}+\frac{4}{51}*\frac{48}{52}$

### Example 2

-   Sender can send a 0,1,2
-   Receiver can receive a 0,1,2
-   There is a chance what the sender sends will get changed into a different number

what is the prob that the source sent symbol i?

Let $S=\{(i,j): \text{ i is sent, j is recieved for } i,j \in \{0,1,2\}\}$

Let $A_i=\{\text{source sent i}\}=\{(i,0),(i,1),(i,2)\}$

Let $B_i=\{\text{reciever recieved i}\}=\{(0,i),(1,i),(2,i)\}$
