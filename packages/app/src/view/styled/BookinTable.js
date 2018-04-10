// @flow

import styled from 'styled-components'
import { Avatar } from './User'

export const Table = styled.table`
  width: 100%;
  border-spacing: 0.1em;
  border-collapse: separate;
  margin-top: 1em;
  overflow: hidden;
`
export const Header = styled.thead`

`

export const Row = styled.tr`

`

export const HeaderCell = styled.th`
  background-color: #FFB213;
  color: #fff;
  font-weight: normal;
  height: 2.5em;
`

export const Time = styled.div`
`

export const TimeCell = styled.td`
  text-align: right;
  position: relative;
  width: 3em;
  ${Time} {
    width: 100%;
    left: 0;
    bottom: -1em;
    height: 2em;
    text-transform: uppercase;
    line-height: 2em;
    color: #868686;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 0.8em;
    position: absolute;
  }
`

export const Cell = styled.td`
  text-align: center;
  height: 3em;
  background-color: #E5E5E5;
  cursor: pointer;
  ${Avatar} {
    height: 2em;
    width: 2em;
    border-radius: 1em;
    margin: 0.5em auto;
  }
`

export const Body = styled.tbody`

`
