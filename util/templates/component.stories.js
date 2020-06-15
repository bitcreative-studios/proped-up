module.exports = componentName => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from ".";

export default {
    title: "Design System|${componentName}"
};

export const WithBar = () => <${componentName} foo="bar" />;

export const WithBaz = () => <${componentName} foo="baz" />;
`,
  extension: `.stories.tsx`,
  filename: `${componentName}`,
})
