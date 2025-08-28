import React from "react";
import { createButton } from "./create-button";

const config = {
  activeStyle: { background: "#40d014" },
  icon: Icon,
  style: { background: "#53FC18", color: "#000000" },
  text: "Log in with Kick",
};

export const KickLoginButton = createButton(config);

function Icon({ size, color }: { size: number | string; color: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={color} width={size} height={size}>
      <title>Kick icon</title>
      <path d="M4.79 2.4c-1.326 0-2.4 1.074-2.4 2.4V19.2c0 1.326 1.074 2.4 2.4 2.4h14.42c1.326 0 2.4-1.074 2.4-2.4V4.8c0-1.326-1.074-2.4-2.4-2.4H4.79zm5.664 4.32h1.728v4.752L17.1 6.72h2.22l-4.128 4.032L19.32 17.28h-2.28l-3.348-4.728-1.71 1.656v3.072H10.454V6.72z" />
    </svg>
  );
}
