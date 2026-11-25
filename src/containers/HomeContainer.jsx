
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid
} from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import ScienceIcon from '@mui/icons-material/Science'

export default function HomeContainer() {
  const integrantes = [
    {
      nombre: 'Diego Diaz',
      rol: 'Estudiante USM',
      correo: 'ddiazec@usm.cl'
    },
    {
      nombre: 'Francisco Javier Angel',
      rol: 'Estudiante USM',
      correo: 'fangel@usm.cl'
    }
  ]

  return (
    <Container maxWidth="lg" className="py-5">
      <Box textAlign="center" mb={5}>
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            width: 70,
            height: 70,
            margin: '0 auto',
            mb: 2
          }}
        >
          <PublicIcon fontSize="large" />
        </Avatar>

        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Sismos Chile
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Información sísmica procesada mediante una arquitectura Frontend y BFF
        </Typography>

        <Chip
          icon={<ScienceIcon />}
          label="Proyecto académico"
          color="primary"
          sx={{ mt: 2 }}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                ¿Qué es este proyecto?
              </Typography>

              <Typography color="text.secondary">
                Sismos Chile es una aplicación web que permite visualizar
                información sobre eventos sísmicos. Los datos son procesados
                por un Backend for Frontend (BFF), que entrega la información
                al usuario mediante una interfaz desarrollada en React.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                API y arquitectura
              </Typography>

              <Typography color="text.secondary">
                El proyecto utiliza una API pública de información sísmica.
                El BFF, desarrollado con NestJS, se encarga de consumir y
                procesar los datos antes de entregarlos al Frontend.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={5}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Integrantes
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {integrantes.map((integrante, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: 'secondary.main',
                      width: 60,
                      height: 60,
                      margin: '0 auto',
                      mb: 2
                    }}
                  >
                    {integrante.nombre.charAt(0)}
                  </Avatar>

                  <Typography variant="h6">
                    {integrante.nombre}
                  </Typography>

                  <Typography color="text.secondary">
                    {integrante.rol}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {integrante.correo}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
