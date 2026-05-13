const projectCatalog = {
    "webgl-terrain-explorer": {
        category: "3D Graphics Project",
        drop: "Drop 01 / World Forge",
        title: "WebGL Terrain Explorer",
        tagline: "A hand-built 3D scene with procedural terrain, custom shaders, and cinematic world textures.",
        summary: "Built for my Comp-Sci 351 final project using JavaScript, raw WebGL, GLSL shaders, and low-level rendering systems.",
        collection: "Graphics Systems",
        role: "WebGL + Shader Development",
        timeline: "Comp-Sci 351 Final Project",
        focus: "Procedural terrain, custom shaders, camera controls, OBJ loading, and texture mapping.",
        overview: "This project is an interactive 3D scene built in raw WebGL. It combines a generated terrain mesh, textured skybox panels, imported models, and lighting logic to create a small world the user can move through and explore.",
        brief: "The goal was to build a full graphics experience without leaning on a game engine. The hardest part was getting terrain generation, shader math, textures, model transforms, and movement controls to all work together cleanly inside a browser.",
        build: "I wrote custom vertex and fragment shaders, generated terrain from noise-based mesh options, loaded OBJ models, added quaternion-based camera rotation with keyboard movement, textured the skybox and scene assets, and wired in an attack animation for the character model.",
        impact: "This project pushed me deeper into graphics programming because every visual system had to be built and debugged directly, from buffers and uniforms to lighting calculations and texture setup.",
        outcome: "A playable WebGL scene with procedural terrain, textured world elements, responsive movement controls, and a stronger understanding of low-level graphics workflows.",
        fit: "People who want to see my graphics programming, rendering logic, and how I approach interactive 3D systems.",
        energy: "Cinematic, technical, and world-building focused.",
        imageFit: "contain",
        stack: ["JavaScript", "WebGL", "GLSL", "gl-matrix", "OBJ Models", "Procedural Terrain"],
        gallery: [
            { src: "Images/351-scene1.png", alt: "First scene screenshot from the WebGL terrain explorer project" },
            { src: "Images/351-scene2.png", alt: "Second scene screenshot showing the WebGL world exploration view" },
            { src: "Images/351-terrain.png", alt: "Terrain-focused screenshot from the Comp-Sci 351 WebGL final project" }
        ],
        related: ["aim-training-project", "billsplit-project"]
    },
    "aim-training-project": {
        category: "C++ Arcade Game",
        drop: "Drop 02 / Accuracy Edition",
        title: "2D Aim Trainer",
        tagline: "A timed clicking game where shrinking targets test speed, accuracy, and consistency.",
        summary: "Built in C++ for my Comp-Sci 211 final project using GE211, with MVC structure, difficulty modes, and game-state tracking.",
        collection: "Game Systems",
        role: "Solo Developer",
        timeline: "Comp-Sci 211 Final Project",
        focus: "MVC architecture, hit detection, timed gameplay loops, and difficulty balancing.",
        overview: "This project is a 2D aim trainer built in C++ where targets spawn at random positions and slowly shrink over time. The player tries to hit as many as possible before the timer runs out or all lives are lost.",
        brief: "The assignment was to build a full game in C++. I wanted something fast-paced and simple to understand, but with enough moving pieces to show game logic, collision detection, UI states, and overall code organization.",
        build: "I separated the game into model, view, and controller files, added easy, medium, and hard difficulty buttons, random target spawning, a countdown sequence, shrinking targets, lives, scoring, and an accuracy readout on the game-over screen. I also included model tests and a helper script for building and running the game.",
        impact: "The project gave me hands-on practice structuring interactive software in C++, managing frame-based updates, and turning a small concept into a playable experience with multiple states and feedback systems.",
        outcome: "A complete C++ game with selectable difficulty, responsive target interaction, tracked hits and misses, and a polished game-over stats screen.",
        fit: "People who want to see my game logic, C++ structure, and how I approach interactive projects.",
        energy: "Fast, competitive, and technical.",
        imageFit: "contain",
        stack: ["C++", "GE211", "CMake", "Model Testing"],
        gallery: [
            { src: "Images/aim-training-menu.png", alt: "Main menu screen for the 2D aim trainer project" },
            { src: "Images/aim-training-gameplay-1.png", alt: "Gameplay screen showing lives, timer, and active target" },
            { src: "Images/aim-training-gameplay-2.png", alt: "Gameplay screen showing later-game target and updated timer" },
            { src: "Images/aim-training-game-over.png", alt: "Game over screen showing score, accuracy, hits, and misses" }
        ],
        related: ["webgl-terrain-explorer", "billsplit-project"]
    },
    "polaroid-online": {
        category: "Next.js Photo App",
        drop: "Drop 03 / Instant Develop",
        title: "Polaroid Online",
        tagline: "A digital instant-film experience where uploaded photos blur, develop, and reveal over time.",
        summary: "Built with Next.js 14, React, TypeScript, and Cloudinary to turn a photo upload into a timed reveal experience.",
        collection: "Interactive Products",
        role: "Full-Stack Web Development",
        timeline: "Final Project",
        focus: "Upload flows, timed reveals, Cloudinary integration, and persistent gallery state.",
        overview: "Polaroid Online is a photo experience inspired by instant film cameras. Users upload a photo, watch a blurred version while it develops, and return to a gallery or detail view once the reveal timer finishes.",
        brief: "I wanted to build something more memorable than a basic uploader. The main challenge was making the interaction feel magical while still handling real upload logic, external media processing, and persistent photo data.",
        build: "I built the app with the Next.js App Router, added drag-and-drop upload and preview, generated blurred image versions through Cloudinary, stored photo metadata locally, and created gallery and detail flows with live status messaging, countdown behavior, and rename/delete actions.",
        impact: "This project helped me connect product thinking with technical implementation. It strengthened my understanding of asynchronous uploads, third-party media services, and how to make an interface feel playful without losing clarity.",
        outcome: "A working photo app where uploads move from preview to blurred development to final reveal, with persistent gallery views and photo detail pages.",
        fit: "People who want to see polished frontend interaction, product thinking, and how I connect UI to external services.",
        energy: "Nostalgic, interactive, and product-driven.",
        imageFit: "contain",
        stack: ["Next.js 14", "React", "TypeScript", "Cloudinary", "App Router", "Local JSON Storage"],
        gallery: [
            { src: "Images/polaroid-home.png", alt: "Polaroid Online app home page" },
            { src: "Images/polaroid-upload.png", alt: "Upload screen from the Polaroid Online app" },
            { src: "Images/polaroid-developing.png", alt: "Photo detail screen showing a blurred image while it develops" },
            { src: "Images/polaroid-gallery.png", alt: "Gallery screen from the Polaroid Online app showing saved and developing photos" }
        ],
        related: ["clutch-project", "webgl-terrain-explorer"]
    },
    "billsplit-project": {
        category: "Full-Stack Product",
        drop: "Drop 04 / Split Check",
        title: "BillSplit",
        tagline: "A collaborative bill-splitting app where groups join by QR, upload a receipt, claim items, and watch settlement update live.",
        summary: "Built as a full-stack final project with Next.js, TypeScript, Spring Boot, GraphQL, PostgreSQL, Redis, WebSockets, and OCR-backed receipt parsing.",
        collection: "Collaborative Tools",
        role: "Full-Stack Product Development",
        timeline: "Final Project / Real-Time Systems Build",
        focus: "Multi-user flows, OCR ingestion, real-time updates, GraphQL mutations, and settlement logic.",
        overview: "BillSplit is a collaborative receipt-splitting product designed for group dinners and shared purchases. One person creates the group, shares an invite link or QR code, uploads the receipt, and everyone can join the same session to claim what they ordered.",
        brief: "The challenge was making a multi-user workflow feel reliable from start to finish. That meant handling OCR processing, group invites, live item updates, and per-person settlement math without the experience feeling fragile or confusing.",
        build: "I worked through the product flow from group creation to final settlement: a Next.js frontend, QR-based join flow, GraphQL operations, a Spring Boot backend, PostgreSQL persistence, Redis support, WebSocket subscriptions with polling fallback, OCR receipt ingestion through Tesseract, manual item addition, and per-member tax and tip breakdowns on the bill page.",
        impact: "This project pushed me further into full-stack product thinking because every layer mattered. I had to think about frontend clarity, backend state transitions, real-time behavior, and how multiple users would move through the same workflow without stepping on each other.",
        outcome: "A working bill-splitting app with QR invites, receipt upload, OCR-extracted items, live claiming, and automatically computed settlement totals for each member.",
        fit: "People who want to see real-time collaboration, product-oriented engineering, and how I approach multi-step full-stack workflows.",
        energy: "Collaborative, practical, and systems-heavy.",
        imageFit: "contain",
        stack: ["Next.js 15", "TypeScript", "Spring Boot", "GraphQL", "PostgreSQL", "Redis", "WebSockets", "Tesseract OCR"],
        gallery: [
            { src: "Images/BillSplitHome.png", alt: "BillSplit create group screen with group name and bill total inputs" },
            { src: "Images/BillSplitQR.png", alt: "BillSplit group-created screen showing the invite QR code and share link" },
            { src: "Images/BillSplitblank.png", alt: "BillSplit bill page before receipt upload with empty items and settlement panels" },
            { src: "Images/BillSplitupload.png", alt: "BillSplit receipt upload flow with the file picker open for OCR input" },
            { src: "Images/BillSplitUploaded.png", alt: "BillSplit active bill view showing OCR-extracted items, claiming controls, and live totals" },
            { src: "Images/BillSplit.png", alt: "BillSplit active bill with users" }

        ],
        related: ["polaroid-online", "clutch-project"]
    },
    "clutch-project": {
        category: "Sports Analytics App",
        drop: "Drop 05 / Clutch Cut",
        title: "WNBA Clutch Analyzer",
        tagline: "An interactive Shiny app that measures who shoots better when the game gets late, tight, and high-pressure.",
        summary: "Built in R with Shiny, DT, dplyr, and wehoop to compare each player's clutch shooting against a non-clutch baseline.",
        collection: "Data Stories",
        role: "Data Analysis + App Development",
        timeline: "R Analytics Project",
        focus: "Parameterized analysis, reactive filters, sports-data pipelines, and interactive reporting.",
        overview: "This project analyzes WNBA play-by-play data to compare late-tight shot success against a broader baseline of non-clutch attempts. Instead of treating clutch as a vague label, the app lets users define the time window, margin cutoff, sample threshold, and sort order directly in the interface.",
        brief: "I wanted to build something that felt more analytical than a static chart. The challenge was creating a fair definition of clutch performance, keeping the pipeline reproducible, and giving users enough controls to explore the results without making the app confusing.",
        build: "I wrote a reusable R analysis pipeline that pulls play-by-play and player-box data with wehoop, labels players as clutch, anti-clutch, steady, or low sample, and returns both player-level and shot-type summaries. Then I wrapped it in a Shiny interface with adjustable filters, sortable DT tables, and CSV downloads for the final results.",
        impact: "The project turned raw sports data into something explorable and testable. It strengthened my understanding of data wrangling in R, reactive app structure in Shiny, and how to present statistical logic in a way other people can actually use.",
        outcome: "A configurable WNBA analytics app with clutch-window controls, baseline comparisons, searchable player tables, and downloadable result sets.",
        fit: "People interested in sports analytics, reproducible R workflows, and interactive data tools.",
        energy: "Analytical, competitive, and research-driven.",
        imageFit: "contain",
        stack: ["R", "Shiny", "dplyr", "DT", "wehoop", "Sports Analytics"],
        gallery: [
            { src: "Images/clutch-home.png", alt: "Home view of the WNBA clutch analysis Shiny app with filters and downloads" },
            { src: "Images/clutch-results.png", alt: "Results table view from the WNBA clutch analysis app" },
            { src: "Images/clutch-search.png", alt: "Search results view showing filtered clutch-analysis player results" }
        ],
        related: ["polaroid-online", "webgl-terrain-explorer"]
    }
}

