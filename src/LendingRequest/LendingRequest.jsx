import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AlertType, useAlert } from "shared/context/alertContext";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import Loading from "shared/components/Loading";
import handlePromise from "shared/handlePromise";
import getPlantById from "./apis/getPlantById";
import postCreateLendingRequest from "./apis/postCreateLendingRequest";

import { PlantDetailCard } from "./components/PlantDetailCard";
import { RequestDetailCard } from "./components/RequestDetailCard";

import { useStyles } from "./lendingRequest.styles";
import { useHistory } from "react-router-dom";

const LendingRequest = () => {
  const classes = useStyles();
  const [plant, setPlant] = useState({});
  const [volume, setVolume] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { param1: plantId } = useParams();
  const { dispatch } = useAlert();
  const history = useHistory();

  useEffect(() => {
    fetchPlantById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPlantById = async () => {
    const [plant, error] = await handlePromise(getPlantById(plantId));

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การดึงข้อมูลโรงงานมีปัญหา" },
      });
    }

    setPlant(plant.data);
    return setIsLoading(false);
  };

  const handleSubmit = async () => {
    const [, error] = await handlePromise(
      postCreateLendingRequest(plant, volume)
    );

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "สร้างรายการไม่สำเร็จ" },
      });
    }

    dispatch({
      type: AlertType.SUCCESS,
      payload: { message: "สร้างรายการสำเร็จ" },
    });
    return history.goBack();
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
              src={plant.imageUrl}
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
