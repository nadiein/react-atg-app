const formatTimeToTwoDigits = (time:Date):string => {
    return time.toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})
}

export { formatTimeToTwoDigits };
