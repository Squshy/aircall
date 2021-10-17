export type Call = {
  id: number;
  created_at: string;
  direction: "inbound" | "outbound";
  from: string;
  to: string;
  via: string;
  duration: string;
  is_archived: boolean;
  call_type: "missed" | "answered" | "voicemail";
};
