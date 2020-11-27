function mySearch() {
    var input, e, view, txtValue, p, filter;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    view = document.querySelectorAll('article .col-md-3');
    for (e = 0; e < view.length; e++) {
        //p_01 = document.querySelector('.men-tshirt');
        //console.log(p_01);

        if (view[e]) {
            txtValue = view[e].textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                view[e].style.display = "";


            } else {
                view[e].style.display = "none";
            }
        }


    }

}