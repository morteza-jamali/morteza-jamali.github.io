#!/usr/bin/env bash

# Install nodejs packages
npm config set '@morajlab:registry' https://npm.pkg.github.com && \
npm i && \
npx --no-install husky install

# Install `Zola`
if ! command -v zola &> /dev/null; then
    cd /tmp/ && curl -sLO \
    https://github.com/barnumbirr/zola-debian/releases/download/v0.15.3-1/zola_0.15.3-1_amd64_bullseye.deb && \
    sudo dpkg -i zola_0.15.3-1_amd64_bullseye.deb
else
    echo $(zola --version)
    echo "INFO:: Zola is already installed."
fi