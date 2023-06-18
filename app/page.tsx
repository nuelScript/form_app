'use client';

import axios from "axios";

import React, { useCallback, useState } from "react"
import Input from "./components/Input/input"; 
import { signIn } from 'next-auth/react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('') 
  const [variant, setVariant] = useState('login');
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const login = useCallback(async() => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/home'
      });

    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const register = useCallback(async() => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch(error) {
      console.log(error);
    }
  }, [email, name, password, login])

  return (
    <div className="relative h-full w-full bg-[url('/assets/covenant.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed bg-[#fefefe]">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-white px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full mt-40">
            <h2 className="text-black text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  type="text"
                  value={name}
                  disabled={isLoading}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
                disabled={isLoading}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
                disabled={isLoading}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-gray-500 py-3 text-white rounded-md w-full mt-10 hover:bg-gray-700 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "No Account?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-black ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
