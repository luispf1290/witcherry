import {
  AppBar,
  Box,
  createTheme,
  Divider,
  IconButton,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { dishElements, propsDish } from "../data/dataDish";
import { Title } from "../components";
import arrow from "../assets/icons/arrow-witcherry.svg";
import "./templates.css";

const defaultTheme = createTheme();
export const DetailTemplate = () => {
  const { id } = useParams();

  const { name, tipo, ingredientes, img, recomendaciones }: propsDish =
    dishElements.find((platillo) => platillo.id == parseInt(id!))!;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <AppBar className="menu-detail" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={arrow} alt="arrow" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <div className="card-detail">
          <p style={{ textAlign: "center" }} className="title-red">
            Waffles
          </p>
          <div style={{ textAlign: "center" }}>
            <h1 className="title-big">{name}</h1>
            <p className="subtitle-red">{tipo}</p>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "35px",
              marginBottom: "50px",
            }}
          >
            <img src={img} alt="platillo" />
          </div>
          <div className="container-ingredients">
            <Title title={"Frutos prohibidos"} />

            <div>
              <ul className="gray-p list-detail">
                {ingredientes.map((ingrediente) => (
                  <li style={{ display: "flex" }}>
                    <div style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                      {ingrediente}
                    </div>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ background: "#CACACA" }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: "35px" }}>
              <p className="small-gray-100">Recomendación</p>
              <ul className="small-gray-100 list-detail">
                {recomendaciones.map((recomendacion) => (
                  <li style={{ display: "flex" }}>
                    <div style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                      {recomendacion}
                    </div>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ background: "#CACACA" }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};
