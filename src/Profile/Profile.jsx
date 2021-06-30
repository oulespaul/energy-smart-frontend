import { useEffect, useState } from "react";
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
import Loading from "shared/components/Loading";

import { useStyles } from "./profile.styles";
import { Grid } from "@material-ui/core";
import handlePromise from "shared/handlePromise";
import getPlants from "./apis/getPlants";
import getMyOffer from "./apis/getMyOffer";
import { AlertType, useAlert } from "shared/context/alertContext";

const Profile = () => {
  const classes = useStyles();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [plants, setPlants] = useState([]);
  const [lending, setLending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useAlert();

  useEffect(() => {
    fetchPlantInUser();
    fetchAllLending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPlantInUser = async () => {
    const [plantsInUser, error] = await handlePromise(getPlants());

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การดึงข้อมูลโรงงานมีปัญหา" },
      });
    }

    setPlants(plantsInUser.data);
  };

  const fetchAllLending = async () => {
    const [allLending, error] = await handlePromise(getMyOffer());

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การดึงข้อมูลรายการขอยืมพลังงานมีปัญหา" },
      });
    }

    setLending(allLending.data);
    return setIsLoading(false);
  };

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                    {plants.map((plant, index) => (
                      <GridListTile style={{ height: 220 }} key={index}>
                        <PlantCard plant={plant} />
                      </GridListTile>
                    ))}
                  </GridList>
                </CardContent>
              </Card>
            </Container>
          </div>

          <div className={classes.listSection}>
            <Container maxWidth="lg">
              <Typography variant="h5">ข้อเสนอให้เช่าพลังงาน</Typography>

              <Paper className={classes.paper}>
                {lending.length ? (
                  lending.map(({ Record }, index) => (
                    <RequestLendingCard lending={Record} key={index} />
                  ))
                ) : (
                  <Card className={classes.emptyOfferCard}>
                    ยังไม่พบข้อเสนอ
                  </Card>
                )}
              </Paper>
            </Container>
          </div>

          <FormDialog isOpen={isFormOpen} handleClose={handleClose} />
        </>
      )}
    </>
  );
};

export default Profile;
