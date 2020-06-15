import React from 'react'
import styled from 'styled-components'

import { TestComponentProps } from './TestComponent.types'

interface ComponentWrapperProps {
  color?: string
}

const ComponentWrapper = styled.div<ComponentWrapperProps>`
  color: ${p => (p.color ? p.color : '#ff0844')};
`

const TestComponent: React.FC<TestComponentProps> = ({ text, color }) => (
  <ComponentWrapper
    data-testid="test-component"
    className={`test-component test-component-${text}`}
    color={color}
  >
    <h1 className="heading">{text}</h1>
    <h2>Made with love by Harvey</h2>
  </ComponentWrapper>
)

export default TestComponent
