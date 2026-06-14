export async function buildDocuments() {
  const documents = [];

  const response = await fetch("/data.json");
  const data = await response.json();

  // =========================
  // SKILLS
  // =========================

  data.technical_skills.languages.forEach((language) => {
    documents.push({
      id: `skill-${language.toLowerCase()}`,
      type: "skill",
      title: language,
      content: `${language} programming language`,
      metadata: {
        category: "language",
      },
      pageName: "About Me",
      route: "/about",
      anchor: "technical-skills",
      url: "/about#technical-skills",
    });
  });

  data.technical_skills.frameworks.forEach((framework) => {
    documents.push({
      id: `skill-${framework.toLowerCase().replace(/\s+/g, "-")}`,
      type: "skill",
      title: framework,
      content: `${framework} framework library technology`,
      metadata: {
        category: "framework",
      },
      pageName: "About Me",
      route: "/about",
      anchor: "technical-skills",
      url: "/about#technical-skills",
    });
  });

  data.technical_skills.tools.forEach((tool) => {
    documents.push({
      id: `skill-${tool.toLowerCase().replace(/\s+/g, "-")}`,
      type: "skill",
      title: tool,
      content: `${tool} development tool`,
      metadata: {
        category: "tool",
      },
      pageName: "About Me",
      route: "/about",
      anchor: "technical-skills",
      url: "/about#technical-skills",
    });
  });

  // =========================
  // EDUCATION
  // =========================

  data.academic_education.forEach((education, index) => {
    documents.push({
      id: `education-${index + 1}`,
      type: "education",
      title: education.institution,
      content: `
        ${education.institution}
        ${education.level_type}
        ${education.major}
        ${education.status}
        ${education.focus_skills.join(" ")}
      `,
      metadata: {
        major: education.major,
        status: education.status,
      },
      pageName: "About Me",
      route: "/about",
      anchor: "academic-education",
      url: "/about#academic-education",
    });
  });

  // =========================
  // PROJECTS
  // =========================

  data.projects.forEach((project) => {
    documents.push({
      id: `project-${project.project_name}`,
      type: "project",

      title: project.project_name,

      content: `
        ${project.project_name}
        ${project.description}
        ${project.technologies.join(" ")}
      `,

      metadata: {
        technologies: project.technologies,
        github: project.github_repository,
      },
      pageName: "Projects",
      route: "/projects",
      anchor: null,
      // anchor: project.project_name,
      url: "/projects",
    });
  });

  // =========================
  // CONTACTS
  // =========================

  data.contacts.forEach((contact) => {
    documents.push({
      id: `contact-${contact.platform_name.toLowerCase()}`,
      type: "contact",

      title: contact.platform_name,

      content: `
        ${contact.platform_name}
        ${contact.url}
      `,

      metadata: {
        url: contact.url,
      },
      pageName: "Contacts",
      route: "/contacts",
      anchor: null,
      // anchor: platform_name,
      url: "/contacts",
    });
  });

  return documents;
}
