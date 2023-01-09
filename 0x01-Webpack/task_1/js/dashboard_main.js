import $ from "jquery";
import _ from 'lodash';

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$('body').append('<button>Click here to get started</button>');
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

const updateCounter = () => {
    let nbr_btn_click = $('#count').html() || 0;
    $('button').on('click', () => {
        nbr_btn_click++;
        $('#count').html(`${nbr_btn_click} clicks on the button`);
    });
};

_.debounce(updateCounter, 500);
updateCounter();