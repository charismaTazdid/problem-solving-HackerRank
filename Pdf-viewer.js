// Problem : https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true

function designerPdfViewer(h, word) {
    let l = 'abcdefghijklmnopqrstuvwxyz'.split(''), x = 0;
    word.split('').forEach((letter) => {
       h[l.indexOf(letter)] > x ?  x = h[l.indexOf(letter)] : 0
    })
    return x * word.length
}