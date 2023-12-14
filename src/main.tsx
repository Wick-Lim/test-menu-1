import { ThemeProvider } from '@emotion/react'
import { AppBar, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <style>{`
        html, body, #root {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
      <AppBar position='sticky' color="default" elevation={1}>
        <Toolbar>
          {App.title}
        </Toolbar>
      </AppBar>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
