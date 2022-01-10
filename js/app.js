const submitBtn = document.getElementById('submit');

const formElements = document.querySelectorAll('.templates-root__input');

submitBtn.addEventListener('click', function () {
    downloadTest();
});

const downloadTest = () => {

    let arrElements = [];

    formElements.forEach((item, index) => {
        arrElements.push(item.children[1].value)
    });


    const docDefinition = {
        content: [
            'First Name', arrElements[0],
            'Last Name', arrElements[1],
            'Email', arrElements[2],
        ],
    };
    pdfMake.createPdf(docDefinition).download('pdfmake.pdf');
}
