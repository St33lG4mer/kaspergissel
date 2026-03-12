export const TAGS = [
  "placeholder",
  "offensive",
  "defensive",
  "ir",
  "ctf",
  "siem",
  "automation",
  "compliance",
  "risk",
  "platform",
] as const;

export type Tag = (typeof TAGS)[number];
