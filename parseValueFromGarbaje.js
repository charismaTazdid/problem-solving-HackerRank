// REGX 
// Goal: Parse a spesipic value from a big string. 
// below the example string, I want to find the youtube video id, from a Dom.


const string = "<div class=\"epyt-video-wrapper\"><iframe loading=\"lazy\"  style=\"display: block; margin: 0px auto;\"  id=\"_ytid_88904\"  width=\"800\" height=\"450\"  data-origwidth=\"800\" data-origheight=\"450\" src=\"https://www.youtube.com/embed/2eZ07ypt6yQ?enablejsapi=1&#038;autoplay=0&#038;cc_load_policy=0&#038;cc_lang_pref=&#038;iv_load_policy=1&#038;loop=1&#038;playlist=2eZ07ypt6yQ&#038;modestbranding=1&#038;rel=0&#038;fs=1&#038;playsinline=0&#038;autohide=2&#038;theme=dark&#038;color=white&#038;controls=1&#038;\" class=\"__youtube_prefs__  epyt-is-override  no-lazyload\" data-vol=\"100\"  data-epautoplay=\"1\"  title=\"YouTube player\"  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen data-no-lazy=\"1\" data-skipgform_ajax_framebjll=\"\"></iframe></div>\n";

const filterKey = (s) => {
    let youtubeVideoId = ""
    const regex = /(https:\/\/www\.youtube\.com\/embed\/)(.*?)\?(enablejsapi)/;
    const match = regex.exec(string);
    if (match) {
        youtubeVideoId = match[2];
    }
    return youtubeVideoId;

}

console.log(filterKey(string)) // result: 2eZ07ypt6yQ