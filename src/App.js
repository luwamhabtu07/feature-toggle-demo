// src/App.js
import React from 'react';
import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <h1>Feature Toggle Demo</h1>
      
      {/* Normal Test Cases */}
      <FeatureToggle isEnabled={true} featureName="Search" />
      <FeatureToggle isEnabled={false} featureName="Comments" />
      <FeatureToggle isEnabled={true} featureName="Live Chat" />

      {/* Edge Test Cases */}
      <FeatureToggle isEnabled={false} featureName="" />
      <FeatureToggle isEnabled={true} featureName={123} />
      <FeatureToggle isEnabled={null} featureName="Payments" />
    </div>
  );
}

export default App;
