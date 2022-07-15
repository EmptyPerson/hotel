import $ from "jquery";

const API = [
    'https://api.formsubmits.com/forms/98cd273f-fc7f-46e2-a831-31e1169505c1/submit',
    'https://api.formsubmits.com/forms/0ffe80df-6fc0-48b9-851d-a91479522241/submit'
]

const CodeSuccess = '6AlJaXhWRSrtHTUb'

const mail = 'vladislav.bulahov@yandex.ru' //another sent form if we have error with API

const Request = async function(message, url, codeSuccess){
    let flagError = true //if true you need to send new requestAPI
    try {
        $.ajax({
            url: url,
            method: 'post',
            async: false,
            dataType: 'html',
            data: message,
            success: function(data){
                if (data.indexOf(codeSuccess, 0) == -1 || data.toUpperCase().indexOf('ERROR', 0) != -1) {
                    console.log('something wrong with API server')
                } else
                {
                    flagError = !flagError;
                    console.log('goodServer')
                }
            }
        });

    } catch (e)  {
        console.log(e);
        flagError = !flagError;
    }

    return flagError;
}

export {Request, API, CodeSuccess, mail}
