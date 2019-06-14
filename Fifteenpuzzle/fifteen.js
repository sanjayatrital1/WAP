(function(){
    'use strict';
    
    let count = 0;
    const isempty = {
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

    const doShuffle = function(){
        
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
            if(count > 40){
                clearInterval(doShuffle);
                count = 0;
                $('#shufflebutton').attr('disabled', false);
            }
        }, 100);
    }

    const isSuffleValid = function(evt){
        evt.target.valid = false;
        if(evt.target.y == isempty.y){
            if(evt.target.x + 100 == isempty.x || evt.target.x - 100 == isempty.x)
                evt.target.valid = true;
        } else if(evt.target.x == isempty.x){
            if(evt.target.y + 100 == isempty.y || evt.target.y - 100 == isempty.y)
                evt.target.valid = true;
        }
        evt.target.valid ? 
            $(evt.target).addClass('movablepiece') :
            $(evt.target).removeClass('movablepiece');
    }

    const changePosition = function(evt){
        if(!evt.target.valid) return false;
        let {x, y} = isempty;
        isempty.x = evt.target.x;
        isempty.y = evt.target.y;
        evt.target.x = x;
        evt.target.y = y;

        $(evt.target).css({
            'left': x + 'px',
            'top': y + 'px'
        });
    }

    $(function(){
        init();
        $('#puzzlearea>div').mouseover(isSuffleValid);
        $('#puzzlearea>div').click(changePosition);
        $('#shufflebutton').click(doShuffle);
    })

})();