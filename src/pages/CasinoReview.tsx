import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface CasinoDetail {
  id: number;
  name: string;
  rating: number;
  description: string;
  bonus: string;
  bonusAmount: string;
  wager: string;
  minDeposit: string;
  games: number;
  paymentMethods: string[];
  features: string[];
  isExclusive: boolean;
  pros: string[];
  cons: string[];
  licenses: string[];
  established: string;
  withdrawal: string;
  support: string[];
  scores: {
    games: number;
    bonuses: number;
    support: number;
    payments: number;
    mobile: number;
  };
}

const casinoData: Record<number, CasinoDetail> = {
  1: {
    id: 1,
    name: 'Royal Casino',
    rating: 4.8,
    description: 'Royal Casino — это премиальная игровая платформа с богатой коллекцией игр и щедрыми бонусами. Казино работает по лицензии Кюрасао и предлагает игрокам безопасную среду для азартных игр.',
    bonus: 'Приветственный бонус',
    bonusAmount: '500 000₽',
    wager: 'x35',
    minDeposit: '1000₽',
    games: 3500,
    paymentMethods: ['Visa', 'MasterCard', 'СБП', 'Qiwi', 'Яндекс.Деньги'],
    features: ['Лицензия', 'Быстрый вывод', 'Поддержка 24/7'],
    isExclusive: true,
    pros: [
      'Огромный выбор игр от топовых провайдеров',
      'Быстрый вывод средств (до 24 часов)',
      'Круглосуточная поддержка на русском языке',
      'Щедрая программа лояльности',
      'Мобильная версия и приложение'
    ],
    cons: [
      'Высокий минимальный депозит для некоторых методов',
      'Требуется верификация перед первым выводом',
      'Ограничения для некоторых стран'
    ],
    licenses: ['Curacao eGaming License #8048/JAZ'],
    established: '2018',
    withdrawal: '24-48 часов',
    support: ['Live Chat 24/7', 'Email', 'Telegram'],
    scores: {
      games: 95,
      bonuses: 90,
      support: 92,
      payments: 88,
      mobile: 93
    }
  },
  2: {
    id: 2,
    name: 'Golden Palace',
    rating: 4.7,
    description: 'Golden Palace предлагает первоклассный игровой опыт с акцентом на live-казино и криптовалютные платежи. Казино известно своими инновационными промо-акциями.',
    bonus: 'Бонус + фриспины',
    bonusAmount: '300 000₽',
    wager: 'x40',
    minDeposit: '500₽',
    games: 2800,
    paymentMethods: ['Visa', 'MasterCard', 'Qiwi', 'Bitcoin', 'Ethereum'],
    features: ['Лицензия', 'Криптовалюта', 'Live-казино'],
    isExclusive: false,
    pros: [
      'Принимает криптовалюту',
      'Отличная live-казино секция',
      'Низкий минимальный депозит',
      'Регулярные турниры',
      'Программа кэшбэка'
    ],
    cons: [
      'Более высокие требования по отыгрышу',
      'Меньше игровых автоматов',
      'Ограниченная поддержка в выходные'
    ],
    licenses: ['Malta Gaming Authority'],
    established: '2019',
    withdrawal: '12-36 часов',
    support: ['Live Chat', 'Email'],
    scores: {
      games: 88,
      bonuses: 85,
      support: 87,
      payments: 95,
      mobile: 90
    }
  }
};

