import React,{useState,useEffect} from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setgames] = useState<Game[]>([]);
  const [error, seterror] = useState(''); 

  useEffect(()=>{
      apiClient.get<FetchGamesResponse>('/games')
          .then(res=>setgames(res.data.results))
          .catch(err=>seterror(err.message)) 
  })
  return (

    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game=><li key={game.id}>{game.name}</li>)}
      </ul>
         
    </div>
  )
}

export default GameGrid