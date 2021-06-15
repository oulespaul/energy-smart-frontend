import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { LendingCard } from "./components/LendingCard";

import { useStyles } from "./lendingFeed.styles";
import { useEffect, useState } from "react";

import getAllLendingRequest from "./apis/getAllLedingRequest";
import handlePromise from "shared/handlePromise";

const LendingFeed = () => {
  const classes = useStyles();
  const [allLending, setAllLending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllLending();
  }, []);

  const fetchAllLending = async () => {
    const [allLending, error] = await handlePromise(getAllLendingRequest());

    if (error) {
      console.log(error);
    }

    setAllLending(allLending.data.response);

    return setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <img src="/images/Logo.png" alt="logo" />

              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Energy Lending Platform
              </Typography>

              <div className={classes.search}>
                <TextField
                  size="medium"
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Container>
          </div>
          <div className={classes.content}>
            <Container maxWidth="md">
              <Grid container spacing={4}>
                {allLending.map(({ Record }, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <LendingCard record={Record} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default LendingFeed;
