const questions = [
    {
        question: "When a project suddenly spirals into chaos, your first instinct is to:",
        options: [
            { text: "Break the problem down into an actionable plan and delegate.", type: "pm" },
            { text: "Methodically trace back to find the root cause of the issue.", type: "pm" },
            { text: "Check the data to see if you can spot any underlying patterns.", type: "data" },
            { text: "Dive straight in and build a quick patch or workaround.", type: "dev" }
        ]
    },
    {
        question: "How would you describe your ideal communication style?",
        options: [
            { text: "Providing clear, concise updates that keep everyone on track.", type: "pm" },
            { text: "Facilitating structured meetings where all voices are heard.", type: "pm" },
            { text: "Using visual aids like wireframes or mood boards to express ideas.", type: "design" },
            { text: "Adapting your message on the fly depending on who you're talking to.", type: "generalist" }
        ]
    },
    {
        question: "What task would you happily lose track of time doing?",
        options: [
            { text: "Defining the scope and timeline for a brand new project.", type: "pm" },
            { text: "Resolving conflicting priorities to unblock a struggling team.", type: "pm" },
            { text: "Focusing deeply on crafting clean, elegant solutions.", type: "dev" },
            { text: "Digging to find hidden trends in user behavior.", type: "data" }
        ]
    },
    {
        question: "Which set of tools makes you feel the most productive?",
        options: [
            { text: "Roadmapping software and collaborative spreadsheets.", type: "pm" },
            { text: "Kanban boards and streamlined project trackers.", type: "pm" },
            { text: "Sketching apps, color palettes, and prototyping tools.", type: "design" },
            { text: "A little bit of everything—whatever gets the job done today.", type: "generalist" }
        ]
    },
    {
        question: "When you need to learn something new, you prefer to:",
        options: [
            { text: "Interview experts and synthesize their knowledge into a plan.", type: "pm" },
            { text: "Organize exactly what you need to know and track your progress.", type: "pm" },
            { text: "Read the manuals or guides and start tinkering.", type: "dev" },
            { text: "Play with datasets and visualize the outcomes.", type: "data" }
        ]
    },
    {
        question: "How do you usually show up in a team setting?",
        options: [
            { text: "The guide who keeps everyone fiercely focused on the main goal.", type: "pm" },
            { text: "The shield who removes obstacles so others can just work.", type: "pm" },
            { text: "The advocate ensuring the final product looks and feels user-friendly.", type: "design" },
            { text: "The glue that fills in any gaps and keeps morale high.", type: "generalist" }
        ]
    },
    {
        question: "At the end of a long day, what energises you the most?",
        options: [
            { text: "Seeing a project transform from a vague idea into a success.", type: "pm" },
            { text: "Bringing beautiful order to a messy, complicated process.", type: "pm" },
            { text: "Finally cracking a complex puzzle that's been bugging you.", type: "dev" },
            { text: "Proving a long-held theory using solid, undeniable numbers.", type: "data" }
        ]
    },
    {
        question: "When handed a highly vague, ambiguous request, you:",
        options: [
            { text: "Set up a meeting immediately to clarify goals and boundaries.", type: "pm" },
            { text: "Draft a tentative timeline based on assumptions to force clarity.", type: "pm" },
            { text: "Start sketching possible user flows to see what they actually mean.", type: "design" },
            { text: "Just pick the role that seems most urgent right now and start.", type: "generalist" }
        ]
    },
    {
        question: "Your absolute ideal work environment must naturally feature:",
        options: [
            { text: "Clear, achievable milestones and regular synchronization.", type: "pm" },
            { text: "A shared, exciting vision with clearly separated responsibilities.", type: "pm" },
            { text: "Substantial quiet time for deep, uninterrupted work.", type: "dev" },
            { text: "Total access to all the metrics and performance history.", type: "data" }
        ]
    },
    {
        question: "A huge deadline is looming and the team is stressed. You:",
        options: [
            { text: "Ruthlessly reprioritize tasks and cut non-essentials.", type: "pm" },
            { text: "Check in individually to ensure they have exactly what they need.", type: "pm" },
            { text: "Make sure the core user experience doesn't suffer in the rush.", type: "design" },
            { text: "Roll up your sleeves and pitch in on literally any task.", type: "generalist" }
        ]
    },
    {
        question: "Which of these scenarios sounds like a complete nightmare?",
        options: [
            { text: "Launching a product without a clear strategy or success metrics.", type: "pm" },
            { text: "Unclear ownership causing important tasks to simply drop.", type: "pm" },
            { text: "Inconsistent styling and frustratingly clunky interfaces.", type: "design" },
            { text: "Doing the exact same manual, repetitive tasks over and over.", type: "dev" }
        ]
    },
    {
        question: "What do you secretly judge others for?",
        options: [
            { text: "Constantly going off-topic in a strictly time-boxed meeting.", type: "pm" },
            { text: "Missing deadlines without communicating the delay early.", type: "pm" },
            { text: "Making big decisions based on gut feelings instead of facts.", type: "data" },
            { text: "Being too rigid and unwilling to adapt when things change.", type: "generalist" }
        ]
    },
    {
        question: "Ultimately, what does true success look like to you?",
        options: [
            { text: "A team that delivered on time and is immensely proud of their work.", type: "pm" },
            { text: "A beautifully orchestrated process with zero stressful surprises.", type: "pm" },
            { text: "A robust, scalable system that rarely breaks down.", type: "dev" },
            { text: "A clean dashboard showing all key metrics moving up and to the right.", type: "data" }
        ]
    }
];

