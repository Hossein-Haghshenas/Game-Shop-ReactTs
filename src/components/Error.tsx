import { Typography } from '@mui/material';
import netErrImage from '../assets/image/network-err.png';

type Props = {
    errorMsg?: string
}

const Error = ({ errorMsg }: Props) => {
    if (errorMsg === "Network Error") {
        return (
            <>
                <img src={netErrImage} alt="network error" />
            </>
        )
    }
    return (
        <>
            <Typography>{errorMsg}</Typography>
        </>
    )
}

export default Error