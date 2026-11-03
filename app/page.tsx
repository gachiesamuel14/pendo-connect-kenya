'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.log('Location denied', err)
      );
    }
  }, []);

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else setUser(data.user);
  };

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else setUser(data.user);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!user) {
    return (
      <div className="container">
        <h1 className="text-3xl font-bold text-rose-600 mb-2">Pendo Connect</h1>
        <p className="mb-6">Find people near you in Kenya. Karibu!</p>
        <input
          className="w-full p-3 border rounded-lg mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" onClick={handleSignUp}>Sign Up</button>
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Karibu, {user.email}</h1>
      {location ? (
        <p className="mb-4">Your location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)} — finding nearby matches in Kenya...</p>
      ) : (
        <p className="mb-4">Enable location to find people near you (Nairobi, Mombasa, Kisumu, etc.)</p>
      )}
      <p className="mb-6 text-slate-600">Swipe, match, and chat features coming soon. Profile setup next.</p>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}
