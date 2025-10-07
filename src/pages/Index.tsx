import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Casino {
  id: number;
  name: string;
  rating: number;
  bonus: string;
  bonusAmount: string;
  wager: string;
  minDeposit: string;
  games: number;
  paymentMethods: string[];
  features: string[];
  isExclusive: boolean;
}

const casinos: Casino[] = [
  {
    id: 1,
    name: 'Royal Casino',
    rating: 4.8,
    bonus: 'Приветственный бонус',
    bonusAmount: '500 000₽',
    wager: 'x35',
    minDeposit: '1000₽',
    games: 3500,
    paymentMethods: ['Visa', 'MasterCard', 'СБП'],
    features: ['Лицензия', 'Быстрый вывод', 'Поддержка 24/7'],
    isExclusive: true
  },
  {
    id: 2,
    name: 'Golden Palace',
    rating: 4.7,
    bonus: 'Бонус + фриспины',
    bonusAmount: '300 000₽',
    wager: 'x40',
    minDeposit: '500₽',
    games: 2800,
    paymentMethods: ['Visa', 'MasterCard', 'Qiwi'],
    features: ['Лицензия', 'Криптовалюта', 'Live-казино'],
    isExclusive: false
  },
  {
    id: 3,
    name: 'Lucky Star Casino',
    rating: 4.6,
    bonus: 'Кэшбэк 20%',
    bonusAmount: '200 000₽',
    wager: 'x30',
    minDeposit: '1500₽',
    games: 4200,
    paymentMethods: ['Visa', 'СБП', 'Криптовалюта'],
    features: ['Лицензия', 'Турниры', 'VIP программа'],
    isExclusive: true
  },
  {
    id: 4,
    name: 'Diamond Club',
    rating: 4.5,
    bonus: 'Депозит x2',
    bonusAmount: '400 000₽',
    wager: 'x45',
    minDeposit: '2000₽',
    games: 3100,
    paymentMethods: ['Visa', 'MasterCard', 'Яндекс.Деньги'],
    features: ['Лицензия', 'Мобильное приложение', 'Бонусы каждый день'],
    isExclusive: false
  },
  {
    id: 5,
    name: 'Mega Win Casino',
    rating: 4.4,
    bonus: 'Фриспины',
    bonusAmount: '250 000₽',
    wager: 'x35',
    minDeposit: '800₽',
    games: 2500,
    paymentMethods: ['Visa', 'СБП', 'Qiwi'],
    features: ['Лицензия', 'Быстрая регистрация', 'Джекпоты'],
    isExclusive: true
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('all');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name={i < Math.floor(rating) ? 'Star' : 'Star'}
        size={16}
        className={i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-muted'}
      />
    ));
  };

  const filteredCasinos = activeTab === 'exclusive' 
    ? casinos.filter(c => c.isExclusive)
    : casinos;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">CASINO RATINGS</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Рейтинг</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Обзоры</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Бонусы</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Гайды</a>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Рейтинг лучших казино 2025
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Объективные обзоры, эксклюзивные бонусы и актуальные рейтинги онлайн-казино
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur rounded-full px-4 py-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="text-sm font-medium">Проверенные казино</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur rounded-full px-4 py-2">
                <Icon name="Gift" size={20} className="text-accent" />
                <span className="text-sm font-medium">Эксклюзивные бонусы</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur rounded-full px-4 py-2">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                <span className="text-sm font-medium">Актуальные рейтинги</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <TabsList className="mb-4 md:mb-0">
                <TabsTrigger value="all" className="gap-2">
                  <Icon name="LayoutGrid" size={16} />
                  Все казино
                </TabsTrigger>
                <TabsTrigger value="exclusive" className="gap-2">
                  <Icon name="Star" size={16} />
                  Эксклюзивы
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Icon name="Filter" size={16} />
                  Фильтры
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Icon name="ArrowUpDown" size={16} />
                  Сортировка
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4 animate-fade-in">
              {filteredCasinos.map((casino, index) => (
                <Card 
                  key={casino.id} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{casino.name}</CardTitle>
                            {casino.isExclusive && (
                              <Badge className="bg-accent text-accent-foreground">
                                <Icon name="Sparkles" size={12} className="mr-1" />
                                Эксклюзив
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {renderStars(casino.rating)}
                            <span className="ml-2 text-sm font-semibold">{casino.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        Обзор
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-accent/10 border-2 border-accent rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs text-muted-foreground font-medium mb-1">{casino.bonus}</p>
                            <p className="text-2xl font-bold text-accent">{casino.bonusAmount}</p>
                          </div>
                          <Icon name="Gift" size={24} className="text-accent" />
                        </div>
                        <p className="text-xs text-muted-foreground">Отыгрыш {casino.wager}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Gamepad2" size={20} className="text-primary" />
                          <p className="text-sm font-semibold">Игры</p>
                        </div>
                        <p className="text-xl font-bold">{casino.games.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Слоты, Live, Рулетка</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="CreditCard" size={20} className="text-primary" />
                          <p className="text-sm font-semibold">Минимальный депозит</p>
                        </div>
                        <p className="text-xl font-bold">{casino.minDeposit}</p>
                        <p className="text-xs text-muted-foreground">{casino.paymentMethods.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {casino.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="exclusive" className="space-y-4 animate-fade-in">
              {filteredCasinos.map((casino, index) => (
                <Card 
                  key={casino.id} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{casino.name}</CardTitle>
                            {casino.isExclusive && (
                              <Badge className="bg-accent text-accent-foreground">
                                <Icon name="Sparkles" size={12} className="mr-1" />
                                Эксклюзив
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {renderStars(casino.rating)}
                            <span className="ml-2 text-sm font-semibold">{casino.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        Обзор
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-accent/10 border-2 border-accent rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs text-muted-foreground font-medium mb-1">{casino.bonus}</p>
                            <p className="text-2xl font-bold text-accent">{casino.bonusAmount}</p>
                          </div>
                          <Icon name="Gift" size={24} className="text-accent" />
                        </div>
                        <p className="text-xs text-muted-foreground">Отыгрыш {casino.wager}</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Gamepad2" size={20} className="text-primary" />
                          <p className="text-sm font-semibold">Игры</p>
                        </div>
                        <p className="text-xl font-bold">{casino.games.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Слоты, Live, Рулетка</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="CreditCard" size={20} className="text-primary" />
                          <p className="text-sm font-semibold">Минимальный депозит</p>
                        </div>
                        <p className="text-xl font-bold">{casino.minDeposit}</p>
                        <p className="text-xs text-muted-foreground">{casino.paymentMethods.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {casino.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Честные обзоры</h4>
                <p className="text-muted-foreground text-sm">
                  Независимая оценка каждого казино на основе реальных данных
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={32} className="text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Эксклюзивные бонусы</h4>
                <p className="text-muted-foreground text-sm">
                  Уникальные предложения только для нашего сообщества
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Активное сообщество</h4>
                <p className="text-muted-foreground text-sm">
                  Более 50 000 игроков делятся опытом и стратегиями
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trophy" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-bold">CASINO RATINGS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Casino Ratings. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Форум
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                О нас
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
