// All phone cases data
const allCases = [
    // All category
    {
        id: 1,
        name: 'Blue Marble',
        category: 'all',
        description: 'Premium silicone case with soft touch finish',
        price: 499,
        emoji: '💙',
        color: 'linear-gradient(135deg, #E6F1FB 0%, #85B7EB 100%)'
    },
    {
        id: 2,
        name: 'Pink Flower',
        category: 'girls',
        description: 'Beautiful pink case for girls collection',
        price: 599,
        emoji: '💝',
        color: 'linear-gradient(135deg, #FBEAF0 0%, #ED93B1 100%)'
    },
    {
        id: 3,
        name: 'Nature Green',
        category: 'all',
        description: 'Eco-friendly green case with matte finish',
        price: 699,
        emoji: '🌿',
        color: 'linear-gradient(135deg, #EAF3DE 0%, #97C459 100%)'
    },
    {
        id: 4,
        name: 'Coral Vibes',
        category: 'all',
        description: 'Soft touch coral case - most popular',
        price: 549,
        emoji: '🧡',
        color: 'linear-gradient(135deg, #FAECE7 0%, #F0997B 100%)'
    },
    // Manual category
    {
        id: 5,
        name: 'Black Leather',
        category: 'manual',
        description: 'Handcrafted leather case for mobile phones',
        price: 899,
        emoji: '🖤',
        color: 'linear-gradient(135deg, #E8E8E8 0%, #4A4A4A 100%)'
    },
    // Girls category
    {
        id: 6,
        name: 'Red Passion',
        category: 'girls',
        description: 'Vibrant red case designed for girls',
        price: 579,
        emoji: '❤️',
        color: 'linear-gradient(135deg, #FCEBEB 0%, #F09595 100%)'
    },
    {
        id: 7,
        name: 'Purple Dream',
        category: 'girls',
        description: 'Elegant purple case for girls collection',
        price: 619,
        emoji: '💜',
        color: 'linear-gradient(135deg, #EEEDFE 0%, #AFA9EC 100%)'
    },
    // Default category
    {
        id: 8,
        name: 'Gold Premium',
        category: 'default',
        description: 'Premium gold case - most bought',
        price: 749,
        emoji: '✨',
        color: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 100%)'
    },
    {
        id: 9,
        name: 'Teal Ocean',
        category: 'default',
        description: 'Ocean inspired teal case - popular choice',
        price: 529,
        emoji: '🌊',
        color: 'linear-gradient(135deg, #E1F5EE 0%, #5DCAA5 100%)'
    },
    {
        id: 10,
        name: 'Silver Metallic',
        category: 'default',
        description: 'Metallic silver case - commonly bought',
        price: 649,
        emoji: '⚪',
        color: 'linear-gradient(135deg, #F0F0F0 0%, #C0C0C0 100%)'
    },
    // Manual category
    {
        id: 11,
        name: 'Custom Blue',
        category: 'manual',
        description: 'Custom made blue case for phones',
        price: 799,
        emoji: '🎨',
        color: 'linear-gradient(135deg, #B5D4F4 0%, #185FA5 100%)'
    },
    {
        id: 12,
        name: 'Handmade Pink',
        category: 'manual',
        description: 'Handmade pink case for mobile devices',
        price: 849,
        emoji: '🌸',
        color: 'linear-gradient(135deg, #F4C0D1 0%, #D4537E 100%)'
    }
];

// Function to get cases by category
function getCasesByCategory(category) {
    if (category === 'home') {
        return allCases.slice(0, 4); // Show first 4 for home
    } else if (category === 'manual') {
        return allCases.filter(c => c.category === 'manual').slice(0, 4);
    } else if (category === 'default') {
        return allCases.filter(c => c.category === 'default').slice(0, 4);
    } else if (category === 'madebyme') {
        return allCases.filter(c => c.category === 'girls').slice(0, 4);
    }
    return [];
}

// Page titles and descriptions
const pageInfo = {
    home: {
        title: 'All Phone Cases',
        description: 'Browse our complete collection of premium phone cases'
    },
    manual: {
        title: 'Manual & Custom Cases',
        description: 'Handcrafted and custom-made phone cases for personalization'
    },
    default: {
        title: 'Popular Cases',
        description: 'The most commonly bought and popular phone cases'
    },
    madebyme: {
        title: 'Made By Me - Girls Collection',
        description: 'Exclusively designed phone cases for girls'
    }
};
