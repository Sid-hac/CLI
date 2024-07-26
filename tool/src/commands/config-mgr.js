import { yellow } from 'chalk';
import { sync } from 'pkg-up';

export default function getConfig() {
  const pkgPath = sync({cwd: process.cwd()});
  const pkg = require(pkgPath);
  if (pkg.tool) {
    console.log('Found configuration', pkg.tool);
    return pkg.tool;
  } else {
    console.log(yellow('Could not find configuration, using default'));
    return { port: 1234 };
  }
}