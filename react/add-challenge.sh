#!/bin/bash
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json'));
if (!pkg.workspaces.includes('$1')) {
  pkg.workspaces.push('$1');
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
}
"
npm install
