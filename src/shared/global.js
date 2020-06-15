import { createGlobalStyle, css } from 'styled-components'
import { reset } from './reset'
import { color, typography } from './styles'

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${color.darkest};

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap');
  ${reset}
  
  body {
    ${bodyStyles}
  }
`
