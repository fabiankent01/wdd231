const menuToggle = document.getElementById('mobile-menu');
        const nav = document.getElementById('nav');
        const closeMenu = document.getElementById('close-menu');
    
        menuToggle.addEventListener('click', () => {
            nav.classList.add('show-menu');
        });
    
        closeMenu.addEventListener('click', () => {
            nav.classList.remove('show-menu'); 
        });

