module.exports = {
    mysort: function (alphabet) {
        {
            return function (a, b) {
                var index_a = alphabet.indexOf(a[0]),
                    index_b = alphabet.indexOf(b[0]);

                if (index_a == index_b) {             //sorting with comparision
                    
                    if (a < b) {
                        return -1;
                    } else if (a > b) {
                        return 1;
                    }
                    return 0;
                } else {
                    return index_a - index_b;
                }
            }
        }

    }

}