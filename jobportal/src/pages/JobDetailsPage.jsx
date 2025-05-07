import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { jobs } from '../utils/mockData';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApplying, setIsApplying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    // Simulate API call to fetch job details
    setIsLoading(true);
    setTimeout(() => {
      const foundJob = jobs.find(j => j.id === parseInt(id));
      setJob(foundJob);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const handleApply = () => {
    setIsApplying(true);
    // Simulate API call to apply for job
    setTimeout(() => {
      alert('Your application has been submitted!');
      setIsApplying(false);
    }, 1000);
  };
  
  const toggleSaveJob = () => {
    setIsSaved(!isSaved);
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }
  
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs" className="btn btn-primary">
            Browse Jobs
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/jobs" className="text-primary hover:underline inline-flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </Link>
      </div>
      
      {/* Job Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center">
          {job.companyLogo && (
            <div className="md:mr-6 mb-4 md:mb-0">
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`} 
                className="w-20 h-20 object-contain"
              />
            </div>
          )}
          
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <p className="text-xl text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-500 mb-4">{job.location}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {job.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <Button onClick={handleApply} isLoading={isApplying}>
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              onClick={toggleSaveJob}
              className="flex items-center justify-center"
            >
              <svg 
                className={`w-5 h-5 mr-1 ${isSaved ? 'text-primary fill-current' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
                />
              </svg>
              {isSaved ? 'Saved' : 'Save Job'}
            </Button>
          </div>
        </div>
        
        <div className="border-t mt-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium text-gray-500">Job Type</h3>
              <p>{job.type}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Salary</h3>
              <p>${job.salary}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Posted</h3>
              <p>{job.postedDate}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Job Description */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Job Description</h2>
        <div className="prose max-w-none">
          <p className="mb-4">{job.description}</p>
          
          {/* Sample responsibilities - would be part of the job data in a real app */}
          <h3 className="text-lg font-semibold mt-6 mb-3">Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Design and implement scalable and maintainable software solutions</li>
            <li>Collaborate with cross-functional teams to define and implement new features</li>
            <li>Write clean, efficient, and well-documented code</li>
            <li>Participate in code reviews and provide constructive feedback</li>
            <li>Troubleshoot and debug issues in existing applications</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bachelor's degree in Computer Science or related field</li>
            <li>3+ years of experience in software development</li>
            <li>Proficiency in relevant programming languages and frameworks</li>
            <li>Strong problem-solving and analytical skills</li>
            <li>Excellent communication and teamwork abilities</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Competitive salary and equity package</li>
            <li>Health, dental, and vision insurance</li>
            <li>Flexible work schedule and remote work options</li>
            <li>Professional development budget</li>
            <li>Paid time off and company holidays</li>
          </ul>
        </div>
      </div>
      
      {/* Company Information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">About {job.company}</h2>
        <p className="mb-4">
          {job.company} is a leading company in the tech industry, focused on delivering innovative solutions 
          to businesses worldwide. With a diverse and talented team, we strive to create products that make 
          a difference in people's lives.
        </p>
        <a href="#" className="text-primary hover:underline">
          Learn more about {job.company}
        </a>
      </div>
      
      {/* Apply Section */}
      <div className="bg-primary bg-opacity-10 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Interested in this job?</h2>
        <p className="mb-4">Apply now and take the next step in your career journey.</p>
        <Button onClick={handleApply} isLoading={isApplying} size="lg">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobDetailsPage; 