  //C
    (async () => {
    const myNewObject = new Parse.Object('Eletrodomesticos');
    myNewObject.set('Tipo', 'A string');
    myNewObject.set('Marca', 'A string');
    myNewObject.set('Tamanho', 'A string');
    myNewObject.set('Preco', 1);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Eletrodomesticos created', result);
    } catch (error) {
      console.error('Error while creating Eletrodomesticos: ', error);
    }
  })();

  //R
    (async () => {
    const Eletrodomesticos = Parse.Object.extend('Eletrodomesticos');
    const query = new Parse.Query(Eletrodomesticos);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const Tipo = object.get('Tipo')
        const Marca = object.get('Marca')
        const Tamanho = object.get('Tamanho')
        const Preco = object.get('Preco')
        console.log(Tipo);
        console.log(Marca);
        console.log(Tamanho);
        console.log(Preco);
      }
    } catch (error) {
      console.error('Error while fetching Eletrodomesticos', error);
    }
  })();

  //u
    (async () => {
    const query = new Parse.Query(Eletrodomesticos);
    try {
      // here you put the objectId that you want to update
      const object = await query.get('xKue915KBG');
      object.set('Tipo', 'A string');
      object.set('Marca', 'A string');
      object.set('Tamanho', 'A string');
      object.set('Preco', 1);
      try {
        const response = await object.save();
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        // Access the Parse Object attributes using the .GET method
        console.log(response.get('Tipo'));
        console.log(response.get('Marca'));
        console.log(response.get('Tamanho'));
        console.log(response.get('Preco'));
        console.log('Eletrodomesticos updated', response);
      } catch (error) {
        console.error('Error while updating Eletrodomesticos', error);
        }
      } catch (error) {
        console.error('Error while retrieving object Eletrodomesticos', error);
      }
  })();

  //D
    (async () => {
    const query = new Parse.Query('Eletrodomesticos');
    try {
      // here you put the objectId that you want to delete
      const object = await query.get('xKue915KBG');
      try {
        const response = await object.destroy();
        console.log('Deleted ParseObject', response);
      } catch (error) {
        console.error('Error while deleting ParseObject', error);
      }
    } catch (error) {
      console.error('Error while retrieving ParseObject', error);
    }
  })();