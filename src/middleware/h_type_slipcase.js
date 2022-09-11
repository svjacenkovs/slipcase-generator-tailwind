let mmToPt = mm => mm / 0.352777778;
export let hTypeSlipcase = {
    calculateBoardLines: function (width, height, depth, materialThickness) {
        let lines = [
            {
                lineNumber: 1,
                color: 'black',
                startX: 0,
                startY: 0,
                endX: 0,
                endY: 2 * width + 4 * materialThickness + height,
            },
            {
                lineNumber: 2,
                color: 'black',
                startX: 0,
                startY: 0,
                endX: depth,
                endY: 0,
            },
            {
                lineNumber: 3,
                color: 'red',
                startX: 0,
                startY: width + materialThickness,
                endX: depth,
                endY: width + materialThickness,
            },
            {
                lineNumber: 4,
                color: 'red',
                startX: 0,
                startY: width + height + 3 * materialThickness,
                endX: depth,
                endY: width + height + 3 * materialThickness,
            },
            {
                lineNumber: 5,
                color: 'black',
                startX: 0,
                startY: 2 * width + 4 * materialThickness + height,
                endX: depth,
                endY: 2 * width + 4 * materialThickness + height,
            },
            {
                lineNumber: 6,
                color: 'black',
                startX: depth,
                startY: 0,
                endX: depth,
                endY: width + materialThickness,
            },
            {
                lineNumber: 7,
                color: 'red',
                startX: depth,
                startY: width + materialThickness,
                endX: depth,
                endY: width + height + 3 * materialThickness,
            },
            {
                lineNumber: 8,
                color: 'black',
                startX: depth,
                startY: width + height + 3 * materialThickness,
                endX: depth,
                endY: 2 * width + height + 4 * materialThickness,
            },
            {
                lineNumber: 9,
                color: 'black',
                startX: depth,
                startY: width,
                endX: depth + width,
                endY: width,
            },
            {
                lineNumber: 10,
                color: 'black',
                startX: depth,
                startY: width + height + 4 * materialThickness,
                endX: depth + width,
                endY: width + height + 4 * materialThickness,
            },
            {
                lineNumber: 11,
                color: 'black',
                startX: depth + width,
                startY: width - (width - 2 * materialThickness),
                endX: depth + width,
                endY: width + 2 * materialThickness,
            },
            {
                lineNumber: 12,
                color: 'red',
                startX: depth + width,
                startY: width + 2 * materialThickness,
                endX: depth + width,
                endY: width + height + 2 * materialThickness,
            },
            {
                lineNumber: 13,
                color: 'black',
                startX: depth + width,
                startY: width + height + 2 * materialThickness,
                endX: depth + width,
                endY: 2 * width + height + 2 * materialThickness,
            },
            {
                lineNumber: 14,
                color: 'black',
                startX: depth + width,
                startY: width - (width - 2 * materialThickness),
                endX: 2 * depth + width,
                endY: width - (width - 2 * materialThickness),
            },
            {
                lineNumber: 15,
                color: 'red',
                startX: depth + width,
                startY: width + 2 * materialThickness,
                endX: 2 * depth + width,
                endY: width + 2 * materialThickness,
            },
            {
                lineNumber: 16,
                color: 'red',
                startX: depth + width,
                startY: width + height + 2 * materialThickness,
                endX: 2 * depth + width,
                endY: width + height + 2 * materialThickness,
            },
            {
                lineNumber: 17,
                color: 'black',
                startX: depth + width,
                startY: 2 * width + height + 2 * materialThickness,
                endX: 2 * depth + width,
                endY: 2 * width + height + 2 * materialThickness,
            },
            {
                lineNumber: 18,
                color: 'black',
                startX: 2 * depth + width,
                startY: width - (width - 2 * materialThickness),
                endX: 2 * depth + width,
                endY: 2 * width + height + 2 * materialThickness,
            }
        ];
        return lines;
    },
    calculateCasing: function (width, height, depth, materialThickness) {
        let lines = [
            {
                lineNumber: 1,
                color: 'black',
                startX: 0,
                startY: 0,
                endX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: 0
            },
            {
                lineNumber: 2,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: 0,
                endX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: width + materialThickness - mmToPt(4)
            },
            {
                lineNumber: 3,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: width + materialThickness - mmToPt(4),
                endX: depth + 2 * materialThickness + mmToPt(15),
                endY: width + materialThickness - mmToPt(1)
            },
            {
                lineNumber: 4,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15),
                startY: width + materialThickness - mmToPt(1),
                endX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: width + materialThickness - mmToPt(4)
            },
            {
                lineNumber: 5,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: width + materialThickness - mmToPt(4),
                endX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: width + materialThickness - mmToPt(12)
            },
            {
                lineNumber: 6,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: width + materialThickness - mmToPt(12),
                endX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: width + materialThickness - mmToPt(12)
            },
            {
                lineNumber: 7,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: width + materialThickness - mmToPt(12),
                endX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: width + materialThickness - mmToPt(4)
            },
            {
                lineNumber: 8,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: width + materialThickness - mmToPt(4),
                endX: depth + width + 4 * materialThickness + mmToPt(15),
                endY: width + materialThickness - mmToPt(1)
            },
            {
                lineNumber: 9,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15),
                startY: width + materialThickness - mmToPt(1),
                endX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: width + materialThickness - mmToPt(4)
            },
            {
                lineNumber: 10,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: width + materialThickness - mmToPt(4),
                endX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: mmToPt(2.5)
            },
            {
                lineNumber: 11,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: mmToPt(2.5),
                endX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(3.5),
                endY: 0
            },
            {
                lineNumber: 12,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(3.5),
                startY: 0,
                endX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                endY: 0
            },
            {
                lineNumber: 13,
                color: 'black',
                startX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                startY: 0,
                endX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                endY: width - mmToPt(0.5)
            },
            {
                lineNumber: 14,
                color: 'black',
                startX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                startY: width - mmToPt(0.5),
                endX: 2 * depth + width + 7 * materialThickness + mmToPt(16.5),
                endY: width - mmToPt(0.5)
            },
            {
                lineNumber: 15,
                color: 'black',
                startX: 2 * depth + width + 7 * materialThickness + mmToPt(16.5),
                startY: width - mmToPt(0.5),
                endX: 2 * depth + width + 5 * materialThickness + mmToPt(16.5),
                endY: width + materialThickness
            },
            {
                lineNumber: 16,
                color: 'black',
                startX: 2 * depth + width + 5 * materialThickness + mmToPt(16.5),
                startY: width + materialThickness,
                endX: 2 * depth + width + 6 * materialThickness + mmToPt(16.5),
                endY: width + 3 * materialThickness
            },
            {
                lineNumber: 17,
                color: 'black',
                startX: 2 * depth + width + 6 * materialThickness + mmToPt(16.5),
                startY: width + 3 * materialThickness,
                endX: 2 * depth + width + 6 * materialThickness + mmToPt(30),
                endY: width + 3 * materialThickness
            },
            {
                lineNumber: 18,
                color: 'black',
                startX: 2 * depth + width + 6 * materialThickness + mmToPt(30),
                startY: width + 3 * materialThickness,
                endX: 2 * depth + width + 6 * materialThickness + mmToPt(30),
                endY: width + height + 3 * materialThickness
            },
            {
                lineNumber: 19,
                color: 'black',
                startX: 2 * depth + width + 6 * materialThickness + mmToPt(30),
                startY: width + height + 3 * materialThickness,
                endX: 2 * depth + width + 6 * materialThickness + mmToPt(16.5),
                endY: width + height + 3 * materialThickness
            },
            {
                lineNumber: 20,
                color: 'black',
                startX: 2 * depth + width + 6 * materialThickness + mmToPt(16.5),
                startY: width + height + 3 * materialThickness,
                endX: 2 * depth + width + 5 * materialThickness + mmToPt(16.5),
                endY: width + height + 5 * materialThickness
            },
            {
                lineNumber: 21,
                color: 'black',
                startX: 2 * depth + width + 5 * materialThickness + mmToPt(16.5),
                startY: width + height + 5 * materialThickness,
                endX: 2 * depth + width + 7 * materialThickness + mmToPt(16.5),
                endY: width + height + 6 * materialThickness + mmToPt(0.5)
            },
            {
                lineNumber: 22,
                color: 'black',
                startX: 2 * depth + width + 7 * materialThickness + mmToPt(16.5),
                startY: width + height + 6 * materialThickness + mmToPt(0.5),
                endX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                endY: width + height + 6 * materialThickness + mmToPt(0.5)
            },
            {
                lineNumber: 23,
                color: 'black',
                startX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                startY: width + height + 6 * materialThickness + mmToPt(0.5),
                endX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                endY: 2 * width + height + 5 * materialThickness
            },
            {
                lineNumber: 24,
                color: 'black',
                startX: 2 * depth + width + 7 * materialThickness + mmToPt(30),
                startY: 2 * width + height + 5 * materialThickness,
                endX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(3.5),
                endY: 2 * width + height + 5 * materialThickness
            },
            {
                lineNumber: 25,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(3.5),
                startY: 2 * width + height + 5 * materialThickness,
                endX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: 2 * width + height + 5 * materialThickness - mmToPt(2.5)
            },
            {
                lineNumber: 26,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: 2 * width + height + 5 * materialThickness - mmToPt(2.5),
                endX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: width + height + 5 * materialThickness + mmToPt(4)
            },
            {
                lineNumber: 27,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: width + height + 5 * materialThickness + mmToPt(4),
                endX: depth + width + 4 * materialThickness + mmToPt(15),
                endY: width + height + 5 * materialThickness + mmToPt(1)
            },
            {
                lineNumber: 28,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15),
                startY: width + height + 5 * materialThickness + mmToPt(1),
                endX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: width + height + 5 * materialThickness + mmToPt(4)
            },
            {
                lineNumber: 29,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: width + height + 5 * materialThickness + mmToPt(4),
                endX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: width + height + 5 * materialThickness + mmToPt(12)
            },
            {
                lineNumber: 30,
                color: 'black',
                startX: depth + width + 4 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: width + height + 5 * materialThickness + mmToPt(12),
                endX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: width + height + 5 * materialThickness + mmToPt(12)
            },
            {
                lineNumber: 31,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: width + height + 5 * materialThickness + mmToPt(12),
                endX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                endY: width + height + 5 * materialThickness + mmToPt(4)
            },
            {
                lineNumber: 32,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) + mmToPt(1.5),
                startY: width + height + 5 * materialThickness + mmToPt(4),
                endX: depth + 2 * materialThickness + mmToPt(15),
                endY: width + height + 5 * materialThickness + mmToPt(1)
            },
            {
                lineNumber: 33,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15),
                startY: width + height + 5 * materialThickness + mmToPt(1),
                endX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: width + height + 5 * materialThickness + mmToPt(4)
            },
            {
                lineNumber: 34,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: width + height + 5 * materialThickness + mmToPt(4),
                endX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                endY: 2 * width + height + 5 * materialThickness
            },
            {
                lineNumber: 35,
                color: 'black',
                startX: depth + 2 * materialThickness + mmToPt(15) - mmToPt(1.5),
                startY: 2 * width + height + 5 * materialThickness,
                endX: 0,
                endY: 2 * width + height + 5 * materialThickness
            },
            {
                lineNumber: 36,
                color: 'black',
                startX: 0,
                startY: 2 * width + height + 5 * materialThickness,
                endX: 0,
                endY: width + height + 6 * materialThickness + mmToPt(0.5)
            },
            {
                lineNumber: 37,
                color: 'black',
                startX: 0,
                startY: width + height + 6 * materialThickness + mmToPt(0.5),
                endX: mmToPt(13.5) - materialThickness,
                endY: width + height + 6 * materialThickness + mmToPt(0.5),
            },
            {
                lineNumber: 38,
                color: 'black',
                startX: mmToPt(13.5) - materialThickness,
                startY: width + height + 6 * materialThickness + mmToPt(0.5),
                endX: materialThickness + mmToPt(13.5),
                endY: width + height + 5 * materialThickness
            },
            {
                lineNumber: 39,
                color: 'black',
                startX: materialThickness + mmToPt(13.5),
                startY: width + height + 5 * materialThickness,
                endX: mmToPt(13.5),
                endY: width + height + 3 * materialThickness
            },
            {
                lineNumber: 40,
                color: 'black',
                startX: mmToPt(13.5),
                startY: width + height + 3 * materialThickness,
                endX: 0,
                endY: width + height + 3 * materialThickness
            },
            {
                lineNumber: 41,
                color: 'black',
                startX: 0,
                startY: width + height + 3 * materialThickness,
                endX: 0,
                endY: width + 3 * materialThickness
            },
            {
                lineNumber: 42,
                color: 'black',
                startX: 0,
                startY: width + 3 * materialThickness,
                endX: mmToPt(13.5),
                endY: width + 3 * materialThickness
            },
            {
                lineNumber: 43,
                color: 'black',
                startX: mmToPt(13.5),
                startY: width + 3 * materialThickness,
                endX: materialThickness + mmToPt(13.5),
                endY: width + materialThickness
            },
            {
                lineNumber: 44,
                color: 'black',
                startX: materialThickness + mmToPt(13.5),
                startY: width + materialThickness,
                endX: mmToPt(13.5) - materialThickness,
                endY: width - mmToPt(0.5)
            },
            {
                lineNumber: 45,
                color: 'black',
                startX: mmToPt(13.5) - materialThickness,
                startY: width - mmToPt(0.5),
                endX: 0,
                endY: width - mmToPt(0.5)
            },
            {
                lineNumber: 46,
                color: 'black',
                startX: 0,
                startY: width - mmToPt(0.5),
                endX: 0,
                endY: 0
            },
            { // Bigu līnijām tiek pielikti klāt papildus punkti (pt), lai biga nelīstu virsū uz naža.
                lineNumber: 47,
                color: 'red',
                startX: materialThickness + mmToPt(15) + 1, 
                startY: 0 + 0.5,
                endX: materialThickness + mmToPt(15) + 1,
                endY: 2 * width + height + 5 * materialThickness - 0.5
            },
            {
                lineNumber: 48,
                color: 'red',
                startX: depth + 2 * materialThickness + mmToPt(15),
                startY: width + materialThickness + 0.5,
                endX: depth + 2 * materialThickness + mmToPt(15),
                endY: width + height + 5 * materialThickness - 0.5
            },
            {
                lineNumber: 49,
                color: 'red',
                startX: depth + width + 4 * materialThickness + mmToPt(15),
                startY: width + materialThickness + 0.5,
                endX: depth + width + 4 * materialThickness + mmToPt(15),
                endY: width + height + 5 * materialThickness - 0.5
            },
            {
                lineNumber: 50,
                color: 'red',
                startX: 2 * depth + width + 5 * materialThickness + mmToPt(15) - 1,
                startY: 0 + 0.5,
                endX: 2 * depth + width + 5 * materialThickness + mmToPt(15) - 1,
                endY: 2 * width + height + 5 * materialThickness - 0.5
            },
            {
                lineNumber: 51,
                color: 'red',
                startX: materialThickness + mmToPt(15) + 1,
                startY: width + materialThickness,
                endX: 2 * depth + width + 5 * materialThickness + mmToPt(15) - 1,
                endY: width + materialThickness
            },
            {
                lineNumber: 52,
                color: 'red',
                startX: materialThickness + mmToPt(15) + 1,
                startY: width + height + 5 * materialThickness,
                endX: 2 * depth + width + 5 * materialThickness + mmToPt(15) - 1,
                endY: width + height + 5 * materialThickness
            },
        ];
        return lines;
    },
};
