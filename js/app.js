console.log('Hello World')

strategems = [
    {
        "name": "Eagle_500KG",
        "keys": [
          "w", "d", "s", "s", "s"
        ]
    },
    {
        "name": "Eagle_Airstrike",
        "code": ["w", "d", "s", "d"]
    }
]


function startTraining(number) {
    let data = strategems[number] 
    let buttonsToPress = data.keys;
    console.log(buttonsToPress)
    let index = 0;

    window.addEventListener('keydown', function (event){
        if(event.key == buttonsToPress[index]) {
            index++
            console.log("Index: " + index + " Key: " + event.key)
            /**switch(event.key) {
                case 'w':
                    document.getElementById("arrow"+"%s", index).src = "../media/arrows/Up_Pressed.webp"
                case 'a':
                    document.getElementById("arrow"+"%s", index).src = "../media/arrows/Left_Pressed.webp"
                case 's':
                    document.getElementById("arrow"+"%s", index).src = "../media/arrows/Down_Pressed.webp"
                case 'd':
                    document.getElementById("arrow"+"%s", index).src = "../media/arrows/Right_Pressed.webp"
            }**/
            if (index == buttonsToPress.length) {
                alert("Richtig!")
                index = 0
                this.location.reload()
            } 
        } else {
            this.alert("Falscher Key!")
            index = 0
            this.location.reload()
        }
    })
}




