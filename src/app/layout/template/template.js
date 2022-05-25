import React from 'react'
import { Header } from 'app/layout/header'

export class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}
