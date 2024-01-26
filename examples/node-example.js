import {translation} from '../dist/preklad-io-js-client.mjs';

async  function translate() {

    //  list of text for translation
    const translationObject = {
        hello: "Hello world",
        goodbye: "Goodbye world",
        save: "Save your data",
        confirm: "Confirm",
    }


    const singleText = 'Please translate me as fast as you can.';
    try {

        // set api key
        translation.config.apiKey = 'YOUR_API_KEY';

        // translate data to Slovak language
        await translation.tr(translationObject, 'sk');

        //translate text  to Slovak language
        await translation.tr(singleText, 'sk');

        // translate data to Polish language
        await translation.tr(translationObject, 'pl');



        // show translated text from object
        console.log("Hello in Polish: ", translation.find('hello'));  // the last translation  was to Polish language, so we don't need to specify language
        console.log("Hello in Slovak: ", translation.find('hello', 'sk'));

        // show translated text from object
        console.log("Goodbye in Polish: ",  translation.find('goodbye', 'pl'));

        console.log("Goodbye in Slovak: ",  translation.find('goodbye', 'sk'));

        // show translated text
        console.log(`Translate '${singleText}' to Slovak: `, translation.find(singleText, 'sk'));


    } catch (error) {
        console.log("Failed to call translate API:", error);
    }
}


(async () => {
    await translate();
})();

