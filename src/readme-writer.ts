import * as fs from 'node:fs';
import { EOL } from 'node:os';
import { format } from 'prettier';

import { endTokenFormat, startTokenFormat } from './config';
import LogTask from './logtask';

export default function readmeWriter(
  content: string[],
  tokenName: string,
  readmePath: string,
): void {
  const log = new LogTask(tokenName);

  if (!content) {
    log.info(`readmeWriter passed no content from ${tokenName} parser`);
    return;
  }
  log.info(`Looking for the ${tokenName} token in ${readmePath}`);
  // Load the README

  const originalReadme = fs.readFileSync(readmePath).toString();

  const startToken = startTokenFormat.replace('%s', tokenName);
  const endToken = endTokenFormat.replace('%s', tokenName);

  // Find the start token
  const startTokenIndex = originalReadme.indexOf(startToken);
  if (startTokenIndex < 0) {
    throw new Error(`Start token '${startToken}' not found`);
  }
  log.info(`Found the start ${tokenName} token`);

  // Find the end token
  const endTokenIndex = originalReadme.indexOf(endToken);
  if (endTokenIndex < 0) {
    throw new Error(`End token '${endToken}' not found`);
  } else if (endTokenIndex < startTokenIndex) {
    throw new Error('Start token must appear before end token');
  }
  log.info(`Found the end ${tokenName} token`);
  // Build the new README
  const newReadme: string[] = [];
  const len: number = startToken.length;

  newReadme.push(
    originalReadme.slice(0, Math.max(0, startTokenIndex + len)), // Append the beginning
    ...content,
    originalReadme.slice(endTokenIndex), // Append the end
  );

  const fileContent = newReadme.join(EOL);
  // Write the new README
  fs.writeFileSync(readmePath, format(fileContent, { semi: false, parser: 'markdown' }));
  log.info(`successfully updated the ${tokenName} section`);
}
