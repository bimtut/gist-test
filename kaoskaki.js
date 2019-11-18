function kaoskaki(arr) {
    // getting unique value
    let unique = [...new Set(arr)]
    let totalPair = 0

    // using Map
    unique.map(data => {
        let pair = arr.filter(item => item === data)
        let pairCount = Math.floor(pair.length / 2)
        totalPair += pairCount
    })

    // using For Loops
    // for (let i =0; i < unique.length; i++) {
    //     let pair  = arr.filter(item => item === unique[i])
    //     let pairCount = Math.floor(pair.length/2)
    //     totalPair += pairCount
    // }
    return (`Kaos kaki yang ditemukan sejumlah ${totalPair} pasang`)
}

// Test case
console.log(kaoskaki([1, 1, 1, 1, 2, 44, 2, 1, 3, 4, 21, 1]))
console.log(kaoskaki([10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log(kaoskaki([1, 2, 1, 2, 1, 3, 2]))