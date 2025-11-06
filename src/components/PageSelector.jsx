import { useState, useCallback, useMemo } from 'react';
import Checkbox from './Checkbox';

/**
 * Page Selector Component
 * A modal-style component for selecting multiple pages with "All pages" toggle
 * Pixel-perfect implementation matching Figma design specs
 */
const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  // Check if all pages are selected
  const allPagesSelected = useMemo(() => {
    return Object.values(selectedPages).every(value => value === true);
  }, [selectedPages]);

  // Handle individual page selection
  const handlePageChange = useCallback((page) => {
    setSelectedPages(prev => ({
      ...prev,
      [page]: !prev[page],
    }));
  }, []);

  // Handle "All pages" toggle
  const handleAllPagesChange = useCallback(() => {
    const newValue = !allPagesSelected;
    setSelectedPages({
      page1: newValue,
      page2: newValue,
      page3: newValue,
      page4: newValue,
    });
  }, [allPagesSelected]);

  // Handle Done button click
  const handleDone = useCallback(() => {
    const selected = Object.entries(selectedPages)
      .filter(([, isSelected]) => isSelected)
      .map(([page]) => page);
    
    console.log('Selected pages:', selected);
    // Add your logic here (e.g., close modal, submit data, etc.)
  }, [selectedPages]);

  return (
    <div
      className="bg-white rounded-lg flex flex-col items-center"
      style={{
        padding: '30px 15px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        width: 'fit-content',
      }}
    >
      {/* All pages checkbox */}
      <div className="mb-4">
        <Checkbox
          id="all-pages"
          label="All pages"
          checked={allPagesSelected}
          onChange={handleAllPagesChange}
        />
      </div>

      {/* Divider */}
      <div
        className="bg-gray-200"
        style={{
          width: '370px',
          height: '1px',
          marginBottom: '16px',
        }}
      />

      {/* Individual page checkboxes */}
      <div className="flex flex-col gap-3 mb-4">
        <Checkbox
          id="page-1"
          label="Page 1"
          checked={selectedPages.page1}
          onChange={() => handlePageChange('page1')}
        />
        <Checkbox
          id="page-2"
          label="Page 2"
          checked={selectedPages.page2}
          onChange={() => handlePageChange('page2')}
        />
        <Checkbox
          id="page-3"
          label="Page 3"
          checked={selectedPages.page3}
          onChange={() => handlePageChange('page3')}
        />
        <Checkbox
          id="page-4"
          label="Page 4"
          checked={selectedPages.page4}
          onChange={() => handlePageChange('page4')}
        />
      </div>

      {/* Divider before button */}
      <div
        className="bg-gray-200"
        style={{
          width: '370px',
          height: '1px',
          marginBottom: '16px',
        }}
      />

      {/* Done button */}
      <button
        onClick={handleDone}
        className="transition-opacity hover:opacity-90 active:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        style={{
          width: '370px',
          height: '46px',
          borderRadius: '4px',
          padding: '10px 20px',
          backgroundColor: '#FFCE22',
          fontFamily: 'Montserrat',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '130%',
          color: '#1F2128',
          letterSpacing: '0px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Done
      </button>
    </div>
  );
};

export default PageSelector;
