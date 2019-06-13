(function(){
    'use strict';
    
    let count = 0;
    const empty = {
        x: '300',
        y: '300'
    }
    const init = function() {
        let i = 0;
        $('#puzzlearea>div').each(function(){
            let x = ((i % 4) * 100) ;
            let y = (Math.floor(i / 4) * 100);
            $(this).addClass("puzzlepiece");
            $(this).css({
                'left': x + 'px',
                'top': y + 'px',
                'background-image': 'url("background.jpg")',
                'background-position': -x + 'px ' + (-y) + 'px'
            })
            this.x = x;
            this.y = y;
            i++;
        });
    };

    const play = function(){
        $('#puzzlearea>div').mouseover(isValid);
        $('#puzzlearea>div').click(move);
        $('#shufflebutton').click(shuffle);
    }

    const shuffle = function(){
        
        if(count != 0) return false;
        let doShuffle;
        doShuffle = setInterval(function(){
            $('#shufflebutton').attr('disabled', true);
            $('#puzzlearea>div').each(function(){
                $(this).mouseover();
            });
            let piece = $('.movablepiece');
            let len = piece.length;
            let index = Math.floor(Math.random() * len);
            piece[index].click();
            count++;
            if(count > 100){
                clearInterval(doShuffle);
                count = 0;
                $('#shufflebutton').attr('disabled', false);
            }
        }, 50);
    }

    const isValid = function(evt){
        evt.target.valid = false;
        if(evt.target.y == empty.y){
            if(evt.target.x + 100 == empty.x || evt.target.x - 100 == empty.x)
                evt.target.valid = true;
        } else if(evt.target.x == empty.x){
            if(evt.target.y + 100 == empty.y || evt.target.y - 100 == empty.y)
                evt.target.valid = true;
        }
        evt.target.valid ? 
            $(evt.target).addClass('movablepiece') :
            $(evt.target).removeClass('movablepiece');
    }

    const move = function(evt){
        if(!evt.target.valid) return false;
        let {x, y} = empty;
        empty.x = evt.target.x;
        empty.y = evt.target.y;
        evt.target.x = x;
        evt.target.y = y;

        $(evt.target).css({
            'left': x + 'px',
            'top': y + 'px'
        });
    }

    $(function(){
        init();
        play();
    })

})();