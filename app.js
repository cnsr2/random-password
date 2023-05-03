
const _data = {
    _lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    _upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    _numbers: '0123456789',
    _symbols: '!@#$%^&*()+~`|}{[]:;?><,./-=',
}
let Kisi = "";
let _PW = "";
const createPwd = (_low, _upp, _num, _sym, _times) => {

    if (_low == true) {
        Kisi += _data._lowerCase
        _PW += Kisi[(Math.floor(Math.random() * Kisi.length))];
    }
    if (_upp == true) {
        Kisi += _data._upperCase
        _PW += Kisi[(Math.floor(Math.random() * Kisi.length))];
    }
    if (_num == true) {
        Kisi += _data._numbers
        _PW += Kisi[(Math.floor(Math.random() * Kisi.length))];
    }
    if (_sym == true) {
        Kisi += _data._symbols
        _PW += Kisi[(Math.floor(Math.random() * Kisi.length))];
    }
    if (_PW.length <= 0) {
        return "error";
    }
    for (let i = _PW.length; i < _times - 1; i++) {
        _PW += Kisi[(Math.floor(Math.random() * Kisi.length))];
    }
    return _PW;
}

x = false;
y = true;
z = true;
k = true;
t = 16;
console.log(createPwd(x, y, z, k, t));
