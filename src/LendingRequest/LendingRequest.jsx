import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import { PlantDetailCard } from "./components/PlantDetailCard";
import { RequestDetailCard } from "./components/RequestDetailCard";

import { useStyles } from "./lendingRequest.styles";

const LendingRequest = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.bannerGrid}>
        {" "}
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Image
              onClick={() => console.log("onClick")}
              src="https://source.unsplash.com/random"
              aspectRatio={4 / 3}
              style={{ borderRadius: "1rem" }}
              imageStyle={{ borderRadius: "1rem" }}
            />
          </Grid>

          <Grid item md={8}>
            <PlantDetailCard />
          </Grid>

          <Grid item md={12}>
            <RequestDetailCard />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default LendingRequest;
