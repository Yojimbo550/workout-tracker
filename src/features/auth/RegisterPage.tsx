import React, { useState } from 'react'
import { supabase } from '../../shared/lib/supabase';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({ email, password })
        console.log('data:', data)
    console.log('error:', error)
    } 
  return (
    <form 
    onSubmit={submit}
    >
        <input 
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <input 
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <button>Registration</button>
    </form>
  )
}

export default RegisterPage