import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = React.useState<'welcome' | 'login'>('welcome');

  if (user) {
    return <MainPage />;
  }

  return (
    <>
      {currentPage === 'welcome' && (
        <WelcomePage onLoginClick={() => setCurrentPage('login')} />
      )}
      {currentPage === 'login' && (
        <LoginPage onBack={() => setCurrentPage('welcome')} />
      )}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
