

function translateText() {
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161010T230126Z.7d6eb4b01e697708.1ded18ddbd27002a9fa2ba1786c1148a3b05e9f7";
    var text = "&text=" + $('#message').val();
    var lang = "&lang=fr";

    var requestUrl = url + text + lang;

    $.getJSON(requestUrl, function (data) {
        console.log(data);

        $('#Translated').text(data.text[0]);
    });
}