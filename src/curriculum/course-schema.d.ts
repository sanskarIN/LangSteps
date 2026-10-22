/**
 * Shared shape for the browser-based Go, SQL and C# lessons.
 * This ambient declaration is consumed by learning.ts without emitting a JS file.
 * scripts/validate-curricula.cjs checks the published data files at test/build time.
 */
interface LangStepsLesson {
  id: string;
  title: string;
  category: string;
  summary: string;
  explanation: string;
  code: string;
  challenge: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface LangStepsCourse {
  slug: string;
  title: string;
  summary: string;
  lessons: LangStepsLesson[];
}

interface Window {
  LANGSTEPS_COURSE?: LangStepsCourse;
}
