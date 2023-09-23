import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Team from './scenes/team/Team';
import Contacts from './scenes/contacts/Contacts';
import Invoices from './scenes/invoice/Invoice'
import Form from './scenes/form/Form'
import Calender from './scenes/calender/Calender';
import FAQ from './scenes/faq/Faq'
import Bar from './scenes/charts/Bar';
import Pie from './scenes/charts/Pie'
import Line from './scenes/charts/Line';
import Geography from './scenes/charts/Geography';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoice' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calender' element={<Calender />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
