/* ============================================
   UniTechOrganization — Project Catalog
   ============================================
   Single source of truth for the Projects section,
   the Home "Featured work" strip, and department
   cross-links. Edit this file; the UI updates
   automatically on the next page load.

   Field guide:
   - id            : unique slug (kebab-case)
   - name          : display name
   - description   : 1–2 factual sentences (from the
                     repo description or repo names —
                     never invented features)
   - category      : one of the filter keys below
                     (software | ai | game | app |
                      robotics | research)
   - technologies  : languages/stack — only what is
                     confirmed (GitHub primary language
                     or repo structure)
   - status        : "In development" | "Prototype" |
                     "Experiment" | "Ongoing"
   - repositoryUrl : GitHub repo (verified)
   - demoUrl       : only if a live deployment exists
   - updated       : "YYYY-MM" last pushed (from GitHub)
   - featured      : true → shown in the Home strip
   ============================================ */

window.UNITECH_PROJECTS = [
    {
        id: "arcengine",
        name: "ArcEngine",
        description: "A game engine targeting a Unity-like experience for Linux and mobile — custom engine architecture, rendering, and tooling built in C++.",
        category: "game",
        technologies: ["C++"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/ArcEngine",
        demoUrl: null,
        updated: "2026-10",
        featured: true
    },
    {
        id: "mirav2",
        name: "MiraV2",
        description: "A modular C++ AI voice assistant for Linux with speech recognition, intent routing, UI automation, screen understanding, and extensible tool execution.",
        category: "ai",
        technologies: ["C++"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/MiraV2",
        demoUrl: null,
        updated: "2026-09",
        featured: true
    },
    {
        id: "unisphere",
        name: "UniSphere",
        description: "A platform for learning and practicing skills — with job and internship listings, learning games, and chat built in.",
        category: "app",
        technologies: ["JavaScript"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/UniSphere",
        demoUrl: null,
        updated: "2026-09",
        featured: true
    },
    {
        id: "unitech-site",
        name: "UniTech-Site",
        description: "This website — the organization's public home. Built with vanilla HTML, CSS, and JavaScript and deployed on GitHub Pages.",
        category: "software",
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/UniTech-Site",
        demoUrl: "https://smdhussain912.github.io/UniTech-Site/",
        updated: "2026-10",
        featured: false
    },
    {
        id: "frieghtbroker-cmr",
        name: "FrieghtBroker CMR",
        description: "A freight brokerage platform built as a full suite — web frontend, backend services, and a mobile app.",
        category: "software",
        technologies: ["JavaScript", "TypeScript"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/FriegthBrokerCMR-Frontend",
        demoUrl: null,
        updated: "2026-10",
        featured: false
    },
    {
        id: "pm-setu",
        name: "PM SETU",
        description: "A full-stack web platform with a JavaScript frontend and a TypeScript backend, deployed live on Vercel.",
        category: "software",
        technologies: ["JavaScript", "TypeScript"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/PM-SETU-Frontend",
        demoUrl: "https://pm-setu-frontend.vercel.app",
        updated: "2026-09",
        featured: false
    },
    {
        id: "arctester",
        name: "ArcTester",
        description: "A mock-test web application built for ECET exam preparation.",
        category: "software",
        technologies: ["TypeScript"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/ArcTester",
        demoUrl: null,
        updated: "2026-10",
        featured: false
    },
    {
        id: "polling-officer-allocation",
        name: "Polling Officer Allocation",
        description: "Backend software for polling-officer allocation — built in JavaScript.",
        category: "software",
        technologies: ["JavaScript"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/Polling-Officer-Allocation-Software-Backend",
        demoUrl: null,
        updated: "2026-10",
        featured: false
    },
    {
        id: "egcor",
        name: "EGCOR",
        description: "A recruitment platform built for the East Godavari Collector Office.",
        category: "software",
        technologies: ["EJS"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/EGCOR",
        demoUrl: null,
        updated: "2026-05",
        featured: false
    },
    {
        id: "web-server",
        name: "College Tech-Fest Web Server",
        description: "A testing web server built for our college tech festival.",
        category: "software",
        technologies: ["EJS"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/Web-server",
        demoUrl: "https://ai-career-web-for-our-collage.vercel.app",
        updated: "2026-07",
        featured: false
    },
    {
        id: "unichat",
        name: "UniChat",
        description: "The UniChat application codebase — a chat application project.",
        category: "app",
        technologies: ["JavaScript"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/UniChat",
        demoUrl: null,
        updated: "2026-08",
        featured: false
    },
    {
        id: "the-system",
        name: "THE-SYSTEM",
        description: "A personal level system inspired by Solo Leveling, built in Java.",
        category: "app",
        technologies: ["Java"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/THE-SYSTEM",
        demoUrl: null,
        updated: "2026-08",
        featured: false
    },
    {
        id: "arc-dev-lab",
        name: "Arc-Dev-Lab",
        description: "An open development lab for coding experiments, mini-projects, prototypes, and hands-on learning across programming, AI/ML, web development, and game development.",
        category: "research",
        technologies: [],
        status: "Ongoing",
        repositoryUrl: "https://github.com/SMDHussain912/Arc-Dev-Lab",
        demoUrl: null,
        updated: "2026-10",
        featured: false
    },
    {
        id: "robotsimulator",
        name: "RobotSimulator",
        description: "An early robotics simulation experiment.",
        category: "robotics",
        technologies: ["Makefile"],
        status: "Experiment",
        repositoryUrl: "https://github.com/SMDHussain912/RobotSimulator",
        demoUrl: null,
        updated: "2026-08",
        featured: false
    }
];

/* Category keys → labels & CSS color classes.
   Keep in sync with the filter chips in index.html. */
window.UNITECH_CATEGORIES = {
    software: { label: "Software", class: "cat-software" },
    ai:       { label: "AI & ML",  class: "cat-ai" },
    game:     { label: "Game Dev", class: "cat-game" },
    app:      { label: "Apps",     class: "cat-app" },
    robotics: { label: "Robotics", class: "cat-robotics" },
    research: { label: "Research", class: "cat-research" }
};
