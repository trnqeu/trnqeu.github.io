export interface SiteConfig {
  title: string;
  /** Fallback meta description, per language, for pages that don't set one. */
  description: {
    it: string;
    en: string;
  };
  author: {
    name: string;
    bio: {
      it: string;
      en: string;
    };
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    bluesky?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Stefano Trinchero | Trnq.eu",
  description: {
    it: "Il sito personale di Stefano Trinchero: idee, racconti, progetti digitali e qualche blocco di codice. Qui vive la serie 'Murder, he prompted'.",
    en: "Stefano Trinchero's personal website: ideas, short stories, digital projects and some code snippets. Home of the 'Murder, he prompted' series.",
  },
  author: {
    name: "Stefano Trinchero",
    bio: {
      it: "",
      en: "",
    },
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/trnqeu",
    linkedin: "https://linkedin.com/in/stefano-trinchero-8569316/",
    bluesky: "https://bsky.app/profile/trnqeu.bsky.social",
    email: "s.trinchero@gmail.com"
  },
  siteUrl: "https://trnq.eu"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;