import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { AlertType, useAlert } from "shared/context/alertContext";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import handlePromise from "shared/handlePromise";
import Loading from "shared/components/Loading";
import { OfferDetailCard } from "./components/OfferDetailCard";
import getLendingById from "./apis/getLendingById";
import getPlants from "../Profile/apis/getPlants";
import postCreateLendingOffer from "./apis/postCreateLendingOffer";

import { useStyles } from "./lendingOffer.styles";

const LendingOffer = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [plants, setPlants] = useState([]);
  const [lending, setLending] = useState();
  const { param1: trxId } = useParams();
  const { dispatch } = useAlert();

  useEffect(() => {
    fetchLendingById();
    fetchPlantInUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLendingById = async () => {
    const [lendingRes, error] = await handlePromise(getLendingById(trxId));

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การดึงข้อมูลรายการมีปัญหา" },
      });
    }

    setLending(lendingRes.data.response);

    return setIsLoading(false);
  };

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

  const createOffer = async (offer) => {
    const [, error] = await handlePromise(postCreateLendingOffer(offer));

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การยื่นข้อเสนอไม่สำเร็จ" },
      });
    }

    dispatch({
      type: AlertType.SUCCESS,
      payload: { message: "การยื่นข้อเสนอสำเร็จ" },
    });
    return history.goBack();
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <div className={classes.bannerGrid}>
        {" "}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="90vh"
        >
          <OfferDetailCard
            handleSubmitOffer={createOffer}
            lendingRequest={lending}
            plants={plants}
          />
        </Box>
      </div>
    </Container>
  );
};

export default LendingOffer;
