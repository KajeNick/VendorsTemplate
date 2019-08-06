$(document).ready(function () {
    $('body').on('click', '.dvf-filter-button a', function () {
        let filterSection = $('.dvf-filter-section');

        filterSection.toggle(350);
    });

    $('body').on('click', '.dvf-dropdown-preview', function () {
        let list = $(this).next(),
            needOpen = !list.is(':visible');

        $('.dvf-dropdown-list').each(function () {
            if ($(this).is(':visible')) {
                $(this).toggle(350);
            }
        });

        if (needOpen) {
            list.toggle(350);
        }

    });

    var delaySeconds = 3,
        timerDalay = delaySeconds;

    $('body').on('change', '.dvf-filter-section input', function () {
        let that = $(this);

        if (that.val() == 'all') {
            that.parent().find('input').each(function () {
                if ($(this).is(':checked') && $(this).val() != 'all') {
                    $(this).prop('checked', false);
                }
            });
        } else {
            that.parent().find('input').first().prop('checked', false);
        }
    });
});