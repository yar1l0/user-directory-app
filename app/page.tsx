import UserList from '@/components/UserList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Довідник користувачів</h1>
          <p className="text-blue-100">Знайдіть та відфільтруйте користувачів з нашої бази даних</p>
        </div>
      </header>
      
      <UserList />
      
      <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Додаток користувачів</p>
        </div>
      </footer>
    </main>
  );
}