export default function CasinoReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const casinoId = Number(id) || 1;
  const casino = casinoData[casinoId] || casinoData[1];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={20}
        className={i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-muted'}
      />
    ));
  };

  const overallScore = Math.round(
    (casino.scores.games + casino.scores.bonuses + casino.scores.support + 
     casino.scores.payments + casino.scores.mobile) / 5
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к рейтингу
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">CASINO RATINGS</h1>
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 animate-fade-in">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold">{casino.name}</h1>
                  {casino.isExclusive && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Icon name="Sparkles" size={14} className="mr-1" />
                      Эксклюзив
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(casino.rating)}
                  <span className="text-xl font-bold ml-2">{casino.rating}/5</span>
                  <span className="text-muted-foreground ml-2">Общая оценка: {overallScore}/100</span>
                </div>
                <p className="text-lg text-muted-foreground">{casino.description}</p>
              </div>
              <Card className="w-full md:w-80 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">{casino.bonus}</p>
                    <p className="text-3xl font-bold text-primary mb-1">{casino.bonusAmount}</p>
                    <p className="text-xs text-muted-foreground">+ 200 фриспинов</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6">
                    Играть сейчас
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Мин. депозит: {casino.minDeposit} • Отыгрыш: {casino.wager}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {Object.entries(casino.scores).map(([key, value]) => {
                const labels: Record<string, string> = {
                  games: 'Игры',
                  bonuses: 'Бонусы',
                  support: 'Поддержка',
                  payments: 'Платежи',
                  mobile: 'Мобильная'
                };
                return (
                  <Card key={key} className="text-center animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="relative w-20 h-20 mx-auto mb-3">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-muted/20"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 36}`}
                            strokeDashoffset={`${2 * Math.PI * 36 * (1 - value / 100)}`}
                            className="text-primary transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold">{value}</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium">{labels[key]}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="bonuses">Бонусы</TabsTrigger>
                <TabsTrigger value="games">Игры</TabsTrigger>
                <TabsTrigger value="payments">Платежи</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="ThumbsUp" size={24} className="text-green-600" />
                        Преимущества
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {casino.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="ThumbsDown" size={24} className="text-orange-600" />
                        Недостатки
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {casino.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="X" size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Info" size={24} className="text-primary" />
                      Основная информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Icon name="Calendar" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Год основания</p>
                          <p className="font-semibold">{casino.established}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Вывод средств</p>
                          <p className="font-semibold">{casino.withdrawal}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Icon name="Shield" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Лицензия</p>
                          <p className="font-semibold text-xs">{casino.licenses[0]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Icon name="MessageCircle" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Поддержка</p>
                          <p className="font-semibold text-xs">{casino.support.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bonuses" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-accent border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Gift" size={24} className="text-accent" />
                        Приветственный бонус
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-accent mb-2">{casino.bonusAmount}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        + 200 фриспинов на первый депозит
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Минимальный депозит:</span>
                          <span className="font-semibold">{casino.minDeposit}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Отыгрыш:</span>
                          <span className="font-semibold">{casino.wager}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Срок действия:</span>
                          <span className="font-semibold">30 дней</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Percent" size={24} className="text-primary" />
                        Постоянные акции
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold">Кэшбэк до 20%</p>
                            <p className="text-xs text-muted-foreground">Еженедельный возврат проигрышей</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold">Турниры с призами</p>
                            <p className="text-xs text-muted-foreground">Призовой фонд до 1 000 000₽</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-primary mt-0.5" />
                          <div>
                            <p className="font-semibold">VIP программа</p>
                            <p className="text-xs text-muted-foreground">Персональные бонусы и менеджер</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="games" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Gamepad2" size={24} className="text-primary" />
                      Игровая коллекция
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      В казино доступно более {casino.games.toLocaleString()} игр от ведущих провайдеров
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Icon name="Sparkles" size={32} className="text-primary mx-auto mb-2" />
                        <p className="font-bold text-2xl">2500+</p>
                        <p className="text-xs text-muted-foreground">Слоты</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Icon name="Users" size={32} className="text-primary mx-auto mb-2" />
                        <p className="font-bold text-2xl">150+</p>
                        <p className="text-xs text-muted-foreground">Live Casino</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Icon name="Spade" size={32} className="text-primary mx-auto mb-2" />
                        <p className="font-bold text-2xl">80+</p>
                        <p className="text-xs text-muted-foreground">Настольные</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Icon name="Trophy" size={32} className="text-primary mx-auto mb-2" />
                        <p className="font-bold text-2xl">50+</p>
                        <p className="text-xs text-muted-foreground">Джекпоты</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-semibold mb-3">Топ провайдеры:</p>
                      <div className="flex flex-wrap gap-2">
                        {['NetEnt', 'Microgaming', 'Pragmatic Play', 'Evolution', 'Play\'n GO', 'Yggdrasil', 'Quickspin', 'Red Tiger'].map((provider) => (
                          <Badge key={provider} variant="secondary">{provider}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CreditCard" size={24} className="text-primary" />
                      Платёжные методы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="ArrowDownToLine" size={20} className="text-green-600" />
                          Пополнение счёта
                        </p>
                        <div className="space-y-2">
                          {casino.paymentMethods.map((method) => (
                            <div key={method} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                              <span className="text-sm">{method}</span>
                              <Badge variant="outline" className="text-xs">Мгновенно</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="ArrowUpFromLine" size={20} className="text-blue-600" />
                          Вывод средств
                        </p>
                        <div className="space-y-3">
                          <div className="p-3 bg-muted/30 rounded-lg">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Мин. сумма вывода:</span>
                              <span className="font-semibold">1000₽</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Макс. сумма вывода:</span>
                              <span className="font-semibold">500 000₽/день</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Время обработки:</span>
                              <span className="font-semibold">{casino.withdrawal}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Готовы начать играть?</h3>
                    <p className="text-muted-foreground">
                      Получите эксклюзивный бонус {casino.bonusAmount} + 200 фриспинов
                    </p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6">
                    Играть в {casino.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
