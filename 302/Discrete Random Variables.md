No discrete random variables and no pdf on exam 1.

# Discrete Random Variables

A random variable $X$ is discrete if there is a finite or countably infinite set $R_X\sub\R$ such that $P(X\in R_x)=1$

### Example

Let $X$ be the number of photons hitting a detector over a given period of time.

Then, $P(X\in \{0,1,2,...\})=1$ since it is guaranteed to be an integer. So $X$ is a discrete random variable.

-   If $X$ is a continuous random variable, then $\forall\ x \in \R$,
    -   $P(X=x)=F_x(x)-F_x(x^-)$ Since $F_x$ is continuous everywhere.
        -   $x^-$ is the limit of x from the left

## A consequence of this

$P(X\le x)$

$=P(\{X\lt x\}\cup\{X=x\})$

$=P(X\lt x)+P(X=x)$

So $P(X\le x)=P(X\lt x)$ **if X is continuous**

So can interchange $\lt,\le$ and $\gt,\ge$ in probabilities with continuous random variables.

## Density function of discrete random var

If $X$ is discrete, then it's density function will be a sum of weighted $\delta$-functions.

$\delta(x)$ ~ dirac delta function

In general for discrete $X$:

$f_x(x)=\sum_{i\in R_x}P_i\delta(x-x_i)$

$R_x$ is a det in $\R$ with $P(X\in R_x)=1$.

$P_i$ is $P(X=x_i)$

The probability mass function (or the pmf, or the mass function), of a discrete random variable, $X$, is:

$p_x(x)=P(X=x)\ \forall\ x\in R_x$

Note:

-   Use the pmf instead of the pdf for a discrete random variable normally.
-   A continuous random variable **does not have** a pmf.
-   The pmf can be read directly from the pdf.

## Properties of pmf

1. $p_x(x)\ge 0\ \forall\ x\in R_x$
2. $\sum_{x\in R_x}p_x(x)=1$
3. If $A\sub R_x$, then $P(X\in A)=\sum_{x\in A}p_x(x)$

If a function $p:R_x\rightarrow\R$ satisfies properties (1) and (2), it is a valid pmf for some discrete random variable $X$.

## Practical advice for working with random variables

1. Is it continuous or discrete?
    - If continuous, use cdf or pdf
    - If discrete, use pdf
    - If cannot be determined, use cdf/pdf
2. What is the problem asking for?
