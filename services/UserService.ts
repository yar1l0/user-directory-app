import { User, UserData } from '@/models/User';

export class UserService {
  private static instance: UserService;
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Приватний конструктор для Singleton патерну
  private constructor() {}
  
  // Метод для отримання єдиного екземпляру сервісу (Singleton pattern)
  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }
  
  // Метод для отримання списку користувачів
  public async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const userData: UserData[] = await response.json();
      
      return userData.map(data => new User(data));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
  
  // Метод для фільтрації користувачів за пошуковим запитом
  public filterUsers(users: User[], searchTerm: string): User[] {
    if (!searchTerm) {
      return users;
    }
    
    return users.filter(user => user.matchesSearch(searchTerm));
  }
}

export default UserService;