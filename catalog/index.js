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
    title: 'Foundations',
    pages: [
      {
        path: '/logo',
        title: 'The d.light Brand',
        content: pageLoader(() => import("./logo.md")),
      },
      {
        path: '/grids',
        title: 'Grids',
        content: pageLoader(() => import("./grids.md")),
      },
      {
        path: '/colors',
        title: 'Color Palette',
        content: pageLoader(() => import("./colors.md")),
      },
      {
        path: '/fonts',
        title: 'Fonts',
        content: pageLoader(() => import("./fonts.md")),
      },
      {
        path: '/icons',
        title: 'Illustration & Icons',
        content: pageLoader(() => import("./icons.md")),
      },
      {
        path: '/typography',
        title: 'Typography',
        content: pageLoader(() => import("./typography.md")),
      },
      {
        path: '/spacing',
        title: 'Spacing',
        content: pageLoader(() => import("./other.md")),
      },
      // Other subpages'
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        path: '/charts',
        title: 'Data & Charts',
        content: pageLoader(() => import("./charts.md")),
      },
      {
        path: '/navigation',
        title: 'Navigation',
        content: pageLoader(() => import("./navigation.md")),
      },
      {
        path: '/cards',
        title: 'Cards',
        content: pageLoader(() => import("./cards.md")),
      },
      {
        path: '/buttons',
        title: 'Buttons',
        content: pageLoader(() => import("./buttons.md")),
      },
      {
        path: '/modals',
        title: 'Modals',
        content: pageLoader(() => import("./navigation.md")),
      },
      {
        path: '/tables',
        title: 'Tables',
        content: pageLoader(() => import("./cards.md")),
      },
      {
        path: '/lists',
        title: 'Lists',
        content: pageLoader(() => import("./buttons.md")),
      },
      {
        path: '/checkboxes',
        title: 'Checkboxes',
        content: pageLoader(() => import("./navigation.md")),
      },
      {
        path: '/tables',
        title: 'Tables',
        content: pageLoader(() => import("./tables.md")),
      },
      {
        path: '/text_areas',
        title: 'Text Areas',
        content: pageLoader(() => import("./buttons.md")),
      },
      {
        path: '/tabs',
        title: 'Tabs',
        content: pageLoader(() => import("./cards.md")),
      },
      {
        path: '/header_footer',
        title: 'Headers and Footers',
        content: pageLoader(() => import("./buttons.md")),
      },

      // Other subpages'
    ]
  },
  {
    title: 'Downloads',
    pages: [
      {
        path: '/logo',
        title: 'D.light Logo',
        content: pageLoader(() => import("./dlight_logo.md")),
      },
      {
        path: '/updates',
        title: 'Updates',
        content: pageLoader(() => import("./updates.md")),
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
  <Catalog 
    title="Atlas Design"
    pages={pages} 
    logoSrc={"dlight.svg"}
    sidebarColor={{Text: "#eeff00"}}
    theme={
      {
        pageHeadingHeight: "200",
        textColor: "#4A4E53",
        linkColor: "#FF5555",
        pageHeadingBackground: "#FF4612",
        background: "#FFFFFF",
        navBarBackground: "#E3E2DF",
        brandColor: "#FF4612",
        sidebarColor: "#E3E2DF",
        sidebarColorActive: "#FF4612",
        sidebarColorActive: "#FFFFFF",
      }
    } 
    />,
  document.getElementById("catalog")
  
);