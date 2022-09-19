import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { createBoardStamp, createCoverStamp } from './stampGenerator';

const measurements = {
  width: 170,
  height: 240,
  spine: 50,
  materialThickness: 3,
  fileName: 'Testing',
};

export default function ResultsItem(props) {
  const { boxType, boardStamp, coverStamp } = props;
  return (
    <Card className="flex m-2 border rounded-none bg-white">
      <div className="text-center border-r-2">
        <p className="w-max px-2 border-b-2 bg-gradient-to-r bg-navy text-yellow">
          Box type
        </p>
        <h2 className="margin-auto text-center text-6xl font-semibold text-gray-600/50">
          {boxType}
        </h2>
      </div>
      <div className="mx-2 pr-2 border-r-2">
        <div className="h-1/2 flex flex-col justify-center border-b-2">
          <p>
            BOARD:{' '}
            <span>{`${boardStamp.width} x ${boardStamp.height} mm`}</span>
          </p>
        </div>
        <div className="h-1/2 flex flex-col justify-center">
          <p>
            COVER:{' '}
            <span>{`${coverStamp.width} x ${coverStamp.height} mm`}</span>
          </p>
        </div>
      </div>
      {/* Stamp generator action Buttons */}
      <div className="flex flex-col gap-1 m-auto">
        <p className="text-gray-600/50">Generate stamp</p>
        <Button
          className="text-sm"
          onClick={() => {
            createBoardStamp(measurements);
          }}
        >
          board
        </Button>
        <Button
          className="text-sm"
          onClick={() => {
            createCoverStamp();
          }}
        >
          cover
        </Button>
        <Button className="text-sm" onClick={() => {}}>
          both
        </Button>
      </div>
    </Card>
  );
}
