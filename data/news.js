/* ============================================
   UniTechOrganization — News & Updates
   ============================================
   Only real, checkable entries belong in this list.

   Rules for this file:
   - Never announce a project, release, partnership,
     or number that did not actually happen.
   - `date` is "YYYY-MM" (month precision keeps it
     honest — we do not publish invented week/day
     timelines). The UI formats it as "Oct 2026".
   - `link` is optional and must be a URL that was
     opened and confirmed.
   - `tag` is free text and is shown as a small badge
     (Website, Open source, Project, Research, …).

   To add an update, copy an object below and edit it.
   The section also renders a "Latest repository
   activity" list, which is generated from the
   `updated` field in data/projects.js — so any project
   you touch there automatically shows up as recent
   activity here.
   ============================================ */

window.UNITECH_NEWS = [
    {
        date: "2026-10",
        tag: "Website",
        title: "This site is rebuilt around the organization's identity",
        body: "UniTech-Site no longer reads as a three-service studio page. It now presents the organization as a multidisciplinary technology ecosystem: eight departments, a searchable project catalog, an honest status label on every project, a research section, and a contributions guide. It is still plain HTML, CSS and JavaScript so it can stay on GitHub Pages.",
        link: "https://github.com/SMDHussain912/UniTech-Site"
    },
    {
        date: "2026-10",
        tag: "Open source",
        title: "ArcEngine is published under the MIT licence",
        body: "ArcEngine — the game engine aimed at a Unity-like workflow for Linux and mobile — ships under the MIT licence, so anyone can read, build and learn from the source.",
        link: "https://github.com/SMDHussain912/ArcEngine"
    },
    {
        date: "2026-10",
        tag: "Project",
        title: "FreightBroker CMR web app is deployed",
        body: "The freight-brokerage web app is publicly reachable and presents a carrier-vetting control tower, with the backend service and the mobile app published as separate repositories alongside it.",
        link: "https://freightbrokercmr.vercel.app"
    }
];
