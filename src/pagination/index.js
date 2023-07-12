import React from 'react';
import './index.css'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button onClick={handlePrevious}>
                    Previous
                </button>
            )}
            <ul>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <li key={pageNum} className={currentPage === pageNum ? 'active' : ''}>
                        <button onClick={() => handlePageChange(pageNum)}>{pageNum}</button>
                    </li>
                ))}
            </ul>
            {currentPage < totalPages && (
                <button onClick={handleNext}>
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
