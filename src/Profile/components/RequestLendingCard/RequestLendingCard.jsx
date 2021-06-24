import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

import convertTimestampToDatetime from "shared/convertTimestampToDatetime";

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
        <Link to={`/app/lending-offer/${lending.request_id}`}>
          <Button size="small" variant="contained" color="primary">
            ยื่นข้อเสนอ
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RequestLendingCard;
