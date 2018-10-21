import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  }
};

class CinemaComponent extends Component {
  render() {
    const { classes, cinemas, loading, deleteCinema } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {cinemas.length
          ? cinemas.map((cinema, index) => (
              <div
                key={index}
                className="p-3 width-50-center"
                style={{
                  display: "inline-block"
                }}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      className={classes.media}
                      height="140"
                      image={cinema.poster_link}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cinema.name}
                      </Typography>
                      Seats:{" "}
                      <Typography component="h3">{cinema.seats}</Typography>
                      address:{" "}
                      <Typography component="h3">{cinema.address}</Typography>
                      <Typography component="p">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={`/edit-cinema/${cinema._id}`}>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        deleteCinema(cinema._id);
                      }}
                    >
                      REMOVE CINEMA
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default withStyles(styles)(CinemaComponent);
