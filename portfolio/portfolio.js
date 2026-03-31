const quotes = [
    {
        text: "Cybersecurity is everyone's job, not just IT's.",
        author: "Theresa Payton"
    },
    {
        text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room.",
        author: "Gene Spafford"
    },
    {
        text: "Security is a process, not a product.",
        author: "Bruce Schneier"
    },
    {
        text: "If you spend more on coffee than on IT security, you will be hacked. What's more, you deserve to be hacked.",
        author: "Richard Clarke"
    },
    {
        text: "Amateurs hack systems, professionals hack people.",
        author: "Bruce Schneier"
    },
    {
        text: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
        author: "Norman Augustine"
    },
    {
        text: "As we've come to realize, the only way to be 100% safe is to not have a computer. And even then, it's risky.",
        author: "Kevin Mitnick"
    },
    {
        text: "A breach is not a matter of 'if', but 'when'. Detection and response are just as vital as prevention.",
        author: "Industry Best Practice"
    }
];

const myProjects = [
    {
        title: "PowerShell Password Manager",
        category: "PowerShell",
        description: "Successfully engineered a secure password management tool by combining custom PowerShell logic with AI-assisted troubleshooting to bridge technical gaps and implement advanced encryption standards. This collaboration allowed me to refine the script’s security architecture and overcome complex system hurdles that pushed beyond my initial technical scope.",
        shortDesc: "Personal password manager using PowerShell functions and scripting.",
        utilities: ["PowerShell", "Visual Studio Code"],
        environments: ["Windows 11 Pro"],
        walkthrough: "To ensure industry-standard protection, this vault implements a 'Security Trinity' that handles data with zero-knowledge principles. SecureString prevents sensitive data from being stored in plain text within the system memory (RAM), protecting against memory-scraping attacks. PBKDF2 Key Stretching utilizes 100,000 iterations to transform the master password into a high-entropy encryption key, making brute-force attacks computationally unfeasible. SHA-256 hashing employs the modern SHA-256 cryptographic engine as the mixing algorithm for key derivation, ensuring the vault meets current global security standards.",
        images: [
            { url: "images/Script1.webp", urlSmall: "images/Script1-sm.webp", caption: "Script Part 1" },
            { url: "images/Script2.webp", urlSmall: "images/Script2-sm.webp", caption: "Script Part 2" },
            { url: "images/Script3.webp", urlSmall: "images/Script3-sm.webp", caption: "Script Part 3" },
            { url: "images/PowershellManagerView.webp", urlSmall: "images/PowershellManagerView-sm.webp", caption: "PowerShell Manager View:" }
        ]
    },
    {
        title: "Network Level Ad Blocker",
        category: "Networking",
        description: "Successfully transformed an HP Envy dv7 laptop into a dedicated Pi-hole DNS server running on Zorin OS. By configuring a static IP and integrating the server with an Arris G18 Gateway, I implemented a network-wide 'sinkhole' that filters advertising and tracking telemetry for all connected devices, significantly improving network privacy and speed.",
        shortDesc: "Network level ad-blocker configured on home server.",
        utilities: ["Static IP Reservation", "WAN DNS Configuration", "Bash Terminal"],
        environments: ["Linux Zorin OS Lite"],
        walkthrough: "Configure the Pi-hole as the primary DNS server on the router. All DNS queries from devices on the network are then sent to the Pi-hole. If a query is for a known ad-serving or tracking domain, the Pi-hole blocks it at the network level before it ever reaches the device.",
        images: [
            { url: "images/Pi-HoleInstall.webp", urlSmall: "images/Pi-HoleInstall-sm.webp", caption: "Pi-Hole Install / Status / IP Verification:" },
            { url: "images/Static_IP_Configuration.webp", urlSmall: "images/Static_IP_Configuration-sm.webp", caption: "Static IP Configuration:" },
            { url: "images/DNS_Server_Configuration.webp", urlSmall: "images/DNS_Server_Configuration-sm.webp", caption: "WAN DNS Configuration:" },
            { url: "images/Pi-Hole_Dashboard.webp", urlSmall: "images/Pi-Hole_Dashboard-sm.webp", caption: "Pi-Hole Ad-Blocker Dashboard:" }
        ]
    },
    { 
        title: "Python Scripts In Progress...", 
        category: "Python",
        utilities: [],
        environments: [],
        images: []
    },
    { 
        title: "Certifications In Progress...", 
        category: "Certifications",
        utilities: [],
        environments: [],
        images: []
    }
];

