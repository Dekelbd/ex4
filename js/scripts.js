window.onload = function () {

    function checkBoxCheck(e) {
        var checkBox1 = document.getElementById("myCheck1");
        var checkBox2 = document.getElementById("myCheck2");
        var checkBox3 = document.getElementById("myCheck3");
        var checkBox4 = document.getElementById("myCheck4");

        if (!(checkBox1.checked === true || checkBox2.checked === true || checkBox3.checked === true || checkBox4.checked === true)) {
            document.getElementById("check_box_error").style.display = "block";
            e.preventDefault();
            e.stopPropagation();
        }
    }
    var form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", checkBoxCheck);
}
