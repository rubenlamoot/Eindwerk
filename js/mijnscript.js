
// window.onload(function () {
    var d = new Date();
    var maand = d.getMonth();
    var next_month = 0;
    var prev_month = 0;
    $(".txtMaand").html(naamMaand(maand));
    $(".homepic").attr('src', picMaand(maand));
    $(".tekstMaand").html(tekstMaand(maand));

    $(".fa-chevron-circle-left").click(function () {
        if (maand === 0){
            next_month = maand + 1;
            prev_month = 11;
        }
        else if (maand === 11){
            next_month = 0;
            prev_month = maand - 1;
        }
        else{
            next_month = maand + 1;
            prev_month = maand - 1;
        }
        $(".txtMaand").html(naamMaand(prev_month));
        $(".homepic").attr('src', picMaand(prev_month));
        $(".tekstMaand").html(tekstMaand(prev_month));
        maand = prev_month;
    });

    $(".fa-chevron-circle-right").click(function () {
        if (maand === 0){
            next_month = maand + 1;
            prev_month = 11;
        }
        else if (maand === 11){
            next_month = 0;
            prev_month = maand - 1;
        }
        else{
            next_month = maand + 1;
            prev_month = maand - 1;
        }
        $(".txtMaand").html(naamMaand(next_month));
        $(".homepic").attr('src', picMaand(next_month));
        $(".tekstMaand").html(tekstMaand(next_month));
        maand = next_month;
    });
// });

function naamMaand(maandGetal) {
    var str_maand;
    switch (maandGetal){
        case 0 :
            str_maand = 'Januari';
            break;
        case 1 :
            str_maand = 'Februari';
            break;
        case 2 :
            str_maand = 'Maart';
            break;
        case 3 :
            str_maand = 'April';
            break;
        case 4 :
            str_maand = 'Mei';
            break;
        case 5 :
            str_maand = 'Juni';
            break;
        case 6 :
            str_maand = 'Juli';
            break;
        case 7 :
            str_maand = 'Augustus';
            break;
        case 8 :
            str_maand = 'September';
            break;
        case 9 :
            str_maand = 'Oktober';
            break;
        case 10 :
            str_maand = 'November';
            break;
        case 11 :
            str_maand = 'December';
            break;
    }
    return str_maand;
}
function picMaand(maandGetal) {
    var str_src;
    switch (maandGetal){
        case 0 :
            str_src = 'assets/images/januari.jpg';
            break;
        case 1 :
            str_src = 'assets/images/februari.jpg';
            break;
        case 2 :
            str_src = 'assets/images/maart.jpg';
            break;
        case 3 :
            str_src = 'assets/images/april.jpg';
            break;
        case 4 :
            str_src = 'assets/images/mei.jpg';
            break;
        case 5 :
            str_src = 'assets/images/juni.jpg';
            break;
        case 6 :
            str_src = 'assets/images/juli.jpg';
            break;
        case 7 :
            str_src = 'assets/images/augustus.jpg';
            break;
        case 8 :
            str_src = 'assets/images/september.jpg';
            break;
        case 9 :
            str_src = 'assets/images/oktober.jpg';
            break;
        case 10 :
            str_src = 'assets/images/november.jpg';
            break;
        case 11 :
            str_src = 'assets/images/december.jpg';
            break;
    }
    return str_src;
}
function tekstMaand(maandGetal) {
    var str_tekst;
    switch (maandGetal){
        case 0 :
            str_tekst = 'De lente lijkt nog heel ver weg, zo hartje winter.\n' +
                '                                Maar bij een knetterend haardvuur plannen maken, zaden bestellen en dromen van\n' +
                '                                een volle moestuin is eigenlijk ook een beetje moestuinieren - mentaal dan.';
            break;
        case 1 :
            str_tekst = 'Februari is de maand van de hoop: aan kleine dingetjes kun je zien dat de lente op komst is.\n' +
                '                                Het lengen van de dagen, de eerste bloembollen die bovenkomen en nu en dan al eens een warme dag...';
            break;
        case 2 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 3 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 4 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 5 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 6 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 7 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 8 :
            str_tekst = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores autem consectetur debitis deserunt ea earum eius illum ipsam mollitia natus numquam perferendis placeat praesentium quasi quo suscipit temporibus, voluptatum.';
            break;
        case 9 :
            str_tekst = 'De lente lijkt nog heel ver weg, zo hartje winter.\n' +
                '                                Maar bij een knetterend haardvuur plannen maken, zaden bestellen en dromen van\n' +
                '                                een volle moestuin is eigenlijk ook een beetje moestuinieren - mentaal dan.';
            break;
        case 10 :
            str_tekst = 'De lente lijkt nog heel ver weg, zo hartje winter.\n' +
                '                                Maar bij een knetterend haardvuur plannen maken, zaden bestellen en dromen van\n' +
                '                                een volle moestuin is eigenlijk ook een beetje moestuinieren - mentaal dan.';
            break;
        case 11 :
            str_tekst = 'De lente lijkt nog heel ver weg, zo hartje winter.\n' +
                '                                Maar bij een knetterend haardvuur plannen maken, zaden bestellen en dromen van\n' +
                '                                een volle moestuin is eigenlijk ook een beetje moestuinieren - mentaal dan.';
            break;
    }
    return str_tekst;
}
