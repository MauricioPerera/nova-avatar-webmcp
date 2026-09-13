import { registerTools } from "@nekuda/webmcp-sdk";
import { applyAvatarDesign, getAvatarOptions, setAvatarPresentation } from "./avatar-tools.js?v=3";

const registration = registerTools([getAvatarOptions, applyAvatarDesign, setAvatarPresentation], {
  telemetry: false
});

window.novaAvatarTools = registration;
window.addEventListener("pagehide", () => registration.unregister(), { once: true });

registration.ready.then((results) => {
  console.info("Nova avatar WebMCP tools", results);
});
