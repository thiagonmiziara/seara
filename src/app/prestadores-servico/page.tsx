"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Briefcase, Phone, User, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyState from "@/components/shared/EmptyState";
import { IServiceProviders } from "@/types";

export default function ServiceProvidersPage() {
  const [allProviders, setAllProviders] = useState<IServiceProviders[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<
    IServiceProviders[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedServiceType, setSelectedServiceType] =
    useState<string>("todos");
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch("/api/contentful?type=serviceProviders");
        if (!response.ok) {
          throw new Error("Failed to fetch service providers");
        }
        const data: IServiceProviders[] = await response.json();
        if (data) {
          const approved = data.filter((provider) => provider.approved);
          setAllProviders(approved);
          setFilteredProviders(approved);

          const uniqueServiceTypes = Array.from(
            new Set(approved.map((provider) => provider.serviceType))
          );
          setServiceTypes(["Todos os Tipos", ...uniqueServiceTypes]);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch service providers:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProviders();
  }, []);

  useEffect(() => {
    let currentFiltered = allProviders;

    if (searchTerm) {
      currentFiltered = currentFiltered.filter(
        (provider) =>
          provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          provider.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedServiceType !== "todos") {
      currentFiltered = currentFiltered.filter(
        (provider) => provider.serviceType === selectedServiceType
      );
    }

    setFilteredProviders(currentFiltered);
  }, [searchTerm, selectedServiceType, allProviders]);

  if (error) {
    return (
      <SectionWrapper
        title='Mural de Prestadores de Serviço'
        subtitle='Conecte-se com profissionais e empreendedores da nossa comunidade.'
      >
        <EmptyState
          title='Erro ao carregar prestadores de serviço'
          description='Não foi possível carregar os dados. Por favor, tente novamente mais tarde.'
        />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      title='Mural de Prestadores de Serviço'
      subtitle='Conecte-se com profissionais e empreendedores da nossa comunidade.'
    >
      <div className='mb-8 p-6 bg-card rounded-lg shadow'>
        <h3 className='text-xl font-semibold text-foreground mb-4'>
          Encontre um Serviço
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            placeholder='Buscar por nome ou serviço...'
            className='bg-background'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={selectedServiceType}
            onValueChange={setSelectedServiceType}
          >
            <SelectTrigger className='w-full bg-background'>
              <SelectValue placeholder='Filtrar por tipo de serviço' />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type === "Todos os Tipos" ? "todos" : type}
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className='shadow-lg'>
              <CardHeader>
                <Skeleton className='h-6 w-3/4 mb-2' />
                <Skeleton className='h-4 w-1/2' />
              </CardHeader>
              <CardContent>
                <Skeleton className='h-12 w-full mb-3' />
                <Skeleton className='h-4 w-2/3' />
              </CardContent>
            </Card>
          ))
        ) : filteredProviders.length === 0 ? (
          <div className='col-span-full'>
            <EmptyState
              title='Nenhum prestador de serviço encontrado'
              description='Ajuste seus filtros ou termos de busca.'
            />
          </div>
        ) : (
          filteredProviders.map((provider: IServiceProviders) => (
            <Card
              key={provider.id}
              className='shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <CardHeader>
                <div className='flex items-center mb-2'>
                  <User className='h-6 w-6 text-primary mr-3' />
                  <CardTitle className='text-xl text-foreground'>
                    {provider.name}
                  </CardTitle>
                </div>
                <CardDescription className='flex items-center text-accent'>
                  <Briefcase className='h-4 w-4 mr-2' /> {provider.serviceType}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {provider.description && (
                  <p className='text-sm text-muted-foreground mb-3 line-clamp-3'>
                    {provider.description}
                  </p>
                )}
                <div className='flex items-center text-sm text-muted-foreground'>
                  <Phone className='h-4 w-4 mr-2 text-primary' />{" "}
                  {provider.contact}
                </div>
                {/* Could add an email icon if contact is email */}
              </CardContent>
            </Card>
          ))
        )}
      </div>
      <div className='mt-12 p-6 bg-accent/10 rounded-lg text-center'>
        <h3 className='text-xl font-semibold text-accent mb-2'>
          Quer divulgar seu serviço?
        </h3>
        <p className='text-muted-foreground mb-4'>
          Se você é membro da igreja e deseja adicionar seu serviço ao mural,
          entre em contato com a secretaria.
        </p>
        {/* <Button>Cadastrar Meu Serviço</Button> */}
      </div>
    </SectionWrapper>
  );
}
