// Fill in your public contact details before sharing the site.
// For a local PDF, place it next to index.html and set resume to "./resume.pdf".
const profile = {
  email: "",    // e.g. "you@example.com"
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-profile/"
  resume: "",   // A public HTTPS URL or a relative file path
};

const links = {
  email: profile.email.trim() ? `mailto:${profile.email.trim()}` : "",
  linkedin: profile.linkedin.trim(),
  resume: profile.resume.trim(),
};

for (const anchor of document.querySelectorAll("[data-link]")) {
  const href = links[anchor.dataset.link];
  if (href) {
    anchor.href = href;
    anchor.hidden = false;
  }
}

const contactLinks = document.querySelector("#contact-links");
const hasContact = Boolean(links.email || links.linkedin);
contactLinks.hidden = !hasContact && !links.resume;
document.querySelector("#contact-note").hidden = hasContact;
