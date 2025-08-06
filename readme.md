# Cranleigh Tailwind

A Tailwind CSS plugin and preset with Cranleigh’s custom colour palette, fonts, and utilities.

## Installation

```bash
npm install @cranleighschool/tailwind
```

## Usage

In your tailwind.config.js:

```
const { getSafelist } = require('@cranleighschool/tailwind/tailwind-preset');

module.exports = {
  content: ['./resources/**/*.blade.php'],
  safelist: [
    ...getSafelist(),
    // add project-specific safelist here
  ],
  plugins: [require('@cranleighschool/tailwind')]
};
```

## Features

- Custom Cranleigh colour palette
- `.label-{color}` utility classes with white text on coloured backgrounds
- Dynamic safelist generation to cover house colours
- Easily extendable in projects

## Contributing

Feel free to submit PRs or issues!

## License

MIT
