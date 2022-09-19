// import { hTypeSlipcase } from './h_type_slipcase.js';
import { tTypeSlipcase } from './t_type_slipcase.js';
import { PDFDocument, StandardFonts, cmyk, isType } from 'pdf-lib';
import download from 'downloadjs';

let createPapeButton = document.getElementById('createPape');
let createParvalksButton = document.getElementById('createParvalks');
let createSlipcaseButton = document.getElementById('createSlipcase');
let papeElement = document.getElementById('papeElement');
let parvalksElement = document.getElementById('parvalksElement');
let calculateButton = document.getElementById('calculate');
let fileName;
let width;
let height;
let depth;
let materialThickness;

let mmToPt = (mm) => mm / 0.352777778;
let ptToMm = (pt) => pt * 0.352777778;
function roundHalf(num) {
  return Math.round(num * 2) / 2;
}

function setGlobals() {
  // Iegūstam ievades datus.
  fileName = document.getElementById('fileName').value;
  width = mmToPt(document.getElementById('width').valueAsNumber);
  height = mmToPt(document.getElementById('height').valueAsNumber);
  depth = mmToPt(document.getElementById('depth').valueAsNumber);
  materialThickness = mmToPt(
    document.getElementById('materialThickness').valueAsNumber
  );

  if (
    fileName === '' ||
    !isType(width, 'number') ||
    !isType(height, 'number') ||
    !isType(depth, 'number') ||
    !isType(materialThickness, 'number')
  ) {
    // Pārbaudam ievades laukus.
    alert('Lūdzu aizpildi visus ievades laukus.');
    return;
  }
}
async function pape() {
  //PAPES dokumenta izmērs
  let documentWidth = 2 * depth + width + mmToPt(40); // Dokumenta platums punktos
  let documentHeight =
    2 * (width + materialThickness) +
    height +
    2 * materialThickness +
    mmToPt(40); // Dokumenta garums punktos
  let stampWidth = ptToMm(2 * depth + width);
  let stampHeight = ptToMm(
    2 * (width + materialThickness) + height + 2 * materialThickness
  );
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Add a blank page to the document
  const page = pdfDoc.addPage([documentWidth, documentHeight]);

  //Calculate coordinates and draw lines on page
  tTypeSlipcase
    .calculateBoardLines(width, height, depth, materialThickness)
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
    `${fileName}_papes_cirtnis: W${roundHalf(ptToMm(width))}_H${roundHalf(
      ptToMm(height)
    )}_D${roundHalf(ptToMm(depth))}mm | Board: ${ptToMm(
      materialThickness
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

async function parvalks() {
  //PĀRVALKA dokumenta izmērs
  let documentWidth =
    2 * depth + width + 7 * materialThickness + mmToPt(30) + mmToPt(40); // Dokumenta platums punktos
  let documentHeight = 2 * width + height + 5 * materialThickness + mmToPt(40); // Dokumenta garums punktos
  let stampWidth = ptToMm(2 * depth + width + 7 * materialThickness) + 30;
  let stampHeight = ptToMm(2 * width + height + 5 * materialThickness);
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Add a blank page to the document
  const page = pdfDoc.addPage([documentWidth, documentHeight]);

  tTypeSlipcase
    .calculateCasing(width, height, depth, materialThickness)
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
    `${fileName}_parvalka_cirtnis: W${roundHalf(ptToMm(width))}_H${roundHalf(
      ptToMm(height)
    )}_D${roundHalf(ptToMm(depth))}mm | Board: ${ptToMm(
      materialThickness
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

function createPape() {
  setGlobals(); //Iegūstam ievades datus
  pape(); // Izveidojam PDF failu papei
}
function createParvalks() {
  setGlobals(); //Iegūstam ievades datus
  parvalks(); // Izveidojam PDF failu pārvalkam
}
function createSlipcase() {
  setGlobals();
  createPape();
  createParvalks();
}
function calculate() {
  setGlobals();

  let papeStampWidth = ptToMm(2 * depth + width);
  let papeStampHeight = ptToMm(
    2 * (width + materialThickness) + height + 2 * materialThickness
  );

  let parvalksStampWidth =
    ptToMm(2 * depth + width + 7 * materialThickness) + 30;
  let parvalksStampHeight = ptToMm(2 * width + height + 5 * materialThickness);

  papeElement.innerText = `Pape: ${roundHalf(papeStampWidth)} x ${roundHalf(
    papeStampHeight
  )} mm`;
  parvalksElement.innerHTML = `Pārvalks: ${roundHalf(
    parvalksStampWidth
  )} x ${roundHalf(parvalksStampHeight)} mm`;
}

createPapeButton.addEventListener('click', createPape);
createParvalksButton.addEventListener('click', createParvalks);
createSlipcaseButton.addEventListener('click', createSlipcase);
calculateButton.addEventListener('click', calculate);
