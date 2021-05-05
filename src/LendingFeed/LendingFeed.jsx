import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { LendingCard } from "./components/LendingCard";

import { useStyles } from "./lendingFeed.styles";

const LendingFeed = () => {
  const classes = useStyles();

  return (
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
            {new Array(10).fill(0).map((card) => (
              <Grid key={card} item xs={12} sm={6} md={4}>
                <LendingCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default LendingFeed;
