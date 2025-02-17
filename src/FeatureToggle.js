// src/FeatureToggle.js
import React from 'react';

// Functional Component with Conditional Rendering
function FeatureToggle({ isEnabled, featureName }) {
  return (
    <div>
      {isEnabled ? (
        <p>{featureName} is enabled</p>
      ) : (
        <p>Feature {featureName} is disabled</p>
      )}
    </div>
  );
}

export default FeatureToggle;
