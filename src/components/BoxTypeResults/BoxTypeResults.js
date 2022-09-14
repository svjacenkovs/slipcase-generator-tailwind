import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import ResultsItem from './ResultsItem.js';

export default function BoxTypeResults() {
  const boxData = useSelector(
    (state) => state.upsCalculations.submittedBoxSizes
  );
  let results;
  if (boxData.length === 0) {
    results = (
      <div className="m-2 py-7 border-2 border-dashed text-center">
        <h2 className="text-lg font-semibold">
          No box has been calculated yet.
        </h2>
        <p className="text-sm font-thin">calculate boxes to get measurements</p>
      </div>
    );
  } else {
    results = boxData.map((box) => {
      return (
        <ResultsItem
          key={box.type}
          boxType={box.type}
          boardStamp={box.boardStamp}
          coverStamp={box.coverStamp}
        />
      );
    });
  }

  return (
    <section>
      <Card className="mt-5 bg-red">
        <h1 className="text-xl text-yellow text-center font-medium bg-gradient-to-r bg-navy drop-shadow-lg">
          Calculation results
        </h1>
        {results}
      </Card>
    </section>
  );
}
