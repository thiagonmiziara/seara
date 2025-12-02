export interface Meeting {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  fullDescription?: string;
  address?: string;
  meetingTimes?: string;
  leader?: string;
}

export const meetings: Meeting[] = [
  {
    id: "estudosenior",
    name: "Estudo Sênior",
    slug: "estudosenior",
    imageUrl: "/assets/estudosenior.jpeg",
    description:
      "Encontro especial para o grupo sênior, com comunhão, oração e estudo bíblico.",
    fullDescription:
      "Encontro especial para o grupo sênior, com comunhão, oração e estudo bíblico. Traga sua Bíblia e um coração aberto.",
    address: "Av. Mato Grosso, 123 - Bairro Centro, Uberlândia, MG",
    meetingTimes: "Terças, 19:30",
  },
  {
    id: "estudojovemleste",
    name: "Estudo Jovem Leste",
    slug: "estudojovemleste",
    imageUrl: "/assets/estudojovemleste.jpeg",
    description:
      "Encontro de jovens para comunhão, louvor e estudo bíblico na região Leste.",
    fullDescription:
      "Encontro de jovens com foco em relacionamento e estudo da Palavra. Traga um amigo.",
    address: "Av. dos Ferreiras, 260 - Bairro JD California, Uberlândia, MG",
    meetingTimes: "Terças, 19:30",
  },
  {
    id: "estudojevemeteensleste",
    name: "Estudo Jovem e Teens Leste",
    slug: "estudojevemeteensleste",
    imageUrl: "/assets/estudojevemeteensleste.jpeg",
    description:
      "Momento especial para jovens e adolescentes, com dinâmicas e estudo bíblico.",
    fullDescription:
      "Encontro de jovens com foco em relacionamento e estudo da Palavra. Traga um amigo.",
    address: "Av. dos Ferreiras, 260 - Bairro JD California, Uberlândia, MG",
    meetingTimes: "Terças, 19:30",
  },
  {
    id: "searajovemnorte",
    name: "Estudo Jovem Norte",
    slug: "searajovemnorte",
    imageUrl: "/assets/searajovemnorte.jpeg",
    description:
      "Momento especial para jovens e adolescentes, com dinâmicas e estudo bíblico.",
    fullDescription:
      "Encontro de jovens com foco em relacionamento e estudo da Palavra. Traga um amigo.",
    address:
      "Av. Cleanto Vierira Gonçalves, 1131 - Bairro JD Pacaembu, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
  },
  {
    id: "estudoteensede",
    name: "Estudo Teens Sede",
    slug: "estudoteensede",
    imageUrl: "/assets/estudoteensede.jpeg",
    description:
      "Encontro de adolescentes para comunhão, diversão e estudo bíblico na região central.",
    fullDescription:
      "Encontro de jovens com foco em relacionamento e estudo da Palavra. Traga um amigo.",
    address:
      "Av. Mato Grosso, 694 - Bairro Nossa Senhora Aparecida, Uberlândia, MG",
    meetingTimes: "Terças, 19:30",
  },
  {
    id: "jovemestudojovemteen",
    name: "Jovem Estudo Jovem e Teen",
    slug: "jovemestudojovemteen",
    imageUrl: "/assets/jovemestudoteen.jpeg",
    description:
      "Grupo de jovens e teens reunidos para louvor, oração e estudo bíblico.",
    fullDescription:
      "Encontro de jovens com foco em relacionamento e estudo da Palavra. Traga um amigo.",
    address:
      "Av. Mato Grosso, 694 - Bairro Nossa Senhora Aparecida, Uberlândia, MG",
    meetingTimes: "Terças, 19:30",
  },
  {
    id: "aluisioefram",
    name: "Estudo com Aluísio e Fram",
    slug: "aluisioefram",
    imageUrl: "/assets/aluisioefram.jpeg",
    description:
      "Encontro de comunhão e estudo bíblico conduzido por Aluísio e Fram.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address: "Rua Santa Cruz, 52 - Bairro Granada, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Aluísio e Fram",
  },
  {
    id: "carolerafael",
    name: "Estudo com Carol e Rafael",
    slug: "carolerafael",
    imageUrl: "/assets/carolerafael.jpeg",
    description: "Momento de oração e reflexão com Carol e Rafael.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address:
      "Rua Manoel Serralha, 1231 APTO-902A - Bairro Santa Monica, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Carol e Rafael",
  },
  {
    id: "keniaeleo",
    name: "Estudo com Kênia e Leo",
    slug: "keniaeleo",
    imageUrl: "/assets/keniaeleo.jpeg",
    description: "Estudo nos lares promovido por Kênia e Leo.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address:
      "Alameda Tamareiras, 69 - Bairro Bosque dos Buritis, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Kênia e Leo",
  },
  {
    id: "leandroemonique",
    name: "Estudo com Leandro e Monique",
    slug: "leandroemonique",
    imageUrl: "/assets/leandroemonique.jpeg",
    description:
      "Encontro de jovens e adultos para comunhão e crescimento espiritual.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address:
      "Av Mato Grosso, 1259 APTO-102 - Bairro Nossa Senhora Aparecida, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Leandro e Monique",
  },
  {
    id: "maikeekarla",
    name: "Estudo com Maike e Karla",
    slug: "maikeekarla",
    imageUrl: "/assets/maikeekarla.jpeg",
    description: "Estudo bíblico e oração conduzidos por Maike e Karla.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address:
      "Rua Eugenia Conceição de Oliveira, 65 - Bairro Roosevelt, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Maike e Karla",
  },
  {
    id: "mauroeedinalva",
    name: "Estudo com Mauro e Edinalva",
    slug: "mauroeedinalva",
    imageUrl: "/assets/mauroeedinalva.jpeg",
    description: "Momento de comunhão e estudo bíblico com Mauro e Edinalva.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address:
      "Alameda Rita Matias, 41 Antiga W30 - Bairro Residencial Gramado, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Mauro e Edinalva",
  },
  {
    id: "thiagoealine",
    name: "Estudo com Thiago e Aline",
    slug: "thiagoealine",
    imageUrl: "/assets/thiagoealine.jpeg",
    description:
      "Encontro de oração e estudo bíblico conduzido por Thiago e Aline.",
    fullDescription:
      "Estudo nos lares com família em clima de comunhão, compartilhamento de vida e estudo bíblico. Todos são bem-vindos.",
    address: "Rua Carlos Alberto Bielert, 94 - Bairro Talismã, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Thiago e Aline",
  },
  {
    id: "wandreyeisa",
    name: "Estudo com Wandrey e Isa",
    slug: "wandreyeisa",
    imageUrl: "/assets/wandreyeisa.jpeg",
    description: "Estudo nos lares promovido por Wandrey e Isa.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address: "Rua 21 de Abril, 409 - Bairro Pacaembu, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Wandrey e Isa",
  },
  {
    id: "jefteeluisa",
    name: "Estudo com Jefté e Luisa",
    slug: "jefteeluisa",
    imageUrl: "/assets/jefteeluisa.jpeg",
    description: "Estudo nos lares promovido por Jefté e Luisa.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address: "Rua Resende, 105 APTO-101 - Bairro Centro, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Jefté e Luisa",
  },
  {
    id: "rafaelefram",
    name: "Estudo com Rafael e Fram",
    slug: "rafaelefram",
    imageUrl: "/assets/rafaelefram.jpeg",
    description: "Estudo nos lares promovido por Rafael e Fram.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address: "Rua Antilhas, 70 - Bairro Tibery, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Rafael e Fram",
  },
  {
    id: "silvaneeelio",
    name: "Estudo com Silvane e Elio",
    slug: "silvaneeelio",
    imageUrl: "/assets/silvaneeelio.jpeg",
    description: "Estudo nos lares promovido por Silvane e Elio.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address:
      "Rua da Carioca, 2005 RV 04-81 - Bairro Morada da Colina, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Silvane e Elio",
  },
  {
    id: "romildaeromildo",
    name: "Estudo com Romilda e Romildo",
    slug: "romildaeromildo",
    imageUrl: "/assets/romildaeromildo.jpeg",
    description: "Estudo nos lares promovido por Romilda e Romildo.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address:
      "Rua Virgilina Laudelina Martins, 142 - Bairro Roosevelt, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Romilda e Romildo",
  },
  {
    id: "lucianoemarcela",
    name: "Estudo com Luciano e Marcela",
    slug: "lucianoemarcela",
    imageUrl: "/assets/lucianoemarcela.jpeg",
    description: "Estudo nos lares promovido por Luciano e Marcela.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address:
      "Garimpeiros de Cristo - Rua Guaraci Busmayer, 644 - Bairro Morada Nova, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Luciano e Marcela",
  },
  {
    id: "lorennaerone",
    name: "Estudo com Lorenna e Rone",
    slug: "lorennaerone",
    imageUrl: "/assets/lorennaerone.jpeg",
    description: "Estudo nos lares promovido por Lorenna e Rone.",
    fullDescription:
      "Estudo nos lares com foco em oração e comunhão. Venha participar.",
    address: "Av Eduardo Félice, 106 - Bairro Vigilato Pereira, Uberlândia, MG",
    meetingTimes: "Terças, 20:00",
    leader: "Lorenna e Rone",
  },
];