function projectTemplate(project) {
    const utilitiesList = project.utilities?.length > 0 
        ? `<h3>Languages and Utilities Used:</h3><ul>${project.utilities.map(u => `<li>${u}</li>`).join('')}</ul>` 
        : "";

    const environmentsList = project.environments?.length > 0 
        ? `<h3>Environments Used:</h3><ul>${project.environments.map(e => `<li>${e}</li>`).join('')}</ul>` 
        : "";

    const description = project.description ? `<h3>Description</h3><p>${project.description}</p>` : "";
    const walkthrough = project.walkthrough ? `<div class="walkthrough"><h3>Program Walkthrough</h3><p>${project.walkthrough}</p></div>` : "";

    const imageGallery = project.images?.length > 0 
        ? project.images.map(img => `
            <div class="image-gallery">
                <h4>${img.caption}</h4>
                <picture>
                    <source media="(min-width: 660px)" srcset="${img.url}">
                    <img src="${img.urlSmall}" 
                    alt="${img.caption || project.title}" 
                    loading="lazy"
                    width="1200" height="603">
                </picture>
            </div>`).join('') 
        : "";

    return `
        <article class="project-info">
            <div class="project-head">
                <h2>${project.title}</h2>
                ${description}
            </div>
            <section class="project-luenvs">
                <div class="projects-lus">${utilitiesList}</div>
                <div class="projects-envs">${environmentsList}</div>
            </section>
            ${walkthrough}
            ${imageGallery}
        </article>
    `;
}


function renderProjects(projectList) {

    const container = document.querySelector('.projects-full');
    
    if (!container) return;

    container.innerHTML = ""; 

    projectList.forEach(project => {
        container.innerHTML += projectTemplate(project);
    });
}

renderProjects(myProjects);

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.textContent;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        if (category === "All") {
            renderProjects(myProjects);
        } else {
            const filteredList = myProjects.filter(project => project.category === category);
            renderProjects(filteredList);
        }
    });
});




let randomNum = Math.floor(Math.random() * quotes.length);

function quotesTemplate(quote) {
    return `<h2>Standard Operating Procedures</h2>
            <blockquote id="quote-text">
                    "${quote.text}"
                </blockquote>
                <cite id="quote-author">— ${quote.author}</cite>`
}

function renderQuote(quote) {
    const quoteContainer = document.querySelector('.sop-box')
    
    if (!quoteContainer) return;
    
    let html = quotesTemplate(quote);
    quoteContainer.innerHTML = html;
    
}

function init() {
    renderQuote(quotes[randomNum]);
}

init();

function homeProjectTemplate(project) {
    const firstImage = project.images && project.images.length > 0 ? project.images[0].urlSmall : 'images/placeholder.webp';
    const displayDesc = project.shortDesc ? project.shortDesc : "Project details coming soon.";

    const largeImage = project.images && project.images.length > 0 ? project.images[0].url : 'images/placeholder.webp';

    return `
        <article class="project-card">
            <h3>${project.title}</h3>
            <picture>
                <source media="(min-width: 660px)" srcset="${largeImage}">
                <img src="${firstImage}" 
                alt="${project.title}" 
                loading="lazy">
            </picture>
            <p>${displayDesc}</p>
            <a href="projects.html" target=_"blank" class="btn-secondary">Project Description ></a>
        </article>`;
}

function renderHomeProjects(projectList) {
    const homeGrid = document.querySelector('.project-grid');
    if (!homeGrid) return;

    const validProjects = projectList.filter(p => p.images && p.images.length > 0);

    const shuffled = [...validProjects].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);

    homeGrid.innerHTML = "";
    selected.forEach(project => {
        homeGrid.innerHTML += homeProjectTemplate(project);
    });
}

renderHomeProjects(myProjects);


const contactForm = document.querySelector('#contact-form');
const errorDisplay = document.querySelector('.errors');

function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isMobileValid(mobile) {
    return /^\d{3}-\d{3}-\d{4}$/.test(mobile);
}

function displayError(msg) {
    if (errorDisplay) {
        errorDisplay.textContent = msg;
        errorDisplay.style.color = "red";
    }
}

function submitHandler(event) {
    event.preventDefault(); 
    let errorMsg = '';
    
    if (errorDisplay) displayError(''); 

    const emailValue = document.querySelector('#email').value.trim();
    const mobileValue = document.querySelector('#mobile').value.trim();
    const messageValue = document.querySelector('#message').value.trim();

    if (!isEmailValid(emailValue)) {
        errorMsg += 'Please enter a valid email address. ';
    }

    if (mobileValue !== "" && !isMobileValid(mobileValue)) {
        errorMsg += 'Mobile must be: 123-456-7890. ';
    }

    if (messageValue.length < 5) {
        errorMsg += 'Message is too short. ';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    contactForm.innerHTML = `
        <div class="success-message">
            <h2>Thank you for your submission!</h2>
            <p>I will get back to you as soon as possible.</p>
        </div>
    `;
}

if (contactForm) {
    contactForm.addEventListener('submit', submitHandler);
}