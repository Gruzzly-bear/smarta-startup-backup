import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Paper, Popover, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AppleIcon from "./Icons/applepay.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    fontFamily: "coolvetica",
  },
  paper: {
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    width: "50.5em",
    height: "15rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  paperBottomLeft: {
    marginLeft: "2.7rem",
    padding: "1rem",
    width: "22rem",
    height: "17rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  paperBottomRight: {
    padding: "1rem",
    marginTop: "0.4rem",
    marginLeft: "0.2rem",
    width: "23rem",
    height: "17rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  paperTwo: {
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    width: "50.5em",
    height: "10.5rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  cardTitle: {
    marginLeft: "3.2em",
    marginTop: "1em",
    fontFamily: "coolvetica",
    color: "#787ae3",
    fontSize: 15,
  },
  payeePayer: {
    marginLeft: "10rem",
    marginTop: "0.5rem",
    fontFamily: "Montserrat",
    fontSize: 20,
    color: "black",
  },
  titlePay: {
    color: "#787ae3",
    marginLeft: "35%",
    fontSize: 20,
  },
  toggleButton: {
    marginLeft: "3rem",
    marginTop: "-3.5rem",
    marginBottom: "-3.5rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
    fontSize: 15,
  },
  paperPay: {
    height: "5rem",
    marginLeft: "5%",
    marginTop: "1rem",
    marginBottom: "5%",
    paddingTop: "1.5rem",
    paddingBottom: "-1rem",
    width: "50.5rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
  },
  containerDate: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "2rem",
    marginLeft: "7rem",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    display: "flex",
    flexWrap: "wrap",
    marginTop: "2rem",
    marginLeft: "2rem",
    marginRight: "1rem",
  },
  formControlType: {
    margin: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
    marginLeft: "1.1rem",
    marginRight: "1rem",
  },
  formControlMonth: {
    margin: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    marginTop: "1rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
  cardInput: {
    marginTop: "1rem",
    width: "6rem",
  },
  paperInfocardInput: {
    flexGrow: 1,
    marginLeft: "1rem",
    textDecoration: "none",
    display: "flex",
    fontSize: 12,
    width: "50rem",
  },
  cardInfo: {
    marginTop: "2rem",
    marginRight: "1rem",
    marginLeft: "1.8rem",
    display: "flex",
    flexWrap: "wrap",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardDivide: {
    marginTop: "1.4rem",
    fontSize: 25,
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
  },

  applePay: {
    height: "2rem",
    width: "auto",
    margin: "0.5rem",
  },

  address: {
    fontSize: 18,
    marginLeft: "3rem",
    marginTop: "-2rem",
    marginBottom: "1rem",
    fontFamily: "coolvetica",
    color: "#787ae3",
    fontSize: 15,
  },
}));
function createData(name, pay) {
  return { name, pay };
}

