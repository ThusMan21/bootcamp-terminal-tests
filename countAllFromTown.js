export default function countAllFromTown(registrationNumbers, town) {
    if (!registrationNumbers || !town) return 0;
    
    const registrations = registrationNumbers.split(',').map(reg => reg.trim());
    const townRegistrations = registrations.filter(reg => reg.startsWith(town));
    
    return townRegistrations.length;
}