import fs from 'fs';
import { join } from 'path';

const projectsDirectory = join(process.cwd(), 'data', 'motion-graphics');

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath);

  return JSON.parse(fileContents);
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));

  return projects;
}