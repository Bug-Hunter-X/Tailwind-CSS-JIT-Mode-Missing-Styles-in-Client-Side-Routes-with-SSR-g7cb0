This solution uses a purge strategy to include necessary classes in the CSS output. Modify your Tailwind config (tailwind.config.js for example) to include an explicit purge configuration. 
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ //Add these lines to ensure classes are included.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Alternatively, make sure all components needed client-side are rendered on the server side as well.