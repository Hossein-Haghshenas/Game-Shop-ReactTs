import { Grid, Typography } from '@mui/material';
import netErrImage from '../assets/image/network-err.png';

type Props = {
    errorMsg?: string
}

const Error = ({ errorMsg }: Props) => {
    if (errorMsg === "Network Error") {
        return (
            <Grid position="absolute" top="35%" container justifyContent="center" alignItems="center">
                <img src={netErrImage} alt="network error" />
            </Grid>
        )
    }
    return (
        <Grid position="absolute" top="35%" container justifyContent="center" alignItems="center">
            <Typography>{errorMsg}</Typography>
        </Grid>
    )
}

export default Error