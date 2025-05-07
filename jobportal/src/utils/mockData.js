export const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '120,000 - 150,000',
    experienceLevel: 'Senior Level',
    postedDate: '2 days ago',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'We are looking for an experienced Frontend Developer proficient in React and TypeScript to join our growing team. You will be responsible for building responsive and performant user interfaces for our enterprise products.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'Remote',
    type: 'Full-time',
    salary: '110,000 - 140,000',
    experienceLevel: 'Mid Level',
    postedDate: '5 days ago',
    tags: ['Node.js', 'Python', 'MongoDB'],
    description: 'As a Backend Engineer, you will design and implement server-side applications and databases. You should have experience with RESTful APIs and microservices architecture.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'CreativeLabs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '90,000 - 120,000',
    experienceLevel: 'Mid Level',
    postedDate: '1 week ago',
    tags: ['Figma', 'Adobe XD', 'User Research'],
    description: 'We are seeking a talented UX/UI Designer to create intuitive and engaging user experiences. You will work closely with product managers and developers to turn concepts into user-friendly interfaces.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    type: 'Contract',
    salary: '100,000 - 130,000',
    experienceLevel: 'Mid Level',
    postedDate: '3 days ago',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    description: 'Join our team as a DevOps Engineer to help build and maintain our cloud infrastructure. You should have experience with containerization, orchestration, and automation.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 5,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '115,000 - 145,000',
    experienceLevel: 'Senior Level',
    postedDate: '1 day ago',
    tags: ['Product Development', 'Agile', 'User Stories'],
    description: 'We are looking for a skilled Product Manager to guide product development from conception to launch. You should have a track record of delivering successful products and working in an Agile environment.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '125,000 - 160,000',
    experienceLevel: 'Senior Level',
    postedDate: '4 days ago',
    tags: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    description: 'As a Data Scientist, you will analyze complex data and build predictive models. You should have strong statistical knowledge and programming skills in Python and SQL.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 7,
    title: 'QA Engineer',
    company: 'QualityTech',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '80,000 - 110,000',
    experienceLevel: 'Mid Level',
    postedDate: '1 week ago',
    tags: ['Selenium', 'Jest', 'Manual Testing', 'Automation'],
    description: 'We are seeking a QA Engineer to ensure the quality of our web applications. You will be responsible for creating and executing test plans, both manually and using automation tools.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 8,
    title: 'Junior Web Developer',
    company: 'WebStack',
    location: 'Boston, MA',
    type: 'Part-time',
    salary: '60,000 - 80,000',
    experienceLevel: 'Entry Level',
    postedDate: '2 days ago',
    tags: ['JavaScript', 'HTML', 'CSS', 'React'],
    description: 'Great opportunity for a junior developer to join our team. You will work on web development projects using JavaScript, HTML, CSS, and React. This is a part-time position with potential to become full-time.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 9,
    title: 'Technical Project Manager',
    company: 'ProjectHub',
    location: 'Denver, CO',
    type: 'Full-time',
    salary: '100,000 - 130,000',
    experienceLevel: 'Mid Level',
    postedDate: '3 days ago',
    tags: ['Agile', 'Scrum', 'JIRA', 'Project Planning'],
    description: 'We are looking for a Technical Project Manager to lead development projects from start to finish. You should have experience with Agile methodologies and excellent communication skills.',
    companyLogo: 'https://via.placeholder.com/100'
  },
  {
    id: 10,
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'Remote',
    type: 'Contract',
    salary: '90,000 - 120,000',
    experienceLevel: 'Mid Level',
    postedDate: '5 days ago',
    tags: ['React Native', 'iOS', 'Android', 'Swift'],
    description: 'Join our team as a Mobile App Developer to create cross-platform applications. You should have experience with React Native and native app development for iOS and Android.',
    companyLogo: 'https://via.placeholder.com/100'
  }
];

export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'job_seeker',
    resume: {
      education: [
        {
          school: 'University of Technology',
          degree: 'Bachelor of Computer Science',
          year: '2015 - 2019'
        }
      ],
      experience: [
        {
          company: 'TechSolutions Inc.',
          position: 'Frontend Developer',
          duration: '2019 - Present',
          description: 'Developing web applications using React and TypeScript.'
        },
        {
          company: 'Digital Agency',
          position: 'Web Developer Intern',
          duration: '2018 - 2019',
          description: 'Assisted in developing websites using HTML, CSS, and JavaScript.'
        }
      ],
      skills: ['JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Git']
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'recruiter',
    company: {
      name: 'TechCorp',
      position: 'HR Manager',
      description: 'Leading technology company specializing in enterprise software solutions.'
    }
  }
]; 