const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

function renderTagGroup(containerId, items, className) {
    const container = document.getElementById(containerId)

    if (!container) {
        return
    }

    container.innerHTML = items
        .map((item) => `<span class="${className}">${item}</span>`)
        .join('')
}

function renderProjectDetail() {
    const projectPiece = document.getElementById('project-piece')

    if (!projectPiece) {
        return
    }

    const params = new URLSearchParams(window.location.search)
    const requestedProject = params.get('project')
    const defaultProject = 'webgl-terrain-explorer'
    const projectKey = projectCatalog[requestedProject] ? requestedProject : defaultProject
    const project = projectCatalog[projectKey]

    document.title = `${project.title} | Kedus Sineshaw`

    const textTargets = {
        'piece-category': project.category,
        'piece-drop': project.drop,
        'piece-title': project.title,
        'piece-tagline': project.tagline,
        'piece-summary': project.summary,
        'piece-collection': project.collection,
        'piece-role': project.role,
        'piece-timeline': project.timeline,
        'piece-focus': project.focus,
        'piece-overview': project.overview,
        'piece-brief': project.brief,
        'piece-build': project.build,
        'piece-impact': project.impact,
        'piece-outcome': project.outcome,
        'piece-fit': project.fit,
        'piece-energy': project.energy
    }

    Object.entries(textTargets).forEach(([id, value]) => {
        const element = document.getElementById(id)

        if (element) {
            element.textContent = value
        }
    })

    renderTagGroup('piece-tech', project.stack, 'piece-chip')

    const mainImage = document.getElementById('piece-main-image')
    const thumbContainer = document.getElementById('piece-thumbs')
    const mainFrame = document.querySelector('.piece-main-frame')

    if (mainImage && thumbContainer) {
        const usesScreenshotFit = project.imageFit === 'contain'

        mainImage.classList.toggle('screenshot-fit', usesScreenshotFit)

        if (mainFrame) {
            mainFrame.classList.toggle('screenshot-frame', usesScreenshotFit)
        }

        const setMainImage = (image) => {
            mainImage.src = image.src
            mainImage.alt = image.alt
        }

        thumbContainer.innerHTML = ''
        setMainImage(project.gallery[0])

        project.gallery.forEach((image, index) => {
            const thumb = document.createElement('button')
            const thumbClassNames = ['piece-thumb']

            if (usesScreenshotFit) {
                thumbClassNames.push('screenshot-thumb')
            }

            if (index === 0) {
                thumbClassNames.push('active')
            }

            thumb.type = 'button'
            thumb.className = thumbClassNames.join(' ')
            thumb.setAttribute('aria-label', `Show preview ${index + 1} for ${project.title}`)
            thumb.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="${usesScreenshotFit ? 'screenshot-fit' : ''}">`

            thumb.addEventListener('click', () => {
                setMainImage(image)

                thumbContainer.querySelectorAll('.piece-thumb').forEach((button) => {
                    button.classList.remove('active')
                })

                thumb.classList.add('active')
            })

            thumbContainer.appendChild(thumb)
        })
    }

    const relatedProjects = document.getElementById('related-projects')

    if (relatedProjects) {
        relatedProjects.innerHTML = project.related
            .map((relatedKey) => {
                const relatedProject = projectCatalog[relatedKey]

                if (!relatedProject) {
                    return ''
                }

                const relatedImageClass = relatedProject.imageFit === 'contain'
                    ? 'screenshot-fit'
                    : ''

                return `
                    <article class="pro">
                        <img src="${relatedProject.gallery[0].src}" alt="${relatedProject.gallery[0].alt}" class="${relatedImageClass}">
                        <div class="des">
                            <span>${relatedProject.category}</span>
                            <h5>${relatedProject.title}</h5>
                            <p>${relatedProject.summary}</p>
                            <div class="project-tags">
                                ${relatedProject.stack
                                    .slice(0, 3)
                                    .map((item) => `<span>${item}</span>`)
                                    .join('')}
                            </div>
                            <h4>${relatedProject.drop}</h4>
                        </div>
                        <div class="project-actions">
                            <a href="project.html?project=${relatedKey}">View Piece</a>
                            <a href="project.html?project=${relatedKey}#project-specs" class="secondary-btn">Build Specs</a>
                        </div>
                    </article>
                `
            })
            .join('')
    }
}

renderProjectDetail()
