export interface Client {
  id: number;
  name: string;
  email: string;
  status: 'Activo' | 'Inactivo' | 'Pendiente';
}
