import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style";
function App() {
  const classes = useStyles();
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera className={classes.photoIcon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" color="primary">
                  main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  secondary action
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      <main>
        <div className={classes.cardDiv}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container>
            {card.map((x) => {
              return(
                <Grid
                item
                className={classes.grid}
                xs={12}
                sm={6}
                md={4}
                gutterBottom
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="card-image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button size="small" color="primary">
                      view
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              )
            })}
          </Grid>
        </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Something here to give the footer a purpose! <br />
          Copyright © Your Website 2022.
        </Typography>
      </footer>
    </>
  );
}
export default App;
