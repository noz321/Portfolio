var fi = 66; //parseInt(document.getElementById("first").value);
var se = 33; //parseInt(document.getElementById("second").value);

function lnko() {

    while (se != 0) {
        let t = se;
        se = fi % se;
        fi = t;
    }

    document.getElementById("txtarea").innerHTML = document.write(fi);


}
