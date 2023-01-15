import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GameDetails as GameDetailsType } from '../types/Games.types';
import { getGameDetails } from '../api/GameApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import GameDetails from './../components/GameDetails';

type Props = {}

const DetailsPage = (props: Props) => {
    const { gameId } = useParams()
    const { data, isLoading, isError, error } = useQuery<GameDetailsType, Error>("gameDetails", () => getGameDetails(gameId))
    if (isLoading) {
        return (
            <Loading />
        )
    }
    if (isError) {
        return (
            <Error errorMsg={error.message} />
        )
    }
    return <>
        <GameDetails gameData={data} />
    </>;
}

export default DetailsPage