module.exports = {
    async formatDate(val){
        const dates = val || Date.now()
        const date = new Date(dates)
        const y = date.getFullYear()
        const m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        
        return `${y}-${m}-${d}`
    }
}    
