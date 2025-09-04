// src/components/lock/Lock.jsx
import { useState } from "react";
import { SITE_PIN, PIN_COOKIE, PIN_MAX_AGE_DAYS } from "../../config/pin";

import "./Lock.scss";


function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

export default function Lock({ onSuccess }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === SITE_PIN) {
      setCookie(PIN_COOKIE, SITE_PIN, PIN_MAX_AGE_DAYS);
      onSuccess?.();
    } else {
      setError("❌ Wrong PIN");
    }
  };

  return (
<div className="lock-screen">
  <div className="hearts">
    <span className="heart" style={{ top: "10%", left: "25%" }}>💖</span>
    <span className="heart" style={{ top: "50%", left: "75%", animationDelay: "0.2s" }}>❤️</span>
    <span className="heart" style={{ bottom: "10%", left: "50%", fontSize: "3rem", animationDelay: "0.5s" }}>💕</span>
  </div>

  <form className="lock-form" onSubmit={handleSubmit}>
    <h2 className="lock-title">🔒 Enter Secret PIN</h2>
    <input
      type="password"
      value={pin}
      onChange={(e) => setPin(e.target.value)}
      placeholder="Enter PIN"
    />
    <button type="submit">💫 Unlock</button>
    {error && <p className="error">{error}</p>}
  </form>
</div>


  );
}
