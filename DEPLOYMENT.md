# Netlify deployment

The npm application lives in `smartmall-frontend`, not the repository root.
Its existing `package.json` includes the `build` script and its dependencies
are recorded in `package-lock.json`. Do not initialize another npm project
at the repository root to fix a missing-manifest error.

Use the repository-root `netlify.toml` as the single build configuration:

- Base directory: `smartmall-frontend`
- Build command: `npm ci --include=dev && npm run build`
- Publish directory: `dist` (relative to the base directory)

The resulting publish path is `smartmall-frontend/dist`. Keep any matching
Netlify dashboard settings aligned with these values, and do not add a second
`netlify.toml` inside the frontend with a different base directory.

The build command installs the locked frontend dependencies before invoking
Vite. `--include=dev` ensures that Vite and its React plugin are available even
when the environment omits development dependencies. This also supports CLI
deployments that start the build without installing dependencies first.

After these changes reach the connected branch, retry the deployment. The
build log should show npm running in `smartmall-frontend`, where the manifest
already exists. An error looking for `/opt/build/repo/package.json` indicates
that the build is still running from the wrong directory.

This configuration deploys only the React frontend. The Java backend requires
separate hosting; configure `VITE_API_URL` in Netlify to point to its public
API endpoint ending in `/api` before building the frontend.
