/* ============================================
   UniTechOrganization — Technology Departments
   ============================================
   The eight areas UniTechOrganization works in or
   plans to work in.

   `maturity` is an honest label, not a marketing one:
     "active"   → public projects exist and are moving
     "emerging" → one early project or experiment
     "planned"  → planned area, no public project yet

   `category` links a department to project entries in
   data/projects.js. Project counts are never hard-coded
   here — the UI counts matching projects at render time,
   so the two files can't drift apart.

   Fields:
   - id       : unique slug (kebab-case)
   - name     : display name
   - category : projects.js category key this department owns
   - icon     : inner markup for a 24x24 stroke SVG (no <svg> tag)
   - summary  : one-sentence purpose
   - focus    : 3–4 short bullet points
   - maturity : "active" | "emerging" | "planned"
   - note     : optional honest clarification (required for "planned")
   ============================================ */

window.UNITECH_DEPARTMENTS = [
    {
        id: "software-engineering",
        name: "Software Engineering",
        category: "software",
        icon: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        summary: "Websites, web applications, APIs, backend systems, developer tools, and software products.",
        focus: [
            "Web apps, APIs & static sites",
            "Backend services & data models",
            "Developer tooling"
        ],
        maturity: "active"
    },
    {
        id: "ai-machine-learning",
        name: "Artificial Intelligence & Machine Learning",
        category: "ai",
        icon: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path>',
        summary: "AI applications, machine learning experiments, intelligent systems, and automation.",
        focus: [
            "AI assistants & voice interfaces",
            "Speech recognition and intent routing",
            "Machine learning experiments"
        ],
        maturity: "active"
    },
    {
        id: "game-development",
        name: "Game Development",
        category: "game",
        icon: '<line x1="6" y1="11" x2="10" y2="11"></line><line x1="8" y1="9" x2="8" y2="13"></line><line x1="15" y1="12" x2="15.01" y2="12"></line><line x1="18" y1="10" x2="18.01" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>',
        summary: "2D and 3D games, game mechanics, interactive experiences, and the engines and tools behind them.",
        focus: [
            "Gameplay & engine systems",
            "Rendering and tooling",
            "Interactive experiences"
        ],
        maturity: "active"
    },
    {
        id: "application-development",
        name: "Application Development",
        category: "app",
        icon: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path>',
        summary: "Mobile applications, cross-platform applications, desktop applications, and productivity tools.",
        focus: [
            "Mobile & cross-platform apps",
            "Desktop applications",
            "Productivity tools"
        ],
        maturity: "active"
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity",
        category: "cybersecurity",
        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path>',
        summary: "Defensive security, secure software engineering, security research, and authorized testing tools.",
        focus: [
            "Secure engineering practices",
            "Security research notes",
            "Authorized testing tooling"
        ],
        maturity: "planned",
        note: "A planned area. No public project is published yet, and no security service is offered through this website."
    },
    {
        id: "robotics-automation",
        name: "Robotics & Automation",
        category: "robotics",
        icon: '<rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M12 4v4M8 14h.01M16 14h.01"></path>',
        summary: "Robotics software, embedded systems, simulations, and automation solutions.",
        focus: [
            "Simulation experiments",
            "Embedded software",
            "Automation tooling"
        ],
        maturity: "emerging"
    },
    {
        id: "creative-technology",
        name: "Creative Technology",
        category: "creative",
        icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><circle cx="11" cy="11" r="2"></circle>',
        summary: "UI/UX design, 3D modelling, animation, and digital experiences.",
        focus: [
            "Interface & UX design",
            "3D modelling and animation",
            "Visual identity"
        ],
        maturity: "planned",
        note: "A planned area. Design work currently happens inside other projects rather than as its own tracked repository."
    },
    {
        id: "research-innovation",
        name: "Research & Innovation",
        category: "research",
        icon: '<path d="M9 3h6"></path><path d="M10 3v6.5L4.6 19A2 2 0 0 0 6.3 22h11.4a2 2 0 0 0 1.7-3L14 9.5V3"></path><path d="M7.5 15h9"></path>',
        summary: "Technical experiments, prototypes, emerging technologies, and proof-of-concept projects.",
        focus: [
            "Prototypes & proof of concepts",
            "Emerging technology exploration",
            "Written experiment notes"
        ],
        maturity: "active"
    }
];

/* Maturity labels → how they are worded and styled in the UI. */
window.UNITECH_MATURITY = {
    active:   { label: "Active projects", class: "mat-active" },
    emerging: { label: "Early work",      class: "mat-emerging" },
    planned:  { label: "Planned area",    class: "mat-planned" }
};
