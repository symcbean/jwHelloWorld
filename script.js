/**
 * A really simple jokuwiki widget
 *
 * e.g. <jw name='jwHelloWorld' data='{ "say" : "Hello World!" }'></jw>
 */

function jwSpeakRight(jw)
{
    var el=document.getElementById(jw.id);
    if (el) {
        var speaker=jw.speaker ? jw.speaker: 'jokuwiki';
        var c='\n<blockquote class="speak-right">';
           c+='\n<p>' + jw.say + '</p>\n</blockquote>';
           c+='\n<p class="speak-right-speaker">' + speaker + '</p>';
           el.innerHTML+=c;
           return true;
    }
    return false;
}

if (jokuwiki) {
    jokuwiki.register('jwHelloWorld', jwSpeakRight);
}
