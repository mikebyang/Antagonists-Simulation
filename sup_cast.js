//formatting the page
function ib_sizing(a){
    var _$temp = $('<span/>').html($(a).attr('placeholder')).css({}).appendTo('body'), 
        placeholder_width = _$temp.width();
    _$temp.remove();
    $(a).width(placeholder_width);
}
function ib_format(){
    var tracker=['#gbratio','#cgen','#cond','#obst'];
    for(var i = 0; i<tracker.length; i++){
        ib_sizing(tracker[i]);
    }
}
//run simulation
function takeover(){
    if(document.getElementById('gbratio').value.length != 0){
        class arr_ret{
            constructor(check, arr){
                this.check = check;
                this.arr = arr;
            }
        }
        var checker = (function (input) {
            var ratios = input.split(":");
            if(ratios.length != 2){
                return new arr_ret(false, []);
            }
            else{
                if(Number.isInteger(ratios[0]) && Number.isInteger(ratios[1])){
                    return new arr_ret(false, []);
                }
                else{
                    if(ratios[0] > ratios[1]){
                        return new arr_ret(true, ratios);
                    }
                    else{
                        return new arr_ret(false, []);
                    }
                }
            }
        }) (document.getElementById('gbratio').value)
        if(checker.check){
            document.getElementById('game_window').style.display='block';
            setup(checker.arr);
            game();
        }
        else{
            document.getElementById('gbratio').value='';
            alert("Input did not satisy the requirements given!");
        }
    }
    else{
        alert("No ratio was provided for the simulation!");
    }
}
//reset the simulation
function env_reset() {
    if(running){
        document.getElementById('game_window').style.display='none';
        document.getElementById('gbratio').value='';
        running=false;
        paused=false;
    }
    else{
        alert("No simulation is running!");
    }
}
//pause the simulation
function pause_play(){
    if(paused){
        paused = false;
        $('#p_play').val("Pause");
    }
    else{
        if(running){
            paused = true;
            $('#p_play').val("Play");
        }
        else{
            alert("No simulation is running!");
        }
    }
}