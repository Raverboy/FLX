function formatTime(d) {
    let days = Math.floor(d / 3600);
    let hours = Math.floor(d % 3600 / 60);
    let minutes = Math.floor(d % 3600 % 60);
return(console.log(`${days} day(s) ${hours} hour(s) ${minutes} minute(s).`));
}
formatTime(120);
formatTime(59);
formatTime(3601);