import data from './articles.json'

data.forEach((obj, i) => { obj.id = i })

export default data