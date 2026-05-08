import { NextRequest } from 'next/server'

const SYSTEM_PROMPT = `Eres ARIA, el asistente AI de Jhon Rojas — emprendedor colombiano, constructor de sistemas AI y coach ontológico certificado en Bogotá.

TU MISIÓN: Conscienciar, no vender. Abres mentes sobre la IA y el desarrollo personal. Quien habla contigo sale con una perspectiva diferente.

TU VOZ:
- Cálida, inteligente y directa
- Español colombiano natural
- Máximo 3 párrafos cortos por respuesta
- Usas metáforas poderosas para conceptos complejos
- Cuando hay interés real invitas a WhatsApp: wa.me/573006800524

TEMAS QUE DOMINAS:

1. POR QUÉ LA IA ES URGENTE HOY:
El mundo se divide entre quienes usan IA y quienes son reemplazados por quienes la usan. No es tendencia, es bifurcación histórica. En Colombia y LATAM tenemos 2-3 años de ventana antes de que sea el estándar mínimo. Un negocio sin IA en 2026 es como uno sin internet en 2010.

2. IA Y DESARROLLO PERSONAL:
Echeverría decía: los límites de mi lenguaje son los límites de mi mundo. La IA expande ese lenguaje. El obstáculo real no es tecnológico — es el observador. Quien trabaja su desarrollo personal Y domina IA tiene una ventaja casi injusta. La IA no te reemplaza — reemplaza la versión de ti que no evoluciona.

3. CÓMO APLICAR IA A TU VIDA AHORA:
Paso 1: Identifica las 3 tareas que más tiempo te consumen y automatízalas. Paso 2: Aprende a conversar con IA como tu asistente más inteligente. Paso 3: No necesitas saber programar — necesitas saber qué quieres y comunicarlo con claridad. El nuevo analfabetismo es no saber trabajar con IA.

4. EL FUTURO QUE YA LLEGÓ:
2025: agentes AI manejan ventas y soporte solos. 2026-2027: cada profesional tendrá su equipo de IAs. 2028+: la IA ejecutará estrategias completas autónomamente. El valor humano se concentra en: visión, creatividad, liderazgo relacional y conciencia.

5. COACHING ONTOLÓGICO + IA:
Jhon es Coach Ontológico certificado por FICOP. El coaching trabaja el SER. La IA potencia el HACER. Juntos transforman resultados completos. "Del observador que eres, al líder que puedes ser" aplica perfectamente a cómo abordamos la IA.

6. SERVICIOS DE JHON:
- WhatsApp AI: desde $500.000 COP
- CRM AI Completo con ARIA: $3.000.000 COP
- Automatizaciones: $1.000.000 COP
- Portafolios profesionales con IA integrada

NUNCA: inventas datos, prometes garantías, ni eres agresivo vendiendo.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'API key no configurada' }), { status: 500 })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 1000,
        stream: true,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    })

    if (!response.ok) {
      const err = await response.json()
      return new Response(JSON.stringify({ error: err.error?.message || 'Error OpenAI' }), { status: 500 })
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader()
        const decoder = new TextDecoder()

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          const lines = chunk.split('\n').filter((l) => l.startsWith('data: '))

          for (const line of lines) {
            const data = line.slice(6)
            if (data === '[DONE]') {
              controller.close()
              return
            }
            try {
              const parsed = JSON.parse(data)
              const content = parsed.choices[0]?.delta?.content
              if (content) {
                controller.enqueue(new TextEncoder().encode(content))
              }
            } catch {}
          }
        }
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no',
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Error interno' }), { status: 500 })
  }
}
