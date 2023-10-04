# Probability Density Function

The cdf of $X$ has been defined, but in practice it is more common to use the pdf, or density function.

PDF (Probability Density Function) of a random variable X is:

$f_x(x)=\frac{d}{dx}F_x(x)$

## Important Result

From the fundamental theorem of calculus, for a subset $A\sub\R$:

$P(X\in A)=\int_A f_x(x)dx$

### For example

-   Let $A=(-\infty,x]$. Then $P(X\in A)=\int_{-\infty}^{x}f_x(r)dr$.

But this is also $P(x \le X)$, so $F_x(x)=\int_{-\infty}^{x}f_x(r)dr$

Common mistake: $f_x(x)=\int_{-\infty}^{\infty}f_x(x)dx$ $\leftarrow$ This is **NOT** true for general $x$.

## Validity of PDFs (properties)

It can be shown that if a function $f$ satisfies:

1. $f(x)\ge 0\ \forall\ x\in \R$, and
2. $\int_{-\infty}^{\infty}f(x)dx=1$

Then $f$ is a valid pdf for some random variable $x$.

Conversely, if $P$ satisfies the axioms, then the function $f_x$ for random variable $x$ will satisfy the two properties above.

## Find a PDF in practice

Collect samples of $x$ (take measurements) and plot a histogram.

Find a curve that satisfies properties 1 and 2 above; that curve is (an estimate of) the pdf of $X$.

$f_x(x)$ is not a probability. Consider for example a random variable equally likely to be any value in $[0,\frac{1}{2}].
$\int\_{0}^{\frac{1}{2}}

# $\leftarrow$ Need to fill here

So e.g., $f_x(\frac{1}{4})=2$. Does not need to be $\le 1$, since it is not a probability

## Types of random variables

**Continuous**: A random variable $x$ having a cdf that is continuous everywhere. (i.e., Continuous $\forall\ x \in \R$) is a continuous random variable

**Discrete**: A random variable whose cdf is piecewise constant with a finite or countibly infinite number of jump discontinuities is a discrete random variable.

```chart
{
    "type": "line",
    "data": {
        "labels": ["0", "1", "2"]
    }
}
```
