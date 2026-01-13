// 150 Security Engineer Interview Questions - Network Security, Application Security, Cryptography, Cloud Security, Incident Response
export const SECURITY_QUESTIONS = {
    // Network Security (30)
    networkSecurity: {
        easy: [
            "What is a firewall and how does it work?",
            "What is the difference between TCP and UDP?",
            "What is a VPN and how does it work?",
            "What is the OSI model and its layers?",
            "What is the difference between HTTP and HTTPS?",
            "What is an IP address?",
            "What is DNS and how does it work?",
            "What is a MAC address?",
            "What is the difference between public and private IP addresses?",
            "What is a port and what are common port numbers?",
        ],
        medium: [
            "What is a DDoS attack and how do you prevent it?",
            "What is network segmentation and why is it important?",
            "What is an IDS vs IPS?",
            "How does a man-in-the-middle (MITM) attack work?",
            "What is ARP poisoning?",
            "What is SSL/TLS and how does the handshake work?",
            "What is a proxy server and how does it enhance security?",
            "What is port scanning and how do you detect it?",
            "What is a DMZ in network security?",
            "What is the difference between stateful and stateless firewall?",
        ],
        hard: [
            "How do you secure a network against advanced persistent threats (APTs)?",
            "What is zero trust network architecture?",
            "How do you implement network access control (NAC)?",
            "What is BGP hijacking and how do you prevent it?",
            "How do you detect lateral movement in a network?",
            "What is DNS tunneling and how do you detect it?",
            "How do you secure IoT devices on a network?",
            "What is microsegmentation?",
            "How do you implement SIEM effectively?",
            "What is network forensics and how is it performed?",
        ]
    },

    // Application Security (35)
    applicationSecurity: {
        easy: [
            "What is SQL injection?",
            "What is Cross-Site Scripting (XSS)?",
            "What is Cross-Site Request Forgery (CSRF)?",
            "What is input validation?",
            "What is the principle of least privilege?",
            "What is authentication vs authorization?",
            "What are cookies and how are they used in security?",
            "What is a session and how do you secure it?",
            "What is the OWASP Top 10?",
            "What is secure coding?",
            "What is HTTPS and why is it important for web security?",
            "What is a security header?",
        ],
        medium: [
            "How do you prevent SQL injection attacks?",
            "What is the difference between stored and reflected XSS?",
            "How do you implement secure authentication?",
            "What is JWT and how do you use it securely?",
            "What is OAuth 2.0 and how does it work?",
            "What is password hashing and which algorithms should be used?",
            "What is a security misconfiguration?",
            "How do you perform secure code review?",
            "What is SAST vs DAST?",
            "What is Content Security Policy (CSP)?",
            "How do you protect against clickjacking?",
            "What is insecure deserialization?",
        ],
        hard: [
            "How do you implement a Web Application Firewall (WAF)?",
            "What is threat modeling and how do you perform it?",
            "How do you secure microservices architecture?",
            "What is API security and best practices?",
            "How do you implement DevSecOps?",
            "What is runtime application self-protection (RASP)?",
            "How do you secure container applications?",
            "What is software composition analysis (SCA)?",
            "How do you handle security in CI/CD pipelines?",
            "What is the STRIDE threat model?",
            "How do you perform penetration testing on web applications?",
        ]
    },

    // Cryptography (25)
    cryptography: {
        easy: [
            "What is encryption?",
            "What is the difference between symmetric and asymmetric encryption?",
            "What is a hash function?",
            "What is a digital signature?",
            "What is a certificate authority (CA)?",
            "What is SSL/TLS certificate?",
            "What is the purpose of a salt in hashing?",
            "What is Base64 encoding?",
        ],
        medium: [
            "What is AES encryption and how does it work?",
            "What is RSA encryption and how does it work?",
            "What is the Diffie-Hellman key exchange?",
            "What is a rainbow table attack?",
            "What is a digital certificate and how does PKI work?",
            "What is the difference between MD5, SHA-1, and SHA-256?",
            "What is key management and why is it important?",
            "What is elliptic curve cryptography (ECC)?",
            "What is a nonce in cryptography?",
        ],
        hard: [
            "What are the vulnerabilities in cryptographic implementations?",
            "How do you implement end-to-end encryption?",
            "What is homomorphic encryption?",
            "What is quantum cryptography and its implications?",
            "How do you handle cryptographic key rotation?",
            "What is perfect forward secrecy?",
            "How do you secure key storage?",
            "What is hardware security module (HSM)?",
        ]
    },

    // Cloud Security (25)
    cloudSecurity: {
        easy: [
            "What is cloud security?",
            "What is the shared responsibility model?",
            "What is IAM (Identity and Access Management)?",
            "What are security groups in cloud?",
            "What is the difference between public, private, and hybrid cloud?",
            "What is multi-factor authentication (MFA)?",
            "What are access control lists (ACLs)?",
            "What is encryption at rest vs encryption in transit?",
        ],
        medium: [
            "How do you secure S3 buckets?",
            "What is AWS Security Hub?",
            "How do you implement least privilege in cloud IAM?",
            "What is cloud workload protection?",
            "How do you detect misconfigurations in cloud?",
            "What is CASB (Cloud Access Security Broker)?",
            "How do you secure serverless functions?",
            "What is cloud security posture management (CSPM)?",
            "How do you handle secrets management in cloud?",
        ],
        hard: [
            "How do you implement zero trust in cloud environments?",
            "What is container security in cloud?",
            "How do you detect and respond to cloud breaches?",
            "What is cloud-native security architecture?",
            "How do you audit cloud infrastructure?",
            "What is infrastructure as code (IaC) security?",
            "How do you handle compliance in multi-cloud environments?",
            "What is cloud forensics?",
        ]
    },

    // Incident Response & Forensics (20)
    incidentResponse: {
        easy: [
            "What is incident response?",
            "What are the phases of incident response?",
            "What is a security incident?",
            "What is log analysis?",
            "What is vulnerability scanning?",
            "What is a security operations center (SOC)?",
            "What is the difference between vulnerability and exploit?",
        ],
        medium: [
            "How do you create an incident response plan?",
            "What is the role of a SIEM in incident response?",
            "How do you prioritize security incidents?",
            "What is threat hunting?",
            "How do you perform root cause analysis?",
            "What is chain of custody in digital forensics?",
            "How do you collect and preserve digital evidence?",
        ],
        hard: [
            "How do you respond to a ransomware attack?",
            "What is memory forensics and how is it performed?",
            "How do you handle an APT incident?",
            "What is malware analysis?",
            "How do you build a threat intelligence program?",
            "What is the MITRE ATT&CK framework?",
        ]
    },

    // Compliance & Risk Management (15)
    complianceRisk: {
        easy: [
            "What is a security policy?",
            "What is risk assessment?",
            "What is GDPR?",
            "What is PCI DSS?",
            "What is HIPAA?",
        ],
        medium: [
            "How do you perform a security audit?",
            "What is the difference between vulnerability assessment and penetration testing?",
            "What is a security framework (NIST, ISO 27001)?",
            "How do you calculate risk?",
            "What is data classification?",
        ],
        hard: [
            "How do you build a security awareness program?",
            "What is SOC 2 compliance?",
            "How do you handle third-party risk management?",
            "What is business continuity planning?",
            "How do you implement a security governance program?",
        ]
    }
};

