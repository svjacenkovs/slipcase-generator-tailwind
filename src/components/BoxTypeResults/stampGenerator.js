import { hTypeSlipcase } from '../../utils/h_type_slipcase';
import { tTypeSlipcase } from '../../utils/t_type_slipcase';
import { PDFDocument, StandardFonts, cmyk } from 'pdf-lib';
import download from 'downloadjs';

let mmToPt = (mm) => mm / 0.352777778;
let ptToMm = (pt) => pt * 0.352777778;
function roundHalf(num) {
  return Math.round(num * 2) / 2;
}

export async function createBoardStamp({
  width: depth,
  height,
  spine: width,
  materialThickness,
  fileName,
}) {
  const depthInPoints = mmToPt(depth);
  const heightInPoints = mmToPt(height);
  const widthInPoints = mmToPt(width);
  const materialThicknessInPoints = mmToPt(materialThickness);

  //PAPES dokumenta izmērs
  let documentWidth = 2 * depthInPoints + widthInPoints + mmToPt(40); // Dokumenta platums punktos
  let documentHeight =
    2 * (widthInPoints + materialThicknessInPoints) +
    heightInPoints +
    2 * materialThicknessInPoints +
    mmToPt(40); // Dokumenta garums punktos
  let stampWidth = ptToMm(2 * depthInPoints + widthInPoints);
  let stampHeight = ptToMm(
    2 * (widthInPoints + materialThicknessInPoints) +
      heightInPoints +
      2 * materialThicknessInPoints
  );
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Add a blank page to the document
  const page = pdfDoc.addPage([documentWidth, documentHeight]);

  //Calculate coordinates and draw lines on page
  hTypeSlipcase
    .calculateBoardLines(
      widthInPoints,
      heightInPoints,
      depthInPoints,
      materialThicknessInPoints
    )
    .forEach((line) => {
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
    `${fileName}_papes_cirtnis: W${roundHalf(
      ptToMm(widthInPoints)
    )}_H${roundHalf(ptToMm(heightInPoints))}_D${roundHalf(
      ptToMm(depthInPoints)
    )}mm | Board: ${ptToMm(
      materialThicknessInPoints
    )}mm | Dimensions: ${roundHalf(stampWidth)}x${roundHalf(stampHeight)}mm`,
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

  // Trigger the browser to download the PDF document
  download(pdfBytes, `${fileName}_pape.pdf`, 'application/pdf');
}

export async function createCoverStamp({
  width: depth,
  height,
  spine: width,
  materialThickness,
  fileName,
}) {
  const depthInPoints = mmToPt(depth);
  const heightInPoints = mmToPt(height);
  const widthInPoints = mmToPt(width);
  const materialThicknessInPoints = mmToPt(materialThickness);
  //PĀRVALKA dokumenta izmērs
  let documentWidth =
    2 * depthInPoints +
    widthInPoints +
    7 * materialThicknessInPoints +
    mmToPt(30) +
    mmToPt(40); // Dokumenta platums punktos
  let documentHeight =
    2 * widthInPoints +
    heightInPoints +
    5 * materialThicknessInPoints +
    mmToPt(40); // Dokumenta garums punktos
  let stampWidth =
    ptToMm(2 * depthInPoints + widthInPoints + 7 * materialThicknessInPoints) +
    30;
  let stampHeight = ptToMm(
    2 * widthInPoints + heightInPoints + 5 * materialThicknessInPoints
  );
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Add a blank page to the document
  const page = pdfDoc.addPage([documentWidth, documentHeight]);

  hTypeSlipcase
    .calculateCasing(
      widthInPoints,
      heightInPoints,
      depthInPoints,
      materialThicknessInPoints
    )
    .forEach((line) => {
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
    `${fileName}_parvalka_cirtnis: W${roundHalf(
      ptToMm(widthInPoints)
    )}_H${roundHalf(ptToMm(heightInPoints))}_D${roundHalf(
      ptToMm(depthInPoints)
    )}mm | Board: ${ptToMm(
      materialThicknessInPoints
    )}mm | Dimensions: ${roundHalf(stampWidth)}x${roundHalf(stampHeight)}mm`,
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

  // Trigger the browser to download the PDF document
  download(pdfBytes, `${fileName}_parvalks.pdf`, 'application/pdf');
}
