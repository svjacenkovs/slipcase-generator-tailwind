const combinedTboardHeightAmount = (materialLength, totalBoxHeight, spineWidth, boxBleed) => {
  if (materialLength < totalBoxHeight + 2 * boxBleed) {
    return 0;
  }

  let currentCombinationHeight = 0;
  let ups = 1;

  while (materialLength > currentCombinationHeight) {
    currentCombinationHeight += ups * totalBoxHeight - ((ups - 1) * (spineWidth + 2 * boxBleed)) / 2 + 2 * boxBleed;
    console.log('currentCombinationHeight: ', currentCombinationHeight, 'ups:', ups);
    ups += 1;
  }
  console.log(ups * totalBoxHeight - ((ups - 1) * (spineWidth + 2 * boxBleed)) / 2 + 2 * boxBleed);
  return (ups -= 1);
};

console.log(combinedTboardHeightAmount(700, 354.8, 71, 2.5));
