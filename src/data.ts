export const featured = [
    {
        id: 1,
        title: "3 BR Condo in BGC Trion Towers, BGC",
        location: "McKinley Parkway, Taguig, Metro Manila",
        price: 24876510,
        size: 97,
        facilities: ["Function Room", "Fitness Center", "Daycare", "Swimming Pool"],
        bed: 3,
        bathroom: 2,
        imgUrl: "https://media.propertyaccess.ph/image/700x500-webp/property/1673192902528/eviberimage20210920222349639.jpg",
    },
    {
        id: 2,
        title: "2 BR Condo For Sale in Own Condo in Uptown Ritz BGC near Metro Manila Subway, Taguig",
        location: "9th Avenue, Taguig, Metro Manila",
        price: 25000000,
        size: 77,
        facilities: [ "Fitness Center", "Swimming Pool", "Entertainment Area"],
        bed: 2,
        bathroom: 3,
        imgUrl: "https://media.propertyaccess.ph/image/1200x1200/property/1707963909318/C9.jpeg",
    },
    {
        id: 3,
        title: "2 BR Condo For Sale in Park West BGC, Taguig",
        location: "Taguig, Metro Manila",
        price: 130000000,
        size: 72,
        facilities: [ "Fitness Center", "Restaurants and/or Bars", "Gazebo", "Garden"],
        bed: 2,
        bathroom: 3,
        imgUrl: "https://media.propertyaccess.ph/image/1200x1200/property/1701932277589/437G PARKWEST 10.jpg",
    }
       
]

export type TCondo = {
    id: number;
    title: string;
    location: string;
    price: number;
    size: number;
    facilities: string[];
    bed: number;
    bathroom: number;
    imgUrl: string;
}