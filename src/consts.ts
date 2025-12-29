import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sea of thoughts",
  EMAIL: "martinezsabathier@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Blog para hablar de **cosas**.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Mis escritos.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Colección de mis proyectos",
};

export const SOCIALS: Socials = [
  { 
    NAME: "instagram",
    HREF: "https://www.instagram.com/_javiermartinezs/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/javier-mart%C3%ADnez-sabathier/",
  }
];
