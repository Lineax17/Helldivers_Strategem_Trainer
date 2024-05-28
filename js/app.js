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


function main(number) {
    let data = strategems[number] 
    let buttonsToPress = data.keys;
    console.log(buttonsToPress)

    var newWindow = window.open('', '_blank');

    //append css
    var link = newWindow.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../css/style.css'; // Pfad zur CSS-Datei
    newWindow.document.head.appendChild(link);

    //append body
    for (var i = 0; i < buttonsToPress.length; i++) {
        var img = document.createElement('img');

        if (buttonsToPress[i] == "w") {
            img.src = 'media/arrows/Up_Unpressed.webp'
        } else if (buttonsToPress[i] == "a"){
            img.src = 'media/arrows/Left_Unpressed.webp'
        } else if (buttonsToPress[i] == "s"){
            img.src = 'media/arrows/Down_Unpressed.webp'
        } else if (buttonsToPress[i] == "d"){
            img.src = 'media/arrows/Right_Unpressed.webp'
        }
        newWindow.document.body.appendChild(img);
    }


    for (var i = 0; i < buttonsToPress.length; i++) {
        newWindow.addEventListener('keydown', function(event) {
        
            let key = event.key.toLowerCase();
            console.log("Der Benutzer hat die Taste gedrückt: " + key);
    
            if (buttonsToPress[numberOfArrow] == key){
                return true
            } else {
                return false
            }
        });
    }
    
}


