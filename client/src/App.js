import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing, Auth, ProtectedRoute } from './pages';
import {
  AddJob,
  AllJobs,
  Stats,
  Profile,
  SharedLayout,
  Overview,
  Settings
} from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/" element={<Auth />} />
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
