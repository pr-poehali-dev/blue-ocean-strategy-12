import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    title: "Вскрытие квартир",
    description: "Откроем любую входную дверь без повреждений. Выезд за 15 минут в любое время суток.",
    direction: "top",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/5b90d934-34bb-4521-a6c2-cd0775dff95c.jpg",
  },
  {
    title: "Вскрытие автомобилей",
    description: "Профессиональное вскрытие автозамков без царапин на кузове и без повреждения замка.",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/11473709-5eb3-45d8-a0d0-89e2215fb6d3.jpg",
  },
  {
    title: "Вскрытие сейфов",
    description: "Откроем сейф любой сложности и марки. При необходимости заменим замок или отремонтируем.",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/ccac3ef1-6fa5-410e-b072-ea459000d1bd.jpg",
  },
  {
    title: "Врезка и установка замков",
    description: "Установим надёжный замок в дверь квартиры, офиса или гаража. Гарантия на работу.",
    direction: "bottom",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/3ca07b2a-f127-4fa7-a2ef-834323a94d40.jpg",
  },
  {
    title: "Отключение сигнализации",
    description: "Отключу автомобильную сигнализацию, сниму блокировки и иммобилайзерные метки. Без повреждений электроники.",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/98931864-0969-4993-b514-df481f617301.jpg",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
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

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string; image: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left": return "-translate-x-16 opacity-0"
        case "right": return "translate-x-16 opacity-0"
        case "top": return "-translate-y-16 opacity-0"
        case "bottom": return "translate-y-16 opacity-0"
        default: return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms`, height: "clamp(130px, 18vh, 200px)" }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-5">
        <div className="mb-1 flex items-center gap-2">
          <div className="h-px w-5 bg-white/60" />
          <span className="font-mono text-xs text-white/70">0{index + 1}</span>
        </div>
        <h3 className="font-sans text-lg font-light text-white md:text-xl">{service.title}</h3>
        <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/80 md:text-sm">{service.description}</p>
      </div>
    </div>
  )
}