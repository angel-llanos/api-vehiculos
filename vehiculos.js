


const vehiculos = [
    {
      id: 1,
      marca: "Ferrari",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/51/Ferrari_488_GTB.jpg",
      descripcion: "El Ferrari 488 GTB es un superdeportivo producido por el fabricante italiano Ferrari.",
      anio: 2020,
      modelo: "488 GTB",
      precio: 120000000,
      stock: 10
    },
    {
      id: 2,
      marca: "Porsche",
      imagen: "https://a.ccdn.es/cnet/contents/media/porsche/911/363764.jpg/900x505cut/",
      descripcion: "El Porsche 911 Carrera es un automóvil deportivo producido por el fabricante alemán Porsche AG.",
      anio: 2021,
      modelo: "911 Carrera",
      precio: 70000000,
      stock: 6
    },
    {
      id: 3,
      marca: "Lamborghini",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg/800px-2023_Lamborghini_Aventador_Ultimae.jpg",
      descripcion: "El Lamborghini Aventador es un automóvil superdeportivo producido por el fabricante italiano Lamborghini.",
      anio: 2019,
      modelo: "Aventador S",
      precio: 250000000,
      stock: 5
    },
    {
      id: 4,
      marca: "McLaren",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b4/McLaren_720S-doors_open.jpg",
      descripcion: "El McLaren 720S es un automóvil deportivo de motor central producido por el fabricante británico McLaren Automotive.",
      anio: 2022,
      modelo: "720S",
      precio: 200000000,
      stock: 13
    },
    {
      id: 5,
      marca: "Aston Martin",
      imagen: "https://di-uploads-pod21.dealerinspire.com/astonmartinhouston/uploads/2022/11/2023-Aston-Martin-Vantage.jpg",
      descripcion: "El Aston Martin Vantage es un automóvil deportivo producido por el fabricante británico Aston Martin.",
      anio: 2020,
      modelo: "Vantage",
      precio: 100000000,
      stock: 8
    },
    {
      id: 6,
      marca: "BMW",
      imagen: "https://www.grunblau.es/wp-content/uploads/2022/07/2022-bmw-m4-csl-15.jpg",
      descripcion: "El BMW M4 es un automóvil deportivo de alto rendimiento producido por el fabricante alemán BMW.",
      anio: 2021,
      modelo: "M4 Competition",
      precio: 50000000,
      stock: 6
    },
    {
      id: 7,
      marca: "Chevrolet Corvette",
      imagen: "https://soymotor.com/sites/default/files/imagenes/noticia/2020-chevrolet-corvette-stingray-048_0.jpg",
      descripcion: "El Chevrolet Corvette Stingray es un automóvil deportivo de dos puertas producido por el fabricante estadounidense Chevrolet.",
      anio: 2023,
      modelo: "Stingray",
      precio: 180000000,
      stock: 4
    },
    {
      id: 8,
      marca: "Ford Mustang",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/4/47/Ford_Mustang_Shelby_GT500_1.jpg",
      descripcion: "El Ford Mustang Shelby GT500 es un automóvil deportivo de alto rendimiento producido por el fabricante estadounidense Ford.",
      anio: 2022,
      modelo: "Shelby GT500",
      precio: 150000000,
      stock: 7
    },
    {
      id: 9,
      marca: "Nissan",
      imagen: "https://cdn.motor1.com/images/mgl/G3nB8q/s1/nissan-gt-r-t-spec-takumi-edition.jpg",
      descripcion: "El Nissan GT-R es un automóvil deportivo de motor delantero producido por el fabricante japonés Nissan.",
      anio: 2021,
      modelo: "GT-R NISMO",
      precio: 100000000,
      stock: 10
    },
    {
      id: 10,
      marca: "Audi",
      imagen: "https://www.topgear.com/sites/default/files/images/news-article/2020/03/60de670393bee62575d18c08ac7506a4/wheelsandmore-r8-tuning_1.jpg",
      descripcion: "El Audi R8 es un automóvil deportivo de motor central producido por el fabricante alemán Audi.",
      anio: 2022,
      modelo: "R8 V10 Performance",
      precio: 90000000,
      stock: 12
    },
    {
      id: 11,
      marca: "Mercedes-AMG",
      imagen: "https://www.cochesyconcesionarios.com/media/cache/1170x780/novedades/wp-content/uploads/2023/08/Mercedes-AMG-GT_05.jpg",
      descripcion: "El Mercedes-AMG GT es un automóvil deportivo producido por el fabricante alemán Mercedes-AMG.",
      anio: 2023,
      modelo: "GT R Pro",
      precio: 130000000,
      stock: 6
    },
    {
      id: 12,
      marca: "Toyota",
      imagen: "https://phantom-expansion.unidadeditorial.es/7edd823cf160d69cdcbdfd9e101222a1/resize/828/f/webp/assets/multimedia/imagenes/2021/05/26/16220408590543.jpg",
      descripcion: "El Toyota Supra es un automóvil deportivo producido por el fabricante japonés Toyota.",
      anio: 2021,
      modelo: "GR Supra",
      precio: 40000000,
      stock: 13
    },
    {
      id: 13,
      marca: "Maserati",
      imagen: "https://i.pinimg.com/736x/70/b3/85/70b385c76b94e7b4805c65679e7d082c.jpg",
      descripcion: "El Maserati GranTurismo es un automóvil deportivo producido por el fabricante italiano Maserati.",
      anio: 2020,
      modelo: "GranTurismo MC",
      precio: 60000000,
      stock: 7
    },
    {
      id: 14,
      marca: "Lotus",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/lotus-evora-gt-2020-1600-01-1564309840.jpg",
      descripcion: "El Lotus Evora es un automóvil deportivo producido por el fabricante británico Lotus Cars.",
      anio: 2021,
      modelo: "Evora GT",
      precio: 125000000,
      stock: 5
    },
    {
      id: 15,
      marca: "Subaru",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/53/2022_Subaru_BRZ_2.4_EyeSight.jpg",
      descripcion: "El Subaru BRZ es un automóvil deportivo producido por el fabricante japonés Subaru.",
      anio: 2022,
      modelo: "BRZ Premium",
      precio: 20000000,
      stock: 12
    }
];

module.exports = {
    vehiculos
}




  
//   Ejemplo de cómo acceder a la información de un vehículo específico
//   console.log("Nombre del primer vehículo:", vehiculosDeportivos[0].nombre);
//   console.log("Descripción del segundo vehículo:", vehiculosDeportivos[1].descripcion);
  