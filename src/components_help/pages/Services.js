import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/img-1.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Services() {
  const classes = useStyles();

  return (
    <div className="Services">
      <AppBar className={classes.appBar} position="static">
        {" "}
      </AppBar>
      <Box className={classes.hero}>
        <Box>AUTO AYUDA</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Art??culos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/hotline.jpg"
                  title="Hot lines"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lineas de emergencia
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <a
                      href="https://home.kpmg/co/es/home/misc/international-hotline-numbers.html"
                      target="blank"
                    >
                      Argentina:800 5555 5522, Brazil:0800 891 7391, Canada:866
                      246 9224, Colombia:800 5555 5522, Mexico:001 800 514 3716,
                      Espa??a:800 5555 5522, Estados Unidos:866 246 9224.
                    </a>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/s3.png"
                  title="Origen enfermedades"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Las Enfermedades Mentales Y Su Origen
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <a
                      href="https://www.clinicasanpablo.co/educando/hablemos-de-salud-mental/las-enfermedades-mentales-y-su-origen"
                      target="blank"
                    >
                      Una persona que sufre una enfermedad mental no puede
                      controlar sus s??ntomas por s?? sola debido a que su origen
                      es algo org??nico y que no obedece a su voluntad de querer
                      tenerla o no.
                    </a>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://drgermanduarte.com/wp-content/uploads/2020/09/duarte.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr. Germ??n Duarte Hern??ndez
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Noviembre 1, 2019
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/s2.jpg"
                  title="Como apoyar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Depresi??n: apoyar a un familiar o a un amigo
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <a href="https://acortar.link/yb8Ehy" target="blank">
                      Ayudar a una persona con depresi??n puede ser todo un
                      desaf??o. Si una persona cercana sufre depresi??n, es
                      posible que sientas impotencia y que te preguntes qu??
                      debes hacer.
                    </a>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://www.mayoclinic.org/~/media/386AC346D62D46A4944E0923CAF00D28.svg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      MAYO CLINIC
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Noviembre 28, 2018
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/s1.jpg"
                  title="Autoestima"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ??Qui??n dir??as que es tu peor enemigo?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <a
                      href="https://habilidadsocial.com/aumentar-autoestima-ciencia/"
                      target="blank"
                    >
                      Sin autoestima, nuestros temores nos encierran en la zona
                      de confort, nos castigan y nos impiden luchar por lo que
                      realmente queremos.
                    </a>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://secure.gravatar.com/avatar/170e0e35091f3a2367c1c1815362bad5?s=170&d=mm&r=g" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pau Forner Navarro
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Noviembre 10, 2016
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Services;

//Services equivale a articulos
