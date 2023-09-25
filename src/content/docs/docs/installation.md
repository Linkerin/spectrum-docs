---
title: Getting started
description: Installation and example usage of Spectrum library
head:
  - tag: title
    content: Getting started · Spectrum
---

Spectrum is a lightweight library with no dependencies, making it compatible with any JavaScript environment.
This page will guide you through the installation process and provide a simple example of how to use Spectrum for color manipulation.

## Installation

To start using Spectrum in your project, simply run the following command in your terminal:

```bash
npm i @snipshot/spectrum
```

## Example usage

```js
import Spectrum, { adjustHsl } from '@snipshot/spectrum';

// Create a new Spectrum instance in the HSL color space
const spectrum = new Spectrum('hsl', [231, 0.66, 0.53, 0.8]);

// Adjust the hue and lightness values of the color
const adjustedColor = adjustHsl(spectrum, { hue: -23, lightness: '-13%' });

console.log(adjustedColor.hsl); // { h: 208, s: 0.66, l: 0.4, a: 0.8 }
console.log(adjustedColor.hex); // #236aa9cc
```

In the example above, we initiate a new `Spectrum` instance using one of the available color spaces: `hex`, `hsl`, or `rgb` as the first argument. The second argument can be an `array` or a `string`. For more details, refer to the [Spectrum class API reference](/docs/spectrum-class).

After initializing the instance, you can apply transformation methods provided by the library.  
In this example, we change `hue` and `lightness` values, resulting in a new Spectrum instance with the modified color. You can then access the hsl and hex properties of the new color.

## Next steps

For more in-depth information about using Spectrum, explore the [API Documentation section](/docs/spectrum-class).

Thank you for choosing **Spectrum**! 😉
