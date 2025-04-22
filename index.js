
const { spawnSync } = require('child_process');
const { ArgumentParser } = require('argparse');
const fs = require('fs');

const parser = new ArgumentParser();
parser.add_argument('--tags', { help: 'scenarios to run, e.g. @ACNT_022' });
const args = parser.parse_args();

// To handle multiple tags input with OR conditions
args.tags = args.tags.toLowerCase().includes('or') ? `(${args.tags})` : args.tags;

let { tags } = args;

// Check if the tags string contains 'and'
if (tags.includes('and')) {
    // Replace 'and' with space (Cucumber uses space for AND condition)
    // tags = tags.replace(/and/g, ' ');
    args.tags = tags;
} else if (tags.includes(',')) {
    // If it contains a comma, wrap it in parentheses (for OR condition)
    tags = `(${tags.split(',').join(' or ')})`;
    args.tags = tags;
}

spawnSync(`npm run cucumber --exit -- --tags "${args.tags}"`,{ shell: true, stdio: 'inherit' });
// require('./reporter');

spawnSync(`npm run report`, { shell: true, stdio: 'inherit' });
process.exit(0);