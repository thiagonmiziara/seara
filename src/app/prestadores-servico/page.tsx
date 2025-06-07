import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { ServiceProvider } from '@/types';
import { Briefcase, Phone, User, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


// Mock data - in a real app, this would come from Strapi and be filterable
const mockServiceProviders: ServiceProvider[] = [
  { id: '1', name: 'José Silva', contact: '(11) 98765-4321', serviceType: 'Encanador', description: 'Reparos hidráulicos em geral, vazamentos, instalações.' },
  { id: '2', name: 'Maria Oliveira', contact: 'maria.costura@email.com', serviceType: 'Costureira', description: 'Ajustes, consertos e confecção de roupas.' },
  { id: '3', name: 'Carlos Santos', contact: '(21) 91234-5678', serviceType: 'Eletricista', description: 'Instalações elétricas, reparos, manutenção preventiva.' },
  { id: '4', name: 'Ana Pereira', contact: 'ana.bolos@email.com', serviceType: 'Confeiteira', description: 'Bolos, doces e salgados para festas e eventos.' },
  { id: '5', name: 'Paulo Costa', contact: '(31) 95555-1234', serviceType: 'Professor de Música', description: 'Aulas de violão, teclado e canto.' },
  { id: '6', name: 'Fernanda Lima', contact: 'fernanda.design@email.com', serviceType: 'Designer Gráfico', description: 'Criação de logos, materiais gráficos e digitais.' },
];

// TODO: Client component for filtering
// For now, just displaying all
// const serviceTypes = Array.from(new Set(mockServiceProviders.map(p => p.serviceType))).sort();


export default function ServiceProvidersPage() {
  return (
    <SectionWrapper title="Mural de Prestadores de Serviço" subtitle="Conecte-se com profissionais e empreendedores da nossa comunidade.">
      <div className="mb-8 p-6 bg-card rounded-lg shadow">
        <h3 className="text-xl font-semibold text-foreground mb-4">Encontre um Serviço</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Buscar por nome ou serviço..." className="bg-background" />
          <Select>
            <SelectTrigger className="w-full bg-background">
              <SelectValue placeholder="Filtrar por tipo de serviço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Tipos</SelectItem>
              {/* {serviceTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)} */}
              <SelectItem value="Encanador">Encanador</SelectItem>
              <SelectItem value="Costureira">Costureira</SelectItem>
              <SelectItem value="Eletricista">Eletricista</SelectItem>
              <SelectItem value="Confeiteira">Confeiteira</SelectItem>
            </SelectContent>
          </Select>
        </div>
         <p className="text-xs text-muted-foreground mt-4">Funcionalidade de busca e filtro será implementada.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockServiceProviders.map(provider => (
          <Card key={provider.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                <User className="h-6 w-6 text-primary mr-3" />
                <CardTitle className="text-xl text-foreground">{provider.name}</CardTitle>
              </div>
              <CardDescription className="flex items-center text-accent">
                <Briefcase className="h-4 w-4 mr-2" /> {provider.serviceType}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {provider.description && <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{provider.description}</p>}
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" /> {provider.contact}
              </div>
              {/* Could add an email icon if contact is email */}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 p-6 bg-accent/10 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-accent mb-2">Quer divulgar seu serviço?</h3>
        <p className="text-muted-foreground mb-4">Se você é membro da igreja e deseja adicionar seu serviço ao mural, entre em contato com a secretaria.</p>
        {/* <Button>Cadastrar Meu Serviço</Button> */}
      </div>
    </SectionWrapper>
  );
}
