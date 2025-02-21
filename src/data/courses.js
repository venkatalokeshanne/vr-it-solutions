import { TrendingUp, Globe, DollarSign, Award, Zap } from "lucide-react";

const courses = [{
    title: "Salesforce Training in Hyderabad",
    course: "Salesforce",
    link: "salesforce",
    image: "/images/courses/salesforce.png",
    description:
      "Salesforce is a leading cloud-based CRM platform that helps businesses manage customer relationships, streamline processes, and improve productivity. This comprehensive training program covers both Salesforce Administration and Development, equipping you with the skills needed to manage and customize Salesforce applications effectively. Whether you're an aspiring administrator or a developer, this course will prepare you for real-world scenarios and help you achieve Salesforce certification.",
    instructor: "VR IT Solutions",
    language: "English",
    hoursContent: '70h',
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
        title: "Data Management",
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
}];

export default courses;
