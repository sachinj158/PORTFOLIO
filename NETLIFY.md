# Publish Sachin Jagdale’s portfolio

1. Extract `sachin-jagdale-portfolio.zip`. Open the extracted `portfolio` folder.
2. Open `profile.js` in a plain-text editor and fill in the public email, LinkedIn URL and résumé link. Use an HTTPS URL for an online résumé or put a PDF alongside `index.html` and set `resume` to `"./resume.pdf"`. Empty entries stay hidden. Review the name and project wording in `index.html` before sharing.
3. Open `index.html` in your browser and test the links. Confirm that a hosted résumé is visible to someone who is signed out.
4. Sign in to [Netlify Drop](https://app.netlify.com/drop) and drag in the **portfolio** folder, with `index.html` directly inside it. There is no build command or dependency installation. Share the resulting `netlify.app` URL.
5. To update an existing site, edit the local files and drop the updated folder onto that site’s **Deploys** page.

For a Git-connected deployment, leave the build command blank and use `portfolio` as the publish directory if it is inside the repository root. Use `.` if the website files are already at the repository root.

[Netlify deployment documentation](https://docs.netlify.com/deploy/create-deploys/)
