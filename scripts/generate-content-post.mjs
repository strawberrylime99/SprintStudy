import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TOPICS_PATH = path.join(ROOT, 'content', 'automation-topics.json');
const BLOG_DIR = path.join(ROOT, 'src', 'routes', 'blog');
const DRY_RUN = process.argv.includes('--dry-run');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function toIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function dateStamp() {
  return toIsoDate().replace(/-/g, '');
}

function buildUniqueSlug(baseSlug) {
  let slug = baseSlug;
  let counter = 2;
  while (fs.existsSync(path.join(BLOG_DIR, `${slug}.md`))) {
    slug = `${baseSlug}-${dateStamp()}-${counter}`;
    counter += 1;
  }
  return slug;
}

function getExistingBlogSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));
}

function getRelatedLinks(topics, topic, index) {
  const existingSlugs = new Set(getExistingBlogSlugs());
  const prev = topics[(index - 1 + topics.length) % topics.length];
  const next = topics[(index + 1) % topics.length];

  const closeLinks = [prev, next]
    .filter((item) => item.slug !== topic.slug && existingSlugs.has(item.slug))
    .map((item) => ({ title: item.title, slug: item.slug }));

  if (closeLinks.length >= 2) return closeLinks.slice(0, 2);

  const fallback = topics
    .filter((item) => item.slug !== topic.slug && existingSlugs.has(item.slug))
    .slice(0, 2)
    .map((item) => ({ title: item.title, slug: item.slug }));

  return [...closeLinks, ...fallback].slice(0, 2);
}

function getActionBlock(topic) {
  const slug = topic.slug.toLowerCase();

  if (slug.includes('grade')) {
    return `## Grade target workflow

1. Set your minimum acceptable final grade.
2. Track current weighted grade.
3. Calculate required score on the next major task.
4. Shift time blocks toward the highest-weight assignment.`;
  }

  if (slug.includes('time-block')) {
    return `## Time block blueprint

- Weekdays: one short execution block (45-60 minutes).
- Midweek: one medium block (90 minutes) for drafting.
- Weekend: one deep block (2-3 hours) for revision and submission.
- Buffer: one catch-up slot for surprises.`;
  }

  if (slug.includes('working-full-time')) {
    return `## Work + class reality check

Treat your week like fixed inventory. If you only have 8-10 study hours, allocate those hours intentionally instead of overplanning 20.`;
  }

  return `## Weekly implementation steps

1. List all deliverables due in the next 14 days.
2. Assign each deliverable to one specific study block.
3. Leave one overflow block open.
4. Review progress every Sunday in 10 minutes.`;
}

function buildPost(topic, dateIso, relatedTopics) {
  const tags = `[${topic.tags.map((tag) => `"${tag}"`).join(', ')}]`;
  const relatedLinks = relatedTopics.length
    ? relatedTopics.map((item) => `- [${item.title}](/blog/${item.slug})`).join('\n')
    : '- [SprintStudy Blog](/blog)\n- [SprintStudy Template](/templates/sprintstudy)';

  return `---
layout: blog
title: "${topic.title}"
description: "${topic.description}"
date: ${dateIso}
tags: ${tags}
---

${topic.primaryKeyword} is easier when your planning system is simple and repeatable.
This guide focuses on fast implementation for students in accelerated terms.

## ${topic.primaryKeyword}: fast rules

- Plan by week, not by motivation.
- Track each assignment in one place.
- Protect one catch-up block every week.

## Why accelerated classes feel hard

In short terms, one missed deadline can affect multiple upcoming weeks.
A clear weekly plan gives you earlier decisions and less panic.

${getActionBlock(topic)}

## Common mistakes to avoid

- Building a new planning system every week.
- Tracking grades without next-assignment targets.
- Ignoring buffer time for unexpected schedule changes.

## Use SprintStudy to set this up once

Use the [SprintStudy template bundle](/templates/sprintstudy) to get a dashboard, assignment tracker, grade calculator, and weekly checklist.

## Related guides

${relatedLinks}
`;
}

function main() {
  if (!fs.existsSync(TOPICS_PATH)) {
    throw new Error(`Missing topic file: ${TOPICS_PATH}`);
  }
  if (!fs.existsSync(BLOG_DIR)) {
    throw new Error(`Missing blog directory: ${BLOG_DIR}`);
  }

  const config = readJson(TOPICS_PATH);
  if (!Array.isArray(config.topics) || config.topics.length === 0) {
    throw new Error('automation-topics.json must include a non-empty topics array.');
  }

  const cursor = Number.isInteger(config.cursor) ? config.cursor : 0;
  const topicIndex = cursor % config.topics.length;
  const topic = config.topics[topicIndex];
  const relatedTopics = getRelatedLinks(config.topics, topic, topicIndex);
  const dateIso = toIsoDate();
  const slug = buildUniqueSlug(topic.slug);
  const postPath = path.join(BLOG_DIR, `${slug}.md`);
  const postBody = buildPost(topic, dateIso, relatedTopics);

  if (DRY_RUN) {
    console.log(`[dry-run] Next topic index: ${cursor}`);
    console.log(`[dry-run] New slug: ${slug}`);
    console.log(`[dry-run] Would write: ${postPath}`);
    return;
  }

  fs.writeFileSync(postPath, postBody, 'utf8');
  config.cursor = cursor + 1;
  writeJson(TOPICS_PATH, config);

  console.log(`Created post: src/routes/blog/${slug}.md`);
  console.log(`Advanced topic cursor to: ${config.cursor}`);
}

main();