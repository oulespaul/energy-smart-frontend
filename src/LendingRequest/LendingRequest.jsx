import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "shared/components/Loading";
import handlePromise from "shared/handlePromise";
import getPlantById from "./apis/getPlantById";
import postCreateLendingRequest from "./apis/postCreateLendingRequest";

import { PlantDetailCard } from "./components/PlantDetailCard";
import { RequestDetailCard } from "./components/RequestDetailCard";

import { useStyles } from "./lendingRequest.styles";

const LendingRequest = () => {
  const classes = useStyles();
  const [plant, setPlant] = useState({});
  const [volume, setVolume] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { param1: plantId } = useParams();

  useEffect(() => {
    fetchPlantById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPlantById = async () => {
    const [plant, error] = await handlePromise(getPlantById(plantId));

    if (error) {
      return;
    }

    setPlant(plant.data);
    return setIsLoading(false);
  };

  const handleSubmit = async () => {
    const [requestLending, error] = await handlePromise(
      postCreateLendingRequest(plant, volume)
    );

    if (error) {
      alert(error);
      return;
    }

    alert("success", requestLending.data);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <div className={classes.bannerGrid}>
        {" "}
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Image
              onClick={() => console.log("onClick")}
              src="https://source.unsplash.com/random"
              aspectRatio={4 / 3}
              style={{ borderRadius: "1rem" }}
              imageStyle={{ borderRadius: "1rem" }}
            />
          </Grid>

          <Grid item md={8}>
            <PlantDetailCard plant={plant} />
          </Grid>

          <Grid item md={12}>
            <RequestDetailCard
              handleValue={setVolume}
              handleSubmit={handleSubmit}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default LendingRequest;
