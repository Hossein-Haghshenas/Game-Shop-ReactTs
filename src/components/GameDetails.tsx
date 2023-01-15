import { useState } from "react";
import { Box, Typography, Button } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { GameDetails as GameDetailsType } from "../types/Games.types"


type Props = {
    gameData?: GameDetailsType
}

const GameDetails = ({ gameData }: Props) => {
    const [showRequirements, setShowRequirements] = useState(false)
    const { title, thumbnail, platform, minimum_system_requirements, publisher } = gameData as GameDetailsType

    return (
        <Box width="100%" height="100%" padding={{ xs: "1.5rem 0", sm: "3rem 0" }} >
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} margin={{ xs: "0 1rem", sm: "0 2.5rem" }} borderRadius="15px" overflow="hidden" >
                {/* game image */}
                <Box width={{ xs: "100%", sm: "45%" }} >
                    <img width="100%" height="100%" src={thumbnail} alt="mainImage" />
                </Box>
                {/* game details */}
                <Box display="flex" flexDirection="column" gap="1rem" padding="1rem" width={{ xs: "100%", sm: "55%" }} sx={{ background: "#bababa5c", color: "#f7f5f5" }} >
                    <Box display="flex" alignItems="end" justifyContent="space-between">
                        {/* title */}
                        <Box display="flex" alignItems="center" gap="1rem" >
                            <SportsEsportsIcon fontSize="large" />
                            <Typography variant="h3" fontSize={{ xs: "25px", sm: "40px" }} >
                                {title}
                            </Typography>
                        </Box>
                        {/* buy btn */}
                        <Box>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "azure",
                                    backgroundColor: "magenta",
                                    marginTop: "1rem",
                                }}
                            >
                                BUY NOW
                            </Button>
                        </Box>
                    </Box>
                    {/* platform section */}
                    <Box display="flex" alignItems="center" gap="0.5rem" >
                        {/* icon */}
                        <KeyboardArrowRightIcon fontSize="large" />
                        {/* title */}
                        <Typography variant="body1" fontSize={{ xs: "15px", sm: "20px" }} color="black" noWrap >
                            Platform :
                        </Typography>
                        {/* platform text */}
                        <Typography variant="body1" fontSize={{ xs: "15px", sm: "20px" }} >
                            {platform}
                        </Typography>
                    </Box>
                    {/* publisher section */}
                    <Box display="flex" alignItems="center" gap="0.5rem" >
                        {/* icon */}
                        <KeyboardArrowRightIcon fontSize="large" />
                        {/* title */}
                        <Typography variant="body1" fontSize={{ xs: "15px", sm: "20px" }} color="black" noWrap >
                            Publisher :
                        </Typography>
                        {/* publisher text */}
                        <Typography variant="body1" fontSize={{ xs: "15px", sm: "20px" }} >
                            {publisher}
                        </Typography>
                    </Box>
                    {/* Requirements section */}
                    {
                        minimum_system_requirements &&
                        <Box display="flex" gap="0.5rem" >
                            {/* icon */}
                            <Box onClick={() => setShowRequirements(!showRequirements)} >
                                {showRequirements ? <KeyboardArrowDownIcon fontSize="large" /> : <KeyboardArrowRightIcon fontSize="large" />}
                            </Box>
                            <Box>
                                {/* title */}
                                <Typography variant="body1" fontSize={{ xs: "15px", sm: "20px" }} color="black" >
                                    System Requirements <br />
                                </Typography>
                                {/* Requirements items */}
                                <Box display={showRequirements ? "block" : "none"} >
                                    <Typography variant="body1" fontSize={{ xs: "15px", sm: "20px" }} >
                                        OS : {minimum_system_requirements?.os} <br />
                                        CPU : {minimum_system_requirements?.processor} <br />
                                        Memory : {minimum_system_requirements?.memory} <br />
                                        Graphic : {minimum_system_requirements?.graphics} <br />
                                        Storage : {minimum_system_requirements?.storage} <br />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    }

                </Box>
            </Box>
        </Box>
    )
}

export default GameDetails