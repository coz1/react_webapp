import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core"
import React from "react"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
type Props = {

}

const Login: React.FC<Props> = (props) => {
    const paperStyle = {padding: 20, height: '70vh', width: 380, margin: '20px auto'}
    const avatarStyle = {backgroundColor: '#1bbd7e'}
    const buttonStyle = {margin: '8px o'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField type='password' label='Password' placeholder='Enter password' fullWidth required />
                <FormControlLabel 
                    control={
                        <Checkbox 
                            name='checkedB'
                            color='primary'
                        />
                    }
                    label='Remember me !'
                />
                <Button type='submit' color='primary' variant='contained' style={buttonStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link to='/'>
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account ? 
                    <Link to='/'>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login