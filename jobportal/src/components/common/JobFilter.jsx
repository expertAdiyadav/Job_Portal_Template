import { useState } from 'react';

const JobFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    jobType: [],
    experienceLevel: [],
    salary: '',
  });

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'];
  const salaryRanges = [
    { label: 'Any', value: '' },
    { label: '$0 - $50,000', value: '0-50000' },
    { label: '$50,000 - $100,000', value: '50000-100000' },
    { label: '$100,000 - $150,000', value: '100000-150000' },
    { label: '$150,000+', value: '150000-999999' },
  ];

  const handleJobTypeChange = (type) => {
    const newJobTypes = filters.jobType.includes(type)
      ? filters.jobType.filter(item => item !== type)
      : [...filters.jobType, type];
    
    const newFilters = { ...filters, jobType: newJobTypes };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleExperienceChange = (level) => {
    const newExperienceLevels = filters.experienceLevel.includes(level)
      ? filters.experienceLevel.filter(item => item !== level)
      : [...filters.experienceLevel, level];
    
    const newFilters = { ...filters, experienceLevel: newExperienceLevels };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleSalaryChange = (value) => {
    const newFilters = { ...filters, salary: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    const newFilters = {
      jobType: [],
      experienceLevel: [],
      salary: '',
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button 
          onClick={clearAllFilters}
          className="text-primary text-sm hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Job Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Job Type</h4>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={`job-type-${type}`}
                checked={filters.jobType.includes(type)}
                onChange={() => handleJobTypeChange(type)}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor={`job-type-${type}`} className="ml-2 text-sm text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Level Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Experience Level</h4>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <div key={level} className="flex items-center">
              <input
                type="checkbox"
                id={`exp-${level}`}
                checked={filters.experienceLevel.includes(level)}
                onChange={() => handleExperienceChange(level)}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor={`exp-${level}`} className="ml-2 text-sm text-gray-700">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Range Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-3">Salary Range</h4>
        <select
          value={filters.salary}
          onChange={(e) => handleSalaryChange(e.target.value)}
          className="input"
        >
          {salaryRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobFilter; 