export default function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    var yearsAgo = currentYear - year;
    return yearsAgo;
}
