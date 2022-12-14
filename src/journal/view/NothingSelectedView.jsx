import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animae__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 112px )",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }} //
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "#fff" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="#fff" variant="h5">
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
