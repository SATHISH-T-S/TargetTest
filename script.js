// Store favorites in browser
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    loadPage('home');
});

// Setup navigation button clicks
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            // Load the page
            loadPage(this.getAttribute('data-page'));
        });
    });
}

// Load page based on category
function loadPage(page) {
    // Update page title and description
    const pageTitle = document.getElementById('pageTitle');
    const pageDescription = document.getElementById('pageDescription');
    
    pageTitle.textContent = pageInfo[page].title;
    pageDescription.textContent = pageInfo[page].description;
    
    // Get cases for this page
    const cases = getCasesByCategory(page);
    
    // Display cases
    displayCases(cases);
}

// Display cases in grid
function displayCases(cases) {
    const casesGrid = document.getElementById('casesGrid');
    casesGrid.innerHTML = '';
    
    if (cases.length === 0) {
        casesGrid.innerHTML = '<p class="no-cases">No cases available</p>';
        return;
    }
    
    cases.forEach(caseItem => {
        const card = createCaseCard(caseItem);
        casesGrid.appendChild(card);
    });
}

// Create a case card element
function createCaseCard(caseItem) {
    const card = document.createElement('div');
    card.className = 'case-card';
    
    const isFavorite = favorites.includes(caseItem.id);
    
    card.innerHTML = `
        <div class="case-image-container" style="background: ${caseItem.color}">
            <div class="case-emoji">${caseItem.emoji}</div>
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                    onclick="toggleFavorite(event, ${caseItem.id})">
                ${isFavorite ? '♥' : '♡'}
            </button>
        </div>
        <div class="case-info">
            <h3 class="case-name">${caseItem.name}</h3>
            <p class="case-description">${caseItem.description}</p>
            <div class="case-footer">
                <span class="case-price">₹${caseItem.price}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${caseItem.id}, '${caseItem.name}', ${caseItem.price})">
                    Add Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Toggle favorite
function toggleFavorite(event, caseId) {
    event.stopPropagation();
    
    const index = favorites.indexOf(caseId);
    if (index > -1) {
        favorites.splice(index, 1);
        alert('Removed from favorites');
    } else {
        favorites.push(caseId);
        alert('Added to favorites!');
    }
    
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Reload current page to update UI
    const activeNav = document.querySelector('.nav-link.active');
    const currentPage = activeNav.getAttribute('data-page');
    loadPage(currentPage);
}

// Add to cart
function addToCart(caseId, caseName, price) {
    const message = `✅ Added "${caseName}" to cart!\nPrice: ₹${price}`;
    alert(message);
    
    // You can extend this to save cart items to localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({
        id: caseId,
        name: caseName,
        price: price,
        quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Mobile menu toggle (optional for future enhancement)
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}
