import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#fee', color: '#c00', border: '2px solid #c00', margin: '10px' }}>
          <h3>Ein Fehler ist aufgetreten</h3>
          <pre style={{ fontSize: '12px' }}>{this.state.error?.message}</pre>
          <button
            onClick={() => window.location.href = '/'}
            style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
          >
            Zurück zur Startseite
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
