console.log('Javascript link working')

function startTraining(number) {
    /*
    let data = strategems[number]
    let buttonsToPress = data.keys;
    let index = 0;

     */
    let buttonsToPress;
    let index = 0;

    fetch('stratagems.json')
        .then(response => response.json())
        .then(data => {
            let stratagems = data;
            buttonsToPress = stratagems[number].keys;

            console.log(buttonsToPress);
        })
        .catch(error => {
            console.error('Fehler beim Laden der JSON-Datei:', error);
        });


    window.addEventListener('keydown', function (event) {
        if (event.key == buttonsToPress[index]) {
            toggleArrow(buttonsToPress, index)
            index++
            //console.log("Index: " + index + " Key: " + event.key)
            if (index == buttonsToPress.length) {
                index = 0
                this.location.reload()
                //alert("Richtig!")
            }
        } else {
            this.alert("Falscher Key!")
            index = 0
            this.location.reload()
        }
    })
}

function toggleArrow(buttonsToPress, index) {
    index1 = Number(index + 1)
    currentSymbol = document.getElementById("arrow" + index1).src;
    directionSymbol = currentSymbol.split("_")[0];
    pressedSymbol = directionSymbol + "_Pressed.webp"

    document.getElementById("arrow" + index1).src = pressedSymbol
}



