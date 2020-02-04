const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const God = require('../models/god')
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
  
    .then(() => {
      return God.create([
        {
          name: 'Zeus',
          olympian: true,
          gender: 'male',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg',
          description: 'Zeus was the first of the GODS and a very imposing figure. Often referred to as the “Father of Gods and men”, he is a sky god who controls lightning (often using it as a weapon) and thunder. Zeus is king of Mount Olympus, the home of Greek gods, where he rules the world and imposes his will onto gods and mortals alike.'
        }, {
          name: 'Athena',
          olympian: true,
          gender: 'female',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mattei_Athena_Louvre_Ma530_n2.jpg/1200px-Mattei_Athena_Louvre_Ma530_n2.jpg',
          description: 'Athena, also referred to as Athene, is a very important goddess of many things. She is goddess of wisdom, courage, inspiration, civilization, law and justice, strategic warfare, mathematics, strength, strategy, the arts, crafts, and skill.'
        }, {
          name: 'Nike',
          olympian: false,
          gender: 'female',
          image: 'https://images-na.ssl-images-amazon.com/images/I/41jTiHkerJL._SL500_AC_SS350_.jpg',
          description: 'Nike was very popular, since everybody wanted victory. Olympic athletes would sacrifice to her, as would soldiers before a big battle. Nike would sometimes serve as Athena’s charioteer in battle. After all, the goddess of victory is pretty much the best wheelman you can ask for.'
        } , {
          name: 'Hera',
          olympian: true,
          gender: 'female',
          image: 'http://rickriordan.com/content/uploads/2016/04/hera.jpg',
          description: 'Goddess of Marriage, Mothers and Family'
        }, {
          name: 'Poseidon',
          olympian: true,
          gender: 'male',
          image: 'http://rickriordan.com/content/uploads/2016/04/poseidon.jpg',
          description: 'God of the Sea'
        }, {  
          name: 'Demeter',
          olympian: true,
          gender: 'female',
          image: 'http://rickriordan.com/content/uploads/2016/04/demeter.jpg',
          description: 'Goddess of Agriculture'
        }, {
          name: 'Aphrodite',
          olympian: true,
          gender: 'female',
          image: 'http://rickriordan.com/content/uploads/2016/04/aphrodite.jpg',
          description: 'Godess of Love and Beauty'
        }
      ])
    })
    
    .then(createdGods => console.log(`${createdGods.length} gods created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})