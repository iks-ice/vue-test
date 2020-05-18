const beuatify = number => {
    const r = new Intl.NumberFormat('ua-Ua', { useGrouping: true })
    return r.format(number);
}

const prettify = number => {
    let res = String(number);
    const intFloat = res.split('.');
    const int = intFloat[0];
    const float = intFloat[1];
    const highRank = int.length % 3;
    res='';
    res += `${int.slice(0, highRank)} `;
    const rest = int.slice(highRank);
    let k = 3;
    for (let i = 0; i < rest.length; i++) {
        if( i / k < 1) {
            res += rest[i];
        } else {
            res += ' ';
            i = i - 1;
            k = k + 3;
        }
    }
    return res +=`.${float || '00'}`;
}

console.log(prettify(1000000));