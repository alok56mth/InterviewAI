// 100 UI/UX Designer Interview Questions - Design Principles, User Research, Prototyping, Tools
export const UIUX_QUESTIONS = {
    // Design Fundamentals (25)
    designFundamentals: {
        easy: [
            "What is the difference between UI and UX design?",
            "What are the key principles of good UI design?",
            "What is visual hierarchy and why is it important?",
            "What is whitespace and how does it improve design?",
            "What is the purpose of a color palette in design?",
            "What is typography and why does it matter in UI design?",
            "What is consistency in design and why is it important?",
            "What are the basic principles of layout design?",
            "What is the difference between serif and sans-serif fonts?",
            "What is contrast in design and how is it used?",
        ],
        medium: [
            "How do you create an effective visual hierarchy?",
            "What is the 60-30-10 color rule in design?",
            "How do you choose the right typography for a project?",
            "What is Gestalt theory and how does it apply to UI design?",
            "How do you design for different screen sizes?",
            "What is the importance of grid systems in design?",
            "How do you balance aesthetics with functionality?",
            "What is the role of iconography in UI design?",
        ],
        hard: [
            "How do you create a design system from scratch?",
            "What are the principles of inclusive design?",
            "How do you design for accessibility (WCAG guidelines)?",
            "How do you measure the effectiveness of a design?",
            "What is atomic design methodology?",
            "How do you handle design debt in large projects?",
            "How do you create scalable design systems?",
        ]
    },

    // User Experience (25)
    userExperience: {
        easy: [
            "What is user experience (UX) design?",
            "What is a user persona and why is it important?",
            "What is a user journey map?",
            "What is the difference between usability and user experience?",
            "What are the five elements of UX design?",
            "What is information architecture?",
            "What is a wireframe?",
            "What is the purpose of a sitemap?",
            "What is user-centered design?",
            "What are pain points in UX?",
        ],
        medium: [
            "How do you conduct user research?",
            "What is the difference between qualitative and quantitative research?",
            "How do you create effective user personas?",
            "What is usability testing and how do you conduct it?",
            "How do you analyze user feedback?",
            "What is A/B testing in UX design?",
            "How do you prioritize features based on user needs?",
            "What is the role of empathy in UX design?",
        ],
        hard: [
            "How do you measure UX success with metrics?",
            "What is the System Usability Scale (SUS)?",
            "How do you conduct heuristic evaluation?",
            "How do you balance user needs with business goals?",
            "What is cognitive load and how do you minimize it?",
            "How do you design for behavior change?",
            "How do you handle conflicting user research data?",
        ]
    },

    // Prototyping & Tools (20)
    prototypingTools: {
        easy: [
            "What is the difference between low-fidelity and high-fidelity prototypes?",
            "What design tools have you used (Figma, Sketch, Adobe XD)?",
            "What is a mockup?",
            "What is the purpose of prototyping?",
            "How do you create interactive prototypes?",
            "What is a design handoff?",
        ],
        medium: [
            "How do you use Figma's auto-layout feature?",
            "What are design tokens and how do you use them?",
            "How do you create responsive designs in Figma?",
            "What is the difference between components and instances?",
            "How do you organize design files for team collaboration?",
            "What is version control in design tools?",
            "How do you create micro-interactions in prototypes?",
        ],
        hard: [
            "How do you implement design systems in Figma?",
            "What is the developer handoff process?",
            "How do you use design plugins to improve workflow?",
            "How do you create advanced animations in prototypes?",
            "What is design ops and how do you implement it?",
            "How do you maintain consistency across multiple projects?",
            "How do you handle design system versioning?",
        ]
    },

    // Interaction Design (15)
    interactionDesign: {
        easy: [
            "What is interaction design?",
            "What are micro-interactions?",
            "What is a call-to-action (CTA)?",
            "What is affordance in design?",
            "What is feedback in interface design?",
        ],
        medium: [
            "How do you design intuitive navigation?",
            "What are the principles of motion design?",
            "How do you design for touch interfaces?",
            "What is the difference between tap and click interactions?",
            "How do you handle error states in design?",
        ],
        hard: [
            "How do you design complex multi-step workflows?",
            "What is progressive disclosure?",
            "How do you balance animation with performance?",
            "How do you design for gesture-based interactions?",
            "How do you create seamless transitions between states?",
        ]
    },

    // Mobile & Responsive Design (15)
    mobileDesign: {
        easy: [
            "What is responsive design?",
            "What is mobile-first design approach?",
            "What are breakpoints in responsive design?",
            "What is the difference between adaptive and responsive design?",
            "What are the key considerations for mobile UI?",
        ],
        medium: [
            "How do you design for different mobile platforms (iOS vs Android)?",
            "What are Material Design and Human Interface Guidelines?",
            "How do you handle navigation on mobile devices?",
            "What is thumb zone in mobile design?",
            "How do you optimize forms for mobile?",
        ],
        hard: [
            "How do you design for progressive web apps (PWAs)?",
            "What are the challenges of designing for foldable devices?",
            "How do you handle offline states in mobile design?",
            "How do you design for accessibility on mobile?",
            "What is the future of mobile-first design?",
        ]
    }
};

