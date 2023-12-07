import { lazy } from 'react';

export default function GuideData() {
  return null;
}

export const pages = [
  {
    name: 'getting-started',
    displayName: 'Getting Started',
    pages: [
      {
        name: 'welcome',
        displayName: 'Welcome',
        component: lazy(() => import('../_guides/getting-started/welcome.md')),
      },
    ],
  },
];
