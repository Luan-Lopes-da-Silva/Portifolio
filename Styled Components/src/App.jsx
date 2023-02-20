import { useState } from 'react'
import styled, {css} from 'styled-components'

function App() {
  const DIV = styled.div`
  background-color:#6783EA;
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  gap: 12px;
  `

  const Button = styled.button`
  width: max-content;
  height: max-content;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid black;
  background-color:#2D3966 ;
  color: white;
  ${props => props.primary && css`
  background-color: #304D66;
  border-color: #6EB0EA;
  color: red;
  `}
  ${props=> props.secondary && css`
  background-color: #46EAB3;
  border-color: #1F664E;
  color: white;
  transition: all.5s;
  &:hover{
    background-color: white;
    border-color: #46EAB3;
    color: #1F664E;
    cursor: pointer;
  }
  `}
  `
  return (
    <DIV className="App">
    <Button>Normal button</Button>
    <Button primary>Primary button</Button>
    <Button secondary>Secondary button</Button>
    </DIV>
  )
}

export default App
