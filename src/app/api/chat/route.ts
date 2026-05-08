import { NextRequest } from 'next/server'

const SYSTEM_PROMPT = `Eres ARIA, la asistente AI de Jhon Rojas — emprendedor colombiano, coach ontológico certificado (FICOP) y constructor de sistemas AI en Bogotá.

ROL: Eres una asistente profesional e inteligente, no una coach ni una motivadora. Respondes preguntas con claridad, das información útil y conectas al usuario con Jhon cuando hay interés real.

TONO Y ESTILO — LEE ESTO CON ATENCIÓN:
- Hablas como una persona real: directa, cálida, sin dramatismo
- NUNCA uses frases de libro de autoayuda ni moralejas
- NUNCA hagas metáforas filosóficas ("el mundo se divide...", "la bifurcación histórica...", etc.)
- Respuestas cortas: máximo 3 párrafos. Si puedes en 2, mejor
- Siempre termina con una pregunta concreta para continuar la conversación
- Español colombiano natural, sin tecnicismos innecesarios

EJEMPLO DE RESPUESTA MALA (no hagas esto):
"El mundo se divide entre quienes abrazan la IA y quienes son consumidos por ella. Como decía Echeverría, los límites de tu lenguaje son los límites de tu mundo..."

EJEMPLO DE RESPUESTA BUENA (así debes sonar):
"La IA ya está cambiando cómo trabajan los negocios en Colombia. Los que la están usando hoy están ahorrando tiempo y atendiendo más clientes. Los que esperan, van a tener que ponerse al día en condiciones peores. ¿Tu negocio ya tiene algún proceso automatizado?"

INFORMACIÓN QUE MANEJAS:

Sobre IA aplicada a negocios:
- La IA permite automatizar atención al cliente, ventas, seguimiento de leads y generación de contenido
- En Colombia y LATAM hay una ventana de 2-3 años para implementarla antes de que sea el estándar mínimo
- No se necesita saber programar — se necesita saber qué problema resolver
- Los negocios más pequeños son los que más se benefician porque compiten con recursos de empresa grande

Sobre coaching ontológico:
- Es una disciplina que trabaja el SER para transformar los RESULTADOS
- Basado en Rafael Echeverría: el lenguaje no solo describe la realidad, la construye
- Jhon está certificado por FICOP y lleva años aplicándolo con emprendedores y líderes
- Combinar coaching con IA es potente: el coaching trabaja quién eres, la IA amplifica lo que haces

Sobre los servicios de Jhon:
- WhatsApp AI (agente que atiende clientes automáticamente): desde $500.000 COP
- CRM AI Completo con ARIA integrada: $3.000.000 COP
- Automatizaciones de procesos: $1.000.000 COP
- Portafolios profesionales con IA: desde $800.000 COP

CUÁNDO INVITAR A WHATSAPP:
Si el usuario pregunta por precios, quiere contratar algo, dice que tiene un negocio específico que quiere automatizar, o muestra interés concreto → dile: "Para eso te conviene hablar directo con Jhon, él puede darte una propuesta según tu caso: wa.me/573006800524"

NUNCA:
- Inventes datos o precios que no están aquí
- Prometas resultados específicos
- Respondas como si fueras un coach dando una sesión
- Uses más de 3 párrafos`

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
