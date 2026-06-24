// All phone cases data with IMAGE URLs
const allCases = [
    // iPhone cases
    {
        id: 1,
        name: 'Blue Marble',
        category: 'all',
        phoneType: 'iPhone',
        description: 'Premium silicone case with soft touch finish',
        price: 499,
        image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #E6F1FB 0%, #85B7EB 100%)'
    },
    {
        id: 2,
        name: 'Pink Flower',
        category: 'girls',
        phoneType: 'iPhone',
        description: 'Beautiful pink case for girls collection',
        price: 599,
        image: 'https://images.unsplash.com/photo-1601296867352-e6f03e47a5da?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #FBEAF0 0%, #ED93B1 100%)'
    },
    {
        id: 3,
        name: 'Nature Green',
        category: 'all',
        phoneType: 'Samsung',
        description: 'Eco-friendly green case with matte finish',
        price: 699,
        image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8b12?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #EAF3DE 0%, #97C459 100%)'
    },
    {
        id: 4,
        name: 'Coral Vibes',
        category: 'all',
        phoneType: 'Samsung',
        description: 'Soft touch coral case - most popular',
        price: 549,
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #FAECE7 0%, #F0997B 100%)'
    },
    {
        id: 5,
        name: 'Black Leather',
        category: 'manual',
        phoneType: 'OnePlus',
        description: 'Handcrafted leather case for mobile phones',
        price: 899,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #E8E8E8 0%, #4A4A4A 100%)'
    },
    {
        id: 6,
        name: 'Red Passion',
        category: 'girls',
        phoneType: 'OnePlus',
        description: 'Vibrant red case designed for girls',
        price: 579,
        image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #FCEBEB 0%, #F09595 100%)'
    },
    {
        id: 7,
        name: 'Purple Dream',
        category: 'girls',
        phoneType: 'Google Pixel',
        description: 'Elegant purple case for girls collection',
        price: 619,
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c3febda46?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #EEEDFE 0%, #AFA9EC 100%)'
    },
    {
        id: 8,
        name: 'Gold Premium',
        category: 'default',
        phoneType: 'iPhone',
        description: 'Premium gold case - most bought',
        price: 749,
        image: 'https://images.unsplash.com/photo-1511636635265-623b0a43a329?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 100%)'
    },
    {
        id: 9,
        name: 'Teal Ocean',
        category: 'default',
        phoneType: 'Samsung',
        description: 'Ocean inspired teal case - popular choice',
        price: 529,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #E1F5EE 0%, #5DCAA5 100%)'
    },
    {
        id: 10,
        name: 'Silver Metallic',
        category: 'default',
        phoneType: 'Google Pixel',
        description: 'Metallic silver case - commonly bought',
        price: 649,
        image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8b12?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #F0F0F0 0%, #C0C0C0 100%)'
    },
    {
        id: 11,
        name: 'Custom Blue',
        category: 'manual',
        phoneType: 'OnePlus',
        description: 'Custom made blue case for phones',
        price: 799,
        image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #B5D4F4 0%, #185FA5 100%)'
    },
    {
        id: 12,
        name: 'Handmade Pink',
        category: 'manual',
        phoneType: 'Google Pixel',
        description: 'Handmade pink case for mobile devices',
        price: 849,
        image: 'https://images.unsplash.com/photo-1601296867352-e6f03e47a5da?w=400&h=400&fit=crop',
        color: 'linear-gradient(135deg, #F4C0D1 0%, #D4537E 100%)'
    }
];

// Phone types list
const phoneTypes = ['iPhone', 'Samsung', 'OnePlus', 'Google Pixel'];

// Function to get cases by category
function getCasesByCategory(category) {
    if (category === 'home') {
        return allCases.slice(0, 4);
    } else if (category === 'manual') {
        return allCases.filter(c => c.category === 'manual').slice(0, 4);
    } else if (category === 'default') {
        return allCases.filter(c => c.category === 'default').slice(0, 4);
    } else if (category === 'madebyme') {
        return allCases.filter(c => c.category === 'girls').slice(0, 4);
    }
    return [];
}

// Function to get cases by phone type
function getCasesByPhoneType(phoneType) {
    return allCases.filter(c => c.phoneType === phoneType).slice(0, 4);
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
    },
    phonetypes: {
        title: 'Cases by Phone Type',
        description: 'Find the perfect case for your phone brand'
    }
};
