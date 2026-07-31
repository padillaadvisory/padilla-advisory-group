// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH.
// To launch a new market later, copy this project and edit this file:
// change name/url/city/phone/email/address — the whole site follows.
// ─────────────────────────────────────────────────────────────
module.exports = {
  name: "Padilla Advisory Group",
  url: "https://padillaadvisorygroup.com", // no trailing slash
  city: "Los Angeles",
  tagline: "Guiding your next chapter.",
  defaultDescription:
    "Padilla Advisory Group works exclusively with longtime Los Angeles homeowners ready for what's next — simplifying, unlocking equity, and moving forward with clarity, discretion, and zero pressure. Based in Beverly Hills, serving all of LA.",
  advisor: {
    name: "Alejandro Padilla",
    short: "Alex Padilla",
    title: "Senior Advisor",
    dre: "01984740",
  },
  brokerage: "PLG Estates",
  phoneDisplay: "(424) 344-8164",
  phoneHref: "+14243448164",
  email: "alex.padilla@plgestatesinc.com",
  address: {
    street: "9800 Wilshire Blvd",
    locality: "Beverly Hills",
    region: "CA",
    postal: "90212",
  },
  facebook: "https://www.facebook.com/PadillaAdvisoryGroup",
  blogName: "The Downsizing Journal",
  year: new Date().getFullYear(),
};
