import fs from 'fs';
import { join } from 'path';

const projectsDirectory = join(process.cwd(), 'data');

// export function getProjectSlugs() {
//   return fs.readdirSync(projectsDirectory);
// }

export function getProjectBySlug(slug) {
  // const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(projectsDirectory, `${slug}.json`);
  const fileContents = fs.readFileSync(fullPath);

  return JSON.parse(fileContents);
}

export function getAllProjects() {
  const slugs = fs.readdirSync(projectsDirectory);
  const projects = slugs.map((slug) => slug.replace(/\.json$/, ''));
  // console.log(projects);
  return projects;
}