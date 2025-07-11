import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Polok Banik",
      email: "polokbanik@exmple.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Login user is {user?.name}</div>
      <div>Login email is {user?.email}</div>
    </>
  );
}
