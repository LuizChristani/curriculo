const aplications = [
    {
        title: "Family Fincance",
        description:
            "Projeto desenvolvido para controle financeiro da familia, desenvolvido para solucionar uma dor de serem pagos",
        techs: ["Java", "Spring", "React"],
    },
    {
        title: "NeeLogs",
        description:
            "Projeto em desenvolvimento para observabilidade e telimetria com foco em frontend, foco em facilitar a vida do desenvolvedor e com um core para identificação e avaliação previa das logs",
        techs: ["React", "TypeScript", "Postgres"],
    },
    {
        title: "WorkSync",
        description: "App desktop de ponto com sync offline/online",
        techs: ["Java", "Spring", "Electron", "React"],
    },
    {
        title: "Sistema de Ticket",
        description: "Gestão de chamados com Long Polling em tempo real",
        techs: ["Java", "Spring", "React"],
    },
];

const techsIcon = {
    Java: { className: "devicon-java-plain", color: "#e76f00" },
    Spring: { className: "devicon-spring-plain", color: "#6db33f" },
    React: { className: "devicon-react-original", color: "#61dafb" },
    TypeScript: { className: "devicon-typescript-plain", color: "#3178c6" },
    Postgres: { className: "devicon-postgresql-plain", color: "#336791" },
    Electron: { className: "devicon-electron-original", color: "#47848f" },
};

const tecnologiaSection = document.querySelector('.badge')

Object.keys(techsIcon).forEach((item) => {
    const badge = document.createElement('div');
    badge.className = 'tech-badge';
    badge.style.backgroundColor = techsIcon[item].color;
    const icon = document.createElement('i');
    icon.className = techsIcon[item].className;
    const span = document.createElement('span');
    span.textContent = item;
    badge.append(icon, span);
    tecnologiaSection.appendChild(badge);
})


const projectSections = document.getElementById('projetos')

aplications.forEach((item) => {
    const card = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = item.title;
    const description = document.createElement('p');
    description.textContent = item.description;
    const techs = document.createElement('div');
    item.techs.forEach((item) => {
        const badge = document.createElement('div');
        badge.className = 'tech-badge';
        badge.style.backgroundColor = techsIcon[item].color;
        const icon = document.createElement('i');
        icon.className = techsIcon[item].className;
        const span = document.createElement('span');
        span.textContent = item;
        badge.append(icon, span);
        techs.appendChild(badge);
    });
    card.append(title, description, techs);
    projectSections.append(card);
})

document.getElementById("ano").textContent = new Date().getFullYear();

const titleBySection = {
    sobre: () => document.getElementById('nome'),
    projetos: () => document.querySelector('#projetos > div h1'),
    tecnologia: () => document.getElementById('tecnologia'),
    contatos: () => document.querySelector('#contatos h1'),
};

document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        const id = link.getAttribute('href').slice(1);
        const title = titleBySection[id]?.();
        if (!title) {
            return;
        }

        title.classList.remove('pulse');
        void title.offsetWidth;
        title.classList.add('pulse');
    });
});
