#!/bin/sh

set -e

echo "Injecting npm auth..."

echo "//npm.pkg.github.com/:_authToken=$NODE_AUTH_TOKEN" >> .npmrc

echo .npmrc

echo "Installing deps..."
pnpm install --frozen-lockfile

echo "Building..."
pnpm build