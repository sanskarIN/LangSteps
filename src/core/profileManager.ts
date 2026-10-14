/**
 * LangSteps Developer Profile & Ecosystem Manager
 * Centralized registry for official social links, personal pages, and donation endpoints.
 * @author Sanskar <sanskarin@outlook.in>
 */

import { DeveloperProfile } from '../types/index.js';

export const OFFICIAL_PROFILE: DeveloperProfile = {
  name: 'Sanskar',
  handle: 'SanskarCodes',
  tagline: 'Full-Stack Developer, Open Source Creator & Engineering Educator',
  bio: 'Building LangSteps — a multi-language programming and software engineering mastery platform. Passionate about performant polyglot architectures, systems engineering, and interactive education.',
  email: 'sanskarin@outlook.in',
  supportEmail: 'supportramsandesh@gmail.com',
  businessEmail: 'sanskarin.business@gmail.com',
  ecosystem: {
    about: 'https://sanskarin.github.io/about',
    contact: 'https://sanskarin.github.io/contact',
    projects: 'https://sanskarin.github.io/projects',
    blog: 'https://sanskarin.github.io/blog',
    repo: 'https://github.com/sanskarIN/LangSteps'
  },
  socials: {
    github: 'https://github.com/sanskarIN',
    linkedin: 'https://linkedin.com/in/SanskarCodes',
    x: 'https://x.com/SanskarCodes',
    devto: 'https://dev.to/SanskarCodes',
    bluesky: 'https://SanskarCodes.bsky.social',
    instagram: 'https://instagram.com/SanskarCode',
    threads: 'https://threads.com/SanskarCode'
  },
  support: {
    buymeacoffee: 'https://buymeacoffee.com/SanskarCodes',
    razorpay: 'https://razorpay.me/@SanskarCodes',
    directEmail: 'supportramsandesh@gmail.com'
  }
};

export class ProfileManager {
  public static getProfile(): DeveloperProfile {
    return { ...OFFICIAL_PROFILE };
  }

  public static getSocialLinks(): DeveloperProfile['socials'] {
    return { ...OFFICIAL_PROFILE.socials };
  }

  public static getSupportLinks(): DeveloperProfile['support'] {
    return { ...OFFICIAL_PROFILE.support };
  }

  public static getEcosystemUrls(): DeveloperProfile['ecosystem'] {
    return { ...OFFICIAL_PROFILE.ecosystem };
  }
}
