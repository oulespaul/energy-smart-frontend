import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";

import { PlantCard } from "./components/PlantCard";
import { RequestLendingCard } from "./components/RequestLendingCard";
import { FormDialog } from "./components/FormDialog";

import { useStyles } from "./profile.styles";
import { Grid } from "@material-ui/core";

const Profile = () => {
  const classes = useStyles();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className={classes.heroSection}>
        <Container maxWidth="md">
          <Grid container justify="space-between">
            <Typography variant="h5">โรงพลังงานไฟฟ้า</Typography>

            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleFormOpen}
            >
              เพิ่มโรงงาน
            </Button>
          </Grid>

          <Card className={classes.heroCard}>
            <CardContent>
              <GridList className={classes.gridList} cols={3} spacing={24}>
                {new Array(4).fill(0).map((tile, index) => (
                  <GridListTile key={index}>
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
          <Typography variant="h5">รายการขอเช่าพลังงาน</Typography>

          <Paper className={classes.paper}>
            {new Array(10).fill(0).map((card, index) => (
              <RequestLendingCard key={index} />
            ))}
          </Paper>
        </Container>
      </div>

      <FormDialog isOpen={isFormOpen} handleClose={handleClose} />
    </>
  );
};

export default Profile;
