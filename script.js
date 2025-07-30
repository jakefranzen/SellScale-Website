// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
}

// Chat Functionality
let chatCount = 5;
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');
const aiOutput = document.getElementById('ai-output');
const chatCountElement = document.getElementById('chat-count');

const sampleResponses = [
    {
        user: "I want to create a campaign for SaaS companies",
        ai: {
            subject: "Subject: Quick question about [Company]'s growth strategy",
            body: "Hi [First Name],\n\nI noticed [Company] recently raised Series B funding. Congrats!\n\nI'm reaching out because we help SaaS companies like yours scale their outbound sales without the usual spam issues.\n\nWould you be open to a 15-minute chat about how we've helped similar companies increase their pipeline by 3x?\n\nBest,\n[Your Name]",
            insights: "• Personalized with recent funding news\n• Clear value proposition\n• Specific outcome metric\n• Low-commitment ask"
        }
    },
    {
        user: "How do you avoid spam filters?",
        ai: {
            subject: "Technical Implementation:",
            body: "✓ Domain warming protocols\n✓ SPF/DKIM/DMARC authentication\n✓ IP reputation management\n✓ Content optimization algorithms\n✓ Send pattern randomization\n✓ Engagement tracking\n\nResult: 98.7% inbox delivery rate",
            insights: "• Multi-layered technical approach\n• Continuous monitoring\n• Industry-leading delivery rates\n• Compliant with all major ESPs"
        }
    },
    {
        user: "Show me enrichment capabilities",
        ai: {
            subject: "Data Sources Integration:",
            body: "📊 LinkedIn Sales Navigator\n🏢 Clearbit & ZoomInfo\n📈 Crunchbase & PitchBook\n🌐 Company websites & social\n📧 Email verification tools\n🎯 Intent data providers\n\n→ 95%+ contact accuracy\n→ 40+ data points per prospect",
            insights: "• Real-time data aggregation\n• Multi-source verification\n• Custom field mapping\n• GDPR compliant processing"
        }
    }
];

