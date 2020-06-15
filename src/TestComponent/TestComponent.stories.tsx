import React from 'react'
import TestComponent from './TestComponent'

export default {
  title: 'TestComponent',
}

export const Primary = () => <TestComponent text="primary" />

export const Secondary = () => <TestComponent text="secondary" color="#333" />
