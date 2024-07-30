export default function isFromBellville(registrationNumber) {
    if (!registrationNumber) return false;
    
    return registrationNumber.startsWith('CY');
}