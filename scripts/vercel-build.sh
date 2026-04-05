#!/bin/sh
set -e

echo "Injecting npm auth..."

cat <<EOF > .npmrc
@your-scope:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
EOF

echo "Installing deps..."
pnpm install --frozen-lockfile

echo "Building..."
pnpm build