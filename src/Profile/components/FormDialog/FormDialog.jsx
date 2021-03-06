import { useState } from "react";
import { AlertType, useAlert } from "shared/context/alertContext";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import handlePromise from "shared/handlePromise";
import postCreatePlant from "Profile/apis/postCreatePlant";
import postUploadPlantImage from "Profile/apis/postUploadPlantImage";

import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useStyles } from "./formDialog.styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function FormDialog(props) {
  const classes = useStyles();
  const { isOpen, handleClose } = props;
  const initPlant = {
    name: "",
    address: "",
    volumeBalance: "",
  };
  const [plant, setPlant] = useState(initPlant);
  const [plantImage, setPlantImage] = useState({ file: 0, imageUrl: "" });
  const { dispatch } = useAlert();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPlant({
      ...plant,
      [name]: name === "volumeBalance" ? Number(value) : value,
    });
  };

  const handleSubmit = async () => {
    if (!plantImage.file) {
      return dispatch({
        type: AlertType.ERROR,
        payload: { message: "กรุณาอัพโหลดรูปภาพ" },
      });
    }

    const [plantRes, error] = await handlePromise(postCreatePlant(plant));

    if (error) {
      dispatch({
        type: AlertType.ERROR,
        payload: { message: "สร้างโรงงานไฟฟ้าไม่สำเร็จ" },
      });
      return setPlant(initPlant);
    }

    const [, uploadError] = await handlePromise(
      postUploadPlantImage(plantRes.data.id, plantImage.file)
    );

    if (uploadError) {
      dispatch({
        type: AlertType.ERROR,
        payload: { message: "อัพโหลดรูปภาพโรงงานไฟฟ้าไม่สำเร็จ" },
      });
      return setPlant(initPlant);
    }

    dispatch({
      type: AlertType.SUCCESS,
      payload: { message: "สร้างโรงไฟฟ้าสำเร็จ" },
    });

    return handleClear();
  };

  const handleClear = () => {
    handleClose();
    return setPlant(initPlant);
  };

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsBinaryString(file);

    reader.onload = () => {
      setPlantImage({
        file,
        imageUrl: `data:${file.type};base64,${btoa(reader.result)}`,
      });
    };
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">เพิ่มโรงงานไฟฟ้า</DialogTitle>

          <DialogContent>
            {plantImage.imageUrl ? (
              <Grid container justify="center">
                <img
                  width="100%"
                  className={classes.media}
                  alt="plant"
                  src={plantImage.imageUrl}
                />
              </Grid>
            ) : (
              <>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleUploadClick}
                />
                <label htmlFor="contained-button-file">
                  <Fab component="span" className={classes.button}>
                    <AddPhotoAlternateIcon />
                  </Fab>
                </label>

                <Typography variant="caption">
                  *ไฟล์ต้องเป็น .jpg, .png เท่านั้น
                </Typography>
              </>
            )}

            <TextValidator
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="ชื่อ"
              onChange={handleOnChange}
              value={plant.name}
              type="name"
              fullWidth
              validators={["required"]}
              errorMessages={["กรุณากรอกชื่อโรงงานไฟฟ้า"]}
            />

            <TextValidator
              autoFocus
              margin="dense"
              id="address"
              name="address"
              label="ที่อยู่"
              onChange={handleOnChange}
              value={plant.address}
              type="text"
              fullWidth
              validators={["required"]}
              errorMessages={["กรุณากรอกที่อยู่โรงงานไฟฟ้า"]}
            />

            <TextValidator
              autoFocus
              margin="dense"
              id="volumeBalance"
              name="volumeBalance"
              label="ความจุไฟฟ้าในโรงงาน"
              onChange={handleOnChange}
              value={plant.volumeBalance}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">MW</InputAdornment>
                ),
              }}
              fullWidth
              validators={["required"]}
              errorMessages={["กรุณากรอกความจุโรงงานไฟฟ้า"]}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClear} color="primary">
              ยกเลิก
            </Button>

            <Button type="submit" color="primary">
              เพิ่ม
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
