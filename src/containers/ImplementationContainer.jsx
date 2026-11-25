
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Box
} from '@mui/material'

import { useData } from '../context/DataContext'
import DataTable from '../components/DataTable'

export default function ImplementationContainer() {
  const { data, loading, error, refreshData } = useData()

  return (
    <Container maxWidth="xl" className="py-5">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Implementación
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Consulta los últimos eventos sísmicos obtenidos desde nuestro BFF.
      </Typography>

      <Button
        variant="contained"
        onClick={() => refreshData('/sismos')}
        disabled={loading}
        sx={{ mb: 3 }}
      >
        Actualizar sismos
      </Button>

      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && (
        <DataTable
          sismos={data}
          onVerDetalle={(sismo) => console.log(sismo)}
        />
      )}
    </Container>
  )
}
