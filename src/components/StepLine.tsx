import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";

import { Grid, Typography } from "@mui/material";
import "./stepLine.css";

export const StepLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img src="" alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Elige la base de tu waffle:
          </Typography>
          <Typography>
            <ul className="flex-list">
              <li>Vainilla</li>
              <li>Chocolate</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img src="" alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Selecciona topping 1:
          </Typography>
          <Typography>
            <div>
              <p>Mermeladas</p>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ paddingLeft: "0px !important" }}>
                  <ul>
                    <li>Frambuesa</li>
                    <li>Fresa</li>
                    <li>Zarzamora</li>
                    <li>Mora Azul</li>
                    <li>Cereza</li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul>
                    <li>Mango</li>
                    <li>Frambuesa con Granada</li>
                    <li>Arando con Moras</li>
                    <li>Manzana con canela</li>
                  </ul>
                </Grid>
              </Grid>
            </div>
            <div>
              <p>Otros</p>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ paddingLeft: "0px !important" }}>
                  <ul>
                    <li>Cajeta</li>
                    <li>Nutella</li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul>
                    <li>Crema de Cacahuate</li>
                    <li>Queso Crema</li>
                  </ul>
                </Grid>
              </Grid>
            </div>
            <p>Pregunta por las mermeladas de temporada</p>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img src="" alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Selecciona topping 2:
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ paddingLeft: "0px !important" }}>
                <ul>
                  <li>Durazno</li>
                  <li>Platano</li>
                  <li>Fresa</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul>
                  <li>Frambuesa</li>
                  <li>Zarzamora</li>
                  <li>Mora Azul</li>
                </ul>
              </Grid>
            </Grid>
            Pregunta por la fruta de temporada
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img src="" alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Elige un jarabe:
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ paddingLeft: "0px !important" }}>
                <ul>
                  <li>Miel</li>
                  <li>Maple</li>
                  <li>Lechera</li>
                  <li>Chocolate</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul>
                  <li>Crema Batida</li>
                  <li>Rompope</li>
                  <li>Baileys</li>
                  <li>Amaretto</li>
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img src="" alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Elige un polvo de estrellas:
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ paddingLeft: "0px !important" }}>
                <ul>
                  <li>Nuez</li>
                  <li>Almendra</li>
                  <li>Cacahuate</li>
                  <li>Avellana</li>
                  <li>Chispas</li>
                  <li>Arandanos</li>
                  <li>Granola</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul>
                  <li>Granillo Chocolate</li>
                  <li>Gomitas</li>
                  <li>Malvaviscos</li>
                  <li>Lunetas</li>
                  <li>Amaranto</li>
                  <li>Oreo</li>
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
