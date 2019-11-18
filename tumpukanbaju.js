function tumpukanbaju(arr, budget) {
    // validasi
    if (Number(budget)) {
        for (let i =0; i < arr.length; i++) {
            let numb = Number(arr[i])
            // console.log(numb)
            if (!numb) {
                return `Input array harus berupa angka`
            } else {
                arr[i] = numb
            }
        }
    } else {
        return `Budget harus diisi angka`
    }
    
    let sorted = arr.sort((a, b) => a - b)

    // penghitungan
    let allCount=[]
    for (let j = 0; j < sorted.length; j++) {
        let toysCount = []
        let total = 0
        if (sorted[j] <= budget) {
            let k = j
            while (total + sorted[k] <= budget) {
                total += sorted[k]
                toysCount.push(sorted[k])
                k++
            }
            allCount.push(toysCount)
        }
    }

    // getting max length
    let lengths = []
    if (allCount.length <= 0) {
        return `Uang Sony kurang. Sony belum bisa beli apapun`
    } else {
        allCount.forEach(item => {
            lengths.push(item.length)
        })
    }
    let maxCount = Math.max(...lengths)
    let maxItem
    for (let l = 0; l < allCount.length; l++) {
        if (allCount[l].length === maxCount) {
            maxItem = allCount[l]
            break
        }
    }
    return `Sony dapat membeli ${maxCount} mainan dengan pilihan mainan [${maxItem}]`

}

console.log(tumpukanbaju([3,5,9,6,'10'], 1))
console.log(tumpukanbaju([1,3,5,9,6,'10'], 'banyak'))
console.log(tumpukanbaju([1,2,4,5,'hkdh'], 18))
console.log(tumpukanbaju([1,12,5,111,200,1000,10], 50))
console.log(tumpukanbaju( [1,2,3,4], 7))

