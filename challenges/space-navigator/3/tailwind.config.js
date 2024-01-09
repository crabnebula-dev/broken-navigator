const path = require("path");
const sharedPath = path.dirname(
  path.relative(
    __dirname,
    require.resolve("space-navigator-shared/tailwind.config.js"),
  ),
);

/** @type {import('tailwindcss').Config} */
const config = require(path.join(sharedPath, "tailwind.config.js"));
const content = config.content;

// add the sources of our component library dependency in
// reverse order to prevent an infinite loop while pushing
for (let i = content.length - 1; i >= 0; i--) {
  content.push(path.join(sharedPath, content[i]));
}

module.exports = config;
