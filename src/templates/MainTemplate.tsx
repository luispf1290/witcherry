import { Navigate, Route, Routes } from "react-router-dom"
import { Bebidas, Desayunos, Postres, Promos, Waffles } from "../pages"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { Menu } from "../components"


const defaultTheme = createTheme();

export const MainTemplate = () => {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Menu />
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/waffles" element={<Waffles />} />
            <Route path="/desayunos" element={<Desayunos />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/postres" element={<Postres />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/" element={<Navigate to='/Home' />} />
          </Routes>
        </Container>

      </Box>

    </ThemeProvider>
  )
}