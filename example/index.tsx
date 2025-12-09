import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactRatingFloat from '../src/ReactRatingFloat';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Rating Float Example</h1>
      <div style={{ background: '#f0f0f0', padding: '20px', margin: '10px 0' }}>
        <h3>Rating: 3.7 / 5</h3>
        <ReactRatingFloat rate={3.7} total={5} />
      </div>
      <div style={{ background: '#f0f0f0', padding: '20px', margin: '10px 0' }}>
        <h3>Rating: 4.2 / 5 (Custom Colors)</h3>
        <ReactRatingFloat
          rate={4.2}
          total={5}
          activeColor="#ff6b6b"
          inactiveColor="#ddd"
          raterDim={30}
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
