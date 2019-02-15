'use strict';
$(function () {
    $.fancybox.showLoading();
    $.getJSON('products.json', products => {
        const $sale = $('#sale');
        const $promo = $('#promo');
        const $recommended = $('#recommended');
        const $productTemplate = $('#productTemplate');
        const PRODUCTS_TEMPLATE = _.template($productTemplate.html());
        const PRODUCTS = products;

        const PRODUCTS_SALE = {
            title: 'Распродажа',
            items: PRODUCTS.filter( product => product.type === 'sale')
        };

        const PRODUCTS_PROMO = {
            title: 'Промо-акция',
            items: PRODUCTS.filter( product => product.type === 'promo')
        };

        const PRODUCTS_RECOMMENDED = {
            title: 'Рекомендуемые товары',
            items: PRODUCTS.filter( product => product.type === 'recommended')
        };



        $sale.html(PRODUCTS_TEMPLATE(PRODUCTS_SALE));
        $promo.html(PRODUCTS_TEMPLATE(PRODUCTS_PROMO));
        $recommended.html(PRODUCTS_TEMPLATE(PRODUCTS_RECOMMENDED));
    })
        .fail((e) => {
            console.log('Ошибка', e.status, e.statusText);
        })
        .always(() => {
            $.fancybox.hideLoading();
        });
});
