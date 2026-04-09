/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

inquirer.prompt([{message: "enter a link to get a qr-code (wow magic)", name: "URL"}])
        .then((answers) => {
            fs.writeFile("URL.txt", answers.URL, (err) => {
                if(err) throw err;
                console.log(answers);
            });
            var qr_png = qr.image(answers.URL, { type: 'png' });
            qr_png.pipe(fs.createWriteStream('supp.png'));

            console.log("QR Code generated! (wow magic)");
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("something happened sad");
            } else {
                console.log("something happened weird", error);
            }
        });


