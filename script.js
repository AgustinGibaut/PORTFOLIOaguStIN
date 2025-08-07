         tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'dark-bg': '#0a0a0a',
                        'dark-secondary': '#1a1a1a',
                        'accent': '#3b82f6',
                        'text-primary': '#ffffff',
                        'text-secondary': '#a1a1aa'
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                }
            }
        }
 
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                   
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);     
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
        document.querySelector('#inicio').style.opacity = '1';
        document.querySelector('#inicio').style.transform = 'translateY(0)';

        

const techIcons = document.querySelector('.tech-icons');


techIcons.innerHTML += techIcons.innerHTML;

let scrollAmount = 0;
const speed = 0.5; 

function autoScroll() {
  scrollAmount += speed;

  if(scrollAmount >= techIcons.scrollWidth / 2) {
    scrollAmount = 0;
  }
  
  techIcons.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}

autoScroll();
