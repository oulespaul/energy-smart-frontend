import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";

import { PlantCard } from "./components/PlantCard";
import { RequestLendingCard } from "./components/RequestLendingCard";

import { useStyles } from "./profile.styles";

const Profile = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <Container maxWidth="md">
          <Typography variant="h5" align="start">
            โรงพลังงานไฟฟ้า
          </Typography>

          <Card className={classes.heroCard}>
            <CardContent>
              <GridList className={classes.gridList} cols={3} spacing={24}>
                {new Array(4).fill(0).map((tile) => (
                  <GridListTile key={tile}>
                    <PlantCard />
                  </GridListTile>
                ))}
              </GridList>
            </CardContent>
          </Card>
        </Container>
      </div>

      <div className={classes.listSection}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="start">
            รายการขอเช่าพลังงาน
          </Typography>

          <Paper className={classes.paper}>
            {new Array(10).fill(0).map((card) => (
              <RequestLendingCard key={card} />
            ))}
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Profile;
