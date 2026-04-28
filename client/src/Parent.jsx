import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';

export const Child1 = () => {
  return (
    <div>Child1</div>
  )
}

export const Child2 = () => {
  return (
    <div>Child2</div>
  )
}

export const Child3 = () => {
  return (
    <div>Child3</div>
  )
}

const Parent = () => {
  return (
    <>
        <div>Parent</div>
        <Link to="child1">Child1</Link>
        <Link to="child2">Child2</Link>
        <Link to="/child3">Child3</Link>
        <Outlet/>
    </>
  )
}

export default Parent