function addMessage(content, isUser = false, isTyping = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex items-start space-x-3 ${isUser ? 'justify-end' : ''}`;
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="bg-sellscale-pink text-white rounded-lg p-3 max-w-xs">
                <p class="text-sm">${content}</p>
            </div>
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">U</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="w-8 h-8 bg-sellscale-pink rounded-full flex items-center justify-center text-white text-sm font-bold">S</div>
            <div class="bg-white dark:bg-gray-600 rounded-lg p-3 max-w-xs">
                <p class="text-sm">${isTyping ? '<span class="animate-pulse">Selix is typing...</span>' : content}</p>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}

function updateAIOutput(response) {
    aiOutput.innerHTML = `
        <div class="space-y-6">
            <div class="border-l-4 border-sellscale-pink pl-4">
                <h4 class="font-semibold text-sellscale-pink mb-2">${response.subject}</h4>
                <pre class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">${response.body}</pre>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 class="font-semibold text-sellscale-green dark:text-sellscale-green mb-2">AI Insights</h4>
                <pre class="text-sm text-sellscale-green dark:text-sellscale-green whitespace-pre-wrap">${response.insights}</pre>
            </div>
        </div>
    `;
}

function sendMessage() {
    if (chatCount <= 0) {
        alert('You have reached your free chat limit. Please contact us for more access.');
        return;
    }
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, true);
    chatInput.value = '';
    
    // Show typing indicator
    const typingMessage = addMessage('', false, true);
    
    // Simulate AI response
    setTimeout(() => {
        typingMessage.remove();
        
        // Find matching response or use default
        const response = sampleResponses.find(r => 
            message.toLowerCase().includes('saas') || 
            message.toLowerCase().includes('campaign') ? r.user.includes('campaign') :
            message.toLowerCase().includes('spam') ? r.user.includes('spam') :
            message.toLowerCase().includes('enrichment') || message.toLowerCase().includes('data') ? r.user.includes('enrichment') :
            false
        ) || sampleResponses[0];
        
        addMessage('Here\'s what I generated for you. Check the output panel for details!');
        updateAIOutput(response.ai);
        
        chatCount--;
        chatCountElement.textContent = chatCount;
        
        if (chatCount <= 0) {
            setTimeout(() => {
                addMessage('You\'ve used all your free chats! Contact us to continue exploring Selix.');
            }, 1000);
        }
    }, 1500);
}

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Brand Carousel with Colored Boxes
const brands = ['notion', 'brex', 'ramp', 'google', 'microsoft'];
const brandCarousel = document.getElementById('brand-carousel');

function createBrandCarousel() {
    // Clear existing content
    brandCarousel.innerHTML = '';
    
    // Create scrolling container
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'flex items-center space-x-12 animate-scroll-left';
    
    const brandLogos = {
        notion: { name: 'Notion', color: '#000000' },
        brex: { name: 'Brex', color: '#8A2BE2' },
        ramp: { name: 'Ramp', color: '#00FF00' },
        google: { name: 'Google', color: '#4285F4' },
        microsoft: { name: 'Microsoft', color: '#FF1B8D' }
    };
    
    // Add logos twice for seamless loop
    [...brands, ...brands].forEach(brand => {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'flex-shrink-0 flex items-center justify-center w-32 h-16 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer';
        logoDiv.style.backgroundColor = brandLogos[brand].color + '20';
        logoDiv.style.border = `2px solid ${brandLogos[brand].color}40`;
        logoDiv.innerHTML = `
            <span class="font-bold text-lg" style="color: ${brandLogos[brand].color}">
                ${brandLogos[brand].name}
            </span>
        `;
        scrollContainer.appendChild(logoDiv);
    });
    
    brandCarousel.appendChild(scrollContainer);
}

// Benefits Toggle Functionality
const benefitTabs = document.querySelectorAll('.benefit-tab');
const benefitContent = document.getElementById('benefit-content');

const benefits = {
    spam: {
        title: 'Never Land in Spam',
        icon: '🛡️',
        description: 'Advanced AI algorithms ensure your messages reach the inbox, not the spam folder.',
        features: [
            'Domain warming protocols',
            'Content optimization',
            'Sender reputation management',
            'Real-time deliverability monitoring'
        ],
        stats: '98.7% inbox delivery rate'
    },
    enrichment: {
        title: 'Pull Enrichment from Anywhere',
        icon: '🔍',
        description: 'Aggregate data from 40+ sources to build comprehensive prospect profiles.',
        features: [
            'LinkedIn Sales Navigator integration',
            'Clearbit & ZoomInfo connectivity',
            'Real-time company data',
            'Custom field mapping'
        ],
        stats: '95%+ contact accuracy'
    },
    messaging: {
        title: 'Find Messaging that Resonates',
        icon: '💬',
        description: 'AI-powered message optimization based on successful patterns and recipient behavior.',
        features: [
            'A/B testing automation',
            'Sentiment analysis',
            'Industry-specific templates',
            'Response rate optimization'
        ],
        stats: '3x higher response rates'
    }
};

function showBenefit(benefitKey) {
    const benefit = benefits[benefitKey];
    
    benefitContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <div class="text-6xl mb-4">${benefit.icon}</div>
                <h3 class="text-3xl font-bold mb-4">${benefit.title}</h3>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">${benefit.description}</p>
                <ul class="space-y-3">
                    ${benefit.features.map(feature => `
                        <li class="flex items-center space-x-3">
                            <div class="w-2 h-2 bg-sellscale-green rounded-full"></div>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="bg-gradient-to-br from-sellscale-pink/10 to-sellscale-green/10 rounded-xl p-8 text-center">
                <div class="text-4xl font-bold text-sellscale-pink mb-2">${benefit.stats}</div>
                <p class="text-gray-600 dark:text-gray-300">Industry-leading performance</p>
                <div class="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <div class="text-sm text-gray-500 mb-2">Live Performance</div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-sellscale-pink to-sellscale-green h-2 rounded-full transition-all duration-1000" style="width: ${benefitKey === 'spam' ? '98.7%' : benefitKey === 'enrichment' ? '95%' : '85%'}"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

benefitTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        benefitTabs.forEach(t => {
            t.classList.remove('active', 'bg-sellscale-pink', 'text-white');
            t.classList.add('text-gray-600', 'hover:text-sellscale-pink');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active', 'bg-sellscale-pink', 'text-white');
        tab.classList.remove('text-gray-600', 'hover:text-sellscale-pink');
        
        // Show corresponding benefit
        showBenefit(tab.dataset.benefit);
    });
});

// Initialize with first benefit
showBenefit('spam');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize brand carousel
createBrandCarousel();

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
