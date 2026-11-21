// Public contact details used by the navigation, introduction, and contact section.
// For a local PDF, place it next to index.html and set resume to "./resume.pdf".
const profile = {
  email: "sachinj158@gmail.com",
  linkedin: "https://www.linkedin.com/in/sachinj158",
  resume: "./sachin-jagdale-resume.pdf",
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
  } else {
    anchor.removeAttribute("href");
    anchor.hidden = true;
  }
}

const contactLinks = document.querySelector("#contact-links");
const hasContact = Boolean(links.email || links.linkedin);
contactLinks.hidden = !hasContact && !links.resume;
document.querySelector("#contact-note").hidden = hasContact;
