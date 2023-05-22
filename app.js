function spacey(array){
	let string = ''
	return array.map( (e) => string += e )

    // let res = []
    // let temp = array[0]
    // for (let i = 1; i < array.length + 1; i++) {
    //     res.push(temp)
    //     temp = temp + array[i]
    // }
    // return res
}

console.log(spacey(['kevin', 'has','no','space']));