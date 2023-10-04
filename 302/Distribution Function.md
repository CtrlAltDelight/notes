# Cumulative Distriubution Function

**Cumulative distribution function** of a random variable $X$ is $F_X(x)=P(X\le x), \forall\ x\in \R$

Even with the restriction to $F: \R\rightarrow [0,1]$, there are still some nonvalid CDFs.

$F$ is a valid CDF for $X$ if all 3:

1. $\lim_{x\rightarrow-\infty} F_X(x)=0$ and $\lim_{x\rightarrow\infty} F_X(x)=1$
2. For any $x_1,x_2 \in \R$ with $x_1\lt x_2$, $F(x_1)\le F(x_2)$ (i.e $F$ is nondecreasing in $x$)
3. $F$ is continuous from the right at all $x\in\R$

If $P$ satisfies the axioms, then $F_X(x)=P(X\le x) satisfies: Properties 1-3 above.

## Example

If $x_1\lt x_2$ then $F_X(x_1) \le F_X(x_2)$.

Proof. If $x_1\lt x_2$, then $\{X\le x_1\}\sub \{X\le x_2\}$. But if $A\in B$, then $P(A)\le P(B)$.

4. $P(X\gt x) = 1-F_X(x), \forall\ x\in\R$. This is because $\{X\gt x\}=\{X\le x\}^c$
5. If $x_1\lt x_2$, then $P(x_1\lt X \le x_2)=F_X(x_2)-F_X(x_1)$
6. For any $x\in\R, P(X=x)=F_X(x)-F_X(x^-)$
   (Note: $x^-$ is the limit from the left of $F_X$ at $x$.)
