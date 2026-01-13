// 250 DevOps Engineer Interview Questions - Docker, Kubernetes, CI/CD, AWS, Linux, Terraform, Jenkins, Ansible
export const DEVOPS_QUESTIONS = {
    // Docker Questions (40)
    docker: {
        easy: [
            "What is Docker and what problem does it solve?",
            "What is the difference between Docker and virtual machines?",
            "What is a Docker image?",
            "What is a Docker container?",
            "What is a Dockerfile?",
            "What is the purpose of Docker Hub?",
            "How do you create a Docker image?",
            "What is the difference between CMD and ENTRYPOINT?",
            "How do you run a Docker container?",
            "What is Docker Compose?",
            "What is the purpose of docker-compose.yml file?",
            "How do you stop a running container?",
            "What is the difference between docker stop and docker kill?",
            "How do you list all running containers?",
        ],
        medium: [
            "What are Docker volumes and why are they important?",
            "What is the difference between COPY and ADD in Dockerfile?",
            "How do you create a multi-stage Docker build?",
            "What is Docker networking and what are the different network types?",
            "How do you optimize Docker image size?",
            "What is the difference between Docker run and Docker exec?",
            "How do you pass environment variables to a Docker container?",
            "What is Docker Swarm?",
            "How do you implement health checks in Docker?",
            "What is the purpose of .dockerignore file?",
            "How do you create and use Docker secrets?",
            "What is the difference between bind mounts and volumes?",
            "How do you limit CPU and memory for a container?",
        ],
        hard: [
            "How do you implement Docker security best practices?",
            "What is Docker overlay network and how does it work?",
            "How do you debug a running Docker container?",
            "What are Docker namespaces and cgroups?",
            "How do you implement rolling updates with Docker Swarm?",
            "What is the Docker storage driver and how do you choose one?",
            "How do you implement container orchestration strategies?",
            "What is the difference between Docker EE and Docker CE?",
            "How do you handle persistent storage in containerized applications?",
            "How do you implement blue-green deployments with Docker?",
            "What is Docker content trust and how does it work?",
            "How do you troubleshoot Docker networking issues?",
            "How do you implement container logging and monitoring?",
        ]
    },

    // Kubernetes Questions (45)
    kubernetes: {
        easy: [
            "What is Kubernetes and why is it used?",
            "What is a Kubernetes Pod?",
            "What is a Kubernetes Node?",
            "What is the difference between a Pod and a Container?",
            "What is a Kubernetes Cluster?",
            "What is kubectl?",
            "What is a Kubernetes Deployment?",
            "What is a Kubernetes Service?",
            "What are Kubernetes namespaces?",
            "What is a ConfigMap in Kubernetes?",
            "What is a Secret in Kubernetes?",
            "How do you scale a deployment in Kubernetes?",
            "What is the purpose of a ReplicaSet?",
            "What is a Kubernetes DaemonSet?",
            "What is the difference between NodePort and ClusterIP?",
        ],
        medium: [
            "What is a Kubernetes Ingress?",
            "How do you implement rolling updates in Kubernetes?",
            "What are Kubernetes probes (liveness and readiness)?",
            "What is a StatefulSet and when would you use it?",
            "How do you manage persistent storage in Kubernetes?",
            "What is a PersistentVolume and PersistentVolumeClaim?",
            "What is Helm and why is it used?",
            "How do you implement RBAC in Kubernetes?",
            "What is a Kubernetes Job and CronJob?",
            "How do you implement horizontal pod autoscaling?",
            "What is the difference between Deployment and StatefulSet?",
            "What is a Kubernetes Operator?",
            "How do you debug a failing Pod?",
            "What is a Kubernetes NetworkPolicy?",
            "How do you implement zero-downtime deployments?",
        ],
        hard: [
            "How do you secure a Kubernetes cluster?",
            "What is the Kubernetes control plane architecture?",
            "How do you implement service mesh (Istio/Linkerd)?",
            "What are Kubernetes admission controllers?",
            "How do you implement disaster recovery in Kubernetes?",
            "What is the difference between kube-proxy modes?",
            "How do you troubleshoot Kubernetes networking issues?",
            "What are Custom Resource Definitions (CRDs)?",
            "How do you implement multi-cluster Kubernetes?",
            "What is Kubernetes Federation?",
            "How do you optimize Kubernetes resource utilization?",
            "What is the etcd database in Kubernetes?",
            "How do you implement GitOps with Kubernetes?",
            "What are Kubernetes Pod Security Policies?",
            "How do you handle Kubernetes cluster upgrades?",
        ]
    },

    // CI/CD Questions (35)
    cicd: {
        easy: [
            "What is CI/CD and why is it important?",
            "What is Continuous Integration?",
            "What is Continuous Delivery?",
            "What is Continuous Deployment?",
            "What is a build pipeline?",
            "What is the difference between CI and CD?",
            "What are the benefits of CI/CD?",
            "What is a CI/CD tool? Give examples.",
            "What is version control in CI/CD context?",
            "What is automated testing in CI/CD?",
            "What is a pipeline trigger?",
            "What is artifact management?",
        ],
        medium: [
            "How do you design an effective CI/CD pipeline?",
            "What is pipeline as code?",
            "How do you implement automated testing in CI/CD?",
            "What is blue-green deployment strategy?",
            "What is canary deployment?",
            "How do you handle environment-specific configurations?",
            "What are deployment gates and approvals?",
            "How do you implement rollback strategies?",
            "What is infrastructure as code in CI/CD?",
            "How do you manage secrets in CI/CD pipelines?",
            "What is the difference between push and pull deployments?",
            "How do you implement code quality checks in CI/CD?",
        ],
        hard: [
            "How do you implement CI/CD for microservices architecture?",
            "What is GitOps and how does it differ from traditional CI/CD?",
            "How do you implement multi-environment CI/CD?",
            "What are the security best practices for CI/CD pipelines?",
            "How do you handle database migrations in CI/CD?",
            "What is progressive delivery?",
            "How do you implement feature flags with CI/CD?",
            "What is chaos engineering in CI/CD?",
            "How do you measure and optimize CI/CD pipeline performance?",
            "How do you implement compliance and auditing in CI/CD?",
            "What is trunk-based development?",
        ]
    },

    // AWS Questions (40)
    aws: {
        easy: [
            "What is AWS and what are its core services?",
            "What is Amazon EC2?",
            "What is Amazon S3?",
            "What is the difference between EC2 and Lambda?",
            "What is an AWS Region and Availability Zone?",
            "What is Amazon VPC?",
            "What is IAM in AWS?",
            "What is the difference between S3 and EBS?",
            "What is Amazon RDS?",
            "What is AWS CloudWatch?",
            "What is an Elastic Load Balancer?",
            "What is Auto Scaling in AWS?",
            "What is Route 53?",
            "What is the AWS Free Tier?",
        ],
        medium: [
            "How do you design a highly available architecture on AWS?",
            "What is AWS Lambda and when would you use it?",
            "What are Security Groups and NACLs?",
            "How do you implement VPC peering?",
            "What is AWS ECS and EKS?",
            "What is AWS CloudFormation?",
            "How do you implement disaster recovery on AWS?",
            "What is AWS Elastic Beanstalk?",
            "What is the difference between SQS and SNS?",
            "How do you secure an S3 bucket?",
            "What is AWS Transit Gateway?",
            "How do you implement cross-region replication?",
            "What is AWS CodePipeline?",
        ],
        hard: [
            "How do you design a multi-region active-active architecture?",
            "What is AWS Well-Architected Framework?",
            "How do you implement cost optimization on AWS?",
            "What is AWS Organizations and Control Tower?",
            "How do you implement zero-trust security on AWS?",
            "What is AWS Landing Zone?",
            "How do you implement compliance automation on AWS?",
            "What is AWS Service Catalog?",
            "How do you design for 99.99% availability?",
            "What is AWS PrivateLink and when would you use it?",
            "How do you implement GitOps on AWS?",
            "What is AWS Outposts?",
            "How do you handle data sovereignty requirements on AWS?",
        ]
    },

    // Linux Questions (30)
    linux: {
        easy: [
            "What is the Linux kernel?",
            "What are the basic Linux file system directories?",
            "What is the difference between absolute and relative paths?",
            "What are file permissions in Linux?",
            "How do you change file permissions using chmod?",
            "What is the purpose of the sudo command?",
            "What is a Linux process?",
            "How do you list running processes in Linux?",
            "What is the difference between ps and top commands?",
            "What is a Linux package manager?",
        ],
        medium: [
            "What is a Linux shell and what are different types?",
            "How do you manage Linux services with systemd?",
            "What is SSH and how do you set up SSH keys?",
            "How do you monitor system resources in Linux?",
            "What is iptables and how do you configure it?",
            "How do you troubleshoot network connectivity in Linux?",
            "What is a Linux cron job and how do you create one?",
            "How do you manage disk space in Linux?",
            "What is LVM and why is it useful?",
            "How do you configure Linux networking?",
        ],
        hard: [
            "How do you optimize Linux system performance?",
            "What are Linux namespaces and cgroups?",
            "How do you implement Linux security hardening?",
            "What is SELinux and how do you configure it?",
            "How do you troubleshoot Linux kernel issues?",
            "What is the Linux boot process?",
            "How do you implement Linux high availability?",
            "What are Linux kernel modules?",
            "How do you analyze Linux system logs?",
            "How do you implement Linux automation with shell scripting?",
        ]
    },

    // Terraform Questions (30)
    terraform: {
        easy: [
            "What is Terraform and what is Infrastructure as Code?",
            "What is the difference between Terraform and Ansible?",
            "What is a Terraform provider?",
            "What is a Terraform resource?",
            "What is terraform init command?",
            "What is terraform plan command?",
            "What is terraform apply command?",
            "What is the Terraform state file?",
            "What are Terraform variables?",
            "What is terraform destroy command?",
        ],
        medium: [
            "What are Terraform modules and how do you create them?",
            "How do you manage Terraform state in a team environment?",
            "What is Terraform remote backend?",
            "How do you use Terraform workspaces?",
            "What is the difference between count and for_each?",
            "How do you import existing resources into Terraform?",
            "What are Terraform data sources?",
            "How do you handle secrets in Terraform?",
            "What is Terraform output and how do you use it?",
            "How do you version Terraform configurations?",
        ],
        hard: [
            "How do you implement Terraform best practices at scale?",
            "What is Terraform Cloud and Terraform Enterprise?",
            "How do you implement Terraform testing strategies?",
            "What are Terraform provisioners and when should you use them?",
            "How do you handle Terraform state drift?",
            "What is Terragrunt and when would you use it?",
            "How do you implement policy as code with Terraform?",
            "What are Terraform custom providers?",
            "How do you implement Terraform in a CI/CD pipeline?",
            "How do you handle complex dependencies in Terraform?",
        ]
    },

    // Jenkins Questions (15)
    jenkins: {
        easy: [
            "What is Jenkins and what is it used for?",
            "What is a Jenkins job?",
            "What is a Jenkins pipeline?",
            "What is a Jenkinsfile?",
            "What are Jenkins plugins?",
        ],
        medium: [
            "What is the difference between declarative and scripted pipelines?",
            "How do you configure Jenkins agents/nodes?",
            "What is Jenkins shared libraries?",
            "How do you implement Jenkins security?",
            "What is Blue Ocean in Jenkins?",
        ],
        hard: [
            "How do you scale Jenkins for enterprise use?",
            "What are Jenkins best practices for large organizations?",
            "How do you implement Jenkins as code?",
            "How do you troubleshoot Jenkins performance issues?",
            "How do you implement Jenkins high availability?",
        ]
    },

    // Ansible Questions (15)
    ansible: {
        easy: [
            "What is Ansible and how does it work?",
            "What is an Ansible playbook?",
            "What is an Ansible inventory?",
            "What are Ansible modules?",
            "What is the difference between Ansible and Puppet?",
        ],
        medium: [
            "What are Ansible roles and how do you create them?",
            "How do you manage Ansible variables?",
            "What is Ansible Vault and how do you use it?",
            "What are Ansible handlers?",
            "How do you implement Ansible templates?",
        ],
        hard: [
            "How do you optimize Ansible playbook performance?",
            "What is Ansible Tower/AWX?",
            "How do you implement Ansible testing strategies?",
            "How do you implement dynamic inventory in Ansible?",
            "How do you integrate Ansible with CI/CD pipelines?",
        ]
    }
};

