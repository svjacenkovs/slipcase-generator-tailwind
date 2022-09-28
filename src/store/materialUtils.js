// let items = [
//   {
//     width: 450,
//     height: 640,
//     grain: 'long',
//     upsOnSheet: {
//       typeH: { byWidth: 0, byHeight: 0, total: 3, bestFit: false },
//       typeT: { byWidth: 0, byHeight: 0, total: 0, bestFit: false },
//     },
//   },
//   {
//     width: 640,
//     height: 460,
//     grain: 'short',
//     upsOnSheet: {
//       typeH: { byWidth: 0, byHeight: 0, total: 0, bestFit: false },
//       typeT: { byWidth: 0, byHeight: 0, total: 5, bestFit: false },
//     },
//   },
// ];

export const setBestFitMaterial = (items) => {
  let maxTypeH = 0;
  let maxTypeT = 0;
  // Find max total number for each box type
  items.forEach((item) => {
    // reset all
    item.upsOnSheet.typeH.bestFit = false;
    item.upsOnSheet.typeT.bestFit = false;
    // find biggest total
    let currentTotalH = item.upsOnSheet.typeH.total;
    let currentTotalT = item.upsOnSheet.typeT.total;
    if (currentTotalH > maxTypeH) {
      maxTypeH = currentTotalH;
    }
    if (currentTotalT > maxTypeT) {
      maxTypeT = currentTotalT;
    }
  });
  const boxesWithMaxTotalT = items.filter((item) => {
    return item.upsOnSheet.typeT.total === maxTypeT && item.upsOnSheet.typeT.total !== 0;
  });
  const boxesWithMaxTotalH = items.filter((item) => {
    return item.upsOnSheet.typeH.total === maxTypeH && item.upsOnSheet.typeH.total !== 0;
  });

  if (boxesWithMaxTotalT.length > 0) {
    const smallestSizeWithMaxTotalT = boxesWithMaxTotalT.reduce(function (prev, current) {
      return prev.width * prev.height <= current.width * current.height ? prev : current;
    });
    smallestSizeWithMaxTotalT.upsOnSheet.typeT.bestFit = true;
  }

  if (boxesWithMaxTotalH.length > 0) {
    const smallestSizeWithMaxTotalH = boxesWithMaxTotalH.reduce(function (prev, current) {
      return prev.width * prev.height <= current.width * current.height ? prev : current;
    });
    smallestSizeWithMaxTotalH.upsOnSheet.typeH.bestFit = true;
  }
};
