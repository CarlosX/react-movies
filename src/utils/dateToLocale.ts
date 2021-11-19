const dateToLocale = (date: string) => {
    let _tmpData = new Date(date)
    return _tmpData.toLocaleDateString([], {
        timeZone: 'America/New_York',
    })
}

export { dateToLocale }
