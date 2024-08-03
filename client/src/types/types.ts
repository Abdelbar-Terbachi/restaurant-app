// Define the structure of a menu item
export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

// Define the structure of the data in data.json
export interface MenuData {
  categories: { title: string; description: string }[];
  items: {
    Snacks: MenuItem[];
    Boissons: MenuItem[];
    PetitsDéjeuners: MenuItem[];
    Desserts: MenuItem[];
    Salades: MenuItem[];
    Déjeuner: MenuItem[];
    Entrées: MenuItem[];
    Soupes: MenuItem[];
  };
}
