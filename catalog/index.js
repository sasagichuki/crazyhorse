import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";


const pages = [
  {
    path: "/",
    title: "An Overview",
    content: pageLoader(() => import("./Welcome.md"))
  },
  {
    path: "/Principles",
    title: "Principles",
    content: pageLoader(() => import("./principles.md"))
  },

  {
    title: 'Visual',
    pages: [
      {
        path: '/patterns',
        title: 'Basics',
        content: pageLoader(() => import("./patterns.md")),
      },
      {
        path: '/other',
        title: 'Color',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Text Hierachy',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Fonts and Weights',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Iconography',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Color',
        content: pageLoader(() => import("./other.md")),
      },
      // Other subpages'
    ]
  },

  {
    title: 'Page Layouts',
    pages: [
      {
        path: '/patterns',
        title: 'Common Elements',
        content: pageLoader(() => import("./patterns.md")),
      },
      {
        path: '/other',
        title: 'Search Bar',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Navigation',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Badges',
        content: pageLoader(() => import("./other.md")),
      },
      // Other subpages'
    ]
  },

  {
    title: 'Containers',
    pages: [
      {
        path: '/patterns',
        title: 'Panels',
        content: pageLoader(() => import("./patterns.md")),
      },
      {
        path: '/other',
        title: 'Cards',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Tabs',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Accordions',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Drawers',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Modals',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Overlays',
        content: pageLoader(() => import("./other.md")),
      },
      {
        path: '/other',
        title: 'Notifications',
        content: pageLoader(() => import("./other.md")),
      },
      // Other subpages'
    ]
  },

  {
    path: "/colors",
    title: "Colors",
    content: pageLoader(() => import("./colors.md"))
  },
  {
    path: "/fonts",
    title: "Fonts",
    content: pageLoader(() => import("./fonts.md"))
  },
  {
    path: "/images",
    title: "Images",
    content: pageLoader(() => import("./images.md")),
  },
  {
    path: "/layout",
    title: "Layout & Grid",
    content: pageLoader(() => import("./layout.md")),
  },
  {
    path: "/icons",
    title: "Icons",
    content: pageLoader(() => import("./icons.md")),
  },
  {
    path: "/navigation",
    title: "Navigation",
    content: pageLoader(() => import("./navigation.md")),
  },

  {
    title: 'Components',
    pages: [
      {
        path: '/patterns',
        title: 'Patterns',
        content: pageLoader(() => import("./patterns.md")),
      },
      {
        path: '/other',
        title: 'Other',
        content: pageLoader(() => import("./other.md")),
      },
      // Other subpages'
    ]
  },
];


const theme = [
  theme: {
    pageHeading: "#ff0000"
  }
];

ReactDOM.render(
  <Catalog title="Atlas Design" pages={pages} theme={theme} />,
  document.getElementById("catalog")
  
);
