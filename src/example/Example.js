import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getCoolStatus } from './example.selectors'
import { fetchCoolStatus } from './example.actions'

class Example extends Component {
  componentDidMount () {
    this.props.fetchCoolStatus()
  }

  render () {
    const { allGood } = this.props
    return (
      <Wrapper>
        All good?
        {
          allGood
            ? <Yup>Ja, man! 👍</Yup>
            : <Nope>No, not really... 👎</Nope>
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``
const Yup = styled.div``
const Nope = styled.div``

const mapStateToProps = (state) => ({
  allGood: getCoolStatus(state)
})

const mapDispatchToProps = { fetchCoolStatus }

export default connect(mapStateToProps, mapDispatchToProps)(Example)
