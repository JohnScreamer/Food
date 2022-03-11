class GetData {
   async get() {
      let respons = await fetch('https://gist.githubusercontent.com/JohnScreamer/478608d0bf9175a04830659f8dfc73c1/raw/3db99105faa156c2247bcaa422a043194f7f7690/gistfile1.txt')
      let data = await respons.json()
      return data;
   }
}
let getData = new GetData()
export {
   getData
}