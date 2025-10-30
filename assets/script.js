document.addEventListener('DOMContentLoaded', function () {
    // Datos de usuarios y contraseñas
    const passwordData = [
        { user: "Antonieta", password: "gama01e$$+" },
        { user: "Celia", password: "tocc816fva$#" },
        { user: "Livier", password: "Ba770390$$" },
        { user: "Erika", password: "jive4617gi$" },
        { user: "Yaritza", password: "Hernandez1" },
        { user: "Yessica", password: "Salc1010$" },
        { user: "Mayra", password: "sofmj9200$&6" },
        { user: "Mariana", password: "Malla129$$" },
        { user: "Edith", password: "vave0249$2\"" },
        { user: "Elvia", password: "rote18367fvb$" },
        { user: "Karina", password: "barajas11" },
        { user: "Veronica", password: "Sanvero35$$" },
        { user: "Brenda", password: "beb28736%" },
        { user: "Ma_de_jesus", password: "sejgja560$" },
        { user: "Vicky", password: "Mos98379h%" },
        { user: "Cristina", password: "jimehaj60a$" },
        { user: "Jennifer", password: "Lun48656/" },
        { user: "Blanca", password: "zat8736t8" },
        { user: "Claudia_guadalupe", password: "marc2563ha$" },
        { user: "Ale10", password: "Loe67254" },
        { user: "Raquel", password: "auc3675rg%$" },
        { user: "Ma_Fernanda", password: "mafha8389" },
        { user: "Leslie", password: "pu267gns$" },
        { user: "Elizabeth", password: "Liz27359$" },
        { user: "Bethsabe", password: "sabe10948$" },
        { user: "Montse", password: "Ro362800" },
        { user: "Goretti", password: "Cet56723$" },
        { user: "Karla", password: "Ka62709$$" },
        { user: "Marisela", password: "Hue236528$" },
        { user: "Deysi", password: "Gog265252" },
        { user: "Monica_ma", password: "Mahe67290" },
        { user: "Monica_lara", password: "La476200E" },
        { user: "Alexia", password: "Aja36720$" },
        { user: "Fer_Carolina", password: "Vemf780026$" },
        { user: "Dalay", password: "Heda67529$" },
        { user: "Rocio_betancourt", password: "Beta367262$" },
        { user: "Rocio_Martinez", password: "Marth2679$" },
        { user: "Rocio_Rivera", password: "Riv483680$" },
        { user: "Linda", password: "Cel276530$" },
        { user: "Jacqueline", password: "Ver372790$" },
        { user: "Claudia_Parrilla", password: "Cla456790$" },
        { user: "Ricardo_Ayala", password: "Aya$57920" },
        { user: "Mariana_Ayala", password: "Mar3800$$" },
        { user: "Luis_Ayala", password: "Ayala563800$$" },
        { user: "Nora", password: "N0r4$01" },
        { user: "Karinaa", password: "K4r1n4$" },
        { user: "Paulina", password: "P4ul1n4$" },
        { user: "Manuel", password: "M4nu3l$0" },
        { user: "georgi", password: "GINA09$" },
        { user: "ditza", password: "Dana09$" },
        { user: "kevin", password: "Kevi09$" },
        { user: "ana", password: "An40925$" },
        { user: "Karen", password: "K4ren09" },
        { user: "Kim", password: "Kimb0923-" },
        { user: "Alexander", password: "Erik4Ale" },
    ];

    const tableBody = document.querySelector('#passwordTable tbody');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const notification = document.getElementById('notification');

    // Función para mostrar notificación
    function showNotification(message) {
        notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Función para copiar al portapapeles
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(`¡Copiado: ${text}`);
            createConfetti();
        }).catch(err => {
            console.error('Error al copiar: ', err);
            showNotification("Error al copiar");
        });
    }

    // Efecto de confeti
    function createConfetti() {
        const confettiCount = 20;
        const container = document.querySelector('.container');

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            container.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    function getRandomColor() {
        const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#00b894', '#55efc4', '#ffeaa7', '#fab1a0', '#ff7675', '#74b9ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Generar filas de la tabla
    function generateTableRows(data) {
        tableBody.innerHTML = '';

        for (let i = 0; i < data.length; i += 2) {
            const row = document.createElement('tr');
            row.style.animation = `fadeInUp 0.5s ease ${i * 0.05}s forwards`;

            // Primera columna (usuario + contraseña)
            const user1 = data[i];
            const userCell1 = document.createElement('td');
            userCell1.innerHTML = `
                <div class="user-cell">
                    <span class="user-text">${user1.user}</span>
                    <button class="copy-btn" data-text="${user1.user}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            `;
            row.appendChild(userCell1);

            const passCell1 = document.createElement('td');
            passCell1.innerHTML = `
                <div class="password-cell">
                    <span class="password-text">${user1.password}</span>
                    <button class="copy-btn" data-text="${user1.password}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            `;
            row.appendChild(passCell1);

            // Segunda columna (si existe)
            if (i + 1 < data.length) {
                const user2 = data[i + 1];
                const userCell2 = document.createElement('td');
                userCell2.innerHTML = `
                    <div class="user-cell">
                        <span class="user-text">${user2.user}</span>
                        <button class="copy-btn" data-text="${user2.user}">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                `;
                row.appendChild(userCell2);

                const passCell2 = document.createElement('td');
                passCell2.innerHTML = `
                    <div class="password-cell">
                        <span class="password-text">${user2.password}</span>
                        <button class="copy-btn" data-text="${user2.password}">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                `;
                row.appendChild(passCell2);
            } else {
                // Celdas vacías si no hay par
                row.appendChild(document.createElement('td'));
                row.appendChild(document.createElement('td'));
            }

            tableBody.appendChild(row);
        }

        // Configurar event listeners para botones de copiar
        setupCopyButtons();
    }

    function setupCopyButtons() {
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const textToCopy = this.getAttribute('data-text');
                copyToClipboard(textToCopy);

                // Efecto visual
                this.classList.add('copied');
                this.innerHTML = '<i class="fas fa-check"></i>';

                setTimeout(() => {
                    this.classList.remove('copied');
                    this.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });

            // Efectos hover
            btn.addEventListener('mouseenter', function () {
                if (!this.classList.contains('copied')) {
                    this.innerHTML = '<i class="fas fa-clipboard"></i>';
                }
            });

            btn.addEventListener('mouseleave', function () {
                if (!this.classList.contains('copied')) {
                    this.innerHTML = '<i class="fas fa-copy"></i>';
                }
            });
        });
    }

    // Función de búsqueda
    function searchUsers() {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm === '') {
            generateTableRows(passwordData);
            return;
        }

        const filteredData = passwordData.filter(item =>
            item.user.toLowerCase().includes(searchTerm) ||
            item.password.toLowerCase().includes(searchTerm)
        );

        generateTableRows(filteredData);
    }

    // Event listeners
    searchBtn.addEventListener('click', searchUsers);
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            searchUsers();
        }
    });

    // Inicializar tabla
    generateTableRows(passwordData);
});

// Añadir estilos dinámicos para el confeti
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #6c5ce7;
        opacity: 0.8;
        border-radius: 50%;
        animation: confettiFall linear forwards;
        z-index: 1000;
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);