import { makeStyles } from "@material-ui/core"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React from "react"

type Props = {

}

const CongressPayment: React.FC<Props> = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            '& .MuiFormControl-root': {
                width: '80%',
                margin: theme.spacing(1)
            }
        }
    }))
    const classes = useStyles();

    return(
            <>
                <div className={classes.root}>
                    <Typography variant="h6" gutterBottom>
                        Payment method
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="cardNumber"
                                label="Card number"
                                fullWidth
                                autoComplete="cc-number"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                        </Grid>
                    </Grid>
                </div>
            </>
    )

}

export default CongressPayment