const rows = [
  createData("Monthly Rent", "$820"),
  createData("Smarta Payment Fee", "$24.60"),
  createData("Total payment today", "$844.60"),
];
export default function CenteredGrid() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const [state, setState] = React.useState({
    month: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.cardTitle}>make a payment</Typography>

      <Grid container>
        <Grid item>
          <Typography className={classes.containerDate}>
            On Today's Date:
          </Typography>
        </Grid>

        <Grid item xs>
          <form style={{ marginTop: "1.7rem" }} noValidate>
            <TextField
              id="date"
              defaultValue=""
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                width: 200,
              }}
            />
          </form>
        </Grid>

        <Grid item>
          <Typography className={classes.containerDate}>
            For the Month of:
          </Typography>
        </Grid>

        <Grid item xs>
          <FormControl style={{ marginTop: "1.7rem" }}>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "Month",
                id: "Month-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={1}>May</option>
              <option value={2}>June</option>
              <option value={3}>July</option>
              <option value={4}>August</option>
              <option value={1}>September</option>
              <option value={2}>October</option>
              <option value={3}>November</option>
              <option value={4}>December</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Paper className={classes.paperPay} elevation={3}>
        <Grid container spacing={3}>
          <Typography className={classes.payeePayer}>
            <Typography className={classes.titlePay}>payer</Typography>
            Adam Johnson
          </Typography>

          <Typography className={classes.payeePayer}>
            <Typography className={classes.titlePay}>payee</Typography>
            Westbrooke Apt
          </Typography>
        </Grid>
      </Paper>

      <Typography component="div" className={classes.toggleButton}>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>ACH</Grid>
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={checked} onChange={toggleChecked} />}
                label=""
              />
            </FormGroup>
          </Grid>

          <Grid item style={{ marginLeft: "-2rem" }}>
            credit
          </Grid>

          <Grid item style={{ marginLeft: "15rem" }}>
            <Typography>
              Save time by paying with apple pay!
              <Button>
                <img className={classes.applePay} src={AppleIcon} />
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Typography>

      {/* CARD INFO */}

      <Paper className={classes.paperTwo} elevation={3}>
        <Box className={classes.paperInfocardInput} boxShadow={0}>
          <Typography className={classes.cardInfo}>Card Info</Typography>
          <form
            className={classes.cardInput}
            noValidate
            autoComplete="off"
            style={{ marginLeft: "2rem" }}
          >
            <TextField id="outlined-basic" variant="outlined" />
          </form>
          <Typography className={classes.cardDivide}> - </Typography>
          <form className={classes.cardInput} noValidate autoComplete="off">
            <TextField id="outlined-basic" variant="outlined" />
          </form>
          <Typography className={classes.cardDivide}> - </Typography>
          <form className={classes.cardInput} noValidate autoComplete="off">
            <TextField id="outlined-basic" variant="outlined" />
          </form>
          <Typography className={classes.cardDivide}> - </Typography>
          <form className={classes.cardInput} noValidate autoComplete="off">
            <TextField id="outlined-basic" variant="outlined" />
          </form>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="CVV"
              style={{ width: "6rem", marginTop: "1rem", marginLeft: "1.5rem" }}
              variant="outlined"
            />
          </form>
        </Box>

        <Box className={classes.paperInfocardInput} boxShadow={0}>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Name on Card"
              style={{
                width: "15.6rem",
                marginTop: "1rem",
                marginLeft: "1rem",
              }}
              variant="outlined"
            />
          </form>

          <Typography style={{ marginTop: "2rem", marginLeft: "1.9rem" }}>
            CARD TYPE
          </Typography>

          <FormControl className={classes.formControlType}>
            <Select
              variant="outlined"
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "Month",
                id: "Month-native-simple",
              }}
            >
              <option label=""></option>
              <option value={1}>VISA</option>
              <option value={2}>AMEX</option>
              <option value={3}>MC</option>
            </Select>
          </FormControl>

          <Typography style={{ marginTop: "2rem", marginLeft: "1.5rem" }}>
            EXP
          </Typography>

          <FormControl className={classes.formControlMonth}>
            <Select
              variant="outlined"
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "Month",
                id: "Month-native-simple",
              }}
            >
              <option aria-label="MONTH" value="" />
              <option value={1}>JAN</option>
              <option value={2}>FEB</option>
              <option value={3}>MAR</option>
              <option value={4}>APR</option>
              <option value={1}>MAY</option>
              <option value={2}>JUN</option>
              <option value={3}>JUL</option>
              <option value={4}>AUG</option>
              <option value={1}>SEP</option>
              <option value={2}>OCT</option>
              <option value={3}>NOV</option>
              <option value={4}>DEC</option>
            </Select>
          </FormControl>

          <FormControl className={classes.formControlMonth}>
            <Select
              variant="outlined"
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "Month",
                id: "Month-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>21</option>
              <option value={2}>22</option>
              <option value={3}>23</option>
              <option value={4}>24</option>
              <option value={5}>25</option>
              <option value={6}>26</option>
            </Select>
          </FormControl>
        </Box>
      </Paper>
      <Grid container>
        <Grid item xs>
          <Typography className={classes.address}>Billing Address</Typography>
          <Paper className={classes.paperBottomLeft} elevation={3}>
            <Grid container spacing={3}>
              <Grid item xs>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "22rem" }}
                  />
                </form>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Billing Address"
                    variant="outlined"
                    style={{ width: "22rem" }}
                  />
                </form>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "16rem" }}
                  />
                </form>
              </Grid>
              <Grid item xs>
                <FormControl>
                  <Select
                    variant="outlined"
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "Month",
                      id: "Month-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>NY</option>
                    <option value={2}>22</option>
                    <option value={3}>23</option>
                    <option value={4}>24</option>
                    <option value={5}>25</option>
                    <option value={6}>26</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    style={{ width: "22rem" }}
                  />
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paperBottomRight} elevation={3}>
            <Grid container xs>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          color: "#787ae3",
                          fontFamily: "coolvetica",
                          fontSize: 18,
                        }}
                      >
                        Payment Summary
                      </TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell
                          style={{ fontFamily: "coolvetica", fontSize: 16 }}
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.pay}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                style={{
                  backgroundColor: "#787ae3",
                  marginLeft: "17.6rem",
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
