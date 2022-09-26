import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { generateTypeT, generateTypeH } from '../../utils/stampGenerator/stampGenerator';

const measurements = {
  width: 170,
  height: 240,
  spine: 50,
  materialThickness: 3,
  fileName: 'Testing',
};

export default function ResultsItem(props) {
  const { boxType, boardStamp, coverStamp, providedSizes } = props;
  const generateCurrentType = boxType === 'H' ? generateTypeH : generateTypeT;
  // console.log(providedSizes);
  const boardKnifeLength = generateCurrentType.boardKnifeLength({
    width: providedSizes.width,
    height: providedSizes.height,
    spine: providedSizes.spine,
    materialThickness: providedSizes.boardThickness,
  });
  const coverKnifeLength = generateCurrentType.coverKnifeLength({
    width: providedSizes.width,
    height: providedSizes.height,
    spine: providedSizes.spine,
    materialThickness: providedSizes.boardThickness,
  });

  return (
    <Card className="flex m-2 border rounded-none bg-white">
      <div className="text-center border-r-2">
        <p className="w-max px-2 border-b-2 bg-gradient-to-r bg-navy text-yellow">Box type</p>
        <h2 className="margin-auto text-center text-6xl font-semibold text-gray-600/50">{boxType}</h2>
      </div>
      <div className="mx-2 pr-2 border-r-2">
        <div className="h-1/2 flex flex-col justify-center border-b-2">
          <p>
            BOARD: <span>{`${boardStamp.width} x ${boardStamp.height} mm`}</span>
            <br />
            <span className="text-gray-600/50 text-sm">{boardKnifeLength} (m)</span>
          </p>
        </div>
        <div className="h-1/2 flex flex-col justify-center">
          <p>
            COVER: <span>{`${coverStamp.width} x ${coverStamp.height} mm`}</span>
            <br />
            <span className="text-gray-600/50 text-sm">{coverKnifeLength} (m)</span>
          </p>
        </div>
      </div>
      {/* Stamp generator action Buttons */}
      <div className="flex flex-col gap-1 m-auto">
        <p className="text-gray-600/50">Generate stamp</p>
        <Button
          className="text-sm"
          onClick={() => {
            generateCurrentType.board(measurements);
          }}
        >
          board
        </Button>
        <Button
          className="text-sm"
          onClick={() => {
            generateCurrentType.cover(measurements);
          }}
        >
          cover
        </Button>
        {/* <Button
          className="text-sm"
          onClick={() => {
            console.log('clicked');
          }}
          disabled={true}
        >
          both
        </Button> */}
      </div>
    </Card>
  );
}
