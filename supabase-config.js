// Set these values from Supabase: Project Settings -> API
window.SUPABASE_CONFIG = {
  url: "https://qxydhatqceympaipruem.supabase.co",
  anonKey: "sb_publishable_pQPtryK705fuHNEpvgjVhA_ZMzlPUJG",
  usernameDomain: "users.local",
  // Fallback only for subject filtering if a role has no explicit mapping.
  defaultLevel: "molekularbiologie",
  // UI-only subject visibility by level.
  levelSubjectAccess: {
    economics: [
      "Public Economics",
      "Microeconomics 2",
      "Oekonometrie 1",
      "Gender Economics",
      "Einführung in die BWL",
      "Finanz",
      "Einführung in die Soziologie",
      "Rechtsgrundlagen & Vertragsrecht",
    ],
    molekularbiologie: ["Biochemie", "Biochemie Skripte", "Strukturformeln"],
  },
};
