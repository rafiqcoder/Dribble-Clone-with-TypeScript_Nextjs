"use client";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

// make a type for providers
type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string>;
};
type Providers = Record<string, Provider>;
const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res);
      
      setProviders(res);
    };

    fetchProviders();

  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}> {provider.id} </button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
