//Images
import awsDev from '../images/awsDev.png';
import awsCP from '../images/awsCP.png';
import ibmCloud from '../images/ibmCloud.png';
import UOA from '../images/UOA.png';
import UOM from '../images/UOM.png';

const certificationsData = [
  {
    "id": "01",
    "title": "AWS Certified Developer Associate",
    "issuedBy": "Amazon Web Services Training and Certification",
    "validity": "Feb 2022 - Feb 2025",
    "skills": [
      "Amazon Web Services", "AWS Cloud", "Code Deployment", "Code Development"
    ],
    "img": `${awsDev}`,
    "website": "https://www.credly.com/badges/73443cb2-75ab-4fce-97b6-771d7be5912a?source=linked_in_profile"
  },
  {
    "id": "02",
    "title": "AWS Certified Cloud Practitioner",
    "issuedBy": "Amazon Web Services Training and Certification",
    "validity": "July 2021 - Feb 2025",
    "skills": [
      "Amazon Web Services", "AWS Cloud", "Cloud Computing", "Cloud Services"
    ],
    "img": `${awsCP}`,
    "website": "https://www.credly.com/badges/86e0a91c-4f81-4915-b135-3a527e56e9da/public_url"
  },
  {
    "id": "03",
    "title": "Introduction to Cloud Computing",
    "issuedBy": "Amazon Web Services Training and Certification",
    "validity": "Feb 2022 - Feb 2025",
    "skills": [
      "Cloud Native", "Devops", "Iaas PaaS Saas", "Hybrid Multicloud"
    ],
    "img": `${ibmCloud}`,
    "website": "https://www.coursera.org/account/accomplishments/verify/HASHBWKTZQG8?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
  },
  {
    "id": "04",
    "title": "Introduction to Software Product Management",
    "issuedBy": "University of Alberta",
    "validity": "Always",
    "skills": [
      "Relate software product management to better software products",
      "Recognize the role of a software product manager",
      "Reflect on how Agile principles will improve your own projects",
    ],
    "img": `${UOA}`,
    "website": "https://coursera.org/share/f031e2f38e47c8c224d8e5068e3d5176"
  },
  {
    "id": "05",
    "title": "Software Processes and Agile Practices",
    "issuedBy": "University of Alberta",
    "validity": "Always",
    "skills": [
      "Distinguish between different process models for organizing software production",
      "Gauge the applicability of process models for a software development project",
      "Apply the fundamentals of Agile software development and management practices",
    ],
    "img": `${UOA}`,
    "website": "https://coursera.org/share/7c6a79ddcccca270e718ffbfe183cd95"
  },
  {
    "id": "06",
    "title": "Client Needs and Software Requirements",
    "issuedBy": "University of Alberta",
    "validity": "Always",
    "skills": [
      "Create clear requirements to drive effective software development",
      "Visualize client needs using low-fidelity prototypes",
      "Maximize the effectiveness of client interactions",
      "Adapt to changing product requirements"
    ],
    "img": `${UOA}`,
    "website": "https://coursera.org/share/d360b0a443bf8da365ca29b5c1137340"
  },
  {
    "id": "10",
    "title": "Programming for Everybody (Getting Started with Python)",
    "issuedBy": "University of Michigan",
    "validity": "Always",
    "skills": [
      "Describe the basics of the Python programming language",
      "Use variables to store, retrieve and calculate information",
      "Utilize core programming tools such as functions and loops"
    ],
    "img": `${UOM}`,
    "website": "https://coursera.org/share/d360b0a443bf8da365ca29b5c1137340"
  },


];

export default certificationsData;