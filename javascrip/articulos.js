const productos = [
    {
      id: 1,
      nombre: "Smartphone Samsung Galaxy S23",
      precio: 1200.0,
      descripcion:
        "Samsung Galaxy S23 con pantalla AMOLED de 6.2 pulgadas, procesador Exynos 2200 y cámara triple de 50 MP. Perfecto para fotografía y rendimiento rápido.",
      categoria: "smartphone",
      tipo: "Samsung",
      imagen:
        "https://images.samsung.com/is/image/samsung/p6pim/co/2302/gallery/co-galaxy-s23-s918-sm-s918bliultc-534860199?$2052_1641_PNG$",
      marca: "Samsung",
    },
    {
      id: 2,
      nombre: "Laptop Dell XPS 13",
      precio: 1400.0,
      descripcion:
        "Laptop Dell XPS 13 con pantalla de 13.3 pulgadas, procesador Intel Core i7 y 16 GB de RAM. Ideal para productividad y trabajos exigentes.",
      categoria: "computadoras",
      tipo: "laptop",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSAlw974Jh22zLCP2FdKM35P-AbQRsMISIw&s",
      marca: "Dell",
    },
    {
      id: 3,
      nombre: "Auriculares inalámbricos Sony WH-1000XM5",
      precio: 300.0,
      descripcion:
        "Auriculares Sony WH-1000XM5 con cancelación de ruido activa y hasta 30 horas de batería. Ofrecen un sonido envolvente de alta calidad.",
      categoria: "audio",
      tipo: "auriculares",
      imagen:
        "https://m.media-amazon.com/images/I/41fJmRGdrgL._AC_UF894,1000_QL80_.jpg",
      marca: "Sony",
    },
    {
      id: 4,
      nombre: "Tablet Apple iPad Pro 11 pulgadas",
      precio: 999.0,
      descripcion:
        "Apple iPad Pro con pantalla Liquid Retina de 11 pulgadas, procesador M1 y soporte para Apple Pencil. Potencia y portabilidad en un solo dispositivo.",
      categoria: "tablets",
      tipo: "iPad",
      imagen:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-select-202405-11inch-spaceblack-glossy-wifi_AV1_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsNEsrMGFueUl5dllOTm9xWTIwTHNid1VmMWkxN1U3QnRGTCt1bW5qUllQWHZRaFRmTlNGWCsrUEpWTGpTd2VKSlBHMytDUkFjM2pzKzdoay9scnYxYmxBZVh2cXNMWlp6Sk1TZkFOc1ZadURmUW9KUC9KdkY5OCtjZEFwSUFSSGowNmJhOXArenBWZ1VXMFR6MGMyZnQ0&traceId=1",
      marca: "Apple",
    },
    {
      id: 5,
      nombre: "Smartwatch Fitbit Sense 2",
      precio: 280.0,
      descripcion:
        "Smartwatch Fitbit Sense 2 con monitor de frecuencia cardíaca, GPS y análisis avanzado del sueño. Diseñado para mejorar tu salud y bienestar.",
      categoria: "wearable",
      tipo: "smartwatch",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4KinZXp4MjLRNk7UlCWwaJFK84fzdkqRTw&s",
      marca: "Fitbit",
    },
    {
      id: 6,
      nombre: "Televisor LG OLED 55 pulgadas",
      precio: 1800.0,
      descripcion:
        "Televisor LG OLED de 55 pulgadas con resolución 4K y HDR. Disfruta de negros profundos y colores vibrantes para una experiencia visual única.",
      categoria: "televisores",
      tipo: "OLED",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiT-tW8AmTRVx78qeFy-yQMzoR8LakL3VyQ&s",
      marca: "LG",
    },
    {
      id: 7,
      nombre: "Cámara Canon EOS R5",
      precio: 3899.0,
      descripcion:
        "Cámara profesional Canon EOS R5 con sensor full-frame de 45 MP y grabación en 8K. Ideal para fotógrafos y videógrafos de alto nivel.",
      categoria: "fotografía",
      tipo: "cámara",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSi-ykKM5E6oEa-Oc0_XvD6Z6Ykz8BUGrog&s",
      marca: "Canon",
    },
    {
      id: 8,
      nombre: "Consola PlayStation 5",
      precio: 500.0,
      descripcion:
        "Consola PlayStation 5 con soporte para juegos en 4K y un rendimiento ultrarrápido gracias a su disco SSD. Sumérgete en una experiencia de juego de nueva generación.",
      categoria: "videojuegos",
      tipo: "consola",
      imagen:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/126179400_01/w=1500,h=1500,fit=pad",
      marca: "Sony",
    },
    {
      id: 9,
      nombre: "Altavoz inteligente Amazon Echo Dot 5ª Gen",
      precio: 50.0,
      descripcion:
        "Amazon Echo Dot 5ª generación con Alexa integrada. Controla tu hogar inteligente, reproduce música y más con comandos de voz.",
      categoria: "smart home",
      tipo: "altavoz",
      imagen:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/58563421_1/w=1500,h=1500,fit=pad",
      marca: "Amazon",
    },
    {
      id: 10,
      nombre: "Router Wi-Fi 6 TP-Link Archer AX73",
      precio: 150.0,
      descripcion:
        "Router TP-Link Archer AX73 con Wi-Fi 6 para conexiones rápidas y estables en toda tu casa. Ideal para múltiples dispositivos conectados.",
      categoria: "networking",
      tipo: "router",
      imagen:
        "https://www.tp-link.com/us/_images/Archer-AX73/us-Archer-AX73-0.jpg",
      marca: "TP-Link",
    },
    {
        id: 11,
        nombre: "Smartphone iPhone 15 Pro Max",
        precio: 1500.0,
        descripcion:
          "iPhone 15 Pro Max con pantalla Super Retina XDR de 6.7 pulgadas, chip A17 Pro y cámara de 48 MP. Rendimiento excepcional y diseño premium.",
        categoria: "smartphone",
        tipo: "iPhone",
        imagen:
          "https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70055666_4.jpg",
        marca: "Apple",
      },
      {
        id: 12,
        nombre: "Cámara GoPro Hero 11 Black",
        precio: 400.0,
        descripcion:
          "GoPro Hero 11 Black con grabación en 5.3K a 60 fps y resistencia al agua hasta 10 metros. Ideal para grabaciones extremas y deportes de aventura.",
        categoria: "fotografía",
        tipo: "cámara de acción",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVxLiR9AzcVh8yLICXDBj-JSBwVQAx2LtNA&s",
        marca: "GoPro",
      },
      {
        id: 13,
        nombre: "Auriculares Bose QuietComfort 45",
        precio: 330.0,
        descripcion:
          "Auriculares Bose QuietComfort 45 con cancelación activa de ruido y hasta 24 horas de autonomía. Perfectos para disfrutar de música sin distracciones.",
        categoria: "audio",
        tipo: "auriculares",
        imagen:
          "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_Ecom-Gallery-B02.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg",
        marca: "Bose",
      },
      {
        id: 14,
        nombre: "Smartwatch Garmin Fenix 7X",
        precio: 700.0,
        descripcion:
          "Smartwatch Garmin Fenix 7X con GPS integrado, batería de hasta 28 días y resistencia al agua hasta 100 metros. Ideal para deportes al aire libre.",
        categoria: "wearable",
        tipo: "smartwatch",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSUsjZ7lyY_fC30s7gX7tWpyoidEHbKohgg&s",
        marca: "Garmin",
      },
      {
        id: 15,
        nombre: "Televisor Samsung QLED 65 pulgadas",
        precio: 2200.0,
        descripcion:
          "Samsung QLED de 65 pulgadas con resolución 4K, HDR y tecnología Quantum Dot para colores brillantes y detalles nítidos.",
        categoria: "televisores",
        tipo: "QLED",
        imagen:
          "https://exitocol.vteximg.com.br/arquivos/ids/24502176/Televisor-SAMSUNG-65-Pulgadas-QLED-Uhd-4K-Smart-TV-QN65Q60CAKXZL-3390152_a.jpg",
        marca: "Samsung",
      },
  ];
  