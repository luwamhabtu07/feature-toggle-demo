# Feature Toggle Demo in React

## Overview
A simple React project demonstrating feature toggling using props without state management.

## Features
- Conditional rendering based on `isEnabled` prop
- Reusable `FeatureToggle` component
- Multiple test cases (normal and edge cases)

## Installation
1. Clone the repository
2. Run `npm install`
3. Start the development server with `npm start`

## Test Cases Demonstrated
### ✅ Normal Cases:
- `Search` enabled
- `Comments` disabled
- `Live Chat` enabled

### ⚠️ Edge Cases:
- Empty `featureName`
- Non-string `featureName` (e.g., numbers)
- Invalid `isEnabled` value (e.g., `null`)

