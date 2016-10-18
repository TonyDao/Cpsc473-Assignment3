var main = function() {
    'use strict';

    //display element field
    var displayFieldTwo = function () {
        $('.field:eq(2)').removeClass('hidden');
        $('.field:eq(2)').addClass('visible');
    };

    //display both fields
    var displayBothField = function() {
        displayFieldTwo();
        $('.field:eq(3)').removeClass('hidden');
        $('.field:eq(3)').addClass('visible');
    };

    //hide both field
    var hideFields = function () {
        if($('.field:eq(2)').hasClass('visible')) {
            $('.field:eq(2)').removeClass('visible');
            $('.field:eq(2)').addClass('hidden');
        }
        if($('.field:eq(3)').hasClass('visible')) {
            $('.field:eq(3)').removeClass('visible');
            $('.field:eq(3)').addClass('hidden');
        }
    };

    //sumbit button clicked
    $('.ui.submit.button').on('click', function() {
        $('.ui.message').remove();
        
        var funcName = $('#functions').val(),
            array = $('#array').val().split(','),
            element = $('#element').val(),
            amount = $('#amount').val(),
            $result = $('<div class="ui">'),
            jsonObj,
            data;

        var url = '/' + funcName;

        var object = {array: array, element:element, amount:amount},
            jsonData = JSON.stringify(object);

        $.ajax({
            type:'POST',
            url: url,
            dataType: 'json',
            data: jsonData,
            success: function(jsonResult){
                data = jsonResult.result.toString();
                
                //check if result or error message
                if(data.indexOf('Error') >= 0){
                    console.log('get in error');
                    $result.addClass('red');
                } else {
                    $result.addClass('positive');
                }

                $result.addClass('message transition hidden');
                $result.text('Result: ' + data);
                $('.result').append($result);
                $('.ui.message').transition('fade down', 300);
                setTimeout(function() {
                    $('.ui.message').transition('fade down', 300);
                },3000);
            },
            error: function(){
                console.log('Error Post Largest');
            }
        });        
    });

     $('select.dropdown').change(function(){
        var selection = $('.dropdown option:selected').val();
        hideFields();

        if(selection === 'arrayContainAString') {
            displayFieldTwo();
        } else if (selection === 'arrayContainNTimes') {
            displayBothField();            
        }
    });

    //enable dropdown selection
    $('select.dropdown')
        .dropdown()
    ;
};

$(document).ready(main);