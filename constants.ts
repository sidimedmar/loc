import { Property, MaintenanceTicket, Expense, Document, ActivityLog, User, AppSettings } from './types';
import { 
  Store, Home, Building2, Warehouse, 
  Wrench, FileText, Zap, HelpCircle 
} from 'lucide-react';
import React from 'react';

// Labels français pour l'affichage
export const LABELS = {
  status: {
    paye: 'Loué (Payé)',
    retard: 'Loué (Retard)',
    vide: 'Vacant',
    bientot_vide: 'Fin de bail proche',
  } as Record<string, string>,
  type: {
    boutique: 'Boutique',
    maison: 'Maison',
    appartement: 'Appartement',
    entrepot: 'Entrepôt',
  } as Record<string, string>,
  priority: {
    low: 'Basse',
    medium: 'Moyenne',
    high: 'Haute',
  } as Record<string, string>,
  expenseCategory: {
    repair: 'Réparation',
    tax: 'Taxe',
    utility: 'Facture',
    other: 'Autre',
  } as Record<string, string>,
  documentType: {
    contract: 'Contrat',
    receipt: 'Quittance',
    id_card: "Pièce d'identité",
    other: 'Autre',
  } as Record<string, string>,
  activityType: {
    payment: 'Paiement',
    maintenance: 'Maintenance',
    system: 'Système',
    expense: 'Dépense',
    document: 'Document',
    property: 'Bien',
    utility: 'Facture'
  } as Record<string, string>,
  maintenanceStatus: {
    pending: 'En attente',
    in_progress: 'En cours',
    done: 'Terminé'
  } as Record<string, string>,
  utilityStatus: {
    paid: 'Payé',
    unpaid: 'Impayé',
    pending: 'En attente'
  } as Record<string, string>
};

export const INITIAL_SETTINGS: AppSettings = {
  appName: 'Dar-Immo Pro',
  footerText: 'Gestion locative Mauritanie © 2024',
  primaryColor: 'emerald'
};

export const INITIAL_USERS: User[] = [
  {
    id: 'admin',
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Administrateur',
    permissions: ['dashboard', 'properties', 'financials', 'maintenance', 'documents', 'admin', 'utilities']
  },
  {
    id: 'kader',
    username: 'kader',
    password: 'kader123',
    role: 'agent',
    name: 'Assistant Kader',
    // Permissions limitées pour l'agent (ne voit pas les Finances ni l'Admin ni les Utilities par défaut)
    permissions: ['dashboard', 'properties', 'maintenance', 'documents']
  }
];

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: '1',
    type: 'boutique',
    number: 'Boutique 15',
    address: 'Marché Central, Nouakchott',
    rentAmount: 15000,
    tenantName: 'Mohamed Sidi',
    tenantPhone: '+222 41 23 45 67',
    entryDate: '2023-01-15',
    contractEndDate: '2024-01-15',
    nextPaymentDate: '2024-01-15',
    status: 'paye',
    deposit: 30000,
    payments: [
      { id: 'p1', amount: 15000, date: '2023-12-15', month: 'Décembre', year: 2023, note: 'Paiement via Bankily' },
      { id: 'p2', amount: 15000, date: '2024-01-10', month: 'Janvier', year: 2024, note: 'Avance' }
    ],
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    type: 'maison',
    number: 'Villa 42',
    address: 'Tevragh Zeina, Nouakchott',
    rentAmount: 45000,
    tenantName: 'Fatima Ahmed',
    tenantPhone: '+222 42 34 56 78',
    entryDate: '2023-06-01',
    contractEndDate: '2024-06-01',
    nextPaymentDate: '2024-01-01',
    status: 'retard',
    deposit: 90000,
    payments: [
      { id: 'p3', amount: 45000, date: '2023-11-30', month: 'Novembre', year: 2023 }
    ],
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    type: 'appartement',
    number: 'Apt 7B',
    address: 'El Mina, Nouakchott',
    rentAmount: 25000,
    status: 'vide',
    payments: [],
    notes: 'Rénovation peinture nécessaire',
    image: 'https://picsum.photos/400/300?random=3'
  }
];

export const INITIAL_MAINTENANCE: MaintenanceTicket[] = [
  {
    id: 'm1',
    propertyId: '2',
    title: 'Climatisation en panne',
    description: 'Le climatiseur du salon ne refroidit plus.',
    status: 'in_progress',
    priority: 'high',
    createdAt: '2024-01-10',
    cost: 2500,
    logs: [
      { id: 'l1', date: '2024-01-10T10:00:00', status: 'pending', note: 'Ticket créé' },
      { id: 'l2', date: '2024-01-11T09:00:00', status: 'in_progress', note: 'Technicien contacté' }
    ]
  },
  {
    id: 'm2',
    propertyId: '3',
    title: 'Peinture salon',
    description: 'Rafraichissement avant location.',
    status: 'pending',
    priority: 'medium',
    createdAt: '2024-01-12',
    logs: [
      { id: 'l3', date: '2024-01-12T14:00:00', status: 'pending', note: 'Ticket créé' }
    ]
  }
];

export const INITIAL_EXPENSES: Expense[] = [
  {
    id: 'e1',
    propertyId: '2',
    amount: 2500,
    category: 'repair',
    date: '2024-01-11',
    description: 'Réparation Clim (Avance)'
  },
  {
    id: 'e2',
    propertyId: '1',
    amount: 1200,
    category: 'tax',
    date: '2024-01-05',
    description: 'Taxe municipale'
  }
];

export const INITIAL_DOCUMENTS: Document[] = [
  {
    id: 'd1',
    propertyId: '1',
    title: 'Contrat de Bail - Mohamed Sidi',
    type: 'contract',
    date: '2023-01-15'
  },
  {
    id: 'd2',
    propertyId: '2',
    title: 'CNI - Fatima Ahmed',
    type: 'id_card',
    date: '2023-06-01'
  },
  {
    id: 'd3',
    propertyId: '1',
    title: 'Quittance Janvier 2024',
    type: 'receipt',
    date: '2024-01-10'
  }
];

export const INITIAL_LOGS: ActivityLog[] = [
  {
    id: 'log1',
    type: 'payment',
    description: 'Paiement reçu pour Boutique 15',
    date: '2024-01-10T15:30:00',
    propertyId: '1',
    amount: 15000
  },
  {
    id: 'log2',
    type: 'maintenance',
    description: 'Nouveau ticket: Climatisation en panne',
    date: '2024-01-10T10:00:00',
    propertyId: '2'
  },
  {
    id: 'log3',
    type: 'system',
    description: 'Démarrage de l\'application',
    date: '2024-01-15T08:00:00'
  }
];

export const getIconForType = (type: string) => {
  switch (type) {
    case 'boutique': return React.createElement(Store, { className: "w-5 h-5" });
    case 'maison': return React.createElement(Home, { className: "w-5 h-5" });
    case 'appartement': return React.createElement(Building2, { className: "w-5 h-5" });
    case 'entrepot': return React.createElement(Warehouse, { className: "w-5 h-5" });
    default: return React.createElement(Building2, { className: "w-5 h-5" });
  }
};

export const getIconForExpense = (category: string) => {
  switch (category) {
    case 'repair': return React.createElement(Wrench, { className: "w-4 h-4" });
    case 'tax': return React.createElement(FileText, { className: "w-4 h-4" });
    case 'utility': return React.createElement(Zap, { className: "w-4 h-4" });
    default: return React.createElement(HelpCircle, { className: "w-4 h-4" });
  }
};