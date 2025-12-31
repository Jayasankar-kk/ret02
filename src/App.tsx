import { HashRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import AnalysisPage from './pages/AnalysisPage';
import AnnotationPage from './pages/AnnotationPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/annotate" element={<AnnotationPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
