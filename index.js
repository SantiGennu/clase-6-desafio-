let fs = require("fs")

class Container {
    constructor(file) {
        this.file = file

    }
    // write the file first and stringify to become string 
    async writeFile(data) {
        try {                                                        // 2 empty spaces   
            await fs.promises.writeFile(this.file, JSON.stringify(data, null, 2));

        } catch (error) {
            console.log(`error: ${error}`)
            throw new Error(error)

        }
    }

    async getAll() {
        try {
            let products = await fs.promises.readFile(this.file, 'utf-8')
            // parse to become object
            return JSON.parse(products)

        } catch (error) {
            console.log(`error: ${error}`)
            return []

        }
    }
    async getRandom() {
        const products = await this.getAll()
        return this.checkLength(products) ? products[Math.floor(Math.random() * products.length)] : null
    }
    checkLength(arr) {
        if (arr.length === 0) {
            console.error('the array is empty')
            return false
        }
        return true
    }
}

module.exports = Container;
