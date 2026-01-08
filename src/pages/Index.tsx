import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Фото', 'Видео', 'Свадьбы', 'События'];

const portfolioItems = [
  {
    id: 1,
    title: 'Свадебная съёмка',
    category: 'Свадьбы',
    type: 'Фото',
    image: 'https://cdn.poehali.dev/files/kGOHCC0OwgDXQAq3R5A2Uw-A7mTrUg4qLYqwhHQH-OxF325qtlDoWw_ThjiKsUtJMjVKdU_kr1Wq_xYdzLqJ3knz.jpg'
  },
  {
    id: 2,
    title: 'Портретная фотосессия',
    category: 'Фото',
    type: 'Фото',
    image: 'https://cdn.poehali.dev/projects/46a83956-210c-4cba-8107-6ad109b8364f/files/27f0f6d9-5227-481e-b1af-f22f5b1512d2.jpg'
  },
  {
    id: 3,
    title: 'Событийное видео',
    category: 'События',
    type: 'Видео',
    image: 'https://cdn.poehali.dev/projects/46a83956-210c-4cba-8107-6ad109b8364f/files/1eeaaa98-9ecd-4f65-ba6b-849f12001608.jpg'
  },
  {
    id: 4,
    title: 'Корпоративная съёмка',
    category: 'События',
    type: 'Фото',
    image: 'https://cdn.poehali.dev/projects/46a83956-210c-4cba-8107-6ad109b8364f/files/27f0f6d9-5227-481e-b1af-f22f5b1512d2.jpg'
  },
  {
    id: 5,
    title: 'Свадебный клип',
    category: 'Свадьбы',
    type: 'Видео',
    image: 'https://cdn.poehali.dev/projects/46a83956-210c-4cba-8107-6ad109b8364f/files/61f6d734-0cad-44b0-b001-91300ab5b0e8.jpg'
  },
  {
    id: 6,
    title: 'Lifestyle съёмка',
    category: 'Фото',
    type: 'Фото',
    image: 'https://cdn.poehali.dev/projects/46a83956-210c-4cba-8107-6ad109b8364f/files/1eeaaa98-9ecd-4f65-ba6b-849f12001608.jpg'
  }
];

const priceItems = [
  {
    title: 'Фотосессия',
    price: 'от 5 000 ₽',
    description: 'Индивидуальная или групповая фотосессия длительностью 1-2 часа',
    features: ['До 50 обработанных фото', 'Выезд в пределах города', 'Срок готовности 7 дней']
  },
  {
    title: 'Видеосъёмка',
    price: 'от 15 000 ₽',
    description: 'Профессиональная видеосъёмка события с полным монтажом',
    features: ['4K качество', 'Цветокоррекция', 'Авторский монтаж', 'Срок готовности 14 дней']
  },
  {
    title: 'Свадебная съёмка',
    price: 'от 30 000 ₽',
    description: 'Полный день съёмки свадьбы: фото + видео',
    features: ['Фото + Видео', 'Два оператора', 'До 200 фото', 'Свадебный клип 10-15 мин', 'Дрон-съёмка']
  }
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'Все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory || item.type === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ВИЗУАЛ
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Портфолио</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Прайс</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Заказать съёмку
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Фотограф & Видеограф
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Запечатлею<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                каждый момент
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная фото и видеосъёмка событий. Создаю истории, которые вы захотите пересматривать снова и снова.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                Смотреть работы
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/20 hover:border-primary/40">
                Связаться
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            {[
              { icon: 'Camera', title: '5+ лет', desc: 'Опыта съёмки' },
              { icon: 'Users', title: '200+', desc: 'Довольных клиентов' },
              { icon: 'Award', title: '50+', desc: 'Наград и признаний' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-8 text-center bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name={stat.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Портфолио
            </h2>
            <p className="text-xl text-muted-foreground">Избранные работы</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'border-primary/20 hover:border-primary/40'
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <Card
                key={item.id}
                className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary/20 backdrop-blur rounded-full text-xs text-primary">
                          {item.type}
                        </span>
                        <span className="px-3 py-1 bg-secondary/20 backdrop-blur rounded-full text-xs text-secondary">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Прайс
            </h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий пакет</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {priceItems.map((item, idx) => (
              <Card 
                key={idx} 
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    {item.price}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">Свяжитесь со мной</p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border animate-scale-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background/50 border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50 border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Телефон</label>
                <Input placeholder="+7 (999) 999-99-99" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем мероприятии или идее съёмки..." 
                  className="bg-background/50 border-border min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg py-6">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>

            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-medium">info@visual.ru</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                  <div className="font-medium">+7 (999) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                  <div className="font-medium">Москва, Россия</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ВИЗУАЛ
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary/50">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary/50">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary/50">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 ВИЗУАЛ. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}