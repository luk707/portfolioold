// @flow

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import type { Theme } from '../../theme'

type ButtonProps = {
  theme: Theme,
  prominence?: 'default' | 'primary',
}

const Button = styled.button(
  (props: ButtonProps) => ({
    display: 'inline-block',
    padding: '.8rem 2rem',
    fontFamily: props.theme.fontStack,
    borderRadius: '.3rem',
    boxShadow: `0 0 0 ${props.theme.colorShadow}`,
    transition: 'ease-out 0.05s',
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
      boxShadow: `0 .2rem .4rem ${props.theme.colorShadow}`,
    },
  }),
  (props: ButtonProps) => {
    switch (props.prominence) {
      case 'primary':
        return {
          color: props.theme.colorWhite,
          backgroundColor: props.theme.colorPrimary,
          border: `.1rem solid ${props.theme.colorPrimaryDark}`,
        }
      default:
        return {
          color: props.theme.colorBlack,
          backgroundColor: props.theme.colorWhite,
          border: `.1rem solid ${props.theme.colorGrey}`,
        }
    }
  }
)

export default Button

export const LinkButton = Button.withComponent(Link)