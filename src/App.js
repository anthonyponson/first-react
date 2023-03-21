import React from 'react'
import { render } from 'react-dom'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <h1>hello </h1>
    </div>
  )
}

export function MyComponents(props) {
  const StyleObj = {
    color: 'red',
    fontSize: '18px'
  }

  return <div style={StyleObj}>hey this is style</div>
}

export const Header = () => {
  return (
    <div>
      <h3>hey this is Header</h3>
      <h3>hey this is Header</h3>
      <h3>hey this third header</h3>
    </div>
  )
}
