import { hTypeSlipcase } from './h_type_slipcase';
import { tTypeSlipcase } from './t_type_slipcase';
import { PDFDocument, StandardFonts, cmyk } from 'pdf-lib';
import download from 'downloadjs';

let mmToPt = (mm) => mm / 0.352777778;
let ptToMm = (pt) => pt * 0.352777778;
function roundHalf(num) {
  return Math.round(num * 2) / 2;
}
const currentDateAndTime = new Date().toLocaleString();

function calculateLineDistance(x1, x2, y1, y2) {
  //Formula lai aprēķinātu līnijas garumu: Math.sqrt((x2-x1)^2+(y2-y1)^2)
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

async function prepareStampFile({
  slipcaseType,
  fileName,
  slipcasePart,
  documentWidth,
  documentHeight,
  stampWidthInMm,
  stampHeightInMm,
  spineInPoints,
  heightInPoints,
  widthInPoints,
  materialThicknessInPoints,
}) {
  const slipcasePartName = slipcasePart === 'board' ? 'calculateBoardLines' : 'calculateCasingLines';
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  // Add a blank page to the document
  const page = pdfDoc.addPage([documentWidth, documentHeight]);

  // variable for max knife and scoring lines distance.
  let totalKnifeDistance = 0;

  //Calculate coordinates and draw lines on page. Here i call hTypeSlipcase and tTypeSlipcase functions
  slipcaseType[slipcasePartName](spineInPoints, heightInPoints, widthInPoints, materialThicknessInPoints).forEach((line) => {
    let lineColor;
    if (line.color === 'black') {
      lineColor = { color: cmyk(0, 0, 0, 1) };
    }
    if (line.color === 'red') {
      lineColor = { color: cmyk(0, 1, 1, 0) };
    }

    page.drawLine({
      start: { x: line.startX, y: line.startY },
      end: { x: line.endX, y: line.endY },
      thickness: 1,
      opacity: 1,
      lineCap: 1,
      ...lineColor,
    });

    totalKnifeDistance += calculateLineDistance(line.startX, line.endX, line.startY, line.endY);
  });

  page.drawText(
    `${fileName}_${slipcasePart}_stamp: W${roundHalf(ptToMm(widthInPoints))}_H${roundHalf(ptToMm(heightInPoints))}_S${roundHalf(
      ptToMm(spineInPoints)
    )}_B${ptToMm(materialThicknessInPoints)}mm | Dimensions: ${roundHalf(stampWidthInMm)}x${roundHalf(
      stampHeightInMm
    )}mm | Date: ${currentDateAndTime}`,
    {
      x: 0,
      y: documentHeight - 80,
      size: 14,
      font: timesRomanFont,
      color: cmyk(0, 0, 0, 1),
    }
  );

  page.translateContent(mmToPt(20), mmToPt(20));
  // Switch distance from points to mm
  const totalKnifeDistanceInMm = ptToMm(totalKnifeDistance);
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  return { pdfBytes, totalKnifeDistanceInMm };
}

export const generateTypeT = {
  board: async function ({ width, height, spine, materialThickness, fileName }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    //PAPES dokumenta izmērs (visam jābūt punktos, jo tiek strādāts ar PDF)
    let documentWidth = 2 * widthInPoints + spineInPoints + mmToPt(40); // Dokumenta platums punktos
    let documentHeight = 2 * (spineInPoints + materialThicknessInPoints) + heightInPoints + mmToPt(40); // Dokumenta garums punktos
    let stampWidthInMm = ptToMm(2 * widthInPoints + spineInPoints); // Cirtņa platums milimetros
    let stampHeightInMm = ptToMm(2 * (spineInPoints + materialThicknessInPoints) + heightInPoints); // Cirtņa augstums milimetros

    let stampData = {
      slipcaseType: tTypeSlipcase,
      slipcasePart: 'board',
      fileName,
      documentWidth,
      documentHeight,
      stampWidthInMm,
      stampHeightInMm,
      spineInPoints,
      heightInPoints,
      widthInPoints,
      materialThicknessInPoints,
    };

    try {
      // Create pdf file
      const stampFile = await prepareStampFile(stampData);
      // Trigger the browser to download the PDF document
      download(stampFile.pdfBytes, `${fileName}_pape_${currentDateAndTime}.pdf`, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
  },
  cover: async function ({ width, height, spine, materialThickness, fileName }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    //PAPES dokumenta izmērs (visam jābūt punktos, jo tiek strādāts ar PDF)
    let documentWidth = 2 * widthInPoints + spineInPoints + 7 * materialThicknessInPoints + mmToPt(30) + mmToPt(40); // Dokumenta platums punktos. 40mm ir nepieciešami palielinātu dokumenta platumu. 30mm nāk no paša cirtņa
    let documentHeight = 2 * spineInPoints + heightInPoints + 4 * materialThicknessInPoints + mmToPt(40); // Dokumenta garums punktos
    let stampWidthInMm = ptToMm(2 * widthInPoints + spineInPoints + 7 * materialThicknessInPoints) + 30; // Pārvalka platums milimetros
    let stampHeightInMm = ptToMm(2 * spineInPoints + heightInPoints + 4 * materialThicknessInPoints); // Pārvalka augstums milimetros

    let stampData = {
      slipcaseType: tTypeSlipcase,
      fileName,
      slipcasePart: 'cover',
      documentWidth,
      documentHeight,
      stampWidthInMm,
      stampHeightInMm,
      spineInPoints,
      heightInPoints,
      widthInPoints,
      materialThicknessInPoints,
    };

    try {
      // Create pdf file
      const stampFile = await prepareStampFile(stampData);
      // Trigger the browser to download the PDF document
      download(stampFile.pdfBytes, `${fileName}_parvalks_${currentDateAndTime}.pdf`, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
  },
  boardKnifeLength: function ({ width, height, spine, materialThickness }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    let totalKnifeDistance = 0;
    tTypeSlipcase.calculateBoardLines(spineInPoints, heightInPoints, widthInPoints, materialThicknessInPoints).forEach((line) => {
      totalKnifeDistance += calculateLineDistance(line.startX, line.endX, line.startY, line.endY);
    });
    // Switch distance from points to milimeters and then to meters
    const totalKnifeDistanceInMeters = ptToMm(totalKnifeDistance) / 1000;
    return totalKnifeDistanceInMeters.toFixed(2);
  },
  coverKnifeLength: function ({ width, height, spine, materialThickness }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    let totalKnifeDistance = 0;
    tTypeSlipcase.calculateCasingLines(spineInPoints, heightInPoints, widthInPoints, materialThicknessInPoints).forEach((line) => {
      totalKnifeDistance += calculateLineDistance(line.startX, line.endX, line.startY, line.endY);
    });
    // Switch distance from points to milimeters and then to meters
    const totalKnifeDistanceInMeters = ptToMm(totalKnifeDistance) / 1000;
    return totalKnifeDistanceInMeters.toFixed(2);
  },
};

export const generateTypeH = {
  board: async function ({ width, height, spine, materialThickness, fileName }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    //PAPES dokumenta izmērs (visam jābūt punktos, jo tiek strādāts ar PDF)
    let documentWidth = 2 * widthInPoints + spineInPoints + mmToPt(40); // Dokumenta platums punktos
    let documentHeight = 2 * (spineInPoints + materialThicknessInPoints) + heightInPoints + 2 * materialThicknessInPoints + mmToPt(40); // Dokumenta garums punktos
    let stampWidthInMm = ptToMm(2 * widthInPoints + spineInPoints); // Cirtņa platums milimetros
    let stampHeightInMm = ptToMm(2 * (spineInPoints + materialThicknessInPoints) + heightInPoints + 2 * materialThicknessInPoints); // Cirtņa augstums milimetros

    let stampData = {
      slipcaseType: hTypeSlipcase,
      slipcasePart: 'board',
      fileName,
      documentWidth,
      documentHeight,
      stampWidthInMm,
      stampHeightInMm,
      spineInPoints,
      heightInPoints,
      widthInPoints,
      materialThicknessInPoints,
    };

    try {
      // Create pdf file
      const stampFile = await prepareStampFile(stampData);
      // Trigger the browser to download the PDF document
      download(stampFile.pdfBytes, `${fileName}_pape_${currentDateAndTime}.pdf`, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
  },
  cover: async function ({ width, height, spine, materialThickness, fileName }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    //PAPES dokumenta izmērs (visam jābūt punktos, jo tiek strādāts ar PDF)
    let documentWidth = 2 * widthInPoints + spineInPoints + 7 * materialThicknessInPoints + mmToPt(30) + mmToPt(40); // Dokumenta platums punktos. 40mm ir nepieciešami palielinātu dokumenta platumu. 30mm nāk no paša cirtņa
    let documentHeight = 2 * spineInPoints + heightInPoints + 5 * materialThicknessInPoints + mmToPt(40); // Dokumenta garums punktos
    let stampWidthInMm = ptToMm(2 * widthInPoints + spineInPoints + 7 * materialThicknessInPoints) + 30; // Pārvalka platums milimetros
    let stampHeightInMm = ptToMm(2 * spineInPoints + heightInPoints + 5 * materialThicknessInPoints); // Pārvalka augstums milimetros

    let stampData = {
      slipcaseType: hTypeSlipcase,
      fileName,
      slipcasePart: 'cover',
      documentWidth,
      documentHeight,
      stampWidthInMm,
      stampHeightInMm,
      spineInPoints,
      heightInPoints,
      widthInPoints,
      materialThicknessInPoints,
    };

    try {
      // Create pdf file
      const stampFile = await prepareStampFile(stampData);
      // Trigger the browser to download the PDF document
      download(stampFile.pdfBytes, `${fileName}_parvalks_${currentDateAndTime}.pdf`, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
  },
  boardKnifeLength: function ({ width, height, spine, materialThickness }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    let totalKnifeDistance = 0;
    hTypeSlipcase.calculateBoardLines(spineInPoints, heightInPoints, widthInPoints, materialThicknessInPoints).forEach((line) => {
      totalKnifeDistance += calculateLineDistance(line.startX, line.endX, line.startY, line.endY);
    });
    // Switch distance from points to milimeters and then to meters
    const totalKnifeDistanceInMeters = ptToMm(totalKnifeDistance) / 1000;
    return totalKnifeDistanceInMeters.toFixed(2);
  },
  coverKnifeLength: function ({ width, height, spine, materialThickness }) {
    const widthInPoints = mmToPt(width);
    const heightInPoints = mmToPt(height);
    const spineInPoints = mmToPt(spine);
    const materialThicknessInPoints = mmToPt(materialThickness);
    let totalKnifeDistance = 0;
    hTypeSlipcase.calculateCasingLines(spineInPoints, heightInPoints, widthInPoints, materialThicknessInPoints).forEach((line) => {
      totalKnifeDistance += calculateLineDistance(line.startX, line.endX, line.startY, line.endY);
    });
    // Switch distance from points to milimeters and then to meters
    const totalKnifeDistanceInMeters = ptToMm(totalKnifeDistance) / 1000;
    return totalKnifeDistanceInMeters.toFixed(2);
  },
};
