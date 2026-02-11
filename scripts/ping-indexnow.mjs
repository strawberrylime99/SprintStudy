import { execSync } from 'node:child_process';

const host = process.env.INDEXNOW_HOST || 'sprintstudy.co';
const key = process.env.INDEXNOW_KEY;
const baseUrl = `https://${host}`;

if (!key) {
  console.log('INDEXNOW_KEY is not set. Skipping IndexNow ping.');
  process.exit(0);
}

function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only HEAD^ HEAD', {
      stdio: ['ignore', 'pipe', 'ignore']
    })
      .toString()
      .trim();
    return output ? output.split('\n') : [];
  } catch {
    return [];
  }
}

function toChangedUrls(files) {
  const urls = new Set([
    `${baseUrl}/`,
    `${baseUrl}/templates/sprintstudy`,
    `${baseUrl}/blog`,
    `${baseUrl}/sitemap.xml`
  ]);

  for (const file of files) {
    if (!file.startsWith('src/routes/blog/') || !file.endsWith('.md')) continue;
    const slug = file.split('/').pop()?.replace('.md', '');
    if (!slug) continue;
    urls.add(`${baseUrl}/blog/${slug}`);
  }

  return [...urls];
}

async function main() {
  const changedFiles = getChangedFiles();
  const urlList = toChangedUrls(changedFiles);

  const payload = {
    host,
    key,
    keyLocation: `${baseUrl}/${key}.txt`,
    urlList
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    console.log(`IndexNow response: ${response.status}`);
    if (text) console.log(text.slice(0, 500));
  } catch (error) {
    console.log('IndexNow request failed. Skipping without blocking deploy.');
    console.log(error instanceof Error ? error.message : String(error));
  }
}

main();