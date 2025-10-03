Project Maintenance Checklist

1️⃣ Check Node.js

Check the Node version before updating dependencies:

``node -v``

Must be ≥ 22.12.0 (or a current version compatible with Vite).

2️⃣ Update Dependencies

First, check for outdated packages:

``npm outdated``

Upgrade safely (patch + minor):

``npm update``

Upgrade to the latest versions (major) only after checking compatibility:

``npm install <package>@latest --save-dev``

3️⃣ Check TypeScript

After updating TypeScript, check the typing:

``npx tsc --noEmit``

Fix typing errors if they appear after major updates.

4️⃣ Checking ESLint

After updating ESLint plugins (especially react-hooks), run linting:

``npx eslint src --ext .ts,.tsx``

If the new rules require changes, edit .eslintrc.

5️⃣ Building and Dev Server

Check the production bundle build:

``npm run build``

Check the local dev server:

``npm run dev``

Make sure there are no errors and that file paths (fonts, CSS, images) are working correctly.

6️⃣ Cleaning and Caches

If strange errors occur after updates:

``
rm -rf node_modules package-lock.json
npm install
``

7️⃣ Regular Checking

Once a month or before major updates:

``npm outdated``

Update patch/minor versions immediately, check the build and dev server.