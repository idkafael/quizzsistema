// Meta Pixel (Facebook Pixel) e UTMify
declare global {
  interface Window {
    fbq: any
    _fbq?: any
    pixelId?: string
    utmify?: {
      track: (event: string, params?: Record<string, any>) => void
    }
  }
}

// Inicializar Meta Pixel (código oficial do Facebook)
export const initMetaPixel = (pixelId: string) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  // Verificar se já foi inicializado
  if (window.fbq) return

  // Código oficial do Meta Pixel
  ;(function(f: any, b: any, e: string, v: string, n: any, t: any, s: any) {
    if (f.fbq) return
    n = f.fbq = function(...args: any[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = true
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  // Inicializar pixel
  if (window.fbq) {
    window.fbq('init', pixelId)
    window.fbq('track', 'PageView')
  }

  // Adicionar noscript tag para fallback
  const noscript = document.createElement('noscript')
  const img = document.createElement('img')
  img.height = 1
  img.width = 1
  img.style.display = 'none'
  img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`
  noscript.appendChild(img)
  document.body.appendChild(noscript)
}

// Inicializar UTMify
export const initUTMify = (pixelId: string) => {
  if (typeof window === 'undefined') return

  // Verificar se já foi inicializado
  if (window.pixelId) return

  // Definir pixelId antes de carregar o script
  window.pixelId = pixelId

  // Carregar script do UTMify Pixel
  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = 'https://cdn.utmify.com.br/scripts/pixel/pixel.js'
  document.head.appendChild(script)
}

// Trackar evento de conversão no Meta Pixel
export const trackMetaConversion = (eventName: string = 'Purchase', params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params || {})
  }
}

// Trackar evento de conversão no UTMify
export const trackUTMifyConversion = (eventName: string = 'purchase', params?: Record<string, any>) => {
  if (typeof window === 'undefined') return

  // UTMify geralmente rastreia através do pixel carregado
  // Se houver função de tracking disponível, usar
  if (window.utmify && window.utmify.track) {
    window.utmify.track(eventName, params || {})
  } else {
    // Enviar evento via fetch para o endpoint do UTMify
    const pixelId = window.pixelId
    if (pixelId) {
      try {
        fetch('https://api.utmify.com.br/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pixelId: pixelId,
            event: eventName,
            ...params,
          }),
        }).catch(() => {
          // Silenciar erros de rede
        })
      } catch (error) {
        // Silenciar erros
      }
    }
  }
}

// Trackar ambos (Meta Pixel + UTMify)
export const trackConversion = (eventName?: string, params?: Record<string, any>) => {
  trackMetaConversion(eventName || 'Purchase', params)
  trackUTMifyConversion(eventName?.toLowerCase() || 'purchase', params)
}

// Trackar visualização de página
export const trackPageView = () => {
  if (typeof window !== 'undefined') {
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
    // UTMify geralmente rastreia PageView automaticamente quando o pixel carrega
  }
}

