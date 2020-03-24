import React from 'react';
import Landing from './pages/Landing';
import UserContextProvider from './contexts/UserContext';


export default function App() {
  return (
    <UserContextProvider>
      <Landing />
    </UserContextProvider>
  )
}
