# Zero-Based Budget

A budget app you install on your phone. Everyone's numbers stay on their own phone. If someone turns on Drive backup, a copy also goes to their own Google Drive. Nothing else is sent anywhere.

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

## Google Drive auto-backup (one-time setup, about 15 minutes)

Do this after the app is on GitHub Pages, because Google needs the app's web address. You only do it once. Family members just tap **Turn on Google Drive backup** and sign in with their own Google account.

1. Go to https://console.cloud.google.com and sign in. Accept the terms if asked.
2. **Create a project:** click the project picker at the top → **New project** → name it `Budget` → **Create**. Make sure it's selected at the top.
3. **Turn on Drive:** search the top bar for **Google Drive API** → open it → **Enable**.
4. **Set up the sign-in screen:** search for **Google Auth Platform** (it may be called **OAuth consent screen**) → **Get started**.
   - App name: `Zero-Based Budget`. User support email: yours. → **Next**.
   - Audience: **External** → **Next**. Contact email: yours. → **Next** → agree → **Create**.
5. **Choose who can sign in:** go to **Audience**.
   - Easiest for family: under **Test users**, click **Add users** and add each family member's Gmail address (up to 100).
   - Or click **Publish app** so anyone with the link can use it. The app only asks for the "files this app created" permission, so Google doesn't require a review.
6. **Create the app's ID:** go to **Clients** → **Create client**.
   - Application type: **Web application**. Name: `Budget app`.
   - **Authorized JavaScript origins:** add `https://<your-username>.github.io`
   - **Authorized redirect URIs:** add `https://<your-username>.github.io/budget/` (the exact app link, with the `/` at the end).
   - Click **Create**, then copy the **Client ID**. It looks like `1234-abc.apps.googleusercontent.com`.
7. **Put the ID in the app:** open `index.html`, search for `GOOGLE_CLIENT_ID`, and paste it between the quotes:
   `const GOOGLE_CLIENT_ID='1234-abc.apps.googleusercontent.com';`
   Change the **App version** date too, then upload `index.html` (and `sw.js`) to GitHub.
8. Open the app. At the bottom, tap **☁ Turn on Google Drive backup** and sign in.

The Client ID isn't a password, so it's fine for it to be public on GitHub.

**How it behaves:**
- A few seconds after any change, the app saves one file, `Zero-Based Budget backup.json`, to that person's Drive. It also saves right away when the app is closed. Nothing runs while the app is closed, so battery use is tiny.
- The app can only see that one file, not the rest of the person's Drive.
- Google's sign-in lasts about an hour. If you edit later than that, a banner asks you to **Reconnect** (one tap, usually no password). Until then, your changes are still safe on the phone; they just aren't in Drive yet.
- **New phone:** install the app, tap **Turn on Google Drive backup**, sign in. It finds your backup and asks whether to load it.
- **Restore from Drive** at the bottom of the app reloads the Drive copy at any time.

## Backups
- **Export backup** opens the share sheet. Pick **Save to Files**, Google Drive, or email it to yourself.
- **Import backup** restores a backup file, or moves your data to a new phone.
- Deleting the app, or clearing the browser's data for the site, deletes your numbers. Export now and then.
- **New year:** on the Dashboard, open **⚙ Settings** and tap **Start 2027** (or whatever next year is). It saves a backup of the old year first, then clears every month's entries. Recurring items, allowances, goals (with what they've saved so far), assets and learned categories stay.

## Bank transactions (CSV)
1. In online banking, download your account activity as a **CSV** file (Wells Fargo: Account activity → Download → Comma delimited).
2. In the app, tap **Import bank CSV** at the bottom and pick the file.
3. Each transaction goes into its month under "This month only", already marked Done and sorted into a category. Change a category once and it remembers that name next time.
- If a recurring item that isn't checked off yet has the exact same amount (for example a $637.33 car payment), it gets checked off instead of added twice.
- Importing the same file again skips anything already imported, so you can download your latest activity each month and import it again.
- Only transactions from the budget's year come in. Money in counts as Income, including transfers from your own savings, so delete those if you don't want them counted.

## Dashboard extras
- **Paycheck check:** enter your next payday, how often you're paid and your take-home pay. For this paycheck and the next one, the app adds up the recurring bills due before the following payday and tells you what's left to spend, or warns you (with a banner) if you'll be short. A bill counts on its due date, so give recurring items a due date in a month page.
- **Search:** type a name, category, amount, date or month to find any entry. Tap a result to open that month.
- **Edit categories:** under Allowances → ✎ Edit categories, add, rename or remove categories. Removing one moves its entries to Other.
- **Theme:** ⚙ Settings → Theme (10 color themes) and Light or dark.
- **Daily quote and streak:** a new quote each day, and a streak that grows each day you open the app.
- **Money mindset:** a short weekly exercise with space for notes, based on ideas from *The Psychology of Money* and *Die with Zero* (in our own words).

## Family
Everyone opens the same link and installs the app. Each person gets their own separate budget. To start someone off with a copy of yours, send them a backup file and have them use **Import backup**.
