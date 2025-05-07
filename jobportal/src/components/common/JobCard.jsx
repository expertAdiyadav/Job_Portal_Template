import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-2">{job.company}</p>
          <p className="text-gray-500 mb-3">{job.location}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {job.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-gray-500 text-sm space-x-4">
            <span>{job.type}</span>
            <span>•</span>
            <span>${job.salary}</span>
            <span>•</span>
            <span>Posted {job.postedDate}</span>
          </div>
        </div>
        
        {job.companyLogo && (
          <div className="w-16 h-16 flex-shrink-0">
            <img 
              src={job.companyLogo} 
              alt={`${job.company} logo`} 
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <p className="text-sm text-gray-500 line-clamp-1">
          {job.description.substring(0, 120)}...
        </p>
        <Link to={`/jobs/${job.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard; 