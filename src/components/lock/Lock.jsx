import { useState } from "react";
import { SITE_PIN } from "../../config/pin";
import "./Lock.scss";

export default function Lock({ onSuccess }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPin = pin.trim();
    if (enteredPin === SITE_PIN) {
      onSuccess();
    } else {
      setError("❌ Incorrect PIN. Try again!");
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
