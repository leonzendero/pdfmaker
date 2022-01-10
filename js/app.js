const downloadTest = () => {
    const docDefinition = {
        content: [
            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [ '*', 'auto', 100, '*' ],

                    body: [
                        [ 'First', 'Second', 'Third', 'The last one' ],
                        [ 'Value 1', 'Value 2wegggggggg' , 'Value 3', 'Value 4' ],
                        [ { text: 'Bold value', bold: true, color: 'red', background: 'yellow' }, 'Val 2', 'Val 3', 'Val 4' ]
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            anotherStyle: {
                fontSize: 90,
            }
        }
    };
    pdfMake.createPdf(docDefinition).download('pdfmake.pdf');
}
