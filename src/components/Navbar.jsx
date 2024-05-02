import Button from "./Button";
import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="navbar">
      <Button
        label="HS Classes"
        selected={selected == 1}
        method={() => {
          setSelected(1);
        }}
        href="/classes"
      />
    </div>
  );
}
