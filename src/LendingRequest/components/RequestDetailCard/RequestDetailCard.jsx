import { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  cardRequestDetail: {
    backgroundColor: "#efefef",
    height: "100%",
    borderRadius: "1rem",
    color: "black",
  },
  bannerGrid: {
    paddingTop: "24px",
  },
  slider: {
    width: "500px",
    paddingTop: "32px",
    color: "#f2994a",
  },
  cardActions: {
    justifyContent: "end",
    padding: "16px 0",
    paddingRight: "16px",
  },
  requestSubmit: {
    backgroundColor: "#f2994a",
    color: "white",
  },
}));

const RequestDetailCard = (props) => {
  const classes = useStyles();
  const { handleValue, handleSubmit, plant } = props;
  const [value, setValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    handleValue(value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    handleValue(value);
  };

  return (
    <Card className={classes.cardRequestDetail}>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Typography variant="h5">รายละเอียดขอเช่า</Typography>
          </Grid>

          <Grid item md={12}>
            <Typography>ปริมาณไฟฟ้าที่ต้องการ</Typography>
          </Grid>

          <Grid item container direction="column" alignItems="center">
            <TextField
              id="filled-basic"
              size="medium"
              variant="filled"
              value={value}
              style={{ textAlign: "center" }}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">MW</InputAdornment>
                ),
              }}
            />

            <div className={classes.slider}>
              <Slider
                value={typeof value === "number" ? value : 0}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={100}
                marks
                min={plant.volumeBalance / 10}
                max={plant.volumeBalance}
                onChange={handleSliderChange}
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.requestSubmit}
          onClick={handleSubmit}
        >
          ส่งคำร้องขอ
        </Button>
      </CardActions>
    </Card>
  );
};

export default RequestDetailCard;
