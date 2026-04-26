/**
 * Liest molecules/molecule_mapping.json und schreibt molecules/molecule_mapping_bundle.js
 * (nur Felder für Strukturformeln-Lernkarten). Ausführen nach Änderungen an der Mapping-Datei:
 *   node tools/build_molecule_bundle.js
 */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const src = path.join(root, "molecules", "molecule_mapping.json");
const out = path.join(root, "molecules", "molecule_mapping_bundle.js");
const full = JSON.parse(fs.readFileSync(src, "utf8"));
const slim = full.map((m) => ({
  slug: m.slug || "",
  name: String(m.matched_name || m.lookup_name || m.original_name || m.slug || "").trim() || m.slug,
  skeletal: String(m.skeletal_svg_path || "").trim(),
}));
const body = "globalThis.MOLECULE_MAPPING=" + JSON.stringify(slim) + ";";
fs.writeFileSync(out, body, "utf8");
console.log("Wrote", out, "entries", slim.length, "bytes", body.length);
