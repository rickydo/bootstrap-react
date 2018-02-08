// add key to classes
export function classify(key, value){
    if(value[0]==='-') value = key+value;

    // use string literals
    value = value.split(' -').join(` ${key}-`)
    return `${key} ${value}`;
}