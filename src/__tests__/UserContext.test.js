import { render, screen } from '@testing-library/react';
import { UserProvider, UserContext } from '../UserContext';
import React from 'react';

// Summary: This test verifies that the `logout` function in the `UserContext` 
// correctly clears user data from both the context and `localStorage`.

describe('UserContext logout function', () => {
  it('should remove user data from context and clear localStorage', () => {

    // Create a test component that consumes the UserContext
    const TestComponent = () => {
      const { user, logout, setUser } = React.useContext(UserContext);

      React.useEffect(() => {
        setUser({ email: 'user_name@gmail.com' });

        logout();
      }, [setUser, logout]);

      // Render user email if user is present, otherwise show 'No User'
      return React.createElement('div', null, user ? user.email : 'No User');
    };

    // Render the TestComponent within the UserProvider context
    render(
      React.createElement(UserProvider, null, 
        React.createElement(TestComponent, null)
      )
    );

    // Check if 'No User' is displayed, meaning user data was cleared from context
    expect(screen.getByText('No User')).toBeInTheDocument();

    // Ensure that localStorage does not contain any user data after logout
    expect(localStorage.getItem('user')).toBeNull();
  });
});


