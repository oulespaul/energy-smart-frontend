import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LocalOffer from "@material-ui/icons/LocalOffer";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import convertTimestampToDatetime from "shared/convertTimestampToDatetime";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "12px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const HistoryItem = (props) => {
  const classes = useStyles();
  const { history, plants } = props;

  const lendingStatus = {
    lendConfirm: "ยืนยันเรียบร้อย",
    lendConfirming: "กำลังยืนยัน",
    lendRequesting: "รอข้อเสนอ",
    lendOffering: "มีข้อเสนอ",
  };

  const isItMyOffer = (lendingOffer) => {
    const myPlantId = plants.map((plant) => plant.name);

    const isMyOffer = lendingOffer.map((lending) => {
      return myPlantId.includes(lending.offer_plant_id);
    });

    return isMyOffer.includes(true);
  };

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {convertTimestampToDatetime(history.request_timestamp)}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        {isItMyOffer(history.lending_offer) ? (
          <TimelineDot style={{ backgroundColor: "#96ceb5" }}>
            <LocalOffer />
          </TimelineDot>
        ) : (
          <TimelineDot style={{ backgroundColor: "#f7ce7c" }}>
            <ThumbsUpDown />
          </TimelineDot>
        )}

        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            รายการเลขที่: {history.request_id}
          </Typography>

          <Typography>โรงงาน: {history.request_plant_id}</Typography>

          <Typography>สถานะ: {lendingStatus[history.status]}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default HistoryItem;
