# Zero-Based Budget

A budget app you install on your phone. Everyone's numbers stay on their own phone. Nothing is sent to a server.

## Put it online (one time, free)

Phones only install apps from an `https://` link, so the app's files need a home. Only the code goes online, never your budget numbers.

### GitHub Pages (no software to install)
1. Sign up or sign in at https://github.com.
2. Click **+** (top right) → **New repository**. Name it `budget`, choose **Public**, then click **Create repository**.
   (Free GitHub Pages needs a public repository. That's fine, because it only holds the app's code.)
3. Click **uploading an existing file**, then drag in these files: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png` and `icon-512.png`. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", pick **main** and **/ (root)**, then click **Save**.
5. After a minute or two your link appears there: `https://<your-username>.github.io/budget/`.

**To update the app later:** upload the changed file the same way. Phones pick up the change the next time they open the app while online.

## Install on a phone
- **iPhone:** open the link in **Safari** → tap **Share** → **Add to Home Screen**.
- **Android:** open the link in **Chrome** → tap **Install app** (or ⋮ → **Add to Home screen**).

After it's installed, it works without internet.

## Backups
- **Export backup** opens the share sheet. Pick **Save to Files**, Google Drive, or email it to yourself.
- **Import backup** restores a backup file, or moves your data to a new phone.
- Deleting the app, or clearing the browser's data for the site, deletes your numbers. Export now and then.

## Family
Everyone opens the same link and installs the app. Each person gets their own separate budget. To start someone off with a copy of yours, send them a backup file and have them use **Import backup**.
