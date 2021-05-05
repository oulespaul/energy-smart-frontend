import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./lendingCard.styles";

const LendingCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        image="https://source.unsplash.com/random"
        className={classes.cardMedia}
      />

      <CardContent className={classes.cardContent}>
        <Typography variant="h5">ชื่อโรงไฟฟ้า</Typography>

        <Typography>
          รายละเอียด: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione fugiat non nulla ducimus? Id dolorem a sapiente repellendus in
          quisquam.
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
