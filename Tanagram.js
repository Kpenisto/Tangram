$(document).ready(function() {
    const marker = document.getElementById('marker');
    let selectedPiece = null;
    let activeMarker = null;
    let markerColor = null;

    $("span").draggable();

    $('.puzzle-piece').on('mousedown', function(event) {
        if (selectedPiece === this) {
            $(this).removeClass('selected');
            selectedPiece = null;
        } else {
            $('.puzzle-piece.selected').removeClass('selected');
            $(this).addClass('selected');
            selectedPiece = $(this);
            $('#selectedPieceId').val(selectedPiece.attr('id'));
            markerColor = selectedPiece.attr('color');
        }
    });

    $('#rotate').click(function() {
        if (selectedPiece) {
            let currentRotation = parseInt($(selectedPiece).attr('data-rotation')) || 0;
            currentRotation += 15;
            $(selectedPiece).css('transform', 'rotate(' + currentRotation + 'deg)');
            $(selectedPiece).attr('data-rotation', currentRotation);
        }
    });

    $('#left').click(function() {
        if (selectedPiece) {
            let currentLeft = parseInt($(selectedPiece).css('left')) || 0;
            currentLeft -= 1;
            $(selectedPiece).css('left', currentLeft + 'px');
        }
    });

    $('#right').click(function() {
        if (selectedPiece) {
            let currentLeft = parseInt($(selectedPiece).css('left')) || 0;
            currentLeft += 1;
            $(selectedPiece).css('left', currentLeft + 'px');
        }
    });

    $('#up').click(function() {
        if (selectedPiece) {
            let currentTop = parseInt($(selectedPiece).css('top')) || 0;
            currentTop -= 1;
            $(selectedPiece).css('top', currentTop + 'px');
        }
    });

    $('#down').click(function() {
        if (selectedPiece) {
            let currentTop = parseInt($(selectedPiece).css('top')) || 0;
            currentTop += 1;
            $(selectedPiece).css('top', currentTop + 'px');
        }
    });

    document.addEventListener('mousedown', function(event) {
        marker.style.display = 'block';
        marker.style.left = event.clientX + 'px';
        marker.style.top = event.clientY + 'px';
        marker.style.backgroundColor = markerColor;

        const elements = document.elementsFromPoint(event.clientX, event.clientY);
        activeMarker = elements.find(element => element.classList.contains('puzzle-piece'));
    });

    document.addEventListener('mousemove', function(event) {
        if (activeMarker) {
            marker.style.left = event.clientX + 'px';
            marker.style.top = event.clientY + 'px';
        }
    });

    document.addEventListener('mouseup', function(event) {
        marker.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('puzzle-piece')) {
            activeMarker = event.target;
        }
    });
});
