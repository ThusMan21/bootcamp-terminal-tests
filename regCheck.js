export default function regCheck(regNumber,prefix) {
    
    const validPrefixes = ['GP','L','EC','MP'];
        
    return validPrefixes.includes(prefix)&& regNumber.endsWith(prefix);
}