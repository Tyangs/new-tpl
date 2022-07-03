import { Command } from 'commander';

import pkg, { LOGO } from './constants/pkg';
import { initConfig } from './utils/initConfig';

const program = new Command('tpl')
  .version(pkg.version, '-V --version')
  .description(`${LOGO} An automation tool for generation file template.`);

program
  .command('init-config')
  .alias('init')
  .option('-p --path <dir path>')
  .description('Init new-tpl config files')
  .action(() => {
    return initConfig();
  });

// program
//   .command('count-words <project-root>')
//   .alias('cw')
//   .option('-o --output-file <file-path>', 'Output collecting files content to file')
//   .description('Select a project and return all words counts')
//   .action((path: string, option: ICountWordOptions) => {
//     return countWord(path, option);
//   });

// program
//   .command('parse-words <entry-file>')
//   .alias('pw')
//   .description(
//     `Select a entry file, we'll parse all import files by this file.
// We hope that the file should be a module.
// After parsing the words, we'll output two files under your project root directory.
// One for checking the words, and another for collecting the words those will be uploaded to https://meerkat.automizely.me/ later.`
//   )
//   .action((entryFile: string) => {
//     return parse(entryFile);
//   });

// program.parse(process.argv);
