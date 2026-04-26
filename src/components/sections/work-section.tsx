import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const slides = [
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/5b90d934-34bb-4521-a6c2-cd0775dff95c.jpg",
    title: "Вскрытие входной двери",
    label: "Квартира — без царапин",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/11473709-5eb3-45d8-a0d0-89e2215fb6d3.jpg",
    title: "Вскрытие автомобиля",
    label: "Авто — без повреждений кузова",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/ccac3ef1-6fa5-410e-b072-ea459000d1bd.jpg",
    title: "Вскрытие сейфа",
    label: "Сейф — с сохранением механизма",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/ff5cef40-3f89-492a-942b-9362a63b4070.jpg",
    title: "Вскрытие гаража",
    label: "Гараж — быстрый выезд",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/3ca07b2a-f127-4fa7-a2ef-834323a94d40.jpg",
    title: "Врезка и установка замка",
    label: "Монтаж — гарантия на работу",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/71a062f8-faae-4340-a50a-159ecf5a4dad.jpg",
    title: "Замок высокой секретности",
    label: "Замена механизма",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/7177fff9-f40d-4112-ac81-457ee05de715.jpg",
    title: "Профессиональный инструмент",
    label: "Работаем только с сертифицированным оборудованием",
  },
  {
    url: "https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/51c1ad60-fdfd-43c2-92e8-a56891c21cf3.jpg",
    title: "Установка нового замка",
    label: "Врезка и монтаж",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

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
            Примеры работ
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что мы делаем</p>
        </div>

        <div
          className={`relative transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative overflow-hidden rounded-2xl" style={{ height: "clamp(220px, 40vh, 420px)" }}>
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <p className="font-mono text-xs text-white/70 mb-1">{slide.label}</p>
                  <h3 className="font-sans text-2xl font-light text-white md:text-3xl">{slide.title}</h3>
                </div>
              </div>
            ))}

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/15 backdrop-blur-md transition-all hover:bg-foreground/30"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/15 backdrop-blur-md transition-all hover:bg-foreground/30"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-foreground" : "w-2 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}