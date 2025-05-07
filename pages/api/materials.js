import cors from 'cors';
app.use(cors());


const materials = [
    {
      name: "Alumínio",
      type: "Metal",
      density: 2800,
      thermalConductivityDry: 204,
      thermalConductivityWet: 204,
      image: "https://plus.unsplash.com/premium_photo-1673208484535-66a8f7d05294?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail: "imagens/aluminio.jpeg",
      description: "O alumínio é um metal leve e altamente condutor de calor, amplamente utilizado em aplicações estruturais e de troca térmica."
    },
    {
      name: "Cobre",
      type: "Metal",
      density: 9000,
      thermalConductivityDry: 372,
      thermalConductivityWet: 372,
      image: "https://images.unsplash.com/photo-1678119895596-411628b1f6be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail: "/imagens/cobre.jpg",
      description: "Conhecido por sua excelente condutividade térmica e elétrica, o cobre é essencial em sistemas de refrigeração e elétrica."
    },
    {
      name: "Ligas",
      type: "Metal",
      density: 12250,
      thermalConductivityDry: 35,
      thermalConductivityWet: 35,
      image: "https://img.freepik.com/free-photo/man-fixing-motorcycle-modern-workshop_158595-8137.jpg?t=st=1745281680~exp=1745285280~hmac=f0255b18eaa8eab75cdd0bc0bd01468cecf885ac6d4c154018e30a664bfcaee7&w=996",
      thumbnail: "/imagens/ligas.avif",
      description: "As ligas metálicas combinam dois ou mais elementos para melhorar propriedades como resistência mecânica ou resistência à corrosão."
    },
    {
      name: "Aço/Ferro",
      type: "Metal",
      density: 7800,
      thermalConductivityDry: 52,
      thermalConductivityWet: 52,
      image: "https://img.freepik.com/free-photo/large-steel-factory-warehouse_1127-3285.jpg?t=st=1745280049~exp=1745283649~hmac=289011a7a1b9530d72c9b74bc8bc21559bd4ffcc056bd225cb65d82e2a7352fc&w=996",
      thumbnail: "/imagens/metal.jpg",
      description: "O aço e o ferro são materiais fundamentais na construção civil e mecânica, oferecendo alta resistência e razoável condutividade térmica."
    },
    {
      name: "Zinco",
      type: "Metal",
      density: 7200,
      thermalConductivityDry: 110,
      thermalConductivityWet: 110,
      image: "https://img.freepik.com/free-photo/assortment-food-that-can-cause-allergic-reaction-people_23-2149870588.jpg?t=st=1745283173~exp=1745286773~hmac=6b52d7c50c4e78ca4d647862acd3212fa9fab2f6c2694005aa74cbf0e26e7fef&w=900",
      thumbnail: "/imagens/zinco.avif",
      description: "O zinco é amplamente utilizado para galvanização, protegendo outros metais da corrosão graças à sua boa resistência e condutividade."
    },
    {
      name: "Basalto/Granito",
      type: "Pedra Natural",
      density: 3000,
      thermalConductivityDry: 3.5,
      thermalConductivityWet: 3.5,
      image: "https://plus.unsplash.com/premium_photo-1661903992942-ff1c45b03fe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFzYWx0b3xlbnwwfHwwfHx8MA%3D%3D",
      thumbnail: "/imagens/granito.jpeg",
      description: "Pedras naturais como o basalto e o granito são densas e duráveis, sendo utilizadas em pisos, bancadas e aplicações térmicas."
    },
    {
      name: "Calcário/Mármore",
      type: "Pedra Natural",
      density: 2700,
      thermalConductivityDry: 2.5,
      thermalConductivityWet: 2.5,
      image: "https://images.unsplash.com/photo-1656853695785-522bb0f00e88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbGNhcmlvfGVufDB8fDB8fHww",
      thumbnail: "/imagens/calcario.avif",
      description: "O calcário e o mármore são amplamente usados na construção e acabamento, com boa capacidade térmica e aparência estética."
    },
    {
      name: "Arenito",
      type: "Pedra Natural",
      density: 2600,
      thermalConductivityDry: 1.6,
      thermalConductivityWet: 1.6,
      image: "https://plus.unsplash.com/premium_photo-1726610747615-3079f7c50686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJlbml0b3xlbnwwfHwwfHx8MA%3D%3D",
      thumbnail: "/imagens/arenito.jpeg",
      description: "O arenito é uma rocha sedimentar utilizada em construções históricas e modernas, com isolamento térmico moderado."
    },
    {
      name: "Tijolo",
      type: "Alvenaria",
      density: "1600-1900",
      thermalConductivityDry: "0.6-0.7",
      thermalConductivityWet: "0.9-1.2",
      image: "https://images.unsplash.com/photo-1707636497375-fa03615149b2?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail: "/imagens/tijolo.jpeg",
      description: "O tijolo é um dos principais elementos de alvenaria, com propriedades térmicas que variam conforme a umidade e composição."
    },
    {
      name: "Tijolo de Areia-Cal",
      type: "Alvenaria",
      density: 1900,
      thermalConductivityDry: 0.9,
      thermalConductivityWet: 1.4,
      image: "https://plus.unsplash.com/premium_photo-1675864663520-74ad92da5277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGlqb2xvJTIwY2luemF8ZW58MHx8MHx8fDA%3D",
      thumbnail: "/imagens/tijoloCinza.jpeg",
      description: "Esse tipo de tijolo é feito de areia e cal, oferecendo maior resistência e condutividade térmica em ambientes úmidos."
    },
    {
      name: "Concreto de Cascalho",
      type: "Concreto",
      density: "2300-2500",
      thermalConductivityDry: 2.0,
      thermalConductivityWet: 2.0,
      image: "https://picsum.photos/id/1115/640/480",
      thumbnail: "/imagens/Concretocascalho.jpg",
      description: "O concreto com cascalho é denso e possui boa condutividade térmica, utilizado em fundações e estruturas robustas."
    },
    {
      name: "Concreto Leve",
      type: "Concreto",
      density: "1600-1900",
      thermalConductivityDry: "0.7-0.9",
      thermalConductivityWet: "1.2-1.4",
      image: "https://picsum.photos/id/1125/640/480",
      thumbnail: "/imagens/concretoLeve.jpg",
      description: "Utilizado em construções que exigem menor peso, o concreto leve tem menor condutividade térmica e boa eficiência energética."
    },
    {
      name: "Vidro",
      type: "Inorgânico",
      density: 2500,
      thermalConductivityDry: 0.8,
      thermalConductivityWet: 0.8,
      image: "https://picsum.photos/id/1135/640/480",
      thumbnail: "/imagens/vidro.avif",
      description: "O vidro é um material transparente com boa condutividade térmica, utilizado em janelas e sistemas de isolamento."
    },
    {
      name: "Lã de Vidro",
      type: "Inorgânico",
      density: 150,
      thermalConductivityDry: 0.04,
      thermalConductivityWet: null,
      image: "https://picsum.photos/id/1145/640/480",
      thumbnail: "/imagens/laDeVidro.jpeg",
      description: "Material isolante leve e poroso, a lã de vidro é eficiente na retenção de calor e no isolamento acústico."
    },
    {
      name: "Madeira Folhosa",
      type: "Madeira",
      density: 800,
      thermalConductivityDry: 0.17,
      thermalConductivityWet: 0.23,
      image: "https://picsum.photos/id/1155/640/480",
      thumbnail: "/imagens/madeiraFolhosa.jpeg",
      description: "Madeiras folhosas são duras e densas, com boas propriedades térmicas e resistência natural."
    },
    {
      name: "Madeira Leve",
      type: "Madeira",
      density: 550,
      thermalConductivityDry: 0.14,
      thermalConductivityWet: 0.17,
      image: "https://picsum.photos/id/1165/640/480",
      thumbnail: "/imagens/madeiraLeve.jpeg",
      description: "A madeira leve é utilizada em construções temporárias e interiores, oferecendo isolamento térmico moderado."
    },
    {
      name: "Poliéster",
      type: "Sintético",
      density: 1200,
      thermalConductivityDry: 0.17,
      thermalConductivityWet: null,
      image: "https://picsum.photos/id/1175/640/480",
      thumbnail: "/imagens/poliester.jpeg",
      description: "Polímero sintético usado em aplicações têxteis e isolamentos, com baixa condutividade térmica."
    },
    {
      name: "Polietileno/Polipropileno",
      type: "Sintético",
      density: 930,
      thermalConductivityDry: 0.17,
      thermalConductivityWet: null,
      image: "https://picsum.photos/id/1185/640/480",
      thumbnail: "/imagens/polipropileno.jpeg",
      description: "Plásticos comuns em isolamentos e embalagens, apresentam boa resistência química e baixa condutividade térmica."
    },
    {
      name: "Água",
      type: "Líquido",
      density: 1000,
      thermalConductivityDry: 0.58,
      thermalConductivityWet: null,
      image: "https://picsum.photos/id/1195/640/480",
      thumbnail: "/imagens/agua.jpeg",
      description: "A água possui alta capacidade térmica, sendo utilizada em sistemas de aquecimento e resfriamento."
    },
    {
      name: "Gelo",
      type: "Sólido",
      density: 900,
      thermalConductivityDry: 2.2,
      thermalConductivityWet: null,
      image: "https://picsum.photos/id/1205/640/480",
      thumbnail: "/imagens/gelo.jpeg",
      description: "O gelo é uma forma sólida da água, com alta condutividade térmica e aplicado em conservação térmica e estudos climáticos."
    },
    {
      name: "Solo Florestal",
      type: "Solo",
      density: 1450,
      thermalConductivityDry: 0.8,
      thermalConductivityWet: null,
      image: "https://picsum.photos/id/1215/640/480",
      thumbnail: "/imagens/solo.jpeg",
      description: "Composto por matéria orgânica e minerais, o solo florestal possui condutividade térmica variável e influencia o balanço térmico do ambiente."
    }
  ];

  
  export default function handler(req, res) {
    res.status(200).json(materials);
  }
  