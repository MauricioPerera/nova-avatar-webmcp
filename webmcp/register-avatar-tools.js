import { registerTools } from "@nekuda/webmcp-sdk";
import { applyAvatarDesign, getAvatarOptions } from "./avatar-tools.js";

const registration = registerTools([getAvatarOptions, applyAvatarDesign], {
  telemetry: false
});

window.novaAvatarTools = registration;
window.addEventListener("pagehide", () => registration.unregister(), { once: true });

registration.ready.then((results) => {
  console.info("Nova avatar WebMCP tools", results);
});
