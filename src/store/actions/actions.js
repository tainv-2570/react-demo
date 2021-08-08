import * as actionTypes from './actionTypes';

export const changeCategory = (data) => {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        categoryLvl0: data.categoryLvl0,
        categoryLvl1: data.categoryLvl1,
        categoryLvl2: data.categoryLvl2,
    }
}

export const changeType = (data) => {
    return {
        type: actionTypes.CHANGE_TYPE,
        productType: data.type
    }
}
export const changeBrand = (data) => {
    return {
        type: actionTypes.CHANGE_BRAND,
        brand: data.brand
    }
}
export const changeRating = (data) => {
    return {
        type: actionTypes.CHANGE_RATING,
        rating_gte: data.rating_gte
    }
}
export const changePrice = (data) => {
    return {
        type: actionTypes.CHANGE_PRICE,
        price_gte: data.price_gte,
        price_lte: data.price_lte,
    }
}
export const changeOrder = (data) => {
    return {
        type: actionTypes.CHANGE_ORDER,
        sort: data.sort,
        order: data.order
    }
}
export const changeProductName = (data) => {
    return {
        type: actionTypes.CHANGE_PRODUCT_NAME,
        name: data.name
    }
}
export const changePage = (data) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page: data.page
    }
}

export const clearFilter = () => {
    return {
        type: actionTypes.CLEAR_FILTER,
    }
}
