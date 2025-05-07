import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const PostJobPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
    tags: ''
  });
  
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would send data to an API
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/jobs');
      // Show success message, in a real app you would use a notification system
      alert('Job posted successfully!');
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Post a Job</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Job Details */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title*
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="input"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="input"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location*
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="input"
                        placeholder="City, State or Remote"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Job Type*
                      </label>
                      <select
                        id="type"
                        name="type"
                        className="input"
                        value={formData.type}
                        onChange={handleChange}
                        required
                      >
                        {jobTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                        Salary Range*
                      </label>
                      <input
                        type="text"
                        id="salary"
                        name="salary"
                        className="input"
                        placeholder="e.g. $50,000 - $70,000"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                      Tags/Skills (comma separated)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      className="input"
                      placeholder="e.g. React, JavaScript, Remote"
                      value={formData.tags}
                      onChange={handleChange}
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Add skills or keywords that will help candidates find your job.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Job Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description*
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="6"
                      className="input"
                      placeholder="Provide a detailed description of the job role and responsibilities."
                      value={formData.description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                      Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows="4"
                      className="input"
                      placeholder="List the qualifications, skills, and experience required for this job."
                      value={formData.requirements}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">
                      Benefits
                    </label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      rows="4"
                      className="input"
                      placeholder="Describe the benefits, perks, and advantages of working at your company."
                      value={formData.benefits}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  fullWidth
                  size="lg"
                >
                  Post Job
                </Button>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  By posting this job, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobPage; 