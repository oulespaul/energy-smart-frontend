import { useState, useEffect } from "react";

import getHistory from "./apis/getHistory";

import Timeline from "@material-ui/lab/Timeline";
import HistoryItem from "./components/HistoryItem";
import Loading from "shared/components/Loading";
import handlePromise from "shared/handlePromise";
import { AlertType, useAlert } from "shared/context/alertContext";
import Container from "@material-ui/core/Container";
import getPlants from "Profile/apis/getPlants";

const History = () => {
  const { dispatch } = useAlert();
  const [histories, setHistories] = useState([]);
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlantInUser();
    fetchHistory();
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

  const fetchHistory = async () => {
    const [rentalHistory, error] = await handlePromise(getHistory());

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การประวัติการทำรายการมีปัญหา" },
      });
    }

    setHistories(rentalHistory.data);
    return setIsLoading(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container maxWidth="md">
      <Timeline align="alternate">
        {histories.map(({ Record }, index) => (
          <HistoryItem history={Record} plants={plants} key={index} />
        ))}
      </Timeline>
    </Container>
  );
};

export default History;
