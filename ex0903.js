(function () {
    "use strict";
    var ai1 = document.getElementById('AvailableItems'),
        si1 = document.getElementById('SelectedItems'),
        addButton = window.document.getElementById('AddItems'),
        remButton = window.document.getElementById('RemItems'),
        remAllButton = document.getElementById('RemAllItems'),
        addAllButton = document.getElementById('AddAllItems');

    
    function addItems(ai, si) {
        var opt,
            i;

        for (i = 0; i < ai.options.length; i += 1) {
            if (ai.options[i].selected) {
                opt = ai.options[i];
                si.options[si.options.length] = new Option(opt.innerHTML, opt.value);
                ai.options[i] = null;
                i = i - 1;
            }
        }
    }

    function addAll(ai, si) {
        var opt,
            i;
        
        for (i = 0; i < ai.options.length; i += 1) {
            opt = ai.options[i];
            si.options[si.options.length] = new Option(opt.innerHTML, opt.value);
        }
        ai.options.length = 0;
    }

    addButton.addEventListener('click', function () {
        addItems(ai1, si1);
    });
    
    remButton.addEventListener('click', function () {
        addItems(si1, ai1);
    });

    remAllButton.addEventListener('click', function () {
        addAll(si1, ai1);
    });

    addAllButton.addEventListener('click', function () {
        addAll(ai1, si1);
    });
}());