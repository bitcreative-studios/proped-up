import React from 'react'
import { addDecorator } from '@storybook/react'
import { GlobalStyle } from '../src/shared/global'
import { DefaultThemeProvider } from './decorators'

// Global Styles =====================================
addDecorator(story => (
  <>
    <GlobalStyle />
    <div style={{ padding: '1rem' }}>{story()}</div>
  </>
))

// Theme Provider =====================================
addDecorator(DefaultThemeProvider)
