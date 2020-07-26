import React from 'react';

import ReadMeImg from '../ReadMeImg';
import Text from '../Text';

export interface Props {
  games: Array<Object>;
  pieceImages: Object;
};

/**
 * Current Games
 * Returns image of 3 chess game positions
 * @param games
 * @param pieceImages 
 */
export const CurrentGames: React.FC<Props> = ({
  games,
  pieceImages,
}) => {
  return (
    <ReadMeImg
      width="600"
      height="246">
      <style>
        {`
          @import url(\'/components/chess/CurrentGames.css\');
        `}
      </style>
      
      <Text
        id="title"
        weight="bold"
        size="title">
        current games
      </Text>
      
      <div className="games-wrapper">
        {games.map((game, gameIndex) => (
          <div
            key={`chess-game-${gameIndex}`}
            className="game">
            <div className="board">
              {game.position.map((row, rowIndex) => (
              <div
                key={`chess-game-${gameIndex}=row-${rowIndex}`}
                className="row">
                {row.map((col, colIndex) => (
                <div
                  key={`chess-game-${gameIndex}=row-${rowIndex}-col-${colIndex}`}
                  className={(rowIndex + colIndex) % 2 === (game.isWhite ? 0 : 1) ? 'col light' : 'col'}>
                  {col && <img src={pieceImages[`${col === col.toUpperCase() ? 'white' : 'black'}-${col.toLowerCase()}`]}></img>}
                </div>
                ))}
              </div>
              ))}
            </div>

            <Text
              className="username"
              color="grey-lighter">
              vs. {game.isWhite ? game.black : game.white}
            </Text>
          </div>
        ))}
      </div>
    </ReadMeImg>
  );
};