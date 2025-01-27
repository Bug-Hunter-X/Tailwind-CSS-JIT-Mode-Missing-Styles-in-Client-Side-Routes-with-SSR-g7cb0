# Tailwind CSS JIT Mode Missing Styles in Client-Side Routes with SSR

This repository demonstrates a bug where Tailwind CSS's JIT mode fails to generate styles for components only rendered on the client-side in a server-side rendering (SSR) environment.

## Problem
When using Tailwind's JIT mode with a framework like Next.js or Nuxt.js, styles might be missing in client-side routes. This happens because JIT only generates the CSS for components rendered during the build process. If a component is only rendered on the client-side after hydration, the necessary Tailwind classes are not included in the CSS.

## Solution
The solution involves ensuring that all necessary Tailwind classes are generated during the build process. This can be achieved by ensuring that every component which might be used client side is also rendered at least once in a server-side route or by using a purge strategy that explicitly includes the classes needed.