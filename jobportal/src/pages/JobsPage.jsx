import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import JobFilter from '../components/common/JobFilter';
import JobCard from '../components/common/JobCard';
import Pagination from '../components/common/Pagination';
import { jobs } from '../utils/mockData';

const JobsPage = () => {
  const location = useLocation();
  const initialSearchParams = location.state?.searchParams || { keyword: '', location: '' };
  
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [filters, setFilters] = useState({
    jobType: [],
    experienceLevel: [],
    salary: ''
  });
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const jobsPerPage = 5;
  
  // Apply search and filters
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = [...jobs];
      
      // Apply search
      if (searchParams.keyword) {
        const keyword = searchParams.keyword.toLowerCase();
        results = results.filter(job => 
          job.title.toLowerCase().includes(keyword) || 
          job.company.toLowerCase().includes(keyword) || 
          job.description.toLowerCase().includes(keyword) ||
          job.tags.some(tag => tag.toLowerCase().includes(keyword))
        );
      }
      
      if (searchParams.location) {
        const location = searchParams.location.toLowerCase();
        results = results.filter(job => 
          job.location.toLowerCase().includes(location)
        );
      }
      
      // Apply filters
      if (filters.jobType.length > 0) {
        results = results.filter(job => 
          filters.jobType.includes(job.type)
        );
      }
      
      if (filters.experienceLevel.length > 0) {
        results = results.filter(job => 
          filters.experienceLevel.includes(job.experienceLevel)
        );
      }
      
      if (filters.salary) {
        const [min, max] = filters.salary.split('-').map(Number);
        results = results.filter(job => {
          const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, ''));
          return jobSalary >= min && jobSalary <= max;
        });
      }
      
      setFilteredJobs(results);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  }, [searchParams, filters]);
  
  const handleSearch = (params) => {
    setSearchParams(params);
  };
  
  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };
  
  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Find Jobs</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="md:w-1/4">
            <JobFilter onFilter={handleFilter} />
          </div>
          
          {/* Job Listings */}
          <div className="md:w-3/4">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                {filteredJobs.length === 0 ? (
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search or filter criteria to find more results.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
                    </p>
                    
                    {currentJobs.map(job => (
                      <JobCard key={job.id} job={job} />
                    ))}
                    
                    {totalPages > 1 && (
                      <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage; 