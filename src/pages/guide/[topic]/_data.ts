import { lazy } from 'react';

export default function GuideData() {
  return null;
}

export const pages = [
  {
    name: 'welcome',
    displayName: 'welcome',
    pages: [
      {
        name: 'welcome.md',
        displayName: 'Welcome',
        component: lazy(() => import('../_guides/welcome/welcome.md')),
      },
    ],
  },
];
