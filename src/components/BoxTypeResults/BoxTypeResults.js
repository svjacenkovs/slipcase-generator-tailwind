import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../UI/Card';
import ResultsItem from './ResultsItem.js';
import { boardMaterialActions } from '../../store/board-materials-slice';
import { coverMaterialActions } from '../../store/cover-materials-slice';
import { upsCalculationActions } from '../../store/ups-calculation-slice';

export default function BoxTypeResults() {
  const dispatch = useDispatch();
  const boxData = useSelector((state) => state.upsCalculations.submittedBoxSizes);

  const handleProjectNameChange = (event) => {
    dispatch(upsCalculationActions.setProjectName(event.target.value));
  };

  let results;
  if (boxData.length === 0) {
    results = (
      <div className="m-2 py-7 border-2 border-dashed text-center">
        <h2 className="text-lg font-semibold">No box has been calculated yet.</h2>
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
          providedSizes={box.providedSizes}
          boardKnifeLength={box.boardKnifeLength}
          coverKnifeLength={box.coverKnifeLength}
        />
      );
    });
  }

  useEffect(() => {
    if (boxData.length > 0) {
      dispatch(boardMaterialActions.calculateUps(boxData));
      dispatch(coverMaterialActions.calculateUps(boxData));
    }
  }, [boxData, dispatch]);

  return (
    <section>
      <Card className="mt-5 bg-red">
        <h1 className="text-xl text-yellow text-center font-medium bg-gradient-to-r bg-navy drop-shadow-lg">Calculation results</h1>
        {boxData.length !== 0 && (
          <div className="flex flex-col p-3">
            <label htmlFor="fileName">Project number:</label>
            <input className="pl-2 mt-1 border focus:outline-red" type="text" name="fileName" onChange={handleProjectNameChange} />
          </div>
        )}
        {results}
      </Card>
    </section>
  );
}
