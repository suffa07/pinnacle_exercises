(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    //console.log(planetsArray);
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsString = planetsArray.join('<br>');
    console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    planetsArray.forEach(function(element){
        console.log(element);

    });
    document.getElementById('planetsId').innerHTML = planetsArray.join('<li>');




    console.log("=====================================");
    console.log("===========Bonus Exercsise===========");
    console.log("=====================================");



    function convert24Time(time) {
        var t_array  = time.split(":");
        var hr = t_array.shift();
        var mn = t_array.shift();
        var ct = (parseInt(hr) % 12);
        var f_hr = ct.toString();
        var c_hr = parseInt(hr);
        var res;
        var a_pm;

        // console.log(typeof c_hr);
        if (c_hr === 0) {
            // f_hr = twlv;
            var twlv = 12;
            var td = "am"
            res =  twlv + ":" + mn + td;
        }
        else if (c_hr === 12) {
            // f_hr = twlv;
            var twlv = 12;
            var td = "pm"
            res =  twlv + ":" + mn + td;
        }

        else if (c_hr >= 13 && c_hr <= 23) {
            a_pm = "pm";
            res =  f_hr + ":" + mn + a_pm;
        }
        else {
            a_pm = "am";
            res =  f_hr + ":" + mn + a_pm;
        }




        return res;

    }
console.log(convert24Time("18:00"));
})();
