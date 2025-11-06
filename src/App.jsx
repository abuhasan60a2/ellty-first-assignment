import PageSelector from './components/PageSelector';

/**
 * Main App Component
 * Renders the PageSelector component centered on the page
 */
function App() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#F5F5F5',
      }}
    >
      <PageSelector />
    </div>
  );
}

export default App;
