import { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
  const [value, setValue] = useState("");

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    handleValue(value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    handleValue(value);
  };

  const handleSubmitRequest = () => {
    handleSubmit();
  };

  return (
    <Card className={classes.cardRequestDetail}>
      <ValidatorForm onSubmit={handleSubmitRequest}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Typography variant="h5">รายละเอียดขอเช่า</Typography>
            </Grid>

            <Grid item md={12}>
              <Typography>ปริมาณไฟฟ้าที่ต้องการ</Typography>
            </Grid>

            <Grid item container direction="column" alignItems="center">
              <TextValidator
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
                validators={["required"]}
                errorMessages={["กรุณากรอกปริมาณไฟฟ้าที่ต้องการ"]}
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
            type="submit"
          >
            ส่งคำร้องขอ
          </Button>
        </CardActions>
      </ValidatorForm>
    </Card>
  );
};

export default RequestDetailCard;
