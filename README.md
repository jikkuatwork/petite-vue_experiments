# Petite Vue Experiments

I am trying to wrap my mind around Pettie Vue and these are the issues I faced
while building with it.

## Issues

### 01 - Prop Drilling

I am trying to send a boolean deep within two nested components. But while doing
it I noticed that reactivity is lost.

I found a hack to wrap the boolean with an object, but it feels wrong.
