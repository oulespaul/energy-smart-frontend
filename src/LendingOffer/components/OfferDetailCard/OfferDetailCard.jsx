import { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";

import { makeStyles } from "@material-ui/core/styles";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";

export const useStyles = makeStyles(() => ({
  cardRequestDetail: {
    backgroundColor: "#efefef",
    borderRadius: "1rem",
    color: "black",
    width: "100%",
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
  formControl: {
    margin: "8px",
    minWidth: 192,
  },
  selectEmpty: {
    marginTop: "16px",
  },
}));

const OfferDetailCard = (props) => {
  const classes = useStyles();
  const { handleSubmitOffer, lendingRequest, plants } = props;
  const [offer, setOffer] = useState({
    lendingTransactionId: lendingRequest.request_id,
    offerVolume: "",
    offerCredit: "",
    plantOfferId: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setOffer({
      ...offer,
      [name]: name === "plantOfferId" ? value : Number(value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitOffer(offer);
  };

  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <Grid item md={4}>
          {/* <Container maxWidth="sm"> */}
          <Card className={classes.cardRequestDetail}>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={12}>
                  <Typography variant="h5">
                    รายละเอียดขอเช่า: {lendingRequest.request_id}
                  </Typography>
                </Grid>

                <Grid item md={12}>
                  <Typography>
                    โรงงานไฟฟ้า: {lendingRequest.request_plant_id}
                  </Typography>

                  <Typography>
                    ปริมาณไฟฟ้าที่ต้องการยืม: {lendingRequest.request_volume} MW
                  </Typography>

                  <Typography>
                    จำนวนข้อเสนอ: {lendingRequest.lending_offer.length}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* </Container> */}
        </Grid>

        <CompareArrowsIcon style={{ fontSize: "5.188rem" }} />

        <Grid item md={6}>
          <ValidatorForm onSubmit={handleSubmit}>
            <Card className={classes.cardRequestDetail}>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid item md={12}>
                    <Typography variant="h5">รายละเอียดข้อเสนอ</Typography>
                  </Grid>

                  <Grid item>
                    <SelectValidator
                      variant="outlined"
                      style={{ width: "200px" }}
                      value={offer.plantOfferId}
                      onChange={handleInputChange}
                      name="plantOfferId"
                      label="เลือกโรงไฟฟ้า"
                      validators={["required"]}
                      errorMessages={["กรุณาเลือกโรงไฟฟ้า"]}
                    >
                      {plants.map((plant, index) => (
                        <MenuItem value={plant.name} key={index}>
                          {plant.name}
                        </MenuItem>
                      ))}
                    </SelectValidator>
                  </Grid>

                  <Grid item container justify="space-evenly">
                    <Grid item>
                      <Typography>ปริมาณไฟฟ้าที่เสนอให้ยืม</Typography>

                      <TextValidator
                        onChange={handleInputChange}
                        name="offerVolume"
                        value={offer.offerVolume}
                        variant="filled"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">MW</InputAdornment>
                          ),
                        }}
                        validators={["required"]}
                        errorMessages={["กรุณากรอกปริมาณไฟฟ้า"]}
                      />
                    </Grid>

                    <Grid item>
                      <Typography>มุลค่าเครดิตที่เสนอให้ยืม</Typography>

                      <TextValidator
                        onChange={handleInputChange}
                        name="offerCredit"
                        value={offer.offerCredit}
                        variant="filled"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              Credit
                            </InputAdornment>
                          ),
                        }}
                        validators={["required"]}
                        errorMessages={["กรุณากรอกจำนวนเครดิต"]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>

              <CardActions className={classes.cardActions}>
                <Button
                  variant="contained"
                  className={classes.requestSubmit}
                  type="submit"
                >
                  ยื่นข้อเสนอ
                </Button>
              </CardActions>
            </Card>
          </ValidatorForm>
        </Grid>
      </Grid>
    </>
  );
};

export default OfferDetailCard;
