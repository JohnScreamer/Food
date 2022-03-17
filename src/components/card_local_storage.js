class StorageCard {
   async add(id) {
      let data = sessionStorage.getItem('id')
      let numID = await id;
      console.log(numID);

      if (data == null) {
         sessionStorage.setItem('id', "[]")
      }

      data = JSON.parse(sessionStorage.getItem('id'))


      data.push(+numID)
      console.log(data);
      sessionStorage.setItem('id', JSON.stringify(data))

   }
}

let storageCard = new StorageCard()
export {
   storageCard
}