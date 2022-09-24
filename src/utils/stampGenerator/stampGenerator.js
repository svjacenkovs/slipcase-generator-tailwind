import { hTypeSlipcase } from './h_type_slipcase';
import { tTypeSlipcase } from './t_type_slipcase';
import { PDFDocument, StandardFonts, cmyk } from 'pdf-lib';
import download from 'downloadjs';

let mmToPt = (mm) => mm / 0.352777778;
let ptToMm = (pt) => pt * 0.352777778;
function roundHalf(num) {
  return Math.round(num * 2) / 2;
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
  });

  page.drawText(
    `${fileName}_papes_cirtnis: S${roundHalf(ptToMm(spineInPoints))}_H${roundHalf(ptToMm(heightInPoints))}_W${roundHalf(
      ptToMm(widthInPoints)
    )}mm | Board: ${ptToMm(materialThicknessInPoints)}mm | Dimensions: ${roundHalf(stampWidthInMm)}x${roundHalf(stampHeightInMm)}mm`,
    {
      x: 0,
      y: documentHeight - 80,
      size: 14,
      font: timesRomanFont,
      color: cmyk(0, 0, 0, 1),
    }
  );
  page.translateContent(mmToPt(20), mmToPt(20));
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
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
      fileName: 'tTypeSlipcaseBoardTest',
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
      download(stampFile, `${fileName}_pape.pdf`, 'application/pdf');
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
      fileName: 'tTypeSlipcaseCoverTest',
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
      download(stampFile, `${fileName}_parvalks.pdf`, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
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
      fileName: 'hTypeSlipcaseBoardTest',
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
      download(stampFile, `${fileName}_pape.pdf`, 'application/pdf');
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
      fileName: 'hTypeSlipcaseCoverTest',
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
      download(stampFile, `${fileName}_parvalks.pdf`, 'application/pdf');
    } catch (error) {
      console.log(error);
    }
  },
};
