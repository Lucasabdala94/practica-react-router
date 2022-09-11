import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavLinkPersonalizado({
  to,
  clase,
  children,
  ...props
}) {
  console.log(clase);
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? clase : undefined)}
      to={to}
    >
      {children}
    </NavLink>
  );
}
