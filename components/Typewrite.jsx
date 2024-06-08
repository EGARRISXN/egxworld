'use client'
import {Component} from 'react'
import Typewriter from 'typewriter-effect'

class Typewrite extends Component {
  render() {
    return (
      <Typewriter
        options={{
          strings: ['Web Developer', 'Designer', 'Leader', 'Karaoke Star'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    )
  }
}

export default Typewrite