export function getRandomDevOpsQuestions(
    technologies: string[],
    experienceLevel: string,
    count: number,
    usedQuestions: string[] = []
): Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> {
    // Define difficulty distribution based on experience level
    const difficultyDistribution = {
        'fresher': { easy: 0.8, medium: 0.15, hard: 0.05 },
        'entry-level': { easy: 0.8, medium: 0.15, hard: 0.05 },
        'junior': { easy: 0.5, medium: 0.4, hard: 0.1 },
        'mid': { easy: 0.2, medium: 0.6, hard: 0.2 },
        'senior': { easy: 0.1, medium: 0.4, hard: 0.5 },
        'lead': { easy: 0.05, medium: 0.25, hard: 0.7 }
    };

    const level = experienceLevel.toLowerCase();
    console.log('Experience Level:', level);
    const distribution = difficultyDistribution[level as keyof typeof difficultyDistribution] || difficultyDistribution['mid'];
    console.log('Distribution:', distribution);

    // Calculate question counts for each difficulty
    const easyCount = Math.round(count * distribution.easy);
    const mediumCount = Math.round(count * distribution.medium);
    const hardCount = count - easyCount - mediumCount;

    console.log(`Question Distribution for ${level}:`, {
        total: count,
        easy: easyCount,
        medium: mediumCount,
        hard: hardCount
    });

    const allQuestions: Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> = [];

    // Helper function to get questions by difficulty
    const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', targetCount: number) => {
        const questions: Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> = [];

        technologies.forEach(tech => {
            const techKey = tech.toLowerCase().replace(/\s+/g, '').replace('.', '');
            let questionSet: string[] = [];
            let topics: string[] = [];

            if (techKey.includes('docker')) {
                questionSet = DEVOPS_QUESTIONS.docker[difficulty];
                topics = ['docker', 'containers', 'containerization', 'devops'];
            } else if (techKey.includes('kubernetes') || techKey.includes('k8s')) {
                questionSet = DEVOPS_QUESTIONS.kubernetes[difficulty];
                topics = ['kubernetes', 'k8s', 'orchestration', 'containers'];
            } else if (techKey.includes('cicd') || techKey.includes('ci/cd') || techKey.includes('pipeline')) {
                questionSet = DEVOPS_QUESTIONS.cicd[difficulty];
                topics = ['cicd', 'automation', 'deployment', 'devops'];
            } else if (techKey.includes('aws') || techKey.includes('amazon') || techKey.includes('cloud')) {
                questionSet = DEVOPS_QUESTIONS.aws[difficulty];
                topics = ['aws', 'cloud', 'amazon', 'infrastructure'];
            } else if (techKey.includes('linux') || techKey.includes('unix')) {
                questionSet = DEVOPS_QUESTIONS.linux[difficulty];
                topics = ['linux', 'operating system', 'unix', 'shell'];
            } else if (techKey.includes('terraform') || techKey.includes('iac')) {
                questionSet = DEVOPS_QUESTIONS.terraform[difficulty];
                topics = ['terraform', 'iac', 'infrastructure as code', 'provisioning'];
            } else if (techKey.includes('jenkins')) {
                questionSet = DEVOPS_QUESTIONS.jenkins[difficulty];
                topics = ['jenkins', 'cicd', 'automation', 'build'];
            } else if (techKey.includes('ansible')) {
                questionSet = DEVOPS_QUESTIONS.ansible[difficulty];
                topics = ['ansible', 'configuration management', 'automation', 'iac'];
            } else if (techKey.includes('devops') || techKey === 'devops') {
                // Generic DevOps - get questions from all categories
                const allCategories = [
                    { key: 'docker', topics: ['docker', 'containers', 'devops'] },
                    { key: 'kubernetes', topics: ['kubernetes', 'orchestration', 'devops'] },
                    { key: 'cicd', topics: ['cicd', 'automation', 'devops'] },
                    { key: 'aws', topics: ['aws', 'cloud', 'devops'] },
                    { key: 'linux', topics: ['linux', 'system administration', 'devops'] },
                    { key: 'terraform', topics: ['terraform', 'iac', 'devops'] },
                    { key: 'jenkins', topics: ['jenkins', 'cicd', 'devops'] },
                    { key: 'ansible', topics: ['ansible', 'automation', 'devops'] }
                ];

                allCategories.forEach(cat => {
                    const categoryQuestions = DEVOPS_QUESTIONS[cat.key as keyof typeof DEVOPS_QUESTIONS][difficulty];
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
                return questions.sort(() => Math.random() - 0.5).slice(0, targetCount);
            }

            questionSet.forEach(question => {
                if (!usedQuestions.includes(question)) {
                    questions.push({
                        question,
                        expectedTopics: topics,
                        difficulty
                    });
                }
            });
        });

        // Shuffle and return requested count
        const shuffled = questions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, targetCount);
    };

    // Get questions for each difficulty level
    if (easyCount > 0) {
        allQuestions.push(...getQuestionsByDifficulty('easy', easyCount));
    }
    if (mediumCount > 0) {
        allQuestions.push(...getQuestionsByDifficulty('medium', mediumCount));
    }
    if (hardCount > 0) {
        allQuestions.push(...getQuestionsByDifficulty('hard', hardCount));
    }

    // Add extra randomization with timestamp-based seed
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

    // Multiple shuffles for maximum randomness
    let finalQuestions = shuffleWithSeed(allQuestions, randomSeed);
    finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);
    finalQuestions = shuffleWithSeed(finalQuestions, Date.now());

    return finalQuestions;
}
