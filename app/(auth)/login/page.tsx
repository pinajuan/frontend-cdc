'use client'

import { useState } from 'react';

export default function PageLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex justify-center items-center h-60 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm mb-1">Senha</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}