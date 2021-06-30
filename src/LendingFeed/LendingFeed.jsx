import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { LendingCard } from "./components/LendingCard";

import { useStyles } from "./lendingFeed.styles";
import { useEffect, useState } from "react";

import getAllLendingRequest from "./apis/getAllLedingRequest";
import handlePromise from "shared/handlePromise";
import Loading from "shared/components/Loading";
import _ from "lodash";

const LendingFeed = () => {
  const classes = useStyles();
  const [allLending, setAllLending] = useState([]);
  const [lendings, setLendings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllLending();
  }, []);

  const fetchAllLending = async () => {
    const [allLending, error] = await handlePromise(getAllLendingRequest());

    if (error) {
      return;
    }

    const lendRequesting = allLending.data.filter(({ Record }) =>
      ["lendRequesting", "lendOffering"].includes(Record.status)
    );

    setAllLending(lendRequesting);
    setLendings(lendRequesting);

    return setIsLoading(false);
  };

  const handleSearch = (event) => {
    const { value } = event.target;

    setSearch(value);
    debounce(value);
  };

  const debounce = _.debounce((value) => {
    if (value === "") {
      return setLendings(allLending);
    }

    const lendingSearching = allLending.filter((lending) =>
      lending.Record.request_plant_id.includes(value)
    );

    return setLendings(lendingSearching);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <Loading />
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
                  label="ค้นหาโรงงาน"
                  type="search"
                  variant="outlined"
                  value={search}
                  onChange={handleSearch}
                  fullWidth
                />
              </div>
            </Container>
          </div>
          <div className={classes.content}>
            <Container maxWidth="md">
              <Grid container spacing={4}>
                {lendings.map(({ Record, imageUrl }, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <LendingCard record={{ ...Record, imageUrl }} />
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
