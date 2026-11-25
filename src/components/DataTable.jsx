
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Rating,
  Button
} from '@mui/material'

export default function DataTable({ sismos, onVerDetalle }) {
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Epicentro / Referencia</strong></TableCell>
            <TableCell><strong>Fecha y Hora</strong></TableCell>
            <TableCell><strong>Magnitud</strong></TableCell>
            <TableCell><strong>Intensidad Visual</strong></TableCell>
            <TableCell><strong>Severidad</strong></TableCell>
            <TableCell><strong>Profundidad / Detalle</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sismos.map((sismo) => (
            <TableRow key={sismo.id}>

              <TableCell>{sismo.id}</TableCell>
              <TableCell>{sismo.epicentro}</TableCell>

              <TableCell>{sismo.tiempoTranscurrido}</TableCell>

              <TableCell>
                {sismo.magnitud.toFixed(1)} MI
              </TableCell>

              <TableCell>
                <Rating
                  value={sismo.ratingEstrellas}
                  max={5}
                  readOnly
                  size="small"
                />
              </TableCell>

              <TableCell>
                <Chip
                  label={sismo.severidad}
                  color={sismo.colorChip}
                  size="small"
                />
              </TableCell>

              <TableCell>
                  <span>{sismo.profundidadKm} km</span>
              </TableCell>
            </TableRow>
          ))}

          {sismos.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No hay sismos para mostrar.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
