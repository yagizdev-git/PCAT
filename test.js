const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Creating schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//* -----------------------------------------------------------------------------------

//! Creating first data
/* Photo.create({
  title: 'Photo 1',
  description: 'Photo 1 Description',
}); */

//! Updating a data
/* async function updateData(id, update) {
  try {
    const updatedData = await Photo.findByIdAndUpdate(id, update, {
      new: true,
    });
    console.log('Güncellenmiş veri', updatedData);
  } 
  catch (error) {
    console.log('Güncelleme hatası:', error);
  }
} */

//! Deleting a datum
/* async function deleteDatum (id) {
  try {
    await Photo.findByIdAndDelete(id)
    console.log('Fotoğraf başarıyla silindi!');
  } catch (error) {
    console.log('Silme işlemi hatası:', error);
  }
} */

//! Deleting more than one data
/* async function deleteManyData(filter) {
  try {
    await Photo.deleteMany(filter)
    console.log(`'${
      Object.keys(filter)
    }: ${
      Object.values(filter)
    }' olan verilerin tamamı vaşarıyla silindi!`);
  } 
  catch (error) {
    console.log('ERROR:', error);
  }
} */