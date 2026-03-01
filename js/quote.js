       // Mobile Menu Toggle
       const mobileMenuButton = document.getElementById('mobile-menu-button');
       const mobileMenu = document.getElementById('mobile-menu');
       
       mobileMenuButton.addEventListener('click', () => {
           mobileMenu.classList.toggle('hidden');
       });

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
       
       // Quote Calculation
       const calculationForm = document.getElementById('calculation-form');
       const quoteResultDiv = document.getElementById('quote-result');
       const quotePriceEl = document.getElementById('quote-price');

       calculationForm.addEventListener('submit', (e) => {
           e.preventDefault();
           
           const weight = parseFloat(document.getElementById('weight').value);
           const length = parseFloat(document.getElementById('length').value) || 1;
           const width = parseFloat(document.getElementById('width').value) || 1;
           const height = parseFloat(document.getElementById('height').value) || 1;

           if (isNaN(weight) || weight <= 0) {
               alert('Please enter a valid weight.');
               return;
           }

           // Simple mock calculation logic
           const baseRate = 10; // Base cost
           const weightCost = weight * 2.5; // Cost per kg
           const volume = (length * width * height) / 5000; // Volumetric weight
           const dimensionalCost = Math.max(weight, volume) * 0.5;
           
           const totalCost = baseRate + weightCost + dimensionalCost;

           quotePriceEl.textContent = `$${totalCost.toFixed(2)}`;
           quoteResultDiv.classList.remove('hidden');

           // Scroll to result
           quoteResultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
       });