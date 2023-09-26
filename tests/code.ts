export function len(s: string): number {
    return s.length
}

export function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('')
}

export function sort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b)
}

export function sqrt(n: number): number {
    if (n < 0)
        throw new Error("Cannot take square root of negative number")
    
    return Math.sqrt(n)
}

export function sumArray(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0)
}

export async function fetchUserData(userId: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await response.json()

    if(JSON.stringify(data) === '{}')
        throw new Error("User not found")
    
    return data
}


export function fib(arr: number[]){
    if (arr.length < 2)
        throw new Error("Array must have at least 2 elements")

    //check if the arr is fibonnaci
    if(arr[0] !== 0 || arr[1] !== 1)
        throw new Error("Array is not a fibonacci sequence")

    for (let i = 2; i < arr.length; i++){
        if (arr[i] !== arr[i - 1] + arr[i - 2])
            throw new Error("Array is not a fibonacci sequence")
    }

    const len = arr.length
    return arr[len - 1] + arr[len - 2]
}