const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  
  // Determine which page numbers to show
  const showMaxPages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(showMaxPages / 2));
  let endPage = Math.min(totalPages, startPage + showMaxPages - 1);
  
  // Adjust if at the edges
  if (endPage - startPage + 1 < showMaxPages) {
    startPage = Math.max(1, endPage - showMaxPages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-l-md border ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        
        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-1 border-t border-b bg-white text-gray-700 hover:bg-gray-50"
            >
              1
            </button>
            {startPage > 2 && (
              <span className="px-2 py-1 border-t border-b bg-white text-gray-700">
                ...
              </span>
            )}
          </>
        )}
        
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 border-t border-b ${
              currentPage === number
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}
        
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-2 py-1 border-t border-b bg-white text-gray-700">
                ...
              </span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-1 border-t border-b bg-white text-gray-700 hover:bg-gray-50"
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-r-md border ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination; 