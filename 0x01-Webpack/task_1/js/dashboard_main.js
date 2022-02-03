import $ from 'jquery';
import _ from 'lodash';

const btn = document.getElementById('count');
let count = 0;
function updateCounter() {
    count++;
    return count;
};

$(function(){
    $('body').append('<p>Holberton Dashboard</p>');
    
    $('body').append('<p>Dashboard data for the students</p>');
    
    $('body').append('<button>Click here to get started</button>');
    
    $('body').append("<p id='count'></p>");
    
    $('body').append('<p>Copyright - Holberton School</p>');

    let decouncedFunc = _.debounce(() => {
        const count = updateCounter();
        const btn = document.getElementById('count');
        btn.innerHTML(`${count} clicks on the button`);
    })
    $('button').on('click', decouncedFunc);
});
