export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Trnq-eu",
  description: "Stefano Trinchero's Personal Website. Contains human slop, code snippets, ideas on AI, programming, archives, time and whatever goes through my mind. Home of the 'Murder, he prompted' series.",
  author: {
    name: "Stefano Trinchero",
    bio: "Data scientist, Occasional writer, Self-taught Grind Coder.",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/trnq-eu",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "s.trinchero@gmail.com"
  },
  siteUrl: "https://trnq.eu"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;