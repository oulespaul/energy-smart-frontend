import { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import handlePromise from "shared/handlePromise";
import postCreatePlant from "Profile/apis/postCreatePlant";

export default function FormDialog(props) {
  const { isOpen, handleClose } = props;
  const initPlant = {
    name: "",
    address: "",
    volumeBalance: 0,
  };
  const [plant, setPlant] = useState(initPlant);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPlant({
      ...plant,
      [name]: name === "volumeBalance" ? Number(value) : value,
    });
  };

  const handleSubmit = async () => {
    const [createPlant, error] = await handlePromise(postCreatePlant(plant));
    console.log(createPlant);
    if (error) {
      console.log(error);
      return setPlant(initPlant);
    }

    return handleClear();
  };

  const handleClear = () => {
    handleClose();
    return setPlant(initPlant);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">เพิ่มโรงงานไฟฟ้า</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="ชื่อ"
            onChange={handleOnChange}
            value={plant.name}
            type="name"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="address"
            name="address"
            label="ที่อยู่"
            onChange={handleOnChange}
            value={plant.address}
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="volumeBalance"
            name="volumeBalance"
            label="ความจุไฟฟ้าในโรงงาน"
            onChange={handleOnChange}
            value={plant.volumeBalance}
            InputProps={{
              endAdornment: <InputAdornment position="end">MW</InputAdornment>,
            }}
            type="number"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClear} color="primary">
            ยกเลิก
          </Button>

          <Button onClick={handleSubmit} color="primary">
            เพิ่ม
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
