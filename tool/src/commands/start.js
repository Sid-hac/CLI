import { bgCyanBright, gray } from 'chalk';

export default function start(config) {
  console.log(bgCyanBright('  Starting the app  '));
  console.log(gray('Received configuration in start -'), config);
}