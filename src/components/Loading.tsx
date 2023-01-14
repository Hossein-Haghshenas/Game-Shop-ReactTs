import { CircularProgress, Grid } from "@mui/material";

type Props = {}

const Loading = (props: Props) => {
    return (
        <>
            <Grid>
                <CircularProgress sx={{ color: "azure" }} />
            </Grid>
        </>
    )
}

export default Loading