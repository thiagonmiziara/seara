export interface Community {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  fullDescription: string;
  address: string;
  meetingTimes: string;
  leader: string;
  mapUrl: string;
}

export const communities: Community[] = [
  {
    id: "norte",
    name: "SEARA NORTE",
    slug: "norte",
    imageUrl: "/assets/norte.png",
    description: "Comunidade Norte da Seara de Deus",
    fullDescription: "Venha fazer parte da nossa comunidade!",
    address:
      "Rua Cleanto Vieira Gonçalves, 1131 - Bairro JD Pacaembu, Uberlândia - MG",
    meetingTimes: "Quinta 19h30 | Domingo 18h",
    leader: "Apóstolo Klens Pires e Leila Andrade",
    mapUrl:
      "https://www.google.com/maps?q=Rua+Cleanto+Vieira+Gon%C3%A7alves,+1131+-+Bairro+JD+Pacaembu,+Uberl%C3%A2ndia+-+MG&output=embed",
  },
  {
    id: "leste",
    name: "SEARA LESTE",
    slug: "leste",
    imageUrl: "/assets/leste.PNG",
    description: "Comunidade Leste da Seara de Deus",
    fullDescription: "Venha fazer parte da nossa comunidade!",
    address:
      "Av dos Ferreiras, 260 - Bairro Jardim Califórnia, Uberlândia - MG",
    meetingTimes: "Quinta 19h30 | Domingo 18h",
    leader: "Patrick Resende e Samara Luiza",
    mapUrl:
      "https://www.google.com/maps?q=Av+dos+Ferreiras,+260+-+Bairro+Jardim+Calif%C3%B3rnia,+Uberl%C3%A2ndia+-+MG&output=embed",
  },
  {
    id: "sudeste",
    name: "SEARA SUDESTE",
    slug: "sudeste",
    imageUrl: "/assets/sudeste.png",
    description: "Comunidade Sudeste da Seara de Deus",
    fullDescription: "Venha fazer parte da nossa comunidade!",
    address:
      "Rua Nordal Gonçalves de Melo, 235 - Bairro Santa Mônica, Uberlândia - MG",
    meetingTimes: "Quinta 19h30 | Domingo 18h",
    leader: "Antonio Júnior e Regina Vieira",
    mapUrl:
      "https://www.google.com/maps?q=Rua+Nordal+Gon%C3%A7alves+de+Melo,+235+-+Bairro+Santa+M%C3%B4nica,+Uberl%C3%A2ndia+-+MG&output=embed",
  },
  {
    id: "sul",
    name: "SEARA SUL",
    slug: "sul",
    imageUrl: "/assets/sul.png",
    description: "Comunidade Sul da Seara de Deus",
    fullDescription: "Venha fazer parte da nossa comunidade!",
    address: "Av Seme Simão, 2200 - Jardim Botânico, Uberlândia - MG",
    meetingTimes: "Quinta 19h30 | Domingo 18h",
    leader: "Paulo Isaque e Ana Paula",
    mapUrl:
      "https://www.google.com/maps?q=Av.+Seme+Sim%C3%A3o,+2200+-+Jardim+Bot%C3%A2nico,+Uberl%C3%A2ndia+-+MG&output=embed",
  },

  {
    id: "oeste",
    name: "SEARA OESTE",
    slug: "oeste",
    imageUrl: "/assets/oeste.PNG",
    description: "Comunidade Oeste da Seara de Deus",
    fullDescription: "Venha fazer parte da nossa comunidade!",
    address: "Rua Edmundo Munir Arantes, 98 - Bairro Planalto, Uberlândia - MG",
    meetingTimes: "Quinta 19h30 | Domingo 18h",
    leader: "Rosangela e Cledson Oliveira / Lucélia e Cleiton Silva",
    mapUrl:
      "https://www.google.com/maps?q=Rua+Edmundo+Munir+Arantes,+98+-+Bairro+Planalto,+Uberl%C3%A2ndia+-+MG&output=embed",
  },
];
