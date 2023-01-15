import { CircularProgress, Grid } from "@mui/material";

type Props = {}

const Loading = (props: Props) => {
    return (
        <Grid position="absolute" top="40%" container justifyContent="center" alignItems="center" >
            <Grid>
                <CircularProgress sx={{ color: "azure" }} />
            </Grid>
        </Grid>
    )
}

export default Loading