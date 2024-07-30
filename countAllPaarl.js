export default function countAllPaarl(registrationNumbers) {
    if (!registrationNumbers) return 0;
    
    const registrations = registrationNumbers.split(',').map(reg => reg.trim());
    const paarlRegistrations = registrations.filter(reg => reg.startsWith('CJ'));
    
    return paarlRegistrations.length;
}