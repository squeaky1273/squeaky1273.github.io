import data from './projects.json'

data.forEach((obj, i) => { obj.id = i })

export default data