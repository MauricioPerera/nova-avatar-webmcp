import { defineTool } from "@nekuda/webmcp-sdk";

function avatarApi() {
  const api = window.novaAvatar;
  if (!api || typeof api.getOptions !== "function" || typeof api.applyDesign !== "function") {
    throw new Error("The Nova avatar preview is not ready.");
  }
  return api;
}

export const getAvatarOptions = defineTool({
  stableKey: "avatar.get_options",
  name: "get_avatar_options",
  description: "Returns the avatar’s allowed component variants, color format, and current preview configuration. Use it before proposing a character combination; it does not change the page.",
  inputSchema: {
    type: "object",
    properties: {},
    additionalProperties: false
  },
  annotations: { readOnlyHint: true },
  source: "merchant_authored",
  intent: "answer",
  async execute() {
    return avatarApi().getOptions();
  }
});

export const applyAvatarDesign = defineTool({
  stableKey: "avatar.apply_design",
  name: "apply_avatar_design",
  description: "Applies a validated avatar combination to the visible preview and editable JSON. Use it after choosing allowed variants; changes are temporary and reversible, and it neither saves the avatar nor controls OBS.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    required: ["head", "face", "body", "colors"],
    properties: {
      head: { type: "string", description: "A head variant returned by get_avatar_options." },
      face: { type: "string", description: "A face variant returned by get_avatar_options." },
      body: { type: "string", description: "A body variant returned by get_avatar_options." },
      colors: {
        type: "object",
        additionalProperties: false,
        required: ["hair", "skin", "clothes", "accessory"],
        properties: {
          hair: { type: "string", pattern: "^#[0-9A-Fa-f]{6}$" },
          skin: { type: "string", pattern: "^#[0-9A-Fa-f]{6}$" },
          clothes: { type: "string", pattern: "^#[0-9A-Fa-f]{6}$" },
          accessory: { type: "string", pattern: "^#[0-9A-Fa-f]{6}$" }
        }
      }
    }
  },
  source: "merchant_authored",
  intent: "act",
  async execute(input) {
    return { applied: avatarApi().applyDesign(input) };
  }
});
