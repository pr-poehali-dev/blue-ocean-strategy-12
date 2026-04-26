import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const reviews = [
  {
    name: "Алексей М.",
    date: "Март 2025",
    rating: 5,
    text: "Позвонил в 2 ночи — ключи остались в квартире. Мастер приехал за 12 минут, вскрыл без царапин. Очень профессионально, спасибо!",
    service: "Вскрытие квартиры",
  },
  {
    name: "Елена К.",
    date: "Февраль 2025",
    rating: 5,
    text: "Захлопнулась дверь машины с ключами внутри. Вызвала мастера, приехал быстро, открыл аккуратно. Ни одной царапины на кузове. Рекомендую!",
    service: "Вскрытие автомобиля",
  },
  {
    name: "Дмитрий П.",
    date: "Январь 2025",
    rating: 5,
    text: "Забыли комбинацию от офисного сейфа. Мастер справился за 20 минут, механизм не пострадал. Работа выполнена чисто и без лишних вопросов.",
    service: "Вскрытие сейфа",
  },
  {
    name: "Ольга Н.",
    date: "Апрель 2025",
    rating: 5,
    text: "Заказала врезку нового замка в входную дверь. Мастер пришёл вовремя, всё сделал аккуратно, убрал за собой. Замок работает отлично.",
    service: "Установка замка",
  },
  {
    name: "Сергей В.",
    date: "Март 2025",
    rating: 4,
    text: "Вскрыл гараж быстро и без повреждений. Единственное — чуть позже приехал, чем обещал, но в целом работой доволен. Советую.",
    service: "Вскрытие гаража",
  },
  {
    name: "Наталья Ф.",
    date: "Февраль 2025",
    rating: 5,
    text: "Обращалась уже второй раз. Всегда пунктуально, аккуратно и по адекватной цене. Теперь только к этому мастеру!",
    service: "Вскрытие квартиры",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon
          key={i}
          name="Star"
          size={14}
          className={i <= rating ? "text-yellow-400 fill-yellow-400" : "text-foreground/20"}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [current, setCurrent] = useState(0)

  const visibleCount = 3
  const maxStart = reviews.length - visibleCount
  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxStart, c + 1))
  const visible = reviews.slice(current, current + visibleCount)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Отзывы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что говорят клиенты</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {visible.map((review, i) => (
            <div
              key={current + i}
              className={`flex flex-col justify-between rounded-xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-500 md:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <Stars rating={review.rating} />
                  <span className="font-mono text-xs text-foreground/40">{review.date}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-foreground/80 md:text-base">"{review.text}"</p>
              </div>
              <div className="border-t border-foreground/10 pt-3">
                <p className="font-sans text-sm font-medium text-foreground">{review.name}</p>
                <p className="font-mono text-xs text-foreground/50">{review.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {Array.from({ length: maxStart + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-foreground" : "w-2 bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md transition-all hover:bg-foreground/20 disabled:opacity-30"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>
            <button
              onClick={next}
              disabled={current === maxStart}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md transition-all hover:bg-foreground/20 disabled:opacity-30"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
