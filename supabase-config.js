// Set these values from Supabase: Project Settings -> API
window.SUPABASE_CONFIG = {
  url: "https://qxydhatqceympaipruem.supabase.co",
  anonKey: "sb_publishable_pQPtryK705fuHNEpvgjVhA_ZMzlPUJG",
  usernameDomain: "users.local",
  // If username is not listed, defaultLevel is used.
  defaultLevel: "molekularbiologie",
  // Map app usernames to levels.
  userLevels: {
    admin: "admin",
    lion: "admin",
    elisabeth: "molekularbiologie",
    julia: "molekularbiologie",
  },
  // UI-only subject visibility by level.
  levelSubjectAccess: {
    economics: [
      "Public Economics",
      "Microeconomics 2",
      "Oekonometrie 1",
      "Gender Economics",
      "Einführung in die BWL",
      "Finanz",
    ],
    molekularbiologie: ["Biochemie", "Biochemie Skripte", "Strukturformeln"],
  },
};
