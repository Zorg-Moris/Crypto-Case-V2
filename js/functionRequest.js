"use strict";

function request(coin) {
    let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD,EUR`;
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }
        }
        xhr.ontimeout = function () {
            reject('timeout');
        }
        xhr.open("GET", url, true);
        xhr.send(null);
    })
};

function historicalRequest(coin, term) {
    let currency = state.chooseCurrensy;
    let url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=${currency}&limit=${term}`;
    // console.log("currency", currency);
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }
        }
        xhr.ontimeout = function () {
            reject("timeout");
        }
        xhr.open("GET", url, true);
        xhr.send(null);
    })
};