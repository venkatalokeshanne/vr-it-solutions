import { TrendingUp, Globe, DollarSign, Award, Zap,  Code, 
  Building2, 
  Database, 
  Network, 
  Settings,
  Cloud,
  Shield,
  Box } from "lucide-react";

const courses = [
  {
    title: "Salesforce Training in Hyderabad",
    course: "Salesforce",
    link: "salesforce",
    trending: 1,
    image: "/images/courses/salesforce.png",
    description:
      "Salesforce is a leading cloud-based CRM platform that helps businesses manage customer relationships, streamline processes, and improve productivity. This comprehensive training program covers both Salesforce Administration and Development, equipping you with the skills needed to manage and customize Salesforce applications effectively. Whether you're an aspiring administrator or a developer, this course will prepare you for real-world scenarios and help you achieve Salesforce certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Working computer with internet access, valid email address, and understanding of English language.",
      "Basic computer literacy, familiarity with Microsoft Word and Excel, and general internet usage skills.",
      "The course is divided into modules covering setup, sales processes, channels, and forecasting over approximately five weeks."
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
        "With rapid technological advancements, this course is slowly gaining importance in the market. The uniqueness of this course is it teaches you mule in step by step manner starting from basics to advanced without the requirement of any previous integration background.",
        "VR IT Solutions provides a structured and practical approach to Salesforce training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Salesforce skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Salesforce professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Salesforce certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Salesforce is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Salesforce certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/azure-devops.png",
    trending: 2,
    category: "DevOps & Cloud",
    description:
      "This comprehensive course is designed to help learners develop proficient skills in Azure DevOps and subsequently leverage their skills to implement solutions in Azure. The training covers various on-demand aspects of both Azure DevOps [AZ400] and Azure admin [AZ104], including case studies and hands-on projects to ensure mastery of DevOps and Azure concepts.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
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
          { title: "Setting up VM in Availability set using Load Balanced Endpoint" },
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
          { title: "Setting up the Global Branching Policies on the Release Folder" },
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
          { title: "Differences among Cluster IP vs Node Port vs Load Balancer" },
          { title: "BoM Preparation for AKS components" },
          { title: "Architecture for Cluster IP, Node Port and Load Balancer" },
          { title: "Creating a Deployment in Kubernetes using YAML" },
          { title: "Installing the Kubectl in the VM" },
          { title: "Connecting the AKS cluster using the VM" },
          { title: "Understanding on the Kubernetes Commands" },
          { title: "Security on the AKS setup process" },
          { title: "Difference between the AKS public and private cluster" },
          { title: "Deploying to Multiple clusters using same VM" },
          { title: "How to connect to the VM to Private DNS zone of AKS API Server" },
          { title: "Importance VNet Link and Vnet peering in the AKS multi cluster connection" },
          { title: "Creating a Service in Kubernetes using YAML" },
          { title: "Creating a Secrets in Kubernetes using YAML" },
          { title: "Accessing the secrets in the Kubernetes Deployment yaml" },
          { title: "Setting up the Resources limits on the pods in the AKS" },
          { title: "Understanding on the Replica set" },
          { title: "External Load Balancer vs Internal Load balancer" },
          { title: "Importance and Drawbacks of the Kubernetes services" },
          { title: "Introduction to Ingress" },
          { title: "Provisioning the Application Gateway [Ingress Controller]" },
          { title: "Path/Host Mapping Techniques" },
          { title: "Security on the Application Gateway" },
          { title: "Setting up the Realtime project using AKS along with APGW Ingress Controller" },
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
          { title: "Selenium commands to handle the Web-elements in the webpage" },
          { title: "Selenium commands to handle alerts, windows & Frames" },
          { title: "Understanding the Selenium Real time Framework" },
          { title: "Understanding the POM Framework" },
          { title: "Importance of Wrapper Methods" },
          { title: "Writing the Business understandable scenarios in BDD format using Cucumber Plugin" },
          { title: "Exporting the Reports using Extent Reports with screen shots" },
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
          { title: "Deploying VM inside a custom Virtual Network in Azure using Terraform" },
          { title: "Deploying DB inside a custom Virtual Network in Azure using Terraform" },
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
          { title: "Send Helm Chart to Azure Kubernetes Service (AKS) to deploy the Java application" },
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
      "Master Azure DevOps and Azure administration skills",
      "Understand Azure networking, virtual machines, and storage",
      "Implement CI/CD pipelines using Azure Pipelines",
      "Containerize applications using Docker and Kubernetes",
      "Automate infrastructure deployment using Terraform and Ansible",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Azure DevOps",
      title: "Why Join This Course?",
      description: [
        "This course provides a comprehensive understanding of Azure DevOps and Azure administration, equipping you with the skills needed to implement solutions in Azure. The training includes hands-on projects and case studies to ensure practical knowledge.",
        "VR IT Solutions offers a structured and practical approach to Azure DevOps training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Azure DevOps skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Azure DevOps professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Azure certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Azure is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Azure certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/servicenow.png",
    description:
      "ServiceNow is a leading cloud-based platform that helps organizations automate IT service management, streamline processes, and improve productivity. This comprehensive training program covers both ServiceNow Administration and Development, equipping you with the skills needed to manage and customize ServiceNow applications effectively. Whether you're an aspiring administrator or a developer, this course will prepare you for real-world scenarios and help you achieve ServiceNow certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of IT service management (ITSM) concepts.",
      "Familiarity with cloud computing and web technologies.",
      "Knowledge of basic scripting and programming concepts.",
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
      "Master ServiceNow Administration and Development skills",
      "Understand ServiceNow architecture and licensing",
      "Manage user access, security, and data effectively",
      "Automate workflows and processes using ServiceNow tools",
      "Create custom tables, forms, and scripts",
      "Develop and deploy ServiceNow applications",
      "Integrate ServiceNow with external systems",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "ServiceNow",
      title: "Why Join This Course?",
      description: [
        "ServiceNow is a rapidly growing platform used by organizations worldwide to automate IT service management. This course provides a comprehensive understanding of ServiceNow, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to ServiceNow training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "ServiceNow skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "ServiceNow professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "ServiceNow certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "ServiceNow is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "ServiceNow certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/pega.png",
    trending: 4,
    description:
      "Pega is a leading Business Process Management (BPM) tool that helps organizations automate workflows, streamline processes, and improve productivity. This comprehensive training program covers both Pega Administration and Development, equipping you with the skills needed to manage and customize Pega applications effectively. Whether you're an aspiring administrator or a developer, this course will prepare you for real-world scenarios and help you achieve Pega certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "Automation",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of business process management (BPM) concepts.",
      "Familiarity with programming and scripting concepts.",
      "Knowledge of basic database and web technologies.",
    ],
    sections: [
      {
        title: "Introduction to Pega",
        lectures: [
          { title: "What is BPM, BRE, and BPMS" },
          { title: "Ruleset, Version, Application, Access group, and Operator ID" },
          { title: "Class, Inheritance, and Types of Classes" },
        ],
      },
      {
        title: "User Interface Design",
        lectures: [
          { title: "Designing User Interface using Section, Harness, Control, and Layouts" },
          { title: "Lab Session: Using UI Rules like Section, Harness, Control, and Layouts" },
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
          { title: "Flow Basic Shapes: Assignment, Connector, Decision Shape, Utility, Ticket, etc." },
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
      "Master Pega Administration and Development skills",
      "Understand Pega architecture and rulesets",
      "Design user interfaces using Pega tools",
      "Automate workflows and processes using Pega",
      "Implement advanced Pega concepts like declarative rules and validations",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Pega",
      title: "Why Join This Course?",
      description: [
        "Pega is a rapidly growing platform used by organizations worldwide to automate business processes. This course provides a comprehensive understanding of Pega, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Pega training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Pega skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Pega professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Pega certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Pega is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Pega certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/devops.png",
    description:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. This comprehensive training program covers DevOps principles, tools, and practices, equipping you with the skills needed to implement CI/CD pipelines, automate infrastructure, and manage cloud environments effectively.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "DevOps & Cloud",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of software development and IT operations.",
      "Familiarity with Linux commands and scripting.",
      "Knowledge of basic networking and cloud concepts.",
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
          { title: "AWS Config: Resource Inventory & Configuration Management" },
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
          { title: "Kubernetes Monitoring & Logging with Prometheus & Grafana" },
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
          { title: "End-to-End CI/CD Pipeline on AWS with Jenkins, Docker, and Kubernetes" },
          { title: "Multi-Region, Multi-AZ Deployment & Disaster Recovery" },
          { title: "Advanced Security Practices & Compliance Automation" },
          { title: "Real-Time Monitoring & Alerting for Large-Scale Applications" },
        ],
      },
    ],
    learningPoints: [
      "Master DevOps principles and practices",
      "Implement CI/CD pipelines using Jenkins, Docker, and Kubernetes",
      "Automate infrastructure using Terraform and Ansible",
      "Manage cloud environments on AWS",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "DevOps",
      title: "Why Join This Course?",
      description: [
        "DevOps is a rapidly growing field that combines software development and IT operations to deliver high-quality software continuously. This course provides a comprehensive understanding of DevOps, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to DevOps training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "DevOps skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "DevOps professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "DevOps certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "DevOps is used by 90% of Fortune 100 companies, making it a highly respected field.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "DevOps certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/mulesoft.png",
    description:
      "MuleSoft is a leading integration platform that helps organizations connect applications, data, and devices seamlessly. This comprehensive training program covers MuleSoft's Anypoint Platform, equipping you with the skills needed to design, develop, and manage APIs and integrations effectively. Whether you're an aspiring developer or an integration specialist, this course will prepare you for real-world scenarios and help you achieve MuleSoft certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "Integration & API Management",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of integration concepts.",
      "Familiarity with web services and APIs.",
      "Knowledge of basic programming and scripting concepts.",
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
      "Master MuleSoft's Anypoint Platform and API Management",
      "Design and develop RESTful and SOAP APIs",
      "Implement API-led connectivity and integration solutions",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "MuleSoft",
      title: "Why Join This Course?",
      description: [
        "MuleSoft is a rapidly growing platform used by organizations worldwide to connect applications, data, and devices. This course provides a comprehensive understanding of MuleSoft, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to MuleSoft training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "MuleSoft skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "MuleSoft professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "MuleSoft certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "MuleSoft is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "MuleSoft certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/workday.png",
    description:
      "Workday is a leading cloud-based Human Capital Management (HCM) platform that helps organizations manage HR, payroll, and financial processes. This comprehensive training program covers both Workday Functional and Technical aspects, equipping you with the skills needed to manage and customize Workday applications effectively. Whether you're an aspiring HR professional or a technical specialist, this course will prepare you for real-world scenarios and help you achieve Workday certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of Human Capital Management (HCM) concepts.",
      "Familiarity with cloud-based platforms and web technologies.",
      "Knowledge of basic database and reporting concepts.",
    ],
    sections: [
      {
        title: "Core Concepts and Navigation Basics",
        lectures: [
          { title: "Organization Types: Supervisory Organizations, Cost Center, Location, Region" },
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
          { title: "Domain Security Policies and Business Process Security Policies" },
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
        lectures: [
          { title: "Building Simple, Advanced, and Matrix Reports" },
        ],
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
          { title: "Integration: Enterprise Interface Builder (Inbound and Outbound)" },
          { title: "Core Connectors: Worker, Sequence Generators, and Integration System User" },
          { title: "BP Configuration for Integration" },
          { title: "PICOF Integration: Build" },
          { title: "ADP Payforce and Overview of XSLT" },
          { title: "Overview of Studio and Web Services" },
        ],
      },
    ],
    learningPoints: [
      "Master Workday Functional and Technical skills",
      "Understand Workday architecture and navigation",
      "Manage HR, payroll, and financial processes using Workday",
      "Implement advanced Workday concepts like calculated fields and reports",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Workday",
      title: "Why Join This Course?",
      description: [
        "Workday is a rapidly growing platform used by organizations worldwide to manage HR, payroll, and financial processes. This course provides a comprehensive understanding of Workday, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Workday training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Workday skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Workday professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Workday certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Workday is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Workday certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/snowflake.png",
    description:
      "Snowflake is a leading cloud-based data warehousing platform that helps organizations store, analyze, and share data efficiently. This comprehensive training program covers Snowflake's architecture, data warehousing, and advanced features, equipping you with the skills needed to manage and optimize data solutions effectively. Whether you're an aspiring data engineer or a data analyst, this course will prepare you for real-world scenarios and help you achieve Snowflake certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
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
          { title: "Key Concepts: Virtual Warehouses, Databases, Schemas, and Tables" },
          { title: "Snowflake Editions: Standard, Enterprise, Business Critical, and VPS" },
        ],
      },
      {
        title: "Snowflake Data Warehousing",
        lectures: [
          { title: "Data Storage and Compression Techniques" },
          { title: "Micro-partitioning and Columnar Storage" },
          { title: "Time Travel and Data Retention Strategies" },
          { title: "Zero-Copy Cloning: Creating Test and Development Environments" },
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
          { title: "Managing and Auditing Access with Snowflake Account Usage" },
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
          { title: "Snowflake with ETL Tools (Informatica, Talend, Matillion)" },
          { title: "Building ELT Pipelines with Snowflake and SQL" },
          { title: "Data Transformation with Snowflake Streams and Tasks" },
          { title: "Continuous Data Integration with Snowpipe and Event-Based Ingestion" },
          { title: "Integrating Snowflake with Apache Kafka for Real-Time Data" },
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
          { title: "Implementing Real-Time Analytics with Snowflake and Kafka" },
          { title: "Data Governance and Compliance Project in Snowflake" },
          { title: "BI Integration and Dashboarding Project using Snowflake" },
          { title: "Machine Learning Model Deployment with Snowflake" },
        ],
      },
    ],
    learningPoints: [
      "Master Snowflake's architecture and data warehousing concepts",
      "Implement data loading, unloading, and transformation techniques",
      "Optimize query performance and manage virtual warehouses",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Snowflake",
      title: "Why Join This Course?",
      description: [
        "Snowflake is a rapidly growing platform used by organizations worldwide to store, analyze, and share data efficiently. This course provides a comprehensive understanding of Snowflake, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Snowflake training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Snowflake skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Snowflake professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Snowflake certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Snowflake is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Snowflake certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/machine-learning-python.png",
    description:
      "This comprehensive course covers Python programming fundamentals, data handling, and machine learning concepts. It equips you with the skills needed to build, evaluate, and deploy machine learning models using Python. Whether you're a beginner or an experienced programmer, this course will prepare you for real-world machine learning challenges.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "Data Science & Machine Learning",
    level: "Beginner to Advanced",
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
          { title: "Supervised Learning: Linear Regression, Logistic Regression" },
          { title: "Classification Algorithms: k-NN, SVM, Decision Trees" },
          { title: "Ensemble Methods: Bagging, Boosting, XGBoost" },
          { title: "Unsupervised Learning: Clustering, Dimensionality Reduction" },
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
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Machine Learning skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Machine Learning professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Machine Learning certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Machine Learning is used by 90% of Fortune 100 companies, making it a highly respected field.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Machine Learning certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/hadoop.jpg",
    description:
      "Hadoop is a leading big data framework that helps organizations store, process, and analyze large datasets efficiently. This comprehensive training program covers Hadoop's core components, ecosystem tools, and advanced concepts, equipping you with the skills needed to manage big data solutions effectively.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "Big Data & Analytics",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of big data concepts.",
      "Familiarity with Linux commands and scripting.",
      "Knowledge of basic database and programming concepts.",
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
      "Master Hadoop's core components and ecosystem tools",
      "Implement data processing and analytics solutions using Hadoop",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Hadoop",
      title: "Why Join This Course?",
      description: [
        "Hadoop is a rapidly growing platform used by organizations worldwide to manage big data. This course provides a comprehensive understanding of Hadoop, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Hadoop training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Hadoop skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Hadoop professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Hadoop certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Hadoop is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Hadoop certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/data-science.png",
    description:
      "Data Science is a multidisciplinary field that combines statistics, programming, and domain expertise to extract insights from data. This comprehensive training program covers data science fundamentals, machine learning, and advanced analytics, equipping you with the skills needed to solve real-world data problems.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
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
          { title: "Measures of Dispersion: Range, Variance, Standard Deviation" },
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
        lectures: [
          { title: "Forecasting Techniques: ARIMA, SARIMA, LSTM" },
        ],
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
        lectures: [
          { title: "Generating Reports and Charts with Tableau" },
        ],
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
      "Master data science fundamentals and machine learning techniques",
      "Understand statistical concepts and hypothesis testing",
      "Build and evaluate predictive models",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Data Science",
      title: "Why Join This Course?",
      description: [
        "Data Science is one of the most in-demand fields in the tech industry. This course provides a comprehensive understanding of data science, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to data science training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Data Science skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Data Science professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Data Science certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Data Science is used by 90% of Fortune 100 companies, making it a highly respected field.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Data Science certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    title: "Python with Django Training in Hyderabad",
    course: "Python with Django",
    link: "python-django",
    image: "/images/courses/python-django.png",
    description:
      "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. This comprehensive training program covers Python programming fundamentals, Django framework, and web development concepts, equipping you with the skills needed to build and deploy web applications effectively.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "Web Development",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of programming concepts.",
      "Familiarity with Python is a plus but not mandatory.",
      "Knowledge of basic web development concepts.",
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
    learningPoints: [
      "Master Python programming and Django framework",
      "Build and deploy web applications using Django",
      "Understand web development concepts and best practices",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "Python with Django",
      title: "Why Join This Course?",
      description: [
        "Django is one of the most popular web frameworks for Python. This course provides a comprehensive understanding of Django, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to Django training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Django skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Django professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Django certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Django is used by 90% of Fortune 100 companies, making it a highly respected framework.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Django certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/python-aws.jpg",
    description:
      "This course provides a comprehensive understanding of Python programming and AWS cloud services. It covers Python fundamentals, AWS services, and how to integrate Python with AWS for automating cloud operations. Whether you're a beginner or an experienced developer, this course will prepare you for real-world cloud automation challenges.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
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
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "Python and AWS skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "Python and AWS professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "Python and AWS certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "Python and AWS are used by 90% of Fortune 100 companies, making them highly respected platforms.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "Python and AWS certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/sap-basis.jpg",
    description:
      "SAP Basis is the technical foundation that enables SAP applications to function. This comprehensive training program covers SAP system administration, installation, configuration, and performance tuning. Whether you're an aspiring SAP Basis administrator or an IT professional, this course will prepare you for real-world SAP Basis challenges.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
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
      "Master SAP Basis administration and system management",
      "Understand SAP system architecture and installation",
      "Implement advanced security and performance tuning techniques",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "SAP Basis",
      title: "Why Join This Course?",
      description: [
        "SAP Basis is a critical skill for managing SAP systems. This course provides a comprehensive understanding of SAP Basis, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to SAP Basis training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "SAP Basis skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "SAP Basis professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "SAP Basis certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "SAP is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "SAP Basis certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/sap-ewm.jpg",
    description:
      "SAP Extended Warehouse Management (EWM) is a comprehensive solution for managing warehouse operations. This training program covers SAP EWM configuration, processes, and integration with other SAP modules. Whether you're an aspiring SAP EWM consultant or a warehouse manager, this course will prepare you for real-world SAP EWM challenges.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of warehouse management concepts.",
      "Familiarity with SAP concepts is a plus but not mandatory.",
      "Knowledge of basic logistics and supply chain concepts.",
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
      "Master SAP EWM configuration and processes",
      "Understand warehouse management concepts and SAP EWM architecture",
      "Implement advanced SAP EWM concepts like wave management and labor management",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "SAP EWM",
      title: "Why Join This Course?",
      description: [
        "SAP EWM is a critical skill for managing warehouse operations. This course provides a comprehensive understanding of SAP EWM, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to SAP EWM training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "SAP EWM skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "SAP EWM professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "SAP EWM certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "SAP EWM is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "SAP EWM certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/sap-sd.jpg",
    description:
      "SAP Sales and Distribution (SD) is a key module in SAP ERP that handles sales, shipping, and billing processes. This comprehensive training program covers SAP SD configuration, processes, and integration with other SAP modules. Whether you're an aspiring SAP SD consultant or a sales professional, this course will prepare you for real-world SAP SD challenges.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    category: "SAP, HCM & ERP",
    level: "Beginner to Advanced",
    coursePrerequisites: [
      "Basic understanding of sales and distribution processes.",
      "Familiarity with SAP concepts is a plus but not mandatory.",
      "Knowledge of basic business processes and logistics.",
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
          { title: "Advanced Sales Order Scenarios: Contracts, Scheduling Agreements" },
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
      "Master SAP SD configuration and processes",
      "Understand sales and distribution concepts and SAP SD architecture",
      "Implement advanced SAP SD concepts like pricing and availability check",
      "Gain hands-on experience with real-world projects and case studies",
    ],
    whyJoin: {
      course: "SAP SD",
      title: "Why Join This Course?",
      description: [
        "SAP SD is a critical skill for managing sales and distribution processes. This course provides a comprehensive understanding of SAP SD, equipping you with the skills needed to excel in your career.",
        "VR IT Solutions offers a structured and practical approach to SAP SD training, ensuring you gain the skills needed to excel in your career.",
      ],
      benefits: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "High Demand",
          description:
            "SAP SD skills are highly sought after by companies worldwide, offering numerous job opportunities.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Lucrative Salaries",
          description:
            "SAP SD professionals command premium salaries due to their specialized skills.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global Opportunities",
          description:
            "SAP SD certifications are recognized globally, opening doors to international career opportunities.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Industry Recognition",
          description:
            "SAP SD is used by 90% of Fortune 100 companies, making it a highly respected platform.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Career Growth",
          description:
            "SAP SD certifications can significantly accelerate your career growth and open up leadership roles.",
        },
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
    image: "/images/courses/sap-leonardo.jpg",
    description: "SAP Leonardo is a digital innovation system that integrates emerging technologies like IoT, Machine Learning, Blockchain, and Big Data. This training covers the fundamentals of SAP Leonardo, including its architecture, deployment models, and integration with SAP Cloud Platform and S/4HANA. It also delves into advanced topics like IoT data management, machine learning models, and blockchain applications.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    coursePrerequisites: [
      "Basic understanding of SAP navigation and concepts.",
      "Familiarity with emerging technologies like IoT, Machine Learning, and Blockchain.",
      "No prior SAP Leonardo experience required."
    ],
    sections: [
      {
        title: "Introduction to SAP Leonardo",
        lectures: [
          { title: "Overview of SAP Leonardo and Its Components" },
          { title: "Key Technologies and Innovations: IoT, Machine Learning, Blockchain, Big Data" },
          { title: "SAP Leonardo Architecture and Deployment Models" }
        ]
      },
      {
        title: "SAP Leonardo IoT (Internet of Things)",
        lectures: [
          { title: "Introduction to IoT and Its Applications" },
          { title: "IoT Architecture: Devices, Connectivity, and Data Processing" },
          { title: "IoT Use Cases and Industry Applications" },
          { title: "Integration with SAP Cloud Platform and S/4HANA" }
        ]
      },
      {
        title: "SAP Leonardo Machine Learning",
        lectures: [
          { title: "Overview of Machine Learning and AI Concepts" },
          { title: "Types of Machine Learning: Supervised, Unsupervised, Reinforcement Learning" },
          { title: "Building Machine Learning Models with SAP Leonardo" },
          { title: "Advanced Topics: Natural Language Processing, Image Recognition" }
        ]
      },
      {
        title: "SAP Leonardo Blockchain",
        lectures: [
          { title: "Basics of Blockchain: Concepts, Structure, and Cryptography" },
          { title: "Blockchain Networks: Public vs. Private Blockchains" },
          { title: "Building Blockchain Applications with SAP Leonardo" },
          { title: "Use Cases: Supply Chain Transparency, Smart Contracts" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of SAP Leonardo and its integration with emerging technologies.",
      "Master IoT data management and analytics for real-time decision-making.",
      "Learn how to build and deploy machine learning models using SAP Leonardo.",
      "Gain expertise in blockchain applications for supply chain and finance.",
      "Explore advanced topics like predictive analytics and data intelligence."
    ],
    whyJoin: {
      course: "SAP Leonardo",
      title: "Why Join This Course?",
      description: [
        "SAP Leonardo is at the forefront of digital innovation, and mastering it opens up numerous career opportunities in IoT, Machine Learning, and Blockchain.",
        "This course provides a comprehensive understanding of SAP Leonardo, from basic concepts to advanced applications, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "SAP Leonardo professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "SAP Leonardo experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "SAP Leonardo skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "SAP Leonardo is used by leading companies worldwide, making it a highly respected platform."
        }
      ],
      testimonials: [
        {
          quote: "The SAP Leonardo training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP Leonardo consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP Leonardo Consultant, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in SAP Leonardo. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP Leonardo Analyst, Tech Company"
        }
      ]
    }
  },
  {
    title: "SAP S/4HANA Simple Finance Training in Hyderabad",
    course: "SAP S/4HANA Finance",
    link: "simple-finance-training-in-hyderabad",
    image: "/images/courses/sap-s4hana-finance.jpg",
    description: "SAP S/4HANA Finance is a next-generation financial management solution that leverages the power of SAP HANA for real-time financial processing and reporting. This training covers the fundamentals of SAP S/4HANA Finance, including general ledger accounting, accounts payable, accounts receivable, and asset accounting. It also delves into advanced topics like financial closing, reporting, and integration with other SAP modules.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '80h',
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    coursePrerequisites: [
      "Basic understanding of accounting principles.",
      "Familiarity with SAP navigation and basic concepts.",
      "No prior SAP S/4HANA Finance experience required."
    ],
    sections: [
      {
        title: "Introduction to SAP S/4HANA Finance",
        lectures: [
          { title: "Overview of SAP S/4HANA and its Architecture" },
          { title: "Key Differences between SAP ECC and S/4HANA Finance" },
          { title: "Benefits of SAP HANA Database for Financial Management" },
          { title: "Migration Path from ECC to S/4HANA Finance" }
        ]
      },
      {
        title: "General Ledger Accounting (FI-GL)",
        lectures: [
          { title: "Universal Journal (ACDOCA) Overview" },
          { title: "Document Splitting: Configuration and Use" },
          { title: "Parallel Accounting and Ledger Setup" },
          { title: "Real-Time Financial Reporting with SAP Fiori Apps" }
        ]
      },
      {
        title: "Accounts Payable (FI-AP)",
        lectures: [
          { title: "Configuring Vendor Master Data and Partner Functions" },
          { title: "Invoice Processing: Automatic and Manual Methods" },
          { title: "Integration with MM for Goods Receipt and Invoice Verification" },
          { title: "Payment Run Configuration and Electronic Payments" }
        ]
      },
      {
        title: "Accounts Receivable (FI-AR)",
        lectures: [
          { title: "Configuring Customer Master Data and Customer Groups" },
          { title: "Credit Management and Risk Assessment" },
          { title: "Invoice Creation and Management" },
          { title: "Cash Application and Automatic Payment Matching" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of SAP S/4HANA Finance and its architecture.",
      "Master financial accounting processes, including general ledger, accounts payable, and accounts receivable.",
      "Learn advanced topics like financial closing, reporting, and integration with other SAP modules.",
      "Gain expertise in real-time financial reporting using SAP Fiori apps.",
      "Explore advanced topics like multi-entity consolidation and compliance reporting."
    ],
    whyJoin: {
      course: "SAP S/4HANA Finance",
      title: "Why Join This Course?",
      description: [
        "SAP S/4HANA Finance is a critical module for financial management, and mastering it opens up numerous career opportunities in finance and accounting.",
        "This course provides a comprehensive understanding of SAP S/4HANA Finance, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "SAP S/4HANA Finance professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "SAP S/4HANA Finance experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "SAP S/4HANA Finance skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "SAP S/4HANA is used by leading companies worldwide, making it a highly respected platform."
        }
      ],
      testimonials: [
        {
          quote: "The SAP S/4HANA Finance training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP S/4HANA Finance consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP S/4HANA Finance Consultant, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in SAP S/4HANA Finance. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP S/4HANA Finance Analyst, Tech Company"
        }
      ]
    }
  },
  {
    title: "SAP Security and SAP GRC Training",
    course: "SAP Security & GRC",
    link: "sap-security-training",
    image: "/images/courses/sap-security.jpg",
    description: "SAP Security and GRC (Governance, Risk, and Compliance) are critical for ensuring the security and compliance of SAP systems. This training covers the fundamentals of SAP Security, including user administration, role management, and troubleshooting access issues. It also delves into advanced topics like SAP GRC Access Control, risk analysis, and emergency access management.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    coursePrerequisites: [
      "Basic understanding of SAP navigation and concepts.",
      "Familiarity with security and compliance principles.",
      "No prior SAP Security or GRC experience required."
    ],
    sections: [
      {
        title: "Introduction to SAP Security",
        lectures: [
          { title: "Introduction to ERP and SAP R/3" },
          { title: "Overview of SAP Security and Its Importance" },
          { title: "User Administration: User Creation, Locking, and Unlocking" },
          { title: "Role Administration: Role Creation and Assignment" }
        ]
      },
      {
        title: "SAP GRC Access Control",
        lectures: [
          { title: "Introduction to GRC and Compliance Tools" },
          { title: "Access Risk Analysis (ARA) and Risk Mitigation" },
          { title: "Emergency Access Management (EAM) and Firefighting" },
          { title: "Access Request Management (ARM) and Workflow Setup" }
        ]
      },
      {
        title: "Advanced SAP Security",
        lectures: [
          { title: "Troubleshooting Access Issues with SU53 and ST01" },
          { title: "SAP Security Reporting for Audit Compliance" },
          { title: "BI Security: Authorization Concepts and Role Structures" },
          { title: "Advanced Topics: Change Management and System Validations" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of SAP Security and GRC.",
      "Master user administration and role management in SAP.",
      "Learn how to troubleshoot access issues and mitigate risks.",
      "Gain expertise in SAP GRC Access Control and emergency access management.",
      "Explore advanced topics like audit compliance and BI security."
    ],
    whyJoin: {
      course: "SAP Security & GRC",
      title: "Why Join This Course?",
      description: [
        "SAP Security and GRC are critical for ensuring the security and compliance of SAP systems, and mastering them opens up numerous career opportunities.",
        "This course provides a comprehensive understanding of SAP Security and GRC, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "SAP Security and GRC professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "SAP Security and GRC experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "SAP Security and GRC skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "SAP Security and GRC are used by leading companies worldwide, making them highly respected platforms."
        }
      ],
      testimonials: [
        {
          quote: "The SAP Security and GRC training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP Security consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP Security Consultant, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in SAP Security and GRC. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP Security Analyst, Tech Company"
        }
      ]
    }
  },
  {
    title: "SAP S/4HANA Simple Logistics Training",
    course: "SAP S/4HANA Logistics",
    link: "sap-s4Hana-simple-logistics-training",
    image: "/images/courses/sap-s4hana-logistics.png",
    description: "SAP S/4HANA Simple Logistics is a next-generation logistics solution that leverages the power of SAP HANA for real-time logistics processing and optimization. This training covers the fundamentals of SAP S/4HANA Simple Logistics, including material management, procurement, sales, and distribution. It also delves into advanced topics like production planning, quality management, and warehouse management.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '80h',
    level: "Beginner to Advanced",
    category: "SAP, HCM & ERP",
    coursePrerequisites: [
      "Basic understanding of logistics and supply chain management.",
      "Familiarity with SAP navigation and basic concepts.",
      "No prior SAP S/4HANA Logistics experience required."
    ],
    sections: [
      {
        title: "Introduction to SAP S/4HANA Simple Logistics",
        lectures: [
          { title: "Overview of SAP S/4HANA Simple Logistics" },
          { title: "Key Features and Innovations in S/4HANA" },
          { title: "SAP Fiori User Experience and Its Role in Logistics" },
          { title: "Integration with Other SAP Modules and S/4HANA Components" }
        ]
      },
      {
        title: "Material Management (MM)",
        lectures: [
          { title: "Configuration and Maintenance of Material Master Data" },
          { title: "Purchase Order Management and Processing" },
          { title: "Inventory Transactions and Document Types" },
          { title: "Logistics Invoice Verification and Integration" }
        ]
      },
      {
        title: "Sales and Distribution (SD)",
        lectures: [
          { title: "Sales Order Creation, Processing, and Delivery" },
          { title: "Billing Document Creation and Management" },
          { title: "Pricing Procedure Configuration and Maintenance" },
          { title: "Delivery and Shipment Processing" }
        ]
      },
      {
        title: "Production Planning (PP)",
        lectures: [
          { title: "Master Data: Bill of Materials (BOM), Routings, Work Centers" },
          { title: "Production Order Processing and Execution" },
          { title: "Capacity Planning and Scheduling" },
          { title: "Integration with Inventory Management" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of SAP S/4HANA Simple Logistics and its architecture.",
      "Master material management, procurement, and inventory processes.",
      "Learn advanced topics like production planning, quality management, and warehouse management.",
      "Gain expertise in real-time logistics reporting using SAP Fiori apps.",
      "Explore advanced topics like IoT integration and predictive analytics."
    ],
    whyJoin: {
      course: "SAP S/4HANA Logistics",
      title: "Why Join This Course?",
      description: [
        "SAP S/4HANA Simple Logistics is a critical module for logistics and supply chain management, and mastering it opens up numerous career opportunities.",
        "This course provides a comprehensive understanding of SAP S/4HANA Simple Logistics, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "SAP S/4HANA Logistics professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "SAP S/4HANA Logistics experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "SAP S/4HANA Logistics skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "SAP S/4HANA is used by leading companies worldwide, making it a highly respected platform."
        }
      ],
      testimonials: [
        {
          quote: "The SAP S/4HANA Simple Logistics training at VR IT Solutions was comprehensive and practical. I landed a job as an SAP S/4HANA Logistics consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "SAP S/4HANA Logistics Consultant, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in SAP S/4HANA Simple Logistics. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "SAP S/4HANA Logistics Analyst, Tech Company"
        }
      ]
    }
  },
  {
    title: "Google Cloud Platform Training",
    course: "Google Cloud",
    link: "google-cloud-training",
    image: "/images/courses/google-cloud.png",
    description: "Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google. This training covers the fundamentals of GCP, including compute, storage, networking, and big data services. It also delves into advanced topics like security, DevOps, and migration strategies to GCP.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
    level: "Beginner to Advanced",
    category: "DevOps & Cloud",
    coursePrerequisites: [
      "Basic understanding of cloud computing concepts.",
      "Familiarity with IT infrastructure and networking.",
      "No prior GCP experience required."
    ],
    sections: [
      {
        title: "Introduction to Google Cloud Platform",
        lectures: [
          { title: "What is Cloud Computing?" },
          { title: "Overview of GCP Services" },
          { title: "Setting Up a GCP Account" },
          { title: "Introduction to Primitive Roles" }
        ]
      },
      {
        title: "Managing GCP Services",
        lectures: [
          { title: "Using GCP Console and Cloud Shell" },
          { title: "Managing GCP with Goloud and Gsutil" },
          { title: "Installing and Configuring Cloud SDK" }
        ]
      },
      {
        title: "GCP Networking Services",
        lectures: [
          { title: "Understanding VPC and VPN" },
          { title: "Creating and Managing Firewall Policies" },
          { title: "Configuring Cloud Router and Endpoints" }
        ]
      },
      {
        title: "GCP Compute Services",
        lectures: [
          { title: "Creating and Managing VM Instances" },
          { title: "Understanding Compute Engine" },
          { title: "Load Balancing and Persistent Disks" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of Google Cloud Platform and its services.",
      "Master GCP networking, compute, and storage services.",
      "Learn advanced topics like security, DevOps, and data processing.",
      "Gain expertise in GCP migration strategies and hybrid cloud models.",
      "Explore real-world use cases and hands-on projects."
    ],
    whyJoin: {
      course: "Google Cloud",
      title: "Why Join This Course?",
      description: [
        "Google Cloud Platform is one of the leading cloud service providers, and mastering it opens up numerous career opportunities in cloud computing.",
        "This course provides a comprehensive understanding of GCP, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "GCP professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "GCP experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "GCP skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "Google Cloud is used by leading companies worldwide, making it a highly respected platform."
        }
      ],
      testimonials: [
        {
          quote: "The Google Cloud training at VR IT Solutions was comprehensive and practical. I landed a job as a GCP engineer within two months of completing the course.",
          author: "Ravi K.",
          role: "GCP Engineer, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in GCP. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Cloud Architect, Tech Company"
        }
      ]
    }
  },
  {
    title: "Full Stack Developer Training in Hyderabad",
    course: "Full Stack Development",
    link: "full-stack-developer-training-in-hyderabad",
    image: "/images/courses/full-stack.png",
    description: "Full Stack Development involves building both the front-end and back-end of web applications. This training covers the fundamentals of full-stack development, including HTML, CSS, JavaScript, Java, Spring Boot, and database management. It also delves into advanced topics like microservices, RESTful APIs, and DevOps.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '100h',
    level: "Beginner to Advanced",
    category: "Web Development",
    coursePrerequisites: [
      "Basic understanding of programming concepts.",
      "Familiarity with web development basics.",
      "No prior full-stack development experience required."
    ],
    sections: [
      {
        title: "Introduction to Full Stack Development",
        lectures: [
          { title: "Overview of Full Stack Development" },
          { title: "Role of a Full Stack Developer" },
          { title: "Tools and Technologies Overview" }
        ]
      },
      {
        title: "Front-End Development",
        lectures: [
          { title: "HTML5 and CSS3 Fundamentals" },
          { title: "JavaScript and DOM Manipulation" },
          { title: "Front-End Frameworks: Angular or React" }
        ]
      },
      {
        title: "Back-End Development",
        lectures: [
          { title: "Core Java and OOP Concepts" },
          { title: "Java Web Development with JSP and Servlets" },
          { title: "Spring Framework and Spring Boot" }
        ]
      },
      {
        title: "Database Management",
        lectures: [
          { title: "SQL with MySQL/PostgreSQL" },
          { title: "NoSQL with MongoDB" },
          { title: "Database Transactions and ACID Properties" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of full-stack development and its components.",
      "Master front-end technologies like HTML, CSS, JavaScript, and Angular/React.",
      "Learn back-end development with Java, Spring Boot, and database management.",
      "Gain expertise in building RESTful APIs and microservices architecture.",
      "Explore advanced topics like DevOps, Docker, and Kubernetes."
    ],
    whyJoin: {
      course: "Full Stack Development",
      title: "Why Join This Course?",
      description: [
        "Full Stack Development is a highly sought-after skill, and mastering it opens up numerous career opportunities in web development.",
        "This course provides a comprehensive understanding of full-stack development, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "Full Stack Developers are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "Full Stack Developers command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "Full Stack Development skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "Full Stack Developers are essential for building modern web applications, making it a highly respected role."
        }
      ],
      testimonials: [
        {
          quote: "The Full Stack Development training at VR IT Solutions was comprehensive and practical. I landed a job as a Full Stack Developer within two months of completing the course.",
          author: "Ravi K.",
          role: "Full Stack Developer, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in full-stack development. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Web Developer, Tech Company"
        }
      ]
    }
  },
  {
    title: "Informatica MDM Training",
    course: "Informatica MDM",
    link: "informatica-mdm-training",
    image: "/images/courses/informatica-mdm.png",
    description: "Informatica Master Data Management (MDM) is a comprehensive solution for managing and integrating master data across an organization. This training covers the fundamentals of Informatica MDM, including data modeling, data integration, and data governance. It also delves into advanced topics like data matching, merging, and performance tuning.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '80h',
    level: "Beginner to Advanced",
    category: "Data Warehousing & Management",
    coursePrerequisites: [
      "Basic understanding of data management concepts.",
      "Familiarity with databases and ETL processes.",
      "No prior Informatica MDM experience required."
    ],
    sections: [
      {
        title: "Introduction to Informatica MDM",
        lectures: [
          { title: "Overview of Master Data Management (MDM)" },
          { title: "Key Features and Benefits of Informatica MDM" },
          { title: "Architecture and Components of Informatica MDM" }
        ]
      },
      {
        title: "Data Modeling in Informatica MDM",
        lectures: [
          { title: "Designing and Configuring Master Data Models" },
          { title: "Creating and Managing Hierarchies" },
          { title: "Handling Parent-Child Relationships" }
        ]
      },
      {
        title: "Data Integration and ETL",
        lectures: [
          { title: "Integrating Data from Various Sources" },
          { title: "Designing ETL Processes with Informatica PowerCenter" },
          { title: "Data Quality Management and Cleansing" }
        ]
      },
      {
        title: "Data Governance and Quality Management",
        lectures: [
          { title: "Implementing Data Governance Policies" },
          { title: "Configuring Data Quality Rules and Standards" },
          { title: "Data Validation, Cleansing, and Matching" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of Informatica MDM and its architecture.",
      "Master data modeling, integration, and governance in Informatica MDM.",
      "Learn advanced topics like data matching, merging, and performance tuning.",
      "Gain expertise in implementing end-to-end MDM solutions.",
      "Explore real-world use cases and hands-on projects."
    ],
    whyJoin: {
      course: "Informatica MDM",
      title: "Why Join This Course?",
      description: [
        "Informatica MDM is a critical tool for managing master data, and mastering it opens up numerous career opportunities in data management.",
        "This course provides a comprehensive understanding of Informatica MDM, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "Informatica MDM professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "Informatica MDM experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "Informatica MDM skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "Informatica MDM is used by leading companies worldwide, making it a highly respected platform."
        }
      ],
      testimonials: [
        {
          quote: "The Informatica MDM training at VR IT Solutions was comprehensive and practical. I landed a job as an MDM consultant within two months of completing the course.",
          author: "Ravi K.",
          role: "MDM Consultant, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in Informatica MDM. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Data Analyst, Tech Company"
        }
      ]
    }
  },
  {
    title: "EDI Training",
    course: "EDI",
    link: "edi-training",
    image: "/images/courses/edi.png",
    description: "Electronic Data Interchange (EDI) is a key technology for automating business transactions. This training covers the fundamentals of EDI, including standards, components, and mapping. It also delves into advanced topics like EDI integration, security, and future trends.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '60h',
    level: "Beginner to Advanced",
    category: "Automation",
    coursePrerequisites: [
      "Basic understanding of business processes and data exchange.",
      "Familiarity with IT systems and data formats.",
      "No prior EDI experience required."
    ],
    sections: [
      {
        title: "Introduction to EDI",
        lectures: [
          { title: "Understanding Electronic Data Interchange (EDI)" },
          { title: "History and Evolution of EDI" },
          { title: "Benefits of Using EDI in Business" }
        ]
      },
      {
        title: "EDI Standards",
        lectures: [
          { title: "Exploring ANSI X12 and UN/EDIFACT Standards" },
          { title: "Understanding EDI Message Structure" },
          { title: "Comparing Industry-Specific EDI Standards" }
        ]
      },
      {
        title: "EDI Components",
        lectures: [
          { title: "Understanding EDI Transaction Sets and Envelopes" },
          { title: "Exploring Communication Protocols: AS2, FTP, VANs" },
          { title: "Role of EDI Translators in Data Conversion" }
        ]
      },
      {
        title: "EDI Mapping",
        lectures: [
          { title: "Learning Data Mapping Techniques" },
          { title: "Hands-On Mapping Exercises" },
          { title: "Importance of Data Mapping in EDI" }
        ]
      }
    ],
    learningPoints: [
      "Understand the core concepts of EDI and its role in business automation.",
      "Master EDI standards, components, and mapping techniques.",
      "Learn advanced topics like EDI integration, security, and compliance.",
      "Gain expertise in implementing EDI solutions for various industries.",
      "Explore real-world use cases and hands-on projects."
    ],
    whyJoin: {
      course: "EDI",
      title: "Why Join This Course?",
      description: [
        "EDI is a critical technology for automating business transactions, and mastering it opens up numerous career opportunities in business automation.",
        "This course provides a comprehensive understanding of EDI, from basic concepts to advanced configurations, ensuring you are job-ready."
      ],
      benefits: [
        {
          icon: "📈",
          title: "High Demand",
          description: "EDI professionals are in high demand across various industries."
        },
        {
          icon: "💰",
          title: "Lucrative Salaries",
          description: "EDI experts command high salaries due to their specialized skills."
        },
        {
          icon: "🌍",
          title: "Global Opportunities",
          description: "EDI skills are recognized globally, offering international career opportunities."
        },
        {
          icon: "🏆",
          title: "Industry Recognition",
          description: "EDI is used by leading companies worldwide, making it a highly respected technology."
        }
      ],
      testimonials: [
        {
          quote: "The EDI training at VR IT Solutions was comprehensive and practical. I landed a job as an EDI specialist within two months of completing the course.",
          author: "Ravi K.",
          role: "EDI Specialist, MNC"
        },
        {
          quote: "The hands-on projects and real-world scenarios helped me gain confidence in EDI. I highly recommend this course to anyone looking to upskill.",
          author: "Priya S.",
          role: "Business Analyst, Tech Company"
        }
      ]
    }
  }
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
      return <Box className="w-5 h-5" />; // Default icon
  }
};

export const getFormattedCategories = () => {
  const groupedCourses = {};
  
  courses.forEach(course => {
    if (!groupedCourses[course.category]) {
      groupedCourses[course.category] = [];
    }
    groupedCourses[course.category].push({
      name: course.course,
      link: course.link,
      title: course.title
    });
  });
  
  return Object.entries(groupedCourses).map(([category, subcategories]) => ({
    name: category,
    subcategories,
    icon: getCategoryIcon(category)
  }));
};

export default courses;