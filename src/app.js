import React from 'react';

import MainStack from './setup/navigation';
import {AuthContextProvider} from '../src/auth/Context/AuthContext';
export default function App() {
  return (
    <AuthContextProvider>

      <MainStack/>
   </AuthContextProvider>
  );
}