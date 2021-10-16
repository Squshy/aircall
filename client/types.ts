export type Call = {
  id: number;
  create_at: Date;
  direction: "inbound" | "outbound";
  from: number;
  to: number;
  via: number;
  duration: number;
  is_archived: boolean;
  call_type: "missed" | "answered" | "voicemail";
};
