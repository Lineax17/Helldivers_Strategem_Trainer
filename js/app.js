console.log('Javascript link working')

/**
 * Starts training a stratagem code according to the number.
 * @param number The number of the stratagem in the stratagem.json file.
 */
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

/**
 * Switches the color of the arrow from white to yellow if the right button is pressed.
 * @param buttonsToPress The buttons to press for the call in code.
 * @param index The current index.
 */
function toggleArrow(buttonsToPress, index) {
    index1 = Number(index + 1)
    currentSymbol = document.getElementById("arrow" + index1).src;
    directionSymbol = currentSymbol.split("_")[0];
    pressedSymbol = directionSymbol + "_Pressed.webp"

    document.getElementById("arrow" + index1).src = pressedSymbol
}



