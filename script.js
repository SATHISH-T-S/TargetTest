// Store favorites in browser
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentPhoneType = 'iPhone';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupPhoneTypeFilter();
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

// Setup phone type filter buttons
function setupPhoneTypeFilter() {
    const phoneTypeButtons = document.querySelectorAll('.phone-type-btn');
    
    phoneTypeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            phoneTypeButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Set current phone type
            currentPhoneType = this.getAttribute('data-phone-type');
            // Reload cases with selected phone type
            loadPhoneTypesPage();
        });
    });
}

// Load page based on category
function loadPage(page) {
    // Show/hide phone type filter
    const phoneTypeFilter = document.getElementById('phoneTypeFilter');
    
    if (page === 'phonetypes') {
        phoneTypeFilter.style.display = 'block';
        loadPhoneTypesPage();
    } else {
        phoneTypeFilter.style.display = 'none';
        
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
}

// Load phone types page
function loadPhoneTypesPage() {
    const pageTitle = document.getElementById('pageTitle');
    const pageDescription = document.getElementById('pageDescription');
    
    pageTitle.textContent = pageInfo.phonetypes.title;
    pageDescription.textContent = pageInfo.phonetypes.description;
    
    // Get cases for selected phone type
    const cases = getCasesByPhoneType(currentPhoneType);
    
    // Display cases
    displayCases(cases);
}

// Display cases in grid
function displayCases(cases) {
    const casesGrid = document.getElementById('casesGrid');
    casesGrid.innerHTML = '';
    
    if (cases.length === 0) {
        casesGrid.innerHTML = '<p class="no-cases">No cases available for this phone type</p>';
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
            <div style="font-size: 12px; color: #64748b; margin-bottom: 0.5rem;">
                For: <strong>${caseItem.phoneType}</strong>
            </div>
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
    
    // Save to localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({
        id: caseId,
        name: caseName,
        price: price,
        quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
}
