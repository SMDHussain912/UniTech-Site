/* ============================================
   UniTechOrganization — Project Catalog
   ============================================
   Single source of truth for the Projects section,
   the Home "featured work" strip, the Research &
   Innovation section, and the department project
   counts.

   HOW THIS FILE WAS VERIFIED (last check: Oct 2026)
   Every entry below maps to a real public repository
   under github.com/SMDHussain912.
   - name/description  : the repository's own title and
                         description (lightly edited for
                         grammar only)
   - technologies      : GitHub's language breakdown for
                         that repository — nothing guessed
   - status            : the honest state of the code
                         ("In development" = actively being
                         built, "Prototype" = early and
                         incomplete, "Experiment" = a spike,
                         "Ongoing" = an always-open lab,
                         "Live" = publicly deployed and
                         reachable at demoUrl)
   - updated           : "YYYY-MM" from GitHub's last push
   - demoUrl           : ONLY listed when the URL was
                         opened and confirmed live
   No users, downloads, customers, revenue or
   performance numbers are claimed anywhere on the site.

   Field guide:
   - id            : unique slug (kebab-case)
   - name          : display name
   - description   : 1–2 factual sentences
   - category      : software | ai | game | app |
                     cybersecurity | robotics | creative |
                     research  (must match a department
                     `category` in data/departments.js)
   - technologies  : confirmed languages/stack
   - status        : see statuses below
   - repositoryUrl : verified GitHub repository
   - demoUrl       : live deployment, or null
   - relatedRepos  : optional [{name, url}] for projects
                     that ship as more than one repository
   - license       : optional, from GitHub
   - updated       : "YYYY-MM" last push
   - featured      : true → shown in the Home strip
   - note          : optional honest caveat shown on the card
   ============================================ */

window.UNITECH_PROJECTS = [
    {
        id: "arcengine",
        name: "ArcEngine",
        description: "A game engine aiming at a Unity-like experience for Linux and mobile — custom engine architecture, rendering, and tooling.",
        category: "game",
        technologies: ["C++", "GLSL", "CMake", "Python"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/ArcEngine",
        demoUrl: null,
        license: "MIT",
        updated: "2026-10",
        featured: true
    },
    {
        id: "mirav2",
        name: "MiraV2",
        description: "A modular C++ AI voice assistant for Linux with speech recognition, intent routing, UI automation, screen understanding, and extensible tool execution.",
        category: "ai",
        technologies: ["C++", "C", "Python", "CMake"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/MiraV2",
        demoUrl: null,
        updated: "2026-09",
        featured: true
    },
    {
        id: "unisphere",
        name: "UniSphere",
        description: "A platform for learning and practising skills — with job and internship listings, learning games, and chat built in.",
        category: "app",
        technologies: ["JavaScript", "CSS", "HTML"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/UniSphere",
        demoUrl: null,
        updated: "2026-09",
        featured: true
    },
    {
        id: "freight-broker-cmr",
        name: "FreightBroker CMR",
        description: "A freight brokerage platform built as a three-part suite: a JavaScript web frontend, JavaScript backend services, and a TypeScript mobile app. The public web app is a carrier-vetting control tower.",
        category: "software",
        technologies: ["JavaScript", "TypeScript", "CSS"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/FriegthBrokerCMR-Frontend",
        demoUrl: "https://freightbrokercmr.vercel.app",
        relatedRepos: [
            { name: "FriegthBrokerCMR-Backend", url: "https://github.com/SMDHussain912/FriegthBrokerCMR-Backend" },
            { name: "FriegthBrokerCMR-Mobile", url: "https://github.com/SMDHussain912/FriegthBrokerCMR-Mobile" }
        ],
        updated: "2026-10",
        featured: true
    },
    {
        id: "pm-setu",
        name: "PM SETU",
        description: "A full-stack web platform with a JavaScript frontend and a TypeScript backend.",
        category: "software",
        technologies: ["JavaScript", "TypeScript", "CSS"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/PM-SETU-Frontend",
        demoUrl: null,
        relatedRepos: [
            { name: "PM-SETU-Backend", url: "https://github.com/SMDHussain912/PM-SETU-Backend" }
        ],
        updated: "2026-09",
        featured: false,
        note: "The earlier Vercel deployment for this project is no longer reachable, so no demo link is shown."
    },
    {
        id: "arctester",
        name: "ArcTester",
        description: "A mock-test web application built for ECET exam preparation.",
        category: "software",
        technologies: ["TypeScript", "CSS"],
        status: "In development",
        repositoryUrl: "https://github.com/SMDHussain912/ArcTester",
        demoUrl: null,
        updated: "2026-10",
        featured: false
    },
    {
        id: "polling-officer-allocation",
        name: "Polling Officer Allocation",
        description: "Backend software for allocating polling officers.",
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
        technologies: ["EJS", "JavaScript"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/EGCOR",
        demoUrl: null,
        updated: "2026-05",
        featured: false
    },
    {
        id: "techfest-web-server",
        name: "College Tech-Fest Web Server",
        description: "A testing web server written for a college technology festival.",
        category: "software",
        technologies: ["EJS", "JavaScript", "CSS", "HTML"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/Web-server",
        demoUrl: null,
        updated: "2026-07",
        featured: false,
        note: "The original Vercel deployment is no longer reachable, so no demo link is shown."
    },
    {
        id: "unichat",
        name: "UniChat",
        description: "The UniChat application codebase — a chat application in its early stage.",
        category: "app",
        technologies: ["JavaScript", "CSS", "HTML"],
        status: "Prototype",
        repositoryUrl: "https://github.com/SMDHussain912/UniChat",
        demoUrl: null,
        updated: "2026-08",
        featured: false
    },
    {
        id: "the-system",
        name: "THE-SYSTEM",
        description: "A personal level system inspired by Solo Leveling, with a Java core and a JavaScript web interface.",
        category: "app",
        technologies: ["Java", "JavaScript", "CSS", "HTML"],
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
        description: "An early robotics simulation experiment with C++ and C sources and a CMake build.",
        category: "robotics",
        technologies: ["C++", "C", "CMake"],
        status: "Experiment",
        repositoryUrl: "https://github.com/SMDHussain912/RobotSimulator",
        demoUrl: null,
        updated: "2026-08",
        featured: false
    }
];

/* Category keys → labels & CSS color classes.
   Keep in sync with data/departments.js (`category`). */
window.UNITECH_CATEGORIES = {
    software:     { label: "Software",   class: "cat-software" },
    ai:           { label: "AI & ML",    class: "cat-ai" },
    game:         { label: "Game Dev",   class: "cat-game" },
    app:          { label: "Apps",       class: "cat-app" },
    cybersecurity:{ label: "Security",   class: "cat-cyber" },
    robotics:     { label: "Robotics",   class: "cat-robotics" },
    creative:     { label: "Creative",   class: "cat-creative" },
    research:     { label: "Research",   class: "cat-research" }
};

/* Status keys → label wording + dot colour class. */
window.UNITECH_STATUSES = {
    "Live":           { class: "status-live" },
    "In development": { class: "status-dev" },
    "Prototype":      { class: "status-proto" },
    "Experiment":     { class: "status-exp" },
    "Ongoing":        { class: "status-ongoing" }
};
