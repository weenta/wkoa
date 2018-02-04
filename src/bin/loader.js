const fs = require('fs')

class Loader {
    parentFolder(path) {
        const CURRENT_FOLDER = 'bin'
        const idx = path.indexOf(CURRENT_FOLDER)
        return path.slice(0, idx)
    }

    loader(folder) {
        const files = fs.readdirSync(folder)
        return files.map(file => {
            const module = require(folder + '/' + file)
            return { name: file.split('.')[0], module }
        })
    }

    loadController() {
        const folder = this.parentFolder(__dirname) + 'controller'
        return this.loader(folder)
    }

    loadService() {
        const folder = this.parentFolder(__dirname) + 'service'
        return this.loader(folder)
    }
}

module.exports = Loader