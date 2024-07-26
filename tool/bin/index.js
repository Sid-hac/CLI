#!/usr/bin/env node

import arg from "arg";
import chalk from "chalk";
import path from "path";
import pkgUP from "pkg-up"

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  if (args["--start"]) {

    const pkgPath = pkgUP.pkgUpSync({cwd : process.cwd()});
    const pkg = import(pkgPath);
    if(pkg.tool) {
        console.log("found config");
         // TODO : do something with package
    } else {
        console.log(chalk.yellow("no config found"));
         // TODO : do something with package
    }
   
    console.log(chalk.bgCyanBright("starting the app"));
  }
} catch (error) {
  console.log(chalk.yellow(error.message));
  usage();
}
function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
    ${chalk.greenBright("--start")}\tStarts the app
    ${chalk.greenBright("--build")}\tBuilds the app`);
}