export function getRandomSecurityQuestions(
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

            // For Security, get from all categories
            if (techKey.includes('security') || techKey.includes('cyber') || techKey.includes('infosec')) {
                const allCategories = [
                    { key: 'networkSecurity', topics: ['network security', 'firewall', 'networking'] },
                    { key: 'applicationSecurity', topics: ['application security', 'appsec', 'web security'] },
                    { key: 'cryptography', topics: ['cryptography', 'encryption', 'hashing'] },
                    { key: 'cloudSecurity', topics: ['cloud security', 'aws', 'azure'] },
                    { key: 'incidentResponse', topics: ['incident response', 'forensics', 'soc'] },
                    { key: 'complianceRisk', topics: ['compliance', 'risk management', 'governance'] }
                ];

                allCategories.forEach(cat => {
                    const categoryQuestions = SECURITY_QUESTIONS[cat.key as keyof typeof SECURITY_QUESTIONS][difficulty];
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
            } else if (techKey.includes('network')) {
                const categoryQuestions = SECURITY_QUESTIONS.networkSecurity[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['network security', 'firewall'], difficulty });
                    }
                });
            } else if (techKey.includes('application') || techKey.includes('appsec') || techKey.includes('web')) {
                const categoryQuestions = SECURITY_QUESTIONS.applicationSecurity[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['application security', 'owasp'], difficulty });
                    }
                });
            } else if (techKey.includes('crypto') || techKey.includes('encrypt')) {
                const categoryQuestions = SECURITY_QUESTIONS.cryptography[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['cryptography', 'encryption'], difficulty });
                    }
                });
            } else if (techKey.includes('cloud') || techKey.includes('aws') || techKey.includes('azure')) {
                const categoryQuestions = SECURITY_QUESTIONS.cloudSecurity[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['cloud security', 'iam'], difficulty });
                    }
                });
            }
        });

        const shuffled = questions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, targetCount);
    };

    if (easyCount > 0) allQuestions.push(...getQuestionsByDifficulty('easy', easyCount));
    if (mediumCount > 0) allQuestions.push(...getQuestionsByDifficulty('medium', mediumCount));
    if (hardCount > 0) allQuestions.push(...getQuestionsByDifficulty('hard', hardCount));

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

    return finalQuestions;
}
