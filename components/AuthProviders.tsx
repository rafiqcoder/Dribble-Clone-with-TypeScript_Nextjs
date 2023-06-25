"use client";
import React from 'react'
import { getProviders, signIn } from 'next-auth/client'

// make a type for providers
type Providers = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string,string>;

}

const AuthProviders = () => {
  return (
    <div>
        <button>Sign in</button>
    </div>
  )
}

export default AuthProviders
