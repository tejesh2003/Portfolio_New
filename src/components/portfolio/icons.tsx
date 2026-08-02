import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function GitHubIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.34-3.79-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.31 3.11 1.16.9-.25 1.87-.38 2.83-.39.96 0 1.93.13 2.83.39 2.16-1.47 3.11-1.16 3.11-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.65.78.54 4.47-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z"/>
    </svg>
  );
}
export function LinkedInIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.94-1.8-2.94-1.8 0-2.07 1.4-2.07 2.85V21h-4z"/>
    </svg>
  );
}
export function LeetCodeIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.48 3.38a1.5 1.5 0 0 1 2.13 2.12l-3.02 3.02 4.25 4.24a1.5 1.5 0 1 1-2.12 2.13l-4.24-4.25-3.03 3.03a3 3 0 0 0 0 4.24l3.03 3.03a3 3 0 0 0 4.24 0l2.02-2.02a1.5 1.5 0 1 1 2.13 2.12l-2.03 2.03a6 6 0 0 1-8.48 0l-3.03-3.03a6 6 0 0 1 0-8.49z"/>
      <path d="M20 13.5h-8a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 1 1 0 3z"/>
    </svg>
  );
}
export function CodeChefIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.7 0 3 1.3 3 3 0 1.3-.8 2.4-2 2.8V13h-2v-2.2c-1.2-.4-2-1.5-2-2.8 0-1.7 1.3-3 3-3zM7 17c0-2.2 2.2-4 5-4s5 1.8 5 4v1H7v-1z"/>
    </svg>
  );
}
export function HackerRankIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 1 3 6v12l9 5 9-5V6l-9-5zm3 16.5c0 .1-.1.2-.2.2h-1.2c-.1 0-.2-.1-.2-.2v-4.3H10.5v4.3c0 .1-.1.2-.2.2H9.1c-.1 0-.2-.1-.2-.2V6.7c0-.1.1-.2.2-.2h1.2c.1 0 .2.1.2.2v3.9h2.9V6.7c0-.1.1-.2.2-.2h1.2c.1 0 .2.1.2.2v10.8z"/>
    </svg>
  );
}

export const socialIcon = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
  codechef: CodeChefIcon,
  hackerrank: HackerRankIcon,
};