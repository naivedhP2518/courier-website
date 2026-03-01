       // Mobile Menu Toggle
       const mobileMenuButton = document.getElementById('mobile-menu-button');
       const mobileMenu = document.getElementById('mobile-menu');
       
       mobileMenuButton.addEventListener('click', () => {
           mobileMenu.classList.toggle('hidden');
       });
       
       const mobileLinks = mobileMenu.querySelectorAll('a');
       mobileLinks.forEach(link => {
           link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
           });
       });

       // Handle Tracking Form Submission
       function handleTracking(formId, inputId, statusId) {
           const form = document.getElementById(formId);
           const input = document.getElementById(inputId);
           const status = document.getElementById(statusId);

           form.addEventListener('submit', function(event) {
               event.preventDefault();
               const trackingId = input.value.trim();
               
               status.textContent = '';
               status.classList.remove('text-sky-400', 'text-amber-400', 'text-red-400', 'text-slate-400');

               if (trackingId === '') {
                   status.textContent = 'Please enter a tracking ID.';
                   status.classList.add('text-amber-400');
                   return;
               }

               status.textContent = `Searching for parcel ${trackingId}...`;
               status.classList.add('text-slate-400');

               setTimeout(() => {
                   const responses = [
                       { text: `Package ${trackingId} is in transit. Expected delivery: Tomorrow.`, color: 'text-sky-400' },
                       { text: `Package ${trackingId} is out for delivery.`, color: 'text-sky-400' },
                       { text: `No package found with ID ${trackingId}. Please check the ID.`, color: 'text-red-400' }
                   ];
                   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                   
                   status.textContent = randomResponse.text;
                   status.classList.remove('text-slate-400');
                   status.classList.add(randomResponse.color);
               }, 1500);
           });
       }

       handleTracking('track-form-hero', 'tracking-input-hero', 'tracking-status-hero');
       
       // Scroll Reveal Animation
       const revealElements = document.querySelectorAll('.reveal');
       const revealObserver = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('visible');
               }
           });
       }, { threshold: 0.1 });

       revealElements.forEach(el => {
           revealObserver.observe(el);
       });

       // 3D Tilt Effect for Service Cards
       const serviceCards = document.querySelectorAll('.service-card');

       serviceCards.forEach(card => {
           const cardInner = card.querySelector('.service-card-inner');
           const intensity = 10;

           card.addEventListener('mousemove', (e) => {
               const rect = card.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;

               const midCardX = rect.width / 2;
               const midCardY = rect.height / 2;

               const rotateY = ((x - midCardX) / midCardX) * intensity;
               const rotateX = -((y - midCardY) / midCardY) * intensity;

               card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
           });

           card.addEventListener('mouseleave', () => {
               card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
           });
       });