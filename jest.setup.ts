import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import styled from 'styled-components'
import { render } from '@testing-library/react'
import { styleSheetSerializer } from 'jest-styled-components'
import { addSerializer } from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer)
