import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

import { makeStyles } from "@material-ui/core/styles";

import convertTimestampToDatetime from "shared/convertTimestampToDatetime";

const useStyles = makeStyles(() => ({
  cardActions: {
    justifyContent: "end",
    marginTop: "8px",
  },
  confirmButton: {
    backgroundColor: "#a1c0ae",
    color: "#ffffff",
  },
}));

const OfferCard = (props) => {
  const classes = useStyles();
  const { offer, handleConfirm } = props;

  const handleSubmit = () => {
    handleConfirm({
      confirmOfferId: offer.offer_id,
      confirmCreditValue: offer.credit_value,
      confirmOfferVolume: offer.offer_volume,
    });
  };

  return (
    <>
      <CardContent>
        <Typography paragraph>โรงงานที่เสนอ: {offer.offer_plant_id}</Typography>

        <Typography paragraph>
          ปริมาณที่เสนอ: {offer.offer_volume} MW
        </Typography>

        <Typography paragraph>เครดิตที่เสนอ: {offer.credit_value}</Typography>

        <Typography paragraph>
          วันที่เสนอ: {convertTimestampToDatetime(offer.offer_timestamp)}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          variant="contained"
          className={classes.confirmButton}
          onClick={handleSubmit}
        >
          ยืนยันข้อเสนอนี้
        </Button>
      </CardActions>

      <Divider />
    </>
  );
};

export default OfferCard;
