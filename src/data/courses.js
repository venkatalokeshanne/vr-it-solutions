import {
  Code,
  Building2,
  Database,
  Network,
  Settings,
  Cloud,
  Shield,
  Box,
} from "lucide-react";

const courses = [
  {
    title: "Salesforce Training in Hyderabad",
    course: "Salesforce",
    link: "salesforce",
    trending: 1,
    image: "https://vr-it-solutions.vercel.app/images/courses/salesforce.png",
    description: [
      "VRIT Solutions distinguished itself as the leading Salesforce Training institute in Hyderabad and Salesforce Online Trainings.",
      "Our trainers are highly qualified and have extensive experience in providing quality classroom and online training on Salesforce.",
      "Salesforce is known for being one of the most versatile CRM platforms, helping companies manage customer relationships, sales channels, and tasks efficiently.",
      "This platform is highly beneficial for entrepreneurs looking to expand their businesses.",
      "However, learning how to use Salesforce effectively can be challenging.",
      "At VRIT Solutions, we offer the best Salesforce training and coaching in the city.",
      "Our trainers are experienced professionals who will teach you everything you need to know about this powerful CRM system.",
      "VR IT Solutions is one of the best Salesforce training providers in Hyderabad, offering a well-focused and career-oriented training program in Salesforce.",
    ],

    hoursContent: "70h",
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "If you are looking to take up an online Salesforce course 66, then the prerequisites you will need are a working computer with internet access, a valid email address, and a desire to learn. Additionally, you will need to understand the English language, as this is the language of the course.",
      "This course is designed for people who want to learn how to use Salesforce for their business. Therefore, the prerequisites for this course include understanding how to use a computer, using Microsoft Word and Excel, and being familiar with internet usage.",
      "The course starts with an introduction to Salesforce and how it can be used in business. You will then move on to learn how to create and manage a Salesforce account. After that, you will learn to use Salesforce features such as leads, contacts, and deals. You will also learn how to use Salesforce for marketing purposes. The last part of the course focuses on learning how to use Salesforce for enterprise-scale deployments.",
      "The course is divided into different modules, and each module is roughly five weeks long. Each module covers a different topic: setting up Salesforce, creating and managing sales processes, creating and managing sales channels, and forecasting and managing sales results. Upon completing the course, you will be able to use Salesforce to manage your business and achieve your goals.",
    ],
    sections: [
      {
        title: "Introduction to Salesforce & Cloud Computing",
        lectures: [
          { title: "Overview of Salesforce Platform" },
          { title: "Salesforce Architecture" },
          { title: "Multi-Tenant Environment & Metadata" },
        ],
      },
      {
        title: "Organization Setup",
        lectures: [
          { title: "Company Information" },
          { title: "Locale Settings" },
          { title: "Fiscal Year, Business Hours, Holidays" },
          { title: "User Interface Customization" },
          { title: "Profiles, Permission Sets, and Field-Level Security" },
        ],
      },
      {
        title: "User Management",
        lectures: [
          { title: "Creating and Managing Users" },
          { title: "Delegated Administration" },
          { title: "Login Access Policies" },
          { title: "User Authentication Settings" },
          { title: "Sharing Rules, Public Groups, and Role Hierarchies" },
        ],
      },
      {
        title: "Security & Access",
        lectures: [
          {
            title: "Org-Level Security (Profiles, Permission Sets, and Roles)",
          },
          {
            title: "Record-Level Security (OWD, Sharing Rules, Manual Sharing)",
          },
          { title: "Field-Level Security" },
          { title: "Data Security Best Practices" },
          { title: "Login IP Ranges & Login Hours" },
        ],
      },
      {
        title: "Standard & Custom Objects",
        lectures: [
          {
            title: "Object Relationships (Master-Detail, Lookup, Hierarchical)",
          },
          { title: "Schema Builder" },
          { title: "Advanced Field Types (Formula, Roll-Up Summary)" },
          { title: "Custom Object Management" },
          { title: "Record Types, Page Layouts, and Compact Layouts" },
        ],
      },
      {
        title: "Sales & Marketing Applications",
        lectures: [
          { title: "Lead Management, Campaigns, and Opportunities" },
          { title: "Sales Process & Path" },
          { title: "Price Books & Products" },
          { title: "Quotes & Contracts" },
          { title: "Campaign Influence" },
        ],
      },
      {
        title: "Service & Support Applications",
        lectures: [
          { title: "Case Management & Case Assignment Rules" },
          { title: "Support Process Automation" },
          { title: "Entitlements & Milestones" },
          { title: "Knowledge Management" },
          { title: "Omni-Channel Routing & Console" },
        ],
      },
      {
        title: "Workflow Automation",
        lectures: [
          { title: "Workflow Rules, Email Alerts, and Field Updates" },
          { title: "Process Builder" },
          { title: "Approval Processes" },
          { title: "Flows (Advanced Automation)" },
          { title: "Escalation Rules" },
        ],
      },
      {
        title: "Data Warehousing & Management",
        lectures: [
          { title: "Data Import Wizard & Data Loader" },
          { title: "Duplicate Management" },
          { title: "Data Export & Backup" },
          { title: "Mass Transfer of Records" },
          { title: "Data Quality & Governance" },
        ],
      },
      {
        title: "Reports & Dashboards",
        lectures: [
          { title: "Report Types & Filters" },
          { title: "Summary & Matrix Reports" },
          { title: "Custom Report Types" },
          { title: "Dashboard Components & Filters" },
          { title: "Dynamic Dashboards & Scheduled Reports" },
        ],
      },
      {
        title: "Salesforce Mobile App",
        lectures: [
          { title: "Salesforce1 Setup & Customization" },
          { title: "Mobile Navigation & Compact Layouts" },
          { title: "Actions on Mobile" },
          { title: "Mobile-Specific Features" },
        ],
      },
      {
        title: "Chatter",
        lectures: [
          { title: "Chatter Groups & Feeds" },
          { title: "Chatter Best Practices" },
          { title: "Collaboration & File Sharing" },
        ],
      },
      {
        title: "Environment Management",
        lectures: [
          { title: "Sandboxes & Change Sets" },
          { title: "Deployment Strategies" },
          { title: "Managing and Troubleshooting Deployments" },
          { title: "Version Control & Release Management" },
        ],
      },
      {
        title: "Compliance & Governance",
        lectures: [
          { title: "GDPR Compliance" },
          { title: "Salesforce Shield (Encryption, Event Monitoring)" },
          { title: "Audit Trail & Field History Tracking" },
        ],
      },
      {
        title: "Apex Programming",
        lectures: [
          { title: "Apex Triggers (Before, After)" },
          { title: "Apex Classes & Controllers" },
          { title: "SOQL & SOSL Queries" },
          { title: "Governor Limits & Best Practices" },
          { title: "Bulk Apex & Batch Apex" },
          { title: "Scheduled Apex & Queueable Apex" },
          { title: "Exception Handling & Debugging Techniques" },
          { title: "Test Classes & Code Coverage" },
        ],
      },
      {
        title: "Visualforce Pages",
        lectures: [
          { title: "Visualforce Page Components" },
          { title: "Standard & Custom Controllers" },
          { title: "Visualforce Templates" },
          { title: "Visualforce with JavaScript & jQuery" },
          { title: "Best Practices for Visualforce Development" },
        ],
      },
      {
        title: "Lightning Web Components (LWC)",
        lectures: [
          { title: "Introduction to LWC Architecture" },
          { title: "LWC vs. Aura Components" },
          { title: "Creating & Deploying LWCs" },
          { title: "LWC Services (Apex, SOQL)" },
          { title: "Data Binding & Events in LWC" },
          { title: "Lightning Data Service (LDS)" },
          { title: "LWC Performance Optimization" },
          { title: "Testing & Debugging LWCs" },
        ],
      },
      {
        title: "Aura Components",
        lectures: [
          { title: "Aura Framework Basics" },
          { title: "Aura Component Bundle Structure" },
          { title: "Client-Side Controllers (JavaScript)" },
          { title: "Server-Side Controllers (Apex)" },
          { title: "Aura Application Events & Component Events" },
          { title: "Advanced Aura Design Patterns" },
        ],
      },
      {
        title: "Asynchronous Processing",
        lectures: [
          { title: "Future Methods" },
          { title: "Queueable Apex & Batch Apex" },
          { title: "Apex Managed Sharing" },
          { title: "Platform Events & Change Data Capture" },
        ],
      },
      {
        title: "Salesforce Integration",
        lectures: [
          { title: "REST & SOAP API" },
          { title: "Apex Callouts" },
          { title: "Salesforce Connect" },
          { title: "External Objects & OData" },
          { title: "Integration Patterns (Inbound & Outbound)" },
          { title: "OAuth & Connected Apps" },
        ],
      },
      {
        title: "Lightning Flow",
        lectures: [
          { title: "Flow Types (Screen, Autolaunched)" },
          { title: "Flow Elements & Resources" },
          { title: "Custom Lightning Components in Flows" },
          { title: "Advanced Flow Design Patterns" },
          { title: "Error Handling in Flows" },
        ],
      },
      {
        title: "Einstein Analytics (Advanced)",
        lectures: [
          { title: "Introduction to Salesforce Einstein Analytics" },
          { title: "Dataset Creation & Data Flow" },
          { title: "Lenses & Dashboards" },
          { title: "Binding & Dynamic Dashboards" },
          { title: "Custom JSON for Advanced Configurations" },
        ],
      },
      {
        title: "Salesforce DX & DevOps",
        lectures: [
          { title: "Salesforce DX Fundamentals" },
          { title: "Source-Driven Development" },
          { title: "Version Control Integration (Git)" },
          { title: "Continuous Integration (CI/CD) with Salesforce DX" },
          { title: "Managing Packages & Dependencies" },
        ],
      },
      {
        title: "Salesforce Lightning Experience",
        lectures: [
          { title: "Migrating from Classic to Lightning" },
          { title: "Customizing Lightning Experience" },
          { title: "App Builder, Lightning Pages, and AppExchange Apps" },
          { title: "Lightning Component Best Practices" },
          { title: "Responsive Design in Lightning Components" },
        ],
      },
      {
        title: "Project Work & Real-World Scenarios",
        lectures: [
          { title: "Real-Time Scenarios in Salesforce Administration" },
          { title: "Advanced Customizations in Salesforce Development" },
          { title: "Integration Projects with Third-Party Applications" },
          { title: "Performance Tuning & Optimization" },
          { title: "Deployment & Environment Management Case Studies" },
        ],
      },
    ],
    courseHighlights: [
      "VR IT Solutions provides complete knowledge of Salesforce and the opportunity to work with the best and most experienced trainers in your field.",
      "We offer you an excellent platform for career growth.",
      "The complete Salesforce training is customized with real-time online sessions and project work.",
      "Added to these highlights, We provide a 100% guarantee of your success.",
      "We have a record of working closely with trainers who are industry experts.",
    ],
    learningPoints: [
      "Master Salesforce Administration and Development skills",
      "Understand Salesforce architecture and multi-tenant environment",
      "Manage user access, security, and data effectively",
      "Automate workflows and processes using Salesforce tools",
      "Create custom objects, fields, and relationships",
      "Develop Lightning Web Components (LWC) and Aura Components",
      "Integrate Salesforce with external systems using APIs",
      "Build and deploy Salesforce applications using Salesforce DX",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Salesforce",
      title: "Why Join This Course?",
      description: [
        "With rapid technological advancements, this course is slowly gaining importance in the market.",
        "The uniqueness of this course is it teaches you Mule in a step-by-step manner, starting from basics to advanced, without the requirement of any previous integration background.",
        "VR IT Solutions is one of the few institutes in Hyderabad to offer the best and most innovative training in Salesforce online training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.",
      ],
      benefits: [
        "Salesforce skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Salesforce professionals command premium salaries due to their specialized skills.",
        "Salesforce certifications are recognized globally, opening doors to international career opportunities.",
        "Salesforce is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "Salesforce certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Salesforce training at VR IT Solutions was a game-changer for my career. I landed a job as a Salesforce Administrator within a month of completing the course.",
          author: "Priya S.",
          role: "Salesforce Administrator, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Salesforce development. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Salesforce Developer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Salesforce challenge.",
          author: "Anjali M.",
          role: "Salesforce Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Azure DevOps Training in Hyderabad",
    course: "Azure DevOps",
    link: "azure-devops",
    image: "https://vr-it-solutions.vercel.app/images/courses/azure-devops.png",
    trending: 2,
    category: "DevOps & Cloud",
    description:
      "VRIT Solutions is recognized for providing Realtime Azure Devops Training in Hyderabad and Azure Devops Online Training throughout world.\n\nVR IT Solutions is one of the best software training institute in Hyderabad. Azure Devops (previously known as Visual Studio Team Services (VSTS) or Visual Studio Online) is the cloud based Devops dashboard and provided by Microsoft. Azure Devops captures over 15 years of investment and learnings in providing tools to support software development teams.",

    hoursContent: "70h",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of cloud computing concepts.",
      "Familiarity with Microsoft Azure fundamentals.",
      "Knowledge of basic networking and virtualization concepts.",
    ],
    sections: [
      {
        title: "Cloud Computing & Microsoft Azure Fundamentals",
        lectures: [
          { title: "Introduction to Azure" },
          { title: "Different segments SaaS, PaaS, and IaaS" },
          { title: "Azure Regions and Data Centers" },
          { title: "Introduction to Vnet & subnets" },
          { title: "Logical calculation of Subnets" },
        ],
      },
      {
        title: "Azure Networking",
        lectures: [
          { title: "Azure Virtual Networks" },
          { title: "Azure Subnets" },
          { title: "Launching the VM in the subnet" },
          { title: "Launching DB in the Subnet" },
          { title: "Connecting to the Public DB" },
          { title: "Importance of Jump host" },
          { title: "Connecting the Private DB using Jump host" },
          { title: "IP Address Public & Private IPs" },
          { title: "Azure Vnet Subnets" },
          { title: "Azure Network Interface Cards (NIC)" },
          { title: "Network Security Group (NSG)" },
          { title: "Service Tags" },
          { title: "Azure DNS" },
          { title: "Private DNS" },
        ],
      },
      {
        title: "Azure Virtual Machines",
        lectures: [
          { title: "Virtual Machine instances" },
          { title: "Azure VM types and Pricing" },
          { title: "Disks & Images" },
          {
            title:
              "Setting up VM in Availability set using Load Balanced Endpoint",
          },
          { title: "VM Availability using Availability Sets" },
          { title: "Provisioning the Linux & windows VM" },
          { title: "Importance of Jumphost" },
          { title: "Connecting to the DB using the Jumphost" },
          { title: "Understanding the Firewall Rules" },
          { title: "Connect to DB using Firewall Rules" },
          { title: "Importance of security Group" },
          { title: "Inbound & outbound Rules setup" },
        ],
      },
      {
        title: "Microsoft Azure Storage",
        lectures: [
          { title: "Storage Account Replication Techniques" },
          { title: "Protocols and Consistency Model" },
          { title: "Type of Azure Storage Account" },
          { title: "Storage Services Blob, Table, queue, File" },
        ],
      },
      {
        title: "Manage App Services",
        lectures: [
          { title: "Deployment to App Service" },
          { title: "App Service plan" },
          { title: "AD Authentication" },
          { title: "Custom Domain setup for the web app" },
          { title: "App Settings" },
          { title: "Deployment Slots" },
        ],
      },
      {
        title: "Source Code Versioning [Azure Repos]",
        lectures: [
          { title: "What is Git" },
          { title: "Lab - Azure Repos" },
          { title: "Understanding the branches in Git" },
          { title: "Check-in code from Local to Remote Repo" },
          { title: "Understanding on the Git commands" },
          { title: "Pushing branches onto Azure Repos" },
          { title: "Pulling changes from a git repository" },
          { title: "Using the .gitignore file" },
          { title: "GitHub and Azure Boards Integration" },
          { title: "Raising PR to the Main/Master/RC Branches" },
          { title: "Importance of the Hotfix, Release Candidate Branches" },
          { title: "Branching strategy on the Azure Repos" },
          { title: "Branching policies on the Azure Repos" },
          { title: "Branch locking" },
          {
            title:
              "Setting up the Global Branching Policies on the Release Folder",
          },
          { title: "Maintain the security on the Repos" },
        ],
      },
      {
        title: "Azure Pipelines - Java application [Mini Project 1]",
        lectures: [
          { title: "Setting up CI/CD pipelines for Java applications" },
          { title: "Automating build and deployment processes" },
        ],
      },
      {
        title: "Docker",
        lectures: [
          { title: "Virtualization and Containerization" },
          { title: "Introduction to Docker" },
          { title: "Installing Docker on the VM" },
          { title: "Lab session for the Docker Commands" },
          { title: "Running container in the interactive and Detached modes" },
        ],
      },
      {
        title: "Kubernetes",
        lectures: [
          { title: "Monolithic vs Microservices" },
          { title: "Kubernetes Features" },
          { title: "Kubernetes Architecture" },
          { title: "Understanding on the Pods and pod lifecycle" },
          { title: "Writing yaml from the scratch including syntaxes" },
          { title: "Types of Kubernetes Exposed Services" },
          {
            title: "Differences among Cluster IP vs Node Port vs Load Balancer",
          },
          { title: "BoM Preparation for AKS components" },
          { title: "Architecture for Cluster IP, Node Port and Load Balancer" },
          { title: "Creating a Deployment in Kubernetes using YAML" },
          { title: "Installing the Kubectl in the VM" },
          { title: "Connecting the AKS cluster using the VM" },
          { title: "Understanding on the Kubernetes Commands" },
          { title: "Security on the AKS setup process" },
          { title: "Difference between the AKS public and private cluster" },
          { title: "Deploying to Multiple clusters using same VM" },
          {
            title:
              "How to connect to the VM to Private DNS zone of AKS API Server",
          },
          {
            title:
              "Importance VNet Link and Vnet peering in the AKS multi cluster connection",
          },
          { title: "Creating a Service in Kubernetes using YAML" },
          { title: "Creating a Secrets in Kubernetes using YAML" },
          { title: "Accessing the secrets in the Kubernetes Deployment yaml" },
          { title: "Setting up the Resources limits on the pods in the AKS" },
          { title: "Understanding on the Replica set" },
          { title: "External Load Balancer vs Internal Load balancer" },
          { title: "Importance and Drawbacks of the Kubernetes services" },
          { title: "Introduction to Ingress" },
          {
            title: "Provisioning the Application Gateway [Ingress Controller]",
          },
          { title: "Path/Host Mapping Techniques" },
          { title: "Security on the Application Gateway" },
          {
            title:
              "Setting up the Realtime project using AKS along with APGW Ingress Controller",
          },
        ],
      },
      {
        title: "Selenium",
        lectures: [
          { title: "Selenium Webdriver Introduction" },
          { title: "Understanding on the WebDriver vs Remote WebDriver" },
          { title: "Selenium Target locators" },
          { title: "Techniques in Writing XPath" },
          { title: "Understanding on the Web-elements in the webpage" },
          {
            title:
              "Selenium commands to handle the Web-elements in the webpage",
          },
          { title: "Selenium commands to handle alerts, windows & Frames" },
          { title: "Understanding the Selenium Real time Framework" },
          { title: "Understanding the POM Framework" },
          { title: "Importance of Wrapper Methods" },
          {
            title:
              "Writing the Business understandable scenarios in BDD format using Cucumber Plugin",
          },
          {
            title:
              "Exporting the Reports using Extent Reports with screen shots",
          },
        ],
      },
      {
        title: "Terraform",
        lectures: [
          { title: "Installing Terraform" },
          { title: "Initializing Azure Terraform Provider" },
          { title: "Understanding the Terraform Commands" },
          { title: "Creating a Resource Group using Terraform" },
          { title: "Creating Network components in Azure using Terraform" },
          {
            title:
              "Deploying VM inside a custom Virtual Network in Azure using Terraform",
          },
          {
            title:
              "Deploying DB inside a custom Virtual Network in Azure using Terraform",
          },
        ],
      },
      {
        title: "Terragrunt",
        lectures: [
          { title: "Introduction to the Terragrunt" },
          { title: "Installing Terraform & Terragrunt in the VM" },
          { title: "Setting up the Terragrunt Agent in the Azure Devops" },
          { title: "Terragrunt wrapper importance" },
          { title: "Accessing Variables from the Terragrunt.hcl" },
          { title: "Importance of Locals" },
          { title: "Dependency block understanding in the terragrunt" },
          { title: "Setting up the Real time framework using Terragrunt" },
        ],
      },
      {
        title: "Ansible",
        lectures: [
          { title: "Ansible Introduction" },
          { title: "Ansible inventory" },
          { title: "Introduction to Yaml" },
          { title: "Ansible playbook" },
          { title: "Run Ansible playbook" },
          { title: "Introduction to Ansible Roles" },
          { title: "Demo on Ansible Roles" },
          { title: "Ansible Examples" },
          { title: "Tips & tricks in writing Shell scripts" },
          { title: "Loops in shell scripts" },
          { title: "Csv operations using shell scripts" },
          { title: "Invoking shell scripts in Ansible playbook yaml" },
        ],
      },
      {
        title: "Helmcharts",
        lectures: [
          { title: "What is Helm Chart?" },
          { title: "What is Helm?" },
          { title: "Why to use Helm?" },
          { title: "How does Helm work?" },
          { title: "Some examples of Helm commands" },
          { title: "Helm Create" },
          { title: "Helm Install" },
          { title: "Helm Repo add" },
          { title: "Develop on Azure Kubernetes Service (AKS) with Helm" },
          { title: "Generate Helm Chart and update the Chart (template)" },
          {
            title:
              "Send Helm Chart to Azure Kubernetes Service (AKS) to deploy the Java application",
          },
        ],
      },
      {
        title: "E2E Real Time Project",
        lectures: [
          { title: "Planning for Vnet & subnets" },
          { title: "Front Door" },
          { title: "API Management" },
          { title: "Azure Application Gateway [Ingress controller]" },
          { title: "Postgres DB & Backup" },
          { title: "Azure Key Vault" },
          { title: "AKS" },
          { title: "Security Groups" },
          { title: "WAF" },
          { title: "AKS Deployment from Azure Devops" },
          { title: "Azure Load Balancer" },
          { title: "Active Directory" },
          { title: "Log analytic workspace" },
          { title: "Container Registry" },
          { title: "Velcro backup for AKS cluster" },
          { title: "Logging, Monitoring & Alerts" },
        ],
      },
    ],
    learningPoints: [
      "Azure DevOps is an agnostic DevOps toolchain – a language, platform, and cloud provider from Microsoft. It is a software as a service (SaaS) platform that offers an end-to-end DevOps toolchain for developing and installing software. It is highly flexible concerning application integration, which implies it can easily integrate with almost all the leading applications in the market, making it highly desirable from development and cost perspectives.",
      "Coming to its architecture, Azure DevOps is developed on a multi-tier and scalable architecture and using Windows Communications Foundations web services. With Azure DevOps, users can plan smarter, collaborate efficiently, and ship quickly with a set of state-of-the-art dev services. DevOps lets users unify resources, processes, and technology to develop innovative products for their clients quickly.",
      "Azure DevOps comes with a unique set of services such as Azure Boards, Azure Pipelines, Azure Repos, Azure Artifacts, and Azure Test Plans. This means users' productivity and efficiency are enhanced manifold without being worried about the complex nitty-gritty of technical paradigms or purchasing costly third-party extension tools. And the best part of Azure DevOps is it is highly flexible and platform agnostic, which means it can work on any platform (such as Linux or MacOS), any language (such as C, C++, Java, Python, and more), and any Cloud platform. Moreover, it easily supports the most popular tools in the market.",
      "Some of the key benefits offered by DevOps include reliability, scalability, access to the latest features (every 3 weeks), and an end to the upgrade process. Above all, it is backed by an SLA of 99.9% uptime with round-the-clock support to readily address any users' queries. Because of its huge flexibility of language, platform, and cloud vendors' support, it has become the best option for most organizations.",
    ],
    whyJoin: {
      course: "Azure DevOps",
      title: "Why Join This Course?",
      description: [
        "With ever-increasing opportunities in all facets of application development, it becomes imperative for professionals and students alike to do this course and reap huge benefits out of their investment. Certification in Microsoft Azure from VRIT solutions can help boost your earning potential manifold while providing high-level job security. As per a recent prediction, around 80% of all enterprise workloads will eventually migrate to the cloud by 2025, which implies generating a huge demand for Devops professionals in the coming years. A typical Devops professional is an expert in developing cloud applications and managing cloud infrastructures, and this training provides the right platform to get started in these areas.",
        "This course is best suited for fresh graduates, who intend to get into the booming Azure job market or professionals with around 2 years of experience who want to make a shift to cloud security for better job prospects.",
        "VRIT Solutions offers the best Devops training in Ameerpet, Hyderabad. Become an industry-ready professional with our highly intensive course, backed by strong hands-on live projects. This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready. So, what are you waiting for?",
        "Make VRIT Solutions your first choice for Azure Devops training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects. We offer the best-in-class Azure Devops training and Azure Devops job support to offer the right platform to power your career to the next level.",
        "So, don't stay behind. Join now for a lucrative career.",
        "After successful completion of the Azure Devops Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.",
        "VRIT Solutions offers 100% placement Guaranteed program for deserving students.",
      ],
      benefits: [
        "Azure DevOps skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Azure DevOps professionals command premium salaries due to their specialized skills.",
        "Azure certifications are recognized globally, opening doors to international career opportunities.",
        "Azure is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "Azure certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Azure DevOps training at VR IT Solutions was a game-changer for my career. I landed a job as a DevOps Engineer within a month of completing the course.",
          author: "Priya S.",
          role: "DevOps Engineer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Azure DevOps. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Cloud Engineer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Azure DevOps challenge.",
          author: "Anjali M.",
          role: "Azure Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "ServiceNow Training in Hyderabad",
    course: "ServiceNow",
    link: "servicenow",
    trending: 3,
    image: "https://vr-it-solutions.vercel.app/images/courses/servicenow.png",
    description: [
      "VRIT Solutions is a prominent name in Hyderabad's best ServiceNow training. We are a one-stop solution for people looking for top and best ServiceNow Training.",
      "Our trainers are highly qualified and experienced in providing high-quality training in Hyderabad.",
      "The Certified Expert Group has created our content and curriculum of ServiceNow based on current industry needs.",
      "This allows students to become industry-ready professionals, where they can handle most real-time scenarios.",
    ],
    aboutTheCourse: [
      "ServiceNow is a cloud company that is evolving rapidly and offers its products to companies of all sizes – large, medium, and small.",
      "It is a major player in the Information Technology Service Management (ITSM) arena.",
      "ServiceNow has a robust cloud platform on which any application can be built quickly.",
      "Learning ServiceNow helps users in various organizational roles working within the ServiceNow platform.",
      "This platform is continuously evolving and has a promising future in the long term.",
      "VR IT Solutions is one of the best ServiceNow training providers, offering a well-focused and career-oriented training program in ServiceNow. So, get started by clicking here.",
    ],

    hoursContent: "70h",
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "VR IT Solutions hasn’t specified any key prerequisites for this course.",
      "However, participants with prior knowledge of similar platforms may better appreciate this course.",
      "If you are looking for ServiceNow online training, VR IT Solutions is the right institute for you.",
    ],
    whoShouldAttend: [
      "Graduates interested in entering this field",
      "Professionals working on ITIL and using the ServiceNow tool to further enhance their knowledge",
      "Software professionals looking for lucrative careers in ServiceNow",
      "Middle-level managers interested in switching their careers",
      "Business Analysts",
      "Technical Managers",
    ],
    sections: [
      {
        title: "Overview",
        lectures: [
          { title: "What is ServiceNow" },
          { title: "Introduction" },
          { title: "Architecture" },
          { title: "Licensing" },
          { title: "How to raise instance request?" },
          { title: "ITIL Concepts" },
          { title: "ITIL vs ServiceNow" },
          { title: "UI Essentials" },
        ],
      },
      {
        title: "ServiceNow Administration",
        lectures: [
          { title: "Tables" },
          { title: "Dictionary" },
          { title: "Applications / Modules" },
          { title: "Global Vs Scoped Applications" },
          { title: "Home Pages" },
          { title: "List / Forms" },
          { title: "Service Now Incident Walk Through" },
          { title: "Problem Management Walk Through" },
          { title: "Service Catalog Walk through" },
          { title: "Change Management through" },
          { title: "Reports" },
          { title: "Report Development" },
          { title: "Data Importing" },
          { title: "Import Sets & Transformation Mapping" },
        ],
      },
      {
        title: "Foundation Data Administration",
        lectures: [
          { title: "User Administration" },
          { title: "Group Administration" },
          { title: "Roles Administration" },
          { title: "Auto routing / Assignment" },
          { title: "Visual Board" },
        ],
      },
      {
        title: "ServiceNow Development",
        lectures: [
          { title: "Tables & Columns / Extensions" },
          { title: "Form Design / Form Personalization" },
          { title: "Update Sets" },
          { title: "Glide System" },
          { title: "Notifications" },
          { title: "Inbound Mail Actions" },
          { title: "UI Policies" },
          { title: "Data Policies" },
          { title: "Client Scripts" },
          { title: "UI actions" },
          { title: "Business rules" },
          { title: "Script Include" },
          { title: "Access Control List(ACLs)" },
          { title: "Schedule Jobs" },
          { title: "Background Scripts" },
          { title: "Workflows" },
          { title: "Service Catalog Development" },
          { title: "Integration Approaches / Methods / Exercises" },
        ],
      },
      {
        title: "ServiceNow ITSM Implementation methodologies",
        lectures: [
          { title: "Incident Management" },
          { title: "Problem Management" },
          { title: "Change Management" },
          { title: "Asset Management" },
          { title: "SLAs" },
          { title: "Knowledge Management" },
          { title: "CMDB" },
          { title: "MID Server" },
        ],
      },
    ],
    learningPoints: [
      "Explore lists and forms",
      "Identify the significance of branding and learn how to apply it to the platform",
      "Learn how to add users, groups, and roles",
      "Identify best practices pertaining to task management",
      "Learn how to configure notifications",
      "Get hands-on experience managing data with tables, the Configuration Management Database (CMDB), and import sets",
      "Learn how to run basic reports and appreciate the benefits of performance analytics",
      "Know how to protect ServiceNow data",
      "Learn how to work with two key ServiceNow process applications: Knowledge Base and Service Catalog",
      "Understand how to create workflow activities and approvals",
      "Get an overview of how to implement Service Level Agreements",
      "Identify various available script types",
      "Upgrade and clone instances, as well as create baseline performance metrics",
      "Capture and move configurations between instances",
      "Live Project",
    ],
    learningNotes: [
      "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
      "This course is supplemented by relevant lab exercises, ServiceNow interview questions, lectures, and group discussions, as well as extensive hands-on practice.",
      "VR IT Solutions is one of the best software training institutes in Hyderabad, offering excellent ServiceNow online training.",
    ],
    whyJoin: {
      course: "ServiceNow",
      title: "Why Join This Course?",
      description: [
        "With ServiceNow having a great future in both India and abroad, it offers excellent value for professionals working on this platform and also for existing technocrats who are interested in migrating to this new platform.",
        "ServiceNow is being used by most of the world’s top multinationals, where professionals in this field earn very high salaries compared to other technologies.",
        "Make VR IT Solutions your first choice for ServiceNow training in Hyderabad due to its systematic training methodology and state-of-the-art practical sessions!",
        "So, don’t stay behind. Join now for a lucrative career.",
      ],
      benefits: [
        "ServiceNow skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "ServiceNow professionals command premium salaries due to their specialized skills.",
        "ServiceNow certifications are recognized globally, opening doors to international career opportunities.",
        "ServiceNow is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "ServiceNow certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The ServiceNow training at VR IT Solutions was a game-changer for my career. I landed a job as a ServiceNow Administrator within a month of completing the course.",
          author: "Priya S.",
          role: "ServiceNow Administrator, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in ServiceNow development. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "ServiceNow Developer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any ServiceNow challenge.",
          author: "Anjali M.",
          role: "ServiceNow Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Pega Training in Hyderabad",
    course: "Pega",
    link: "pega",
    image: "https://vr-it-solutions.vercel.app/images/courses/pega.png",
    trending: 4,
    description: [
      "VRIT Solutions is a prominent name among Hyderabad's best PEGA training institutes.",
      "We are a one-stop solution for people looking for top and best PEGA Training in Hyderabad and PEGA Online Training.",
      "Our trainers are highly qualified and experienced in providing high-quality training in Hyderabad.",
      "The Certified Expert Group has created our content and curriculum for PEGA based on current industry needs.",
      "This allows students to become industry-ready professionals, capable of handling most real-time scenarios.",
    ],

    hoursContent: "70h",
    category: "Automation",
    level: "Beginner to Advanced",
    aboutTheCourse: [
      "PEGA is an application development tool used in BPM and CRM Applications, developed by Pega Systems Inc., Cambridge, Massachusetts.",
      "The uniqueness of this software is it doesn’t use any programming/coding to develop web & enterprise applications, and it has a Java backend engine.",
      "Pega comes with a drag and drop UI and offers easily configurable settings, which in turn helps to develop applications faster and with higher quality, compared to Java.",
      "This platform offers the capability by streamlining, automating, and documenting business processes in a way that enables easy consolidation of multi-stream processing into one system.",
      "VR IT Solutions is one of the Pega training centers in Hyderabad offering a well-focused and career-oriented training program in Pega. So, get started by clicking here.",
    ],
    learningNotes: [
      "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
      "VR IT Solutions is one of the few institutes in Hyderabad to offer excellent Online Pega training in hyderabad and pega classroom training in Hyderabad.",
    ],
    coursePrerequisites: [
      "VR IT solutions haven't prescribed any specific prerequisites. However, knowledge of CRM and BPM would be an added advantage and helps the participants to better appreciate the course.",
    ],
    sections: [
      {
        title: "Introduction to Pega",
        lectures: [
          { title: "What is BPM, BRE, and BPMS" },
          {
            title:
              "Ruleset, Version, Application, Access group, and Operator ID",
          },
          { title: "Class, Inheritance, and Types of Classes" },
        ],
      },
      {
        title: "User Interface Design",
        lectures: [
          {
            title:
              "Designing User Interface using Section, Harness, Control, and Layouts",
          },
          {
            title:
              "Lab Session: Using UI Rules like Section, Harness, Control, and Layouts",
          },
        ],
      },
      {
        title: "Data Model and Properties",
        lectures: [
          { title: "Types of Properties and Modes of Properties" },
          { title: "Adding Two Numbers: Practice Concept using Activities" },
        ],
      },
      {
        title: "Flow Basics",
        lectures: [
          {
            title:
              "Flow Basic Shapes: Assignment, Connector, Decision Shape, Utility, Ticket, etc.",
          },
        ],
      },
      {
        title: "Advanced Concepts",
        lectures: [
          { title: "Clipboard: Theory Concept" },
          { title: "Activities: Methods (Obj, RDB, and Log Message Methods)" },
          { title: "Data Pages: Introduction" },
          { title: "DropDown Control: Configuration and Autocomplete" },
          { title: "Data Transform: Usage and Examples" },
          { title: "SLA: Usage and Types" },
          { title: "Circumstance: Definition and Types" },
          { title: "Declarative Rules: Forward and Backward Chaining" },
          { title: "Validations: Server Side and Client Side" },
          { title: "Security: Access Role, Privilege, and Access Deny" },
          { title: "Reports: List View, Summary View, and Report Definition" },
          { title: "Agents: Definition and Types" },
          { title: "Practice Session: Removing Duplicates from a Pagelist" },
          { title: "Debugging Tools: Tracer and Live UI" },
          { title: "Rule Resolution Algorithm: 10 Steps Strategy" },
          { title: "Pega Guardrails and Deployment" },
          { title: "Portals: Composite and Traditional Portals" },
          { title: "File Listener and Email Listener" },
          { title: "Integration: Service SOAP and Connect SOAP" },
          { title: "Exception Handling" },
          { title: "Skimming, PAL, and Preflight" },
          { title: "Case Management: Covers and Folders" },
          { title: "DCO Concept: Enterprise Class Structure" },
          { title: "Correspondence: Types and Sending Mail via Activity" },
          { title: "New Features: Differences Between Versions" },
        ],
      },
    ],
    learningPoints: [
      "Overview of BPM",
      "Project implementation methodology, class structures and hierarchy",
      "Data modelling",
      "Process flow",
      "User Interface",
      "Declarative rules",
      "Case Management",
      "Database Concepts of PRPC",
      "Activities",
      "Integration with external systems",
      "Rule Management & Security",
      "Performance, PRPC Guardrails & Topics revision",
      "And a live project",
    ],
    whoShouldAttend: [
      "Beginners",
      "Business consultants",
      "Corporate managers who intend to switch their careers",
      "Project managers who want to understand the concepts for providing realistic effort estimates for projects",
      "Software engineers who have a penchant for getting into the business domain",
    ],
    whyJoin: {
      course: "Pega",
      title: "Why Join This Course?",
      description: [
        "Organizations across the world are developing applications in Pega on a greater scale, compared to any other tools and hence it makes sense to get hands-on on this tool to make an excellent career in Pega. VR IT solutions offers Pega online training also the most comprehensive, practical and upto date Pega training. It should be appreciated that several frameworks are build on Pega Process Commander to support various aspects of business requirements.",
      ],
      benefits: [
        "Pega skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Pega professionals command premium salaries due to their specialized skills.",
        "Pega certifications are recognized globally, opening doors to international career opportunities.",
        "Pega is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "Pega certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Pega training at VR IT Solutions was a game-changer for my career. I landed a job as a Pega Developer within a month of completing the course.",
          author: "Priya S.",
          role: "Pega Developer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Pega development. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Pega Consultant, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Pega challenge.",
          author: "Anjali M.",
          role: "Pega Administrator, IT Firm",
        },
      ],
    },
  },
  {
    title: "DevOps Training in Hyderabad",
    course: "DevOps",
    link: "devops",
    trending: 5,
    image: "https://vr-it-solutions.vercel.app/images/courses/devops.png",
    description:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. This comprehensive training program covers DevOps principles, tools, and practices, equipping you with the skills needed to implement CI/CD pipelines, automate infrastructure, and manage cloud environments effectively.",

    aboutTheCourse: [
      "DevOps is considered as the practice that accentuates the collaboration and communication of both software developers as well as IT Professionals. It computerizes the process of infrastructure and software delivery changes.",
      "DevOps combines cultural philosophies, practices and tools that enhances a company’s ability to offer applications and services at a greater agility and at the same time, lets in evolving and enhancing products at a brisker pace, compared to traditional software engineering practices. More precisely, in the DevOps model, both development and operations team work in tandem, where the engineers work across the entire lifecycle, right from development, testing, deployment to operations; and develop skill sets, which are not limited to a specific function.",
      "VR IT Solutions is one of the best devops training in hyderabad we offer devops online training with well focused and career-oriented training program in DevOps. So, get started by clicking here.",
    ],

    hoursContent: "70h",
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "VR IT solutions haven’t prescribed any specific pre-requisites for this course, though basic knowledge of object-oriented programming is good enough to start and appreciate this course.",
    ],
    whoShouldAttend: [
      "Software architects",
      "Project managers",
      "Business analysts",
      "System analysts",
      "IT managers",
      "Software developers",
      "Fresh graduates with a passion to get into this domain.",
    ],
    sections: [
      {
        title: "AWS Cloud Fundamentals",
        lectures: [
          { title: "AWS Global Infrastructure" },
          { title: "AWS Regions & Availability Zones" },
          { title: "AWS Shared Responsibility Model" },
          { title: "Identity and Access Management (IAM)" },
          { title: "AWS Pricing Models & Cost Management" },
        ],
      },
      {
        title: "Compute Services",
        lectures: [
          { title: "Amazon EC2: Instances, AMIs, and Security Groups" },
          { title: "Auto Scaling & Load Balancing (ALB, NLB, ELB)" },
          { title: "AWS Lambda & Serverless Computing" },
          { title: "Elastic Beanstalk: Application Deployment" },
          { title: "Amazon Lightsail: Simple Cloud Hosting" },
        ],
      },
      {
        title: "Storage Services",
        lectures: [
          { title: "Amazon S3: Buckets, Objects, and Versioning" },
          { title: "S3 Lifecycle Policies & Glacier for Archiving" },
          { title: "Amazon EBS: Volumes & Snapshots" },
          { title: "Amazon EFS: Managed File Storage" },
          { title: "AWS Storage Gateway" },
        ],
      },
      {
        title: "Networking & Content Delivery",
        lectures: [
          { title: "Amazon VPC: Subnets, Route Tables, and Gateways" },
          { title: "Elastic Load Balancing & Auto Scaling in VPC" },
          { title: "Amazon Route 53: DNS Management & Domain Registration" },
          { title: "AWS Direct Connect & VPN" },
          { title: "Amazon CloudFront: Content Delivery Network" },
        ],
      },
      {
        title: "Database Services",
        lectures: [
          { title: "Amazon RDS: Multi-AZ & Read Replicas" },
          { title: "Amazon DynamoDB: NoSQL Database" },
          { title: "Amazon Aurora: High-Performance Managed Database" },
          { title: "Amazon Redshift: Data Warehousing" },
          { title: "Database Migration Service (DMS)" },
        ],
      },
      {
        title: "Security & Identity",
        lectures: [
          { title: "IAM Best Practices" },
          { title: "AWS Key Management Service (KMS)" },
          { title: "AWS Secrets Manager & Systems Manager Parameter Store" },
          { title: "Amazon Cognito: User Authentication & Authorization" },
          { title: "AWS WAF & Shield: Protecting Applications" },
        ],
      },
      {
        title: "Monitoring & Management",
        lectures: [
          { title: "Amazon CloudWatch: Metrics, Alarms, and Logs" },
          { title: "AWS CloudTrail: Auditing & Logging" },
          {
            title: "AWS Config: Resource Inventory & Configuration Management",
          },
          { title: "AWS Systems Manager: Automation & Patching" },
          { title: "AWS Trusted Advisor & Security Hub" },
        ],
      },
      {
        title: "Automation & Orchestration",
        lectures: [
          { title: "AWS CloudFormation: Infrastructure as Code" },
          { title: "AWS OpsWorks: Configuration Management" },
          { title: "AWS Elastic Beanstalk: Deployment Automation" },
          { title: "AWS CodePipeline: Continuous Delivery Pipeline" },
          { title: "AWS CodeDeploy: Automated Deployment" },
        ],
      },
      {
        title: "Big Data & Analytics",
        lectures: [
          { title: "Amazon EMR: Big Data Processing with Hadoop, Spark" },
          { title: "Amazon Kinesis: Real-Time Data Streaming" },
          { title: "Amazon Athena: Querying S3 Data with SQL" },
          { title: "AWS Glue: Data Cataloging & ETL" },
        ],
      },
      {
        title: "Machine Learning & AI",
        lectures: [
          { title: "Amazon SageMaker: Model Training & Deployment" },
          { title: "AWS Rekognition: Image and Video Analysis" },
          { title: "Amazon Polly: Text-to-Speech" },
          { title: "Amazon Lex: Conversational Interfaces" },
        ],
      },
      {
        title: "DevOps Principles & Practices",
        lectures: [
          { title: "DevOps Culture: Collaboration & Communication" },
          { title: "Continuous Integration & Continuous Delivery (CI/CD)" },
          { title: "Infrastructure as Code (IaC) Principles" },
          { title: "DevOps Tools & Technologies Overview" },
        ],
      },
      {
        title: "Version Control with Git",
        lectures: [
          { title: "Git Fundamentals & Advanced Commands" },
          { title: "Branching Strategies (Git Flow, Trunk-Based)" },
          { title: "GitHub/GitLab for Collaboration" },
          { title: "Managing Large Repositories with Git LFS" },
          { title: "Integrating Git with CI/CD Pipelines" },
        ],
      },
      {
        title: "CI/CD with Jenkins",
        lectures: [
          { title: "Jenkins Installation & Configuration" },
          { title: "Pipeline as Code with Jenkinsfile" },
          { title: "Jenkins Plugins for CI/CD" },
          { title: "Automated Testing & Reporting in Jenkins" },
          { title: "Integrating Jenkins with AWS Services" },
        ],
      },
      {
        title: "Containerization with Docker",
        lectures: [
          { title: "Docker Architecture & Components" },
          { title: "Building & Managing Docker Images" },
          { title: "Docker Compose for Multi-container Applications" },
          { title: "Docker Networking & Storage" },
          { title: "Docker Security Best Practices" },
        ],
      },
      {
        title: "Container Orchestration with Kubernetes",
        lectures: [
          { title: "Kubernetes Architecture & Components" },
          { title: "Deploying Kubernetes Clusters on AWS (EKS)" },
          { title: "Kubernetes Networking (Services, Ingress)" },
          { title: "Helm Charts for Kubernetes Application Deployment" },
          {
            title: "Kubernetes Monitoring & Logging with Prometheus & Grafana",
          },
        ],
      },
      {
        title: "Infrastructure as Code (IaC)",
        lectures: [
          { title: "AWS CloudFormation: Stacks & Templates" },
          { title: "Terraform: Multi-Cloud IaC" },
          { title: "Advanced Terraform Modules & State Management" },
          { title: "Ansible: Configuration Management & Provisioning" },
          { title: "Chef/Puppet: Infrastructure Automation" },
        ],
      },
      {
        title: "Continuous Integration/Continuous Deployment (CI/CD)",
        lectures: [
          { title: "AWS CodePipeline: Automated CI/CD" },
          { title: "AWS CodeBuild: Build Automation" },
          { title: "AWS CodeDeploy: Deploying Applications" },
          { title: "Integration with Jenkins, GitLab CI, or CircleCI" },
          { title: "Automated Rollbacks & Blue/Green Deployments" },
        ],
      },
      {
        title: "Monitoring & Logging",
        lectures: [
          { title: "Prometheus & Grafana for Monitoring" },
          { title: "ELK Stack (Elasticsearch, Logstash, Kibana) for Logging" },
          { title: "AWS CloudWatch Logs & Metrics" },
          { title: "AWS X-Ray for Distributed Tracing" },
          { title: "Alerting & Incident Management with PagerDuty" },
        ],
      },
      {
        title: "Security & Compliance",
        lectures: [
          { title: "Securing AWS Infrastructure (IAM, VPC Security)" },
          { title: "DevSecOps: Integrating Security into CI/CD" },
          { title: "Automated Security Testing with OWASP ZAP" },
          { title: "AWS Security Hub & GuardDuty" },
          { title: "Compliance Automation with AWS Config & CloudTrail" },
        ],
      },
      {
        title: "Advanced Automation",
        lectures: [
          { title: "Automating Infrastructure with AWS Lambda" },
          { title: "ChatOps: Integrating Slack with Jenkins & AWS" },
          { title: "Automated Scaling & Cost Management" },
          { title: "Advanced Scripting with Python & Boto3" },
        ],
      },
      {
        title: "Project Work & Real-World Scenarios",
        lectures: [
          {
            title:
              "End-to-End CI/CD Pipeline on AWS with Jenkins, Docker, and Kubernetes",
          },
          { title: "Multi-Region, Multi-AZ Deployment & Disaster Recovery" },
          { title: "Advanced Security Practices & Compliance Automation" },
          {
            title:
              "Real-Time Monitoring & Alerting for Large-Scale Applications",
          },
        ],
      },
    ],
    learningPoints: [
      "Introduction to DevOps",
      "Concepts in Linux and Automation",
      "Basic concepts in Revision Controls System",
      "Overview of Configuration Management",
      "Understanding Environments",
      "Working on Build Automation",
      "Basic overview of Tomcat Web Server",
      "Overview of Nexus Artifacts/Proxy Tool",
      "Advanced concepts in Jenkins Framework",
      "Setting up of LAMP",
      "Advanced concepts of Apache/HTTPD Web Service",
      "Overview of MySQL Database",
      "Installation of WordPress with LAMP",
      "Working with Docker",
      "Overview of System Monitoring",
      "Live project",
    ],
    learningNotes: [
      "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
      "VR IT Solutions is one of the few institutes in Hyderabad to offer excellent DevOps online training and DevOps classroom training.",
    ],
    whyJoin: {
      course: "DevOps",
      title: "Why Join This Course?",
      description: [
        "With speed, rapid delivery, and reliability being the key benefits of DevOps practice, this course is assuming significance in every spectrum of software development across a wide range of organizations – large, medium or small. Hence, it makes sense for professionals to learn this course to contribute immensely in this new age software development that drives greater value and offers immense benefits for the organizations. This course is offered by real-time professionals to help you understand the actual scenarios and problems. This training helps you master various concepts including principles of continuous development and deployment, software development operations, continuous integration, automation and configuration management. In addition to these concepts, you will also gain hands-on experience on various tools like Git, Docker, Jenkins, etc.",
      ],
      benefits: [
        "DevOps skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "DevOps professionals command premium salaries due to their specialized skills.",
        "DevOps certifications are recognized globally, opening doors to international career opportunities.",
        "DevOps is used by 90% of Fortune 100 companies, making it a highly respected field.",
        "DevOps certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The DevOps training at VR IT Solutions was a game-changer for my career. I landed a job as a DevOps Engineer within a month of completing the course.",
          author: "Priya S.",
          role: "DevOps Engineer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in DevOps. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Cloud Engineer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any DevOps challenge.",
          author: "Anjali M.",
          role: "DevOps Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "MuleSoft Training in Hyderabad",
    course: "MuleSoft",
    link: "mulesoft",
    trending: 6,
    image: "https://vr-it-solutions.vercel.app/images/courses/mulesoft.png",
    description: [
      "VRIT Solutions distinguished itself as the leading MuleSoft Training institute in Hyderabad and MuleSoft Online Trainings. Our Trainers are highly qualified and have high experience in providing quality classroom and online training on MuleSoft.",
      "Mule the prominent section at MuleSoft. As it is an event based architecture, the actions in the Mule Network are generated through the actions taking place in Mule or through external systems. Payload is the data from each event. In order to connect applications, devices, and data from around the world, MuleSoft allows you to easily connect anything with the Anypoint platform.",
      "Students and professionals who intend to expand their careers with their interest in analysis can take this course with MuleSoft Classroom Training in Hyderabad or MuleSoft Online Training.",
    ],
    aboutTheCourse: [
      "Mulesoft training in hyderabad",
      "MuleSoft’s Anypoint Platform™ is the world’s leading integration platform for SOA, SaaS and APIs. Mulesoft offers exceptional business agility to organizations by easily integrating applications, services and managing events in real time with universal connectivity in both the modes – on premise and in the cloud, which is executed with an API-led approach. Using this platform, organizations can re-architect their SOA infrastructure from legacy systems, proprietary platforms and customer integration code to generate business agility. Organizations can also migrate technology infrastructure to the public or private cloud and prioritize adoption of SaaS applications and other cloud based technologies.",
      "VR IT Solutions is one of the best Mulesoft training in Hyderabad to offer well focused and career-oriented training program in MuleSoft. So, get started by clicking here.",
    ],

    hoursContent: "70h",
    category: "Integration & API Management",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "There are no specific pre-requisites for doing this course.",
      "However, basic knowledge in SOAP, REST and Messaging would surely help.",
      "Learn MuleSoft training online and offline modes by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.",
    ],
    courseHighlights: [
      "Free Demo sessions to get to know how the course is conducted.",
      "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule.",
      "Easy to follow, since most of the course is practical oriented with live industry cases.",
      "Classes driven by real time experts - experienced professionals and faculty from reputed institutes.",
      "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles.",
      "Complete assistance to help you crack interviews – we provide mulesoft interview questions, sample resumes and tips.",
      "Get trained in MuleSoft in just 45 hours - select either weekend or weekday mode.",
      "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry.",
    ],
    practicalExecution: [
      "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows OS.",
      "Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.",
      "After successful completion of the MuleSoft Training course we have successfully placed our students in major MNC companies. We offer 100% placement support to our students.",
      "VRIT Solutions offers 100% placement Guaranteed program for deserving students.",
    ],
    sections: [
      {
        title: "Introduction to Anypoint Platform",
        lectures: [
          { title: "Benefits of Anypoint Platform and MuleSoft’s Approach" },
          { title: "What is MuleSoft and ESB" },
          { title: "MuleSoft Key Capabilities" },
          { title: "Mule Project Structure and Components" },
          { title: "Logging Message Processors Data" },
          { title: "Building, Running, and Testing Mule Applications" },
        ],
      },
      {
        title: "Anypoint Studio",
        lectures: [
          { title: "Introduction to Anypoint Studio" },
          { title: "Developing Mule Flows" },
          { title: "Integrating with Maven and GitHub Repository" },
        ],
      },
      {
        title: "Mule Application Structure & Basics",
        lectures: [
          { title: "Mule Attributes, Payload, and Variables" },
          { title: "Flows, Sub-flows, and Async Flows" },
          { title: "Processing Strategies" },
          { title: "Properties File and Global Configurations" },
        ],
      },
      {
        title: "Debugging and Troubleshooting Mule Applications",
        lectures: [
          { title: "Breakpoint and Inspecting Mule Applications" },
          { title: "Mule Message Structure and Event Processing" },
        ],
      },
      {
        title: "Mule Elements",
        lectures: [
          { title: "Connectors, Components, and Scopes" },
          { title: "Transformers, Filters, and Flow Control" },
          { title: "Exception Handling and Security" },
        ],
      },
      {
        title: "Mule Error Handling",
        lectures: [
          { title: "Handling Messaging Errors at Different Levels" },
          { title: "Setting Success and Error Response Settings" },
          { title: "Reconnection Strategies for System Errors" },
        ],
      },
      {
        title: "Triggering the Flows",
        lectures: [
          { title: "Reading and Writing Files" },
          { title: "Triggering Flows Based on File Changes" },
          { title: "Scheduling Flows to Run at Specific Times" },
          { title: "Publishing and Consuming JMS Messages" },
        ],
      },
      {
        title: "Records Processing",
        lectures: [
          { title: "Processing Records Using For Each" },
          { title: "Bulk Data Processing and Streaming" },
          { title: "Exporting Data from Excel, Flat Files, JSON, and XML" },
          { title: "Dumping Data from One Database to Another" },
        ],
      },
      {
        title: "API Led Connectivity",
        lectures: [
          { title: "System Layer, Process Layer, and Experience Layer" },
          { title: "Secure and Unsecure APIs" },
          { title: "Difference Between Each Layer" },
        ],
      },
      {
        title: "Anypoint Platform",
        lectures: [
          { title: "Design Center, Exchange, and API Manager" },
          { title: "Runtime Manager and Access Management" },
          { title: "Data Gateway and Visualizer" },
        ],
      },
      {
        title: "API Designing (RAML)",
        lectures: [
          { title: "Introduction to RAML" },
          { title: "Designing RESTful APIs" },
          { title: "Mocking and Publishing RAML Services" },
        ],
      },
      {
        title: "REST and SOAP APIs",
        lectures: [
          { title: "Designing and Developing Web APIs" },
          { title: "SOAP vs REST Web Services" },
          { title: "Consuming SOAP and REST Services" },
        ],
      },
      {
        title: "Deploying and Managing APIs",
        lectures: [
          { title: "Deploying from Anypoint Studio to Runtime Manager" },
          { title: "Deploying Applications in Cloud vs On-Premises" },
          { title: "Managing Deployed Applications" },
        ],
      },
      {
        title: "API Manager",
        lectures: [
          { title: "API Auto Discovery" },
          { title: "Applying Policies and Securing APIs" },
          { title: "OAuth and OAuth 2 Security" },
        ],
      },
      {
        title: "DataWeave",
        lectures: [
          { title: "Introduction to DataWeave" },
          { title: "DataWeave Transformation Techniques" },
          { title: "Calling Flows from DataWeave" },
        ],
      },
      {
        title: "MUnit (Testing)",
        lectures: [
          { title: "Unit Testing and Process Testing" },
          { title: "Creating Acceptance Criteria" },
          { title: "Mocking Test Cases with Examples" },
        ],
      },
      {
        title: "Continuous Deployment using Jenkins",
        lectures: [
          { title: "Git Repository and Maven Integration" },
          { title: "Continuous Integration with DevOps Tools" },
          { title: "Managing Build Versions and Triggering Events" },
        ],
      },
      {
        title: "Practice Examples",
        lectures: [
          { title: "Designing API Error Handling Framework" },
          { title: "Mule Batch Processing" },
          { title: "Creating a Proxy API using OAuth 2.0" },
          { title: "Advanced DataWeave Tips" },
        ],
      },
      {
        title: "Interview Preparation",
        lectures: [
          { title: "Discussing Interview Questions and Answers" },
          { title: "Guidance on Resume Preparation" },
          { title: "Real-Time Project Description and Explanation" },
        ],
      },
    ],
    learningPoints: [
      "Overview of Mule – Getting started",
      "Introduction to ESB",
      "Lab Documentation and WorkSpace Downloads",
      "Basics of Mule",
      "Standalone Deployments and MMC",
      "Consumption of REST and SOAP Webservices",
      "Leveraging Database Endpoint, Externalizing properties and Domains",
      "Leveraging File End point and JMS endpoint",
      "Implementing Splitter Aggregator Pattern and Tuning Performance",
      "Transformers",
      "Learn how to handle exceptions in Mule",
      "Live Project",
    ],
    learningNotes: [
      "This course is 70% practical and 30% theory.",
      "VR IT solutions is one of the best institutes for Mulesoft online training. So, click here to get started.",
    ],
    whoShouldAttend: [
      "Developers (various languages)",
      "Business Architects",
      "Program Managers",
      "System Integrators",
      "Solution Consultants",
      "Fresh graduates, who are looking for a career in MuleSoft.",
    ],
    whyJoin: {
      course: "MuleSoft",
      title: "Why Join This Course?",
      description: [
        "With rapid technological advancements, this course is slowly gaining importance in the market. The uniqueness of this course is it teaches you mule in step by step manner starting from basics to advanced without the requirement of any previous integration background.",
        "VR IT Solutions is one of the few institutes in Hyderabad to offer the best and innovative training in MuleSoft training that is well suited to help you get started and embark on a fruitful journey. So, get started by clicking here.",
      ],
      benefits: [
        "MuleSoft skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "MuleSoft professionals command premium salaries due to their specialized skills.",
        "MuleSoft certifications are recognized globally, opening doors to international career opportunities.",
        "MuleSoft is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "MuleSoft certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The MuleSoft training at VR IT Solutions was a game-changer for my career. I landed a job as a MuleSoft Developer within a month of completing the course.",
          author: "Priya S.",
          role: "MuleSoft Developer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in MuleSoft development. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Integration Specialist, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any MuleSoft challenge.",
          author: "Anjali M.",
          role: "MuleSoft Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Workday Training in Hyderabad",
    course: "Workday",
    link: "workday",
    image: "https://vr-it-solutions.vercel.app/images/courses/workday.png",
    description:
      "Workday is a leading cloud-based Human Capital Management (HCM) platform that helps organizations manage HR, payroll, and financial processes. This comprehensive training program covers both Workday Functional and Technical aspects, equipping you with the skills needed to manage and customize Workday applications effectively. Whether you're an aspiring HR professional or a technical specialist, this course will prepare you for real-world scenarios and help you achieve Workday certification.",

    hoursContent: "70h",
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    aboutTheCourse: [
      "VR IT Solutions is one of the best Workday training institutes in Hyderabad.",
      "Workday is an on-demand cloud-based financial management and human capital management software.",
      "It helps organizations in all industries to achieve stupendous success, be it mid-level or top-rung companies.",
      "Its cloud-based system offers superior insights for any business and provides the agility to adapt to change.",
      "It integrates finance and HR in a seamless system to offer superior performance.",
      "Are you looking to start a new learning journey?",
      "If yes, one should surely take Workday Training in Hyderabad at VR IT Solutions to get the best job in reputed companies.",
      "Workday is considered as the human capital management and financial management software solution providing real-time visibility into data that supports smart decision-making.",
    ],
    coursePrerequisites: [
      "Though VRIT solutions hasn’t prescribed any specific pre-requisites for doing this course, however, it is preferred to have knowledge in the following topics to better understand and appreciate the course.",
      "Basic knowledge of accounts and financial flows",
      "Basic knowledge of HR functions",
      "Basic knowledge of data",
    ],
    sections: [
      {
        title: "Core Concepts and Navigation Basics",
        lectures: [
          {
            title:
              "Organization Types: Supervisory Organizations, Cost Center, Location, Region",
          },
          { title: "Reorganization and Setup of Supervisory Org Structure" },
          { title: "Creating and Dividing Subordinate Orgs" },
          { title: "Organization Hierarchies and Assignments" },
        ],
      },
      {
        title: "Staffing Models",
        lectures: [
          { title: "Types of Staffing Models" },
          { title: "Configuring Individual Staffing Models" },
          { title: "Hiring Restrictions and Position Management" },
          { title: "Headcount Management and Job Management" },
        ],
      },
      {
        title: "Jobs and Positions",
        lectures: [
          { title: "Job Profiles and Job Families" },
          { title: "Creating Positions and Edit Position Restrictions" },
        ],
      },
      {
        title: "Compensation",
        lectures: [
          { title: "Compensation Components and Rules" },
          { title: "Creating Compensation Packages and Grades" },
        ],
      },
      {
        title: "Security Groups",
        lectures: [
          {
            title:
              "Domain Security Policies and Business Process Security Policies",
          },
          { title: "Configuring Role-Based and Job-Based Security" },
        ],
      },
      {
        title: "Business Process",
        lectures: [
          { title: "Business Process Step Types and Configuration Options" },
          { title: "Deploying Business Processes" },
        ],
      },
      {
        title: "Reports",
        lectures: [{ title: "Building Simple, Advanced, and Matrix Reports" }],
      },
      {
        title: "Calculated Fields",
        lectures: [
          { title: "Date Functions, Text Functions, and Lookup Fields" },
          { title: "Arithmetic Fields and Extract Single/Multi Instance" },
        ],
      },
      {
        title: "Workday Technical",
        lectures: [
          {
            title:
              "Integration: Enterprise Interface Builder (Inbound and Outbound)",
          },
          {
            title:
              "Core Connectors: Worker, Sequence Generators, and Integration System User",
          },
          { title: "BP Configuration for Integration" },
          { title: "PICOF Integration: Build" },
          { title: "ADP Payforce and Overview of XSLT" },
          { title: "Overview of Studio and Web Services" },
        ],
      },
    ],
    learningPoints: [
      "Introduction to Workday: This module provides the basics of Workday and helps you get started with the interface, navigation, menus, hyperlinks, etc.",
      "Organizations in Workday: Covers varied organization types in Workday, its hierarchies, how to set up and manage the supervisory organization structure.",
      "Workday Staffing modules: This module provides you an overview of different types of Workday staffing models, hiring restrictions, and how to execute complex management functions in Workday.",
      "Jobs and Profiles in Workday Suite: This module covers concepts such as job profiles, job families, creation of job positions, and much more.",
      "Compensation in Workday: This module provides an overview of the components of compensation, how compensation packages are designed based on certain rules, grades, and how to set up security and initiate the compensated event.",
      "Workday Security Groups: This module provides an overview of security group types, components of configurable security, its functional areas in Workday, and also the domain security policies.",
      "Workday Business Process: This module provides an overview of business processes, its functionality, varied sub-processes, and generating business process reports in Workday.",
      "WorkDay reports: Provides advanced concepts about what standard and custom reports are, different data sources, its objects, fields, order columns, and the filter criteria in Workday.",
      "Calculated Fields: This module lets you learn how to create various kinds of calculated fields, text functions, extract single and multi-instances in Workday.",
      "iLoads: This module provides an overview of iLoads and other topics such as data extractions and how to lay a foundation, master, and implement suites on Workday.",
      "Transactions: This module lets you know how to assign user-based security, what and why staffing movement is done, hiring supervisory organizations, and finally workday accounts and viewing personal data.",
      "Live Project: A practical hands-on project to implement concepts learned during the course.",
    ],
    practicalExecution: [
      "In order to work on practicals, some basic pre-requisites are required. You need a good internet connection, along with the required software that needs to be installed. This software can easily run on all operating systems such as Windows, OS, Linux, and Unix.",
      "VR IT Solutions is one of the best workday training to offer excellent online and classroom training in WorkDay.",
    ],

    whoShouldAttend: [
      "In the current IT industry, Workday technology is considered the most valued and respected professional requirement for Finance and HR roles.",
      "People interested in HRMS technology, Finance, and HR Professionals, as well as recent MBA graduates with Finance or HR backgrounds, can benefit from this course.",
      "Evaluating an IT career stream in Finance and HR organizations will be an added advantage for those taking up the Workday Course in Hyderabad at VR IT Solutions.",
      "MBA in Finance & HR",
      "Professionals having experience in accounts and finance domain",
      "Experienced HR Professionals",
      "Fresh graduates interested to make a career in Finance & accounting",
      "Fresh graduates interested to make a career in HR",
      "Software professionals, looking to switch their careers",
      "Project managers",
      "Business analysts",
    ],
    careerOpportunities: [
      "There is a great demand for the Workday Expertise to get into top-notch companies with highest paid salary range and to boost the business growth.",
      "Most of the organizations are looking for the Workday Certified Expertise to solve the business solutions with ease and to enhance career graph in the best way.",
      "To know the complete details, simply avail free Workday technology demo to ensure other training classes and decide to opt the VR IT Solutions - The Best Workday training in Hyderabad.",
    ],
    whyJoin: {
      course: "Workday",
      title: "Why Join This Course?",
      description: [
        "VR IT Solutions is one of the best Workday online training institutes in Hyderabad.",
        "With Finance being one of the fastest-growing sectors of the economy, it offers one of the best job opportunities to build a strong career.",
        "With automation making inroads in almost all segments of business, learning Workday can make you a better professional and a quick decision-maker, whether you are in the HR or Finance area.",
        "If you are already an HR or finance professional, we highly recommend this course to boost your career.",
        "We also recommend this course to youngsters interested in making Finance or HR their career.",
        "VR IT Solutions is one of the best software training institutes in Hyderabad, offering Workday online training with a well-focused and career-oriented training program.",
        "So, get started by clicking here.",
      ],
      benefits: [
        "Workday skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Workday professionals command premium salaries due to their specialized skills.",
        "Workday certifications are recognized globally, opening doors to international career opportunities.",
        "Workday is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "Workday certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Workday training at VR IT Solutions was a game-changer for my career. I landed a job as a Workday Consultant within a month of completing the course.",
          author: "Priya S.",
          role: "Workday Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Workday. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "HR Specialist, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Workday challenge.",
          author: "Anjali M.",
          role: "Workday Administrator, IT Firm",
        },
      ],
    },
  },
  {
    title: "Snowflake Training in Hyderabad",
    course: "Snowflake",
    link: "snowflake",
    image: "https://vr-it-solutions.vercel.app/images/courses/snowflake.png",
    description:
      "Snowflake is a leading cloud-based data warehousing platform that helps organizations store, analyze, and share data efficiently. This comprehensive training program covers Snowflake's architecture, data warehousing, and advanced features, equipping you with the skills needed to manage and optimize data solutions effectively. Whether you're an aspiring data engineer or a data analyst, this course will prepare you for real-world scenarios and help you achieve Snowflake certification.",

    hoursContent: "70h",
    aboutTheCourse: [
      "Cloud computing and cloud storage has revolutionized the way mundane data sources are managed and maintained.",
      "In this context, a cloud-based storage and analytics service – Snowflake is rapidly creating inroads and is transforming the way data is managed across organizations.",
      "Snowflake is the proprietary platform of Snowflake Inc., a cloud computing-based data warehousing company, based in Bozeman, Montana.",
      "Snowflake offers a single, global platform of your complete database ecosystem, offering seamless collaboration across multiple business entities.",
      "This platform offers the right mix of performance, flexibility and near-infinite scalability to easily upload, combine, analyze and authentically share your data anywhere, anytime.",
      "It is a fully managed service that is easy to work while letting you power a myriad number of concurrent workloads.",
      "And the best part is it can run on multiple cloud platforms like Amazon S3, Microsoft Azure, and Google Cloud Platform.",
    ],
    courseHighlights: [
      "With booming opportunities in data analytics and warehousing, now is the right opportunity for professionals and students to get trained in this rapidly innovative platform to reap huge benefits in terms of career growth, newer job roles, and of course hefty pay packages.",
      "Several companies are currently running snowflake on their platforms, having more than 4000 active accounts.",
      "Above all, with 4000+ active customers and 450+ million jobs in Snowflake getting listed daily, the future looks extremely bright in this technology segment.",
      "We at VRIT Solutions have designed a comprehensive Snowflake online training program for professionals and students alike to jump-start their careers in this area of specialization.",
      "This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready.",
      "Make VRIT Solutions your first choice for Snowflake training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects.",
      "We offer the best-in-class Snowflake training and Snowflake job support to offer the right platform to power your career to the next level.",
      "So, don't stay behind. Join now for a lucrative career.",
    ],
    category: "Data Warehousing & Management",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of data warehousing concepts.",
      "Familiarity with SQL and database technologies.",
      "Knowledge of basic cloud computing concepts.",
    ],
    sections: [
      {
        title: "Introduction to Snowflake",
        lectures: [
          { title: "Overview of Snowflake Architecture" },
          { title: "Snowflake Multi-Cluster Shared Data Architecture" },
          {
            title:
              "Key Concepts: Virtual Warehouses, Databases, Schemas, and Tables",
          },
          {
            title:
              "Snowflake Editions: Standard, Enterprise, Business Critical, and VPS",
          },
        ],
      },
      {
        title: "Snowflake Data Warehousing",
        lectures: [
          { title: "Data Storage and Compression Techniques" },
          { title: "Micro-partitioning and Columnar Storage" },
          { title: "Time Travel and Data Retention Strategies" },
          {
            title:
              "Zero-Copy Cloning: Creating Test and Development Environments",
          },
          { title: "Data Sharing: Secure and Cross-Account Data Sharing" },
        ],
      },
      {
        title: "Data Loading & Unloading",
        lectures: [
          { title: "Loading Data using COPY INTO Command" },
          { title: "Using Snowpipe for Continuous Data Ingestion" },
          { title: "Bulk Data Loading: Best Practices" },
          { title: "Data Unloading to External Stages (S3, Azure Blob, GCS)" },
          { title: "Handling Semi-Structured Data (JSON, Avro, Parquet)" },
        ],
      },
      {
        title: "Virtual Warehouses & Performance Tuning",
        lectures: [
          { title: "Virtual Warehouse Sizing & Scaling" },
          { title: "Query Performance Optimization Techniques" },
          { title: "Result Caching & Query Reuse" },
          { title: "Query Profiling and Performance Metrics" },
          { title: "Managing Concurrency and Workload Isolation" },
        ],
      },
      {
        title: "Security & Access Control",
        lectures: [
          { title: "Role-Based Access Control (RBAC) & Privilege Management" },
          { title: "Network Security: IP Whitelisting & Network Policies" },
          { title: "Data Encryption: In-Transit and At-Rest" },
          {
            title: "Managing and Auditing Access with Snowflake Account Usage",
          },
          { title: "Using Snowflake’s Security Features: MFA, SSO, OAuth" },
        ],
      },
      {
        title: "Data Modeling in Snowflake",
        lectures: [
          { title: "Dimensional Modeling: Star and Snowflake Schemas" },
          { title: "Data Vault Modeling" },
          { title: "Handling Slowly Changing Dimensions (SCD)" },
          { title: "Working with Fact and Dimension Tables" },
          { title: "Schema Design Best Practices" },
        ],
      },
      {
        title: "Advanced SQL in Snowflake",
        lectures: [
          { title: "Window Functions and Analytical Queries" },
          { title: "Common Table Expressions (CTEs) and Recursive Queries" },
          { title: "Advanced Joins, Subqueries, and Set Operations" },
          { title: "User-Defined Functions (UDFs) and Stored Procedures" },
          { title: "Query Optimization and Execution Plans" },
        ],
      },
      {
        title: "Data Integration & ETL/ELT",
        lectures: [
          {
            title: "Snowflake with ETL Tools (Informatica, Talend, Matillion)",
          },
          { title: "Building ELT Pipelines with Snowflake and SQL" },
          { title: "Data Transformation with Snowflake Streams and Tasks" },
          {
            title:
              "Continuous Data Integration with Snowpipe and Event-Based Ingestion",
          },
          {
            title: "Integrating Snowflake with Apache Kafka for Real-Time Data",
          },
        ],
      },
      {
        title: "Advanced Features",
        lectures: [
          { title: "Materialized Views: Design and Usage" },
          { title: "Working with External Tables" },
          { title: "Data Masking & Tokenization for Privacy" },
          { title: "Semi-Structured Data Handling: VARIANT, OBJECT, ARRAY" },
          { title: "Geospatial Data Handling in Snowflake" },
        ],
      },
      {
        title: "Data Sharing & Collaboration",
        lectures: [
          { title: "Secure Data Sharing: Concepts and Implementation" },
          { title: "Reader Accounts: Sharing Data with Non-Snowflake Users" },
          { title: "Data Marketplace: Publishing and Subscribing to Data" },
          { title: "Managing Data Shares across Multiple Accounts" },
          { title: "Real-Time Data Sharing Scenarios" },
        ],
      },
      {
        title: "Snowflake Integration with BI Tools",
        lectures: [
          { title: "Connecting Snowflake to Tableau, Power BI, Looker" },
          { title: "Performance Tuning for BI Tools Integration" },
          { title: "Real-Time Analytics with Snowflake and BI Tools" },
          { title: "Advanced Data Visualization Techniques" },
          { title: "Best Practices for BI Integration" },
        ],
      },
      {
        title: "Data Governance & Compliance",
        lectures: [
          { title: "Data Lineage Tracking and Auditing" },
          { title: "Implementing Data Quality Checks" },
          { title: "Compliance with GDPR, HIPAA, and other Regulations" },
          { title: "Using Snowflake’s Data Governance Features" },
          { title: "Audit Logging and Access Monitoring" },
        ],
      },
      {
        title: "Real-World Projects & Case Studies",
        lectures: [
          { title: "End-to-End Data Warehousing Project with Snowflake" },
          {
            title: "Implementing Real-Time Analytics with Snowflake and Kafka",
          },
          { title: "Data Governance and Compliance Project in Snowflake" },
          { title: "BI Integration and Dashboarding Project using Snowflake" },
          { title: "Machine Learning Model Deployment with Snowflake" },
        ],
      },
    ],
    learningPoints: [
      "An overview of Snowflake Platform and its applications in the business",
      "Getting started",
      "Some basic terminology",
      "Snowflake Eco-system and related concepts",
      "Service Billing model and its practical applications",
      "An overview of Snowflake Editions",
      "Snowflake architecture",
      "Virtual Warehouse",
      "Database objects",
      "Few Demo sessions including installation and using SnowSQL",
      "Data import and export with practical demos",
      "Querying feature in Snowflake",
      "Monitoring Snowflake with a few live examples",
      "Course Summary and evaluation",
    ],
    learningNotes: [
      "The syllabus listed above is indicative and may include more topics for comprehensive learning.",
      "This course is supplemented by relevant lab exercises, lectures, group discussions as well as extensive hands-on practice sessions.",
      "After successful completion of the Snowflake Training course we have successfully placed our students in major MNC companies.",
      "We offer 100% placement support to our students.",
      "VRIT Solutions offers 100% snowflake training placement Guaranteed program for deserving students.",
    ],
    whyJoin: {
      course: "Snowflake",
      title: "Why Join This Course?",
      description: [
        "Snowflake is a rapidly growing platform used by organizations worldwide to store, analyze, and share data efficiently. This course provides a comprehensive understanding of Snowflake, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Snowflake training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        "Snowflake skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Snowflake professionals command premium salaries due to their specialized skills.",
        "Snowflake certifications are recognized globally, opening doors to international career opportunities.",
        "Snowflake is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "Snowflake certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Snowflake training at VR IT Solutions was a game-changer for my career. I landed a job as a Data Engineer within a month of completing the course.",
          author: "Priya S.",
          role: "Data Engineer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Snowflake. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Data Analyst, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Snowflake challenge.",
          author: "Anjali M.",
          role: "Snowflake Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Machine Learning with Python Training in Hyderabad",
    course: "Machine Learning with Python",
    link: "machine-learning-with-python",
    image:
      "https://vr-it-solutions.vercel.app/images/courses/machine-learning-python.png",
    description: [
      "Arthur Samuel, a pioneer in the field of artificial intelligence and computer gaming, coined the term 'Machine Learning'. He defined machine learning as – 'Field of study that gives computers the capability to learn without being explicitly programmed'. In a very layman manner, Machine Learning (ML) can be explained as automating and improving the learning process of computers based on their experiences without being actually programmed, i.e., without any human assistance. The process starts with feeding good quality data and then training our machines (computers) by building machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.",
    ],

    hoursContent: "70h",
    category: "Data Science & Machine Learning",
    level: "Beginner to Advanced",
    aboutTheCourse: [
      "Header:Introduction To Machine Learning",
      "Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of Computer Programs that can change when exposed to new data. In this article, we’ll see basics of Machine Learning, and implementation of a simple machine learning algorithm using python.",
      "Best Python libraries for Machine Learning",
      "Machine Learning, as the name suggests, is the science of programming a computer by which they are able to learn from different kinds of data. A more general definition given by Arthur Samuel is - 'Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed. They are typically used to solve various types of life problems.",
      "In the older days, people used to perform Machine Learning tasks by manually coding all the algorithms and mathematical and statistical formula. This made the process time consuming, tedious and inefficient. But in the modern days, it is become very much easy and efficient compared to the olden days by various python libraries, frameworks, and modules.",
      "Today, Python is one of the most popular programming languages for this task and it has replaced many languages in the industry, one of the reason is its vast collection of libraries.",
      "Python libraries that used in Machine Learning are:",
      [
        "Numpy",
        "Scipy",
        "Scikit-learn",
        "Theano",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Pandas",
        "Matplotlib",
      ],
      "Header:Overview",
      "Data science is a collection of research-based methods and processes often with difficulty insights from data. machine learning in data science is a activity will become ever more important as the amount of data available continues to increase, and the challenge of extracting discernment from the data follows.",
      "This observation defines of the difference among these three fields:",
      [
        "Data science produces insights.",
        "Machine learning produces predictions.",
        "Artificial intelligence produces actions.",
      ],
      "Header:The Components Of Data Science",
      "Data science contents like machine learning, R, python and Deep learning..etc.. is a combination of mathematics, programming, problem-solving, and data capturing in 'inventive ways'. It is also the ability to find patterns, along with cleaning, preparing, and aligning data.",
      "Data science is a field that encompasses anything related to data cleansing, preparation, and analysis. It is an umbrella term for techniques used when trying to extract insights and information from data.",
      "Header:Artificial Intelligence(AI)",
      "An artificial intelligence (AI) tools to find an accurate and deep understanding that they are looking for.",
      "The fabulous data science as an occupation is that it does not necessarily need a degree to get into the field, Skills in maths , statistics or operations research, business or many others, can be leveraged as long as they are supported by a base knowledge of mathematics and programming.",
      "This role to play as data and AI evolve, and its complexities multiply.",
      "The increasing intelligence of AI has a lot to do with how neural networks are being applied within the field.",
      "Header:Neural Network",
      "A neural network is either a system software or hardware that works similar to the tasks performed by neurons of human brain. Neural networks include various technologies like deep learning, and machine learning as a part of Artificial Intelligence (AI).",
      "Header:Proposed three properties",
      "Most professionals in these fields have been classified as data science, machine learning, or artificial intelligence, even if these are very hard tie together. But they're not interchangeable , The fields do have a great deal of overlap, and there's enough promotion around each of them that the possibility can feel like a matter of marketing.",
      "Header:Data Science Produces Insights",
      "Data science is prominent from the other two fields because its agenda is to gain insight and understanding. It is descriptive , exploratory and causal, not everything that produces insights qualifies as data science. Traditionally data science involves a combination of statistics, software engineering, and domain expertise.",
      [
        "Communication",
        "Data visualization",
        "Domain knowledge",
        "Experiment design",
        "Statistical inference",
      ],
      "Data scientists might use simple tools on SQL queries. They could also use very complex methods. They might work with distributed data stores to illustrates of records, developing most advanced statistical techniques, and build interactive with set of information as a chart or other image. Whatever they use, the hope strongly to achieve to gain a better understanding of their data.",
    ],

    coursePrerequisites: [
      "Basic understanding of programming concepts.",
      "Familiarity with Python is a plus but not mandatory.",
      "Knowledge of basic mathematics and statistics.",
    ],
    sections: [
      {
        title: "Python Programming Fundamentals",
        lectures: [
          { title: "Python Basics: Data Types, Variables, and Operators" },
          { title: "Control Flow: if, else, for, while loops" },
          { title: "Functions and Lambda Expressions" },
          { title: "Exception Handling" },
          { title: "File Handling and I/O Operations" },
          { title: "Object-Oriented Programming (OOP) in Python" },
          { title: "Decorators, Iterators, and Generators" },
          { title: "Context Managers" },
          { title: "Python Modules and Packages" },
          { title: "Working with Dates and Times in Python" },
        ],
      },
      {
        title: "Data Structures and Algorithms in Python",
        lectures: [
          { title: "Lists, Tuples, Sets, and Dictionaries" },
          { title: "Stacks, Queues, Linked Lists, Trees, and Graphs" },
          { title: "Searching and Sorting Algorithms" },
          { title: "Recursion and Dynamic Programming" },
          { title: "Algorithm Complexity: Big-O Notation" },
        ],
      },
      {
        title: "Data Handling and Manipulation",
        lectures: [
          { title: "NumPy for Numerical Computing" },
          { title: "Pandas for Data Manipulation" },
          { title: "Data Visualization with Matplotlib and Seaborn" },
        ],
      },
      {
        title: "Machine Learning Fundamentals",
        lectures: [
          { title: "Introduction to Machine Learning" },
          {
            title:
              "Supervised Learning: Linear Regression, Logistic Regression",
          },
          { title: "Classification Algorithms: k-NN, SVM, Decision Trees" },
          { title: "Ensemble Methods: Bagging, Boosting, XGBoost" },
          {
            title:
              "Unsupervised Learning: Clustering, Dimensionality Reduction",
          },
          { title: "Anomaly Detection and Reinforcement Learning" },
        ],
      },
      {
        title: "Deep Learning with Python",
        lectures: [
          { title: "Introduction to Neural Networks" },
          { title: "Deep Learning Frameworks: TensorFlow and PyTorch" },
          { title: "Convolutional Neural Networks (CNNs)" },
          { title: "Natural Language Processing (NLP)" },
          { title: "Generative Models: VAEs, GANs" },
        ],
      },
      {
        title: "Model Deployment and Productionization",
        lectures: [
          { title: "Model Serving and APIs" },
          { title: "MLOps: Machine Learning Operations" },
        ],
      },
      {
        title: "Advanced Topics and Industry Applications",
        lectures: [
          { title: "Time Series Forecasting" },
          { title: "Recommender Systems" },
          { title: "Computer Vision Projects" },
          { title: "AI Ethics and Fairness" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "End-to-End Machine Learning Project" },
          { title: "Domain-Specific Projects: Finance, Healthcare, Retail" },
        ],
      },
    ],
    learningPoints: [
      "Master Python programming and data handling techniques",
      "Understand machine learning algorithms and their applications",
      "Build, evaluate, and deploy machine learning models",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Machine Learning with Python",
      title: "Why Join This Course?",
      description: [
        "Machine Learning is one of the most in-demand skills in the tech industry. This course provides a comprehensive understanding of machine learning using Python, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to machine learning training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        "Machine Learning skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Machine Learning professionals command premium salaries due to their specialized skills.",
        "Machine Learning certifications are recognized globally, opening doors to international career opportunities.",
        "Machine Learning is used by 90% of Fortune 100 companies, making it a highly respected field.",
        "Machine Learning certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Machine Learning with Python training at VR IT Solutions was a game-changer for my career. I landed a job as a Data Scientist within a month of completing the course.",
          author: "Priya S.",
          role: "Data Scientist, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in machine learning. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Machine Learning Engineer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any machine learning challenge.",
          author: "Anjali M.",
          role: "AI Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Hadoop Online Training",
    course: "Hadoop",
    link: "hadoop",
    image: "https://vr-it-solutions.vercel.app/images/courses/hadoop.jpg",
    description:
      "Hadoop is a leading big data framework that helps organizations store, process, and analyze large datasets efficiently. This comprehensive training program covers Hadoop's core components, ecosystem tools, and advanced concepts, equipping you with the skills needed to manage big data solutions effectively.",

    hoursContent: "70h",
    category: "Big Data & Analytics",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Good analytical thinking",
      "Basic knowledge of quantitative techniques (a basic course in statistics would be great)",
      "Sound knowledge in core Java concepts, which is a must to understand the foundations of Hadoop. However, essential concepts of Java will also be covered to understand the foundations of Hadoop.",
      "Some knowledge of Pig programming to enable you to execute Hadoop programs easier.",
      "Knowledge of Hive can be useful in understanding the concepts of Data warehousing.",
      "Basic knowledge of Linux commands for day-to-day execution of the software",
    ],
    practicalExecution: [
      "VR IT solutions is one of the best institutes in providing adequate practical training to complement your theory knowledge, which is worth your investment and comparatively better than other similar institutes in Hyderabad.",
      "We help you in successfully accomplishing practical training using state-of-the-art Hadoop virtual software installed in your system (Desktop or Laptop).",
      "A good internet connection is required to get any help from the software support team.",
      "You have the option to execute practical sessions and Hadoop interview questions either from your system or leveraging our remote training sessions to get an enriched learning experience.",
    ],
    aboutTheCourse: [
      "Header:Basic Overview",
      "With Hadoop, you can run applications with thousands of commodity hardware nodes and manage thousands of terabytes of data.",
      "It is an open-source software framework used for distributed storage and processing of big data.",
      "This is done using the MapReduce programming model.",
      "It offers a distributed file system that enables swift data transfer rates among nodes and allows the system to continue operating even if a node fails.",
      "This approach minimizes the risk of catastrophic system failure and data loss, even if a sizeable number of nodes remain inoperative.",
      "Hadoop is the primary foundation for processing big data tasks – sales planning & business, scientific analytics, and processing huge volumes of sensor data.",

      "Header:Why Hadoop?",
      [
        "Capability to store and process enormous volumes of data swiftly: With data increasing daily from various sources such as social media and IoT sensors, Hadoop serves a crucial purpose.",
        "The power of computing: As Hadoop uses a distributed computing model, it processes data quickly. Increasing computing nodes exponentially increases processing power.",
        "Zero disruption of work: Data and application processing are protected against hardware failures. If a node fails, jobs are automatically redirected to other nodes to ensure continued operation.",
        "Flexibility: Traditional databases require data preprocessing before storage. Hadoop eliminates this limitation, allowing storage of structured and unstructured data (text, images, videos) without preprocessing.",
        "Lower cost: The open-source framework is free and uses commodity hardware to store large volumes of data, reducing expenses.",
        "Highly scalable: The system can easily scale by adding nodes, requiring minimal administration.",
      ],
    ],
    sections: [
      {
        title: "Hadoop Ecosystem Overview",
        lectures: [
          { title: "Introduction to Big Data and Hadoop" },
          { title: "Hadoop Architecture: HDFS, YARN, and MapReduce" },
          { title: "Hadoop Cluster Setup: On-Premises vs Cloud Deployments" },
        ],
      },
      {
        title: "Hadoop Distributed File System (HDFS)",
        lectures: [
          { title: "HDFS Architecture and Data Storage" },
          { title: "HDFS Commands and Operations" },
          { title: "Data Ingestion into HDFS: Sqoop, Flume, and Kafka" },
        ],
      },
      {
        title: "MapReduce Programming Model",
        lectures: [
          { title: "MapReduce Fundamentals" },
          { title: "Advanced MapReduce Concepts" },
        ],
      },
      {
        title: "Hadoop Ecosystem Tools",
        lectures: [
          { title: "Apache Hive: Data Warehousing with Hive" },
          { title: "Apache Pig: Data Processing with Pig" },
          { title: "Apache HBase: NoSQL Databases and HBase" },
          { title: "Apache Sqoop: Data Import and Export" },
          { title: "Apache Flume: Real-Time Data Ingestion" },
          { title: "Apache Kafka: Distributed Messaging" },
        ],
      },
      {
        title: "Data Processing and Analytics with Hadoop",
        lectures: [
          { title: "Apache Spark: Introduction to Spark and its Ecosystem" },
          { title: "Apache Oozie: Workflow Scheduling" },
          { title: "Apache Zookeeper: Coordination Service" },
        ],
      },
      {
        title: "Advanced Hadoop Security",
        lectures: [
          { title: "Security Mechanisms in Hadoop" },
          { title: "Hadoop in the Cloud: AWS, Azure, GCP" },
        ],
      },
      {
        title: "Big Data Analytics and Machine Learning",
        lectures: [
          { title: "Big Data Analytics with Hadoop" },
          { title: "Hadoop Integration with Modern Data Platforms" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "End-to-End Data Processing Pipeline" },
          { title: "Industry-Specific Projects: Finance, Healthcare, Retail" },
        ],
      },
    ],
    learningPoints: [
      "HDFS and MapReduce Framework",
      "Architecture of Hadoop 2.x",
      "Write Complex MapReduce Programs and Set Up Hadoop Cluster",
      "Work on Data Analytics by using Pig, Hive and Yarn",
      "Learn Sqoop and Flume for data loading techniques",
      "Implement integration by HBase and MapReduce",
      "Implement Indexing and Advanced Usage",
      "Schedule jobs with the use of Oozie application",
      "Implement best practices for Hadoop Development Program",
      "Work on real Life Projects, based on Big Data Analytics",
    ],
    whoShouldAttend: [
      "VR IT solutions is the one Hadoop online training that offers good course support for the candidates throughout the course.",
      "With the increased demand for big data analytics with the future needs of the information technology, there is scope for every IT enthusiast to look into this newly growing field.",
      "More than programming, this field is all filled with the purpose of saving and troubleshooting the data.",
      "VR IT solutions is one such kind of Data Science & Hadoop online course Institute in Hyderabad that offers online courses.",
      "A typical Hadoop batch is composed of the following set of professionals:",
      "Data analysts",
      "Managers",
      "Business analysts",
      "Project managers of IT firms",
      "Software testing professionals",
      "System Administrators",
      "Software developers",
      "Fresh graduates",
      "Mainframe professionals",
    ],
    whyJoin: {
      course: "Hadoop",
      title: "Why Join This Course?",
      description: [
        "As there are lot of challenges associated with data administration and management due to rapid data explosion, this course digs into the deeper aspects of the Hadoop and tremendously helps programmers, data analytics and other professionals to seek a rewarding career in this area.",
        "This course lets you brush up the basic concepts in data analytics, for example, basic database knowledge and then slowly apply such concepts to the more advanced level of data science, thereby helping you to get the complete grip of concepts and get started with Hadoop.",
        "VR IT is one among the few institutes that offer excellent Hadoop online training.",
      ],
      benefits: [
        "Hadoop skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Hadoop professionals command premium salaries due to their specialized skills.",
        "Hadoop certifications are recognized globally, opening doors to international career opportunities.",
        "Hadoop is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "Hadoop certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Hadoop training at VR IT Solutions was a game-changer for my career. I landed a job as a Big Data Engineer within a month of completing the course.",
          author: "Priya S.",
          role: "Big Data Engineer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Hadoop. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Data Analyst, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Hadoop challenge.",
          author: "Anjali M.",
          role: "Hadoop Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Data Science Training in Hyderabad",
    course: "Data Science",
    link: "data-science",
    image: "https://vr-it-solutions.vercel.app/images/courses/data-science.png",
    description: [
      "Data science blends scientific methods, processes, algorithms, and systems to generate meaningful knowledge or insights from data in various modes: structured or unstructured.",
      "The process of extracting meaningful insights becomes even more significant and challenging when data grows exponentially from various sources.",
      "Data science is all about using this data in creative ways to generate value for business and effective decision-making.",

      "VRIT Solutions is one of the best data science online training providers.",
      "We offer a data science online course with a well-focused and career-oriented training program in Data Science.",
      "So, get started by clicking here.",

      "Significance of Data Science in AI",
      "Data scientists can use a variety of AI tools to generate meaningful insights.",
      "Though Data Science is an interdisciplinary field encompassing various domains, the beauty of the course is that it does not require any formal degree to enter this field.",
      "Skills in subjects like mathematics, statistics/operations research, business, or many others can be leveraged with a strong foundation in basic mathematics and computer programming.",
      "Data scientists may apply quantitative techniques to dive deeper into data mining for generating insights, such as inferential models, segmentation analysis, time series forecasting, synthetic control experiments, and more.",
      "Data-driven insights are crucial in offering strategic direction.",
      "Data scientists act as consultants, guiding various business stakeholders on how to act on such inferences for effective decision-making.",
    ],
    aboutTheCourse: [
      "VRIT is one of the few institutes in Hyderabad that offers a data science online course with a well-focused, career-oriented training program in Data Science. Due to rapid data explosion, thousands of jobs are getting generated daily, offering an attractive career proposition for future data science professionals. However, a career-driven course, backed by quality infrastructure and support, is what students require to make a head start in the Data Science field.",
    ],

    hoursContent: "70h",
    category: "Data Science & Machine Learning",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of statistics and programming.",
      "Familiarity with Python is a plus but not mandatory.",
      "Knowledge of basic mathematics and data handling concepts.",
    ],
    sections: [
      {
        title: "Introduction to Data Science",
        lectures: [
          { title: "What is Data Science?" },
          { title: "Data Science vs BI and Reporting" },
          { title: "Skillsets Required for Data Scientists" },
          { title: "Basic Concepts of Statistics" },
        ],
      },
      {
        title: "Descriptive Statistics and Probability Distributions",
        lectures: [
          { title: "Measures of Central Tendency: Mean, Mode, Median" },
          {
            title:
              "Measures of Dispersion: Range, Variance, Standard Deviation",
          },
          { title: "Probability Basics and Distributions" },
        ],
      },
      {
        title: "Inferential Statistics and Hypothesis Testing",
        lectures: [
          { title: "Sampling Methods and Importance" },
          { title: "Null Hypothesis and Alternate Hypothesis" },
          { title: "t-test, Chi-square test, Z test, ANOVA" },
        ],
      },
      {
        title: "Predictive Modeling and Methodology",
        lectures: [
          { title: "Data Preparation and Variable Selection" },
          { title: "Exploratory Data Analysis (EDA)" },
          { title: "Model Development and Validation" },
          { title: "Model Implementation and Real-Time Use Cases" },
        ],
      },
      {
        title: "Supervised Learning Techniques",
        lectures: [
          { title: "Multiple Linear Regression" },
          { title: "Logistic Regression" },
          { title: "Partial Least Square Regression" },
          { title: "Variable Reduction Techniques" },
        ],
      },
      {
        title: "Unsupervised Learning Techniques",
        lectures: [
          { title: "Clustering Algorithms: k-Means, Hierarchical Clustering" },
          { title: "Segmentation for Marketing Analysis" },
        ],
      },
      {
        title: "Time Series Analysis",
        lectures: [{ title: "Forecasting Techniques: ARIMA, SARIMA, LSTM" }],
      },
      {
        title: "Text Analytics",
        lectures: [
          { title: "Text Preprocessing and Sentiment Analysis" },
          { title: "Naive Bayes Algorithm for Text Classification" },
        ],
      },
      {
        title: "Data Visualization with Tableau",
        lectures: [{ title: "Generating Reports and Charts with Tableau" }],
      },
      {
        title: "R Programming",
        lectures: [
          { title: "Getting Started with R" },
          { title: "Data Manipulation and Exploration in R" },
          { title: "Advanced R and Real-Time Analytics Examples" },
        ],
      },
      {
        title: "Python for Data Science",
        lectures: [
          { title: "Introduction to Python" },
          { title: "Data Handling and Manipulation with Python" },
          { title: "Advanced Python Concepts" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "End-to-End Data Science Project" },
          { title: "Industry-Specific Projects: Finance, Healthcare, Retail" },
        ],
      },
    ],
    learningPoints: [
      "Get an overview of business intelligence and business analysis.",
      "Get hands-on experience with descriptive statistics of data analysis.",
      "Learn how to work on Tableau, along with a few practical examples.",
      "Understand R and data exploration in R.",
      "Learn how to create decision trees with examples.",
      "Gain expertise in data collection and data mining.",
      "Get an overview of Big Data Technologies and their significance in the industry.",
      "Learn how to work on loop functions and debugging tools.",
      "Learn how to run parametric tests.",
      "Learn how to mine text data.",
      "Learn deeper aspects of Python programming and machine learning in Python.",
      "Learn how to use Hadoop for Data Science.",
      "Learn how to use Spark for Data Science.",
      "Know how to deploy methods on Azure.",
      "Work on a live project to get practical exposure!",
    ],
    whyJoin: {
      course: "Data Science",
      title: "Why Join This Course?",
      description: [
        "Our Institute is one of the best Institutes in Hyderabad, offering an excellent data science online course. We provide live projects to make you a well-rounded professional. Our training is designed to make you confident in cracking the toughest interviews. Get placed in top data science companies with our expert guidance.",
      ],
      benefits: [
        "Data Science skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Data Science professionals command premium salaries due to their specialized skills.",
        "Data Science certifications are recognized globally, opening doors to international career opportunities.",
        "Data Science is used by 90% of Fortune 100 companies, making it a highly respected field.",
        "Data Science certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Data Science training at VR IT Solutions was a game-changer for my career. I landed a job as a Data Scientist within a month of completing the course.",
          author: "Priya S.",
          role: "Data Scientist, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in data science. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Data Analyst, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any data science challenge.",
          author: "Anjali M.",
          role: "Data Science Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Python Training in Hyderabad",
    course: "Python",
    link: "python-django",
    image:
      "https://vr-it-solutions.vercel.app/images/courses/python-django.png",
    description: [
      "Python is a high-level programming language, which has a lot of demand in the industry and is favoured by several top brands in the industry including Instagram, YouTube, and Spotify.",
      "Apart from experienced programmers, even beginners can easily learn and use it quickly.",
      "Some of the unique features of this language include diversity, adaptability, elegancy, and easy-to-master basics, making it extremely popular and preferable in various domains of computer science including web development, machine learning, data science, scientific computation, and cloud infrastructure.",
      "Just like any other object-oriented programming language, Python incorporates modules, exceptions, dynamic typing, dynamic data types, and classes.",
      "It is also usable as an extension language for applications, which require a programmable interface.",
      "Another unique feature of Python is its portability – it runs on many Unix variants such as Mac and on Windows 2000 and later.",
    ],
    aboutTheCourse: [
      "Python has a very simple and consistent syntax with a large standard library. Apart from that, using Python in an entry-level programming course helps students concentrate on core programming skills such as problem decomposition and data type design. Thus, Python is most suited for students, who can quickly learn the basic concepts such as loops and procedures and even start working on user-defined objects at the very first introductory course.",

      "Moreover, VR IT solutions is one of the best Python training institutes in Hyderabad offering Python courses in both online and classroom modes. The courses are suited to all categories of participants including college students, busy professionals, and even corporate managers, who are looking to switch their careers.",

      "With a focused learning approach and advanced training methodology, we make this course more interesting and interactive to help students quickly grasp the basics within a short period of time. The curriculum is designed specifically by VR IT experts, drawn from academics and industry to ensure that the students get the best out of their learning experience.",
    ],

    hoursContent: "70h",
    category: "Web Development",
    level: "Beginner to Advanced",
    learningPoints: [
      "By the end of the Python course in Hyderabad, participants will acquire in-depth programming knowledge to develop simple to complex applications. With this course, students will:",

      "Learn how to Implement the basics and advanced Python concepts",

      "Learn how to implement Python core objects and file handling operations",

      "Gain knowledge in advanced analytics and data visualization using Python-pandas",

      "Acquire knowledge about how to develop algorithms and build real-life applications",

      "Acquire knowledge in various object-oriented concepts such as expressions, if statements, loops, functions, data types and more",

      "Understand how to use Python for writing and deploying Pig, UDF and Hive UDF",

      "Acquire knowledge in testing and learn how to debug multiple Python applications",

      "Get first-hand knowledge in regular expression and database interface",

      "Gain expertise in installing packages and XLS, JSON Parsing and Web Scraping.",

      "Learn about Package Installations and XLS, JSON Parsing and Web Scraping",

      "Learn how to debug an entire program and handle errors in Python.",

      "Gain proficiency in doing real-time industry-based projects in Python.",
    ],
    whoShouldAttend: [
      "VR IT being one of the best python online training in Hyderabad, welcomes participants from all age groups and from all walks of life including college students, busy professionals and other top-level managers, who have a passion to redefine their careers.",

      "The following are the typical set of participants:",

      "Analytical professionals",

      "Software engineers, who are interested to switch their careers",

      "Big Data & Hadoop professionals",

      "Marketing & sales professionals",

      "System & network engineers",

      "Fresh graduates with good aptitude in programming",

      "Mid-level managers",

      "Business analysts",

      "Project managers of IT firms",
    ],
    sections: [
      {
        title: "Core Python",
        lectures: [
          { title: "Python Overview and Environment Setup" },
          { title: "Python Basics: Data Types, Variables, and Operators" },
          { title: "Flow Control: Conditional Statements and Loops" },
          { title: "Sequences: Lists, Tuples, and Dictionaries" },
          { title: "Functions and File Handling" },
          { title: "Modules and Packages" },
          { title: "Object-Oriented Programming (OOP) in Python" },
          { title: "Errors and Exception Handling" },
          { title: "Regular Expressions" },
        ],
      },
      {
        title: "Advanced Python",
        lectures: [
          { title: "Working with Databases in Python" },
          { title: "Multi-Threading and Concurrency" },
          { title: "Advanced Modules: NumPy, Pandas, Matplotlib" },
          { title: "Web Development with Python: Flask, Django" },
        ],
      },
      {
        title: "Django Framework",
        lectures: [
          { title: "Introduction to Django" },
          { title: "Writing Your First Django App" },
          { title: "Django Models and Databases" },
          { title: "Django Views and Templates" },
          { title: "Django Forms and Class-Based Views" },
          { title: "Handling HTTP Requests and Responses" },
          { title: "Django Migrations and Model Relationships" },
          { title: "Django Admin Interface" },
          { title: "Django Security and Authentication" },
          { title: "Django REST Framework for APIs" },
        ],
      },
      {
        title: "Advanced Django Concepts",
        lectures: [
          { title: "Django Caching and Performance Optimization" },
          { title: "Django Logging and Error Handling" },
          { title: "Django Testing and Debugging" },
          { title: "Django Deployment: AWS, Heroku, Docker" },
          { title: "Django Best Practices and Design Patterns" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "Building a Full-Stack Web Application with Django" },
          { title: "Deploying Django Applications in Production" },
        ],
      },
    ],
    coursePrerequisites: [
      "There are no specific pre-requisites prescribed for learning this course, though it is preferable to have knowledge in any programming language to appreciate the course better and get a good head start.",
    ],
    whyJoin: {
      course: "Python with Django",
      title: "Why Join This Course?",
      description: [
        "VR IT Solutions is one of the best software training institutes in Hyderabad, offering excellent training in Python, along with live projects to make you a thorough bred professional. Our training is designed to make you confident to crack the toughest of the interviews to get placed in top data science companies.",
      ],
      benefits: [
        "Django skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Django professionals command premium salaries due to their specialized skills.",
        "Django certifications are recognized globally, opening doors to international career opportunities.",
        "Django is used by 90% of Fortune 100 companies, making it a highly respected framework.",
        "Django certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Python with Django training at VR IT Solutions was a game-changer for my career. I landed a job as a Web Developer within a month of completing the course.",
          author: "Priya S.",
          role: "Web Developer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Django. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Full-Stack Developer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Django challenge.",
          author: "Anjali M.",
          role: "Django Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "Python with AWS Training",
    course: "Python with AWS",
    link: "python-aws",
    image: "https://vr-it-solutions.vercel.app/images/courses/python-aws.jpg",
    description: [
      "AWS is a cloud platform with many resources available for almost all use cases related to the IT industry. Sadly, we don't scale up those resources with the click of buttons. We need to use something like Terraform/CloudFormation/Serverless/other third-party SDKs in real time. In general, most of us use Python SDK (boto3 python & AWS python examples) to communicate between the resources for very common needs. In this course, we are going to cover all types of production-ready techniques without leaving basics about the resources.",
      "VRIT Solutions is one of the best python boto3 Training we offer boto3 python & AWS python examples with a well-focused and career-oriented training program in Python with AWS.",
    ],

    hoursContent: "70h",
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of programming concepts.",
      "Familiarity with Python is a plus but not mandatory.",
      "Knowledge of basic cloud computing concepts.",
    ],
    sections: [
      {
        title: "Python Overview",
        lectures: [
          { title: "What is Python?" },
          { title: "Python Environment Setup" },
          { title: "Python Basics: Data Types, Variables, and Operators" },
          { title: "Flow Control: Conditional Statements and Loops" },
          { title: "Functions and File Handling" },
          { title: "Modules and Packages" },
          { title: "Object-Oriented Programming (OOP) in Python" },
          { title: "Errors and Exception Handling" },
          { title: "Regular Expressions" },
        ],
      },
      {
        title: "Advanced Python",
        lectures: [
          { title: "Working with Databases in Python" },
          { title: "Multi-Threading and Concurrency" },
          { title: "Advanced Modules: NumPy, Pandas, Matplotlib" },
          { title: "Web Development with Python: Flask, Django" },
        ],
      },
      {
        title: "Introduction to AWS",
        lectures: [
          { title: "Introduction to Cloud Computing" },
          { title: "AWS Services Overview: EC2, S3, RDS, Lambda" },
          { title: "AWS Management Console and CLI" },
          { title: "AWS Security and Identity Management (IAM)" },
        ],
      },
      {
        title: "AWS Core Services",
        lectures: [
          { title: "EC2 Instances: Launching and Managing" },
          { title: "S3: Storage and Data Management" },
          { title: "RDS: Database Management" },
          { title: "Lambda: Serverless Computing" },
          { title: "Elastic Load Balancing (ELB) and Auto Scaling" },
        ],
      },
      {
        title: "Python Integration with AWS",
        lectures: [
          { title: "Using Boto3 for AWS Automation" },
          { title: "Automating EC2 Instances with Python" },
          { title: "Managing S3 Buckets with Python" },
          { title: "Automating RDS with Python" },
          { title: "Serverless Applications with AWS Lambda and Python" },
        ],
      },
      {
        title: "Advanced AWS Concepts",
        lectures: [
          { title: "AWS CloudFormation: Infrastructure as Code" },
          { title: "AWS Elastic Beanstalk: Application Deployment" },
          { title: "AWS CloudWatch: Monitoring and Logging" },
          { title: "AWS Security Best Practices" },
          { title: "Cost Optimization and Management in AWS" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "Building a Cloud Automation Tool with Python and AWS" },
          { title: "Deploying a Serverless Application with AWS Lambda" },
        ],
      },
    ],
    learningPoints: [
      "Master Python programming and AWS cloud services",
      "Automate cloud operations using Python and AWS",
      "Understand AWS core services and their integration with Python",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Python with AWS",
      title: "Why Join This Course?",
      description: [
        "Python and AWS are two of the most in-demand skills in the tech industry. This course provides a comprehensive understanding of both, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Python and AWS training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        "Python and AWS skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "Python and AWS professionals command premium salaries due to their specialized skills.",
        "Python and AWS certifications are recognized globally, opening doors to international career opportunities.",
        "Python and AWS are used by 90% of Fortune 100 companies, making them highly respected platforms.",
        "Python and AWS certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The Python with AWS training at VR IT Solutions was a game-changer for my career. I landed a job as a Cloud Engineer within a month of completing the course.",
          author: "Priya S.",
          role: "Cloud Engineer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Python and AWS. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "DevOps Engineer, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any Python or AWS challenge.",
          author: "Anjali M.",
          role: "Cloud Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "SAP Basis Online Training",
    course: "SAP Basis",
    link: "sap-basis",
    image: "https://vr-it-solutions.vercel.app/images/courses/sap-basis.jpg",
    description:
      "SAP Basis is the technical foundation that enables SAP applications to function. This comprehensive training program covers SAP system administration, installation, configuration, and performance tuning. Whether you're an aspiring SAP Basis administrator or an IT professional, this course will prepare you for real-world SAP Basis challenges.",

    hoursContent: "70h",
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    aboutTheCourse: [
      "SAP Basis covers the overall administration of the SAP system and includes various tasks such as installation, configuration, load balancing and performance of SAP applications running on Java stack and SAP ABAP.",
      "This also includes the maintenance of different services related to database, operating system, application and web servers in SAP system environment and also commencing and stopping the application.",
      "VR IT Solutions is one of the best SAP GRC TRAINING to offer well-focused and career-oriented training program in SAP GRC training & SAP security training. So, get started by clicking here.",
    ],
    coursePrerequisites: [
      "Basic understanding of IT infrastructure and networking.",
      "Familiarity with SAP concepts is a plus but not mandatory.",
      "Knowledge of basic database and operating system concepts.",
    ],
    sections: [
      {
        title: "Introduction to SAP Basis",
        lectures: [
          { title: "Overview of SAP Basis" },
          { title: "SAP System Architecture" },
          { title: "SAP NetWeaver and its Components" },
          { title: "SAP Landscape and Client Concepts" },
          { title: "SAP GUI and Navigation" },
        ],
      },
      {
        title: "SAP Installation and Configuration",
        lectures: [
          { title: "Prerequisites for SAP Installation" },
          { title: "SAP ERP Installation" },
          { title: "Post-Installation Activities" },
          { title: "System Profiles and Parameter Configuration" },
          { title: "Transport Management System (TMS)" },
        ],
      },
      {
        title: "User and Authorization Management",
        lectures: [
          { title: "Creating and Managing Users" },
          { title: "User Roles and Authorization Concepts" },
          { title: "Profile Generator (PFCG)" },
          { title: "Central User Administration (CUA)" },
          { title: "Security Audit Log (SM19/SM20)" },
        ],
      },
      {
        title: "Client Administration",
        lectures: [
          { title: "Client Concept and Architecture" },
          { title: "Creating, Copying, and Deleting Clients" },
          { title: "Client Export and Import" },
          { title: "Client Transport and Synchronization" },
        ],
      },
      {
        title: "SAP Kernel and Software Management",
        lectures: [
          { title: "SAP Kernel Overview and Components" },
          { title: "Kernel Upgrade and Patch Management" },
          { title: "Applying SAP Notes (SNOTE)" },
          { title: "SAP System Monitoring: CCMS" },
        ],
      },
      {
        title: "System Monitoring and Performance Tuning",
        lectures: [
          { title: "Monitoring SAP Systems: Transactions ST02, ST03, ST06" },
          { title: "Analyzing System Logs and Performance Data" },
          { title: "Optimizing SAP System Performance" },
          { title: "Database-Specific Tuning (Oracle, MS SQL, HANA)" },
        ],
      },
      {
        title: "Database Administration",
        lectures: [
          { title: "Database Backup and Recovery Strategies" },
          { title: "Database Monitoring and Maintenance" },
          { title: "Performance Tuning at the Database Level" },
          { title: "Database Patching and Upgrades" },
        ],
      },
      {
        title: "SAP System Security",
        lectures: [
          { title: "SAP Security Overview" },
          { title: "User Authentication and Password Policies" },
          { title: "Secure Network Communication (SNC)" },
          { title: "SAP Router and Network Security" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "Full SAP System Installation and Configuration" },
          { title: "Managing System Performance and Tuning" },
          { title: "Implementing Advanced Security Measures" },
          { title: "Handling Upgrades and Patches in a Live Environment" },
        ],
      },
    ],
    learningPoints: [
      "Introduction to ERP",
      "Get an overview of SAP R/3",
      "Learn about various SAP Versions",
      "Learn how to use SAP Directory Structure",
      "Overview of Oracle Directory Structure",
      "Learn about User Administration",
      "Get an overview of SAP Profile",
      "Learn about various operation modes",
      "Learn advanced concepts in client administration",
      "Learn advanced concepts in RFC and Transports",
      "Get an overview of SAP Upgrade (SPAM/SAINT)",
      "Learn about other upgrades such as Kernel",
      "Learn how to backup and restore",
      "Learn about various SADBA/BRTOOLS",
      "Learn how to System copy/Refresh Live Project",
    ],
    learningNotes: [
      "Note: The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
      "With VR IT Solutions providing the best SAP Basis online training, this course helps professionals to get lucrative jobs in SAP administration, SAP security, and other related jobs.",
    ],
    whoShouldAttend: [
      "SAP functional consultants, who want to get into SAP administration",
      "System administrators",
      "Database administrators",
      "IT security professionals, interested to make a career in SAP Basis",
      "Software professionals, interested to switch their careers",
      "Fresh graduates, who want to make a career in SAP Basis",
      "Learn SAP Basis by real-time experts from VR IT Solutions with practical scenarios and SAP GRC interview questions in-depth explanation of each and every topic.",
    ],
    whyJoin: {
      course: "SAP Basis",
      title: "Why Join This Course?",
      description: [
        "With SAP being a huge business application with a lot of intertwined processes, administering an SAP system is a huge challenge and hence professionals trained in this area can find lucrative opportunities as Basis administrators, SAP security consultants, and get into other similar roles. Currently, there is a lot of demand for SAP Basis professionals and hence it is the right time to kick-start this course.",
        "VR IT Solutions is one of the software training institutes in Hyderabad to offer SAP GRC Access Control training best and balanced training in SAP Basis that is well suited to help you embark on the right path of success. So, get started by clicking here.",
      ],
      benefits: [
        "SAP Basis skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "SAP Basis professionals command premium salaries due to their specialized skills.",
        "SAP Basis certifications are recognized globally, opening doors to international career opportunities.",
        "SAP is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "SAP Basis certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The SAP Basis training at VR IT Solutions was a game-changer for my career. I landed a job as an SAP Basis Administrator within a month of completing the course.",
          author: "Priya S.",
          role: "SAP Basis Administrator, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP Basis. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "SAP Consultant, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any SAP Basis challenge.",
          author: "Anjali M.",
          role: "SAP Basis Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "SAP EWM Online Training",
    course: "SAP EWM",
    link: "sap-ewm",
    image: "https://vr-it-solutions.vercel.app/images/courses/sap-ewm.jpg",
    description:
      "SAP Extended Warehouse Management (EWM) is a comprehensive solution for managing warehouse operations. This training program covers SAP EWM configuration, processes, and integration with other SAP modules. Whether you're an aspiring SAP EWM consultant or a warehouse manager, this course will prepare you for real-world SAP EWM challenges.",

    hoursContent: "70h",
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "VR IT Solutions hasn’t prescribed any specific pre-requisites to do this course, however the following list of pre-requisites will help to make a good start.",
      "Knowledge about SAP products and its ecosystem.",
      "Basic overview of standard warehouse processes.",
      "Technical (ABAP) knowledge.",
    ],
    aboutTheCourse: [
      "Extended Warehouse Management (EWM) offers a flexible and automated support for processing various movements of goods and for managing stocks in a warehouse.",
      "The system supports planned and efficient processing of all logistics processes in a warehouse.",
      "The beauty of this application is that it offers an option to manage your entire warehouse complex in detail in the system – right up to the storage bin level.",
      "Not just getting an overview of the entire quantity of a material in the warehouse, you can also predict accurately, where a specific material is currently in your warehouse complex.",
      "VR IT Solutions is one of the best SAP EWM training to offer a well-focused and career-oriented training program in SAP EWM. So, get started by clicking here.",
    ],
    sections: [
      {
        title: "Introduction to SAP EWM",
        lectures: [
          { title: "Overview of SAP EWM" },
          { title: "SAP EWM Architecture and Components" },
          { title: "Integration with SAP ERP and Other Modules" },
          { title: "SAP EWM Organizational Structure" },
        ],
      },
      {
        title: "SAP EWM Configuration",
        lectures: [
          { title: "Defining Warehouse Structures" },
          { title: "Configuring Storage Types and Bins" },
          { title: "Setting Up Activity Areas and Queues" },
          { title: "Warehouse Order Creation Rules (WOCR)" },
          { title: "Work Center Configuration" },
        ],
      },
      {
        title: "SAP EWM Processes",
        lectures: [
          { title: "Inbound Process: Goods Receipt and Putaway" },
          { title: "Outbound Process: Picking and Goods Issue" },
          { title: "Stock Transfer and Replenishment" },
          { title: "Physical Inventory and Stock Management" },
          { title: "Value-Added Services (VAS)" },
        ],
      },
      {
        title: "Advanced SAP EWM Concepts",
        lectures: [
          { title: "Yard Management and Transportation Units" },
          { title: "Wave Management and Templates" },
          { title: "Labor Management and Resource Optimization" },
          { title: "Radio Frequency (RF) Framework" },
          { title: "Post Processing Framework (PPF)" },
        ],
      },
      {
        title: "Integration with SAP Modules",
        lectures: [
          { title: "Integration with SAP ERP and MM" },
          { title: "Integration with SAP TM (Transportation Management)" },
          { title: "Integration with SAP GTS (Global Trade Services)" },
          { title: "Integration with SAP S/4HANA" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "End-to-End SAP EWM Implementation Project" },
          { title: "Optimizing Warehouse Operations with SAP EWM" },
          { title: "Real-Time Reporting and Analytics using SAP EWM" },
          { title: "Integration of SAP EWM with Other SAP Modules" },
        ],
      },
    ],
    learningPoints: [
      "Introduction to EWM (Extended Warehouse Management).",
      "Get an overview of the EWM Structure.",
      "Learn about Master Data and its uses.",
      "Get an overview of the integration process.",
      "Learn some advanced concepts on structural elements and master data.",
      "Learn about various warehouse process types.",
      "Learn about Warehouse Monitor.",
      "Get an overview of RF Framework.",
      "Goods Receipt and Inbound Process",
      "Goods Issue and Outbound Process",
      "Storage Control",
      "Warehouse Order Creation",
      "Posting Changes, Stock Transfers, and Replenishment",
      "Physical Inventory",
      "Learn about slotting and rearrangement.",
      "Get an overview of Post Processing Framework (PPF).",
      "Learn advanced concepts on Material Flow System, Labor Management, and Yard Management.",
      "Live Project.",
    ],
    whyJoin: {
      course: "SAP EWM",
      title: "Why Join This Course?",
      description: [
        "With logistics and supply chain management being complex business areas and moreover with more number of organizations adopting the automation route, this course is particularly useful for those who want to make a career in supply chain automation.",
        "EWM offers high-level integration with inventory management and delivery processing.",
        "Using EWM, you can organize, control, and monitor the movement of goods.",
        "VR IT Solutions is one of the best software training institutes in Hyderabad to offer the best and balanced SAP EWM Training that is well suited to help you embark on the right path of success. So, get started by clicking here.",
      ],
      learningNotes: [
        "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
        "With VR IT Solutions providing the best SAP EWM online training, this course helps professionals to manage and process a variety of operations in the supply chain management (SCM) domain in an automated SAP environment.",
      ],
      whoShouldAttend: [
        "SAP MM & SAP WM consultants can learn SAP EWM Functional.",
        "SAP Functional Consultants and SAP ABAP consultants can learn SAP EWM Technical.",
        "Software professionals, who want to make a career in SAP.",
        "Fresh graduates, who are looking for a career in SAP.",
        "Business Analysts.",
        "Database consultants.",
        "Learn SAP EWM in both online and offline modes by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.",
      ],
      benefits: [
        "SAP EWM skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "SAP EWM professionals command premium salaries due to their specialized skills.",
        "SAP EWM certifications are recognized globally, opening doors to international career opportunities.",
        "SAP EWM is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "SAP EWM certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The SAP EWM training at VR IT Solutions was a game-changer for my career. I landed a job as an SAP EWM Consultant within a month of completing the course.",
          author: "Priya S.",
          role: "SAP EWM Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP EWM. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Warehouse Manager, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any SAP EWM challenge.",
          author: "Anjali M.",
          role: "SAP EWM Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "SAP SD Online Training in Hyderabad",
    course: "SAP SD",
    link: "sap-sd",
    image: "https://vr-it-solutions.vercel.app/images/courses/sap-sd.jpg",
    description: [
      "SAP SD (Sales & Distribution) is one of the core modules of SAP ERP. It is used to store the customer and product data of an organization. The main goal of SAP SD is it helps in managing the shipping, billing, selling and transportation of products and services of a company.",
      "The SAP Logistics module manages customer relationships, right from raising a quotation to sales order and billing of the product or service. This module is interrelated with other modules such as SAP MM and PP.",
      "VRIT Solutions is one of the few institutes in Hyderabad to offer well focused and career-oriented training program in SAP SD online training.",
    ],

    hoursContent: "70h",
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic knowledge of how an organization deals with their customers and products",
      "Prior knowledge of inventory and how to deal with billing and shipping (preferable, but not mandatory)",
    ],
    sections: [
      {
        title: "Introduction to SAP SD",
        lectures: [
          { title: "Overview of SAP SD Module" },
          { title: "SAP SD Integration with Other Modules (MM, FI, PP)" },
          { title: "SAP Organizational Structure in SD" },
          { title: "Key Master Data in SAP SD: Customer, Material, Pricing" },
        ],
      },
      {
        title: "Sales Processes and Documents",
        lectures: [
          { title: "Sales Order Processing: Standard and Configurable" },
          { title: "Delivery Processing and Shipping" },
          { title: "Billing and Invoicing Processes" },
          { title: "Sales Document Flow and Status Overview" },
          { title: "Credit Management and Risk Management" },
        ],
      },
      {
        title: "Pricing and Condition Techniques",
        lectures: [
          { title: "Pricing Procedures in SAP SD" },
          { title: "Condition Types, Tables, and Records" },
          { title: "Discount, Surcharge, and Rebate Management" },
          { title: "Special Pricing Functions: Taxes, Freight, and More" },
          { title: "Advanced Pricing Configuration and Troubleshooting" },
        ],
      },
      {
        title: "Availability Check and Transfer of Requirements",
        lectures: [
          { title: "Configuring Availability Check (ATP)" },
          { title: "Backorder Processing and Rescheduling" },
          { title: "Transfer of Requirements to Production Planning (PP)" },
          { title: "Advanced Planning with SAP APO and SAP HANA" },
          { title: "Integration with SAP MM and Inventory Management" },
        ],
      },
      {
        title: "Advanced SAP SD Configuration",
        lectures: [
          { title: "Customizing Sales Document Types" },
          { title: "Configuring Item Categories and Schedule Line Categories" },
          {
            title:
              "Advanced Sales Order Scenarios: Contracts, Scheduling Agreements",
          },
          { title: "Sales Order Enhancement and User Exits" },
          { title: "Advanced Document Flow and Copy Controls" },
        ],
      },
      {
        title: "SAP S/4HANA and SD Integration",
        lectures: [
          { title: "Introduction to SAP S/4HANA" },
          { title: "SD Analytics and Reporting on HANA" },
          { title: "Advanced Order-to-Cash (OTC) Process on HANA" },
          { title: "Integration with SAP HANA Modules" },
        ],
      },
      {
        title: "Capstone Projects",
        lectures: [
          { title: "End-to-End SAP SD Implementation Project" },
          { title: "Optimizing Order-to-Cash Process in S/4HANA" },
          { title: "Real-Time Reporting and Analytics using HANA" },
          { title: "Global Rollout and Localization in SAP SD" },
        ],
      },
    ],
    learningPoints: [
      "Introduction to SAP Environment",
      "Basic Pre-requisites",
      "Enterprise Structure",
      "Master data (customer, material, conditions and customer material info record)",
      "Basic Functions (includes account groups, number ranges, partner determination procedure and general settings)",
      "Sales Documents (includes overview, header level, item level and schedule line level)",
      "Pricing",
      "Shipping and Picking",
      "Billing",
      "Detailed configuration of sales processes",
      "Certain advanced topics such as revenue account determination, free goods determination, bill of materials, material determination, cross selling and more",
      "Live Project",
      "Learn SAP SD online training and mode by real-time experts from VR IT Solutions with practical scenarios and in-depth explanation of each and every topic.",
    ],
    whyJoin: {
      course: "SAP SD",
      title: "Why Join This Course?",
      description: [
        "SAP SD (Sales & Distribution) is one of the core modules of SAP ERP. It is used to store the customer and product data of an organization. The main goal of SAP SD is it helps in managing the shipping, billing, selling and transportation of products and services of a company. The SAP Logistics module manages customer relationships, right from raising a quotation to sales order and billing of the product or service. This module is interrelated with other modules such as SAP MM and PP. VRIT Solutions is one of the few institutes in Hyderabad to offer well focused and career-oriented training program in SAP SD online training. With inventory and materials management being a core area of business, this area of SAP implementation is gaining importance and is making rapid strides in innovation and implementation. This course will be particularly useful for purchase managers, logistics managers and other professionals, who want to foray into this area and also for existing professionals, who are handling a plethora of functions within the sales and distribution domain.",
        "VRIT Solutions is one of the few institutes in Hyderabad to offer the best and balanced training in SAP SD that is well suited to help you embark on the right path of success.",
      ],
      whoShouldAttend: [
        "SAP SD (Sales & Distribution) is one of the core modules of SAP ERP. It is used to store the customer and product data of an organization. The main goal of SAP SD is it helps in managing the shipping, billing, selling and transportation of products and services of a company.",
        "The SAP Logistics module manages customer relationships, right from raising a quotation to sales order and billing of the product or service. This module is interrelated with other modules such as SAP MM and PP.",
        "VRIT Solutions is one of the few institutes in Hyderabad to offer well focused and career-oriented training program in SAP SD online training.",
        "With inventory and materials management being a core area of business, this area of SAP implementation is gaining importance and is making rapid strides in innovation and implementation. This course will be particularly useful for purchase managers, logistics managers and other professionals, who want to foray into this area and also for existing professionals, who are handling a plethora of functions within the sales and distribution domain.",
        "VRIT Solutions is one of the few institutes in Hyderabad to offer the best and balanced training in SAP SD that is well suited to help you embark on the right path of success.",
        "Logistics professionals",
        "Finance professionals",
        "Consultants, who would be mainly responsible for implementing sales, billing and transportation of products",
        "Fresh graduates, with an aim to understand the basics of SAP SD and implement it in practice",
        "Engineering graduates, looking for a career in SAP Sales & Distribution module",
      ],
      benefits: [
        "SAP SD skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        "SAP SD professionals command premium salaries due to their specialized skills.",
        "SAP SD certifications are recognized globally, opening doors to international career opportunities.",
        "SAP SD is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        "SAP SD certifications can significantly accelerate your career growth and open up leadership roles.",
      ],
      testimonials: [
        {
          quote:
            "The SAP SD training at VR IT Solutions was a game-changer for my career. I landed a job as an SAP SD Consultant within a month of completing the course.",
          author: "Priya S.",
          role: "SAP SD Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP SD. I highly recommend this course to anyone looking to upskill.",
          author: "Rahul K.",
          role: "Sales Manager, Tech Company",
        },
        {
          quote:
            "The instructors were very knowledgeable and supportive throughout the course. I now feel fully prepared to tackle any SAP SD challenge.",
          author: "Anjali M.",
          role: "SAP SD Consultant, IT Firm",
        },
      ],
    },
  },
  {
    title: "SAP Leonardo Training in Hyderabad",
    course: "SAP Leonardo",
    link: "sap-leonardo-training-hyderabad",
    image: "https://vr-it-solutions.vercel.app/images/courses/sap-leonardo.jpg",
    description:
      "SAP Leonardo is a digital innovation system that integrates emerging technologies like IoT, Machine Learning, Blockchain, and Big Data. This training covers the fundamentals of SAP Leonardo, including its architecture, deployment models, and integration with SAP Cloud Platform and S/4HANA. It also delves into advanced topics like IoT data management, machine learning models, and blockchain applications.",

    hoursContent: "70h",
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    aboutTheCourse: [
      "SAP Leonardo is the model of SAP to link business processes with IoT devices. IoT enables the data from other devices which are used in the business enterprise for evaluation, vision, or execute some activities like devices like switch off and on of the street lights, check the status of the products, etc.",
      "SAP Leonardo is the SAP’s Machine Learning model which offered Smart portfolio services. The services vary from well-structured product exhibitions like SAP HANA Predictive Analytics Library, SAP Predictive Analytics to all the services provided through SAP Leonardo machine learning base. We can implement services using APIs, quickly functional prepared prototypes that can efficiently be used as web services. There are even functional services like machine learning, Big Data, IoT, blockchain, Data Intelligence and advanced analytics.",
    ],
    coursePrerequisites: [
      "Basic understanding of SAP navigation and concepts.",
      "Familiarity with emerging technologies like IoT, Machine Learning, and Blockchain.",
      "No prior SAP Leonardo experience required.",
    ],
    sections: [
      {
        title: "Introduction to SAP Leonardo",
        lectures: [
          { title: "Overview of SAP Leonardo and Its Components" },
          {
            title:
              "Key Technologies and Innovations: IoT, Machine Learning, Blockchain, Big Data",
          },
          { title: "SAP Leonardo Architecture and Deployment Models" },
        ],
      },
      {
        title: "SAP Leonardo IoT (Internet of Things)",
        lectures: [
          { title: "Introduction to IoT and Its Applications" },
          {
            title:
              "IoT Architecture: Devices, Connectivity, and Data Processing",
          },
          { title: "IoT Use Cases and Industry Applications" },
          { title: "Integration with SAP Cloud Platform and S/4HANA" },
        ],
      },
      {
        title: "SAP Leonardo Machine Learning",
        lectures: [
          { title: "Overview of Machine Learning and AI Concepts" },
          {
            title:
              "Types of Machine Learning: Supervised, Unsupervised, Reinforcement Learning",
          },
          { title: "Building Machine Learning Models with SAP Leonardo" },
          {
            title:
              "Advanced Topics: Natural Language Processing, Image Recognition",
          },
        ],
      },
      {
        title: "SAP Leonardo Blockchain",
        lectures: [
          {
            title:
              "Basics of Blockchain: Concepts, Structure, and Cryptography",
          },
          { title: "Blockchain Networks: Public vs. Private Blockchains" },
          { title: "Building Blockchain Applications with SAP Leonardo" },
          { title: "Use Cases: Supply Chain Transparency, Smart Contracts" },
        ],
      },
    ],
    learningPoints: [
      "Understand the core concepts of SAP Leonardo and its integration with emerging technologies.",
      "Master IoT data management and analytics for real-time decision-making.",
      "Learn how to build and deploy machine learning models using SAP Leonardo.",
      "Gain expertise in blockchain applications for supply chain and finance.",
      "Explore advanced topics like predictive analytics and data intelligence.",
    ],
    whyJoin: {
      course: "SAP Leonardo",
      title: "Why Join This Course?",
      description: [
        "SAP Leonardo – The future of modern technology",
        "SAP Leonardo is a revolution that helps customers access SAP’s components and products across evolving technologies, such as Machine Learning, Big Data, Internet of Things (IoT) and Blockchain. It is often linked with SAP Cloud Platform services but it’s not limited to this, as it covers anything that fits into modern technologies and includes e.g. predictive competencies in S/4HANA.",
        "One of the key benefits of SAP Leonardo is that it allows you to integrate multiple SAP products with emerging technologies. For example in the SAP Cloud Platform you can create Fiori apps that use IoT services. When integrated into your business processes as an end user you won’t necessarily know there is Machine Learning behind the scenes and you won’t see anything different but you will experience automatic decision-making or recommendations.",
        "Products in SAP S/4HANA, such as cash reconciliation and invoicing, already integrate Machine Learning as part of SAP Leonardo and the number of these Machine Learning settings that will become part of S/4HANA.",
      ],
      whoShouldAttend: [
        "Executive managers",
        "IT professionals",
        "Solution consultants",
        "Application developers",
        "Anyone interested in intelligent technologies and innovation",
        "Introduction to Predictive Maintenance and Service",
        "(PdMS) PdMS Application Overview",
        "Architecture",
        "Configuration of Equipment",
        "Master Data Master Data Integration with EAM System",
        "Indicators and Indicator Configuration",
        "Analysis Tools and Application Configuration",
        "CustomAnalysis Tools",
        "Machine Learning Engine Overview and Configuration",
        "R for Non Data Scientists",
        "Custom Data Science Algorithms",
      ],
      benefits: [
        "SAP Leonardo professionals are in high demand across various industries.",
        "SAP Leonardo experts command high salaries due to their specialized skills.",
        "SAP Leonardo skills are recognized globally, offering international career opportunities.",
        "SAP Leonardo is used by leading companies worldwide, making it a highly respected platform.",
      ],
      testimonials: [
        {
          quote:
            "The SAP Leonardo training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP Leonardo consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP Leonardo Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP Leonardo. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP Leonardo Analyst, Tech Company",
        },
      ],
    },
  },
  {
    title: "SAP FICO Course",
    course: "SAP FICO",
    link: "sap-fico",
    image: "https://vr-it-solutions.vercel.app/images/courses/sap-leonardo.jpg",
    description: [
      "SAP Fico is a specific deployment option for gathering accounting data from SAP ERP systems into one central SAP S/4HANA system. This course provides an overview of the concept, the architecture, and the functionalities of SAP Fico for LOB Finance.",
    ],
    aboutTheCourse: [
      "Difference Between SAP FICO and SAP Simple Finance",
      "SAP FICO and SAP Simple Finance are related but distinct components of SAP’s financial management solutions.",
      "SAP FICO: A traditional SAP ERP module for managing financial accounting (FI) and controlling (CO) functions.",
      "SAP Simple Finance: An advanced financial solution in SAP S/4HANA, integrating real-time financial processing and analytics.",
      "Deployment: SAP FICO is part of SAP ECC (ERP Central Component), while SAP Simple Finance runs on the SAP HANA database.",
      "Key Features: SAP FICO handles core financial transactions, reporting, and controlling, whereas SAP Simple Finance offers a simplified data model, real-time insights, and predictive analytics.",
      "Database: SAP FICO works on traditional databases like Oracle and MS SQL, while SAP Simple Finance is built on SAP HANA for high-speed processing.",
      "Data Structure: SAP FICO uses multiple tables for financial transactions, while SAP Simple Finance stores all financial data in a single table (ACDOCA).",
      "Reporting: SAP FICO relies on batch processing, while SAP Simple Finance provides real-time reporting and analytics using SAP HANA.",
      "User Interface: SAP FICO uses SAP GUI, whereas SAP Simple Finance uses an intuitive Fiori-based UI.",
      "Speed & Efficiency: SAP FICO relies on periodic financial closing processes, whereas SAP Simple Finance enables real-time financial close and instant insights.",
      "Which One to Choose?",
      "If your company is using SAP ECC, SAP FICO remains a critical module.",
      "If you are moving towards SAP S/4HANA, learning SAP Simple Finance is recommended for real-time financial management and analytics.",
      "Since finance is a crucial function in any organization, transitioning to SAP Simple Finance can bring significant improvements in efficiency and decision-making.",
    ],

    hoursContent: "80 hours",
    category: "Finance & Accounting",
    level: "Beginner to Advanced",

    coursePrerequisites: [
      "VR IT Solutions haven’t prescribed any specific pre-requisites and this course can be taken up by anyone with little or no financial and accounting experience.",
      "VR IT Solutions is one of the best SAP Fico training in Hyderabad to offer the best and balanced training in SAP FICO that is well suited to help you embark on the right path of success.",
      "So, get started by clicking here.",
    ],
    sections: [
      {
        title: "Introduction to FI/CO",
        lectures: [
          { title: "Overview of various modules" },
          {
            title:
              "Global parameters: company, company code, fiscal year, chart of accounts",
          },
        ],
      },
      {
        title: "General Ledger and Accounting Parameters",
        lectures: [
          { title: "Concepts of G/L and other accounting parameters" },
        ],
      },
      {
        title: "Accounts Receivables and Payables",
        lectures: [
          { title: "Accounts receivables" },
          { title: "Accounts payables and banking" },
        ],
      },
      {
        title: "Advanced Accounting Concepts",
        lectures: [
          { title: "Asset Accounting" },
          { title: "Integration with other modules" },
        ],
      },
      {
        title: "Controlling and Cost Accounting",
        lectures: [
          { title: "Cost element accounting" },
          { title: "Cost center accounting" },
          { title: "CO-PA and internal orders" },
        ],
      },
      {
        title: "Product Costing and Material Ledger",
        lectures: [
          { title: "Profit center accounting" },
          { title: "Product costing and material ledger" },
        ],
      },
      {
        title: "Real-time Concepts and Live Project",
        lectures: [
          { title: "SAP methodology and financial statement version" },
          { title: "Transport request creation & release" },
          { title: "SAP Query" },
        ],
      },
    ],
    practicalExecution: [
      "In order to work on practicals, some basic pre-requisites are required.",
      "You need a good internet connection, along with the required software that needs to be installed.",
      "This software can easily run on all operating systems such as Windows OS.",
    ],

    courseHighlights: [
      "Comprehensive practical sessions",
      "Live project for hands-on experience",
      "Top-notch faculty from reputed institutes",
      "Industry-relevant curriculum updated every 6 months",
      "Weekend and weekday batch options",
    ],
    learningPoints: [
      "Introduction to FI/CO and overview of various modules",
      "Learn about various global parameters such as company, company code, fiscal year, chart of accounts, etc",
      "Concepts of G/L and other accounting parameters",
      "Concepts of accounts receivables, account payables and banking",
      "Advanced concepts in assets accounting",
      "Advanced concepts in integration and how it integrates with other modules",
      "Advanced concepts in controlling and cost element accounting",
      "Advanced concepts in cost center accounting",
      "Concepts of CO-PA",
      "Learn about various concepts of internal orders and how to process them",
      "Advanced concepts in profit center accounting",
      "Advanced concepts of product costing and material ledger",
      "Real time concepts including overview of SAP methodology, creation of financial statement version, transport request creation & release and SAP Query",
      "Live project - apply real-time training with end to end implementation Process",
    ],
    learningNotes: [
      "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
      "With VRIT Solutions providing the best SAP FICO online training, this course helps professionals to manage and process an array of transactions in finance and accounting in an automated ERP SAP environment.",
    ],
    whyJoin: {
      course: "SAP FICO Training",
      title: "Why Join This Course?",
      description: [
        "This course offers the competence and power of meeting all the accounting and financial requirements of an organization.",
        "With more and more organizations embarking on financial automation, this course assumes significance within the ERP domain.",
        "Hence, doing this course offers great benefits for finance and accounting professionals.",
        "It also benefits other professionals looking for lucrative opportunities in financial automation.",
      ],
      whoShouldAttend: [
        "Fresh graduates with B.A or B.Com background",
        "Chartered accountants",
        "Executives, who are currently working as accountants",
        "Software professionals, who are interested to switch their careers",
        "SAP professionals, working on other domains, interested to make a career switch.",
      ],

      benefits: [
        "Enhance career opportunities in financial automation",
        "Gain industry-recognized certification",
        "Increase salary prospects and job opportunities",
        "Develop expertise in SAP FICO with practical training",
      ],
      testimonials: [
        {
          quote:
            "This training helped me land a job in a top company with a great package!",
          author: "Amit Kumar",
          role: "SAP FICO Consultant",
        },
        {
          quote:
            "VR IT Solutions provided excellent training with real-time scenarios and practical learning.",
          author: "Priya Sharma",
          role: "Finance Analyst",
        },
      ],
    },
  },
  {
    title: "SAP S/4HANA Simple Finance Training in Hyderabad",
    course: "SAP S/4HANA Finance",
    link: "simple-finance-training-in-hyderabad",
    image:
      "https://vr-it-solutions.vercel.app/images/courses/sap-s4hana-finance.jpg",
    description:
      "SAP S/4HANA Finance is a next-generation financial management solution that leverages the power of SAP HANA for real-time financial processing and reporting. This training covers the fundamentals of SAP S/4HANA Finance, including general ledger accounting, accounts payable, accounts receivable, and asset accounting. It also delves into advanced topics like financial closing, reporting, and integration with other SAP modules.",

    hoursContent: "80h",
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    aboutTheCourse: [
      "SAP S/4HANA Finance, which was previously called SAP Simple Finance, is the first business application developed for the S/4HANA finance platform. It is designed to remove traditional barriers between transactional, analytics, and planning systems to provide instant insights and on-the-fly analysis using all levels of financial data. A business decision maker, for example, can use SAP S/4HANA Finance to model data and create forecasts of potential decisions using real-time financial data from various systems.\n\nThe main advantage SAP S/4HANA Finance has is processing speed combined with integrated features for the various financial functions, such as financial accounting and management accounting. Because of this, SAP S/4HANA Finance allows for a much faster reconciliation of financial processes such as the quarterly close, and provides a single source of financial truth for the organization as a whole, according to SAP.\n\nVR IT Solutions is one of the best simple finance training in Hyderabad we offer S/4 hana online training with well focused and career-oriented training program in s4 hana simple finance.",
    ],

    coursePrerequisites: [
      "Basic understanding of accounting principles.",
      "Familiarity with SAP navigation and basic concepts.",
      "No prior SAP S/4HANA Finance experience required.",
    ],
    sections: [
      {
        title: "Introduction to SAP S/4HANA Finance",
        lectures: [
          { title: "Overview of SAP S/4HANA and its Architecture" },
          { title: "Key Differences between SAP ECC and S/4HANA Finance" },
          { title: "Benefits of SAP HANA Database for Financial Management" },
          { title: "Migration Path from ECC to S/4HANA Finance" },
        ],
      },
      {
        title: "General Ledger Accounting (FI-GL)",
        lectures: [
          { title: "Universal Journal (ACDOCA) Overview" },
          { title: "Document Splitting: Configuration and Use" },
          { title: "Parallel Accounting and Ledger Setup" },
          { title: "Real-Time Financial Reporting with SAP Fiori Apps" },
        ],
      },
      {
        title: "Accounts Payable (FI-AP)",
        lectures: [
          { title: "Configuring Vendor Master Data and Partner Functions" },
          { title: "Invoice Processing: Automatic and Manual Methods" },
          {
            title:
              "Integration with MM for Goods Receipt and Invoice Verification",
          },
          { title: "Payment Run Configuration and Electronic Payments" },
        ],
      },
      {
        title: "Accounts Receivable (FI-AR)",
        lectures: [
          { title: "Configuring Customer Master Data and Customer Groups" },
          { title: "Credit Management and Risk Assessment" },
          { title: "Invoice Creation and Management" },
          { title: "Cash Application and Automatic Payment Matching" },
        ],
      },
    ],
    learningPoints: [
      "1) What is S/4 HANA and S/4 HANA System Landscape?",
      "2) Changes in Basic Settings Configuration in SAP Finance and Controlling?",
      "3) General Ledger:\n   a) Merging of General Ledger Account and Cost Element.\n   b) Why there is no reconciliation between Finance and Controlling?\n   c) Integration between FI and CO in S/4 HANA Finance?",
      "4) Accounts payable and Accounts Receivable:\n   a) Business Partner configuration- vendor /customer master.",
      "5) New House Bank Accounting in S/4 HANA by using Fiori Application.",
      "6) Asset accounting:\n   a) Why Accounting principle is important in Asset Accounting Configuration.\n   b) Parallel Ledger Concept in Asset Accounting.\n   c) New functionalities in Asset Accounting balances uploading.\n   d) New Functionalities in AFAB- Depreciation Run.",
      "7) Table structure in S/4 HANA and Universal general ledger Concept?",
      "Cost center Accounting:\n   1) Why Cost Element accounting integrates with GL account?",
      "2) Product Costing:\n   a) COGS split in Product Costing.\n   b) Variance Split in Product Costing.",
      "3) COPA new functionalities.",
      "S4 HANA finance migration:\n   1) Pre requisites for S/4 HANA Migration.\n   2) Pre migration activities.\n   3) During migration activities.\n   4) Post migration activities.",
    ],
    whyJoin: {
      course: "SAP S/4HANA Finance",
      title: "Why Join This Course?",
      description: [
        "SAP S/4HANA Finance is a critical module for financial management, and mastering it opens up numerous career opportunities in finance and accounting.",
        "This course provides a comprehensive understanding of SAP S/4HANA Finance, from basic concepts to advanced configurations, ensuring you are job-ready.",
      ],
      benefits: [
        "SAP S/4HANA Finance professionals are in high demand across various industries.",
        "SAP S/4HANA Finance experts command high salaries due to their specialized skills.",
        "SAP S/4HANA Finance skills are recognized globally, offering international career opportunities.",
        "SAP S/4HANA is used by leading companies worldwide, making it a highly respected platform.",
      ],
      testimonials: [
        {
          quote:
            "The SAP S/4HANA Finance training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP S/4HANA Finance consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP S/4HANA Finance Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP S/4HANA Finance. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP S/4HANA Finance Analyst, Tech Company",
        },
      ],
    },
  },
  {
    title: "SAP Security and SAP GRC Training",
    course: "SAP Security & GRC",
    link: "sap-security-training",
    image: "https://vr-it-solutions.vercel.app/images/courses/sap-security.jpg",
    description:
      "SAP Security and GRC (Governance, Risk, and Compliance) are critical for ensuring the security and compliance of SAP systems. This training covers the fundamentals of SAP Security, including user administration, role management, and troubleshooting access issues. It also delves into advanced topics like SAP GRC Access Control, risk analysis, and emergency access management.",

    hoursContent: "70h",
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    aboutTheCourse: [
      "SAP Security is one of the important technical modules in SAP. SAP Security administrators are responsible for development and administration of user access rights in different SAP systems.",
      "It includes User Administration, Role Administration, Troubleshooting, Restricting access rights and Reporting.",
      "When we are implementing SAP Security, we should follow Good Governance Practice including SOX and SOD compliance to fulfill audit requirements.",
      "VR IT Solutions is one of the best SAP GRC training institutes offering a well-focused and career-oriented training program including real-time exposure in SAP Security training and SAP GRC training.",
    ],
    coursePrerequisites: [
      "Basic understanding of SAP navigation and concepts.",
      "Familiarity with security and compliance principles.",
      "No prior SAP Security or GRC experience required.",
    ],
    sections: [
      {
        title: "Introduction to SAP Security",
        lectures: [
          { title: "Introduction to ERP and SAP R/3" },
          { title: "Overview of SAP Security and Its Importance" },
          {
            title: "User Administration: User Creation, Locking, and Unlocking",
          },
          { title: "Role Administration: Role Creation and Assignment" },
        ],
      },
      {
        title: "SAP GRC Access Control",
        lectures: [
          { title: "Introduction to GRC and Compliance Tools" },
          { title: "Access Risk Analysis (ARA) and Risk Mitigation" },
          { title: "Emergency Access Management (EAM) and Firefighting" },
          { title: "Access Request Management (ARM) and Workflow Setup" },
        ],
      },
      {
        title: "Advanced SAP Security",
        lectures: [
          { title: "Troubleshooting Access Issues with SU53 and ST01" },
          { title: "SAP Security Reporting for Audit Compliance" },
          { title: "BI Security: Authorization Concepts and Role Structures" },
          {
            title: "Advanced Topics: Change Management and System Validations",
          },
        ],
      },
    ],
    learningPoints: [
      "Understand the core concepts of SAP Security and GRC.",
      "Master user administration and role management in SAP.",
      "Learn how to troubleshoot access issues and mitigate risks.",
      "Gain expertise in SAP GRC Access Control and emergency access management.",
      "Explore advanced topics like audit compliance and BI security.",
    ],
    whyJoin: {
      course: "SAP Security & GRC",
      title: "Why Join This Course?",
      description: [
        "With SAP being a huge business application with a lot of intertwined processes, administering an SAP system is a huge challenge and hence professionals trained in this area can find lucrative opportunities as SAP Security and GRC consultants and get into other similar roles.",
        "Currently, there is a lot of demand for SAP Security and GRC professionals, and hence it is the right time to kickstart this course.",
        "VR IT Solutions is one of the software training institutes in Hyderabad to offer SAP Security and SAP GRC Access Controls training, SAP Security online training, SAP GRC online training also.",
      ],
      benefits: [
        "SAP Security and GRC professionals are in high demand across various industries.",
        "SAP Security and GRC experts command high salaries due to their specialized skills.",
        "SAP Security and GRC skills are recognized globally, offering international career opportunities.",
        "SAP Security and GRC are used by leading companies worldwide, making them highly respected platforms.",
      ],
      testimonials: [
        {
          quote:
            "The SAP Security and GRC training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP Security consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP Security Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP Security and GRC. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP Security Analyst, Tech Company",
        },
      ],
    },
  },
  {
    title: "SAP S/4HANA Simple Logistics Training",
    course: "SAP S/4HANA Logistics",
    link: "sap-s4Hana-simple-logistics-training",
    image:
      "https://vr-it-solutions.vercel.app/images/courses/sap-s4hana-logistics.png",
    description: [
      "SAP Simple Logistics, also referred to as SAP S/4 HANA Enterprise Management, consists of all the key modules under SAP ERP Business Suite. The list of modules include Material Management, Supply Chain, Demand Planning, Sourcing and Procurement, Contract Management, and Manufacturing.",
      "Using S/4 HANA Enterprise Management, the following are the list of business processes that can be managed: Procurement, Inventory Management, Order Management & Billing, Material Requirement Planning.",
      "In VR IT Solutions, we assure you get the best SAP training support in SAP S/4 HANA Simple Logistics training and are rated as one of the few institutes in Hyderabad to offer well-focused and customized training. So, get started by clicking here.",
    ],

    hoursContent: "80h",
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    coursePrerequisites: [
      "Must have basic understanding of logistics processes.",
      "Should have some knowledge of any SAP module.",
    ],
    sections: [
      {
        title: "Introduction to SAP S/4HANA Simple Logistics",
        lectures: [
          { title: "Overview of SAP S/4HANA Simple Logistics" },
          { title: "Key Features and Innovations in S/4HANA" },
          { title: "SAP Fiori User Experience and Its Role in Logistics" },
          {
            title: "Integration with Other SAP Modules and S/4HANA Components",
          },
        ],
      },
      {
        title: "Material Management (MM)",
        lectures: [
          { title: "Configuration and Maintenance of Material Master Data" },
          { title: "Purchase Order Management and Processing" },
          { title: "Inventory Transactions and Document Types" },
          { title: "Logistics Invoice Verification and Integration" },
        ],
      },
      {
        title: "Sales and Distribution (SD)",
        lectures: [
          { title: "Sales Order Creation, Processing, and Delivery" },
          { title: "Billing Document Creation and Management" },
          { title: "Pricing Procedure Configuration and Maintenance" },
          { title: "Delivery and Shipment Processing" },
        ],
      },
      {
        title: "Production Planning (PP)",
        lectures: [
          {
            title:
              "Master Data: Bill of Materials (BOM), Routings, Work Centers",
          },
          { title: "Production Order Processing and Execution" },
          { title: "Capacity Planning and Scheduling" },
          { title: "Integration with Inventory Management" },
        ],
      },
    ],
    learningPoints: [
      "Introduction to SAP HANA: Topics include SAP In-Memory Strategy, Architecture Overview and various views (analytic, attribute, calculation, etc)",
      "SAP S/4 HANA: Topics include S/4 HANA Roadmap, Benefits, introduction to SAP Fiori and deployment options",
      "Introduction to SAP Activate Methodology: Topics include System Conversion, Landscape transformation and New Implementation",
      "Overview of SAP HANA Cloud Solutions: Topics include SAP strategy for Cloud and SAP HANA, overview of SAP Cloud Data Centers and SAP HANA Enterprise Cloud",
      "Key Innovations of SAP Simple Logistics: Topics include inventory management, material requirement planning, material valuation and order management & billing",
      "Changes in SAP Simple Logistics Processes: Topics include overview of SAP simple logistics processes, SAP Fiori apps related to logistics/supply chain and architectural changes pertaining to product master, supplier information, sourcing & procurement.",
      "Industry Specific Solutions for Logistics functions for: Engineering & Construction, Aerospace & Defense, Mill Industry, Automotive",
      "Migration to SAP S/4 HANA: Goals, Scope and impact of the SAP S/4 HANA Materials Management & Operation. Topics include pre-requisites, configuration and perform migration to the SAP S/4 HANA",
      "Live Project",
    ],
    learningNotes: [
      "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
    ],
    whoShouldAttend: [
      "SAP solution architect",
      "Application consultant",
      "Support consultant",
      "Project manager",
      "Fresh graduates, looking for a career in this area of expertise",
    ],
    whyJoin: {
      course: "SAP S/4HANA Logistics",
      title: "Why Join This Course?",
      description: [
        "SAP Simple Logistics is rated as the best SAP S/4 HANA Simple Logistics training for innovative material management, supply chain management, production planning, and also sales & distribution within medium or large enterprises.",
        "The above areas being core of business, getting trained in this course would help you reap excellent rewards in SAP. If you are an SAP solution architect, functional consultant, or in any techno-functional role in logistics or supply chain industry, this course enables you to perform better and helps you make the next crucial move in your career.",
        [
          "Free Demo sessions to get to know how the course is conducted",
          "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
          "Easy to follow, since most of the course is practical oriented with live industry cases",
          "Classes driven by real time experts in SAP industry - experienced professionals across SAP domain, occupying various positions such as middle level managers, experienced faculty from reputed institutes",
          "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles",
          "Complete assistance to help you crack interviews – we provide FAQs, sample resumes and tips",
          "Get trained in SAP Simple Logistics in just 45 hours - select either weekend or weekday mode",
          "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry",
        ],
        "VR IT Solutions is one of the best software training institutes in Hyderabad to offer well-focused and career-oriented training program in SAP Simple Logistics. So, get started by clicking here.",
      ],
      practicalExecution: [
        "Free Demo sessions to get to know how the course is conducted",
        "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
        "Easy to follow, since most of the course is practical oriented with live industry cases.",
        "Classes driven by real time experts in SAP industry -experienced professionals across SAP domain,occupying various positions such as middle level managers,experienced faculty from reputed institutes.",
        "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles.",
        "Complete assistance to help you crack interviews – we provide FAQs, sample resumes and tips.",
        "Get trained in SAP Simple Logistics in just 45 hours -select either weekend or weekday mode",
        "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry",
      ],
      benefits: [
        "SAP S/4HANA Logistics professionals are in high demand across various industries.",
        "SAP S/4HANA Logistics experts command high salaries due to their specialized skills.",
        "SAP S/4HANA Logistics skills are recognized globally, offering international career opportunities.",
        "SAP S/4HANA is used by leading companies worldwide, making it a highly respected platform.",
      ],
      testimonials: [
        {
          quote:
            "The SAP S/4HANA Simple Logistics training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP S/4HANA Logistics consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP S/4HANA Logistics Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in SAP S/4HANA Simple Logistics. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP S/4HANA Logistics Analyst, Tech Company",
        },
      ],
    },
  },
  {
    title: "Google Cloud Platform Training",
    course: "Google Cloud",
    link: "google-cloud-training",
    image: "https://vr-it-solutions.vercel.app/images/courses/google-cloud.png",
    description: [
      "Google Cloud Platform or GCP is the proprietary platform of Google and is offered as a suite of cloud computing services.",
      "It leverages the same infrastructure that Google utilizes for its internal requirements for its end-user products.",
      "Google Cloud is one of the popular platforms available in the commercial cloud space and is available in various variants - infrastructure as a service, platform as a service, and serverless computing environments.",
      "According to Canalys estimates, Google Cloud is one of the fastest-growing cloud providers in the industry and is currently enjoying third place in the commercial cloud space.",
      "As per Gartner Inc., the global end-user spending on public cloud services is expected to rise 18.4% in 2021 to a staggering $304.9 billion - a steep increase from $257.5 billion in 2020.",
    ],

    hoursContent: "70h",
    level: "Beginner to Advanced",
    category: "DevOps & Cloud",
    coursePrerequisites: [
      "Basic understanding of cloud computing concepts.",
      "Familiarity with IT infrastructure and networking.",
      "No prior GCP experience required.",
    ],
    sections: [
      {
        title: "Introduction to Google Cloud Platform",
        lectures: [
          { title: "What is Cloud Computing?" },
          { title: "Overview of GCP Services" },
          { title: "Setting Up a GCP Account" },
          { title: "Introduction to Primitive Roles" },
        ],
      },
      {
        title: "Managing GCP Services",
        lectures: [
          { title: "Using GCP Console and Cloud Shell" },
          { title: "Managing GCP with Goloud and Gsutil" },
          { title: "Installing and Configuring Cloud SDK" },
        ],
      },
      {
        title: "GCP Networking Services",
        lectures: [
          { title: "Understanding VPC and VPN" },
          { title: "Creating and Managing Firewall Policies" },
          { title: "Configuring Cloud Router and Endpoints" },
        ],
      },
      {
        title: "GCP Compute Services",
        lectures: [
          { title: "Creating and Managing VM Instances" },
          { title: "Understanding Compute Engine" },
          { title: "Load Balancing and Persistent Disks" },
        ],
      },
    ],
    learningPoints: [
      "With booming opportunities in Cloud computing, students and professionals alike must get started in this exciting area of knowledge and become certified professionals.",
      "Some of the lucrative learning paths that students can choose to specialize in include Cloud infrastructure, application development, API management, Data engineering and Analytics, and Networking & Security.",
      "With thousands of jobs thrown open in this lucrative segment, we at VRIT Solutions have designed the best online Google Cloud training in Hyderabad.",
      "This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready.",
      "Make VRIT Solutions your first choice for Google Cloud Platform training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects.",
      "VRIT solutions offer the best-in-class GCP training and GCP job support to offer the right platform to power your career to the next level.",
      "So, don't stay behind. Join now for a lucrative career.",
    ],
    whyJoin: {
      course: "Google Cloud",
      title: "Why Join This Course?",
      description: [
        "With booming opportunities in Cloud computing, students and professionals alike must get started in this exciting area of knowledge and become certified professionals. Some of the lucrative learning paths that students can choose to specialize in include Cloud infrastructure, application development, API management, Data engineering and Analytics, and Networking & Security. With thousands of jobs thrown open in this lucrative segment, we at VRIT Solutions have designed the best online Google Cloud training in Hyderabad. This course covers all the requisite concepts and applications needed to become a thoroughbred professional and make you job-ready. Make VRIT Solutions your first choice for Google Cloud Platform training in Hyderabad due to its time-tested training methodology coupled with hands-on practical sessions and live projects.",
        "VRIT solutions offer the best-in-class GCP training and GCP job support to offer the right platform to power your career to the next level.",
        "So, don't stay behind. Join now for a lucrative career.",
      ],

      benefits: [
        "GCP professionals are in high demand across various industries.",
        "GCP experts command high salaries due to their specialized skills.",
        "GCP skills are recognized globally, offering international career opportunities.",
        "Google Cloud is used by leading companies worldwide, making it a highly respected platform.",
      ],
      testimonials: [
        {
          quote:
            "The Google Cloud training at VR IT Solutions was comprehensive and practical. I landed a job as a GCP engineer within two months of completing the course.",
          author: "Ravi K.",
          role: "GCP Engineer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in GCP. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Cloud Architect, Tech Company",
        },
      ],
    },
  },
  {
    title: "Full Stack Developer Training in Hyderabad",
    course: "Full Stack Development",
    link: "full-stack-developer-training-in-hyderabad",
    image: "https://vr-it-solutions.vercel.app/images/courses/full-stack.png",
    description:
      "Full Stack Development involves building both the front-end and back-end of web applications. This training covers the fundamentals of full-stack development, including HTML, CSS, JavaScript, Java, Spring Boot, and database management. It also delves into advanced topics like microservices, RESTful APIs, and DevOps.",

    hoursContent: "100h",
    level: "Beginner to Advanced",
    category: "Web Development",
    coursePrerequisites: [
      "VRIT Solutions hasn’t prescribed any specific pre-requisites for doing this course.",
      "However, strong knowledge in any object oriented programming like C++ is highly desirable, but not essential.",
      "If you are looking for full stack developer online training, VRIT Solutions is the right institute for you.",
    ],
    whoShouldAttend: [
      "Software developers, Architects and Web Designers",
      "Fresh Graduates, who are interested to make a career in Java.",
    ],
    aboutTheCourse: [
      "Java is an object oriented and powerful general language, widely used for developing several applications on web or mobile platform.",
      "Compared to other languages, this language is quite popular among students and professionals alike, as it is easy to learn, implement, compile and debug.",
      "Some of the biggest software companies around the world are developing applications in Java, which only reinforces the power and importance of this programming language.",
      "This training course is designed to develop you into full-fledged full stack professional, ready to take up any real time projects and assignments.",
      "In addition to that, this course also lets you work on the Angular11 framework or mobile development with Java, which is one of the biggest advantages of being a full stack Developer online training in hyderabad",
      "VRIT Solutions is one of the few institutes in Hyderabad and Bangalore to offer well focused and career-oriented training program in full stack developer training.",
    ],
    sections: [
      {
        title: "Introduction to Full Stack Development",
        lectures: [
          { title: "Overview of Full Stack Development" },
          { title: "Role of a Full Stack Developer" },
          { title: "Tools and Technologies Overview" },
        ],
      },
      {
        title: "Front-End Development",
        lectures: [
          { title: "HTML5 and CSS3 Fundamentals" },
          { title: "JavaScript and DOM Manipulation" },
          { title: "Front-End Frameworks: Angular or React" },
        ],
      },
      {
        title: "Back-End Development",
        lectures: [
          { title: "Core Java and OOP Concepts" },
          { title: "Java Web Development with JSP and Servlets" },
          { title: "Spring Framework and Spring Boot" },
        ],
      },
      {
        title: "Database Management",
        lectures: [
          { title: "SQL with MySQL/PostgreSQL" },
          { title: "NoSQL with MongoDB" },
          { title: "Database Transactions and ACID Properties" },
        ],
      },
    ],
    learningPoints: [
      "Introduction to programming",
      "Overview of object oriented programming",
      "Overview of core Java concepts",
      "Overview of Inheritance, Threads and Collections",
      "Learn how to deploy JDBC for connecting various applications",
      "Overview of Method Overriding and Overloading",
      "Learn how to use Array and HashMap for storing dynamic data",
      "Learn advanced concepts about how to create Threads in Java by Implementing Runnable Interface",
      "Live Project",
      "Note: The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
    ],
    whyJoin: {
      course: "Full Stack Development",
      title: "Why Join This Course?",
      description: [
        "With more and more companies adopting Java as a primary programming language for implementing cutting edge applications, this course is designed to make you a complete professional.",
        "This is a full fledged comprehensive course that helps to grow in your software coding career.",
        "VRIT Solutions offers the best full stack developer online training program to help you learn object-oriented programming concepts, Angular 11, HTML, CSS, Spring, Spring Boot, Spring Boot starters, Spring Boot JPA Postgres, SQL, JOIN, NO SQL, Mongo DB Sample web application to manage a resource & classes, and much more.",
        "Not just theoretical training, this course is adequately supplemented by practical sessions to let you work on some core assignments including mini projects and a final live project.",
      ],
      benefits: [
        "Full Stack Developers are in high demand across various industries.",
        "Full Stack Developers command high salaries due to their specialized skills.",
        "Full Stack Development skills are recognized globally, offering international career opportunities.",
        "Full Stack Developers are essential for building modern web applications, making it a highly respected role.",
      ],
      testimonials: [
        {
          quote:
            "The Full Stack Development training at VR IT Solutions was comprehensive and practical. I landed a job as a Full Stack Developer within two months of completing the course.",
          author: "Ravi K.",
          role: "Full Stack Developer, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in full-stack development. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Web Developer, Tech Company",
        },
      ],
    },
  },
  {
    title: "Informatica MDM Training",
    course: "Informatica MDM",
    link: "informatica-mdm-training",
    image:
      "https://vr-it-solutions.vercel.app/images/courses/informatica-mdm.png",
    description: [
      "The Informatica® master data management product family helps organizations to enhance operations with business-user access to consolidated and reliable business-critical data, even when it’s spread across the enterprise.",
      "This product enterprise offers true multi-domain master data management, empowering you with limitless opportunities to commence with any type of business-critical data and later add diverse domains as you wish.",
      "This product suite offers complete support for MDM such as requirements on a single platform, including data integration, profiling, quality and master data management.",
      "VR IT Solutions is one of the best Informatica MDM training in Hyderabad to offer well focused and career-oriented training program in Informatica MDM.",
      "So, get started by clicking here.",
    ],

    hoursContent: "80h",
    level: "Beginner to Advanced",
    category: "Data Warehousing & Management",
    coursePrerequisites: [
      "VR IT Solutions hasn’t prescribed any prerequisites for doing Informatica MDM online training in Hyderabad general.",
      "However, having knowledge of SQL will be beneficial, but certainly not mandatory.",
    ],
    sections: [
      {
        title: "Introduction to Informatica MDM",
        lectures: [
          { title: "Overview of Master Data Management (MDM)" },
          { title: "Key Features and Benefits of Informatica MDM" },
          { title: "Architecture and Components of Informatica MDM" },
        ],
      },
      {
        title: "Data Modeling in Informatica MDM",
        lectures: [
          { title: "Designing and Configuring Master Data Models" },
          { title: "Creating and Managing Hierarchies" },
          { title: "Handling Parent-Child Relationships" },
        ],
      },
      {
        title: "Data Integration and ETL",
        lectures: [
          { title: "Integrating Data from Various Sources" },
          { title: "Designing ETL Processes with Informatica PowerCenter" },
          { title: "Data Quality Management and Cleansing" },
        ],
      },
      {
        title: "Data Governance and Quality Management",
        lectures: [
          { title: "Implementing Data Governance Policies" },
          { title: "Configuring Data Quality Rules and Standards" },
          { title: "Data Validation, Cleansing, and Matching" },
        ],
      },
    ],
    learningPoints: [
      "Informatica MDM Version 10.1 Overview and Architecture",
      "Basic overview of Data Models and Lookups",
      "Learn how to configure Stage Process",
      "Learn how to configure Load Process",
      "Learn how to configure Match and Merge Process",
      "Acquire advanced knowledge in configuring Data Access",
      "Overview of Batch Processes",
      "Learn advanced concepts on Data Stewardship",
      "Learn about User Exits and Log Files",
      "Get an overview of Hierarchy Management",
      "Learn about Users, Resources, Privileges & Roles",
      "Get an overview of Services Integration Framework (SIF)",
      "Learn about Informatica Data Director",
      "Learn how to use Message Queues",
      "Advanced Topics",
      "Live Project",
    ],
    learningNotes: [
      "The syllabus listed above is indicative in nature and may include more topics for comprehensive learning.",
      "With VR IT Solutions providing the best training in Informatica MDM training, this course helps professionals to manage and process a variety of operations in various realms of business domains.",
    ],
    whoShouldAttend: [
      "Professionals involved in managing, implementing, or using Informatica MDM Hub in an organization such as:",
      "Project managers",
      "Installers",
      "Developers",
      "Administrators",
      "System integrators",
      "Database administrators",
      "Data stewards",
      "Engineering graduates looking a good career in this field",
      "Fresh graduates with aptitude to enter into this area.",
    ],
    whyJoin: {
      course: "Informatica MDM",
      title: "Why Join This Course?",
      description: [
        "The Informatica MDM is a unique trust framework that offers consolidated and reliable business critical data with extensive workflow management.",
        "VR IT’s training program on Informatica MDM focuses on real time cases, live projects and interactive sessions.",
        "This course adds value to professionals working in this area, and is also suited for other professionals and fresh graduates, who wish to enter this lucrative area of expertise.",
        [
          "Free Demo sessions to get to know how the course is conducted",
          "Flexible and customized timings – we plan our schedule as per your convenience, so no need to disturb your regular work schedule",
          "Easy to follow, since most of the course is practical oriented with live industry cases.",
          "Classes driven by real time experts in SAP industry - experienced professionals across SAP domain, occupying various positions such as middle level managers, experienced faculty from reputed institutes.",
          "Provides notes and recorded videos, so you can follow the course anywhere, anytime without any location hassles.",
          "Complete assistance to help you crack interviews – we provide FAQs, sample resumes and tips.",
          "Get trained in Informatica MDM in just 50 hours - select either weekend or weekday mode.",
          "Industry relevant curriculum - Our curriculum is constantly updated to meet the growing needs of the industry",
        ],
        "VR IT Solutions is one of the software training institute in hyderabad to offer the best and innovative training in informatica mdm training that is well suited to help you get started and embark on a fruitful journey.",
        "So, get started by clicking here.",
      ],
      practicalExecution: [
        "In order to work on practicals, some basic pre-requisites are required.",
        "You need a good internet connection, along with the required software that needs to be installed.",
        "This software can easily run on all operating systems such as Windows, Linux and Unix.",
        "Please forward these details to your colleagues and friends, who may be interested in upgrading their skills and knowledge for better job opportunities.",
      ],
      benefits: [
        "Informatica MDM professionals are in high demand across various industries.",
        "Informatica MDM experts command high salaries due to their specialized skills.",
        "Informatica MDM skills are recognized globally, offering international career opportunities.",
        "Informatica MDM is used by leading companies worldwide, making it a highly respected platform.",
      ],
      testimonials: [
        {
          quote:
            "The Informatica MDM training at VR IT Solutions was comprehensive and practical. I landed a job as an MDM consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "MDM Consultant, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in Informatica MDM. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Data Analyst, Tech Company",
        },
      ],
    },
  },
  {
    title: "EDI Training",
    course: "EDI",
    link: "edi-training",
    image: "https://vr-it-solutions.vercel.app/images/courses/edi.png",
    description:
      "Electronic Data Interchange (EDI) is a key technology for automating business transactions. This training covers the fundamentals of EDI, including standards, components, and mapping. It also delves into advanced topics like EDI integration, security, and future trends.",

    hoursContent: "60h",
    aboutTheCourse: [
      "VR IT Solutions announces EDI online training program in hyderabad. EDI stands for Electronic data interchange. Loosely define as transfer for any business documents like Purchase Orders, Invoices and Shipment notifications. EDI is actually standards and Protocols which needs to be utilized to successfully exchange business documents between enterprises.",
      "Without EDI one cannot fully automate and control flow of documents which results in slow processing, data errors which directly impacts any business. Errors like overpayments, late / delayed payments that results in Revenue loss and bad customer service experience. Sterling B2B integrator provides all required components to successfully enable EDI for any organization which saves times, minimize errors and improve efficiency. Huge cost savings on labor, Improves data security & Tracking capability.",
      "VR IT Solutions - IBM sterling integrator we provide expert training on the concepts various enterprises started using EDI to improve their business and reduce cost. We have various EDI Standards like ANSI X12, UNO EDIFACT, ROSETTANET etc. Even today EDI is adopted only by 1/3rd of the businesses alone in US, still 2/3rd organization are yet to adopt EDI which has a huge scope as it can be adopted by any kind of business like retail, manufacturing, Insurance, Banking etc.",
      "We have huge business documents exchanged between different types of enterprises doing varied business still exchanging information; these business documents can be called as Transaction Sets / Messages in EDI term. More than data format EDI is a system or method for exchanging business documents with external entities and integrating data directly to our internal systems. Without EDI an enterprise risk of Revenue Loss; Opportunity Loss; Reputation Loss.",
      "EDI will enable business documents to get auto populated into any enterprise ERP and checking for errors while sending or receiving documents.",
      "Adopting EDI will greatly benefit any organization like Cost Saving; Minimize errors; saving charge back penalties; increasing productivity without labor cost; receipt verification which helps any business to have a significant advantage on those who still lags in implementing EDI.",
      "To successfully implement EDI there are many tools available out there in the market why still Sterling B2B Integrator stands out because it has all the required key components like document translator; data mapping; secure way of sending and receiving business documents.",
      "IBM Sterling B2B integrator training is bundled with Translator or mapping software, it has workflows known as BP's which is enhanced XML and a Server which keeps seamlessly manages enterprises with different network protocol requirement and provides required security as per the standards.",
    ],
    level: "Beginner to Advanced",
    category: "Automation",
    coursePrerequisites: [
      "None.",
      "Learn Sterling B2B integrator implementing EDI training online modes by real time experts with practical scenarios and in depth explanation of each and every topic.",
    ],
    practicalExecution: [
      "In order to work on practical's, you need a Windows PC and SBI Map editor and notepad++ software which can be procured from IT Software vendor install it on your pc.",
    ],
    sections: [
      {
        title: "Introduction to EDI",
        lectures: [
          { title: "Understanding Electronic Data Interchange (EDI)" },
          { title: "History and Evolution of EDI" },
          { title: "Benefits of Using EDI in Business" },
        ],
      },
      {
        title: "EDI Standards",
        lectures: [
          { title: "Exploring ANSI X12 and UN/EDIFACT Standards" },
          { title: "Understanding EDI Message Structure" },
          { title: "Comparing Industry-Specific EDI Standards" },
        ],
      },
      {
        title: "EDI Components",
        lectures: [
          { title: "Understanding EDI Transaction Sets and Envelopes" },
          { title: "Exploring Communication Protocols: AS2, FTP, VANs" },
          { title: "Role of EDI Translators in Data Conversion" },
        ],
      },
      {
        title: "EDI Mapping",
        lectures: [
          { title: "Learning Data Mapping Techniques" },
          { title: "Hands-On Mapping Exercises" },
          { title: "Importance of Data Mapping in EDI" },
        ],
      },
    ],
    learningPoints: [
      "Understand the core concepts of EDI and its role in business automation.",
      "Master EDI standards, components, and mapping techniques.",
      "Learn advanced topics like EDI integration, security, and compliance.",
      "Gain expertise in implementing EDI solutions for various industries.",
      "Explore real-world use cases and hands-on projects.",
    ],
    whyJoin: {
      course: "EDI",
      title: "Why Join This Course?",
      description: [
        "EDI is a critical technology for automating business transactions, and mastering it opens up numerous career opportunities in business automation.",
        "This course provides a comprehensive understanding of EDI, from basic concepts to advanced configurations, ensuring you are job-ready.",
      ],
      benefits: [
        "EDI professionals are in high demand across various industries.",
        "EDI experts command high salaries due to their specialized skills.",
        "EDI skills are recognized globally, offering international career opportunities.",
        "EDI is used by leading companies worldwide, making it a highly respected technology.",
      ],
      testimonials: [
        {
          quote:
            "The EDI training at VR IT Solutions was comprehensive and practical. I landed a job as an EDI specialist within two months of completing the course.",
          author: "Ravi K.",
          role: "EDI Specialist, MNC",
        },
        {
          quote:
            "The hands-on projects and real-world scenarios helped me gain confidence in EDI. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Business Analyst, Tech Company",
        },
      ],
    },
  },
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "SAP, HCM & ERP":
      return <Building2 className="w-5 h-5" />;

    case "DevOps & Cloud":
      return <Cloud className="w-5 h-5" />;

    case "Data Science & Machine Learning":
    case "Data Science & Analytics":
    case "Data Warehousing & Management":
    case "Big Data & Analytics":
      return <Database className="w-5 h-5" />;

    case "Web Development":
      return <Code className="w-5 h-5" />;

    case "Integration & API Management":
    case "Integration & Middleware":
      return <Network className="w-5 h-5" />;

    case "Automation":
    case "Business Process Management":
      return <Settings className="w-5 h-5" />;

    case "Security & Compliance":
      return <Shield className="w-5 h-5" />;

    default:
      return <Box className="w-5 h-5" />;
  }
};

export const getFormattedCategories = () => {
  const groupedCourses = {};

  courses.forEach((course) => {
    if (!groupedCourses[course.category]) {
      groupedCourses[course.category] = [];
    }
    groupedCourses[course.category].push({
      name: course.course,
      link: course.link,
      title: course.title,
    });
  });

  return Object.entries(groupedCourses).map(([category, subcategories]) => ({
    name: category,
    subcategories,
    icon: getCategoryIcon(category),
  }));
};

export default courses;
