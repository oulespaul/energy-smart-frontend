import { useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import { OfferCard } from "../offerCard";

import { makeStyles } from "@material-ui/core/styles";

import convertTimestampToDatetime from "shared/convertTimestampToDatetime";
import handlePromise from "shared/handlePromise";
import patchConfirmOffer from "../../apis/patchCreateOfferConfirm";
import { AlertType, useAlert } from "shared/context/alertContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "32px",
    padding: "16px",
  },
  cardActions: {
    justifyContent: "end",
    marginTop: "8px",
  },
}));

const RequestLendingCard = (props) => {
  const classes = useStyles();
  const { lending } = props;
  const [expanded, setExpanded] = useState(false);
  const { dispatch } = useAlert();
  const history = useHistory();

  const handleConfirmOffer = async (offer) => {
    const [, error] = await handlePromise(
      patchConfirmOffer(lending.request_id, offer)
    );

    if (error) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "การยืนยันรายการไม่สำเร็จ" },
      });
    }

    dispatch({
      type: AlertType.SUCCESS,
      payload: { message: "การยืนยันรายการสำเร็จ" },
    });

    return history.goBack();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">
          โรงพลังงานไฟฟ้า: {lending.request_plant_id}
        </Typography>

        <Typography>ปริมาณไฟฟ้าที่ต้องการ: {lending.request_volume}</Typography>

        <Typography>จำนวนข้อเสนอ: {lending.lending_offer.length}</Typography>

        <Typography gutterBottom>
          วันที่ทำรายการ:{" "}
          {convertTimestampToDatetime(lending.request_timestamp)}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions className={classes.cardActions}>
        <Button
          onClick={handleExpandClick}
          size="small"
          variant="contained"
          color="primary"
        >
          ดูข้อเสนอ
        </Button>
      </CardActions>

      <Divider />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {lending.lending_offer.map((offer, index) => (
          <OfferCard
            offer={offer}
            handleConfirm={handleConfirmOffer}
            key={index}
          />
        ))}
      </Collapse>
    </Card>
  );
};

export default RequestLendingCard;
