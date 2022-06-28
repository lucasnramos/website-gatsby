import React from "react";
import { Grid, Typography } from "@mui/material"

export default function Header() {
  return (
    <Grid container alignItems="center" alignContent="center">
      <Grid item sm={8}>
        <Typography variant="h3" component="h1">
          Lucas Nogueira Ramos
        </Typography>
      </Grid>
      <Grid item sm={4}>
          <a href="mailto:contact@lucasnramos.com">contact@lucasnramos.com</a> |{" "}
          <a
            href="https://www.linkedin.com/in/lucas-nogueira-ramos/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/lucasnramos"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
      </Grid>
    </Grid>
  )
}
