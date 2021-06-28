import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { useStyles } from "./lendingCard.styles";
import convertTimestampToDatetime from "shared/convertTimestampToDatetime";

const LendingCard = (props) => {
  const classes = useStyles();
  const { record } = props;

  return (
    <Card className={classes.card}>
      <CardMedia image={record.imageUrl} className={classes.cardMedia} />

      <CardContent className={classes.cardContent}>
        <Typography variant="h5">
          ชื่อโรงไฟฟ้า: {record.request_plant_id}
        </Typography>

        <Divider light />

        <Typography className={classes.contentMargin} gutterBottom>
          ปริมาณไฟฟ้าที่ต้องการ: {record.request_volume} MW
        </Typography>

        <Typography gutterBottom>
          จำนวนข้อเสนอ: {record.lending_offer.length}
        </Typography>

        <Typography gutterBottom>
          วันที่ทำรายการ: {convertTimestampToDatetime(record.request_timestamp)}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary">
          ยื่นข้อเสนอ
        </Button>
      </CardActions>
    </Card>
  );
};

export default LendingCard;
