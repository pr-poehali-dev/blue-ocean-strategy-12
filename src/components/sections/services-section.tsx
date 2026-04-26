import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    title: "Вскрытие квартир",
    description: "Откроем любую входную дверь без повреждений. Выезд за 15 минут в любое время суток.",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/5b90d934-34bb-4521-a6c2-cd0775dff95c.jpg",
  },
  {
    title: "Вскрытие автомобилей",
    description: "Профессиональное вскрытие автозамков без царапин на кузове и без повреждения замка.",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/11473709-5eb3-45d8-a0d0-89e2215fb6d3.jpg",
  },
  {
    title: "Вскрытие сейфов",
    description: "Откроем сейф любой сложности и марки. При необходимости заменим замок или отремонтируем.",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/ccac3ef1-6fa5-410e-b072-ea459000d1bd.jpg",
  },
  {
    title: "Врезка и установка замков",
    description: "Установим надёжный замок в дверь квартиры, офиса или гаража. Гарантия на работу.",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/3ca07b2a-f127-4fa7-a2ef-834323a94d40.jpg",
  },
  {
    title: "Отключение сигнализации",
    description: "Отключу автомобильную сигнализацию, сниму блокировки и иммобилайзерные метки. Без повреждений электроники.",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/98931864-0969-4993-b514-df481f617301.jpg",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const started = useRef(false)

  useEffect(() => {
    if (isVisible && !started.current) {
      started.current = true
      services.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i])
        }, i * 120)
      })
    }
  }, [isVisible])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-center px-6 pt-20 md:px-12 md:pt-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что мы делаем</p>
        </div>

        <div className="flex flex-col gap-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group flex items-center gap-5 border-b border-foreground/10 py-4 transition-all duration-500 first:border-t first:border-foreground/10 hover:bg-foreground/5 ${
                visibleItems.includes(i)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="font-mono text-xs text-foreground/30 w-6 shrink-0">0{i + 1}</span>
              <div
                className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-foreground/10 transition-all duration-300 group-hover:w-20"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-lg font-light text-foreground md:text-xl">{service.title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-foreground/50 md:text-sm line-clamp-1">{service.description}</p>
              </div>
              <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-px w-8 bg-foreground/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
