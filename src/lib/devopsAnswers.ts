// DevOps Interview Answers - Part 1: Docker & Kubernetes
export const DEVOPS_ANSWERS = {
    docker: {
        easy: {
            "What is Docker and what problem does it solve?": "Docker is a containerization platform that packages applications with their dependencies into standardized units called containers. It solves the 'works on my machine' problem by ensuring consistent environments across development, testing, and production.",
            "What is the difference between Docker and virtual machines?": "Docker containers share the host OS kernel and are lightweight (MBs), start in seconds. VMs include full OS, are heavier (GBs), and take minutes to start. Containers provide process-level isolation while VMs provide hardware-level isolation.",
            "What is a Docker image?": "A Docker image is a read-only template containing instructions for creating a container. It includes the application code, runtime, libraries, and dependencies. Images are built from Dockerfiles and stored in registries.",
            "What is a Docker container?": "A container is a running instance of a Docker image. It's an isolated environment with its own filesystem, networking, and process space. Containers are ephemeral and can be started, stopped, and deleted quickly.",
            "What is a Dockerfile?": "A Dockerfile is a text file containing instructions to build a Docker image. It specifies the base image, copies files, sets environment variables, exposes ports, and defines the command to run.",
            "What is the purpose of Docker Hub?": "Docker Hub is a cloud-based registry for storing and sharing Docker images. It provides public and private repositories, automated builds, webhooks, and official images from software vendors.",
            "How do you create a Docker image?": "Use 'docker build -t imagename:tag .' command in the directory containing Dockerfile. The -t flag names and tags the image. Docker executes each instruction in the Dockerfile to create layers.",
            "What is the difference between CMD and ENTRYPOINT?": "CMD provides default arguments that can be overridden at runtime. ENTRYPOINT defines the main command that always runs. Use ENTRYPOINT for the main executable and CMD for default parameters.",
            "How do you run a Docker container?": "Use 'docker run [options] image [command]'. Common options: -d (detached), -p (port mapping), -v (volume), --name (container name), -e (environment variables).",
            "What is Docker Compose?": "Docker Compose is a tool for defining and running multi-container applications. It uses a YAML file to configure services, networks, and volumes, allowing you to start all services with 'docker-compose up'.",
            "What is the purpose of docker-compose.yml file?": "It defines the services, networks, volumes, and their configurations for a multi-container application. It specifies image names, port mappings, environment variables, and dependencies between services.",
            "How do you stop a running container?": "Use 'docker stop container_name' to gracefully stop (sends SIGTERM, then SIGKILL after timeout). Use 'docker rm container_name' to remove a stopped container.",
            "What is the difference between docker stop and docker kill?": "docker stop sends SIGTERM allowing graceful shutdown with a default 10-second timeout before SIGKILL. docker kill immediately sends SIGKILL, forcing immediate termination without cleanup.",
            "How do you list all running containers?": "Use 'docker ps' to list running containers. Use 'docker ps -a' to list all containers including stopped ones. Add '--format' for custom output formatting."
        },
        medium: {
            "What are Docker volumes and why are they important?": "Volumes are persistent storage mechanisms that exist outside container lifecycle. They're important for data persistence, sharing data between containers, and better performance than bind mounts. Managed by Docker and stored in /var/lib/docker/volumes/.",
            "What is the difference between COPY and ADD in Dockerfile?": "COPY simply copies files from host to image. ADD has additional features: auto-extracts tar archives and supports URLs. Best practice: use COPY unless you need ADD's specific features.",
            "How do you create a multi-stage Docker build?": "Use multiple FROM statements in Dockerfile. Each FROM starts a new build stage. Copy artifacts from previous stages using 'COPY --from=stage_name'. Reduces final image size by excluding build tools.",
            "What is Docker networking and what are the different network types?": "Docker networking enables container communication. Types: bridge (default, isolated network), host (shares host network), overlay (multi-host), macvlan (assigns MAC address), none (no networking).",
            "How do you optimize Docker image size?": "Use smaller base images (alpine), multi-stage builds, combine RUN commands, remove unnecessary files, use .dockerignore, order layers for caching, avoid installing unnecessary packages.",
            "What is the difference between Docker run and Docker exec?": "docker run creates and starts a new container from an image. docker exec runs a command in an already running container. Use exec for debugging or running additional processes.",
            "How do you pass environment variables to a Docker container?": "Use -e flag: 'docker run -e VAR=value', --env-file for multiple variables, or define in docker-compose.yml under 'environment' section.",
            "What is Docker Swarm?": "Docker Swarm is Docker's native container orchestration tool. It turns multiple Docker hosts into a single virtual host, providing load balancing, service discovery, rolling updates, and scaling.",
            "How do you implement health checks in Docker?": "Use HEALTHCHECK instruction in Dockerfile: 'HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1'. Docker marks container as healthy/unhealthy based on exit code.",
            "What is the purpose of .dockerignore file?": ".dockerignore excludes files from build context, speeding up builds and reducing image size. Similar to .gitignore, it prevents unnecessary files from being sent to Docker daemon.",
            "How do you create and use Docker secrets?": "In Swarm: 'docker secret create secret_name file'. In compose: define under 'secrets' section. Access in container at /run/secrets/secret_name. Secrets are encrypted at rest and in transit.",
            "What is the difference between bind mounts and volumes?": "Bind mounts map specific host paths to container paths, depend on host structure. Volumes are managed by Docker, portable, have better performance, support volume drivers for remote storage.",
            "How do you limit CPU and memory for a container?": "Use --memory and --cpus flags: 'docker run --memory=512m --cpus=1.5'. In compose: use 'deploy.resources.limits'. Prevents containers from consuming excessive resources."
        },
        hard: {
            "How do you implement Docker security best practices?": "Use official/verified images, scan for vulnerabilities, run as non-root user, use read-only filesystems, limit capabilities, implement resource limits, use secrets management, enable content trust, regular updates.",
            "What is Docker overlay network and how does it work?": "Overlay networks enable communication between containers on different Docker hosts. Uses VXLAN encapsulation to create virtual network spanning hosts. Requires key-value store for network state in Swarm mode.",
            "How do you debug a running Docker container?": "Use 'docker logs' for output, 'docker exec -it container sh' for shell access, 'docker inspect' for configuration, 'docker stats' for resources, 'docker events' for real-time events, attach debugging tools.",
            "What are Docker namespaces and cgroups?": "Namespaces provide isolation (PID, network, mount, user, IPC, UTS). Cgroups limit and account for resource usage (CPU, memory, I/O). Together they enable container isolation and resource control.",
            "How do you implement rolling updates with Docker Swarm?": "Use 'docker service update --image newimage:tag service_name'. Configure update_config in compose: parallelism, delay, failure_action, order. Swarm gradually replaces containers while maintaining availability.",
            "What is the Docker storage driver and how do you choose one?": "Storage drivers handle image and container layer storage. Options: overlay2 (recommended), aufs, devicemapper, btrfs, zfs. Choice depends on OS, kernel version, workload. overlay2 is best for most cases.",
            "How do you implement container orchestration strategies?": "Choose based on scale and complexity. Swarm for simplicity, Kubernetes for enterprise. Consider scheduling, scaling, networking, service discovery, load balancing, rolling updates, health monitoring.",
            "What is the difference between Docker EE and Docker CE?": "Docker CE (Community Edition) is free, open-source. Docker EE (Enterprise Edition) includes support, certified infrastructure, security scanning, LDAP integration. EE now called Mirantis Container Runtime.",
            "How do you handle persistent storage in containerized applications?": "Use Docker volumes for database/stateful apps, external storage (NFS, cloud), volume plugins, StatefulSets in K8s, backup strategies, avoid storing state in containers when possible.",
            "How do you implement blue-green deployments with Docker?": "Run two identical environments (blue=current, green=new). Deploy to green, test, switch load balancer. Enables instant rollback. Use Docker Compose or orchestrator with service aliases/labels.",
            "What is Docker content trust and how does it work?": "Content trust uses digital signatures to verify image publisher identity and integrity. Enable with DOCKER_CONTENT_TRUST=1. Uses Notary for signing. Prevents running unsigned/tampered images.",
            "How do you troubleshoot Docker networking issues?": "Check 'docker network inspect', verify DNS resolution, use 'docker exec' to test connectivity, check iptables rules, verify port mappings, examine docker logs, use tcpdump/wireshark.",
            "How do you implement container logging and monitoring?": "Use logging drivers (json-file, syslog, fluentd), centralize with ELK/Splunk, monitor with Prometheus/Grafana, use cAdvisor for container metrics, implement health checks, set up alerting."
        }
    },
    kubernetes: {
        easy: {
            "What is Kubernetes and why is it used?": "Kubernetes (K8s) is an open-source container orchestration platform. It automates deployment, scaling, and management of containerized applications. Used for high availability, scalability, self-healing, and declarative configuration.",
            "What is a Kubernetes Pod?": "A Pod is the smallest deployable unit in Kubernetes. It contains one or more containers that share network namespace, storage, and lifecycle. Pods are ephemeral and managed by controllers.",
            "What is a Kubernetes Node?": "A Node is a worker machine (physical/virtual) in Kubernetes cluster. It runs Pods and includes kubelet (agent), container runtime, and kube-proxy. Managed by the control plane.",
            "What is the difference between a Pod and a Container?": "A container is a single runtime instance. A Pod is a K8s abstraction that can contain multiple containers sharing resources. Pods provide networking, storage, and lifecycle management for containers.",
            "What is a Kubernetes Cluster?": "A cluster is a set of nodes running containerized applications managed by Kubernetes. Contains control plane (API server, scheduler, controller manager, etcd) and worker nodes running workloads.",
            "What is kubectl?": "kubectl is the command-line tool for interacting with Kubernetes clusters. It communicates with the API server to create, inspect, update, and delete resources. Supports declarative and imperative operations.",
            "What is a Kubernetes Deployment?": "A Deployment manages ReplicaSets and provides declarative updates for Pods. It enables rolling updates, rollbacks, scaling, and maintains desired state. Most common way to run stateless applications.",
            "What is a Kubernetes Service?": "A Service provides stable networking for Pods. It creates a consistent endpoint (ClusterIP) for accessing Pods, handles load balancing, and enables service discovery through DNS.",
            "What are Kubernetes namespaces?": "Namespaces provide logical isolation within a cluster. They separate resources, enable multi-tenancy, apply resource quotas, and organize objects. Default namespaces: default, kube-system, kube-public.",
            "What is a ConfigMap in Kubernetes?": "ConfigMap stores non-sensitive configuration data as key-value pairs. Decouples configuration from images. Can be consumed as environment variables, command arguments, or mounted as files.",
            "What is a Secret in Kubernetes?": "Secrets store sensitive data like passwords, tokens, keys. Base64 encoded (not encrypted by default). Can be mounted as volumes or exposed as environment variables. Enable encryption at rest.",
            "How do you scale a deployment in Kubernetes?": "Use 'kubectl scale deployment name --replicas=N' or update replicas in YAML. For auto-scaling, use Horizontal Pod Autoscaler (HPA) based on CPU/memory or custom metrics.",
            "What is the purpose of a ReplicaSet?": "ReplicaSet ensures a specified number of Pod replicas are running. It creates/deletes Pods to match desired count. Usually managed by Deployments rather than used directly.",
            "What is a Kubernetes DaemonSet?": "DaemonSet ensures a Pod runs on all (or selected) nodes. Used for node-level operations like logging agents, monitoring, storage daemons. Automatically adds Pods when nodes join.",
            "What is the difference between NodePort and ClusterIP?": "ClusterIP exposes service internally within cluster (default). NodePort exposes service on each node's IP at a static port, enabling external access. LoadBalancer provides external load balancer."
        },
        medium: {
            "What is a Kubernetes Ingress?": "Ingress manages external HTTP/HTTPS access to services. Provides URL routing, SSL termination, name-based virtual hosting. Requires Ingress Controller (nginx, traefik) to implement rules.",
            "How do you implement rolling updates in Kubernetes?": "Deployments handle rolling updates by default. Configure maxSurge and maxUnavailable in strategy. Use 'kubectl set image' or update YAML. Rollback with 'kubectl rollout undo'.",
            "What are Kubernetes probes (liveness and readiness)?": "Liveness probe checks if container is alive; restarts if failed. Readiness probe checks if ready to receive traffic. Startup probe for slow-starting containers. Types: HTTP, TCP, exec.",
            "What is a StatefulSet and when would you use it?": "StatefulSet manages stateful applications with stable network identities, persistent storage, and ordered deployment/scaling. Use for databases, distributed systems requiring stable hostnames.",
            "How do you manage persistent storage in Kubernetes?": "Use PersistentVolumes (PV) for storage, PersistentVolumeClaims (PVC) to request storage. StorageClasses enable dynamic provisioning. CSI drivers integrate various storage backends.",
            "What is a PersistentVolume and PersistentVolumeClaim?": "PV is cluster storage resource provisioned by admin/dynamically. PVC is user's storage request. PVC binds to suitable PV. Abstracts storage details from applications.",
            "What is Helm and why is it used?": "Helm is Kubernetes package manager. Charts package related resources with templating. Enables versioning, rollbacks, dependency management. Simplifies complex application deployment and management.",
            "How do you implement RBAC in Kubernetes?": "RBAC uses Roles/ClusterRoles (define permissions) and RoleBindings/ClusterRoleBindings (assign to users/groups/service accounts). Follows least privilege principle for security.",
            "What is a Kubernetes Job and CronJob?": "Job runs Pods to completion for batch tasks, ensuring specified completions. CronJob creates Jobs on a schedule (cron syntax). Used for backups, reports, periodic tasks.",
            "How do you implement horizontal pod autoscaling?": "Create HPA: 'kubectl autoscale deployment name --min=2 --max=10 --cpu-percent=80'. Requires metrics-server. Can use custom metrics with Prometheus adapter.",
            "What is the difference between Deployment and StatefulSet?": "Deployment for stateless apps: random Pod names, shared storage. StatefulSet for stateful: stable identities, ordered operations, individual PVCs. StatefulSet maintains state across restarts.",
            "What is a Kubernetes Operator?": "Operator extends K8s to automate complex application management. Uses CRDs and controllers to encode operational knowledge. Manages lifecycle, upgrades, backups for stateful apps.",
            "How do you debug a failing Pod?": "Use 'kubectl describe pod' for events, 'kubectl logs' for output, 'kubectl exec' for shell access, 'kubectl get events', check resource limits, image pull issues, probe failures.",
            "What is a Kubernetes NetworkPolicy?": "NetworkPolicy controls Pod-to-Pod traffic. Defines ingress/egress rules based on labels, namespaces, IP blocks. Requires CNI plugin support (Calico, Cilium). Default allows all traffic.",
            "How do you implement zero-downtime deployments?": "Use rolling update strategy, configure proper readiness probes, set appropriate maxSurge/maxUnavailable, use PodDisruptionBudgets, implement graceful shutdown handling in applications."
        },
        hard: {
            "How do you secure a Kubernetes cluster?": "Enable RBAC, use network policies, Pod security standards, secrets encryption, audit logging, image scanning, limit API access, use service mesh, regular updates, node hardening, OPA/Gatekeeper policies.",
            "What is the Kubernetes control plane architecture?": "API Server: handles REST requests. etcd: stores cluster state. Scheduler: assigns Pods to nodes. Controller Manager: runs controllers. Cloud Controller: cloud provider integration. Highly available setup needs multiple replicas.",
            "How do you implement service mesh (Istio/Linkerd)?": "Service mesh adds sidecar proxies for traffic management, security (mTLS), observability. Istio: feature-rich, complex. Linkerd: lightweight, simpler. Enables canary deployments, circuit breaking, tracing.",
            "What are Kubernetes admission controllers?": "Admission controllers intercept API requests after authentication. Types: validating (approve/deny), mutating (modify). Built-in: LimitRanger, PodSecurity. Custom with webhooks. Enable policy enforcement.",
            "How do you implement disaster recovery in Kubernetes?": "Backup etcd regularly, use Velero for cluster backup/restore, multi-cluster with federation, cross-region replication, GitOps for configuration, test recovery procedures regularly.",
            "What is the difference between kube-proxy modes?": "iptables (default): uses iptables rules, random load balancing. IPVS: better performance, multiple LB algorithms. userspace (legacy): slower, kernel-userspace switching.",
            "How do you troubleshoot Kubernetes networking issues?": "Check CNI plugin, verify network policies, test DNS resolution, use 'kubectl exec' for connectivity tests, examine kube-proxy logs, check node networking, use tools like netshoot.",
            "What are Custom Resource Definitions (CRDs)?": "CRDs extend Kubernetes API with custom resources. Define schema, create instances like native resources. Used with controllers for Operators. Enable domain-specific abstractions.",
            "How do you implement multi-cluster Kubernetes?": "Use tools like Rancher, GKE Hub, or Admiralty. Consider service mesh for cross-cluster communication, centralized management, consistent policies, data replication strategies.",
            "What is Kubernetes Federation?": "Federation manages multiple clusters as one. Enables multi-region deployment, high availability, workload migration. KubeFed v2 uses CRDs for federated types. Complex to operate.",
            "How do you optimize Kubernetes resource utilization?": "Set resource requests/limits, use VPA for right-sizing, HPA for scaling, cluster autoscaler, bin packing scheduling, spot/preemptible nodes, monitor with tools like kubecost.",
            "What is the etcd database in Kubernetes?": "etcd is distributed key-value store for cluster state. Stores all K8s objects, configurations. Requires backup, encryption, high availability (odd number of members), monitoring.",
            "How do you implement GitOps with Kubernetes?": "Use tools like ArgoCD or Flux. Git as source of truth, automatic sync to cluster, declarative configuration, pull-based deployment, audit trail, easy rollbacks.",
            "What are Kubernetes Pod Security Policies?": "PSP (deprecated, replaced by Pod Security Standards) controlled Pod security settings: privileged, capabilities, volumes, host namespaces. Use Pod Security Admission or OPA/Gatekeeper.",
            "How do you handle Kubernetes cluster upgrades?": "Plan upgrade path, backup etcd, upgrade control plane first, then nodes (rolling), test in staging, review deprecations, use managed K8s for easier upgrades, have rollback plan."
        }
    },
    cicd: {
        easy: {
            "What is CI/CD and why is it important?": "CI/CD is Continuous Integration/Continuous Delivery. CI automates code integration and testing. CD automates deployment. Important for faster releases, fewer bugs, consistent deployments, quick feedback.",
            "What is Continuous Integration?": "CI is practice of frequently merging code changes into shared repository. Each merge triggers automated build and tests. Detects integration issues early, improves code quality.",
            "What is Continuous Delivery?": "CD extends CI by automating deployment to staging/production-ready state. Every change is deployable but requires manual approval for production. Reduces deployment risk.",
            "What is Continuous Deployment?": "Continuous Deployment automatically deploys every change that passes tests to production. No manual intervention. Requires robust testing, monitoring, and rollback capabilities.",
            "What is a build pipeline?": "Build pipeline is automated workflow that builds, tests, and deploys code. Stages include: source checkout, build, unit tests, integration tests, security scans, deployment.",
            "What is the difference between CI and CD?": "CI focuses on integrating and testing code frequently. CD focuses on delivering/deploying that code. CI ensures quality; CD ensures rapid, reliable releases.",
            "What are the benefits of CI/CD?": "Faster time to market, reduced risk, improved quality, quick bug detection, consistent deployments, better collaboration, automated testing, easy rollbacks, increased confidence.",
            "What is a CI/CD tool? Give examples.": "CI/CD tools automate pipeline execution. Examples: Jenkins, GitLab CI, GitHub Actions, CircleCI, Travis CI, Azure DevOps, AWS CodePipeline, ArgoCD, TeamCity.",
            "What is version control in CI/CD context?": "Version control (Git) is foundation of CI/CD. Triggers pipelines on code changes, tracks history, enables collaboration, supports branching strategies, enables rollbacks.",
            "What is automated testing in CI/CD?": "Automated tests run without manual intervention in pipeline. Types: unit, integration, e2e, performance, security. Essential for confidence in rapid deployments.",
            "What is a pipeline trigger?": "Trigger initiates pipeline execution. Types: code push, pull request, schedule (cron), manual, API call, upstream pipeline completion, tag creation.",
            "What is artifact management?": "Artifacts are build outputs (binaries, containers, packages). Artifact management stores, versions, and distributes them. Tools: Nexus, Artifactory, Docker Registry, S3."
        },
        medium: {
            "How do you design an effective CI/CD pipeline?": "Start simple, fail fast (run quick tests first), parallelize stages, use caching, implement security scanning, separate build/deploy, use environments, implement rollbacks, monitor pipeline metrics.",
            "What is pipeline as code?": "Defining pipelines in version-controlled files (Jenkinsfile, .gitlab-ci.yml). Benefits: versioning, review process, reusability, documentation, consistency across environments.",
            "How do you implement automated testing in CI/CD?": "Layer tests: unit (fast, many), integration (medium), e2e (slow, few). Run in parallel, use test containers, cache dependencies, fail fast, generate reports.",
            "What is blue-green deployment strategy?": "Run two identical environments. Deploy to inactive (green), test, switch traffic from active (blue). Enables instant rollback by switching back. Requires double resources.",
            "What is canary deployment?": "Gradually roll out changes to small subset of users before full deployment. Monitor for issues, increase percentage if successful. Reduces blast radius of failures.",
            "How do you handle environment-specific configurations?": "Use environment variables, config files per environment, secret management tools, feature flags, ConfigMaps/Secrets in K8s, parameter stores (AWS SSM).",
            "What are deployment gates and approvals?": "Gates are checkpoints requiring conditions before proceeding. Approvals require human sign-off. Used for production deployments, compliance requirements, change management.",
            "How do you implement rollback strategies?": "Maintain previous versions, use blue-green/canary for instant rollback, database migration backwards compatibility, feature flags, automated rollback on metrics failure.",
            "What is infrastructure as code in CI/CD?": "Manage infrastructure through code (Terraform, CloudFormation). Version controlled, reviewed, tested. Deploy infrastructure changes through same CI/CD pipeline as applications.",
            "How do you manage secrets in CI/CD pipelines?": "Use secret management tools (Vault, AWS Secrets Manager), encrypted variables in CI tools, avoid hardcoding, rotate regularly, audit access, least privilege.",
            "What is the difference between push and pull deployments?": "Push: CI/CD pushes changes to target environment. Pull: Target environment pulls changes (GitOps). Pull is more secure, auditable, used with ArgoCD/Flux.",
            "How do you implement code quality checks in CI/CD?": "Static analysis (SonarQube), linting, code coverage thresholds, dependency scanning, security scanning (SAST/DAST), code review requirements, quality gates."
        },
        hard: {
            "How do you implement CI/CD for microservices architecture?": "Independent pipelines per service, shared libraries, contract testing, service mesh integration, centralized logging/monitoring, versioned APIs, coordinated deployments when needed.",
            "What is GitOps and how does it differ from traditional CI/CD?": "GitOps uses Git as single source of truth. Operators sync cluster state to Git. Pull-based, declarative, auditable. Traditional is push-based from CI/CD tool.",
            "How do you implement multi-environment CI/CD?": "Separate stages per environment, environment-specific configs, promotion between environments, environment parity, feature flags, testing at each stage.",
            "What are the security best practices for CI/CD pipelines?": "Secure secrets management, least privilege access, scan dependencies/images, sign artifacts, audit logging, secure runners, network isolation, regular updates.",
            "How do you handle database migrations in CI/CD?": "Version migrations, backwards compatible changes, blue-green databases, run migrations before deployment, test migrations, have rollback scripts, avoid destructive changes.",
            "What is progressive delivery?": "Advanced deployment strategy combining feature flags, canary releases, A/B testing. Gradually release features based on metrics, user segments. Tools: LaunchDarkly, Flagger.",
            "How do you implement feature flags with CI/CD?": "Deploy code with flags disabled, enable for testing/rollout, decouple deployment from release, A/B testing, quick rollback by toggling flag, clean up old flags.",
            "What is chaos engineering in CI/CD?": "Intentionally inject failures to test resilience. Integrate chaos tests in pipeline. Tools: Chaos Monkey, LitmusChaos, Gremlin. Validates system handles failures gracefully.",
            "How do you measure and optimize CI/CD pipeline performance?": "Track metrics: build time, failure rate, MTTR, deployment frequency, lead time. Parallelize, cache, optimize tests, use faster hardware, remove bottlenecks.",
            "How do you implement compliance and auditing in CI/CD?": "Audit trails, approval workflows, policy as code (OPA), signed commits, artifact signing, security scanning, compliance gates, documentation, regular audits.",
            "What is trunk-based development?": "All developers commit to single branch (trunk/main). Short-lived feature branches. Requires feature flags, robust testing. Enables continuous integration, faster feedback."
        }
    },
    aws: {
        easy: {
            "What is AWS and what are its core services?": "AWS (Amazon Web Services) is leading cloud platform. Core services: EC2 (compute), S3 (storage), RDS (database), VPC (networking), IAM (security), Lambda (serverless).",
            "What is Amazon EC2?": "EC2 (Elastic Compute Cloud) provides resizable virtual servers. Choose instance types for different workloads. Supports various OS, auto-scaling, pay-per-use pricing.",
            "What is Amazon S3?": "S3 (Simple Storage Service) is object storage. Unlimited storage, 99.999999999% durability, storage classes for cost optimization, versioning, encryption, static website hosting.",
            "What is the difference between EC2 and Lambda?": "EC2 provides virtual servers you manage (OS, scaling). Lambda is serverless - runs code on events, auto-scales, pay per execution. Lambda for short tasks, EC2 for long-running.",
            "What is an AWS Region and Availability Zone?": "Region is geographic area (us-east-1). AZ is isolated data center within region. Deploy across AZs for high availability. Choose region for latency, compliance.",
            "What is Amazon VPC?": "VPC (Virtual Private Cloud) is isolated network in AWS. Define IP ranges, subnets, route tables, gateways. Controls network access with security groups and NACLs.",
            "What is IAM in AWS?": "IAM (Identity and Access Management) manages users, groups, roles, policies. Controls who can access what. Best practice: least privilege, MFA, avoid root account.",
            "What is the difference between S3 and EBS?": "S3 is object storage (files, backups, static content). EBS is block storage attached to EC2 instances (like hard drive). S3 for sharing, EBS for EC2 local storage.",
            "What is Amazon RDS?": "RDS (Relational Database Service) is managed database. Supports MySQL, PostgreSQL, SQL Server, Oracle, Aurora. Handles backups, patching, scaling, replication.",
            "What is AWS CloudWatch?": "CloudWatch monitors AWS resources and applications. Collects metrics, logs, creates alarms, dashboards. Enables automated actions based on thresholds.",
            "What is an Elastic Load Balancer?": "ELB distributes traffic across targets. Types: ALB (HTTP/HTTPS, layer 7), NLB (TCP/UDP, layer 4), CLB (legacy). Enables high availability, health checks.",
            "What is Auto Scaling in AWS?": "Auto Scaling adjusts EC2 capacity based on demand. Define min/max/desired, scaling policies. Maintains availability, optimizes costs, handles load spikes.",
            "What is Route 53?": "Route 53 is AWS DNS service. Domain registration, DNS routing, health checks. Supports routing policies: simple, weighted, latency, geolocation, failover.",
            "What is the AWS Free Tier?": "Free Tier offers limited free usage for 12 months (EC2, S3, RDS) and always-free services (Lambda limits). Good for learning and small projects."
        },
        medium: {
            "How do you design a highly available architecture on AWS?": "Multi-AZ deployment, load balancers, auto-scaling, RDS Multi-AZ, S3 cross-region replication, Route 53 failover, stateless applications, health checks.",
            "What is AWS Lambda and when would you use it?": "Lambda runs code without managing servers. Triggered by events (API Gateway, S3, DynamoDB). Use for APIs, data processing, automation. Not for long-running tasks.",
            "What are Security Groups and NACLs?": "Security Groups are instance-level stateful firewalls (allow rules only). NACLs are subnet-level stateless firewalls (allow/deny). SGs for instances, NACLs for subnet-level control.",
            "How do you implement VPC peering?": "VPC peering connects VPCs for private communication. Request and accept peering connection, update route tables. Non-transitive, no overlapping CIDRs.",
            "What is AWS ECS and EKS?": "ECS (Elastic Container Service) is AWS container orchestration. EKS (Elastic Kubernetes Service) is managed Kubernetes. ECS simpler/AWS-native, EKS for K8s compatibility.",
            "What is AWS CloudFormation?": "CloudFormation is infrastructure as code for AWS. YAML/JSON templates define resources. Stack management, change sets, drift detection, nested stacks.",
            "How do you implement disaster recovery on AWS?": "Strategies: backup/restore (cheapest), pilot light, warm standby, multi-site active-active (most expensive). Use multi-region, replication, Route 53 failover.",
            "What is AWS Elastic Beanstalk?": "Beanstalk is PaaS for web applications. Handles deployment, scaling, load balancing, monitoring. Supports multiple languages. Good for quick deployment without infrastructure management.",
            "What is the difference between SQS and SNS?": "SQS is message queue (pull-based, decoupling). SNS is pub/sub notification (push-based, fan-out). Use together: SNS fans out to multiple SQS queues.",
            "How do you secure an S3 bucket?": "Block public access, bucket policies, ACLs, encryption (SSE-S3, SSE-KMS), versioning, access logging, VPC endpoints, presigned URLs, CORS configuration.",
            "What is AWS Transit Gateway?": "Transit Gateway connects VPCs and on-premises networks through central hub. Simplifies network architecture vs multiple VPC peerings. Supports routing, multicast.",
            "How do you implement cross-region replication?": "S3 CRR for object replication, RDS read replicas, DynamoDB global tables, Route 53 for DNS failover. Used for DR, latency reduction, compliance.",
            "What is AWS CodePipeline?": "CodePipeline is CI/CD service. Orchestrates build, test, deploy stages. Integrates with CodeBuild, CodeDeploy, third-party tools. Automates release process."
        },
        hard: {
            "How do you design a multi-region active-active architecture?": "Global load balancing (Route 53), data replication (DynamoDB global tables, Aurora Global), stateless applications, eventual consistency handling, conflict resolution.",
            "What is AWS Well-Architected Framework?": "Framework with 6 pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability. Provides best practices, review process.",
            "How do you implement cost optimization on AWS?": "Right-sizing, Reserved Instances, Savings Plans, Spot Instances, S3 lifecycle policies, auto-scaling, unused resource cleanup, Cost Explorer, budgets/alerts.",
            "What is AWS Organizations and Control Tower?": "Organizations manages multiple accounts centrally. SCPs for governance. Control Tower sets up multi-account with best practices, guardrails, landing zone.",
            "How do you implement zero-trust security on AWS?": "Assume no implicit trust. IAM least privilege, VPC endpoints, private subnets, mTLS, WAF, GuardDuty, Security Hub, Inspector, encryption everywhere.",
            "What is AWS Landing Zone?": "Landing Zone is multi-account architecture setup. Includes core accounts (log, audit, shared services), networking, security baselines. Control Tower automates this.",
            "How do you implement compliance automation on AWS?": "AWS Config rules, Security Hub, custom Lambda checks, CloudTrail for audit, automation remediation, compliance-as-code, regular assessments.",
            "What is AWS Service Catalog?": "Service Catalog provides approved, self-service IT products. Create portfolios, products with CloudFormation. Controls, versioning, governance for end users.",
            "How do you design for 99.99% availability?": "Multi-AZ mandatory, consider multi-region, redundant components, auto-scaling, health checks, graceful degradation, chaos engineering, runbooks.",
            "What is AWS PrivateLink and when would you use it?": "PrivateLink provides private connectivity to AWS services and SaaS without internet exposure. Use for security-sensitive data, compliance requirements.",
            "How do you implement GitOps on AWS?": "Use EKS with ArgoCD/Flux, CodePipeline/CodeBuild for CI, ECR for images, Secrets Manager for secrets, Git as source of truth.",
            "What is AWS Outposts?": "Outposts brings AWS hardware/services to on-premises. For latency-sensitive workloads, data residency, local processing. Managed by AWS.",
            "How do you handle data sovereignty requirements on AWS?": "Choose appropriate regions, use dedicated tenancy, encrypt with customer-managed keys, VPC isolation, compliance certifications, contractual commitments."
        }
    },
    linux: {
        easy: {
            "What is the Linux kernel?": "Kernel is core of Linux OS. Manages hardware, processes, memory, filesystems, networking. Monolithic but modular. Different from distributions which add userland tools.",
            "What are the basic Linux file system directories?": "/ (root), /home (user files), /etc (configs), /var (variable data), /tmp (temporary), /bin /sbin (binaries), /usr (user programs), /opt (optional software).",
            "What is the difference between absolute and relative paths?": "Absolute paths start from root (/home/user/file). Relative paths are from current directory (./file, ../parent/file). Absolute for scripts, relative for navigation.",
            "What are file permissions in Linux?": "Permissions control read (r), write (w), execute (x) for owner, group, others. Represented as rwxrwxrwx or octal (755). Critical for security.",
            "How do you change file permissions using chmod?": "chmod changes permissions. Symbolic: 'chmod u+x file', 'chmod g-w file'. Octal: 'chmod 755 file'. Recursive: 'chmod -R 755 directory'.",
            "What is the purpose of the sudo command?": "sudo runs commands as superuser/root. Configured in /etc/sudoers. Provides audit trail. Preferred over logging in as root.",
            "What is a Linux process?": "Process is running instance of program. Has PID, resources, state. Types: foreground, background, daemon. Managed by init system (systemd).",
            "How do you list running processes in Linux?": "Use 'ps aux' for all processes, 'ps -ef' for full format, 'top' or 'htop' for real-time view, 'pgrep' to find by name.",
            "What is the difference between ps and top commands?": "ps shows snapshot of processes at that moment. top shows real-time, continuously updating view with CPU/memory usage. htop is enhanced top.",
            "What is a Linux package manager?": "Package manager installs, updates, removes software. apt (Debian/Ubuntu), yum/dnf (RHEL/CentOS), pacman (Arch). Handles dependencies automatically."
        },
        medium: {
            "What is a Linux shell and what are different types?": "Shell is command interpreter. Types: bash (most common), zsh, sh, fish, ksh. Each has different features. Configure with dotfiles (.bashrc, .zshrc).",
            "How do you manage Linux services with systemd?": "systemctl commands: start, stop, restart, enable, disable, status. Service files in /etc/systemd/system. journalctl for logs.",
            "What is SSH and how do you set up SSH keys?": "SSH is secure remote access protocol. Generate keys: 'ssh-keygen -t rsa -b 4096'. Copy public key to ~/.ssh/authorized_keys on server. Disable password auth for security.",
            "How do you monitor system resources in Linux?": "top/htop (processes), free (memory), df (disk), iostat (I/O), netstat/ss (network), vmstat (virtual memory), sar (historical). Combine in monitoring tools.",
            "What is iptables and how do you configure it?": "iptables is firewall. Uses chains (INPUT, OUTPUT, FORWARD) and rules. 'iptables -A INPUT -p tcp --dport 22 -j ACCEPT'. Modern alternative: firewalld, nftables.",
            "How do you troubleshoot network connectivity in Linux?": "Use ping, traceroute, dig/nslookup (DNS), netstat/ss (connections), tcpdump (packets), ip addr/route (config), check firewall, verify services.",
            "What is a Linux cron job and how do you create one?": "Cron schedules tasks. Edit with 'crontab -e'. Format: minute hour day month weekday command. Example: '0 2 * * * /backup.sh' runs at 2 AM daily.",
            "How do you manage disk space in Linux?": "df -h (disk usage), du -sh (directory size), ncdu (visual), find large files, clean logs, remove old packages, use LVM for flexibility.",
            "What is LVM and why is it useful?": "LVM (Logical Volume Manager) abstracts physical storage. Enables resizing, snapshots, spanning disks. Components: PV (physical), VG (volume group), LV (logical volume).",
            "How do you configure Linux networking?": "Modern: nmcli, netplan. Files: /etc/network/interfaces, /etc/sysconfig/network-scripts. Commands: ip addr, ip route, /etc/resolv.conf for DNS."
        },
        hard: {
            "How do you optimize Linux system performance?": "Tune kernel parameters (sysctl), optimize I/O scheduler, adjust swappiness, use faster filesystems, CPU governors, profile and optimize applications, proper resource limits.",
            "What are Linux namespaces and cgroups?": "Namespaces isolate resources (PID, network, mount, user). Cgroups limit resources (CPU, memory). Foundation of container technology. Kernel features.",
            "How do you implement Linux security hardening?": "Disable unnecessary services, firewall configuration, SELinux/AppArmor, regular updates, SSH hardening, user management, file permissions, audit logging, intrusion detection.",
            "What is SELinux and how do you configure it?": "SELinux is mandatory access control. Modes: enforcing, permissive, disabled. Uses contexts, policies. Troubleshoot with audit2why. More secure but complex.",
            "How do you troubleshoot Linux kernel issues?": "Check dmesg, /var/log/messages, kernel parameters, boot with different kernel, analyze crash dumps, check hardware, review recent changes.",
            "What is the Linux boot process?": "BIOS/UEFI -> bootloader (GRUB) -> kernel loading -> initramfs -> init system (systemd) -> services -> login. Understanding helps troubleshoot boot issues.",
            "How do you implement Linux high availability?": "Clustering software (Pacemaker, Corosync), shared storage, DRBD for replication, keepalived for VIP, load balancing, proper fencing/STONITH.",
            "What are Linux kernel modules?": "Kernel modules extend kernel without reboot. lsmod (list), modprobe (load), rmmod (remove), modinfo (info). Located in /lib/modules/. Useful for drivers.",
            "How do you analyze Linux system logs?": "journalctl for systemd logs, /var/log/ directory, log rotation (logrotate), centralized logging (rsyslog, ELK), log analysis tools, alerting on patterns.",
            "How do you implement Linux automation with shell scripting?": "Write bash scripts, use variables, conditionals, loops, functions. Error handling, logging, idempotency. Combine with cron for scheduling. Consider Ansible for complex automation."
        }
    },
    terraform: {
        easy: {
            "What is Terraform and what is Infrastructure as Code?": "Terraform is IaC tool by HashiCorp. Defines infrastructure in declarative HCL files. Benefits: version control, reproducibility, automation, documentation.",
            "What is the difference between Terraform and Ansible?": "Terraform is declarative provisioning (creates infrastructure). Ansible is procedural configuration management (configures servers). Use together: Terraform provisions, Ansible configures.",
            "What is a Terraform provider?": "Provider is plugin for interacting with APIs. Examples: AWS, Azure, GCP, Kubernetes. Configures authentication, region. Versioned separately from Terraform.",
            "What is a Terraform resource?": "Resource is infrastructure component to create. Defined with resource block: 'resource \"aws_instance\" \"web\" {}'. Has type, name, and arguments.",
            "What is terraform init command?": "terraform init initializes working directory. Downloads providers, modules, configures backend. Required before plan/apply. Safe to run multiple times.",
            "What is terraform plan command?": "terraform plan shows what will change without applying. Compares state to config. Review before apply. Useful for CI/CD validation.",
            "What is terraform apply command?": "terraform apply creates/updates infrastructure. Confirms with plan, then executes. Use -auto-approve for automation (carefully). Updates state file.",
            "What is the Terraform state file?": "State file (terraform.tfstate) tracks real infrastructure. Maps config to reality. Critical - don't lose or corrupt. Store remotely with locking.",
            "What are Terraform variables?": "Variables parameterize configurations. Define in variables.tf, set via .tfvars, environment, or CLI. Types: string, number, bool, list, map, object.",
            "What is terraform destroy command?": "terraform destroy removes all resources in config. Dangerous in production. Shows plan first. Use target for specific resources. Have backups."
        },
        medium: {
            "What are Terraform modules and how do you create them?": "Modules are reusable configurations. Create directory with .tf files, use 'module' block to call. Pass inputs, receive outputs. Use registry modules or create custom.",
            "How do you manage Terraform state in a team environment?": "Use remote backend (S3, Azure Blob, GCS) with state locking (DynamoDB for S3). Never commit state to git. Use workspaces for environments.",
            "What is Terraform remote backend?": "Remote backend stores state remotely. Options: S3, Azure Storage, GCS, Terraform Cloud. Enables collaboration, locking, encryption. Configure in terraform block.",
            "How do you use Terraform workspaces?": "Workspaces manage multiple environments with same config. 'terraform workspace new/select/list'. Each has separate state. Use variables for env-specific values.",
            "What is the difference between count and for_each?": "count uses number for multiple resources. for_each uses map/set. for_each preferred - handles changes better, allows referencing by key, not index.",
            "How do you import existing resources into Terraform?": "'terraform import resource_type.name id'. Adds to state, must write config manually. Use 'terraform plan' to verify. Consider import blocks in Terraform 1.5+.",
            "What are Terraform data sources?": "Data sources fetch information from providers. Read-only, don't create resources. Example: aws_ami to get AMI ID. Used for existing resources or computed values.",
            "How do you handle secrets in Terraform?": "Never hardcode secrets. Use environment variables, sensitive variables, secret management (Vault, AWS Secrets Manager), encrypted .tfvars, SOPS.",
            "What is Terraform output and how do you use it?": "Outputs expose values from module. Defined in outputs.tf. Use for sharing between modules, displaying after apply, external tool consumption.",
            "How do you version Terraform configurations?": "Use version control (git). Pin provider versions in required_versions. Semantic versioning for modules. Lock file (.terraform.lock.hcl) ensures consistency."
        },
        hard: {
            "How do you implement Terraform best practices at scale?": "Modular structure, remote state with locking, environment separation, policy as code, automated pipelines, proper variable management, documentation, testing.",
            "What is Terraform Cloud and Terraform Enterprise?": "Cloud/Enterprise add collaboration features: remote operations, state management, VCS integration, policy enforcement (Sentinel), private registry. Enterprise for on-prem.",
            "How do you implement Terraform testing strategies?": "Unit tests (terraform validate, tflint), integration tests (Terratest, kitchen-terraform), policy tests (OPA, Sentinel), plan output validation.",
            "What are Terraform provisioners and when should you use them?": "Provisioners run scripts on resources. Types: local-exec, remote-exec. Use as last resort - prefer cloud-init, config management tools. Can cause partial failures.",
            "How do you handle Terraform state drift?": "Regularly run terraform plan, use automation to detect drift, terraform refresh (careful), import changes, document manual changes, prevent with good processes.",
            "What is Terragrunt and when would you use it?": "Terragrunt is wrapper for Terraform. Manages remote state, reduces repetition, handles dependencies between modules. Useful for large-scale Terraform deployments.",
            "How do you implement policy as code with Terraform?": "Use Sentinel (Terraform Cloud/Enterprise) or OPA/Conftest. Define policies for security, compliance, cost. Enforce in CI/CD pipeline before apply.",
            "What are Terraform custom providers?": "Custom providers extend Terraform for unsupported APIs. Written in Go using SDK. Useful for internal systems, new services. Register in provider registry.",
            "How do you implement Terraform in a CI/CD pipeline?": "terraform init in pipeline, plan on PR, apply on merge. Use remote state, lock state during operations, secure credentials, validate plans.",
            "How do you handle complex dependencies in Terraform?": "Use depends_on for explicit dependencies, data sources for external resources, modules for encapsulation, terraform_remote_state for cross-state references."
        }
    },
    jenkins: {
        easy: {
            "What is Jenkins and what is it used for?": "Jenkins is open-source automation server for CI/CD. Automates building, testing, deploying applications. Extensive plugin ecosystem. Master-agent architecture.",
            "What is a Jenkins job?": "Job (project) is a runnable task. Types: Freestyle (GUI configured), Pipeline (code-based), Multibranch. Configured with steps, triggers, post actions.",
            "What is a Jenkins pipeline?": "Pipeline defines build/deploy process as code. Stages, steps, conditions. Types: Declarative (simpler syntax) and Scripted (more flexible). Versioned in SCM.",
            "What is a Jenkinsfile?": "Jenkinsfile is pipeline definition file in repository. Enables Pipeline as Code. Contains stages, steps, environment. Versioned with application code.",
            "What are Jenkins plugins?": "Plugins extend Jenkins functionality. Thousands available: SCM, build tools, notifications, cloud integrations. Manage via Plugin Manager. Keep updated."
        },
        medium: {
            "What is the difference between declarative and scripted pipelines?": "Declarative: simpler, structured, less flexible, easier to read. Scripted: Groovy-based, more powerful, complex. Declarative preferred for most cases.",
            "How do you configure Jenkins agents/nodes?": "Agents run builds. Configure: Manage Jenkins -> Nodes. Connection methods: SSH, JNLP, Docker. Label nodes for specific workloads. Use cloud plugins for dynamic agents.",
            "What is Jenkins shared libraries?": "Shared libraries are reusable pipeline code. Stored in Git, loaded in Jenkinsfile with @Library. Contain vars (global functions), src (Groovy classes).",
            "How do you implement Jenkins security?": "Enable security realm (LDAP, AD), authorization (matrix, project-based), secure agents, CSRF protection, audit logging, credentials management, regular updates.",
            "What is Blue Ocean in Jenkins?": "Blue Ocean is modern UI for Jenkins pipelines. Visual pipeline editor, better visualization, GitHub/Bitbucket integration. Simpler than classic UI."
        },
        hard: {
            "How do you scale Jenkins for enterprise use?": "Distributed builds with agents, cloud-based dynamic agents, master high availability, shared libraries, folder organization, pipeline efficiency, monitoring.",
            "What are Jenkins best practices for large organizations?": "Pipeline as code, shared libraries, folder structure, RBAC, agent management, plugin governance, backup strategies, monitoring, documentation.",
            "How do you implement Jenkins as code?": "Use Configuration as Code plugin (JCasC). YAML files define configuration. Version controlled, reproducible. Combine with Docker for complete setup.",
            "How do you troubleshoot Jenkins performance issues?": "Check build queue, agent utilization, plugin overhead, garbage collection, build logs, monitoring dashboards. Optimize pipelines, clean old builds.",
            "How do you implement Jenkins high availability?": "Active-passive with shared storage, load balancer, regular backups, quick recovery plan. Note: true active-active HA is complex with Jenkins."
        }
    },
    ansible: {
        easy: {
            "What is Ansible and how does it work?": "Ansible is agentless configuration management tool. Uses SSH for Linux, WinRM for Windows. Declarative YAML playbooks. Idempotent - safe to run multiple times.",
            "What is an Ansible playbook?": "Playbook is YAML file defining automation tasks. Contains plays, which contain tasks running on hosts. Can include variables, handlers, roles.",
            "What is an Ansible inventory?": "Inventory lists managed hosts. Static file (hosts) or dynamic (scripts, plugins). Can group hosts, define variables. Supports YAML or INI format.",
            "What are Ansible modules?": "Modules are units of work. Built-in: apt, yum, file, copy, service, user. Execute on target hosts. Return JSON results. Can write custom modules.",
            "What is the difference between Ansible and Puppet?": "Ansible: agentless, push-based, YAML, simpler learning curve. Puppet: agent-based, pull-based, DSL, more mature for large scale. Ansible more popular recently."
        },
        medium: {
            "What are Ansible roles and how do you create them?": "Roles organize playbooks into reusable structures. Standard directories: tasks, handlers, templates, files, vars, defaults. Create with 'ansible-galaxy init'. Share via Galaxy.",
            "How do you manage Ansible variables?": "Variable sources: inventory, playbook vars, role defaults/vars, host_vars, group_vars, extra vars. Precedence order matters. Use vault for secrets.",
            "What is Ansible Vault and how do you use it?": "Vault encrypts sensitive data (passwords, keys). 'ansible-vault create/edit/encrypt/decrypt'. Use vault-password-file for automation. Encrypt files or strings.",
            "What are Ansible handlers?": "Handlers are tasks triggered by notify. Run at end of play, only if notified, only once regardless of multiple notifications. Common for service restarts.",
            "How do you implement Ansible templates?": "Templates use Jinja2 for dynamic files. Use 'template' module. Access variables, filters, conditionals in templates. Common for config file generation."
        },
        hard: {
            "How do you optimize Ansible playbook performance?": "Use SSH pipelining, increase forks, async tasks, fact caching, strategy plugins (free), reduce gather_facts, optimize loops, use native modules.",
            "What is Ansible Tower/AWX?": "Tower (commercial) and AWX (open-source) provide web UI for Ansible. Features: RBAC, scheduling, inventories, credentials, workflow visualization, REST API.",
            "How do you implement Ansible testing strategies?": "Use Molecule for testing roles. Syntax checks (ansible-lint), dry-run (--check), integration testing, CI/CD integration, test different platforms.",
            "How do you implement dynamic inventory in Ansible?": "Use inventory plugins or scripts. Plugins for AWS, Azure, GCP, etc. Returns JSON host structure. Useful for dynamic cloud infrastructure.",
            "How do you integrate Ansible with CI/CD pipelines?": "Run playbooks in pipeline stages. Use ansible-pull for GitOps. Integrate with Jenkins/GitLab. Handle secrets securely. Test before production."
        }
    }
};
