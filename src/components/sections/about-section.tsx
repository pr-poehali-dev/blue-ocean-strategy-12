import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Вскрываем
                <br />
                быстро
                <br />
                <span className="text-foreground/40">и аккуратно</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Мы — команда сертифицированных мастеров с опытом работы более 10 лет. Работаем без выходных и праздников, в любое время суток.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Гарантируем вскрытие без повреждений и полную конфиденциальность. Приедем с официальными документами.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div
              className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
              style={{ transitionDelay: "300ms", height: "clamp(120px, 16vh, 180px)" }}
            >
              <img
                src="https://cdn.poehali.dev/projects/790deb4b-7455-4611-86c6-6c77896e10e7/files/7177fff9-f40d-4112-ac81-457ee05de715.jpg"
                alt="Инструменты мастера"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-3 left-4">
                <p className="font-mono text-xs text-foreground/70">Профессиональный инструмент</p>
              </div>
            </div>

            {[
              { value: "10+", label: "Лет опыта", sublabel: "В замочном деле", direction: "right" },
              { value: "500+", label: "Вскрытий", sublabel: "Выполнено в этом году", direction: "left" },
              { value: "15 мин", label: "Выезд", sublabel: "Среднее время приезда", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${450 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-2xl font-light text-foreground md:text-5xl lg:text-6xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-sm font-light text-foreground md:text-lg">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Вызвать мастера
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(2)}>
            Наши услуги
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}