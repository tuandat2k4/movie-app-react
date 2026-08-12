// format số phút
export const formatRuntime = (minute) => {
    if (!minute) return 'N/A';
    const h = Math.floor(minute/60);
    const m = minute % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`
}

// format số tiền => $200.000.000
export const formatMoney = (money) => {
    if (!money) return 'N/A';
    return "$" + money.toLocaleString();
}

// format ngày => Feb 26, 2026
export const formatDate = (date) => {
    if(!date) return 'N/A';
    const data = new Date(date);
    return data.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