// Profile Content Mapping
const profiles = {
    "pm": {
        title: "Project Manager",
        description: "You're built to lead projects — CAP is the programme that gets you there.",
        primaryCTA: {
            text: "Explore the CAP Programme",
            link: "https://verisult.com/cap",
            class: "primary-btn"
        },
        secondaryCTA: null
    },
    "dev": {
        title: "Builder / Maker",
        description: "Your tribe is waiting — join people navigating their careers just like you.",
        primaryCTA: {
            text: "Join Thrive Tribe",
            link: "https://verisult.com/thrive-tribe",
            class: "primary-btn"
        },
        secondaryCTA: {
            text: "Or level up with the CAP Programme",
            link: "https://verisult.com/cap"
        }
    },
    "design": {
        title: "Designer",
        description: "Your tribe is waiting — join people navigating their careers just like you.",
        primaryCTA: {
            text: "Join Thrive Tribe",
            link: "https://verisult.com/thrive-tribe",
            class: "primary-btn"
        },
        secondaryCTA: {
            text: "Or level up with the CAP Programme",
            link: "https://verisult.com/cap"
        }
    },
    "data": {
        title: "Data Analyst",
        description: "Your tribe is waiting — join people navigating their careers just like you.",
        primaryCTA: {
            text: "Join Thrive Tribe",
            link: "https://verisult.com/thrive-tribe",
            class: "primary-btn"
        },
        secondaryCTA: {
            text: "Or level up with the CAP Programme",
            link: "https://verisult.com/cap"
        }
    },
    "generalist": {
        title: "Generalist",
        description: "Your tribe is waiting — join people navigating their careers just like you.",
        primaryCTA: {
            text: "Join Thrive Tribe",
            link: "https://verisult.com/thrive-tribe",
            class: "primary-btn"
        },
        secondaryCTA: {
            text: "Or level up with the CAP Programme",
            link: "https://verisult.com/cap"
        }
    }
};

// State
let currentQuestionIndex = 0;
let scores = {
    pm: 0,
    dev: 0,
    design: 0,
    data: 0,
    generalist: 0
};

// DOM Elements
const landingView = document.getElementById('landing-view');
const quizView = document.getElementById('quiz-view');
const resultView = document.getElementById('result-view');
const startBtn = document.getElementById('start-btn');
const retakeBtn = document.getElementById('retake-btn');

const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
retakeBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    landingView.classList.remove('active');
    setTimeout(() => {
        landingView.classList.add('hidden');
        quizView.classList.remove('hidden');
        // brief delay before adding active class for transition
        setTimeout(() => {
            quizView.classList.add('active');
            renderQuestion();
        }, 50);
    }, 400); // Wait for transition
}

// Function to shuffle options array
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function renderQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const q = questions[currentQuestionIndex];
    
    // Update progress
    questionCounter.innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    // Remove animation class if exists to re-trigger
    questionText.classList.remove('animate-up');
    optionsContainer.classList.remove('animate-up');
    
    // Set text
    questionText.innerText = q.question;
    
    // Clear old options
    optionsContainer.innerHTML = '';
    
    // Shuffle options to prevent bias from ordering
    const shuffledOptions = shuffleArray(q.options);
    
    shuffledOptions.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option.text;
        btn.onclick = () => handleAnswer(option.type);
        optionsContainer.appendChild(btn);
    });

    // Trigger animations
    void questionText.offsetWidth; // trigger reflow
    questionText.classList.add('animate-up');
    optionsContainer.classList.add('animate-up');
}

function handleAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;
    
    // Animate out
    optionsContainer.style.opacity = '0';
    setTimeout(() => {
        optionsContainer.style.opacity = '1';
        renderQuestion();
    }, 300);
}

function determineWinner() {
    let maxScore = -1;
    let winner = '';

    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            winner = type;
        }
    }

    // Tie-breaker specifically checking for "pm"
    // If PM score equals the max score, PM instantly wins despite the alphabetical tie.
    if (scores['pm'] >= maxScore) {
        return 'pm';
    }

    return winner;
}

function showResults() {
    quizView.classList.remove('active');
    
    // Ensure final progress bar fills
    progressBar.style.width = `100%`;

    setTimeout(() => {
        quizView.classList.add('hidden');
        
        const winner = determineWinner();
        const profile = profiles[winner];

        // Populate Result Data
        document.getElementById('result-title').innerText = profile.title;
        document.getElementById('result-desc').innerText = profile.description;
        
        // Primary CTA
        const primaryContainer = document.getElementById('primary-cta-container');
        primaryContainer.innerHTML = `<a href="${profile.primaryCTA.link}" class="${profile.primaryCTA.class}">${profile.primaryCTA.text}</a>`;
        
        // Secondary CTA
        const secondaryContainer = document.getElementById('secondary-cta-container');
        if (profile.secondaryCTA) {
            secondaryContainer.innerHTML = `<a href="${profile.secondaryCTA.link}">${profile.secondaryCTA.text}</a>`;
            secondaryContainer.classList.remove('hidden');
        } else {
            secondaryContainer.innerHTML = '';
            secondaryContainer.classList.add('hidden');
        }

        resultView.classList.remove('hidden');
        setTimeout(() => {
            resultView.classList.add('active');
        }, 50);
    }, 400);
}

function resetQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    scores = {
        pm: 0,
        dev: 0,
        design: 0,
        data: 0,
        generalist: 0
    };
    
    resultView.classList.remove('active');
    setTimeout(() => {
        resultView.classList.add('hidden');
        landingView.classList.remove('hidden');
        setTimeout(() => {
            landingView.classList.add('active');
        }, 50);
    }, 400);
}
