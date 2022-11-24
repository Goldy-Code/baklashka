function calculations() {
	what = prompt('pls choose case from 1 to 4', '')

	switch (+what) {
		case 1:
			alert('in this case you will see which argument is smaller, P.S. check the console log')
			let a = prompt('a', '');
			let b = prompt('b', '');
			if (a < b) return alert(a);
			return alert(b);

		case 2:
			let x = prompt('x', '');
			let n = prompt('n', '');
			return alert(x ** n);
		case 3:
			alert('in this case you will see odd numbers from m to g, P.S. check the console log');
			let m = +prompt('m', '');
			let g = +prompt('g', '');
			for (let i = m; i < g; i++) {
				if (i % 2) console.log(i);
			}
			break;
		case 4:
			let y = +prompt('y', '');
			let z = +prompt('z', '');
			nextPrime:
			for (let i = y; i <= z; i++) {
				for (let j = 2; j < i; j++) {
					if (i % j == 0) continue nextPrime;
				}
				console.log(i);
			}
			break;
		default:
			break;
	}
}
calculations();

