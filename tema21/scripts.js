$(() => {
    setToggleEvent();
    setExpand();
    setCollaps();
});

const setToggleEvent = () => {
    $('.title').click(toggleDescription);
};

function toggleDescription() {
    const titleIcon = $(this).find('.fas');
    const description = $(this).next('.description');

    if (description.hasClass('opened')) {
        description.removeClass('opened');
        description.toggle(1000);
        toggleElement(titleIcon);
        return;
    }

    const icon = $('.opened')
        .prev('.title')
        .find('.fas');
    toggleElement(icon);

    $('.opened').toggle(1000);
    $('.opened').removeClass('opened');

    description.addClass('opened');
    description.toggle(1000);
    toggleElement(titleIcon);
}

const toggleElement = element => {
    element.toggleClass('fa-chevron-down fa-chevron-up');
};

/* function setExpand() {
    $('.expand').click(function() {
        $('.description:not(opened)').addClass('opened');      
    });
}  */

function setExpand() {
    $('.expand').click(function () {
        if (description.hasClass('opened')) {
            description.removeClass('opened');
        }
        description.addClass('opened');
    });
}

function setCollaps() {
    $('.collaps').click(function() {
        $('.description').removeClass('opened');
        
    });
}