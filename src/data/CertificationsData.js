//Images
import awsDev from '../images/awsDev.png';
import awsCP from '../images/awsCP.png';
import ibmCloud from '../images/ibmCloud.png';

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

];

export default certificationsData;