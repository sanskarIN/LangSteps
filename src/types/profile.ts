/**
 * LangSteps Developer Profile & Social Ecosystem Types
 * @author Sanskar Yadav <sanskarin@outlook.in>
 */

export interface SocialLinks {
  github: string;
  linkedin: string;
  x: string;
  devto: string;
  bluesky: string;
  instagram: string;
  threads: string;
}

export interface SupportLinks {
  buymeacoffee: string;
  razorpay: string;
  directEmail: string;
}

export interface EcosystemUrls {
  about: string;
  contact: string;
  projects: string;
  blog: string;
  repo: string;
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  tagline: string;
  bio: string;
  email: string;
  supportEmail: string;
  businessEmail: string;
  ecosystem: EcosystemUrls;
  socials: SocialLinks;
  support: SupportLinks;
}

export interface ExecutionRequest {
  language: 'python' | 'javascript' | 'typescript' | 'csharp' | 'rust';
  code: string;
  stdin?: string;
  timeoutMs?: number;
}

export interface ExecutionResult {
  language: string;
  stdout: string;
  stderr: string;
  exitCode: number;
  durationMs: number;
  hasErrors: boolean;
  status: 'success' | 'runtime_error' | 'syntax_error' | 'compile_error' | 'timeout';
}
