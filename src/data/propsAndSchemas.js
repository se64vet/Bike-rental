import { faker } from "@faker-js/faker";

// Navbar props {
//   isTextLogo : Boolean,
//   textLogoContent: String,
//   imgLogoUrl: String,
//   mainElements: [{content: String, url: String}],
//   callToAction: Boolean,
//   callToActionBtns: [{primary: Boolean, content: String}]
// }

const createFakeBike = () => {
    const make = ["Ducati", "Triump", "BMW", "Harley Davidson", "Indian", "Honda", "Yamaha"];
    const model = ["Street Fighter", "Scrambler", "Nightster", "Bob", "Bonneville", "Shadow", "MT-7", "Hypermotard"]
    return {
        _id: faker.database.mongodbObjectId(),
        year: faker.datatype.number({min:2000, max:2023}),
        make: faker.helpers.arrayElement(make),
        model: faker.helpers.arrayElement(model),
        fuel: faker.vehicle.fuel(),
        engine_size: faker.random.numeric(3),
        thumbnail:`https://source.unsplash.com/random/400x400/?harley,ducati,triump&&sig=${Math.floor(Math.random() * 999999)}`,
        imgs: [faker.image.imageUrl(900, 700, "motocycle", true),faker.image.imageUrl(900, 700, "motocycle", true),faker.image.imageUrl(900, 700, "motocycle", true),faker.image.imageUrl(900, 700, "motocycle", true)],
        reviews: faker.datatype.float({min: 1, max: 5, precision: 0.1}),
        basePrice: faker.datatype.number({min: 70, max: 212})
    }
}

export const createFakeBikeDB = (numOfInstance) => {
    let db = [];
    for (let index = 0; index < numOfInstance; index++) {
       const newBike = createFakeBike() ;
       db.push(newBike);
    }
    return db;
}