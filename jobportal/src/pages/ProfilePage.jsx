import { useState } from 'react';
import Button from '../components/common/Button';
import { users } from '../utils/mockData';

const ProfilePage = () => {
  // For demo, we use the first user in our mockData
  const [user] = useState(users[0]);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: '(123) 456-7890',
    location: 'San Francisco, CA',
    about: 'Experienced frontend developer with a passion for creating intuitive user interfaces. Proficient in React, TypeScript, and modern CSS frameworks.'
  });
  
  const [resume, setResume] = useState(user.resume);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSaveProfile = () => {
    // In a real app, this would save to an API
    setIsEditing(false);
  };
  
  // Tabs for different sections of the profile
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'resume', label: 'Resume' },
    { id: 'applications', label: 'Applications' },
    { id: 'saved', label: 'Saved Jobs' },
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-primary p-6 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-6 mb-4 md:mb-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary text-3xl font-bold">
                {user.name.charAt(0)}
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-lg">{formData.location}</p>
            </div>
            {!isEditing && (
              <Button 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </div>
        
        {/* Tabs navigation */}
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab content */}
        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              {isEditing ? (
                <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="input"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="input"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        className="input"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      About
                    </label>
                    <textarea
                      name="about"
                      rows="4"
                      className="input"
                      value={formData.about}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button type="submit">
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                      <p className="mt-1">{formData.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="mt-1">{formData.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                      <p className="mt-1">{formData.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="mt-1">{formData.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">About</h3>
                    <p className="mt-1">{formData.about}</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Resume Tab */}
          {activeTab === 'resume' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Resume</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Upload Resume
                  </Button>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
              </div>
              
              {/* Skills */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Experience */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <Button variant="ghost" size="sm">
                    Add
                  </Button>
                </div>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{exp.position}</h4>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Education */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <Button variant="ghost" size="sm">
                    Add
                  </Button>
                </div>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{edu.degree}</h4>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div>
              <h2 className="text-xl font-bold mb-6">Job Applications</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-2">You haven't applied to any jobs yet.</p>
                <p className="mb-4">Start exploring jobs and apply to positions that match your skills and interests.</p>
                <Button as="a" href="/jobs">
                  Browse Jobs
                </Button>
              </div>
            </div>
          )}
          
          {/* Saved Jobs Tab */}
          {activeTab === 'saved' && (
            <div>
              <h2 className="text-xl font-bold mb-6">Saved Jobs</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-2">You haven't saved any jobs yet.</p>
                <p className="mb-4">Save jobs that interest you to revisit them later.</p>
                <Button as="a" href="/jobs">
                  Browse Jobs
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 