export function getRandomUIUXQuestions(
    technologies: string[],
    experienceLevel: string,
    count: number,
    usedQuestions: string[] = []
): Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> {
    const difficultyDistribution = {
        'fresher': { easy: 0.8, medium: 0.15, hard: 0.05 },
        'entry-level': { easy: 0.8, medium: 0.15, hard: 0.05 },
        'junior': { easy: 0.5, medium: 0.4, hard: 0.1 },
        'mid': { easy: 0.2, medium: 0.6, hard: 0.2 },
        'senior': { easy: 0.1, medium: 0.4, hard: 0.5 },
        'lead': { easy: 0.05, medium: 0.25, hard: 0.7 }
    };

    const level = experienceLevel.toLowerCase();
    const distribution = difficultyDistribution[level as keyof typeof difficultyDistribution] || difficultyDistribution['mid'];

    const easyCount = Math.round(count * distribution.easy);
    const mediumCount = Math.round(count * distribution.medium);
    const hardCount = count - easyCount - mediumCount;

    const allQuestions: Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> = [];

    const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', targetCount: number) => {
        const questions: Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> = [];

        technologies.forEach(tech => {
            const techKey = tech.toLowerCase().replace(/\s+/g, '').replace('.', '');

            // For UI/UX, always get from all categories since it's a holistic discipline
            if (techKey.includes('ui') || techKey.includes('ux') || techKey.includes('design') || techKey.includes('uiux')) {
                const allCategories = [
                    { key: 'designFundamentals', topics: ['ui design', 'visual design', 'design principles'] },
                    { key: 'userExperience', topics: ['ux design', 'user research', 'usability'] },
                    { key: 'prototypingTools', topics: ['prototyping', 'figma', 'design tools'] },
                    { key: 'interactionDesign', topics: ['interaction design', 'micro-interactions', 'animations'] },
                    { key: 'mobileDesign', topics: ['mobile design', 'responsive design', 'cross-platform'] }
                ];

                allCategories.forEach(cat => {
                    const categoryQuestions = UIUX_QUESTIONS[cat.key as keyof typeof UIUX_QUESTIONS][difficulty];
                    categoryQuestions.forEach(question => {
                        if (!usedQuestions.includes(question)) {
                            questions.push({
                                question,
                                expectedTopics: cat.topics,
                                difficulty
                            });
                        }
                    });
                });
            }
        });

        const shuffled = questions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, targetCount);
    };

    if (easyCount > 0) {
        allQuestions.push(...getQuestionsByDifficulty('easy', easyCount));
    }
    if (mediumCount > 0) {
        allQuestions.push(...getQuestionsByDifficulty('medium', mediumCount));
    }
    if (hardCount > 0) {
        allQuestions.push(...getQuestionsByDifficulty('hard', hardCount));
    }

    const randomSeed = Date.now() + Math.random();
    const shuffleWithSeed = (array: any[], seed: number) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            seed = (seed * 9301 + 49297) % 233280;
        }
        return shuffled;
    };

    let finalQuestions = shuffleWithSeed(allQuestions, randomSeed);
    finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);
    finalQuestions = shuffleWithSeed(finalQuestions, Date.now());

    return finalQuestions;
}
