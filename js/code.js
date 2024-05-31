function choosesize(label) {
    var labels = document.querySelectorAll('.info label');

    labels.forEach(function(lbl) {
        lbl.classList.remove('checked');
    });
    label.classList.add('checked');
}

function chooseColor(colo){
    var clolr = document.querySelectorAll('.color label');
    clolr.forEach(function(lv){
        lv.classList.remove('change');
    });
    colo.classList.add('change');
}