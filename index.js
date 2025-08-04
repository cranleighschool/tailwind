module.exports = function ({ addUtilities, theme, e }) {
    const colors = theme('colors');

    const newUtilities = Object.entries(colors).reduce((acc, [key, value]) => {
        let colorValue = value;

        // Handle nested { DEFAULT: '#...' }
        if (typeof value === 'object' && value.DEFAULT) {
            colorValue = value.DEFAULT;
        }

        if (typeof colorValue !== 'string') return acc;

        acc[`.label-${e(key)}`] = {
            backgroundColor: colorValue,
            color: '#fff'
        };

        return acc;
    }, {});

    addUtilities(newUtilities, ['responsive', 'hover']);
};

// Attach the config
module.exports.config = require('./tailwind-preset');
