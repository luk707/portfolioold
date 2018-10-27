// @flow

import React, { Component } from 'react'
import styled from 'react-emotion'

const DecorationAnchor = styled('div')({
  height: 0,
  width: '100%',
  position: 'relative',
})

type DecorationContainerProps = {
  aspectRatio: number,
}

const DecorationContainer = styled('div')(
  (props: DecorationContainerProps) => ({
    pointerEvents: 'none',
    position: 'absolute',
    width: `100%`,
    bottom: 0,
    paddingTop: `${100 / props.aspectRatio}%`,
  })
)

type DecorationProps = {
  aspectWidth: number,
  aspectHeight: number,
}

function decoration(DecorationComponent: Component) {
  const StyledDecorationComponent = styled(DecorationComponent)({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  })
  class Decoration extends Component<DecorationProps> {
    render() {
      return (
        <DecorationAnchor>
          <DecorationContainer
            aspectRatio={this.props.aspectWidth / this.props.aspectHeight}
          >
            <StyledDecorationComponent />
          </DecorationContainer>
        </DecorationAnchor>
      )
    }
  }
  return Decoration
}

export default decoration