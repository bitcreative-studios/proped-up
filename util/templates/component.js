module.exports = componentName => ({
  content: `// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

interface ${componentName}WrapperProps {
    color?: string
}

const ${componentName}Wrapper = styled.div<${componentName}WrapperProps>\`
    color: \$\{p => p.color ? p.color : '#ff0844' \}
\`


import { ${componentName}Props } from "./${componentName}.types";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <${componentName}Wrapper data-testid="${componentName}" className="foo-bar">{foo}</${componentName}Wrapper>
);

export default ${componentName};

`,
  extension: `.tsx`,
  filename: `${componentName}`,
})
