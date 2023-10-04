# Random Variables

In practice, we ofter characterize a random system by taking measurements of various phenomena.

One such phenomena might be temperature $T$, for example.

We call $T$ (or the phenomenon of interest) a random variable, and the measurements of it's samples of the random variable.

Defn: Given a probability space $(S,F,P)$, a **random variable** $X$ is a function from $S$ to the real numbers, or $X:S\rightarrow R$

Conceptually the experiment $(S,F,P)$ is run to get an outcome $\omega$ which is mapped to $X(\omega)$, which is what we can measure.

We usually write $X$ instead of $X(\omega)$.

To completely characterize $X$ probabilistically, will consider $\{X\le x\}$

$X$ is a random variable. $x$ is a real-valued variable, not random - Does not depend on outcome of experiment.

Changing the value of $x$ changes the event of interest.

Two questions:

1. For a fixed $x$, the event $\{X\le x\}$ occurs if the $\omega$ that occurs leads to $X(w)\le x$
2. What value do we expect $X$ to take?

Define:

1. The cumulative distribution function of $X$
2. The probability density function of $X$
3. The probability mass function of $X$ (only for some random Variables)
